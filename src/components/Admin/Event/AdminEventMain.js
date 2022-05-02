import React from "react";
import { Link } from "react-router-dom";
import "../../../css/AdminEventMain.css";

const AdminEventMain = () => {
    return (
        <div className="admin-event-main">
            <Link to="/admin/event/event">
                <h1>이벤트</h1>
            </Link>
        </div>
    );
};

export default AdminEventMain;