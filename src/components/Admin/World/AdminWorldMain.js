import React from "react";
import { Link } from "react-router-dom";
import '../../../css/AdminWorldMain.css';

const AdminWorldMain = () => {
    return (
        <div className="admin-world-main-wrap">
            <Link to='/admin/world/country'>
                <h1>WorldCountry (나라)</h1>
            </Link>
        </div>
    );
};

export default AdminWorldMain;