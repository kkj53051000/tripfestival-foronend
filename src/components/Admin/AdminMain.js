import React from "react";
import { Link } from "react-router-dom";
import "../../css/AdminMain.css";

const AdminMain = () => {
    return (
        <div className="admin-main-wrap">
            <Link to="/admin/landmark">
                <h1>랜드마크(관광지)</h1>
            </Link>

            <Link to="/admin/event">
                <h1>이벤트(축제)</h1>
            </Link>

            <Link to="/admin/hotsight">
                <h1>Hotsight(스페셜)</h1>
            </Link>
        </div>
    );
};

export default AdminMain;