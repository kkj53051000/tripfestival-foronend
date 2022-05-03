import React from "react";
import { Link } from "react-router-dom";
import "../../../css/event/AdminEventMain.css";

const AdminEventMain = () => {
    return (
        <div className="admin-event-main">
            <Link to="/admin/event/event">
                <h1>이벤트</h1>
            </Link>

            <Link to="/admin/event/category">
                <h1>이벤트 카테고리</h1>
            </Link>

            <Link to="/admin/event/fee">
                <h1>이벤트 가격</h1>
            </Link>

            <Link to="/admin/event/hashtag">
                <h1>이벤트 해시태그</h1>
            </Link>

            <Link to="/admin/event/img">
                <h1>이벤트 이미지</h1>
            </Link>

            <Link to="/admin/event/review">
                <h1>이벤트 리뷰</h1>
            </Link>

            <Link to="/admin/event/season">
                <h1>이벤트 시즌</h1>
            </Link>

            <Link to="/admin/event/time">
                <h1>이벤트 시간</h1>
            </Link>
        </div>
    );
};

export default AdminEventMain;