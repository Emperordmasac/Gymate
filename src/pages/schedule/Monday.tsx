import React from "react";
import { Link } from "react-router-dom";

import { SheduleCard, ScheduleList } from "components/common/Card";

const Monday = () => {
    return (
        <>
            {/* timetable */}
            <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    to="/schedule/monday"
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#ff0336] ease-in duration-200 hover:shadow-2xl text-white "
                >
                    Monday
                </Link>

                <Link
                    to="/schedule/tuesday"
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
                >
                    Tuesday
                </Link>

                <Link
                    to="/schedule/wednesday"
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
                >
                    Wednesday
                </Link>

                <Link
                    to="/schedule/thursday"
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
                >
                    Thursday
                </Link>

                <Link
                    to="/schedule/friday"
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
                >
                    Friday
                </Link>

                <Link
                    to="/schedule/saturday"
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
                >
                    Saturday
                </Link>

                <Link
                    to="/schedule/sunday"
                    className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
                >
                    Sunday
                </Link>
            </div>

            {/* sceheduleboxes */}
            <SheduleCard>
                <ScheduleList
                    className="Fitness"
                    time="9:00am - 10:00am"
                    trainer="David Vila"
                />
                <ScheduleList
                    className="Body Building"
                    time="10:00pm - 11:00pm"
                    trainer="John Weights"
                />
                <ScheduleList
                    className="Running"
                    time="4:00pm - 5:00pm"
                    trainer="Junifor Jonas"
                />
                <ScheduleList
                    className="Cycling"
                    time="6:00pm - 7:00pm"
                    trainer="Robert Louis"
                />
            </SheduleCard>
        </>
    );
};

export default Monday;
