import React from "react";
import "../../css/MainFestival.css";
import { Link } from "react-router-dom";

const MainFestival = () => {
    return(
        <div className="main-wrap">

            <div className="main-select">
                    <Link to="/" className="main-select-main">
                        <span className="main-select-span">메인</span>
                    </Link>
                    
                    <Link to="/t" className="main-selct-trip" >
                        <span className="main-select-span">여행</span>
                    </Link>

                    <Link to="/f" className="main-select-festival" style={{border: "3px solid #FA8686", color : "black"}}>
                        <span className="main-select-span">축제</span>
                    </Link>

                    <Link to="/s" className="main-select-special">
                        <span className="main-select-span">스페셜</span>
                    </Link>
            </div>
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
    );
};

export default MainFestival;