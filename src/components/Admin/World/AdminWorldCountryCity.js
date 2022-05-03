import React, { useState } from "react";
import '../../../css/world/AdminWorldCountryCity.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminWorldCountryCity = () => {

    const url = "/admin/world/country/city";

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

    // WorldCountryId
    const [worldCountryId, setWorldCountryId] = useState(null);
    const handleWorldCoutryId = e => {
        setWorldCountryId(e.target.value);
    }



    var formData = new FormData();
    formData.append("file", file);

    const value = {
        name: name,
        worldCountryId: worldCountryId
    }

    formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

    // Axios Upload
    const onClickUpload = async () => {
        try {
            const response = await axios.post("/api/admin/worldCountryCityProcess", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }

    const [worldCountryListLoading, worldCountryList, worldCountryNameListError] = useApiGet(() => {
        return axios.get("/api/worldCountryNameList");
    }, []);

    const [worldCountryCityListLoading, worldCountryCityList, worldCountryCityListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityNameList");
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
        const response = await axios.post("/api/admin/worldCountryCityNameModify/" + e.target.value, changeValue)

        if(response.data.status === 'SUCCESS') {
            alert("수정 성공");
            window.location.replace(url)
        }
    }


    // Remove

    const onClickRemove = async (e) => {
        const response = await axios.post("/api/admin/worldCountryCityRemove/" + e.target.value)

        if(response.data.status === 'SUCCESS') {
            alert("삭제 성공");
            window.location.replace(url)
        }
    }



    return (
        <div className="admin-world-country-city-wrap">
            <h2>도시 1</h2>

            <h2>업로드</h2>

            <div className="admin-world-country-city-upload">
                <span>이름</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>도시 사진</span>
                <input type="file" onChange={handleFile} />
                <br/><br/>

                <span>나라</span>
                <select onChange={handleWorldCoutryId}>
                    {worldCountryList != null && !worldCountryListLoading ?
                    <>
                        <option selected disabled>
                            선택하시오
                        </option>
                        {worldCountryList.data.items.map(country => (
                            <option value={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-world-country-city-list">
                {worldCountryCityList != null && !worldCountryCityListLoading ?
                <>
                    {worldCountryCityList.data.items.map(city => (
                        <div className="item">
                            <input placeholder={city.name} onChange={onChagngeModifyName} />
                            <button value={city.id} onClick={onClickModify} >수정</button>
                            <button value={city.id} onClick={onClickRemove}>삭제</button><br/>
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

export default AdminWorldCountryCity;