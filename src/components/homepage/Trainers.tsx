import React from "react";

//--INTERNAL IMPORTS
import TitleBg from "styles/images/who-we-are/title-bg.svg";
import { TrainersCard } from "components/common/Card";

const Trainers = (): JSX.Element => {
    return (
        <>
            <section id="team" className="trainers_section">
                <div className="container page_padding py-[12rem]">
                    {/* title */}
                    <div className="flex flex-col items-center text-center relative">
                        <p className="z-10 text-white text-[16px] uppercase font-bold mb-10 relative">
                            gym trainers
                        </p>
                        <img
                            src={TitleBg}
                            alt="title-bg"
                            className="w-[21rem] -top-[6px] absolute"
                        />

                        <h2 className="text-[3.4rem] font-bold mb-4">
                            Team Of Expert Trainers
                        </h2>
                        <p className="text-[15px] font-medium text-[#646464]">
                            Expert team of coaches helps you succeed in any
                            goal,
                            <br /> personalized guidance and motivation
                            provided!
                        </p>
                    </div>

                    {/* trainers card */}
                    <div className="mt-20 flex">
                        <TrainersCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Trainers;
