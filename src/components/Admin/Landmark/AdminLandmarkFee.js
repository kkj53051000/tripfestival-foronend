import React from "react";
import "../../../css/landmark/AdminLandmarkFee.css";

const AdminLandmarkFee = () => {
    return (
        <div className="admin-landmark-fee-wrap">
            <h2>랜드마크 가격</h2>
            <div className="admin-landmark-fee-list">
                <div className="admin-landmark-fee-item">
                    <span className="title">PK + 관광지 이름</span>
                    <br/><br/>

                    <span>제목</span>
                    <input name="title" />
                    <br/><br/>
                    <span>가격</span>
                    <input name="price" />
                    <br/><br/>
                    <button>업로드</button>
                    <br/><br/><br/><br/>

                    <input placeholder="관광지 가격 제목" />
                    <input placeholder="관광지 가격" />
                    <button>수정</button>
                    <button>삭제</button>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkFee;