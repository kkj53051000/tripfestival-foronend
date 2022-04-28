import React from "react";
import "../../css/FestivalMonthList.css";

const FestivalMonthList = () => {
    return(
        <div className="festival-month-wrap">
            <div className="festival-month-select">
                <div className="title">
                    월별
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

                <div className="btn">
                    <button>검색</button>
                </div>
            </div>

            <div className="festival-month-list-area-search">
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
            <div className="festival-month-list">
                <div className="festival-area">
                    <img src="https://minio.nculture.org/amsweb-opt/multimedia_assets/134/30188/17055/c/080_-2019-%ED%95%A8%ED%8F%89%EB%82%98%EB%B9%84%EC%B6%95%EC%A0%9C-full-size.jpg" />

                    <div>
                        <span className="title">함평 나비 대축제</span>
                        <div className="hashtag-wrap">
                            <span className="hashtag">#함평</span>
                            <span className="hashtag">#나비</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FestivalMonthList;