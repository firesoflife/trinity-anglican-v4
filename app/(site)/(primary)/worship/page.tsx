// import React from 'react'

// const Worship = () => {
//   return (
//     <div>Worship</div>
//   )
// }

// export default Worship


// pages/index.tsx

import Head from 'next/head'
import '../../../globals.css'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import ImageUrlBuilder from '@sanity/image-url'
import myClientConfig from '@/sanity/config/client-config'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'

const builder = ImageUrlBuilder(myClientConfig)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export default async function Home() {
  const home = await getHome()
  return (
    <div className="font-sans min-h-screen antialiased bg-secondary text-gray-900">
      <Head>
        <title>Anglican Church</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="relative block hero md:hero-md bg-cover">
          {/* <div className="hero h-screen" style={{ backgroundImage: `url(${home.welcomeImage}` }}> */}
          <div className="hero h-screen" style={{ backgroundImage: `url(${home.welcomeImage ? urlFor(home.welcomeImage) : 'https://images.unsplash.com/photo-1584792977024-014310b55977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80'})` }}>

            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcom to {home.pageTitle}</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>

        </section>
        <section className="bg-dark-green text-ivory py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl mb-4">Resources</h2>
            <div className="flex justify-center space-x-4 md:space-x-8">
              <a href="#" className="bg-soft-grey hover:bg-light-grey text-navy-blue font-bold py-2 px-4 rounded">
                Prayer Book Society of Canada
              </a>
              <a href="#" className="bg-soft-grey hover:bg-light-grey text-navy-blue font-bold py-2 px-4 rounded">
                Anglican Diocese of NS & PEI
              </a>
              <a href="#" className="bg-soft-grey hover:bg-light-grey text-navy-blue font-bold py-2 px-4 rounded">
                In need of pastoral care? Contact the Priest
              </a>
            </div>
          </div>
        </section>
        <section className="bg-beige py-12">
          {/* Bulletin */}
        </section>
      </main>
    </div >
  )
}
