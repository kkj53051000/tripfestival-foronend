import React from "react";
import "../../css/MainTrip.css";
import { Link } from "react-router-dom";

const MainTrip = () => {

    return (
        <div className="main-wrap">
            <div className="main-select">
                <Link to="/" className="main-select-main">
                    <span className="main-select-span">메인</span>
                </Link>
                
                <Link to="/t" className="main-selct-trip"  style={{backgroundColor: "#86E8F8", color : "white"}}>
                    <span className="main-select-span">여행</span>
                </Link>

                <Link to="/f" className="main-select-festival">
                    <span className="main-select-span">축제</span>
                </Link>

                <Link to="/s" className="main-select-special">
                    <span className="main-select-span">스페셜</span>
                </Link>
            </div>

            <Link to="/triparea" className="main-region">
                <span className="main-region-span">지역</span>
            </Link>

            <Link to="/tripnature" className="main-nature-hotspot">
                <span className="main-nature-hotspot-span">자연관광지</span>
            </Link>
    
            <Link to="/tripartificial" className="main-hotspot">
                <span className="main-hotspot-span">인공관광지</span>
            </Link>

        </div>
    );
};

export default MainTrip;