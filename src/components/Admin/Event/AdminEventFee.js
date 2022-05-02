import React from "react";
import '../../../css/AdminEventFee.css';

const AdminEventFee = () => {
    return (
        <div className="admin-event-fee-wrap">
            <h2>이벤트 가격</h2>

            <h2>업로드</h2>
            <div className="admin-event-fee-upload">
                <span>제목</span>
                <input name="title" />
                <br/><br/>

                <span>가격</span>
                <input name="price" />
                <br/><br/>

                <button>업로드</button>
            </div>


            <h2>리스트</h2>
            <div className="admin-event-fee-list">
                <div className="admin-event-fee-item">
                    <span className="title">PK + 이벤트 이름</span>
                    <br/><br/>
                    <input placeholder="이벤트 가격" />
                    <button>수정</button>
                    <button>삭제</button>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default AdminEventFee;