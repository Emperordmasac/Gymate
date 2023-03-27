import React, { useState } from "react";
import { Link } from "react-router-dom";

//--INTERNAL IMPORTS
import { SideBar, NavList, MobileNavList, JOinUsButton } from "./components";

//--IMPORT HELPERS
import { goTop } from "utils/helpers";
import Logo from "styles/images/logo/logo.svg";

const NavBar = () => {
    //--STATE COMPONENTS
    const [isSticky, setSticky] = useState(false);
    const [hasSidebar, setSidebar] = useState(false);
    const [isOpen, setOpen] = useState(false);

    //--handle sidebar
    const handleSidebar = () => {
        setSidebar(!hasSidebar);
    };

    // sticky navbar - bg black
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <nav
                className={`flex flex-row items-center bg-transparent justify-between py-8 px-12 fixed top-0 left-0 right-0 w-full z-50 ${
                    isSticky ? "shadow-xl !bg-black" : ""
                }`}
            >
                {/* company logo */}
                <Link to="/">
                    <img
                        src={Logo}
                        alt="company logo"
                        onClick={goTop}
                        className="w-full h-auto"
                    />
                </Link>
                {/* desktop navigation */}
                <div className="navlist_nav">
                    <NavList />
                </div>
                {/* other shits on the navbar */}
                <div className="flex gap-8 items-center">
                    {/* navbar menus */}
                    <div className="flex gap-10">
                        {/* mobile nav menu */}
                        <div
                            className={`bg-white h-screen w-full flex flex-col top-0 fixed z-[999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                                isOpen ? "left-0" : "-left-[100%]"
                            }`}
                        >
                            <i
                                onClick={() => setOpen(!isOpen)}
                                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
                            ></i>
                            <MobileNavList />
                        </div>
                        {/* sidebarmenu */}

                        <div
                            className={`bg-white min450:w-full h-[100vh] p-[45px] w-[40rem] top-0 flex flex-col fixed z-[999999999] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                                hasSidebar ? "left-0" : "-left-[100%]"
                            }`}
                        >
                            <SideBar handleSidebar={handleSidebar} />
                        </div>

                        {/* trigger nav menu */}
                        <i
                            onClick={() => setOpen(true)}
                            className={`fa-bars fa-solid text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200 hidden ml-10`}
                        ></i>
                        {/* acccount trigger */}
                        <Link onClick={goTop} to="signup" title="signupbutton">
                            <i className="fa-regular fa-user text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"></i>
                        </Link>

                        {/* trigger sidebar menu */}
                        <i
                            onClick={handleSidebar}
                            className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"
                        ></i>
                    </div>
                    <JOinUsButton />
                </div>
            </nav>
        </>
    );
};

export default NavBar;
