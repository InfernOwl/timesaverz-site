import React from "react";
import Series from "./SeriesContainer";
import seriesJSON from "../constants/series.json";

const Body = () => {

    return (
        <>
            {
                Object.entries(seriesJSON.series).map((key: any, val: any) => {
                    if (key[1].series_id === "1") {
                        return (
                            <Series key={val.toString()} series_id={seriesJSON.series[val].series_id} races={seriesJSON.series[val]}></Series>
                        )
                    } else {
                        return (
                            <Series key={val.toString()} series_id={seriesJSON.series[val].series_id} races={seriesJSON.series[val]}></Series>
                        )
                    }
                })
            }
        </>
    )
};

export default Body;