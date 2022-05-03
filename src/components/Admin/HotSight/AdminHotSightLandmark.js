import React from "react";
import '../../../css/hotsight/HotSightLandmark.css';

const AdminHotSightLandmark = () => {
    return (
        <div className="admin-hot-sight-one-wrap">
            <h2>스페셜 관광지 업로드/리스트</h2>

            <h2>업로드</h2>
            <div className="admin-hot-sight-one-upload">

                <span>이미지</span>
                <input type="file" /><br/><br/>

                <span>랜드마크</span>
                <select>
                    <option>랜드마크</option>
                </select>
                <br/><br/>

                <span>스페셜 2</span>
                <select>
                    <option>스페셜 2</option>
                </select>
                <br/><br/>

                <button>업로드</button>
            </div>
            
            
            <h2>리스트</h2>

            <div className="admin-hot-sight-one-list">
                <span style={{fontSize: '26px', fontWeight: 'bold'}}>랜드마크 이름</span>
                <br/><br/>

                <span style={{fontSize: '26px', fontWeight: 'bold'}}>스페셜 2 title</span>
                <br/><br/>

                <button>삭제</button>
                <br/><br/>
            </div>
        </div>
    );
};

export default AdminHotSightLandmark;