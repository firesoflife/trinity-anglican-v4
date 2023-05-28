import { createClient, groq } from 'next-sanity';
import { HomePage } from '../../../types'
import myClientConfig from '../../config/client-config'



export async function getHome(): Promise<HomePage> {

  return createClient(myClientConfig).fetch(

    groq`
    *[_type == "home"][0]{
      _id,
      _createdAt,
      pageTitle,
      "slug": slug.current,
      "heroImage": heroImage.asset->url,
      heroHeading,
      heroSubheading, 
      welcome,
      "welcomeImage": welcomeImage.asset->url,
      "welcomeImageAlt": welcomeImage.alt,
    }
    `
  )
}
