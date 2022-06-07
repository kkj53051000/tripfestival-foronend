import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/festival/FestivalMonthListLandmark.css"
import axios from "axios";


const FestivalMonthLandmarkList = () => {

    let { cityId } = useParams();
    let { regionId } = useParams();
    let { monthId } = useParams();

    const [landmarkList, setLandmarkList] = useState(null);


    const getLandmarkList = async () => {
        try {
            const sessionStorageName = `FestivalMonthLandmarkList${cityId}${regionId}${monthId}`;

            const sessionStorageData = JSON.parse(sessionStorage.getItem(sessionStorageName));

            if (sessionStorageData == null) {
                const response = await axios.get("/api/eventSeasonList", {
                    params: {
                        eventSeasonId: monthId,
                        worldCountryCityId: cityId,
                        worldCountryCityRegionId: regionId   
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
                     <div className="festival-area-wr" key={landmark.id}>
                    <div className="festival-area">
                        {landmark.img == "" ?
                        <></>
                        :
                        <img src={landmark.img} alt="test" />
                        }

                        <div>
                            <span className="title">{landmark.name}</span>
                            <div className="hashtag-wrap">
                               
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

export default FestivalMonthLandmarkList;