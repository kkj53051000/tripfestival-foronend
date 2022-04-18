import React, { useState } from "react";
import "../css/Main.css";
import { Link } from "react-router-dom";

const Main = () => {

    const [isTrip, setIsTrip] = useState(true);

    const onClickTrip = () => {
        setIsTrip(true)
    }

    const onClickFestival = () => {
        setIsTrip(false)
    }


    return (
        <div className="main-wrap">
            <div className="main-select">
                <div className="main-selct-trip" onClick={onClickTrip}>

                </div>

                <div className="main-select-festival" onClick={onClickFestival}>

                </div>
            </div>

            {isTrip ?
            <>
                <div className="main-region">
                    
                </div>
    
                <div className="main-nature-hotspot">
    
                </div>
    
                <div className="main-hotspot">
    
                </div>
            </>
            :
            <div>
            </div>
            }
        </div>
    );
};

export default Main;