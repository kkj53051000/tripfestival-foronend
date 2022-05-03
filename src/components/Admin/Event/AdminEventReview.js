import React from "react";
import '../../../css/event/AdminEventReview.css';

const AdminEventReview = () => {
    return (
        <div className="admin-event-review-wrap">
            <div className="admin-event-review-list">
                <div className="admin-event-review-item">
                    <span className="event-title">PK + 관광지 이름</span><br/><br/>

                    <span className="event-title">리뷰 제목</span><br/><br/>

                    <span>리뷰 내용</span><br/><br/>

                    <pan>리뷰 사진</pan><br/><br/>

                    <button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEventReview;