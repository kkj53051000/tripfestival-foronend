import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    // const onClickBtn = (e) => {
    //     e.preventDefault();
    // }


    return (
        <div className="header-wrap">
            <div className="header-select-country">
                    <select name="fruits" class="select">
                        <option value="apple" selected>Korea 🇰🇷</option>
                        <option value="orange">USA</option>
                        <option value="grape">Japan</option>
                        <option value="melon">China</option>
                    </select>                    
            </div>
            <Link to="/" className="header-main-logo">
                아무튼, 여행
            </Link>
            <div className="header-login-join">
                {/* <button href="#" class="btn-gradient green small" onClick={onClickBtn}>로그인</button>
                <button href="#" class="btn-gradient red small" onClick={onClickBtn}>회원가입</button> */}

                <Link to="/login" className="header-login-btn">로그인</Link>
                <Link to="/" className="header-join-btn">회원가입</Link>
            </div>
        </div>
    );
};

export default Header;