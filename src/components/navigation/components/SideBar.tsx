import React from "react";

//--INTERNAL IMPORTS

//--IMPORT IMAGES AND CONSTANTS
import Logo from "styles/images/logo/logo-footer.svg";
import SideImg1 from "styles/images/sidebar/1.jpg";
import SideImg2 from "styles/images/sidebar/2.jpg";
import SideImg3 from "styles/images/sidebar/3.jpg";
import SideImg4 from "styles/images/sidebar/4.jpg";
import SideImg5 from "styles/images/sidebar/5.jpg";
import SideImg6 from "styles/images/sidebar/6.jpg";

//--TYPE DEFINITIONS
type Props = {
    handleSidebar: any;
};

const SideBar = ({ handleSidebar }: Props): JSX.Element => {
    return (
        <>
            <div className="flex justify-between items-center">
                <img src={Logo} alt="company logo" className="w-[13rem]" />
                <i
                    onClick={handleSidebar}
                    className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                ></i>
            </div>
            <div className="flex flex-col gap-6">
                <h3 className="text-[2rem] font-bold">About Us</h3>
                <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <h3 className="text-[2rem] font-bold">Gallery</h3>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <img
                        src={SideImg1}
                        alt="sidebar_gallery"
                        className="rounded-xl cursor-pointer"
                    />
                    <img
                        src={SideImg2}
                        alt="sidebar_gallery"
                        className="rounded-xl cursor-pointer"
                    />
                    <img
                        src={SideImg3}
                        alt="sidebar_gallery"
                        className="rounded-xl cursor-pointer"
                    />
                    <img
                        src={SideImg4}
                        alt="sidebar_gallery"
                        className="rounded-xl cursor-pointer"
                    />
                    <img
                        src={SideImg5}
                        alt="sidebar_gallery"
                        className="rounded-xl cursor-pointer"
                    />
                    <img
                        src={SideImg6}
                        alt="sidebar_gallery"
                        className="rounded-xl cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h3 className="text-[2rem] font-bold">Contact Info</h3>
                <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                    &nbsp; 59 Street, House Newyork City
                </p>
                <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    <i className="fa-solid fa-phone text-[#ff0336]"></i>
                    &nbsp; +123-678800090
                </p>
                <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                    &nbsp; gymate@gymail.com
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <h3 className="text-[2rem] font-bold">Follow Us</h3>
                <div className="flex gap-5">
                    <span className="bg-[#ff0336] py-[12px] px-[17px] rounded-full cursor-pointer">
                        <i className="fa-brands fa-facebook-f text-white text-[2.2rem]"></i>
                    </span>
                    <span className="bg-[#ff0336] py-[12px] px-[12px] rounded-full cursor-pointer">
                        <i className="fa-brands fa-twitter text-white text-[2.2rem]"></i>
                    </span>{" "}
                    <span className="bg-[#ff0336] py-[12px] px-[12px] rounded-full cursor-pointer">
                        <i className="fa-brands fa-instagram text-white text-[2.2rem]"></i>
                    </span>
                </div>
            </div>
        </>
    );
};

export default SideBar;
