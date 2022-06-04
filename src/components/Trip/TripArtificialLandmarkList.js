import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../../css/trip/TripArtificialLandmarkList.css";
import axios from "axios";

const TripArtificialLandmarkList = () => {

    let { cityId } = useParams();
    let { regionId } = useParams();
    let { artificialTypeId } = useParams();


    const [landmarkList, setLandmarkList] = useState(null);

    const getLandamrkList = async () => {
        try {
            const sessionStorageName = `TripArtificialLandmarkList${cityId}${regionId}${artificialTypeId}`;

            const sessionStorageData = JSON.parse(sessionStorage.getItem(sessionStorageName))

            if(sessionStorageData == null) {
                const response = await axios.get("/api/hotspotList", {
                    params: {
                        hotspotTypeId: artificialTypeId,
                        worldCountryCityId: cityId,
                        worldCountryCityRegionId: regionId
                    }
                })
    
                setLandmarkList(response.data.items)
                sessionStorage.setItem(sessionStorageName, JSON.stringify(response.data.items));
            }else {
                setLandmarkList(sessionStorageData);
            }
        } catch(e) {
            console.log(e);
        }
    }

    const [typeName, setTypeName] = useState(null);
    const getArtificialTypeName = async () => {
        try {
            const response = await axios.get("/api/hotspotTypeName/" + artificialTypeId)

            setTypeName(response.data.hotSpotTypeName)
            
        } catch(e) {
            console.log(e);
        }
    }
    

    useEffect(() => {
        getLandamrkList()
        getArtificialTypeName()
    }, [])

    return (
        <div className="trip-area-landmark-list-wrap">
            <div className="header">
                <h2>{typeName}</h2>
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
                            <Link className="title" to={`/landmark/${landmark.landmarkId}`}>
                                <span className="title">{landmark.landmarkName}</span>
                            </Link>
        
                            {/* <div className="hashtag-wrap">
                                {landmark.items.map(hashTag => (
                                    <span className="hashtag">#{hashTag.name}</span>
                                ))}
                            </div> */}
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

export default TripArtificialLandmarkList;