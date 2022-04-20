import React, { useState } from "react";
import "../../css/Main.css";
import { Link } from "react-router-dom";
import MainTrip from "./MainTrip";
import MainFestival from "./MainFestival";

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
                    <span className="main-select-span">여행</span>
                </div>

                <div className="main-select-festival" onClick={onClickFestival}>
                    <span className="main-select-span">축제</span>
                </div>
            </div>

            {isTrip ?
            <MainTrip />
            :
            <MainFestival />
            }
        </div>
    );
};

export default Main;