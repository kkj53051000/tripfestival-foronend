import React from "react";
import "../../css/MainFestival.css";
import { Link } from "react-router-dom";

const MainFestival = () => {
    return(
        <>
            <Link to="/" className="main-category">
                <span className="main-category-span">카테고리</span>
            </Link>

            <Link to="/" className="main-festival-area">
                <span className="main-festival-area">지역</span>
            </Link>
    
            <Link to="/" className="main-month">
                <span className="main-month">지역</span>
            </Link>
        </>
    );
};

export default MainFestival;