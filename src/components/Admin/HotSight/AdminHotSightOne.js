import React from "react";
import '../../../css/hotsight/AdminHotSightOne.css';

const AdminHotSightOne = () => {
    return (
        <div className="admin-hot-sight-one-wrap">
            <h2>스페셜 1 업로드/리스트</h2>

            <h2>업로드</h2>
            <div className="admin-hot-sight-one-upload">

                <span>이름</span>
                <input name="name" /><br/><br/>

                <span>이미지</span>
                <input type="file" /><br/><br/>

                <button>업로드</button>
            </div>
            
            <h2>리스트</h2>

            <div className="admin-hot-sight-one-list">
                <span style={{fontSize: '26px', fontWeight: 'bold'}}>pk + 이름 : </span>
                <br/><br/>

                <span>이미지 링크</span>
                <br/><br/>

                <button>삭제</button>
                <br/><br/>
            </div>
        </div>
    );
};

export default AdminHotSightOne;