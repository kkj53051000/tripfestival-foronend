import React from "react";
import '../../../css/naturehotspot/AdminNatureHotSpotType.css';

const AdminNatureHotSpotType = () => {
    return (
        <div className="admin-nature-hot-spot-type-wrap">
            <h2>자연관광지 타입</h2>

            <h2>업로드</h2>

            <div className="admin-nature-hot-spot-type-upload">
                <span>이름</span>
                <input name="name" />
                <br/><br/>

                <span>이미지</span>
                <input type="file" />
                <br/><br/>

                <button>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-nature-hot-spot-type-list">
                <div className="item">
                    <input placeholder="자연관광지 이름" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminNatureHotSpotType;