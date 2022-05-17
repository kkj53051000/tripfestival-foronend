import React, { useState, useEffect } from "react";
import "../../css/festival/FestivalAreaList.css";
import axios from "axios";
import useApiGet from "../../lib/useApiGet";

const FestivalAreaList = () => {

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

            const response = await axios.get("/api/eventList", {
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


    return(
        <div className="festival-area-wrap">
            <div className="festival-area-select">
                <div className="title">
                    지역
                </div>

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

                <div className="two">
                    <div class="style">
                        <select onChange={handleRegionId}>
                            <option value="0" disabled selected>전체</option>
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

            <div className="festival-area-list">
                

                {landmarkList != null ?
                <>
                    {landmarkList.map(landmark => (
                        <div className="festival-area" key={landmark.id}>
                            <img src={landmark.img} alt="test" />

                            <div>
                                
                                <span className="title">{landmark.name}</span>
                                
                                <div className="hashtag-wrap">
                                    {landmark.items.map(hashTag => (
                                        <span className="hashtag">#{hashTag.name}</span>
                                    ))}
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

export default FestivalAreaList;