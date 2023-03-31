import React from "react";

//--INTERNAL IMPORTS
import TitleBg from "styles/images/pricing/titlebg.svg";
import Logo1 from "styles/images/testimonials/logo1.png";
import Logo2 from "styles/images/testimonials/logo2.png";
import Logo3 from "styles/images/testimonials/logo3.png";
import Logo4 from "styles/images/testimonials/logo4.png";
import Logo5 from "styles/images/testimonials/logo5.png";
import { TestimonialCard } from "components/common/Card";

const Testimonials = () => {
    return (
        <>
            <section id="testimonials my-10rem mx-auto">
                <div className="container page_padding">
                    {/* title */}
                    <div className="text-center items-center w-full flex flex-col relative">
                        <p className="text-white z-10 text-[16px] uppercase font-bold -mb-[10.5rem] relative">
                            Testimonials
                        </p>
                        <img
                            src={TitleBg}
                            alt="title-bg"
                            className="absolute -top-[6px] w-[21rem]"
                        />
                    </div>

                    {/*  wrapper */}
                    <div className="border-[#efefef] mt-[17rem] md1000:mt-[9rem] bg-white border-solid border-[9px] p-[30px] min540:h-[48rem] min375:h-[60rem]">
                        <div className="bg-black w-full overflow-x-clip h-[33rem] relative">
                            <TestimonialCard />
                        </div>
                    </div>
                </div>

                {/* brand logos */}
                <div className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap">
                    <img
                        src={Logo1}
                        alt="logo"
                        className="scale-[.8] hover:invert"
                        style={{ transition: "all 0.3s" }}
                    />
                    <img
                        src={Logo2}
                        alt="logo"
                        className=" scale-[.8] hover:invert"
                        style={{ transition: "all 0.3s" }}
                    />
                    <img
                        src={Logo3}
                        alt="logo"
                        className=" scale-[.8] hover:invert"
                        style={{ transition: "all 0.3s" }}
                    />
                    <img
                        src={Logo4}
                        alt="logo"
                        className=" scale-[.8] hover:invert"
                        style={{ transition: "all 0.3s" }}
                    />
                    <img
                        src={Logo5}
                        alt="logo"
                        className=" scale-[.8] hover:invert"
                        style={{ transition: "all 0.3s" }}
                    />
                </div>
            </section>
        </>
    );
};

export default Testimonials;
