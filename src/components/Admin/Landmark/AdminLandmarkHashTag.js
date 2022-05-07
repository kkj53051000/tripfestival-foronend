import React, { useState } from "react";
import "../../../css/landmark/AdminLandmarkHashTag.css";
import axios from "axios";
import useApiGet from "../../../lib/useApiGet";

const AdminLandmarkHashTag = () => {

    const url = "/admin/landmark/hashtag";

    // Name
    const [name, setName] = useState(null);
    const handleName = e => {
        setName(e.target.value);
    }

    // Landmark Id
    const [landmarkId, setLandmarkId] = useState(null);
    const handleLandmarkId = e => {
        setLandmarkId(e.target.value);
    }

    const value = {
        name: name,
        landmarkId: landmarkId
    }

    // Axios Upload
    const onClickUpload = async () => {
        try {

            const response = await axios.post("/api/admin/landmarkHashTagProcess", value)

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
            const response = await axios.post("/api/admin/landmarkHashTagRemove/" + e.target.value)

            if(response.data.status === 'SUCCESS') {
                alert("삭제 성공");
                window.location.replace(url)
            }
        } catch(e) {
            console.log(e);
        }
    }


    // Landmark
    const [landmarkListLoading, landmarkList, landmarkListError] = useApiGet(() => {
        return axios.get("/api/landmarkAllList");
    }, [])

    // Landmark Hash Tag
    const [landmarkHashTagListLoading, landmarkHashTagList, landmarkHashTagListError] = useApiGet(() => {
        return axios.get("/api/landmarkHashTagAllList");
    }, [])



    return(
        <div className="admin-landmark-hash-tag-wrap">

            <div className="admin-landmark-hash-tag-upload">
                <span>해시태그</span>
                <input name="name" onChange={handleName} />
                <br/><br/>

                <span>관광지 (landmark) </span>
                <select onChange={handleLandmarkId}>
                    <option selected disabled>
                        선택하시오
                    </option>
                    {landmarkList != null && !landmarkListLoading ?
                    <>
                        {landmarkList.data.items.map(landmark => (
                            <option value={landmark.id}>
                                {landmark.name}
                            </option>
                        ))}
                    </>
                    :
                    <></>
                    }
                </select>
                <br/><br/>
                
                <button onClick={onClickUpload} >추가</button>
                <br/><br/>
            </div>


            <div className="admin-landmark-hash-tag-list">
                <div className="admin-landmark-hash-tag-item">
                    
                    {landmarkHashTagList != null && !landmarkHashTagListLoading ?
                    <>
                        {landmarkHashTagList.data.items.map(hashTag => (
                            <>
                                <span className="title">PK - 관광지 이름</span>
                                <br/><br/>
                            
                                <span>{hashTag.name} </span>
                                <button value={hashTag.id} onClick={onClickRemove} >삭제</button>
                                <br/><br/>
                            </>
                        ))}
                    </>
                    :
                    <>
                    </>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkHashTag;