import React from "react";
import Series from "./SeriesContainer";
import { useState } from "react";

import { generateClient } from "aws-amplify/api";
import { listSeries, racesBySeriesID } from "../graphql/queries";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";

Amplify.configure(config);

const client = generateClient();

const Body = () => {

    const [seriesData, setSeriesList] = useState<any>();
    const [raceData, setRaceList] = useState<any>();

    // Get list of all series
    const seriesGrab = async () => {
        const currentSeriesData = await client.graphql({
            query: listSeries
        })

        setSeriesList(currentSeriesData.data.listSeries.items)
    }

    if (seriesData === undefined) {
        seriesGrab();
    }

    // Using series id get list of races in series
    const raceGrab = async () => {
        const currentRaces = await client.graphql({
            query: racesBySeriesID,
            variables: {
                seriesID: seriesData[seriesData.length - 1].id
            }
        })


        setRaceList(currentRaces.data.racesBySeriesID.items);
    }

    if (seriesData !== undefined && raceData === undefined) {
        raceGrab();
    }

    // Sort the queried race data by "started" date in ascending order
    // (oldest to newest race)
    if (raceData !== undefined) {
        raceData.sort(function (a: any, b: any) {
            if (a !== undefined && b !== undefined) {
                var aDate = new Date(a.started);
                var bDate = new Date(b.started);
                
                return +aDate - +bDate;
            }
        });
    }

    return (
        <>
            {
                // Object.entries(seriesData).map((key: any, val: any) => {
                //     if (val === seriesData.length - 1) { // TODO: change this logic to account for multiple series'
                //         return (
                //             <Series key={val.toString()} series_id={key} races={raceData}></Series>
                //         )
                //     } else {
                //         return (
                //             <Series key={val.toString()} series_id={seriesJSON.series[val].series_id} races={seriesJSON.series[val]}></Series>
                //         )
                //     }
                // })

                <Series series_id={seriesData ? seriesData[0].title : ""} races={raceData ? raceData : ""}></Series>
            }
        </>
    )
};

export default Body;