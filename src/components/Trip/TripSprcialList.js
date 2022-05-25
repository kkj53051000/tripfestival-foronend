import React from "react";
import { Link } from "react-router-dom";
import "../../css/trip/TripSpecial.css";

const TripSpecialList = () => {
    return (
        <div className="main-special-wrap">

            <div className="main-special-item">
                <img src="https://upload.wikimedia.org/wikipedia/ko/e/ee/%EB%AF%B8%EC%89%90%EB%A6%B0_%EA%B0%80%EC%9D%B4%EB%93%9C_%EC%84%9C%EC%9A%B8_%ED%91%9C%EC%A7%80.jpg" alt="test" />

                <Link className="title-wrap" to="/tripspecialmenu">
                    <span className="title">미슐랭 가이드</span>
                </Link>
            </div>

            <div className="main-special-item">
                <img src="http://health.chosun.com/site/data/img_dir/2019/12/03/2019120301980_0.jpg" alt="test" />

                <div className="title-wrap">
                    <span className="title">꽃</span>
                </div>
            </div>

            <div className="main-special-item">
                <img src="https://img.hankyung.com/photo/202112/BF..1.jpg" alt="test" />

                <div className="title-wrap">
                    <span className="title">예능</span>
                </div>
            </div>

        </div>
    );
};

export default TripSpecialList;