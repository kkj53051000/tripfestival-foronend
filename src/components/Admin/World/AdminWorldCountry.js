import React from "react";
import '../../../css/AdminWorldCountry.css';

const AdminWorldCountry = () => {
    return (
        <div className="admin-world-country-wrap">
            <h2>세계 나라</h2>

            <h2>업로드</h2>

            <div className="admin-world-country-upload">
                <span>이름</span>
                <input name="name" />
                <br/><br/>

                <span>국기</span>
                <input type="file" />
                <br/><br/>

                <span>통화</span>
                <input name="currency" />
                <br/><br/>

                <span>수도</span>
                <input name="capital" />
                <br/><br/>

                <span>환율</span>
                <input name="환율" />
                <br/><br/>

                <button>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-world-country-list">
                <div className="item">
                    <input placeholder="나라 이름" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminWorldCountry;