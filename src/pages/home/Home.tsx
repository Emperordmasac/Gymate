import React from "react";

//--INTERNAL IMPORTS
import Hero from "components/homepage/Hero";
import About from "components/homepage/About";
import Featured from "components/homepage/Featured";
import ChooseUs from "components/homepage/ChooseUs";
import Trainers from "components/homepage/Trainers";
import Testimonials from "components/homepage/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Featured />
            <ChooseUs />
            <Trainers />
            <Testimonials />
        </>
    );
};

export default Home;
