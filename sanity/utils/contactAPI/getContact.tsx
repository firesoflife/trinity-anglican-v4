import { createClient, groq } from 'next-sanity';
import { ContactPage } from '@/types';
import myClientConfig from '../../config/client-config'

export async function getContactPage(): Promise<ContactPage> {

  return createClient(myClientConfig).fetch(

    groq`
    *[_type == "contactUs"][0]{
      _id,
      _createdAt,
      pageTitle,
      "slug": slug.current,
      days,
      day,
      from,
      to,
      email,
      phone,
    }
    `
  )
}
