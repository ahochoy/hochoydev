import * as React from "react";
import { useEffect, useRef, useState } from "react";
import arrowRight from '../../images/arrow-right.svg';
import arrowLeft from '../../images/arrow-left.svg';

interface CarouselProps {
    title: string;
}

export function Carousel({title}: CarouselProps ) {

    const containerRef = useRef<HTMLDivElement>(null);
    const numberOfItems = 3;
    const [currentIndex, setCurrentIndex] = useState(0);

    function goCarousel(direction: string) {
        switch (direction) {
            case 'previous':
                if (currentIndex === 0) return;
                setCurrentIndex(currentIndex - 1);
                break;
            case 'next':
                if (currentIndex + 1 === numberOfItems) return;
                setCurrentIndex(currentIndex + 1);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (containerRef.current) {
            const gap = parseInt(getComputedStyle(containerRef.current).gap);
            const itemWidth = containerRef.current.querySelectorAll('div').item(0).clientWidth
            containerRef.current.style.transform = `translateX(-${currentIndex * (itemWidth + gap)}px)`
        }
    }, [currentIndex])
    
    return <>
        <div className="container mx-auto my-16 px-8 2xl:px-48 flex items-center relative">
            <h4 className="z-50 font-thin text-blue-700 w-[13.5rem] text-right absolute -ml-32">{title}</h4>
            <div className="flex w-full gap-8 relative transition-transform duration-300 ease-in-out" ref={containerRef}>
                <div className="shrink-0 w-full aspect-[3/2] bg-red-600"></div>
                <div className="shrink-0 w-full aspect-[3/2] bg-green-600"></div>
                <div className="shrink-0 w-full aspect-[3/2] bg-blue-600"></div>
            </div>
            {(currentIndex !== 0) && <button onClick={() => goCarousel('previous')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-4 rounded-full absolute -bottom-9 left-12"><img src={arrowLeft} width="40" alt="Previous" /></button>}
            {(currentIndex + 1 !== numberOfItems) && <button onClick={() => goCarousel('next')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-4 rounded-full absolute -bottom-9 right-12"><img src={arrowRight} width="40" alt="Next" /></button>}
        </div>
    </>
}