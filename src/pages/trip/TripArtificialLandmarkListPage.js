import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TripArtificialLandmarkList from "../../components/trip/TripArtificialLandmarkList";

const TripArtificialLandmarkListPage = () => {
    return (
        <div>
            <Header />
            <TripArtificialLandmarkList />
            <Footer />
        </div>
    );
};

export default TripArtificialLandmarkListPage;