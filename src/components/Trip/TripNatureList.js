import React, { useState, useEffect } from "react";
import "../../css/trip/TripNatureList.css";
import axios from "axios";
import useApiGet from "../../lib/useApiGet";

const TripNatureList = () => {

    // Nature Type
    const [natureTypeId, setNatureTypeId] = useState(0);
    const handleNatureTypeId = e => {
        setNatureTypeId(e.target.value);
    }

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

    const [natureHotspotList, setNatureHotspotList] = useState(null);


    // Axios Upload
    const onClickBtn = async () => {
        try {
            const response = await axios.get("/api/natureHotspotList", {
                params: {
                    natureHotspotTypeId: natureTypeId,
                    worldCountryCityId: cityId,
                    worldCountryCityRegionId: regionId
                }
            })
            console.log(response.data.items)
            setNatureHotspotList(response.data.items)

        } catch(e) {
            console.log(e);
        }
    }



    // Nature Type List
    const [natureTypeListLoading, natureTypeList, natureTypeListError] = useApiGet(() => {
        return axios.get("/api/natureHotspotTypeAllList");
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
        <div className="trip-nature-list-wrap">
            <div className="trip-nature-list-search">
                <div className="title">
                    <span>자연관광지</span>
                </div>

                <div className="search-one">
                    <div class="style">
                        <select onChange={handleNatureTypeId}>
                            <option selected disabled value="0">선택하시오</option>
                            {natureTypeList != null && !natureTypeListLoading ?
                            <>
                                {natureTypeList.data.items.map(type => (
                                    <option value={type.id} key={type.id}>
                                        {type.name}
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

            <div className="trip-nature-list-area-search">
                <div className="title">
                    <span>지역 필터</span>
                </div>
                <div className="search-one">
                    <div class="style">
                        <select onChange={handleCityId}>
                            <option selected>전체</option>
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
                            <option selected value="0">전체</option>
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
            <div className="trip-area-list">
     
                {natureHotspotList != null ?
                <>
                    {natureHotspotList.map(natureHotspot => (
                    <div className="trip-area">
                        <img src={natureHotspot.img} alt="img" />

                        <div>
                            <span className="title">{natureHotspot.landmarkName}</span>
                            <div className="hashtag-wrap">
                                
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

export default TripNatureList;