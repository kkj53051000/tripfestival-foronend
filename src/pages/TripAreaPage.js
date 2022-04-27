import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TripArea from "../components/TripArea";

const RegionPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <TripArea />
            <Footer />
        </div>
    );
};

export default RegionPage;