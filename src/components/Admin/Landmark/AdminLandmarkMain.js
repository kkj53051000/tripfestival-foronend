import React from "react";
import { Link } from "react-router-dom";
import "../../../css/AdminLandmarkMain.css";

const AdminLandmarkMain = () => {
    return(
        <div className="admin-landmark-main-wrap">
            <Link to="/admin/landmark/landmark">
                <h1>랜드마크</h1>
            </Link>
            
            <Link to="/admin/landmark/img">
                <h1>랜드마크 이미지</h1>
            </Link>

            <Link to="/admin/landmark/fee">
                <h1>랜드마크 요금</h1>
            </Link>

            <Link to="/admin/landmark/hashtag">
                <h1>랜드마크 해시태그</h1>
            </Link>

            <Link to="/admin/landmark/review">
                <h1>랜드마크 리뷰</h1>
            </Link>
        </div>
    );
};

export default AdminLandmarkMain;