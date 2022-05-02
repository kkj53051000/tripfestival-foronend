import React from "react";
import "../../../css/AdminLandmarkTime.css";

const AdminLandmarkTime = () => {
    return (
        <div className="admin-landmark-time-wrap">
            <div className="admin-landmark-time-list">
                <div className="admin-landmark-time-item">
                    <span className="title">PK + 관광지 이름</span>
                    <br/><br/>
                    <span>img link</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkTime;