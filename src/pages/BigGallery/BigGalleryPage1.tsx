import React from "react";
import { Link } from "react-router-dom";

import { bigGalleryImage } from "./BigGalleryConstants";

const BigGalleryPage1 = () => {
    const secondPageImg = bigGalleryImage.filter((item) => item.id <= 8);

    return (
        <>
            <div className="grid grid-cols-3 gap-7 md1000:grid-cols-2 min540:grid-cols-1">
                {secondPageImg.map((image) => (
                    <div key={image.id}>
                        <img
                            alt="gallery_img"
                            className="w-full h-auto"
                            src={image.img}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-3 mt-32">
                <Link
                    to="/gallery/1"
                    className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-[#ff0336] "
                >
                    1
                </Link>
                <Link
                    to="/gallery/2"
                    className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white hover:bg-[#ff0336] "
                >
                    2
                </Link>
                <Link
                    to="/gallery/2"
                    className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white hover:bg-[#ff0336] "
                >
                    <i className="fa-solid fa-angles-right"></i>
                </Link>
            </div>
        </>
    );
};

export default BigGalleryPage1;
