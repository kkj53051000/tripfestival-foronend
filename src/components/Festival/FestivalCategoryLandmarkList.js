import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../css/festival/FestivalCategoryLandmarkList.css';
import axios from "axios";

const FestivalCategoryLandmarkList = () => {

    let { cityId } = useParams();
    let { regionId } = useParams();
    let { categoryId } = useParams();

    const [landmarkList, setLandmarkList] = useState(null);

    // Axios Upload
    const getLandmarkList = async () => {
        try {
            const sessionStorageName = `FestivalCategoryLandmarkList${cityId}${regionId}${categoryId}`;

            const sessionStorageData = JSON.parse(sessionStorage.getItem(sessionStorageName));

            if (sessionStorageData == null) {
                const response = await axios.get("/api/eventCategoryList", {
                    params: {
                        eventCategoryId: categoryId,
                        worldCountryCityId: cityId,
                        worldCountryCityRegionId: regionId   
                    }
                });
    
                setLandmarkList(response.data.items)
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
        <div className="festival-category-landmark-list">
            <h2>OO</h2>
            <div className="festival-area-list">
                {landmarkList != null ?
                <>
                    {landmarkList.map(landmark => (
                        <div className="festival-area" key={landmark.id}>
                            {landmark.img == null ?
                            <></>
                            :
                            <img src={landmark.img} alt="test" />
                            }

                            <div>
                                <span className="title">{landmark.name}</span>
                                <div className="hashtag-wrap">
                                   {/* <span className="hashtag">#함평</span>
                                    <span className="hashtag">#나비</span> */}
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

export default FestivalCategoryLandmarkList;