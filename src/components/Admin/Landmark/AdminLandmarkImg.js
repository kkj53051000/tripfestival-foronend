import React from "react";
import "../../../css/AdminLandmarkImg.css";

const AdminLandmarkImg = () => {
    return (
        <div className="admin-landmark-img-wrap">
            <h2>랜드마크 이미지</h2>

            <div className="admin-landmark-img-list">
                <div className="admin-landmark-img-item">
                    <span className="title">PK + 관광지 이름</span>
                    <br/><br/>
                    <span>img link</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkImg;