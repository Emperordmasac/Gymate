import React, { useState } from "react";

import { ClassesCard } from "components/common/Card";
import { goTop } from "utils/helpers";

const Classes = () => {
    const [load, handleLoad] = useState(true);
    return (
        <>
            <section className="section_div text-center">
                <div className="section_banner relative justify-center flex">
                    <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                        Classes
                    </h1>
                </div>

                <div
                    className={`container gap-12 page_padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left ${
                        load ? "grid" : "hidden"
                    }`}
                >
                    <ClassesCard
                        bgImg="cycling_bg"
                        title="Cycling"
                        trainer="Dorian Yate"
                        date="Wed: 9:00 am"
                    />
                    <ClassesCard
                        bgImg="meditaion_bg"
                        title="Meditation"
                        trainer="Maria Mich"
                        date="Fri: 1:00 pm"
                    />
                    <ClassesCard
                        bgImg="mma_bg"
                        title="Boxing"
                        trainer="John Flex"
                        date="Tue: 4:00 pm"
                    />
                    <ClassesCard
                        bgImg="karate_bg"
                        title="Karate"
                        trainer="David Rich"
                        date="Sat: 9:00 am"
                    />
                    <ClassesCard
                        bgImg="powerlift_bg"
                        title="Power Lifting"
                        trainer="Larry Wheels"
                        date="Mon: 8:00 pm"
                    />
                    <ClassesCard
                        bgImg="workout_bg"
                        title="Workout"
                        trainer="Shawn Ray"
                        date="Sun: 10:00 am"
                    />
                    <ClassesCard
                        bgImg="crossfit_bg"
                        title="Crossfit"
                        trainer="Jenifer Alex"
                        date="Wen: 9:00 pm"
                    />
                    <ClassesCard
                        bgImg="running_bg"
                        title="Running"
                        trainer="Zinia Zessy"
                        date="Fri: 6:00 am"
                    />
                </div>

                {/* more */}
                <div
                    className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
                        load ? "hidden" : "grid"
                    }`}
                >
                    <ClassesCard
                        bgImg="cycling_bg"
                        title="Cycling"
                        trainer="Dorian Yate"
                        date="Wed: 9:00 am"
                    />
                    <ClassesCard
                        bgImg="meditaion_bg"
                        title="Meditation"
                        trainer="Maria Mich"
                        date="Fri: 1:00 pm"
                    />
                    <ClassesCard
                        bgImg="mma_bg"
                        title="Boxing"
                        trainer="John Flex"
                        date="Tue: 4:00 pm"
                    />
                    <ClassesCard
                        bgImg="karate_bg"
                        title="Karate"
                        trainer="David Rich"
                        date="Sat: 9:00 am"
                    />
                    <ClassesCard
                        bgImg="powerlift_bg"
                        title="Power Lifting"
                        trainer="Larry Wheels"
                        date="Mon: 8:00 pm"
                    />
                    <ClassesCard
                        bgImg="workout_bg"
                        title="Workout"
                        trainer="Shawn Ray"
                        date="Sun: 10:00 am"
                    />
                    <ClassesCard
                        bgImg="crossfit_bg"
                        title="Crossfit"
                        trainer="Jenifer Alex"
                        date="Wen: 9:00 pm"
                    />
                    <ClassesCard
                        bgImg="running_bg"
                        title="Running"
                        trainer="Zinia Zessy"
                        date="Thu: 12:00 am"
                    />
                    <ClassesCard
                        bgImg="bodybuilding_bg"
                        title="Body Building"
                        trainer="Jake Paul"
                        date="Mon: 8:00 pm"
                    />
                    <ClassesCard
                        bgImg="box_bg"
                        title="Mma"
                        trainer="Becky Lynch"
                        date="Fri: 6:00 am"
                    />
                    <ClassesCard
                        bgImg="yoga_bg"
                        title="Yoga"
                        trainer="Marta Mich"
                        date="Wen: 8:00 am"
                    />
                    <ClassesCard
                        bgImg="fitness_bg"
                        title="Fitness"
                        trainer="Mia Malkova"
                        date="Sun: 5:00 pm"
                    />
                </div>

                <button
                    onClick={() => {
                        handleLoad(!load);
                        goTop();
                    }}
                    className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
                >
                    {load ? "show more" : "show less"}
                </button>
            </section>
        </>
    );
};

export default Classes;
