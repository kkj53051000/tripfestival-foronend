import React from "react";
import { Link } from "react-router-dom";
import "../../css/AdminMain.css";

const AdminMain = () => {
    return (
        <div className="admin-main-wrap">
            <h1>유저</h1>
            <Link to='/admin/user'>
                <h1>유저</h1>
            </Link>

            <h1>세계</h1>
            <Link to="/admin/world">
                <h1>세계</h1>
            </Link>

            <h1>관광지</h1>
            <Link to="/admin/landmark">
                <h1>랜드마크(관광지)</h1>
            </Link>

            <Link to="/admin/hotspot">
                <h1>인공관광지</h1>
            </Link>

            <Link to="/admin/naturehotspot">
                <h1>자연관광지</h1>
            </Link>

            <h1>축제</h1>
            <Link to="/admin/event">
                <h1>이벤트(축제)</h1>
            </Link>

            <h1>스페셜</h1>
            <Link to="/admin/hotsight">
                <h1>Hotsight(스페셜)</h1>
            </Link>
        </div>
    );
};

export default AdminMain;