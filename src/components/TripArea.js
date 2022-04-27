import React from "react";
import "../css/Region.css";

const TripArea = () => {
    
    return (
        <div className="region-wrap">
            <div className="region-select">
                <div className="region-select-one">
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

                <div className="region-select-two">
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
                <div className="region-select-three">

                </div>
            </div>

            <div className="region-regionList">
                <div className="region-regionList-region">
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

export default TripArea;