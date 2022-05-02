import React from "react";
import '../../../css/AdminEventCateogry.css';

const AdminEventCateogry = () => {
    return (
        <div className="admin-event-catgory-wrap">
            <h2>이벤트 카테고리</h2>
            <div className="admin-event-category-list">
                <div className="item">
                    <input placeholder="카테고리명" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminEventCateogry;