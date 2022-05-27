import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/trip/TripNatureLandmarkList.css";
import axios from "axios";

const TripNatureLandmarkList = () => {

    let { natureTypeId } = useParams();
    let { cityId } = useParams();
    let { regionId } = useParams();


    const [landmarkList, setLandmarkList] = useState(null);

    const getLandamrkList = async () => {
        try {
            const response = await axios.get("/api/natureHotspotList", {
                params: {
                    natureHotspotTypeId: natureTypeId,
                    worldCountryCityId: cityId,
                    worldCountryCityRegionId: regionId
                }
            })

            setLandmarkList(response.data.items)
            console.log(response.data.items)
            
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