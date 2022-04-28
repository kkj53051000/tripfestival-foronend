import React from "react";
import Header from "../components/Header";
import FestivalMonthList from "../components/Festival/FestivalMonthList";
import Footer from "../components/Footer";

const FestivalMonthListPage = () => {
    return(
        <div>
            <Header />
            <FestivalMonthList />
            <Footer />
        </div>
    );
};

export default FestivalMonthListPage;