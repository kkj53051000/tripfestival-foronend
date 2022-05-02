import React from "react";
import "../../../css/AdminLandmarkMain.css";
import AdminLandmark from "./AdminLandmarkUpload";

const AdminLandmarkMain = () => {
    return(
        <div className="admin-landmark-main-wrap">
            <h1>랜드마크 관리 페이지</h1>
            <AdminLandmark />
        </div>
    );
};

export default AdminLandmarkMain;