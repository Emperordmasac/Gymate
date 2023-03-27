import React from "react";

//--INTERNAL IMPORTS
import { cardList } from "utils/constants";

const AboutCard = (): JSX.Element => {
    return (
        <>
            {cardList.map((card, i) => (
                <div
                    key={card.id}
                    className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br[35px] shadow-2xl min-h-[340px] w-full card_div md1000:min-h-[260px]"
                >
                    <img
                        src={card.img}
                        alt="card img"
                        className="mb-4 w-[75px]"
                    />
                    <p className="uppercase font-bold text-[24px] mb-7">
                        {card.title}
                    </p>
                    <p className="text-[15px] font-medium leading-2 w-full">
                        {card.description}
                    </p>
                </div>
            ))}
        </>
    );
};

export default AboutCard;
