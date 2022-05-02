import React from "react";
import { Link } from "react-router-dom";
import '../../../css/AdminNatureHotSpotMain.css';

const AdminNatureHotSpotMain = () => {
    return (
        <div className="admin-nature-hot-spot-main-wrap">
            <Link to="/admin/naturehotspot/type">
                <h1>자연광광지 타입</h1>
            </Link>

            <Link to="/admin/naturehotspot/naturehotspot">
                <h1>자연광광지</h1>
            </Link>
        </div>
    );
};

export default AdminNatureHotSpotMain;