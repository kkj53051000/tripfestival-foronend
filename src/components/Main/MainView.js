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

    // Landmark All Count
    const [landamrkAllCountLoading, landamrkAllCount, landamrkAllCountError] = useApiGet(() => {
        return axios.get("/api/landmarkAllCount");
    }, [])

    // Event All Count
    const [eventAllCountLoading, eventAllCount, eventAllCountError] = useApiGet(() => {
        return axios.get("/api/eventAllCount");
    }, [])

    // Search Result
    const [searchResult, setSearchResult] = useState(null)
    
    const getSearchResult = async () => {

        const response = await axios.get("/api/mainSearchResult", {
            params: {
                searchWorld: inputValue,
            }
        })

        setSearchResult(response.data.items)
        console.log(response)
    }


    // Search Result List
    useEffect(() => {
        var lang_ck = /[가-힣]/;

        if (lang_ck.test(inputValue)) {
            console.log("한글자 완성됨.")

            const debounce = setTimeout(() => {
                getSearchResult()
            }, 300);
            return () => clearTimeout(debounce);
        }
    }, [inputValue])

    return (
        <div className="main-view-wrap">
            {!landamrkAllCountLoading && landamrkAllCount != null ?
            <h2>{landamrkAllCount.data.landmarkAllCount}개 관광지</h2>
            :
            <></>
            }
            {!eventAllCountLoading && eventAllCount != null ?
            <h2>{eventAllCount.data.count}개 축제</h2>
            :
            <></>
            }
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
                <div>
                    {searchResult != null ?
                    <div className="input-div" onClick={onInputDivFocus} onFocus={onInputDivFocus} onBlur={onInputDivBlur}>
                        {searchResult.map(result => (
                            <Link to={`/triparealandmark/${result.cityId}/${result.regionId}`} className="input-content">
                                <span className="input-content-name">{result.title}</span>
                                <span className="input-content-adress">대한민국 {result.title}</span>
                            </Link>
                        ))}
                    </div>
                    :
                    <div>
                    </div>
                    }
                </div>
                :
                <div></div>
                }
            </div>
        </div>
    );
};

export default MainView;