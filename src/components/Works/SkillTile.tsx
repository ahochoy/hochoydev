import * as React from "react";

interface SkillTileProps {
    focusArea: string;
    blurb: string;
    skills: string[];
}

export function SkillTile({ focusArea, blurb, skills}: SkillTileProps) {

    const skillsMarkup = skills.map( (skill) => {
        return <li className="text-sm bg-neutral-100 rounded-full px-3 py-1 w-fit whitespace-nowrap">{skill}</li>
    })

    return <div className="w-full space-y-4">
        <p className="text-2xl font-bold leading-tight tracking-tighter uppercase">{focusArea}</p>
        <p>{blurb}</p>
        <ul className="flex gap-2 flex-wrap">{skillsMarkup}</ul>
    </div>
}
