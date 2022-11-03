import type * as React from "react";

export interface CarouselCardProps {
    type: string;
    title: string;
    blurb: string;
    url: string;
}



type CarouselCards = CarouselCardProps[]

export interface CarouselProps {
    makeSmall?: boolean;
    cards: CarouselCards
}