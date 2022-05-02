import React from "react";
import { Link } from "react-router-dom";
import "../../css/AdminHeader.css";

const AdminHeader = () => {
    return(
        <div className="admin-header-wrap">
            <Link to="/admin" className="admin-header-title">오늘은여행 관리자 페이지</Link>
        </div>
    );
};

export default AdminHeader;