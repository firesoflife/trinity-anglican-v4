

import myClientConfig from '@/sanity/config/client-config'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import ImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import Head from 'next/head'
import '../globals.css'


const builder = ImageUrlBuilder(myClientConfig)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const HomePage = async () => {
  const home = await getHome()

  const welcomeImageUrl = home.welcomeImage ? urlFor(home.welcomeImage).url() : 'https://images.unsplash.com/photo-1584792977024-014310b55977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80';



  return (
    <div className="font-sans antialiased bg-primary text-gray-900">
      <Head  >
        <title>{home.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <div className='bg-primary h-screen'>
        <div className="hero h-[75vh]" style={{ backgroundImage: `url(${welcomeImageUrl})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{home.pageTitle}</h1>
              <p className="mb-5">{home.welcome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage