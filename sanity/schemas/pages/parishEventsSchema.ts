import { defineType, defineField } from 'sanity';

export const parishEvents = defineType({
  name: 'parishEvents', // Required. Must be unique
  title: 'Parish Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      placeholder: 'Get All the Latest News and Events',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',

    })
  ]
})