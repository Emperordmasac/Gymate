//--EXTERNAL IMPORTS
import { Link } from "react-router-dom";

//--INTERNAL IMPORTS
import { mainNavList } from "utils/constants";

const goToTop = () => {
    window.scrollTo({
        top: 0,
    });
};

export const NavList = () => {
    return (
        <>
            <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
                {mainNavList.map((nav, i) => (
                    <li
                        key={nav.id}
                        style={{ transition: "all 0.3s" }}
                        className="cursor-pointer hover:text-[#ff0336]"
                    >
                        <Link onClick={goToTop} to={nav.url}>
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export const MobileNavList = () => {
    return (
        <>
            <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {mainNavList.map((nav, i) => (
                    <li
                        key={nav.id}
                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    >
                        <Link onClick={goToTop} to={nav.url}>
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
