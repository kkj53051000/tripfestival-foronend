import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpecialList from "../components/Special/SpecialList";

const SpecialListPage  = () => {
    return(
        <div>
            <Header />
            <SpecialList />
            <Footer />
        </div>
    );
};

export default SpecialListPage;