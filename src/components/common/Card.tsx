import React, { useState } from "react";

//--INTERNAL IMPORTS
import Quotes from "styles/images/testimonials/quotes.png";
import BoxShape from "styles/images/testimonials/testimonial-shape.svg";
import TrainerBg from "styles/images/trainers/trainer-bg.png";
import Shape from "styles/images/trainers/shape.png";
import { trainers, testimonials, pricings } from "utils/constants";
import MainButton from "./MainButton";

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

export const TestimonialCard = () => {
    return (
        <>
            {testimonials.map((testimonial, i) => (
                <div key={testimonial.id}>
                    <img
                        alt="customer_img"
                        src={testimonial.img}
                        className="bottom-0 -left-10 h-[46rem] z-20 rounded-tr-[200px] md1000:hidden absolute"
                    />

                    <div className="flex">
                        <div className="absolute flex flex-col bg-black top-0 right-0 w-[60%] h-full py-[47px] px-[50px] min540:py-[24px] min540:px-[30px] min540:h-[40rem] min375:h-[50rem] md1000:w-full">
                            <img
                                alt="quote_img"
                                src={Quotes}
                                className="w-[6rem]"
                            />
                            <p className="text-[#dedede] text-[16px] italic my-6 z-10">
                                {testimonial.text}
                            </p>
                            <h3 className="text-white text-[21px] mb-1 font-bold">
                                {testimonial.name}
                            </h3>
                            <p className="text-[#dedede] font-medium text-[14px]">
                                {testimonial.job}
                            </p>
                            <img
                                alt="box_img"
                                src={BoxShape}
                                className="w-[17.5rem] absolute bottom-0 right-[13.5rem] invert opacity-40"
                            />
                        </div>
                    </div>

                    {/* buttons */}
                    <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                        <button
                            title="left"
                            style={{ transition: "all 0.2s" }}
                            className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button
                            title="right"
                            style={{ transition: "all 0.2s" }}
                            className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export const PricingCard = () => {
    return (
        <>
            <div className="flex gap-10 mt-32 z-[2] relative md1000:flex-col md1000:items-center">
                {pricings.map((pricing, i) => (
                    <div
                        key={pricing.id}
                        className="flex flex-col w-1/3 bg-white shadow-xl relative min540:w-[100%] md1000:w-[40rem]"
                    >
                        <div
                            style={{ transition: "all 0.3s" }}
                            className="relative grayscale hover:grayscale-0"
                        >
                            <img
                                src={pricing.img}
                                alt="pricing-img"
                                className="w-full h-full"
                            />
                            <div className="absolute bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto">
                                {pricing.title}
                            </div>
                        </div>
                        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
                            <p className="text-center text-[55px] font-bold relative py-[10px]">
                                <span className="text-[30px] text-[#6d6d6d] font-normal top-8 -left-[3rem] absolute">
                                    $
                                </span>
                                {pricing.price}
                                <span className="text-[22px] text-[#6d6d6d] font-normal bottom-[25px] -right-[6rem] absolute">
                                    {pricing.rate}
                                </span>
                            </p>

                            <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464]">
                                {pricing.details.map((detail, i) => (
                                    <p key={detail.id}>{detail.detail}</p>
                                ))}
                            </div>

                            <MainButton
                                color={`!text-white`}
                                bg={`bg-[#ff0336]`}
                                text="purchase now"
                                arrowColor={`!text-white`}
                                cN="pricing_cta"
                                url="/contact"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
