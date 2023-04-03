import React from "react";

//--INTERNAL IMPORTS
import MainButton from "components/common/MainButton";

const CtaBanner = (): JSX.Element => {
    return (
        <>
            <section className="cta_section w-full h-auto">
                <div className="container page_padding text-white py-[7rem]">
                    <h2 className="text-[36px] font-bold">
                        Need a Fitness Trainer?
                    </h2>
                    <h3 className="text-[28px] font-bold mb-20">
                        <span className="text-[#FF0336]">Call:</span>{" "}
                        +123-456789
                    </h3>
                    <MainButton
                        color={`text-white`}
                        bg={`bg-[#ff0336]`}
                        text="purchase now"
                        arrowColor={`text-white`}
                        cN="pricing_cta cta_banner_btn"
                        url="/contact"
                    />
                </div>
            </section>
        </>
    );
};

export default CtaBanner;
