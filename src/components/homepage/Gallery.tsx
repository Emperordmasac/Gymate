import React from "react";

//--INTERNAL IMPORTS
import TitleBg from "styles/images/pricing/titlebg.svg";
import BgIcon from "styles/images/gallery/bg-icon.png";

const Gallery = () => {
    return (
        <>
            <section id="gallery" className="relative min450:hidden">
                <img
                    alt="bg_icon"
                    src={BgIcon}
                    className="absolute top-[30px] right-0"
                />

                <div className="container page_padding py-[4rem]">
                    <div className="flex flex-col relative items-center text-center">
                        {/* title */}
                        <p className="text-white text-[15px] uppercase font-bold mb-10 z-10 relative">
                            GYMAT GALLERY
                        </p>
                        <img
                            src={TitleBg}
                            alt="title_bg"
                            className="absolute w-[23rem] -top-[10px]"
                        />

                        <h2 className="text-[3.4rem] font-bold mb-4">
                            Our Workplace Gallery
                        </h2>
                        <p className="text-[#646464] font-medium text-[15px] ">
                            Our Workplace Gallery features modern office, team
                            collaboration, and fun culture.
                            <br /> Attracts talents and showcases company's work
                            atmosphere.
                        </p>
                    </div>

                    {/* gallery grid */}
                    <div className="gallery_grid py-24 w-full h-auto relative">
                        <div className="gallery_item_0"></div>
                        <div className="gallery_item_1"></div>
                        <div className="gallery_item_2"></div>
                        <div className="gallery_item_3"></div>
                        <div className="gallery_item_4"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
