import React from "react";
import '../../../css/AdminWorldCountryCityRegion.css';

const AdminWorldCountryCityRegion = () => {
    return (
        <div className="admin-world-country-city-region-wrap">
            <h2>도시 2</h2>

            <h2>업로드</h2>

            <div className="admin-world-country-city-region-upload">
                <span>이름</span>
                <input name="name" />
                <br/><br/>

                <span>도시 사진</span>
                <input type="file" />
                <br/><br/>

                <span>도시 1</span>
                <select>
                    <option>
                        도시 1
                    </option>
                </select>
                <br/><br/>

                <button>업로드</button>
            </div>

            <h2>리스트</h2>
            
            <div className="admin-world-country-city-region-list">
                <div className="item">
                    <input placeholder="도시 2 이름" />
                    <button>수정</button>
                    <button>삭제</button><br/>
                </div>
            </div>
        </div>
    );
};

export default AdminWorldCountryCityRegion;