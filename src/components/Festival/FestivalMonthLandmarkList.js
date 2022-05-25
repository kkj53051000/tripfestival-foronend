import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/festival/FestivalMonthListLandmark.css"
import axios from "axios";


const FestivalMonthLandmarkList = () => {

    let { monthId } = useParams();
    let { cityId } = useParams();
    let { regionId } = useParams();

    const [landmarkList, setLandmarkList] = useState(null);


    const getLandmarkList = async () => {
        try {

            const response = await axios.get("/api/eventSeasonList", {
                params: {
                    eventSeasonId: monthId,
                    worldCountryCityId: cityId,
                    worldCountryCityRegionId: regionId   
                }
            })

            setLandmarkList(response.data.items)

        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getLandmarkList()
    }, [])

    return (
        <div className="festival-month-landmark-list">
        <h2>OO</h2>
            <div className="festival-area-list">
            {landmarkList != null ?
            <>
                {landmarkList.map(landmark => (
                    <div className="festival-area" key={landmark.id}>
                        <img src={landmark.img} alt="test" />

                        <div>
                            <span className="title">{landmark.name}</span>
                            <div className="hashtag-wrap">
                               
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

export default FestivalMonthLandmarkList;