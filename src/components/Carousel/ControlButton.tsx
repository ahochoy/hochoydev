import * as React from "react";
import arrowRight from '../../images/arrow-right.svg';
import arrowLeft from '../../images/arrow-left.svg';

interface ControlButtonProps {
    clickHandler(): void;
    reverse?: boolean;
}

export function ControlButton({clickHandler, reverse = false}: ControlButtonProps) {

    const buttonPosition = reverse ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"

    return <button 
        onClick={() => clickHandler()}
        className={`bg-zinc-300 drop-shadow-lg text-zinc-800 font-bold scale-50 lg:scale-100 p-4 rounded-full absolute -translate-y-1/2 ${buttonPosition}`}>
            <img src={reverse ? arrowLeft : arrowRight} width="40" alt={reverse ? "Previous" : "Next"} />
        </button>
}
