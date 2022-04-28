import React from "react";
import Header from "../components/Header";
import TripNatureList from "../components/Trip/TripNatureList";
import Footer from "../components/Footer";

const TripNatureListPage = () => {
    return(
        <div>
            <Header />
            <TripNatureList />
            <Footer />
        </div>
    );
};

export default TripNatureListPage;