import React from "react";
import '../../../css/AdminEventImg.css';

const AdminEventImg = () => {
    return (
        <div className="admin-event-img-wrap">
            <h2>랜드마크 이미지</h2>

            <div className="admin-event-img-list">
                <div className="admin-event-img-item">
                    <span className="title">PK + 이벤트 이름</span>
                    <br/><br/>

                    <input type="file" />
                    <button>추가</button>
                    <br/><br/><br/>

                    <span>img link</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEventImg;