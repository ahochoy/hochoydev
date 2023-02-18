export default {
    name: 'experimentPageContent',
    title: 'Experiment Page Content',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Experiment Page Content',
        },
        {
            name: 'experimentPageHeader',
            title: 'Experiment Page Header',
            type: 'string',
        },
        {
            name: 'experimentPageDescription',
            title: 'Experiment Page Description',
            type: 'text',
        },
    ],
}