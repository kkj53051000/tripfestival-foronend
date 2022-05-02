import React from "react";
import '../../../css/AdminEventTime.css';

const AdminEventTime = () => {
    return (
        <div className="admin-event-time-wrap">
            <h2>이벤트 시간</h2>
            <div className="admin-event-time-list">
                <div className="admin-event-time-item">
                    <span className="title">PK + 축제 이름</span>
                    <br/><br/>
                    <input placeholder="이벤트 시간" />
                    <button>수정</button>
                    <button>삭제</button>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default AdminEventTime;