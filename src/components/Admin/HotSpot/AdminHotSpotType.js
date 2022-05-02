import React from "react";
import '../../../css/AdminHotSpotType.css';

const AdminHotSpotType = () => {
    return (
        <div className="admin-hot-sight-type-wrap">
            <h2>인공관광지 타입</h2>

            <h2>업로드</h2>

            <div className="admin-hot-sight-type-upload">
                <span>이름</span>
                <input name="name" />
                <br/><br/>

                <span>이미지</span>
                <input type="file" />
                <br/><br/>

                <button>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-hot-sight-type-list">
                <div className="item">
                    <input placeholder="인공관광지 이름" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminHotSpotType;