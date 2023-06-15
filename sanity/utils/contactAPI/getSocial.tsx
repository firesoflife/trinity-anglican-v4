import { createClient, groq } from 'next-sanity';
import { SocialComponent } from '@/types';
import myClientConfig from '../../config/client-config'


export async function getSocial(): Promise<SocialComponent> {
  return createClient(myClientConfig).fetch(
    groq`
    *[_type == "socialMediaPlatform"]{
      _id,
      _createdAt,
      platformName,
      platformUrl,
      "platformIconUrl": platformIcon.asset->url,
      platformIconAlt
    }
    `
  )
}