import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TripAreaList from "../../components/trip/TripAreaList";

const TripAreaListPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <TripAreaList />
            {/* <Footer /> */}
        </div>
    );
};

export default TripAreaListPage;