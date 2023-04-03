import React from "react";

//--INTERNAL IMPORTS
import BgText from "styles/images/pricing/bg-text.png";
import BgBell from "styles/images/pricing/bg-dumbell.png";
import TitleBg from "styles/images/who-we-are/title-bg.svg";
import { PricingCard } from "components/common/Card";

const Pricing = (): JSX.Element => {
    return (
        <>
            <section id="pricing" className="pricing_section relative">
                <div className="container page_padding py-[12rem]">
                    <img
                        src={BgText}
                        alt="no-days-off"
                        className="absolute left-0"
                    />

                    {/* title component */}
                    <div className=" flex flex-col text-center items-center relative">
                        <p className="text-white text-[15px] font-bold mb-8 uppercase relative z-10">
                            PRICING CHART
                        </p>
                        <img
                            src={TitleBg}
                            alt="title-bg"
                            className="w-[23rem] -top-[10px] absolute"
                        />
                        <h2 className="font-bold mb-4 text-[3.4rem]">
                            Exclusive Pricing Plan
                        </h2>
                        <p className="text-[#646464] font-medium text-[15px]">
                            Gymat an unknown printer took a galley of type and
                            scrambled
                            <br /> make a type specimen book.
                        </p>
                    </div>

                    {/* pricing component */}
                    <PricingCard />
                    <img
                        src={BgBell}
                        alt="bg_icon"
                        className="right-0 bottom-0 absolute z-[1]"
                    />
                </div>
            </section>
        </>
    );
};

export default Pricing;
