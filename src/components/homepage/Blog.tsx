import React from "react";

//--INTERNAL IMPORTS
import TitleBg from "styles/images/who-we-are/title-bg.svg";
import { BlogCard } from "components/common/Card";

const Blog = (): JSX.Element => {
    return (
        <>
            <section id="blog" className="bg-white">
                <div className="container page_padding py-[10rem]">
                    {/* Title component -- */}
                    <div className="flex flex-col text-center relative items-center">
                        <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
                            latest blog
                        </p>
                        <img
                            src={TitleBg}
                            alt="text_bg"
                            className="w-[23rem] absolute -top-[10px]"
                        />

                        <h2 className="text-[3.4rem] font-bold mb-4">
                            Our Recent News
                        </h2>
                        <p className="text-[#646464] font-medium text-[15px] ">
                            Gymat an unknown printer took a galley of type and
                            scrambled
                            <br /> make a type specimen book.
                        </p>
                    </div>

                    {/* Blog component */}
                    <BlogCard />
                </div>
            </section>
        </>
    );
};

export default Blog;
