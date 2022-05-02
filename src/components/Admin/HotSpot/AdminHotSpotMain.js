import React from "react";
import { Link } from "react-router-dom";
import '../../../css/AdminHotSpotMain.css';

const AdminHotSpotMain = () => {
    return (
        <div className="admin-hot-spot-main-wrap">
            <Link to="/admin/hotspot/type">
                <h1>인공관광지 타입</h1>
            </Link>

            <Link to='/admin/hotspot/hotspot'>
                <h1>인공관광지</h1>
            </Link>
        </div>
    );
};

export default AdminHotSpotMain;