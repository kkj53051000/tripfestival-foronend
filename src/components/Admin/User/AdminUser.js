import React from "react";
import '../../../css/AdminUser.css';

const AdminUser = () => {
    return (
        <div className="admin-user-wrap">
            <h2>유저 리스트</h2>
            <div className="admin-user-list">
                <div className="admin-user-item">
                    <span className="title">USER IMG</span><br/><br/>

                    <span>uid, nickname, email, deleteAt</span>
                </div>
            </div>
        </div>
    );
};

export default AdminUser;