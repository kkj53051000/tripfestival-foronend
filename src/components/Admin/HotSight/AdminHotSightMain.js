import React from "react";
import { Link } from "react-router-dom";
import '../../../css/AdminHotSightMain.css';

const AdminHotSightMain = () => {
    return (
        <div className="admin-hot-sight-main-wrap">
            <Link to="/admin/hotsight/one">
                <h1>HotSightOne</h1>
            </Link>
        </div>
    );
};

export default AdminHotSightMain;