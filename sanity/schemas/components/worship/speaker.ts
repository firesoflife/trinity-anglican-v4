// speaker.ts
import { MdPerson } from "react-icons/md";
import { Rule } from '@sanity/types';

export default {
  name: "speaker",
  title: "Speaker",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};