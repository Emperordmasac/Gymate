import React, { useState } from "react";

//--INTERNAL IMPORTS
import TrainerBg from "styles/images/trainers/trainer-bg.png";
import Shape from "styles/images/trainers/shape.png";
import { trainers } from "utils/constants";

export const TrainersCard = () => {
    const [isHover, setHover] = useState(false);

    return (
        <>
            <div
                className="flex justify-center gap-[5rem] md1200:flex-wrap"
                style={{ margin: "0 auto" }}
            >
                {trainers.map((trainer, i) => (
                    <div
                        onMouseLeave={() => setHover(false)}
                        onMouseEnter={() => setHover(true)}
                        key={trainer.id}
                        className="flex-col flex select-none w-[35rem] min450:w-full relative"
                    >
                        {/* trainer image */}
                        <img
                            src={trainer.img}
                            alt="trainers"
                            className={`w-[22rem] mx-auto grayscale z-10 relative ${
                                isHover ? "hover:grayscale-0" : ""
                            }`}
                            style={{ transition: "all 0.3s" }}
                        />
                        {/* image background */}
                        <img
                            src={TrainerBg}
                            alt="trainer_background"
                            className="w-full top-[4px] scale-[1] absolute"
                        />
                        {/* description */}
                        <div className="box_desc bg-white w-full text-center text-white shadow-lg z-20 rounded-[6px] py-[30px] px-[20px] -bottom-[31px] absolute">
                            <img
                                src={Shape}
                                alt="box_shape"
                                className="-top-[25px] left-[113px] absolute"
                            />
                            <i className="fa-solid fa-angle-up -top-[16px] left-[162px] text-black text-3xl absolute"></i>
                            <h3 className="text-black font-bold text-[2.4rem]">
                                {trainer.name}
                            </h3>
                            <p className="text-[#646464] text-[1.5rem] font-medium">
                                {trainer.job}
                            </p>
                            <div className="flex text-[#646464] gap-8 mt-5 w-full justify-center text-[1.6rem] cursor-pointer">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
