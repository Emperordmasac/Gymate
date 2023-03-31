import React, { useState } from "react";

//--INTERNAL IMPORTS

const Bmi = () => {
    const [weight, setWeight] = useState<Number | any>(0);
    const [height, setHeight] = useState<Number | any>(0);
    const [bmi, setBmi] = useState<string | any>("");
    const [message, setMessage] = useState("");

    const handleBMI = (e: any) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert("Please enter a valid weight and height");
        } else {
            let bmi = weight * ((height * height) / 10000);
            setBmi(bmi.toFixed(1));

            if (bmi < 20) {
                setMessage("Underweight");
            } else if (bmi >= 20 && bmi < 27) {
                setMessage("Normal");
            } else {
                setMessage("Overweight");
            }
        }
    };
    return (
        <>
            <section id="bmi" className="bmi_section py-[6rem] relative">
                <div className="container page_padding">
                    <span className="w-full h-full bg-transparent absolute top-0 left-0 min620:bg-[#00000063]"></span>
                    <div className="text-white w-[52rem] min620:w-[100%] relative">
                        <h2 className="text-[4rem] font-bold mb-8 leading-[1.1]">
                            Let's Calculate Your{" "}
                            <span className="text-[#FF0336]">BMI</span>
                        </h2>
                        <p className="text-[16px] text-[#a1a1a1] min620:text-white">
                            Easily determine your body mass index with our
                            accurate calculation tool.
                        </p>

                        {/* form */}
                        <div className="flex flex-col">
                            <form className="flex w-full gap-6 mt-10 h-[50px]">
                                <input
                                    onChange={(e) => setWeight(e.target.value)}
                                    type="text"
                                    placeholder="Weight / kg"
                                    className="w-[50%] text-[14px] bg-transparent border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                                ></input>
                                <input
                                    onChange={(e) => setHeight(e.target.value)}
                                    type="text"
                                    placeholder="Height / cm"
                                    className="w-[50%] text-[14px] bg-transparent border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                                ></input>
                            </form>
                            {/* result */}
                            <p className="mt-10 text-[16px] font-medium items-center flex w-full gap-3">
                                <span className="w-1/2">
                                    Your BMI is: &nbsp;
                                    <span className="text-[#ff0336]">
                                        {bmi}
                                    </span>
                                </span>
                                <span className="w-1/2">
                                    Your weight is: &nbsp;
                                    <span className="text-[#ff0336]">
                                        {message}
                                    </span>
                                </span>
                            </p>
                            <button
                                onClick={handleBMI}
                                type="submit"
                                style={{ transition: "all 0.3s" }}
                                className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#FF0336]"
                            >
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Bmi;
