import React from "react";

//--INTERNAL IMPORTS
import Hero from "components/homepage/Hero";
import About from "components/homepage/About";
import Featured from "components/homepage/Featured";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Featured />
        </>
    );
};

export default Home;
