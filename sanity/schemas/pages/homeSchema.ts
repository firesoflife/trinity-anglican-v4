import { defineType, defineField } from '@sanity/types'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string',
      }),
    defineField(
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'pageTitle',
          maxLength: 96,
        },
      }),
    defineField(
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
      }),
    defineField(
      {
        name: 'heroHeading',
        title: 'Hero Heading',
        type: 'string',
      }),
    defineField(
      {
        name: 'heroSubheading',
        title: 'Hero Subheading',
        type: 'string',
      }),
    defineField(
      {
        name: 'welcome',
        title: 'Welcome Message',
        type: 'text',
        initialValue:
          'ubi proles etiam contra votum nascitur, quamvis iam nata cogat se diligi. Recolo etiam, cum mihi theatrici carminis',
        validation: Rule => Rule.max(500).warning('You have exceeded the maximum length')
      }),
    defineField(
      {
        name: 'welcomeImage',
        title: 'Welcome Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string',
          },
        ],
      }),
  ],
});
