import React from "react";
import Header from "../components/Header";
import FestivalAreaList from "../components/Festival/FestivalAreaList";
import Footer from "../components/Footer";

const FestivalAreaListPage = () => {
    return (
        <div>
            <Header />
            <FestivalAreaList />
            <Footer />
        </div>
    );
};

export default FestivalAreaListPage;