export default {
    name: 'role',
    title: 'Role',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'blurb',
        title: 'Blurb',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{type: 'reference', to: {type: 'skill'}}],
      },
      {
        name: 'companies',
        title: 'Companies',
        type: 'array',
        of: [{type: 'reference', to: {type: 'company'}}],
      },
    ],
  }
  