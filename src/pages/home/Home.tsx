import React from "react";

//--INTERNAL IMPORTS
import Hero from "components/homepage/Hero";
import About from "components/homepage/About";
import Featured from "components/homepage/Featured";
import ChooseUs from "components/homepage/ChooseUs";
import Trainers from "components/homepage/Trainers";
import Testimonials from "components/homepage/Testimonials";
import Gallery from "components/homepage/Gallery";
import Bmi from "components/homepage/Bmi";
import Pricing from "components/homepage/Pricing";
import Blog from "components/homepage/Blog";
import CtaBanner from "components/homepage/CtaBanner";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Featured />
            <ChooseUs />
            <Trainers />
            <Testimonials />
            <Gallery />
            <Bmi />
            <Pricing />
            <Blog />
            <CtaBanner />
        </>
    );
};

export default Home;
