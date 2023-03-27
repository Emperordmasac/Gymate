import React from "react";
import { Routes, Route } from "react-router-dom";

//--INTERNAL IMPORTS
import NavBar from "components/navigation";
import { Home } from "pages";

const MainPageLayout = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default MainPageLayout;
