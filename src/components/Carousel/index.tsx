import * as React from "react";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ControlButton } from "./ControlButton";
import { CarouselCard } from "./CarouselCard";
import type { CarouselProps } from "./carousel.interface";

export function Carousel({makeSmall = false, cards}:CarouselProps) {

    const containerRef = useRef<HTMLDivElement>(null);
    const numberOfItems = cards.length;
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
        const displayActiveCarouselCard = () => {
            if (containerRef.current) {
                const gap = parseInt(getComputedStyle(containerRef.current).gap);
                const itemWidth = containerRef.current.querySelectorAll('div').item(0).getBoundingClientRect().width
    
                gsap.set(containerRef.current, {translateX: -currentIndex * (itemWidth + gap)})
            }
        };

        displayActiveCarouselCard()
        window.addEventListener('resize', displayActiveCarouselCard);

        return () => {
            window.removeEventListener('resize', displayActiveCarouselCard);
        }
    }, [currentIndex])

    const carouselSize = makeSmall ? "2xl:w-[30vw]" : "2xl:w-[50vw]"
    
    return <>
        <div className="w-full overflow-hidden">
            <div className={`flex w-[90vw] items-center relative container mx-auto ${carouselSize}`}>
                <div className="flex w-full gap-10 relative transition-transform duration-300 ease-in-out" ref={containerRef}>
                    {cards.map((card,i) => {
                        return <CarouselCard key={i} {...card} isActiveCard={i === currentIndex} />
                    })}
                </div>
                <div>
                    <ControlButton clickHandler={goToPrevious} reverse />
                    <ControlButton clickHandler={goToNext} />
                </div>
            </div>
        </div>
    </>
}
