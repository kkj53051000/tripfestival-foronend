import React from "react";
import "../../../css/landmark/AdminLandmarkTime.css";

const AdminLandmarkTime = () => {
    return (
        <div className="admin-landmark-time-wrap">
            <h2>관광지 시간</h2>
            <div className="admin-landmark-time-list">
                <div className="admin-landmark-time-item">
                    <span className="title">PK + 관광지 이름</span>
                    <br/><br/>

                    <span>제목</span>
                    <input name="title" />
                    <br/><br/>

                    <span>시작 시간</span>
                    <input type="time" />
                    <br/><br/>

                    <span>끝나는 시간</span>
                    <input type="time" />
                    <br/><br/>

                    <button>업로드</button>
                    <br/><br/><br/><br/>

                    <input placeholder="관광지 시간" />
                    <button>수정</button>
                    <button>삭제</button>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkTime;