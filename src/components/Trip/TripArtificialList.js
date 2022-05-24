import React, { useState } from "react";
import "../../css/trip/TripArtificialList.css";
import axios from "axios";
import useApiGet from "../../lib/useApiGet";
import { Link } from "react-router-dom";

const TripArtificialList = () => {

    // Artificial Type
    const [artificialTypeId, setArtificialTypeId] = useState(0);
    const handleArtificialTypeId = e => {
        setArtificialTypeId(e.target.value);
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

    const [hotspotkList, setHotspotList] = useState(null);


    // Axios Upload
    const onClickBtn = async () => {
        try {
            const response = await axios.get("/api/hotspotList", {
                params: {
                    hotspotTypeId: artificialTypeId,
                    worldCountryCityId: cityId,
                    worldCountryCityRegionId: regionId
                }
            })
            console.log(response.data.items)
            setHotspotList(response.data.items)

        } catch(e) {
            console.log(e);
        }
    }


    // Artificial Type List
    const [artificialTypeListLoading, artificialTypeList, artificialTypeListError] = useApiGet(() => {
        return axios.get("/api/hotspotTypeAllList");
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

    return (
        <div className="trip-artificial-list-wrap">
            <div className="trip-artificial-list-search">
                <div className="title">
                    <span>인공관광지</span>
                </div>

                <div className="search-one">
                    <div class="style">
                        <select onChange={handleArtificialTypeId}>
                            <option selected disabled>선택하시오</option>
                                {artificialTypeList != null && !artificialTypeListLoading ?
                                <>
                                    {artificialTypeList.data.items.map(type => (
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

                {/* <div className="btn">
                    <button onClick={onClickBtn}>검색</button>
                </div> */}
                <Link to={`/tripartificiallandmark/${artificialTypeId}/${cityId}/${regionId}`}>
                    <button onClick={onClickBtn}>검색</button>
                </Link>
            </div>

            <div className="trip-artificial-list-area-search">
                <div className="title">
                    <span>지역 필터</span>
                </div>
                <div className="search-one">
                    <div class="style">
                        <select onChange={handleCityId}>
                            <option>전체</option>
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
                {hotspotkList != null ?
                <>
                    {hotspotkList.map(hotspot => (
                    <div className="trip-area">
                        <img src={hotspot.img} alt="img" />

                        <div>
                            <span className="title">{hotspot.landmarkName}</span>
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

export default TripArtificialList;