import React, { useState } from "react";
import '../../../css/hotspot/AdminHotSpotType.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminHotSpotType = () => {

    const url = "/admin/hotspot/type";

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    const [file, setFile] = useState(null);
    const handleFile = e => {
        setFile(e.target.files[0]);
    }

    var formData = new FormData();

    const value = {
        name: name
    }

    // Axios Upload
    const onClickUpload = async () => {
        try {
            formData.append("file", file);
            formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

            const response = await axios.post("/api/admin/hotspotTypeProcess", formData, {
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

    // Axios Remove
    const onClickRemove = async ( e ) => {
        try {
            const response = await axios.post("/api/admin/hotspotTypeRemove/" + e.target.value)

            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }

    // Hotspot Type List
    const [hotspotTypeListLoading, hotspotTypeList, hotspotTypeListError] = useApiGet(() => {
        return axios.get("/api/hotspotTypeAllList");
    }, [])

    return (
        <div className="admin-hot-spot-type-wrap">
            <h2>인공관광지 타입</h2>

            <h2>업로드</h2>

            <div className="admin-hot-spot-type-upload">
                <span>이름</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>이미지</span>
                <input type="file" onChange={handleFile} />
                <br/><br/>

                <button onClick={onClickUpload} >업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-hot-spot-type-list">
                
                {hotspotTypeList != null && !hotspotTypeListLoading ?
                <>
                    {hotspotTypeList.data.items.map(hotspotType => (
                        <div className="item">
                            <input placeholder={hotspotType.name} />
                            <button value={hotspotType.id} onClick={onClickRemove} >삭제</button><br/>
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

export default AdminHotSpotType;