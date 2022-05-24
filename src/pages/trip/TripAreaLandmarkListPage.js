import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TripAreaLandmarkList from "../../components/trip/TripAreaLandmarkList";

const TripAreaLandmarkListPage = () => {
    return (
        <div>
            <Header />
            <TripAreaLandmarkList />
            <Footer />
        </div>
    );
};

export default TripAreaLandmarkListPage;