export default
  {
    name: 'worship',
    title: 'Worship Page',
    type: 'document',
    fields: [
      {
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string',
      },
      {
        name: 'content',
        type: 'array',
        title: 'What To Expect',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ]
  }