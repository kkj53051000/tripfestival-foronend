import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TripSpecialList from "../../components/trip/TripSprcialList";

const TripSpecialPage = () => {
    return (
        <div>
            <Header />
            <TripSpecialList />
            <Footer />
        </div>
    );
};

export default TripSpecialPage;