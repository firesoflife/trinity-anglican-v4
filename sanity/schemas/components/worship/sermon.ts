// sermon.ts
import { MdMusicNote } from "react-icons/md";
import { Rule } from '@sanity/types';
import { Sermon } from '@/types';


export default {
  name: "sermon",
  title: "Sermon",
  type: "document",
  icon: MdMusicNote,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "audio",
      title: "Audio",
      type: "file",
      options: {
        accept: "audio/*",
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "speaker",
      title: "Speaker",
      type: "reference",
      to: [{ type: "speaker" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      speaker: "speaker.name",
    },
    prepare(selection: Sermon) {
      const { title, speaker } = selection;
      return {
        title: title,
        subtitle: speaker,
      };
    },
  },
};