import React from "react";
import "../../css/FestivalAreaList.css";

const FestivalAreaList = () => {
    return(
        <div className="festival-area-wrap">
            <div className="festival-area-select">
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

            <div className="festival-area-list">
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

export default FestivalAreaList;