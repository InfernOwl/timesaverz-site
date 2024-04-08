import React from "react";
import { Button, Table, TableProps } from "antd";
import { TwitchOutlined, YoutubeOutlined, BilibiliOutlined, PlayCircleOutlined } from "@ant-design/icons";

type StandingProps = {
    started: boolean;
    finished: boolean;
    runners: any;
    top_time: any;
}

interface TableData {
    race?: string;
    hoagie?: string[];
    owl?: string[];
    jay?: string[];
}

interface TotalData {
    person?: string;
    total: number;
}

interface StandingsState {
    tableData: TableData[];
}

const vidType = (vidLink: string) => {
    
    if (vidLink.indexOf("twitch.tv") !== -1) {
        return <a href={vidLink} target="_blank" rel="noreferrer">
            <Button type="primary" shape="round" icon={<TwitchOutlined/>} className="boardButton" style={{backgroundColor: "#1c0925"}}></Button>
        </a>
    } else if (vidLink.indexOf("youtube.com") !== -1 || vidLink.indexOf("youtu.be") !== -1) {
        return <a href={vidLink} target="_blank" rel="noreferrer">
            <Button type="primary" shape="round" icon={<YoutubeOutlined/>} className="boardButton" style={{backgroundColor: "#210101"}}></Button>
        </a>
    } else if (vidLink.indexOf("bilibili") !== -1) {
        return <a href={vidLink} target="_blank" rel="noreferrer">
            <Button type="primary" shape="round" icon={<BilibiliOutlined/>} className="boardButton" style={{backgroundColor: "#010421"}}></Button>
        </a>
    } else {
        return <a href={vidLink} target="_blank" rel="noreferrer">
            <Button type="primary" shape="round" icon={<PlayCircleOutlined/>} className="boardButton" style={{backgroundColor: "gray"}}></Button>
        </a>
    }
}

