import React, { useState } from "react";
import '../../../css/naturehotspot/AdminNatureHotSpotType.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminNatureHotSpotType = () => {

    const url = "/admin/naturehotspot/type";

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

    var formData = new FormData();

    
    // Axios Upload
    const onClickUpload = async () => {
        try {
            const value = {
                name: name
            }
            formData.append("file", file);
            formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

            const response = await axios.post("/api/admin/natureHotspotTypeProcess", formData, {
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

            const response = await axios.post("/api/admin/natureHotspotTypeRemove/" + e.target.value)
            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }

    // Landmark List
    const [natureHotspotTypeListLoading, natureHotspotTypeList, natureHotspotTypeListError] = useApiGet(() => {
        return axios.get("/api/natureHotspotTypeAllList");
    }, [])


    return (
        <div className="admin-nature-hot-spot-type-wrap">
            <h2>자연관광지 타입</h2>

            <h2>업로드</h2>

            <div className="admin-nature-hot-spot-type-upload">
                <span>이름</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>이미지</span>
                <input type="file" onChange={handleFile} />
                <br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-nature-hot-spot-type-list">
                
                {natureHotspotTypeList != null && !natureHotspotTypeListLoading ?
                <>
                    {natureHotspotTypeList.data.items.map(type => (
                        <div className="item" key={type.id}>
                            <input placeholder={type.name} />
                            
                            <button value={type.id} onClick={onClickRemove} >삭제</button><br/>
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

export default AdminNatureHotSpotType;