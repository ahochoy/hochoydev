export default {
    name: 'company',
    type: 'document',
    title: 'Company',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },{
            name: 'engagementType',
            type: 'string',
            title: 'Engagement Type',
            options: {
                list: [
                    {title: 'Employer', value: 'employer'},
                    {title: 'Employer Client', value: 'employerClient'},
                    {title: 'Client', value: 'client'}
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
              }
        },{
            name: 'description',
            type: 'text',
            title: 'Description'
        },{
            name: 'timeServed',
            type: 'string',
            title: 'Time Served'
        }
    ]
}