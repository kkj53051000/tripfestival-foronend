import React, { useState } from "react";
import '../../../css/world/AdminWorldCountryCity.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminWorldCountryCity = () => {

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

            console.log(response)
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
                    {!worldCountryListLoading ?
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
                {!worldCountryCityListLoading ?
                <>
                    {worldCountryCityList.data.items.map(city => (
                        <div className="item">
                            <input placeholder={city.name}/>
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

export default AdminWorldCountryCity;