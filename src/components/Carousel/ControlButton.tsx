import * as React from "react";
import arrowRight from '../../images/arrow-right.svg';
import arrowLeft from '../../images/arrow-left.svg';

interface ControlButtonProps {
    clickHandler(): void;
    reverse?: boolean;
    active: boolean;
}

export function ControlButton({clickHandler, reverse = false, active}: ControlButtonProps) {

    const buttonPosition = reverse ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
    const buttonActive = active ? "opacity-100 hover:bg-gray-400" : "opacity-50"

    return <button 
        onClick={() => clickHandler()}
        disabled={ !active } 
        className={`bg-gray-300 drop-shadow-md text-gray-800 font-bold p-4 rounded-full absolute -translate-y-1/2 ${buttonPosition} ${buttonActive}`}>
            <img src={reverse ? arrowLeft : arrowRight} width="40" alt={reverse ? "Previous" : "Next"} />
        </button>
}
