import { Rule, ValidationContext, SanityDocument, ImageHotspot } from '@sanity/types';


//  Sanity Types
export type { Rule, ValidationContext, SanityDocument }


// Schema Types
export type home = {
  _id: string;
  _createdAt: string;
  name: string;
}


export type Preview = {
  select: {
    title: string;
    eventType: string;
    date: string;
    startTime: string;
    endTime: string;
    daysOfWeek: string[];
  };
  prepare: (args: {
    title: string;
    eventType: string;
    date: string;
    startTime: string;
    endTime: string;
    daysOfWeek: string[];
  }) => any; // Replace 'any' with the expected return type of the prepare function
};

export type Sermon = {
  title: string;
  subtitle: string;
  speaker: string;
}

export type HomePage = {
  home: string;
  pageTitle: string;
  slug: string;
  heroHeading: string;
  heroSubheading: string;
  welcome: string;
  // NOTE & TODO  --> image types ? 
  welcomeImage: string;
  alt: string;
}