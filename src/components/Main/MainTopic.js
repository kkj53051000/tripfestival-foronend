import React from "react";
import { Link } from "react-router-dom";
import "../../css/MainTopic.css";

const MainTopic = () => {
    return (
        <div className="main-topic">
            <Link to="/topiclist" className="main-special">
                <span className="main-special-span">스페셜 토픽</span>
            </Link>
            <div className="main-topic-list">
                <div className="main-topic-one">
                    
                </div>

                <div className="main-topic-two">

                </div>
            </div>
        </div>
    );
};

export default MainTopic;