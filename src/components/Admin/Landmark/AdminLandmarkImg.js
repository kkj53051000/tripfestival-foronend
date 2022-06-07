import React, { useState } from "react";
import "../../../css/landmark/AdminLandmarkImg.css";
import axios from "axios";

const AdminLandmarkImg = () => {

    var formData = new FormData();

    //files
    const [files, setFiles] = useState(null);
    const handleFiles = e => {
        const imgList = e.target.files;

        for (let i = 0; i < imgList.length; i++) {
            formData.append("files", imgList[i]);
        }
    }

    // Landmark Id
    const [landmarkId, setLandmarkId] = useState(null);
    const handleLandmarkId = e => {
        setLandmarkId(e.target.value)
    }


    const value = {
        landmarkId: landmarkId
    }

    formData.append("value", new Blob([JSON.stringify(value)], {type: "application/json"}));

    // Axios Upload
    const onClickUpload = async () => {
        try {

            const response = await axios.post("/api/admin/landmarkImgProcess", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if(response.data.status === 'SUCCESS') {
                alert("업로드 성공");
            }
        } catch(e) {
            console.log(e);
        }
    }


    return (
        <div className="admin-landmark-img-wrap">
            <h2>랜드마크 이미지</h2>

            <div className="admin-landmark-img-list">
                <div className="admin-landmark-img-item">
                    
                    <br/><br/>

                    <h2>이미지</h2>
                    <input nmae="files" type="file" multiple onChange={handleFiles} />
                    <h2>랜드마크 아이디</h2>
                    <input name="landmarkId" onChange={handleLandmarkId} />
                    <br/><br/>
                    <button type="submit" onClick={onClickUpload}>업로드</button>


                    <br/><br/>

                    <span className="title">PK + 관광지 이름</span>
                    <span>img link</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkImg;