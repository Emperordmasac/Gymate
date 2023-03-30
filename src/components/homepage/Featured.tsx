import React from "react";

//--INTERNAL IMPORTS
import MainButton from "components/common/MainButton";

//--IMPORT CONSTANTS AND IMAGES
import TitleBgRed from "styles/images/who-we-are/title-bg.svg";

const Featured = (): JSX.Element => {
    return (
        <>
            {/* container */}
            <section
                id="featured"
                className="page_padding bg-white py-[12.5rem]"
            >
                <div className="container">
                    {/* title */}
                    <div className="flex flex-col text-center items-center relative">
                        <p className="font-semibold text-white text-[15px] uppercase relative z-10">
                            OUR FEATURED CLASS
                        </p>
                        <img
                            src={TitleBgRed}
                            alt="title"
                            className="w-[25rem] absolute -top-[10px]"
                        />
                        <h2 className="font-bold text-[3.6rem] text-black my-10">
                            We Are Offering Best Flexible Classes
                        </h2>
                    </div>

                    {/* grid system */}
                    <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 md1000:flex md1000:flex-col">
                        {/* item0 */}
                        <div className="item_0_div relative">
                            <div className="item_0 p-6 ease-in duration-[0.4s]"></div>
                            <div className="absolute z-10 bottom-10 left-10">
                                <p className="text-white text-[3rem] font-bold">
                                    Cycling
                                </p>
                                <p className="text-white bg-[#ff0336] text-[16px] mt-3 py-1 px-5">
                                    Wednesday: 9:00am-10:00am
                                </p>
                            </div>
                        </div>

                        {/* item1 */}
                        <div className="item_1_div relative">
                            <div className="item_1 p-6 ease-in duration-[0.4s]"></div>
                            <div className="absolute z-10 bottom-10 left-10">
                                <p className="text-white text-[3rem] font-bold">
                                    Karate
                                </p>
                                <p className="text-white bg-[#ff0336] text-[16px] mt-3 py-1 px-5">
                                    Friday: 10:00am-11:00am
                                </p>
                            </div>
                        </div>

                        {/* item2 */}
                        <div className="item_2_div relative">
                            <div className="item_2 p-6 ease-in duration-[0.4s]"></div>
                            <div className="absolute z-10 bottom-10 left-10">
                                <p className="text-white text-[3rem] font-bold">
                                    Power
                                </p>
                                <p className="text-white bg-[#ff0336] text-[16px] mt-3 py-1 px-5">
                                    Saturday: 9:00am-10:00am
                                </p>
                            </div>
                        </div>

                        {/* item3 */}
                        <div className="item_3_div relative">
                            <div className="item_3 p-6 ease-in duration-[0.4s]"></div>
                            <div className="absolute z-10 bottom-10 left-10">
                                <p className="text-white text-[3rem] font-bold">
                                    Meditation
                                </p>
                                <p className="text-white bg-[#ff0336] text-[16px] mt-3 py-1 px-5">
                                    Friday: 1:00pm-2:00pm
                                </p>
                            </div>
                        </div>

                        {/* item4 */}
                        <div className="item_4_div relative">
                            <div className="item_4 p-6 ease-in duration-[0.4s]"></div>
                            <div className="absolute z-10 bottom-10 left-10">
                                <p className="text-white text-[3rem] font-bold">
                                    Martial Arts
                                </p>
                                <p className="text-white bg-[#ff0336] text-[16px] mt-3 py-1 px-5">
                                    Sunday: 6:00pm-7:00pm
                                </p>
                            </div>
                        </div>

                        {/* item15 */}
                        <div className="item_5_div relative">
                            <div className="item_5 p-6 ease-in duration-[0.4s]"></div>
                            <div className="absolute z-10 bottom-10 left-10">
                                <p className="text-white text-[3rem] font-bold">
                                    Workout
                                </p>
                                <p className="text-white bg-[#ff0336] text-[16px] mt-3 py-1 px-5">
                                    Monday: 4:00pm-5:00pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* featured cta */}
            <div className="featured_cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#ff0336]">
                <div className="container page_padding">
                    <div className="flex items-center md1000:flex-col md1000:gap-12 md1000:text-center">
                        <h2 className="text-white font-bold text-[3.7rem] max-w-6xl px-7 leading[1.2] min450:text-[2.4rem] md1000:text-[3rem]">
                            We Are Always Providing Best Fitness Service For You
                        </h2>
                        <MainButton
                            color={`text-black`}
                            bg={`bg-white`}
                            text="Join With Us"
                            arrowColor={`text-black`}
                            url="/contact"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;
