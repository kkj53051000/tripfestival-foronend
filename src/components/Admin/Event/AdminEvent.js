import React from "react";
import "../../../css/AdminEvent.css";

const AdminEvent = () => {
    return (
        <div className="admin-event-upload-wrap">
            <h2>이벤트(축제) 업로드</h2>

            <div className="admin-event-upload">
                <span>이름</span>
                <input /><br/><br/>
                <span>설명</span>
                <textarea /><br/><br/>
                <span>주소</span>
                <input /><br/><br/>
                <span>방문객</span>
                <input /><br/><br/>
                <span>inout</span>
                <input /><br/><br/>

                <span>리젼</span>
                <select>
                    <option>어딘가</option>
                </select>
                <br/><br/>

                <span>카테고리</span>
                <select>
                    <option>무언가</option>
                </select>
                <br/><br/>

                <span>시즌</span>
                <select>
                    <option>1월</option>
                </select>
                <br/><br/>



                <button>업로드</button>
            </div>

            <h2>이벤트(축제) 리스트</h2>

            <div className="admin-event-list">
                <span className="title">PK + 축제 이름</span>

                <br/>

                <input className="name" placeholder="축제 이름" />

                <textarea className="description" placeholder="설명 내용" />

                <input className="adress" placeholder="주소 내용" />

                <input className="visitor" placeholder="방문객 수" />

                <input className="worldcountrycityregion" placeholder="리전Id" />

                <input className="eventCategory" placeholder="이벤트 카테고리Id" />

                <input className="eventSeason" placeholder="이벤트 시즌Id (월)" />

                <br/><br/>

                <button>수정</button>
            </div>
        </div>
    );
};

export default AdminEvent;