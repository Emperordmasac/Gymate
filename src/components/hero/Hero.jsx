import React from "react";

//--INTERNAL IMPORTS
import MainButton from "components/common/MainButton";

//--IMPORT HELPERS
import TitleBg from "styles/images/pricing/titlebg.svg";

const Hero = () => {
    return (
        <>
            <section
                id="home"
                className="hero_section w-full h-screen min800:flex min800:justify-center min800:text-center"
            >
                <div className="hero_container">
                    <div
                        className="flex flex-col text-white 
                    absolute hero_text min800:text-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]"
                    >
                        <p className="text-black text-[16px] uppercase font-medium relative z-10 pl-16 min800:pl-0 mb-8">
                            find your energy
                        </p>
                        <img
                            src={TitleBg}
                            alt="title_bg"
                            className="w-[52%] absolute -top-3 min800:w-[24rem] title_white"
                        />
                        <h1 className="font-bold text-[48px] uppercase mb-[4rem] min450:text-[40px]">
                            make your body <br />
                            <span className="font-thin">fit & perfect</span>
                        </h1>

                        <MainButton
                            text="Our Classes"
                            color={`text-black`}
                            bg="bg-white"
                            url="/classes"
                        />
                    </div>
                </div>
                <div className="text-white flex flex-row-reverse -rotate-90 absolute top-2/4 right-0 items-center min800:hidden">
                    <p className="uppercase text-3xl font-bold tracking-widest">
                        share
                    </p>
                    <span className="bg-[#ff0336] h-[2.5px] w-[35px] mr-6"></span>
                    <div className="text-white gap-7 flex mr-7">
                        <i className="fa-brands fa-facebook text-3xl cursor-pointer ease-in duration-200 rotate-90 hover:text-[#ff0336]"></i>
                        <i className="fa-brands fa-twitter text-3xl cursor-pointer ease-in duration-200 rotate-90 hover:text-[#ff0336]"></i>
                        <i className="fa-brands fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 rotate-90 hover:text-[#ff0336]"></i>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
