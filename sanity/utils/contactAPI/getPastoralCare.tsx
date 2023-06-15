import { createClient, groq } from 'next-sanity';
import { PastoralCare } from '@/types';
import myClientConfig from '@/sanity/config/client-config';

export async function getPastoralCare(): Promise<PastoralCare> {

  return createClient(myClientConfig).fetch(groq`
    *[_type == "pastoralCare"][0]{
        _id,
        _createdAt,
        title,
        description,
        "imageUrl": image.asset->url,
        imageAlt,
        buttonText
      }
    `
  )
}

