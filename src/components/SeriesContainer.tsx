import React from "react";
import RaceContainer from './RaceContainer';
import '../styles/Race.css';

type seriesProps =  {
    series_id?: string;
    races?: any;
}

const Series = (props: seriesProps) => {

    return (
        <>
                <div className="series_container" id={props.series_id}>
                {
                    Object.entries(props.races.races).map((key: any, val) => {
                        if (key[1].id === "1") {
                            return (
                                <RaceContainer key={val.toString()} series={props.series_id} focused={true} race_obj={key[1]} ></RaceContainer>
                            )
                        } else {
                            return (
                                <RaceContainer key={val.toString()} series={props.series_id} race_obj={key[1]} ></RaceContainer>
                            )
                        } 
                    })
                }
                </div>
        </>
    )
};

export default Series;