import { defineType, defineField } from 'sanity';

export const pastoralCare = defineType({

  name: 'pastoralCare',
  title: 'Pastoral Care',
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
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      placeholder: 'Inquire',
    }),
  ]
})