import React from "react";
import "../../css/trip/TripAreaList.css";

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
                    <img src="http://tong.visitkorea.or.kr/cms/resource/67/2612467_image2_1.jpg" alt="" />

                    <div>
                        <span className="title">해운대해수욕장</span>
                        <div className="hashtag-wrap">
                            <span className="hashtag">#부산</span>
                            <span className="hashtag">#센텀시티</span>
                            <span className="hashtag">#영화관</span>
                            <span className="hashtag">#기네스북</span>
                            <span className="hashtag">#싸이</span>
                        </div>
                    </div>
                </div>

                <div className="trip-area">
                    <img src="http://tong.visitkorea.or.kr/cms/resource/35/2716235_image2_1.jpg" alt="" />

                    <div>
                        <span className="title">부산 영화의 전당</span>
                        <div className="hashtag-wrap">
                            <span className="hashtag">#부산</span>
                            <span className="hashtag">#대마도가보인다</span>
                            <span className="hashtag">#일출</span>
                            <span className="hashtag">#절경</span>
                            <span className="hashtag">#수상법당</span>
                        </div>
                    </div>
                </div>

                <div className="trip-area">
                    <img src="http://tong.visitkorea.or.kr/cms/resource/31/1571031_image2_1.jpg" alt="" />

                    <div>
                        <span className="title">해동 용궁사(부산)</span>
                        <div className="hashtag-wrap">
                            <span className="hashtag">#부산</span>
                            <span className="hashtag">#관광열차</span>
                            <span className="hashtag">#유료주차</span>
                            <span className="hashtag">#광안대교근처</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TripAreaList;