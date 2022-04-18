import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    const onClickBtn = (e) => {
        e.preventDefault();
    }


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
                header-main-logo
            </Link>
            <div className="header-login-join">
                <button href="#" class="btn-gradient green small" onClick={onClickBtn}>로그인</button>
                <button href="#" class="btn-gradient red small" onClick={onClickBtn}>회원가입</button>
            </div>
        </div>
    );
};

export default Header;