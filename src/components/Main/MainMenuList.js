import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/MainMenuList.css";

const MainMenuList = ({value}) => {

    const [isMain, setIsMain] = useState(false)

    const [isTrip, setIsTrip] = useState(false)

    const [isFestival, setIsFestival] = useState(false)

    const [isSpecial, setIsSpecial] = useState(false);

    const onClickMain = () => {
        setIsMain(true);
        setIsTrip(false);
        setIsFestival(false);
        setIsSpecial(false);
    }

    const onClickTrip = () => {
        setIsMain(false);
        setIsTrip(true);
        setIsFestival(false);
        setIsSpecial(false);
    }
   

    const onClickFestival = () => {
        setIsMain(true);
        setIsTrip(false);
        setIsFestival(false);
        setIsSpecial(false);

    }

    const onClickSpecial = () => {
        setIsMain(true);
        setIsTrip(false);
        setIsFestival(false);
        setIsSpecial(false);
    }

    useEffect = () => {
        if(value === "main") {
            setIsMain(true)

        }
        if(value === "trip") {
            setIsTrip(true)
            isMain(false)
        }

    }
    
    return (
        <div className="main-select">
            <Link to="/" className="main-select-main" style={{backgroundColor: "#ff7f00", color : "white"}}>
                <span className="main-select-span">메인</span>
            </Link>
            
            <Link to="/t" className="main-selct-trip">
                <span className="main-select-span">여행</span>
            </Link>

            <Link to="/f" className="main-select-festival">
                <span className="main-select-span">축제</span>
            </Link>

            <Link to="/s" className="main-select-special">
                <span className="main-select-span">스페셜</span>
            </Link>
        </div>
    );
};

export default MainMenuList;