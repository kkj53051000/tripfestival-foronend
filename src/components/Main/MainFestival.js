import React from "react";
import "../../css/main/MainFestival.css";
import { Link } from "react-router-dom";

const MainFestival = () => {
    return(
        <div className="main-wrap">

            <div className="main-select">                    
                    <Link to="/t" className="main-selct-trip" >
                        <span className="main-select-span">여행</span>
                    </Link>

                    <Link to="/f" className="main-select-festival" style={{border: "3px solid #FA8686", color : "black"}}>
                        <span className="main-select-span">축제</span>
                    </Link>
            </div>
                <div className="main-festival-menu-list">
                    <Link to="/festivalarea" className="main-area">
                        <span className="main-festival-area">지역</span>
                    </Link>

                    <Link to="/festivalcategory" className="main-category">
                        <span className="main-category-span">카테고리</span>
                    </Link>
            
                    <Link to="/festivalmonth" className="main-month">
                        <span className="main-month-month">월별</span>
                    </Link>
                </div>
        </div>
    );
};

export default MainFestival;