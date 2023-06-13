

import myClientConfig from '@/sanity/config/client-config'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import ImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Head from 'next/head'
import '../globals.css'
import { fallbackImages } from './utilities/fallbackAssets'
import QuickLinksLayout from './(primary)/home/quickLinksLayout'


const builder = ImageUrlBuilder(myClientConfig)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const HomePage = async () => {
  const home = await getHome()

  // Hero Image
  const welcomeImageUrl = home.welcomeImage ? urlFor(home.welcomeImage).url() : fallbackImages.heroImageFallback

  return (
    <div className="font-sans antialiased bg-primary text-gray-900">
      <Head  >
        <title>{home.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <div className='bg-primary'>
        <section className="hero h-[75vh]" style={{ backgroundImage: `url(${welcomeImageUrl})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-96 text-5xl font-bold font-heading leading-snug">{home.pageTitle}</h1>

            </div>
          </div>
        </section>
        <section className='p-8'>
          <h2 className='text-white text-center text-4xl p-4 font-subheading'>{home.welcomeHeading}</h2>
          <div className='max-w-4xl m-auto'>
            <p className='leading-8 text-xl text-secondary text-center font-subContent'>{home.welcome} </p>
          </div>
        </section>
        <section>
          <QuickLinksLayout />
        </section>
      </div>
    </div>
  )
}

export default HomePage