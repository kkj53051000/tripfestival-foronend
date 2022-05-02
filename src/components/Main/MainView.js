import React, { useState } from "react";
import "../../css/MainView.css";
import { Link } from "react-router-dom";

const MainView = () => {

    const [inputValue, SetInputValue] = useState("");

    const onChangeInputValue = e => {
        SetInputValue(e.target.value)
    }

    const [inputFocused, setInputFocused] = useState("");

    const onInputFocus = () => {
        setInputFocused(true)
    }
    
    const onInputBlur = () => {
        setTimeout(() => setInputFocused(false), 100);
    }

    const [inputDivtFocus, setInputDivFocus] = useState("");

    const onInputDivFocus = () => setInputDivFocus(true)
    const onInputDivBlur = () => setInputDivFocus(false)

    return (
        <div className="main-view-wrap">
            
            <div className="main-view-input">
                <div className="input">
                    <input
                    className="main-input"
                    onChange={onChangeInputValue}
                    placeholder="어디로 가시나요?"
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    />
                </div>
                {inputFocused || inputDivtFocus ?
                <div className="input-div" onClick={onInputDivFocus} onFocus={onInputDivFocus} onBlur={onInputDivBlur}>
                    <Link to="/f" className="input-content">
                        <span className="input-content-name">부산</span>
                        <span className="input-content-adress">대한민국 부산광역시</span>
                    </Link>
                </div>
                :
                <div></div>
                }
                
            </div>
            

            {/* <div className="main-topic">
                <span>벚꽃 명소 TOP20!!</span>
            </div> */}

            {/* <div className="main-view-top">
                <span>어디로 놀러가세요?</span>
            </div> */}

            <div className="main-trip-title">
                <span>추천 관광지</span>
            </div>

            <div className="main-view-trip">
                <div className="main-view-trip-item" >
                    <div className="main-view-trip-img">
                        <img src="http://tong.visitkorea.or.kr/cms/resource/99/2741899_image2_1.jpg" alt="무릉계곡"/>
                    </div>

                    <span>무릉계곡</span>
                </div>

                <div className="main-view-trip-item">
                    <div className="main-view-trip-img">
                        <img src="http://tong.visitkorea.or.kr/cms/resource/05/2527505_image2_1.jpg" alt="호미곶 해맞이광장"/>
                    </div>

                    <span>호미곶 해맞이광장</span>
                </div>
                <div className="main-view-trip-item">
                    <div className="main-view-trip-img">
                        <img src="http://tong.visitkorea.or.kr/cms/resource/00/2613500_image2_1.jpg" alt="성산일출봉"/>
                    </div>

                    <span>성산일출봉</span>
                </div>
            </div>

            <div className="main-trip-title">
                <span>진행중인 축제</span>
            </div>

            <div className="main-view-festival">
                <div className="main-view-festival-item">
                    <div className="main-view-festival-img">
                        <img src="https://www.chimacfestival.com/tmpl/theme_shop_basic/img/history/history_2022.jpg" alt="성산일출봉"/>
                    </div>

                    <span>대구치맥페스티벌</span>
                </div>
                <div className="main-view-festival-item">
                    <div className="main-view-festival-img">
                        <img src="https://www.narafestival.com/00_img_host/narafestival/01_icenara_2020_imgs/Sub_img/poster2019s.jpg" alt="성산일출봉"/>
                    </div>

                    <span>얼음나라화천 산천어축제</span>
                </div>
                <div className="main-view-festival-item">
                    <div className="main-view-festival-img">
                        <img src="https://images.squarespace-cdn.com/content/v1/61359e73eb70401d543ef522/1631842707477-GAO6V4GN4SFRTJVZ6D3Y/busanrockfestival_origin_2021_RGB_%EC%A0%84%EC%86%A1%EC%9A%A9_%EB%9D%BC%EC%9D%B8%EC%97%85.jpg?format=1000w" alt="성산일출봉"/>
                    </div>

                    <span>부산국제락페스티벌</span>
                </div>
            </div>
        </div>
    );
};

export default MainView;