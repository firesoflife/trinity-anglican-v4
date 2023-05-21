// sermon.ts
import { MdMusicNote } from "react-icons/md";
import { Rule } from '@sanity/types';
import { Sermon } from '@/types';
import { defineType, defineField } from '@sanity/types';


export const sermon = defineType({
  name: "sermon",
  title: "Sermon",
  type: "document",
  icon: MdMusicNote,
  fields: [
    defineField(
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      }),
    defineField(
      {
        name: "audio",
        title: "Audio",
        type: "file",
        options: {
          accept: "audio/*",
        },
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: "description",
        title: "Description",
        type: "text",
      }),
    defineField(
      {
        name: "date",
        title: "Date",
        type: "datetime",
        validation: (Rule) => Rule.required(),
      }),
    defineField(
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
        options: {
          layout: "tags",
        },
      }),
    defineField(
      {
        name: "speaker",
        title: "Speaker",
        type: "reference",
        to: [{ type: "speaker" }],
        validation: (Rule) => Rule.required(),
      }),
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
});