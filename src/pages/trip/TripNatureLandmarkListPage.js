import React from "react";
import TripNatureLandmarkList from "../../components/trip/TripNatureLandmarkList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const TripNatureLandmarkListPage = () => {

    return (
        <div>
            <Header />
            <TripNatureLandmarkList />
            <Footer />
        </div>
    );
};

export default TripNatureLandmarkListPage;