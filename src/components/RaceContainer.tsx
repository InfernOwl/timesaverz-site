import React from "react";
import RaceObj from "./RaceObj";
import PlaceHolderObj from "./PlaceHolderObj";

type RaceProps = {
    series: any;
    race_obj: any;
    focused?: Boolean;
}

const RaceContainer = (props: RaceProps) => {
    var startedDate = new Date(props.race_obj.started);
    var today = new Date();

    // No longer hiding future games
    // Removing code to add placeholder race object
    /*
    if (startedDate === null || (startedDate < today || props.race_obj.active) ) {
        return (
            <>
                <RaceObj series={props.series} race_obj={props.race_obj} focused={props.focused}></RaceObj>
            </>
        )
    } else {
        return (
            <>
                <PlaceHolderObj data={props}></PlaceHolderObj>
            </>
        )
    }
    */

    return (
        <>
            <RaceObj series={props.series} race_obj={props.race_obj} focused={props.focused}></RaceObj>
        </>
    )
};

export default RaceContainer;