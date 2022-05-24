import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/trip/TripAreaLandmarkList.css";
import axios from "axios";

const TripAreaLandmarkList = () => {

    const [landmarkList, setLandmarkList] = useState(null);

    let { cityId } = useParams();
    let { regionId } = useParams();

    console.log(useParams())

    const getLandamrkList = async () => {
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

    useEffect(() => {
        getLandamrkList()
    }, [])

    

    return (
        <div className="trip-area-landmark-list-wrap">
            <div className="header">
                <h2>OO &#62; OO</h2>
                <h1>{useParams}</h1>
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
            </div>
        </div>
    );
};

export default TripAreaLandmarkList;