import React from "react";
import "../../css/MainTrip.css";
import { Link } from "react-router-dom";

const MainTrip = () => {
    return(
        <>
            <Link to="/" className="main-region">
                <span className="main-region-span">지역</span>
            </Link>

            <Link to="/" className="main-nature-hotspot">
                <span className="main-nature-hotspot-span">자연관광지</span>
            </Link>
    
            <Link to="/" className="main-hotspot">
                <span className="main-hotspot-span">인공관광지</span>
            </Link>
        </>
    );
};

export default MainTrip;