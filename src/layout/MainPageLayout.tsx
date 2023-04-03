import React from "react";
import { Routes, Route } from "react-router-dom";

//--INTERNAL IMPORTS
import NavBar from "components/navigation";
import Footer from "components/homepage/Footer";
import { Home, Login, SignUp } from "pages";

const MainPageLayout = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </>
    );
};

export default MainPageLayout;
