import React, { useMemo} from "react";
import { Button, Popover } from "antd";
import { TwitchOutlined, YoutubeOutlined, BilibiliOutlined, PlayCircleOutlined } from "@ant-design/icons";
import '../styles/BarGraph.css';

type BarContainerProps = {
    name: string;
    race_results: any;
}

const BarContainer = (props: BarContainerProps) => {

    const content= (data: any) => {
        let placement = "";
        
        switch(data.points) {
            case 3:
                placement = "Placement: 1st";
                break;
            case 2:
                placement = "Placement: 2nd";
                break;
            case 1:
                placement = "Placement: 3rd";
                break;
            default:
                placement = "";
                break;
        }
        
        if (data.link.indexOf("twitch.tv") !== -1) {
            return (
                <div>
                    <p>{placement}</p>
                    <p>Time: {data.time}</p>
                    <div className="popoverVod">
                        <p>VoD: </p>
                        <a href={data.link} target="_blank" rel="noreferrer">
                            <Button type="primary" shape="round" icon={<TwitchOutlined/>}></Button>
                        </a>
                    </div>
                </div>
            );
        } else if (data.link.indexOf("youtube.com") !== -1 || data.link.indexOf("youtu.be") !== -1) {
            return (
                <div>
                    <p>{placement}</p>
                    <p>Time: {data.time}</p>
                    <div className="popoverVod">
                        <p>VoD: </p>
                        <a href={data.link} target="_blank" rel="noreferrer">
                            <Button type="primary" shape="round" icon={<YoutubeOutlined/>}></Button>
                        </a>
                    </div>
                </div>
            )
        } else if (data.link.indexOf("bilibili") !== -1) {
            return (
                <div>
                    <p>{placement}</p>
                    <p>Time: {data.time}</p>
                    <div className="popoverVod">
                        <p>VoD: </p> 
                        <a href={data.link} target="_blank" rel="noreferrer">
                            <Button type="primary" shape="round" icon={<BilibiliOutlined/>}></Button>
                        </a>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>{placement}</p>
                    <p>Time: {data.time}</p>
                    <div className="popoverVod">
                        <p>VoD: </p>
                        <a href={data.link} target="_blank" rel="noreferrer">
                            <Button type="primary" shape="round" icon={<PlayCircleOutlined/>}></Button>
                        </a>
                    </div>
                </div>
            )
        }
    };

    const barItems = useMemo(() => {
        let highestValue = 10;
    
        // calculate "barPercentage" using the "highestValue" to construct the bar items
        return props.race_results.map((item: any) => ({
          barPercentage: `${Math.round((item.points / highestValue) * 100)}%`
        }));
      }, [props]);

    return (
        <>
            <div className="barDataHolder">
                {
                    props.race_results.map((info: any, val:any) => {
                        if (info !== 0) {
                            if (barItems[val].barPercentage !== "0%") {
                                return (
                                    <Popover content={content(info)} title={`Race #${val + 1}`} trigger="click">
                                        <div key={val} className={`bar race_${val + 1}`} style={{ height: barItems[val].barPercentage}}></div>
                                    </Popover>
                                )
                            } else {
                                //document.getElementsByClassName(`bar race_${val}`)[0].classList.add("lastBar");
                                for (let item = 0; item < document.getElementsByClassName(`race_${val}`).length; item++) {
                                    console.log(document.getElementsByClassName(`race_${val}`)[item].classList.contains('lastBar'))
                                    if (!document.getElementsByClassName(`race_${val}`)[item].classList.contains('lastBar')) {
                                        document.getElementsByClassName(`race_${val}`)[item].classList.toggle('lastBar');
                                    }
                                }

                                return (
                                    <></>
                                )
                            }
                        } else {
                            return (
                                <></>
                            )
                        }
                    })
                }
            </div>
            <div className="barLabel">{props.name}</div>
        </>
    )
}

export default BarContainer;