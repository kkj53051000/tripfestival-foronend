import React, { useState } from "react";
import '../../../css/world/AdminWorldCountryCityRegion.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminWorldCountryCityRegion = () => {

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // File
    const [file, setFile] = useState(null);
    const handleFile = e => {
        setFile(e.target.files[0]);
    }

    // WorldCountryCityId
    const [worldCountryCityId, setWorldCountryCityId] = useState(null);
    const handleWorldCountryCity = e => {
        setWorldCountryCityId(e.target.value);
    }

    var formData = new FormData();
    formData.append("file", file);

    const value = {
        name: name,
        worldCountryCityId: worldCountryCityId
    }

    formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/worldCountryCityRegionProcess", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response)
        } catch(e) {
            console.log(e);
        }
    }

    const [worldCountryCityListLoading, worldCountryCityList, worldCountryCityListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityNameList");
    }, []);

    const [worldCountryCityRegionListLoading, worldCountryCityRegionList, worldCountryCityRegionListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityRegionList");
    }, []);


    return (
        <div className="admin-world-country-city-region-wrap">
            <h2>도시 2</h2>

            <h2>업로드</h2>

            <div className="admin-world-country-city-region-upload">
                <span>이름</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>도시 사진</span>
                <input type="file" onChange={handleFile} />
                <br/><br/>

                <span>도시 1</span>
                <select onChange={handleWorldCountryCity}>
                    {worldCountryCityList != null && !worldCountryCityListLoading ?
                    <>
                        <option selected disabled>
                            선택하시오
                        </option>
                        {worldCountryCityList.data.items.map(city => (
                            <option value={city.id} key={city.id}>
                                {city.name}
                            </option>
                        ))}
                    </>
                    :
                    <>
                    </>
                    }
                </select>
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-world-country-city-region-list">
                
                {worldCountryCityRegionList != null && !worldCountryCityRegionListLoading ?
                <>
                    {worldCountryCityRegionList.data.items.map(region => (
                        <div className="item" key={region.id}>
                            <input placeholder={region.name} />
                            <button>수정</button>
                            <button>삭제</button><br/>
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

export default AdminWorldCountryCityRegion;