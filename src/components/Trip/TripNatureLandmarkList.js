import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/trip/TripNatureLandmarkList.css";
import axios from "axios";

const TripNatureLandmarkList = () => {

    let { cityId } = useParams();
    let { regionId } = useParams();
    let { natureTypeId } = useParams();


    const [landmarkList, setLandmarkList] = useState(null);

    const getLandamrkList = async () => {
        try {
            const sessionStorageName = `TripNatureLandmarkList${cityId}${regionId}${natureTypeId}`;

            const sessionStorageData = JSON.parse(sessionStorage.getItem(sessionStorageName));

            if (sessionStorageData == null) {
                const response = await axios.get("/api/natureHotspotList", {
                    params: {
                        natureHotspotTypeId: natureTypeId,
                        worldCountryCityId: cityId,
                        worldCountryCityRegionId: regionId
                    }
                })
    
                setLandmarkList(response.data.items)
                sessionStorage.setItem(sessionStorageName, JSON.stringify(response.data.items));
            }else{
                setLandmarkList(sessionStorageData);
            }
            
            
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getLandamrkList()
    }, [])


    return (
        <div className="trip-area-landmark-list-wrap">
            <div className="header">
                <h2>OO</h2>
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
                            <Link className="title" to={`/landmark/${landmark.landmarkId}`}>
                                <span className="title">{landmark.landmarkName}</span>
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

export default TripNatureLandmarkList;