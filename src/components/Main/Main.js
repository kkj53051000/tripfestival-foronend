import React from "react";
import "../../css/Main.css";
import { Link } from "react-router-dom";
import MainView from "./MainView";

const Main = () => {

    return(
        <div className="main-wrap">
            <div className="main-select">                
                <Link to="/t" className="main-selct-trip">
                    <span className="main-select-span">여행</span>
                </Link>

                <Link to="/f" className="main-select-festival">
                    <span className="main-select-span">축제</span>
                </Link>
            </div>
                
            <MainView />
        </div>
    );
};

export default Main;