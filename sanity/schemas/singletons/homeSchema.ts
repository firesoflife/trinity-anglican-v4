export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageTitle',
        maxLength: 96,
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
    },
    {
      name: 'welcome',
      title: 'Welcome Message',
      type: 'text',
      initialValue:
        'ubi proles etiam contra votum nascitur, quamvis iam nata cogat se diligi. Recolo etiam, cum mihi theatrici carminis certamen inire placuisset',
      maxLength: 96,
    },
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
    },
  ],
};
