import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/User/Login";

const LoginPage = () => {
    return(
        <div>
            <Header />
            <Login />
            <Footer />
        </div>
    );
};

export default LoginPage;