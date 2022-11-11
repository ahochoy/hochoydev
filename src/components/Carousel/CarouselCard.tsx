import * as React from "react";
import type { CarouselCardProps } from "./carousel.interface";

export function CarouselCard({type, title, blurb, url, isActiveCard=false}:CarouselCardProps) {

    const activeStyles = isActiveCard ? "opacity-100" : "opacity-50"

    return <a href={url} className={`shrink-0 w-full sm:aspect-[3/2] bg-gradient-to-tr from-blue-500 to-blue-900 rounded-lg flex h-fit overflow-hidden transition-opacity ${activeStyles}`}>
        <div className="self-end w-full p-10 bg-gradient-to-tr from-zinc-900 to-transparent text-zinc-200">
            <p className="w-fit mb-4 small-text uppercase rounded-full border-solid border px-3 border-zinc-200">{type}</p>
            <p className="subheading bold-weight">{title}</p>
            <p>{blurb}</p>
        </div>
    </a>
}
