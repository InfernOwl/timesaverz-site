import React from "react";
import placeholderRace from "../constants/placeholder_race.json";

const PlaceHolderObj = (props: any) => {

    const clickHandler = (mouseEvent: any) => {
        const e: any = mouseEvent.target;
        toggleFocus(e);
    };
    
    const toggleFocus = (element: any) => {
        // Handle unfocusing of race_container that is currently focused
        if (element.classList.contains("race_container")) {
            if (element.classList.contains("race_focus") === false) {
                // Remove focus from other elements
                var e = document.getElementsByClassName('race_focus')[0];
                if (e !== undefined) {
                    e.classList.toggle("race_focus");
                    e.childNodes.forEach((child: any) => {
                        if (!child.className.includes('hor_spacer')) {
                        } else {
                            child.childNodes.forEach((more_child: any) => {
                            })
                        }
                    })
                }
    
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

    const backgroundStyle = {"--background-image": `url(${placeholderRace.background_image})`} as React.CSSProperties;

    return (
        <>
            <div style={backgroundStyle}
              className={props.focused ? "race_container race_focus" : "race_container" } 
              id={"race1_" + placeholderRace.id} onClick={clickHandler}>
                
                <div className="race_vert_title">{placeholderRace.game_title}</div>
                <div className="ph_title">{placeholderRace.game_image_alt}</div>
            </div>
        </>
    )
}

export default PlaceHolderObj;