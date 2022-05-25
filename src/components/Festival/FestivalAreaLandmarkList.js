import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/festival/FsetivalAreaLandmarkList.css";
import axios from "axios";

const FsetivalAreaLandmarkList = () => {

    let { cityId } = useParams();
    let { regionId } = useParams();

    const [eventList, setEventList] = useState(null);

    const getEventList = async () => {
        try {
            const response = await axios.get("/api/eventList", {
                params: {
                    worldCountryCityId: cityId,
                    worldCountryCityRegionId: regionId
                }
            })

            setEventList(response.data.items)
            
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

    const [regionName, setRegionName] = useState(null);

    const getRegionName = async () => {
        try {
            const response = await axios.get("/api/worldCountryCityRegionName/" + regionId)

            setRegionName(response.data.worldCountryCityRegionName)
            
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getEventList()
        getCityName()
        getRegionName()
    })

    return (
        <div className="festival-area-landmark-list-wrap">
            <h1>{cityName} - {regionName}</h1>
            <div className="festival-area-list">
                {eventList != null ?
                <>
                    {eventList.map(event => (
                        <div className="festival-area" key={event.id}>
                            <img src={event.img} alt="test" />

                            <div>
                                
                                <span className="title">{event.name}</span>
                                
                                <div className="hashtag-wrap">
                                    {event.items.map(hashTag => (
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

export default FsetivalAreaLandmarkList;