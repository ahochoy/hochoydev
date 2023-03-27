import * as React from "react";

export function Menu() {
    return <div className="border border-neutral-800 m-8 p-12 max-w-screen-2xl rounded-lg justify-self-end w-full backdrop-blur flex flex-col gap-8">
        <div className="flex place-content-between">
            <div className="flex items-center gap-2">
                <svg height="20" width="20" className="fill-lime-300">
                    <circle cx="10" cy="10" r="10" />
                </svg>
                <p>Let's Connect</p>
            </div>
            <a>
                <svg height="36px" width="36px" viewBox="0 0 460.775 460.775">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>
                    </g>
                </svg>
            </a>
        </div>
        <div>
            <p className="subheading leading-tight tracking-tighter mb-2 medium-weight">Send me a message&#8213;</p>
            <p>Interested in working together or just want to say hello? I'd love to hear from you.</p>
            <p className="display leading-tight tracking-tighter font-bold mt-4">hey@andrewhochoy.com</p>
        </div>
        <div>
            <p className="subheading leading-tight tracking-tighter medium-weight mb-2">Jump straight into the latest posts&#8213;</p>
            <ul className="flex gap-4">
                <li className="w-3/12 aspect-video bg-neutral-800/25 rounded-lg">Article 1</li>
                <li className="w-3/12 aspect-video bg-neutral-800/25 rounded-lg">Article 2</li>
                <li className="w-3/12 aspect-video bg-neutral-800/25 rounded-lg">Article 3</li>
            </ul>
        </div>
        <div className="space-y-4">
            <p className="subheading leading-tight tracking-tighter medium-weight mb-2">Links and Social for the explorers&#8213;</p>
            <ul className="space-y-2">
                <li><span className="py-1 px-3 rounded-lg bg-rose-600 text-white mr-2 text-sm">You Are Here</span>Home</li>
                <li>Thoughts &amp; Experiments</li>
            </ul>
            <ul className="flex gap-4">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
            </ul>
        </div>
    </div>
}
