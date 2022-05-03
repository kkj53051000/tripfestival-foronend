import React from "react";
import '../../../css/event/AdminEventTime.css';

const AdminEventTime = () => {
    return (
        <div className="admin-event-time-wrap">
            <h2>이벤트 시간</h2>
            <div className="admin-event-time-list">
                <div className="admin-event-time-item">
                    <span className="title">PK + 축제 이름</span>
                    <br/><br/>

                    <span>제목</span>
                    <input name="title" />
                    <br/><br/>

                    <span>시작 시간</span>
                    <input name="startTime" type="time" />
                    <br/><br/>

                    <span>끝나는 시간</span>
                    <input name="endTime" type="time" />
                    <br/><br/>

                    <button>업로드</button>
                    <br/><br/><br/><br/>

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