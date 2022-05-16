import React, { useState } from "react";
import "../../css/festival/FestivalMonthList.css";
import useApiGet from "../../lib/useApiGet";
import axios from "axios";

const FestivalMonthList = () => {

    // Event Month Id
    const [monthId, setMonthId] = useState(0);
    const handleMonthId = e => {
        setMonthId(e.target.value);
    }

    // City Id
    const [cityId, setCityId] = useState(0);
    const handleCityId = e => {
        setCityId(e.target.value);
    }

    // Region Id
    const [regionId, setRegionId] = useState(0);
    const handleRegionId = e => {
        setRegionId(e.target.value);
    }

    const [landmarkList, setLandmarkList] = useState(null);


    // Axios Upload
    const onClickBtn = async () => {
        try {

            const response = await axios.get("/api/eventSeasonList", {
                params: {
                    eventSeasonId: monthId,
                    worldCountryCityId: cityId,
                    worldCountryCityRegionId: regionId   
                }
            })

            setLandmarkList(response.data.items)

        } catch(e) {
            console.log(e);
        }
    }


    // Event Month List
    const [eventMonthListLoading, eventMonthList, eventMonthListError] = useApiGet(() => {
        return axios.get("/api/eventSeasonAllList");
    }, [])

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


    return(
        <div className="festival-month-wrap">
            <div className="festival-month-select">
                <div className="title">
                    월별
                </div>

                <div className="one">
                    <div class="style">
                        <select onChange={handleMonthId}>
                            <option selected disabled>전체</option>
                            {eventMonthList != null && !eventMonthListLoading ?
                            <>
                                {eventMonthList.data.items.map(month => (
                                    <option value={month.id} key={month.id}>
                                        {month.name}
                                    </option>
                                ))}
                            </>
                            :
                            <></>
                            }
                        </select>
                    </div>
                </div>

                <div className="btn">
                    <button onClick={onClickBtn}>검색</button>
                </div>
            </div>

            <div className="festival-month-list-area-search">
                <div className="title">
                    <span>지역 필터</span>
                </div>
                <div className="search-one">
                    <div class="style">
                        <select onChange={handleCityId}>
                            <option selected disabled>선택하시오</option>
                            {cityList != null && !cityListLoading ?
                            <>
                                {cityList.data.items.map(city => (
                                    <option value={city.id} key={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </>
                            :
                            <></>
                            }
                        </select>
                    </div>
                </div>
                <div className="search-two">
                    <div class="style">
                        <select onChange={handleRegionId}>
                            <option>전체</option>
                            {regionList != null && !regionListLoading ?
                            <>
                                {regionList.data.items.map(region => (
                                    <option value={region.id} key={region.id}>
                                        {region.name}
                                    </option>
                                ))}
                            </>
                            :
                            <></>
                            }
                        </select>
                    </div>
                </div>
                <div className="null">
                    
                </div>
            </div>

            {/* Temp */}
            <div className="festival-month-list">
                {landmarkList != null ?
                <>
                    {landmarkList.map(landmark => (
                        <div className="festival-area" key={landmark.id}>
                            <img src={landmark.img} alt="test" />

                            <div>
                                <span className="title">{landmark.name}</span>
                                <div className="hashtag-wrap">
                                    {/* <span className="hashtag">#함평</span>
                                    <span className="hashtag">#나비</span> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
                :
                <></>
                }

            </div>
        </div>
    );
};

export default FestivalMonthList;