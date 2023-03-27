import { Link } from "react-router-dom";

//--INTERNAL IMPORTS
import { goTop } from "utils/helpers";

//--TYPE DEFINITIONS
type Props = {
    color: string;
    bg: string;
    cN: string;
    arrowColor: string;
    hover: string;
    text: string;
    url: string;
};

const MainButton = ({
    color,
    bg,
    cN,
    arrowColor,
    hover,
    text,
    url,
}: Props): JSX.Element => {
    return (
        <Link
            to={url}
            onClick={goTop}
            className={`text-[15px] ${bg} ${cN} ${color} ${hover} text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero_cta relative ml-2`}
        >
            {text} &nbsp;
            <i
                className={`fa-solid fa-arrow-right text-[#ff0336] ${arrowColor}`}
            ></i>
        </Link>
    );
};

export default MainButton;
