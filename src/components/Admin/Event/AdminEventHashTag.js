import React from "react";
import '../../../css/AdminEventHashTag.css';

const AdminEventHashTag = () => {
    return (
        <div className="admin-event-hash-tag-wrap">
            <h2>이벤트 해시태그</h2>
            <div className="admin-event-hash-tag-list">
                <div className="admin-event-hash-tag-item">
                    <span className="title">PK + 해시태그 이름</span>
                    <br/><br/>
                    <span>#해시태그</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEventHashTag;