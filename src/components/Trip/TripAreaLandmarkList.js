import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../../css/trip/TripAreaLandmarkList.css";
import axios from "axios";


const TripAreaLandmarkList = () => {

    const navigate = useNavigate();

    let { cityId } = useParams();
    let { regionId } = useParams();

    const [landmarkList, setLandmarkList] = useState(null);

    const getLandamrkList = async () => {
        try {
            const sessionStorageName = `TripAreaLandmarkList${cityId}${regionId}`;

            const sessionStorageData = JSON.parse(sessionStorage.getItem(sessionStorageName))

            if(sessionStorageData == null) {
                const response = await axios.get("/api/landmarkList", {
                    params: {
                        worldCountryCityRegionId: regionId,
                        worldCountryCityId: cityId
                    }
                });

                setLandmarkList(response.data.items);
                sessionStorage.setItem(sessionStorageName, JSON.stringify(response.data.items));
            }else {
                
                setLandmarkList(sessionStorageData);
            }
            
        } catch(e) {
            console.log(e);
        }
    }

    const [cityName, setCityName] = useState(null);

    const getCityName = async () => {
        try {
            const response = await axios.get("/api/worldCountryCityName/" + cityId)

            setCityName(response.data.worldCountryCityName)
            
        } catch(e) {
            console.log(e);
        }
    }

    const [RegionName, setRegionName] = useState(null);

    const getRegionName = async () => {
        try {
            const response = await axios.get("/api/worldCountryCityRegionName/" + regionId)

            setRegionName(response.data.worldCountryCityRegionName)
            
        } catch(e) {
            console.log(e);
        }
    }
    
    // 랜드마크 이동
    const onClickLandmark = (e) => {
        console.log(window.scrollY)
        
        const sessionStorageName = `TripAreaLandmarkList${cityId}${regionId}_scroll`;

        sessionStorage.setItem(sessionStorageName, window.scrollY)

        navigate("/landmark/" + e.target.value)
    }

    // 스크롤 위치 원위치
    const moveLandmarkListScroll = () => {
        const sessionStorageName = `TripAreaLandmarkList${cityId}${regionId}_scroll`;

        if (sessionStorage.getItem(sessionStorageName) != null) {
            window.scrollTo(0, sessionStorage.getItem(sessionStorageName))
        }
    }


    useEffect(() => {
        moveLandmarkListScroll()
        getLandamrkList()
        getCityName()
        getRegionName()
    }, [])

    

    return (
        <div className="trip-area-landmark-list-wrap">
            <div className="header">
                <h2>{cityName} &#62; {RegionName}</h2>
            </div>
            <div className="trip-area-list">
                {landmarkList != null ?
                <>
                    {landmarkList.map(landmark => (
                    <div className="trip-area-wr">
                    <div className="trip-area">
                        {landmark.img == null ?
                        <></>
                        :
                        <img src={landmark.img} alt="img" />
                        }

                        <div>
                            <button value={landmark.id} onClick={onClickLandmark}>
                                test
                            </button>
                            <div className="title" value={landmark.id} onClick={onClickLandmark}>
                                <span className="title">{landmark.name}</span>
                            </div>
        
                            <div className="hashtag-wrap">
                                {landmark.items.map(hashTag => (
                                    <span className="hashtag">#{hashTag.name}</span>
                                ))}
                            </div>
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

export default TripAreaLandmarkList;