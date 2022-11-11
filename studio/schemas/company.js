export default {
    name: 'company',
    type: 'document',
    title: 'Company',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
        },
        {
            name: 'engagementType',
            type: 'string',
            title: 'Engagement Type',
            options: {
                list: [
                    {title: 'Employer', value: 'employer'},
                    {title: 'Employer Client', value: 'employerClient'},
                    {title: 'Client', value: 'client'}
                ],
            },
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'timeServed',
            type: 'string',
            title: 'Time Served',
        }
    ]
}