import React from "react";
import { Outlet } from "react-router-dom";

const BigGallery = () => {
    return (
        <>
            <section>
                <div className="section_banner flex justify-center relative">
                    <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                        Gallery
                    </h1>
                </div>
                <div className="container page_padding py-[10rem]">
                    <Outlet />
                </div>
            </section>
        </>
    );
};

export default BigGallery;
