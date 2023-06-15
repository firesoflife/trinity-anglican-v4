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
  _id: string;
  _createdAt: string;
  title: string;
  subtitle: string;
  speaker: string;
}

export type HomePage = {
  _id: string;
  _createdAt: string;
  home: string;
  pageTitle: string;
  slug: string;
  heroHeading: string;
  heroSubheading: string;
  welcome: string;
  welcomeHeading: string;
  // NOTE & TODO  --> image types ? 
  welcomeImage: string;
  alt: string;
}

export type ContactPage = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  days: string[],
  day: string,
  from: string,
  to: string,
  email: string,
  phone: string,
}

export type SocialComponent = {
  _id: string;
  _createdAt: string;
  socialMediaPlatform: string,
  platformName: string,
  url: string,
  alt: string,
  description: string,
}

export type PastoralCare = {
  _id: string;
  _createdAt: string;
  name: string,
  title: string,
  description: string,
  image: string,
  buttonText: string,
}