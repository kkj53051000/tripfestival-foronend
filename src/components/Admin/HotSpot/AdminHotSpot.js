import React from "react";
import '../../../css/AdminHotSpot.css';

const AdminHotSpot = () => {
    return (
        <div className="admin-hot-spot-wrap">
            <h2>인공관광지</h2>

            <h2>업로드</h2>
            <div className="admin-hot-spot-upload">
                <span>랜드마크</span>
                <select>
                    <option>랜드마크</option>
                </select>
                <br/><br/>

                <span>스페셜 타입</span>
                <select>
                    <option>타입</option>
                </select>
                <br/><br/>

                <button>업로드</button>
            </div>

            <h2>리스트</h2>
            <div className="admin-hot-spot-list">
                <div className="item">
                    <span>pk + 관광지 이름</span><br/><br/>
                    <span>스페셜 타입 이름</span><br/><br/>
                    <button>삭제</button>
                </div>
            </div>
        </div>
    );
};
export default AdminHotSpot;