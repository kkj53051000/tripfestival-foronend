import React from "react";
import "../../../css/AdminLandmark.css";

const AdminLandmarkUpload = () => {
    return(
        <div className="admin-landmark-upload-wrap">
            <h2>랜드마크 업로드</h2>

            <div>
                <span>이름</span>
                <input /><br/><br/>
                <span>설명</span>
                <textarea /><br/><br/>
                <span>주소</span>
                <input /><br/><br/>
                <span>홈페이지</span>
                <input /><br/><br/>

                <button>업로드</button>
            </div>
        </div>
    );
};

export default AdminLandmarkUpload;