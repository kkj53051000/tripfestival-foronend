import React from "react";
import '../../../css/AdminWorldCountryCity.css';

const AdminWorldCountryCity = () => {
    return (
        <div className="admin-world-country-city-wrap">
            <h2>도시 1</h2>

            <h2>업로드</h2>

            <div className="admin-world-country-city-upload">
                <span>이름</span>
                <input name="name" />
                <br/><br/>

                <span>도시 사진</span>
                <input type="file" />
                <br/><br/>

                <span>나라</span>
                <select>
                    <option>
                        대한민국
                    </option>
                </select>
                <br/><br/>

                <button>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-world-country-city-list">
                <div className="item">
                    <input placeholder="도시 1 이름" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminWorldCountryCity;