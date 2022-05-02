import React from "react";
import "../../../css/AdminLandmarkHashTag.css";

const AdminLandmarkHashTag = () => {
    return(
        <div className="admin-landmark-hash-tag-wrap">
            <div className="admin-landmark-hash-tag-list">
                <div className="admin-landmark-hash-tag-item">
                    <span className="title">PK + 관광지 이름</span>
                    <br/><br/>

                    <span>해시태그</span>
                    <input name="name" />
                    <button>추가</button>
                    <br/><br/>
                    

                    <span>#해시태그</span><button>삭제</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLandmarkHashTag;