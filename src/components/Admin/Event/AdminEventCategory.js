import React from "react";
import '../../../css/event/AdminEventCateogry.css';

const AdminEventCateogry = () => {
    return (
        <div className="admin-event-catgory-wrap">
            <h2>이벤트 카테고리</h2>

            <h2>업로드</h2>
            <div className="admin-event-category-upload">
                <span>이름</span>
                <input name="name" />
                <br/><br/>

                <span>사진</span>
                <input name="img" type="file" />
                <br/><br/>
                
                <button>업로드</button>
            </div>


            <h2>리스트</h2>
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