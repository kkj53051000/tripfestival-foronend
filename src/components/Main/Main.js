import React, { useState } from "react";
import "../../css/Main.css";
import { Link } from "react-router-dom";
import MainView from "./MainView";
import MainMenuList from "./MainMenuList";

const Main = () => {

    return(
        <div className="main-wrap">
            <div className="main-select">
                <Link to="/" className="main-select-main" style={{backgroundColor: "#FF9933", color : "white"}}>
                    <span className="main-select-span">메인</span>
                </Link>
                
                <Link to="/t" className="main-selct-trip">
                    <span className="main-select-span">여행</span>
                </Link>

                <Link to="/f" className="main-select-festival">
                    <span className="main-select-span">축제</span>
                </Link>

                <Link to="/f" className="main-select-special">
                    <span className="main-select-span">스페셜</span>
                </Link>
            </div>
                
            <MainView />
        </div>
    );
};

export default Main;