import React from "react";
import { Link } from "react-router-dom";
import "../../../css/user/AdminUserMain.css";

const AdminUserMain = () => {
    return (
        <div className="admin-user-main-wrap">
            <Link to='/admin/user/user'>
                <h1>유저 관리</h1>
            </Link>
        </div>
    );
};

export default AdminUserMain;