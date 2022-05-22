import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/trip/TripAreaList.css";
import useApiGet from "../../lib/useApiGet";

const TripAreaList = () => {

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

    const [landmarkList, setLandmarkList] = useState(null);

    // Axios Upload
    const onClickBtn = async () => {
        try {

            const response = await axios.get("/api/landmarkList", {
                params: {
                    worldCountryCityRegionId: regionId,
                    worldCountryCityId: cityId
                }
            })

            setLandmarkList(response.data.items)
            console.log(response)
            
        } catch(e) {
            console.log(e);
        }
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

    useEffect(() => {
        setRegionId(0)
    }, [cityId])
    
    return (
        <div className="trip-area-wrap">
            <div className="trip-area-select">
                <div className="title">
                    지역
                </div>

                {/* City */}
                <div className="one">
                    <div class="style">
                        <select onChange={handleCityId}>
                            <option value="0" disabled selected>선택하세요</option>
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

                {/* Region */}
                <div className="two">
                    <div class="style">
                        <select onChange={handleRegionId}>
                            <option value="0" selected>전체</option>
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
                <div className="btn">
                    <button onClick={onClickBtn}>검색</button>
                </div>
            </div>

            <div className="trip-area-list">
                {landmarkList != null ?
                <>
                    {landmarkList.map(landmark => (
                    <div className="trip-area">
                        <img src={landmark.img} alt="img" />

                        <div>
                            <Link className="title" to={`/landmark/${landmark.id}`}>
                                <span className="title">{landmark.name}</span>
                            </Link>
        
                            <div className="hashtag-wrap">
                                {landmark.items.map(hashTag => (
                                    <span className="hashtag">#{hashTag.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    ))}
                </>
                :
                <></>    
                }
                


                {/* <div className="trip-area">
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
                </div> */}


            </div>
        </div>
    );
};

export default TripAreaList;