import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/trip/TripAreaLandmarkList.css";
import axios from "axios";

const TripAreaLandmarkList = () => {


    let { cityId } = useParams();
    let { regionId } = useParams();

    const [landmarkList, setLandmarkList] = useState(null);

    const getLandamrkList = async () => {
        try {

            const sessionStorageData = JSON.parse(sessionStorage.getItem(`TripAreaLandmarkList${cityId}${regionId}`))

            if(sessionStorageData == null) {
                const response = await axios.get("/api/landmarkList", {
                    params: {
                        worldCountryCityRegionId: regionId,
                        worldCountryCityId: cityId
                    }
                });

                setLandmarkList(response.data.items);
                sessionStorage.setItem(`TripAreaLandmarkList${cityId}${regionId}`, JSON.stringify(response.data.items));
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

    useEffect(() => {
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
                    <div className="trip-area">
                        {landmark.img == null ?
                        <></>
                        :
                        <img src={landmark.img} alt="img" />
                        }

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
            </div>
        </div>
    );
};

export default TripAreaLandmarkList;