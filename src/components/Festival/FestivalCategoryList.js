import axios from "axios";
import React, { useState } from "react";
import "../../css/festival/FestivalCategoryList.css";
import useApiGet from "../../lib/useApiGet";

const FestivalCategoryList = () => {

    // Event Category Id
    const [categoryId, setCategoryId] = useState(null);
    const handleCategoryId = e => {
        setCategoryId(e.target.value);
    }

    // City
    const [cityId, setCityId] = useState(0);
    const handleCityId = e => {
        setCityId(e.target.value);
    }

    // Region
    const [regionId, setRegionId] = useState(0);
    const handleRegionId = e => {
        setRegionId(e.target.value);
    }

    const [landmarkList, setLandmarkList] = useState(null);



    // Axios Upload
    const onClickBtn = async () => {
        try {

            const response = await axios.get("/api/eventCategoryList", {
                params: {
                    eventCategoryId: categoryId,
                    worldCountryCityId: cityId,
                    worldCountryCityRegionId: regionId   
                }
            })

            setLandmarkList(response.data.items)

        } catch(e) {
            console.log(e);
        }
    }


    // Event Category
    const [categoryListLoading, categoryList, categoryListError] = useApiGet(() => {
        return axios.get("/api/eventCategoryAllList");
    }, [])

    // City List
    const [cityListLoading, cityList, cityListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityNameList");
    }, [])

    // Region List
    const [regionListLoading, regionList, regionListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityRegion", {
            params: { 
                worldCountryId: cityId,
            }
        })
    }, [cityId])

    return (
        <div className="festival-category-wrap">
            <div className="festival-category-select">
                <div className="title">
                    카테고리
                </div>

                <div className="one">
                    <div class="style">
                        <select onChange={handleCategoryId}>
                            <option selected disabled>선택하시오</option>
                            {categoryList != null && !categoryListLoading ?
                            <>
                                {categoryList.data.items.map(category => (
                                    <option value={category.id} key={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </>
                            :
                            <></>
                            }
                        </select>
                    </div>
                </div>

                <div className="btn">
                    <button onClick={onClickBtn}>검색</button>
                </div>
            </div>

            <div className="festival-category-list-area-search">
                <div className="title">
                    <span>지역 필터</span>
                </div>
                <div className="search-one">
                    <div class="style">
                        <select onChange={handleCityId}>
                            <option selected disabled>선택하시오</option>
                            {cityList != null && !cityListLoading ?
                            <>
                                {cityList.data.items.map(city => (
                                    <option value={city.id} key={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </>
                            :
                            <></>
                            }
                        </select>
                    </div>
                </div>
                <div className="search-two">
                    <div class="style">
                        <select onChange={handleRegionId}>
                            <option>전체</option>
                            {regionList != null && !regionListLoading ?
                            <>
                                {regionList.data.items.map(region => (
                                    <option value={region.id} key={region.id}>
                                        {region.name}
                                    </option>
                                ))}
                            </>
                            :
                            <>
                            </>
                            }
                        </select>
                    </div>
                </div>
                <div className="null">
                    
                </div>
            </div>

            {/* Temp */}
            <div className="festival-area-list">
                {landmarkList != null ?
                <>
                    {landmarkList.map(landmark => (
                        <div className="festival-area" key={landmark.id}>
                            <img src={landmark.img} alt="test" />

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

export default FestivalCategoryList;