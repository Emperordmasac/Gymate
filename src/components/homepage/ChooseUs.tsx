import React from "react";

//--INTERNAL IMPORTS

//--IMPORT CONTANTS & IMAGES
import VideoImg from "styles/images/choose-us/main-img.png";
import PlayImg from "styles/images/choose-us/play.png";

const ChooseUs = () => {
    return (
        <>
            <section id="choose" className="choose_section py-[12rem]">
                <div className="container page_padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem]">
                    {/* left side */}
                    <div className="w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center relative video_div">
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
                </div>
            </section>
        </>
    );
};

export default ChooseUs;
