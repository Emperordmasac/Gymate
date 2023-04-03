import React from "react";

//--INTERNAL IMPORTS

const Contact = (): JSX.Element => {
    return (
        <>
            <section id="contact">
                {/* header */}
                <div className="login_banner flex justify-center relative">
                    <h1 className="text-white bottom-[25px] text-[3rem] font-bold absolute">
                        Contact Us
                    </h1>
                </div>

                {/* contact section */}
                <div className="bg-white py-[12rem] container page_padding grid grid-cols-2 gap-10 items-center md1000:grid-cols-1">
                    {/* first col */}
                    <div className="min620:w-full min800:w-[90%] md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto">
                        <h2 className="text-black text-[36px] font-bold leading-[1.2]">
                            We are here for help you! To Shape Your Body.
                        </h2>
                        <div className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
                            At Gymate, we are dedicated to helping you achieve
                            the body of your dreams. Our expert trainers and
                            nutritionists will work with you to create a
                            personalized fitness and nutrition plan that helps
                            you reach your specific goals.
                        </div>

                        {/* 2-row 2-column grid */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
                            {/* 1st column  */}
                            <div className="flex flex-col relative">
                                <h3 className="text-[2rem] font-bold mb-10">
                                    New York City, USA
                                </h3>
                                <span className="bg-[#ff0336] absolute w-[50px] h-[4px] top-[33px]"></span>
                                <div className="text-[15px] text-[#646464] font-medium">
                                    85 Briston Mint Street,
                                    <br /> London, E1 8LG, USA
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <h3 className="text-[2rem] font-bold mb-10">
                                    Opening Hours
                                </h3>
                                <span className="bg-[#ff0336] absolute w-[50px] h-[4px] top-[33px]"></span>
                                <div className="text-[15px] text-[#646464] font-medium">
                                    <p>Mon to Fri: 7:30 am — 1:00 am</p>
                                    <p>Mon to Fri: 7:30 am — 1:00 am</p>
                                </div>
                            </div>

                            {/* 2nd column  */}
                            <div className="flex flex-col relative">
                                <h3 className="text-[2rem] font-bold mb-10">
                                    Information
                                </h3>
                                <span className="bg-[#ff0336] absolute w-[50px] h-[4px] top-[33px]"></span>
                                <div className="text-[15px] text-[#646464] font-medium">
                                    <p>+800-123-4567</p>
                                    <p>&nbsp; gymat@gymail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <h3 className="text-[2rem] font-bold mb-10">
                                    Follow Us On
                                </h3>
                                <span className="bg-[#ff0336] absolute w-[50px] h-[4px] top-[33px]"></span>
                                <div className="text-[18px] text-black font-medium flex gap-5">
                                    <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                                    <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                                    <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                                    <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second-col */}
                    <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] min620:w-full min800:w-[90%] md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 relative">
                        <h3 className="text-[28px] font-bold mb-14">
                            Leave Us Your Info
                        </h3>
                        <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
                        <input
                            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                            placeholder="Full Name *"
                            type="text"
                        ></input>
                        <input
                            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                            placeholder="Email Address *"
                            type="email"
                        ></input>
                        <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
                            <option>Select Class</option>
                            <option>Body Building</option>
                            <option>Boxing</option>
                            <option>Running</option>
                            <option>Fitness</option>
                            <option>Yoga</option>
                            <option>Workout</option>
                            <option>Katate</option>
                            <option>Meditation</option>
                            <option>Cycling</option>
                        </select>
                        <textarea
                            placeholder="Comment"
                            className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
                        ></textarea>
                        <button
                            type="submit"
                            className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
                        >
                            submit now
                        </button>
                    </form>
                </div>

                {/* map section */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
                    loading="lazy"
                    title="map"
                    style={{ width: "100%", height: "45rem", border: "0px" }}
                ></iframe>
            </section>
        </>
    );
};

export default Contact;
