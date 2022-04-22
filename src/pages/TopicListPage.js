import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopicList from "../components/TopicList";

const TopicListPage  = () => {
    return(
        <div>
            <Header />
            <TopicList />
            <Footer />
        </div>
    );
};

export default TopicListPage;