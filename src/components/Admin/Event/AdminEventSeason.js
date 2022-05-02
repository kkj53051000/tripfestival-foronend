import React from "react";
import '../../../css/AdminEventSeason.css';

const AdminEventSeason = () => {
    return (
        <div className="admin-event-season-wrap">
            <h2>이벤트 시즌</h2>

            <h2>업로드</h2>
            <div className="admin-event-season-upload">
                <span>이름 (*)</span>
                <input name="name" />
                <br/><br/>

                <span>이미지 (1개)</span>
                <input type="file" />
                <br/><br/>

                <button>업로드</button>
                <br/><br/><br/><br/>
            </div>

            <h2>리스트</h2>
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