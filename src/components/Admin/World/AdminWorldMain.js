import React from "react";
import { Link } from "react-router-dom";
import '../../../css/world/AdminWorldMain.css';

const AdminWorldMain = () => {
    return (
        <div className="admin-world-main-wrap">
            <Link to='/admin/world/country'>
                <h1>WorldCountry (나라)</h1>
            </Link>

            <Link to='/admin/world/country/city'>
                <h1>WorldCountryCity (도시 1)</h1>
            </Link>

            <Link to='/admin/world/country/city/region'>
                <h1>WorldCountryCityRegion (도시 2)</h1>
            </Link>
        </div>
    );
};

export default AdminWorldMain;