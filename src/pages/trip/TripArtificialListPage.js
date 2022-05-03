import React from "react";
import Header from "../../components/Header";
import TripArtificialList from "../../components/trip/TripArtificialList";
import Footer from "../../components/Footer";

const TripArtificialListPage = () => {
    return (
        <div>
            <Header />
            <TripArtificialList />
            <Footer />
        </div>
    );
};

export default TripArtificialListPage;