const TableLabels : TableProps<TableData>['columns'] = [
    
    {
        title: '',
        dataIndex: 'race',
        key: 'race'

    },
    {
        title: 'Hoagiepops',
        dataIndex: 'hoagie',
        key: 'hoagie',
        render: (tags:any) => (
            <>
                {tags.map((key: any, val:any) => {
                    if (val === 0) {
                        if(Number(tags[0]) === 1) {
                            return (  
                                <p className=" boardItem bronzePlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        } else if (Number(tags[0]) === 2) {
                            return (  
                                <p className="boardItem silverPlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        } else {
                            return (  
                                <p className="boardItem goldPlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        }
                    } else {
                        return (
                            <></>
                        )
                    }
                })}
            </>
        )
    },
    {
        title: 'InfernOwl',
        dataIndex: 'owl',
        key: 'owl',
        render: (tags: any) => (
            <>
                {tags.map((key: any, val:any) => {
                    if (val === 0) {
                        if(Number(tags[0]) === 1) {
                            return (  
                                <p className="boardItem bronzePlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        } else if (Number(tags[0]) === 2) {
                            return (  
                                <p className="boardItem silverPlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        } else {
                            return (  
                                <p className="boardItem goldPlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        }
                    } else {
                        return (
                            <></>
                        )
                    }
                })}
            </>
        )
    },
    {
        title: 'LSJay',
        dataIndex: 'jay',
        key: 'jay',
        render: (tags: any) => (
            <>
                {tags.map((key: any, val:any) => {
                    if (val === 0) {
                        if(Number(tags[0]) === 1) {
                            return (  
                                <p className="boardItem bronzePlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        } else if (Number(tags[0]) === 2) {
                            return (  
                                <p className="boardItem silverPlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        } else {
                            return (  
                                <p className="boardItem goldPlace">
                                    {tags[1]}
                                    {tags[2] !== "" ? vidType(tags[2]) : <></>}
                                </p>
                            )
                        }
                    } else {
                        return (
                            <></>
                        )
                    }
                })}
            </>
        )
    }
]

const Standings = (props: StandingProps) => {
    
    var tableDataStuff: TableData[] = [];
    var totalData: TotalData[] = [];
    var race1Row: TableData = {};
    var race2Row: TableData = {};
    var race3Row: TableData = {};

    // Standings State
    // Re-renders table when changed
    const [standingsState, setStandingsState] = React.useState<StandingsState>(
        {
            tableData: []
        }
    );

    // Format score totals to fit table layout
    const tableTotals = (totalArr: TotalData[]) => {
        let totals = totalArr.map(a => a.total);
        let totalTableData: TableData = {};

        totalTableData.race = "Total:";

        for (let i = 0; i < totalArr.length; i++) {
            if (props.finished) {
                if (totalArr[i].person === props.top_time.runner) {
                    totalArr[i].total += 2;
                }

                totals = totalArr.map(a => a.total);
            }

            if (totalArr[i].total >= Math.max(...totals)) {
                switch(totalArr[i].person) {
                    case "Hoagiepops":
                        totalTableData.hoagie = ['3', totalArr[i].total.toString(), ""];
                        break;
                    case "InfernOwl":
                        totalTableData.owl = ['3', totalArr[i].total.toString(), ""];
                        break;
                    case "LSJay":
                        totalTableData.jay = ['3', totalArr[i].total.toString(), ""];
                        break;
                    default:
                        //do nothing
                }
            } else if (totalArr[i].total === Math.min(...totals)) {
                switch(totalArr[i].person) {
                    case "Hoagiepops":
                        totalTableData.hoagie = ['1', totalArr[i].total.toString(), ""];
                        break;
                    case "InfernOwl":
                        totalTableData.owl = ['1', totalArr[i].total.toString(), ""];
                        break;
                    case "LSJay":
                        totalTableData.jay = ['1', totalArr[i].total.toString(), ""];
                        break;
                    default:
                        //do nothing
                }
            } else {
                switch(totalArr[i].person) {
                    case "Hoagiepops":
                        totalTableData.hoagie = ['2', totalArr[i].total.toString(), ""];
                        break;
                    case "InfernOwl":
                        totalTableData.owl = ['2', totalArr[i].total.toString(), ""];
                        break;
                    case "LSJay":
                        totalTableData.jay = ['2', totalArr[i].total.toString(), ""];
                        break;
                    default:
                        //do nothing
                }
            }
        }

        return totalTableData;
    }

    for (let runner = 0; runner < props.runners.length; runner++) {
        let total = 0;
        for (let run = 0; run < props.runners[runner].race_results.length; run++) {
            // Add score to total
            total += props.runners[runner].race_results[run].points;
            // Add array of relevant values to row data
            switch (runner) {
                case 0:
                    race1Row.race = "Race 1:";
                    switch (run) {
                        case 0:
                            race1Row.hoagie = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        case 1:
                            race2Row.hoagie = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        case 2:
                            race3Row.hoagie = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        default:
                            //Do Nothing
                    }
                    break;
                case 1:
                    race2Row.race = "Race 2:";
                    switch (run) {
                        case 0:
                            race1Row.owl = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        case 1:
                            race2Row.owl = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        case 2:
                            race3Row.owl = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        default:
                            //Do Nothing
                    }
                    break;
                case 2:
                    race3Row.race = "Race 3:";
                    switch (run) {
                        case 0:
                            race1Row.jay = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        case 1:
                            race2Row.jay = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        case 2:
                            race3Row.jay = [props.runners[runner].race_results[run].points, props.runners[runner].race_results[run].time, props.runners[runner].race_results[run].link];
                            break;
                        default:
                            //Do Nothing
                    }
                    break;
                default:
                    //Do Nothing
            }
        }

        switch (runner) {
            case 0:
                totalData.push({'person':'Hoagiepops', 'total':total});
                break;
            case 1:
                totalData.push({'person':'InfernOwl', 'total':total});
                break;
            case 2:
                totalData.push({'person':'LSJay', 'total':total});
                break;
            default:
                //Do Nothing
        }
    }

    tableDataStuff.push(race1Row);
    tableDataStuff.push(race2Row);
    tableDataStuff.push(race3Row);
    tableDataStuff.push(tableTotals(totalData));

    
    if (standingsState.tableData.length !== tableDataStuff.length) {
        setStandingsState({tableData: tableDataStuff});
    }

    return (
        <>
            <div className="standings_container">
            <Table className="sr_leaderboard" dataSource={standingsState.tableData} columns={TableLabels}></Table>
            </div>
        </>
    );
}

export default Standings;