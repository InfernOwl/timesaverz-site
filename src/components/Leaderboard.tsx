import React from "react";
import axios from "axios";// API call library
import { Table } from "antd";
import { Button } from "antd";
import { TwitchOutlined, YoutubeOutlined, BilibiliOutlined, PlayCircleOutlined } from "@ant-design/icons";

type SRPost = {
    data: any;
}

type LeaderboardProps = {
    gameId: string;
    catId: string;
    gameVariables: string;
}

interface User {
    id: string;
    name: string;
}

interface TableData {
    place: number;
    name: string;
    time: string;
    date: string;
    video: string;
}

const TableLabels = [
    {
        title: 'Place',
        dataIndex: 'place',
        key: 'place'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'Video',
        dataIndex: 'video',
        key: 'video',
        render: (link: string) => {
            if (link.indexOf("twitch.tv") !== -1) {
                return <a href={link} target="_blank" rel="noreferrer">
                    <Button type="primary" shape="round" icon={<TwitchOutlined/>}></Button>
                </a>
            } else if (link.indexOf("youtube.com") !== -1 || link.indexOf("youtu.be") !== -1) {
                return <a href={link} target="_blank" rel="noreferrer">
                    <Button type="primary" shape="round" icon={<YoutubeOutlined/>}></Button>
                </a>
            } else if (link.indexOf("bilibili") !== -1) {
                return <a href={link} target="_blank" rel="noreferrer">
                    <Button type="primary" shape="round" icon={<BilibiliOutlined/>}></Button>
                </a>
            } else {
                return <a href={link} target="_blank" rel="noreferrer">
                    <Button type="primary" shape="round" icon={<PlayCircleOutlined/>}></Button>
                </a>
            }
        }
    },
]

interface LeaderboardState {
    tableData: TableData[];
    userTable: User[];
}

const Leaderboard = (props:LeaderboardProps) => {

    // Leaderboard State
    const [leaderboardState, setLeaderboardState] = React.useState<LeaderboardState>(
        {
            tableData: [],
            userTable: []
        }
    );

    // Placeholder var used to properly assign state value
    // Actual variable you want is "posts"
    let defaultSRPost: SRPost;
    let tempTableData: TableData[] = [];
    let tempUserData: User[] = [];

    // Utility function to change seconds into a readable time string
    const secondsToHms = (d:number) => {
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + ":" : "";
        var mDisplay = m > 0 ? m + ":" : "";
        var sDisplay = s > 0 ? s : "";
        return hDisplay + mDisplay + sDisplay; 
    }

    // Populate tempTableData variable with proper information, then push all accrued leaderboard
    // API data into state, forcing a re-render
    const fillTableData = () => {

        let dataHolder = defaultSRPost.data.runs;

        for (let item in dataHolder) {
            let newRun = {} as TableData;
            let runnerObj = tempUserData.find(runner => runner.id === dataHolder[item].run.players[0].id);
            let timeHolder = new Date(dataHolder[item].run.date);
           
            newRun.place = dataHolder[item].place;
            newRun.name = typeof runnerObj != "undefined" ? runnerObj.name : "UNFOUND";
            newRun.time = secondsToHms(dataHolder[item].run.times.primary_t);
            newRun.date = timeHolder.toLocaleDateString('en-US');
            newRun.video = dataHolder[item].run.videos ? dataHolder[item].run.videos.links[0].uri : "";

            // Only push to tempTableData if not already there
            if (!tempTableData.some((currData: TableData) => JSON.stringify(currData) === JSON.stringify(newRun))) {
                tempTableData.push(newRun);
            }
        }

        // TODO: Change check to be for tableData values rather than just length of array
        if (leaderboardState.tableData.length !== tempTableData.length) {
            setLeaderboardState(
                {
                    tableData: tempTableData,
                    userTable: tempUserData
                }
            );
        }
        
    }

    const fillUserTable = async () => {

        let usersParsed: boolean = false;

        // Loop over found api response and do secondary api call to fill user table
        for (let entry in defaultSRPost.data.runs) {
            if (+entry !== defaultSRPost.data.runs.length - 1) {
                await axios.get<SRPost>(`https://www.speedrun.com/api/v1/users/${defaultSRPost.data.runs[entry].run.players[0].id}`)
                .then(response => {
                    // Take User Response and push to tempUserData
                    let newUser = {} as User;
                    newUser.id = response.data.data.id;
                    newUser.name = response.data.data.names.international;

                    // Only push to tempUserData if not already there
                    if (!tempUserData.some((currData: User) => JSON.stringify(currData) === JSON.stringify(newUser))) {
                        tempUserData.push(newUser);
                    };
                })
                .catch(ex => {
                    const error = ex.response.status === 404 ? "Resource Not Found" : "An Unexpected Error Has Occured";
                    // Log the error
                    console.log(error);
                })
            } else {
                await axios.get<SRPost>(`https://www.speedrun.com/api/v1/users/${defaultSRPost.data.runs[entry].run.players[0].id}`)
                .then(response => {
                    // Take User Response and push to tempUserData
                    let newUser = {} as User;
                    newUser.id = response.data.data.id;
                    newUser.name = response.data.data.names.international;

                    // Only push to tempUserData if not already there
                    if (!tempUserData.some((currData: User) => JSON.stringify(currData) === JSON.stringify(newUser))) {
                        tempUserData.push(newUser);
                    };
                })
                .catch(ex => {
                    const error = ex.response.status === 404 ? "Resource Not Found" : "An Unexpected Error Has Occured";
                    // Log the error
                    console.log(error);
                })

                usersParsed = true;
            }
        }

        if (usersParsed) {
            fillTableData();
        }
    }

    // API call to get leaderboard information
    axios.get<SRPost>(`https://www.speedrun.com/api/v1/leaderboards/${props.gameId}/category/${props.catId}?${props.gameVariables}top=10`)
    .then(response => {
        // Throw response into SRPost to be held and iterated over
        defaultSRPost = response.data;
    })
    .catch(ex => {
        const error = ex.response.status === 404 ? "Resource Not Found" : "An Unexpected Error Has Occured";
        // Console.log the error
        console.log(error);
    })
    .finally(() => {
        fillUserTable();
    });

    return (
        <>
            <Table className="sr_leaderboard" dataSource={leaderboardState.tableData} columns={TableLabels}></Table>
        </>
    )

}

export default Leaderboard;