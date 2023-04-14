import React from "react";
import { Routes, Route } from "react-router-dom";

//--INTERNAL IMPORTS
import NavBar from "components/navigation";
import Footer from "components/homepage/Footer";
import {
    Home,
    Login,
    SignUp,
    Contact,
    About,
    Classes,
    Pricing,
    Blog,
    BigGallery,
    BigGalleryPage1,
    BigGalleryPage2,
    Schedule,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
} from "pages";

const MainPageLayout = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="classes" element={<Classes />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="blog" element={<Blog />} />

                <Route path="gallery" element={<BigGallery />}>
                    <Route path="1" element={<BigGalleryPage1 />} />
                    <Route path="2" element={<BigGalleryPage2 />} />
                </Route>

                <Route path="schedule" element={<Schedule />}>
                    <Route path="monday" element={<Monday />} />
                    <Route path="tuesday" element={<Tuesday />} />
                    <Route path="wednesday" element={<Wednesday />} />
                    <Route path="thursday" element={<Thursday />} />
                    <Route path="friday" element={<Friday />} />
                    <Route path="saturday" element={<Saturday />} />
                    <Route path="sunday" element={<Sunday />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
};

export default MainPageLayout;
