import React from "react";
import "../../../css/AdminLandmarkReview.css";

const AdminLandmarkReview = () => {
    return (
        <div className="admin-landmark-review-wrap">
            <div className="admin-landmark-review-list">
                <div className="admin-landmark-review-item">
                    <span className="landmark-title">PK + 관광지 이름</span><br/><br/>

                    <span className="review-title">리뷰 제목</span><br/><br/>

                    <span>리뷰 내용</span><br/><br/>

                    <pan>리뷰 사진</pan><br/><br/>

                    <button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkReview;