import React from "react";
import { Link } from "react-router-dom";
import '../../../css/hotsight/AdminHotSightMain.css';

const AdminHotSightMain = () => {
    return (
        <div className="admin-hot-sight-main-wrap">
            <Link to="/admin/hotsight/one">
                <h1>스페셜 1</h1>
            </Link>

            <Link to="/admin/hotsight/two">
                <h1>스페셜 2</h1>
            </Link>

            <Link to="/admin/hotsight/landmark">
                <h1>스페셜 관광지</h1>
            </Link>
        </div>
    );
};

export default AdminHotSightMain;