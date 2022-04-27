import React from "react";
import "../../css/MainView.css";

const MainView = () => {
    return (
        <div className="main-view-wrap">
            <div className="main-view-top">
                <span>어디 놀러가요?</span>
            </div>

            <div className="main-trip-title">
                <span>추천 관광지</span>
            </div>

            <div className="main-view-trip">
                <div className="main-view-trip-item" >
                    <div className="main-view-trip-img">
                        <img src="https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg" alt="해운대"/>
                    </div>

                    <span>해운대</span>
                </div>
                


                <div className="main-view-trip-item">
                    
                </div>
                <div className="main-view-trip-item">
                    
                </div>
            </div>

            <div className="main-trip-title">
                <span>진행중인 축제</span>
            </div>

            <div className="main-view-trip">
                <div className="main-view-trip-item">

                </div>
                <div className="main-view-trip-item">
                    
                </div>
                <div className="main-view-trip-item">
                    
                </div>
            </div>
        </div>
    );
};

export default MainView;