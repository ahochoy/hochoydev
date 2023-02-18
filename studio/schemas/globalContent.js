export default {
    name: 'globalContent',
    title: 'Global Content',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    groups: [
        {
            name: 'header',
            title: 'Header',
        },
        {
            name: 'footer',
            title: 'Footer',
        },
        {
            name: 'emailer',
            title: 'Emailer',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Global Content',
        },
        {
            name: 'mainLogo',
            title: 'Main Logo',
            type: 'image',
            group: 'header',
        },
        {
            name: 'footerBlurb',
            title: 'Footer Blurb',
            type: 'text',
            group: 'footer',
        },
        {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            group: 'footer',
            of: [{type: 'link' }],
        },
        {
            name: 'emailerHeader',
            title: 'Emailer Section Header',
            type: 'string',
            group: 'emailer',
        },
        {
            name: 'emailerDescription',
            title: 'Emailer Section Description',
            type: 'text',
            group: 'emailer',
        },
        {
            name: 'emailerCtaText',
            title: 'Emailer CTA Button Text',
            type: 'string',
            group: 'emailer',
        },
        {
            name: 'emailerCtaUrl',
            title: 'Emailer CTA URL',
            type: 'url',
            group: 'emailer',
        },
        {
            name: 'emailerBenefits',
            title: 'Emailer Benefits',
            type: 'array',
            group: 'emailer',
            of: [{type: 'text'}],
        },
    ],
}