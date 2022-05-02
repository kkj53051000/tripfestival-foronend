import React from "react";
import '../../../css/AdminEventSeason.css';

const AdminEventSeason = () => {
    return (
        <div className="admin-event-season-wrap">
            <h2>이벤트 시즌</h2>
            <div className="admin-event-season-list">
                <div className="item">
                    <input placeholder="1월" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminEventSeason;