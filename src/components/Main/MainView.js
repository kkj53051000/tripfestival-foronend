import React, { useState, useEffect } from "react";
import "../../css/main/MainView.css";
import { Link } from "react-router-dom";
import axios from "axios";
import useApiGet from "../../lib/useApiGet";

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



     // City
     const [cityId, setCityId] = useState(0);
     const handleCityId = e => {
         setCityId(e.target.value);
     }
 
     // Region
     const [regionId, setRegionId] = useState(0);
     const handleRegionId = e => {
         setRegionId(e.target.value);
     }

    // City List
    const [cityListLoading, cityList, cityListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityNameList");
    }, [])

    // Region List
    const [regionListLoading, regionList, regionListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityRegion", {
            params: {
                worldCountryId: cityId,
            }
        })
    }, [cityId])


    // Search Result List
    useEffect(() => {
        var lang_ck = /[가-힣]/;

        if (lang_ck.test(inputValue)) {
            console.log("한글자 완성됨.")
        }
    }, [inputValue])

    return (
        <div className="main-view-wrap">
            <h1>11,730개 관광지</h1>
            <h1>16개의 축제가 진행중이에요.</h1>
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

            {/* <div className="main-view-select">
                <div className="select-wrap">
                    <select>
                        <option>선택하시오</option>
                    </select>
                    <select>
                        <option>선택하시오</option>
                    </select>

                    <button>검색</button>
                </div>
            </div> */}
        
        </div>
    );
};

export default MainView;