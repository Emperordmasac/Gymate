import React, { useState } from "react";
import { Link } from "react-router-dom";

//--INTERNAL IMPORTS
import { goTop } from "utils/helpers";

const JOinUsButton = () => {
    const [isSpin, setSpin] = useState(false);
    return (
        <>
            <div className="border-[rgb(255,255,255,0.3)] border-2 border-solid p-2 rounded-md min620:hidden">
                <Link
                    onClick={goTop}
                    to="/contact"
                    onMouseEnter={() => setSpin(true)}
                    onMouseLeave={() => setSpin(false)}
                    className="flex items-center"
                >
                    <i
                        className={`fa-solid fa-plus bg-[#ff0336] text-white text-2xl py-3 px-4 rounded-md ${
                            isSpin ? "nav_btn_hover" : ""
                        }`}
                    ></i>
                    <h3 className="text-white text--[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                        Join class now
                    </h3>
                </Link>
            </div>
        </>
    );
};

export default JOinUsButton;
