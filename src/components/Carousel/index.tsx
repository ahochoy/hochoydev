import * as React from "react";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ControlButton } from "./ControlButton";
import { CarouselCard } from "./CarouselCard";

export function Carousel({makeSmall = false}) {

    const containerRef = useRef<HTMLDivElement>(null);

    const numberOfItems = 4;
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToNext() {
        if (currentIndex + 1 === numberOfItems) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function goToPrevious() {
        if (currentIndex === 0){
            setCurrentIndex(3);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    useEffect(() => {
        if (containerRef.current) {
            const gap = parseInt(getComputedStyle(containerRef.current).gap);
            const itemWidth = containerRef.current.querySelectorAll('div').item(0).getBoundingClientRect().width

            gsap.set(containerRef.current, {translateX: -currentIndex * (itemWidth + gap)})
        }
    }, [currentIndex])

    const carouselSize = makeSmall ? "w-1/3" : "w-1/2"
    
    return <>
        <div >
            <div className={`flex items-center relative container mx-auto ${carouselSize}`}>
                <div className="flex w-full gap-10 relative transition-transform duration-300 ease-in-out" ref={containerRef}>
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                </div>
                <div>
                    <ControlButton clickHandler={goToPrevious} reverse />
                    <ControlButton clickHandler={goToNext} />
                </div>
            </div>
        </div>
    </>
}
