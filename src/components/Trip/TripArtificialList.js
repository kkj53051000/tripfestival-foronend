import React from "react";
import "../../css/TripArtificialList.css";

const TripArtificialList = () => {
    return (
        <div className="trip-artificial-list-wrap">
            <div className="trip-artificial-list-search">
                <div className="title">
                    <span>인공관광지</span>
                </div>

                <div className="search-one">
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

                <div className="search-two">
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

            <div className="trip-artificial-list-area-search">
                <div className="title">
                    <span>지역 필터</span>
                </div>
                <div className="search-one">
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
                <div className="search-two">
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
                <div className="null">
                    
                </div>
            </div>

            {/* Temp */}
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

export default TripArtificialList;