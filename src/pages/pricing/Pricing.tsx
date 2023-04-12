import { PricingCard } from "components/common/Card";

import TitleRed from "styles/images/who-we-are/title-bg.svg";
import BgText from "styles/images/pricing/bg-text.png";
import BgDumbell from "styles/images/pricing/bg-dumbell.png";

const Pricing = () => {
    return (
        <>
            <section className="section_div">
                <div className="section_banner relative justify-center flex">
                    <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                        Pricing
                    </h1>
                </div>

                <section id="pricing" className="pricing_section relative">
                    <div className="container page_padding py-[12rem]">
                        <img
                            src={BgText}
                            className="left-0 absolute"
                            alt="bg_img"
                        />

                        <div className="flex flex-col text-center relative items-center">
                            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
                                PRICING CHART
                            </p>
                            <img
                                src={TitleRed}
                                alt="text_bg"
                                className="w-[23rem] absolute -top-[10px] "
                            />

                            <h2 className="text-[3.4rem] font-bold mb-4">
                                Exclusive Pricing Plan
                            </h2>
                            <p className="text-[#646464] font-medium text-[15px] ">
                                Gymat an unknown printer took a galley of type
                                and scrambled
                                <br /> make a type specimen book.
                            </p>
                        </div>
                        <PricingCard />
                        <img
                            src={BgDumbell}
                            alt="bg_icon"
                            className="right-0 bottom-0 absolute z-[1]"
                        />
                    </div>
                </section>
            </section>
        </>
    );
};
export default Pricing;
