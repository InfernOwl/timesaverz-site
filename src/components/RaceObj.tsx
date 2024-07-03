import React from "react";
import { Button, Image, Popover } from "antd";
import { TrophyOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Standings from "./Standings";
import placeholderRace from "../constants/placeholder_race.json";
import { useState } from "react";

import { generateClient } from "aws-amplify/api";
import { getGame, listTopTimes, raceResultsByGameID } from "../graphql/queries";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";

Amplify.configure(config);

const client = generateClient();
var currentTopTimes: any;


type RaceProps = {
    series: any;
    race_obj: any;
    focused?: Boolean;
}

interface LinksObject {
    steam?: string;
    epic?: string;
    playstation?: string;
    xbox?: string;
    nintendo?: string;
}

const topTimeGrab = async () => {
    currentTopTimes = await client.graphql({
        query: listTopTimes
    })
}
topTimeGrab();

const RaceObj = (props: RaceProps) => {

    const [gameData, setGameData] = useState<any>();
    const [standingsData, setStandingsData] = useState<any>();

    const gameGrab = async () => {
        const currentGameData = await client.graphql({
            query: getGame,
            variables: { id: props.race_obj.gameID }
        })

        setGameData(currentGameData.data.getGame);

    }

    if (gameData === undefined) {
        gameGrab();
    }

    const standingsGrab = async () => {
        const currentStandingData = await client.graphql({
            query: raceResultsByGameID,
            variables: { gameID: props.race_obj.gameID }
        });

        setStandingsData(currentStandingData.data.raceResultsByGameID.items);
    }

    if (standingsData === undefined) {
        standingsGrab();
    }

    const content = (data: LinksObject) => {

        let steam = (data.steam !== "" && data.steam !== null) ? <Button type="primary" href={data.steam} target="_blank">Steam</Button> : "";
        let epic = (data.epic !== "" && data.epic !== null) ? <Button type="primary" href={data.epic} target="_blank">Epic</Button> : "";
        let playstation = (data.playstation !== "" && data.playstation !== null) ? <Button type="primary" href={data.playstation} target="_blank">Playstation</Button> : "";
        let xbox = (data.xbox !== "" && data.xbox !== null) ? <Button type="primary" href={data.xbox} target="_blank">Xbox</Button> : "";
        let nintendo = (data.nintendo !== "" && data.nintendo !== null) ? <Button type="primary" href={data.nintendo} target="_blank">Nintendo</Button> : "";


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
        var today = new Date();
        var end_date = new Date(props.race_obj.ended);

        if (end_date < today) {
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

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        var div = e.currentTarget;
        var transparency = 0;

        transparency = (div.scrollTop / (div.scrollHeight - div.offsetHeight)) * .8;
        div.style.backgroundImage = `linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, ${transparency}), rgb(0, 0, 0, ${transparency}))`;

    }

    const backgroundStyle = { "--background-image": `url(${gameData ? gameData.background_image : ""})` } as React.CSSProperties;

    var today = new Date();
    var started_date = new Date(props.race_obj.started);
    const hasStarted = today > started_date;

    const standingObject = {
        started: hasStarted,
        finished: (props.race_obj.ended === null) ? false : true,
        runners: (standingsData !== undefined) ? standingsData : [],
        top_time: (currentTopTimes.data.listTopTimes.items).length !== 0 ? currentTopTimes.data.listTopTimes.items.filter(
            function (entry: any) {
                return entry.topTimeGameId === props.race_obj.gameID
            }) :
            [{
                runner: "bitch",
                time: "also"
            }]
    }

return (
    <>
        <div style={backgroundStyle}
            className={props.focused ? "race_container race_focus" : "race_container"}
            id={"race 1_" + props.race_obj.id} onClick={clickHandler}>

            <div className="race_vert_title">{(gameData !== undefined) ? gameData.game_title : ""}</div>
            <div className="race_title">{gameData ? gameData.game_title : ""}</div>
            <div className="race_category">{gameData ? gameData.run_category : ""}</div>

            <div className="parallaxScroll" onScroll={handleScroll}>
                <div className="parallaxSpacer"></div>
                <div className="gameSynopsis">
                    <p>{gameData ? gameData.game_info : ""}</p>
                </div>
                <div className="hor_spacer">
                    <Standings {...standingObject}></Standings>
                    <div className="vert_spacer">
                        <Popover content={content(gameData ? gameData.GameStoreLink : { steam: "" })} trigger="click">
                            <Button className="pageButton"><ShoppingCartOutlined style={{ fontSize: '5vw' }} /></Button>
                        </Popover>
                        <Button className="pageButton" href={gameData ? gameData.sr_game_link : ""} target="_blank"><TrophyOutlined style={{ fontSize: '5vw' }} /></Button>
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