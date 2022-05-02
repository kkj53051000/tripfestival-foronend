import React from "react";
import "../../../css/AdminLandmark.css";

const AdminLandmark = () => {
    return(
        <div className="admin-landmark-upload-wrap">
            <h2>랜드마크 업로드</h2>

            <div className="admin-landmark-upload">
                <span>이름</span>
                <input /><br/><br/>
                <span>설명</span>
                <textarea /><br/><br/>
                <span>주소</span>
                <input /><br/><br/>
                <span>홈페이지</span>
                <input /><br/><br/>

                <button>업로드</button>
            </div>

            <h2>랜드마크 리스트</h2>

            <div className="admin-landmark-list">
                <span className="title">PK + 관광지 이름</span>

                <br/>

                <input className="name" placeholder="관광지 이름" />

                <textarea className="description" placeholder="설명 내용" />

                <input className="adress" placeholder="주소 내용" />

                <input className="homepage" placeholder="홈페이지 내용" />

                <input className="worldcountrycityregion" placeholder="리전Id" />

                <br/><br/>

                <button>수정</button>
            </div>
        </div>
    );
};

export default AdminLandmark;