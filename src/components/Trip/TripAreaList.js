import React from "react";
import "../../css/TripArea.css";

const TripAreaList = () => {
    
    return (
        <div className="trip-area-wrap">
            <div className="trip-area-select">
                <div className="title">
                    지역
                </div>

                <div className="one">
                    <div class="style">
                        <select>
                            <option>전체</option>
                            <option> 선택 2 </option>
                            <option> 선택 3 </option>
                            <option> 선택 4 </option>
                            <option> 선택 5 </option>
                        </select>
                    </div>
                </div>

                <div className="two">
                    <div class="style">
                        <select>
                            <option>전체</option>
                            <option> 선택 2 </option>
                            <option> 선택 3 </option>
                            <option> 선택 4 </option>
                            <option> 선택 5 </option>
                        </select>
                    </div>
                </div>
                <div className="btn">
                    <button>검색</button>
                </div>
            </div>

            <div className="trip-area-list">
                <div className="trip-area">
                    <img src="https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg" />

                    <div>
                        <span className="title">해운대</span>
                        <div className="hashtag-wrap">
                            <span className="hashtag">#부산</span>
                            <span className="hashtag">#해수욕장</span>
                        </div>
                    </div>
                </div>
                <div className="region-regionList-region">

                </div>
            </div>
        </div>
    );
};

export default TripAreaList;