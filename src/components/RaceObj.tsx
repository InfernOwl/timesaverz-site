import React from "react";
import { Button, Image, Popover } from "antd";
import { TrophyOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Standings from "./Standings";
import placeholderRace from "../constants/placeholder_race.json";


type RaceProps = {
    series: any;
    race_obj: any;
    focused?: Boolean;
}

interface LinksObject {
    steam: string;
    epic: string;
    playstation: string;
    xbox: string;
    nintendo: string;
}

const RaceObj = (props: RaceProps) => {

    const content= (data: LinksObject) => {

        let steam = (data.steam !== "") ? <Button type="primary" href={data.steam} target="_blank">Steam</Button>: "";
        let epic = (data.epic !== "") ? <Button type="primary" href={data.epic} target="_blank">Epic</Button>: "";
        let playstation = (data.playstation !== "") ? <Button type="primary" href={data.playstation} target="_blank">Playstation</Button>: "";
        let xbox = (data.xbox !== "") ? <Button type="primary" href={data.xbox} target="_blank">Xbox</Button>: "";
        let nintendo = (data.nintendo !== "") ? <Button type="primary" href={data.nintendo} target="_blank">Nintendo</Button>: "";


        return (
            <>
            <div className="popoverLinks">
                {steam}
                {epic}
                {playstation}
                {xbox}
                {nintendo}
            </div>
            </>
        )

        
    };

    const clickHandler = (mouseEvent: any) => {
        const e: any = mouseEvent.target;
        toggleFocus(e);
    };

    const sweepsWinner = () => {
        if (props.race_obj.standings.finished) {
            return (
                props.race_obj.sweeps_winner
            )
        } else {
            return (
                placeholderRace.sweeps_winner
            )
        }
    }
    
    const toggleFocus = (element: any) => {
        // Handle unfocusing of race_container that is currently focused
        if (element.classList.contains("race_container")) {
            if (element.classList.contains("race_focus") === false) {
                // Remove focus from other elements
                var e = document.getElementsByClassName('race_focus')[0];
                e.classList.toggle("race_focus");
                e.childNodes.forEach((child: any) => {
                    if (!child.className.includes('hor_spacer')) {
                    } else {
                        child.childNodes.forEach((more_child: any) => {
                        })
                    }
                })
    
    
                // Handle focusing of race_container being selected
                element.className = element.className + " race_focus";
                element.childNodes.forEach((child: any) => {
                    if (!child.classList.contains('hor_spacer')) {
                    } else {
                        child.childNodes.forEach((more_child: any) => {
                        })
                    }
                })
            }
        }
    }

    const handleScroll = (e:React.UIEvent<HTMLElement>) => {
        var div = e.currentTarget;
        var transparency = 0;

        transparency = (div.scrollTop / (div.scrollHeight - div.offsetHeight)) * .8;
        div.style.backgroundImage = `linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, ${transparency}), rgb(0, 0, 0, ${transparency}))`;

    }

    const backgroundStyle = {"--background-image": `url(${props.race_obj.background_image})`} as React.CSSProperties;

    return (
        <>
            <div style={backgroundStyle}
              className={props.focused ? "race_container race_focus" : "race_container" } 
              id={"race" + props.series + "_" + props.race_obj.id} onClick={clickHandler}>
                
                <div className="race_vert_title">{props.race_obj.game_title}</div>
                <div className="race_title">{props.race_obj.game_title}</div>
                <div className="race_category">{props.race_obj.run_category}</div>
                
                <div className="parallaxScroll" onScroll={handleScroll}>
                    <div className="parallaxSpacer"></div>
                    <div className="gameSynopsis">
                        <p>{props.race_obj.game_info}</p>
                    </div>
                    <div className="hor_spacer">
                        <Standings started={props.race_obj.standings.started} 
                        finished={props.race_obj.standings.finished} 
                        runners={props.race_obj.standings.runners} 
                        top_time={props.race_obj.standings.top_time}></Standings>
                        <div className="vert_spacer">
                            <Popover content={content(props.race_obj.game_store_link)} trigger="click">
                                <Button className="pageButton"><ShoppingCartOutlined style={{ fontSize: '5vw'}}/></Button>
                            </Popover>
                            <Button className="pageButton" href={props.race_obj.sr_game_link} target="_blank"><TrophyOutlined style={{ fontSize: '5vw'}}/></Button>
                        </div>
                    </div>
                    <div className="hor_spacer sweepsBanner">
                        {//TODO: Add in the StandingsWinner component to make
                         //    seeing who won the series easy at a glance
                        }
                        <a href="/sweepstakes"><Image className="sweepstakesWinner" preview={false} src={sweepsWinner()}></Image></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RaceObj;