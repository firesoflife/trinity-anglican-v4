

import myClientConfig from '@/sanity/config/client-config'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import ImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'


const builder = ImageUrlBuilder(myClientConfig)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const HomePage = async () => {
  const home = await getHome()
  return (
    <div className="bg-slate-300">

      <div className='container mx-auto px-4'>
        <h1 className='text-4xl text-center'>Welcome to  {home.pageTitle} </h1>
        <p>{home.welcome}</p>
        <div className='h-fit'>
          <Image
            src={urlFor(home.welcomeImage).url() || ''}
            alt={home.welcomeImage}
            width={2000}
            height={1080}

            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage