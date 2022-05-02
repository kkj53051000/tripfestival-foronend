import React from "react";
import "../../../css/AdminLandmarkFee.css";

const AdminLandmarkFee = () => {
    return (
        <div className="admin-landmark-fee-wrap">
            <div className="admin-landmark-fee-list">
                <div className="admin-landmark-fee-item">
                    <span className="title">PK + 관광지 이름</span>
                    <br/><br/>
                    <span>img link</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkFee;