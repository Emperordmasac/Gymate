import React from "react";

//--INTERNAL IMPORTS
import AboutCard from "components/common/AboutCards";
import MainButton from "components/common/MainButton";

//--IMPORT IMAGES & CONSTANTS
import TitleBg from "styles/images/who-we-are/title-bg.svg";
import TrainersIcon from "styles/images/who-we-are/weightlifter.png";
import ModernIcon from "styles/images/who-we-are/equpments.png";
import LiftIcon from "styles/images/who-we-are/gym.png";
import GirlRunning from "styles/images/who-we-are/girl-run.png";
import GirlRedBg from "styles/images/who-we-are/girl-redbg.svg";
import GirlText from "styles/images/who-we-are/girl-side-text.png";
import GirlWind from "styles/images/who-we-are/wind.png";

const About = (): JSX.Element => {
    return (
        <>
            <section className="flex flex-col justify-between gap-2 pb-[20rem] about_section">
                <div className="page_padding container">
                    <div className="flex gap-10 -mt-[8.5rem] md1000:flex-col">
                        <AboutCard />
                    </div>

                    <div
                        id="about"
                        className="grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
                    >
                        <div className="mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-full">
                            <p className="relative text-white font-semibold text-[15px] uppercase z-10 pl-16 md1000:pl-0 mb-12">
                                who we are
                            </p>
                            <img
                                src={TitleBg}
                                alt="title_bg"
                                className="w-[31%] absolute -top-[6px] md1000:w-[22rem]"
                            />
                            <h2 className="text-[35px] font-bold mb-6 leading-tight w-[60rem] min800:w-[100%]">
                                Take Your Health And Body To Next Level
                            </h2>
                            <p className="text-[16px] font-medium text-[#646464]">
                                Take your health and body to the next level with
                                our comprehensive program designed to help you
                                reach your fitness goals.
                            </p>

                            <div className="flex mt-12 mb-[7rem] gap-[2px] min620:flex-col">
                                <div className="flex flex-col items-center text-center py-10 px-14 pl-7 min620:px-0">
                                    <img
                                        src={TrainersIcon}
                                        alt="trainer_icon"
                                        className="w-[5.4rem] h-auto mb-6"
                                    />
                                    <h3 className="uppercase font-bold text-[20px] leading-snug">
                                        professional <br /> trainers
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center text-center py-10 px-14 min620:px-0 min620:border-none border-l border-solid border-[rgb(0,0,0,0.2)] border-r ">
                                    <img
                                        src={ModernIcon}
                                        alt="trainer_icon"
                                        className="w-[5.4rem] h-auto mb-6"
                                    />
                                    <h3 className="uppercase font-bold text-[20px] leading-snug">
                                        modern <br /> equipments
                                    </h3>
                                </div>

                                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                                    <img
                                        src={LiftIcon}
                                        alt="trainer_icon"
                                        className="w-[5.4rem] h-auto mb-6"
                                    />
                                    <h3 className="uppercase font-bold text-[20px] leading-snug">
                                        fancy gym <br />
                                        machines
                                    </h3>
                                </div>
                            </div>

                            <MainButton
                                color={`!text-white`}
                                bg={`bg-[#3f3f3f]`}
                                cN={`about_cta`}
                                arrowColor={`!text-white`}
                                hover={`hover:bg-[#ff0336]`}
                                text={`take a tour`}
                                url={"/classes"}
                            />
                        </div>

                        <div className="relative md1000:hidden">
                            <img
                                src={GirlRunning}
                                alt="girl_running"
                                className="girl_running"
                            />
                            <img
                                src={GirlRedBg}
                                alt="girl-bg"
                                className="girl_bg"
                            />
                            <img
                                src={GirlText}
                                alt="girl-text"
                                className="girl_text"
                            />
                            <img
                                src={GirlWind}
                                alt="girl-wind"
                                className="girl_wind"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
