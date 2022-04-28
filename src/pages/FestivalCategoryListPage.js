import React from "react";
import Header from "../components/Header";
import FestivalCategoryList from "../components/Festival/FestivalCategoryList";
import Footer from "../components/Footer";

const FestivalCategoryListPage = () => {
    return(
        <div>
            <Header />
            <FestivalCategoryList />
            <Footer />
        </div>
    );
};

export default FestivalCategoryListPage;