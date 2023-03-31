import React from "react";

//--INTERNAL IMPORTS

//--IMPORT CONTANTS & IMAGES
import VideoImg from "styles/images/choose-us/main-img.png";
import PlayImg from "styles/images/choose-us/play.png";
import TileBg from "styles/images/who-we-are/title-bg.svg";
import TrainingIcon from "styles/images/choose-us/training.png";
import EquipmentsIcon from "styles/images/choose-us/bench-press.png";
import BagIcon from "styles/images/choose-us/gym-bag.png";
import BottleIcon from "styles/images/choose-us/bottle-of-water.png";
import MainButton from "components/common/MainButton";

const ChooseUs = () => {
    return (
        <>
            <section id="choose" className="choose_section py-[12rem]">
                <div className="container page_padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem]">
                    {/* left side */}
                    <div className="w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center relative video_div min450:hidden">
                        <img
                            src={VideoImg}
                            alt="video file"
                            className="w-[94%] h-auto relative"
                        />
                        <img
                            src={PlayImg}
                            alt="play"
                            className="w-[2.4rem] top-[42%] left-[44%] z-10 absolute cursor-pointer min450:left-[47%] min450:top-[44%]"
                        />
                        <span className="bg-white p-14 cursor-pointer absolute rounded-full top-[38.7%] left-[39.9%]"></span>
                    </div>

                    {/* right side */}
                    <div className="w-[50%] relative md1000:w-[85%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center">
                        <p className="text-white font-bold uppercase text-[16px] mb-14 relative z-10">
                            why choose us
                        </p>
                        <img
                            src={TileBg}
                            alt="title"
                            className="absolute -top-[6px] -left-14 md1000:hidden"
                        />
                        <h2 className="text-[3.6rem] text-white font-bold leading-[1.2] max-w-3xl md1000:max-w-[80%]">
                            We Can Give A Shape Of Your Body Here!
                        </h2>
                        <p className="text-[16px] text-[#b4b4b4] mt-7 max-w-3xl md1000:max-w-[80%]">
                            At <b>Gymate</b>, we are dedicated to helping you
                            achieve the body of your dreams. Our expert trainers
                            and nutritionists will work with you to create a
                            personalized fitness and nutrition plan that helps
                            you reach your specific goals.
                        </p>

                        <div className="grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 min450:flex min450:flex-col">
                            <div className="flex items-center gap-6">
                                <img
                                    src={TrainingIcon}
                                    alt="icon"
                                    className="bg-[#2b2b2b] w-[6.5rem] rounded-full p-4 hover:bg-[#ff0336] ease-in duration-200"
                                />
                                <p className="text-[18px] text-white font-bold max-w-[150px]">
                                    Free Fitness Training
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <img
                                    src={EquipmentsIcon}
                                    alt="icon"
                                    className="bg-[#2b2b2b] w-[6.5rem] rounded-full p-4 hover:bg-[#ff0336] ease-in duration-200"
                                />
                                <p className="text-[18px] text-white font-bold max-w-[150px]">
                                    Modern Gym Equipments
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <img
                                    src={BagIcon}
                                    alt="icon"
                                    className="bg-[#2b2b2b] w-[6.5rem] rounded-full p-4 hover:bg-[#ff0336] ease-in duration-200"
                                />
                                <p className="text-[18px] text-white font-bold max-w-[150px]">
                                    Gym Bag Equipments
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <img
                                    src={BottleIcon}
                                    alt="icon"
                                    className="bg-[#2b2b2b] w-[6.5rem] rounded-full p-4 hover:bg-[#ff0336] ease-in duration-200"
                                />
                                <p className="text-[18px] text-white font-bold max-w-[150px]">
                                    Fresh Bottle Watter
                                </p>
                            </div>

                            <MainButton
                                color={`!text-white`}
                                bg={`bg-[#595959]`}
                                text="our classes"
                                arrowColor={`!text-white`}
                                cN="choose-cta"
                                hover={`hover:bg-[#ff0336]`}
                                url="/classes"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChooseUs;
