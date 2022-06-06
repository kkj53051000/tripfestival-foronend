import React, { useState } from "react";
import "../../../css/landmark/AdminLandmark.css";
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";
import { Link } from "react-router-dom";

const AdminLandmark = () => {

    const url = "/admin/landmark/landmark";

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

    // Description
    const [description, setDescription] = useState(null);
    const handleDescription = e => {
        setDescription(e.target.value);
    }

    // Adress
    const [address, setAddress] = useState(null);
    const handleAdress = e => {
        setAddress(e.target.value)
    }

    // Homepage
    const [homepage, setHomepage] = useState(null);
    const handleHomepage = e => {
        setHomepage(e.target.value);
    }

    // World Country City Region Id
    const [worldCountryCityRegionId, setWorldCountryCityRegionId] = useState(null);
    const handleWorldCountryCityRegionId = e => {
        setWorldCountryCityRegionId(e.target.value);
    }

    var formData = new FormData();
    

    const value = {
        name: name,
        description: description,
        address: address,
        homepage: homepage,
        worldCountryCityRegionId: worldCountryCityRegionId,
    }

    // Axios Upload
    const onClickUpload = async () => {
        try {
            formData.append("file", file);
            formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

            const response = await axios.post("/api/admin/landmarkProcess", formData, {
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

    // World Country City Region List
    const [worldCountryCityRegionListLoading, worldCountryCityRegionList, worldCountryCityRegionListError] = useApiGet(() => {
        return axios.get("/api/worldCountryCityRegionList");
    }, []);

    // Landmark All List
    const [landmarkListLoading, landmarkList, landmarkListError] = useApiGet(() => {
        return axios.get("/api/landmarkAllList");
    }, [])

    return(
        <div className="admin-landmark-upload-wrap">
            <h2>랜드마크 업로드</h2>

            <div className="admin-landmark-upload">
                <span>이름</span>
                <input name="name" onChange={handleName} /><br/><br/>

                <span>이미지</span>
                <input name="file" type="file" onChange={handleFile} /><br/><br/>
                
                <span>설명</span>
                <textarea name="description" onChange={handleDescription} /><br/><br/>

                <span>주소</span>
                <input name="address" onChange={handleAdress} /><br/><br/>

                <span>홈페이지</span>
                <input name="homepage" onChange={handleHomepage} /><br/><br/>

                <span>지역</span>
                <select onChange={handleWorldCountryCityRegionId}>
                    <option selected disabled>
                        선택하시오
                    </option>
                    {worldCountryCityRegionList != null && !worldCountryCityRegionListLoading ?
                    <>
                        {worldCountryCityRegionList.data.items.map(region => (
                            <option value={region.id}>
                                {region.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select><br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>랜드마크(관광지) 리스트</h2>

            <div className="admin-landmark-list">
                {landmarkList != null && !landmarkListLoading ?
                <>
                    {landmarkList.data.items.map(landmark => (
                        <div>
                            <span className="title" >{landmark.id} - {landmark.name}</span>

                            <br/>

                            
                            <button>삭제</button>
                            <Link to={`/admin/landmark/landmark/modify/${landmark.id}`}>수정</Link>
                            <hr/>
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

export default AdminLandmark;