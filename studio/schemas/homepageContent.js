export default {
    name: 'homepageContent',
    title: 'Homepage Content',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    groups: [
        {
            name: 'profile',
            title: 'Profile',
        },
        {
            name: 'work',
            title: 'Work',
        },
        {
            name: 'thoughts',
            title: 'Thoughts',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Homepage Content',
        },
        {
            name: 'profileIntro',
            title: 'Profile Intro',
            type: 'text',
            group: 'profile',
        },
        {
            name: 'profileBody',
            title: 'Profile Body',
            type: 'array', 
            of: [{type: 'block'}],
            group: 'profile',
        },
        {
            name: 'profileInterestBlurb',
            title: 'Profile Interest Blurb',
            type: 'text',
            group: 'profile',
        },
        {
            name: 'profileInterests',
            title: 'Profile Interests',
            type: 'array', 
            of: [{
                type: "object",
                fields: [
                    {
                    title: "Interest",
                    name: "interest",
                    type: "string"
                    },
                    {
                    title: "Highlight Image",
                    name: "highlightImage",
                    type: "image"
                    },
                ],
            }],
            group: 'profile',
        },
        {
            name: 'primaryHeader',
            title: 'Primary Section Header',
            type: 'string',
            group: 'work',
        },
        {
            name: 'primaryDescription',
            title: 'Primary Section Description',
            type: 'text',
            group: 'work',
        },
        {
            name: 'primaryCtaText',
            title: 'Primary CTA Button Text',
            type: 'string',
            group: 'work',
        },
        {
            name: 'primaryCtaUrl',
            title: 'Primary CTA URL',
            type: 'url',
            group: 'work',
        },
        {
            name: 'secondaryHeader',
            title: 'Secondary Section Header',
            type: 'string',
            group: 'thoughts',
        },
        {
            name: 'secondaryDescription',
            title: 'Secondary Section Description',
            type: 'text',
            group: 'thoughts',
        },
        {
            name: 'secondaryCtaText',
            title: 'Secondary CTA Button Text',
            type: 'string',
            group: 'thoughts',
        },
        {
            name: 'secondaryCtaUrl',
            title: 'Secondary CTA URL',
            type: 'url',
            group: 'thoughts',
        },
    ],
}
