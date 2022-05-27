import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/trip/TripSpecialLandmarkList.css";
import axios from "axios";

const TripSpecialLandmarkList = () => {

    let { tripSpecialMenuId } = useParams();

    // Landmark List
    const [landmarkList, setLandmarkList] = useState(null);

    const getLandamrkList = async () => {
        try {
            const response = await axios.get("/api/hotSightLandmarkList", {
                params: {
                    hotSightTwoId: tripSpecialMenuId
                }
            })

            setLandmarkList(response.data.items)
            
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

export default TripSpecialLandmarkList;