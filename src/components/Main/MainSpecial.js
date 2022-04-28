import React from "react";
import "../../css/MainSpecial.css";
import { Link } from "react-router-dom";

const MainSpecial = () => {
    return(
        <div className="main-special-wrap">
             <div className="main-select">
                <Link to="/" className="main-select-main">
                    <span className="main-select-span">메인</span>
                </Link>
                
                <Link to="/t" className="main-selct-trip">
                    <span className="main-select-span">여행</span>
                </Link>

                <Link to="/f" className="main-select-festival">
                    <span className="main-select-span">축제</span>
                </Link>

                <Link to="/f" className="main-select-special" style={{backgroundColor: "#F3F44C", color : "black"}}>
                    <span className="main-select-span">스페셜</span>
                </Link>
            </div>

            <div className="main-special-item">
                <img src="https://upload.wikimedia.org/wikipedia/ko/e/ee/%EB%AF%B8%EC%89%90%EB%A6%B0_%EA%B0%80%EC%9D%B4%EB%93%9C_%EC%84%9C%EC%9A%B8_%ED%91%9C%EC%A7%80.jpg" />


                <div className="title-wrap">
                    <span className="title">미슐랭 가이드</span>
                </div>
            </div>
        </div>
    );
};

export default MainSpecial;