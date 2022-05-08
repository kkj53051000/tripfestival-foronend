import React, { useState } from "react";
import '../../../css/hotsight/AdminHotSightOne.css';
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminHotSightOne = () => {

    const url = "/admin/hotsight/one";

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // Fiel
    const [file, setFile] = useState(null);
    const handleFile = e => {
        setFile(e.target.files[0])
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

            const response = await axios.post("/api/admin/hotSightOneProcess", formData, {
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
            const response = await axios.post("/api/admin/hotSightOneRemove/" + e.target.value)

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }



    // Hot Sight One
    const [hotSightOneListLoading, hotSightOneList, hotSightOneListError] = useApiGet(() => {
        return axios.get("/api/hotSightOneAllList")
    }, [])

    return (
        <div className="admin-hot-sight-one-wrap">
            <h2>스페셜 1 업로드/리스트</h2>

            <h2>업로드</h2>
            <div className="admin-hot-sight-one-upload">

                <span>이름</span>
                <input name="name" onChange={handleName} /><br/><br/>

                <span>이미지</span>
                <input type="file" onChange={handleFile} /><br/><br/>

                <button onClick={onClickUpload}>업로드</button>
            </div>
            
            <h2>리스트</h2>

            <div className="admin-hot-sight-one-list">
                
                {hotSightOneList != null && !hotSightOneListLoading ?
                <>
                    {hotSightOneList.data.items.map(hotSightOne => (
                        <>
                            <span style={{fontSize: '26px', fontWeight: 'bold'}}>{hotSightOne.id} - {hotSightOne.name}</span>
                            <br/><br/>

                            <span>이미지 링크</span>
                            <br/><br/>

                            <button value={hotSightOne.id} onClick={onClickRemove} >삭제</button>
                            <br/><br/>
                        </>
                    ))}
                </>
                :
                <></>
                }
            </div>
        </div>
    );
};

export default AdminHotSightOne;