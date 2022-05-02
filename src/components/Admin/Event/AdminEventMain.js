import React from "react";
import { Link } from "react-router-dom";
import "../../../css/AdminEventMain.css";

const AdminEventMain = () => {
    return (
        <div className="admin-event-main">
            <Link to="/admin/event/event">
                <h1>이벤트</h1>
            </Link>

            <Link to="/admin/event/category">
                <h1>이벤트 카테고리</h1>
            </Link>
        </div>
    );
};

export default AdminEventMain;