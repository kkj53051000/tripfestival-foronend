import React, { useState } from "react";
import '../../../css/world/AdminWorldCountryCityRegion.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminWorldCountryCityRegion = () => {

    const url = "/admin/world/country/city/region";

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

            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
                window.location.replace(url);
            }
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


    // Modify
    const [modifyName, setModifyName] = useState(null);
    
    const onChagngeModifyName = e => {
        setModifyName(e.target.value)
    }

    const changeValue = {
        name: modifyName
    }

    const onClickModify = async (e) => {
        const response = await axios.post("/api/admin/worldCountryCityRegionNameModify/" + e.target.value, changeValue)

        if(response.data.status === 'SUCCESS') {
            alert("수정 성공");
            window.location.replace(url)
        }
    }


    // Remove

    const onClickRemove = async (e) => {
        const response = await axios.post("/api/admin/worldCountryCityRegionRemove/" + e.target.value)

        if(response.data.status === 'SUCCESS') {
            alert("삭제 성공");
            window.location.replace(url)
        }
    }


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
                            <input placeholder={region.name} onChange={onChagngeModifyName} />
                            <button value={region.id} onClick={onClickModify} >수정</button>
                            <button value={region.id} onClick={onClickRemove} >삭제</button><br/>
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