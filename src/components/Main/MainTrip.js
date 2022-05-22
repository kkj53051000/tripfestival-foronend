import React from "react";
import "../../css/main/MainTrip.css";
import { Link } from "react-router-dom";

const MainTrip = () => {

    return (
        <div className="main-wrap">
            <div className="main-select">                
                <Link to="/t" className="main-selct-trip"  style={{border: "3px solid #86E8F8", color : "black"}}>
                    <span className="main-select-span">여행</span>
                </Link>

                <Link to="/f" className="main-select-festival">
                    <span className="main-select-span">축제</span>
                </Link>
            </div>

            <div className="main-trip-menu-list">
                <Link to="/triparea" className="main-menu">
                    <span className="main-region-span">지역</span>
                </Link>

                <Link to="/tripnature" className="main-menu">
                    <span className="main-nature-hotspot-span">자연관광지</span>
                </Link>
        
                <Link to="/tripartificial" className="main-menu">
                    <span className="main-hotspot-span">인공관광지</span>
                </Link>

                <Link to="/tripspecial" className="main-menu">
                    <span className="main-hotspot-span">스페셜</span>
                </Link>
            </div>

        </div>
    );
};

export default MainTrip;