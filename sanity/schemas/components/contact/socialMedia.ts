// socialMediaPlatforms.ts
import { defineType, defineField } from "sanity";


export const socialMediaPlatform = defineType({
  name: 'socialMediaPlatform',
  title: 'Social Media Platform',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'name',
        title: 'Platform Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: 'url',
        title: 'Platform URL',
        type: 'url',
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: 'logo',
        title: 'Platform Logo',
        type: 'image',
        options: {
          hotspot: true,
        },

        fields: [
          defineField(
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              options: {
                // isHighlighted: true, TODO: find type or non-deprecated way to do this
              },
            }),
        ],
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: 'description',
        title: 'Platform Description',
        type: 'array',
        of: [{ type: 'block' }],
      }),
  ],
});

export default socialMediaPlatform; 