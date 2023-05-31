

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
  // return (
  //   <div className="bg-slate-300">

  //     <div className='container mx-auto px-4'>
  //       <h1 className='text-4xl text-center'>Welcome to  {home.pageTitle} </h1>
  //       <p>{home.welcome}</p>
  //       <div className='h-fit'>
  //         <Image
  //           src={urlFor(home.welcomeImage).url() || ''}
  //           alt={home.welcomeImage}
  //           width={2000}
  //           height={1080}

  //           className='rounded-lg'
  //         />
  //       </div>
  //     </div>
  //     <div className="font-sans min-h-screen antialiased bg-primary text-gray-900">
  //       <Head>
  //         <title>Anglican Church</title>
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>

  //       <main>
  //         <section className="relative block hero md:hero-md bg-cover" style={{ backgroundImage: 'url("https://unsplash.com/photos/3Ja1NLewIew")' }}>
  //           <span id="blackOverlay" className="absolute overlay"></span>
  //           <div className="bottom-svg pointer-events-none h-70">
  //             <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
  //               <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
  //             </svg>
  //           </div>
  //         </section>

  //         <section className="container mx-auto text-center py-6 mb-12">
  //           <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Welcome to our Church</h1>
  //           <div className="w-full mb-4">
  //             <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
  //           </div>

  //           <h2 className="my-4 text-3xl leading-tight">This is a welcome message.</h2>
  //           <p className="mb-8 text-2xl leading-relaxed">Here, you will find all the information you need about our church and its activities.</p>
  //         </section>
  //       </main>
  //     </div>s
  //   </div>
  // )

  return (
    <div className="font-sans min-h-screen antialiased bg-secondary text-gray-900">
      <Head>
        <title>Anglican Church</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="relative block hero md:hero-md bg-cover">
          <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
          <div className="bottom-svg pointer-events-none h-70">
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <div className="container mx-auto text-center py-6 mb-12 relative"> {/* Ensure text is above the overlay */}
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Welcome to Trinity Anglican Church</h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <h2 className="my-4 text-3xl leading-tight text-white">This is a welcome message.</h2>
            <p className="mb-8 text-2xl leading-relaxed text-white">Welcome to our Anglican Church. We are delighted to have you here. Our church is a place of worship, fellowship, and community. We believe in the power of prayer, the joy of love, and the miracle of forgiveness. We hope you feel welcome, and we look forward to getting to know you better. Please feel free to reach out with any questions or needs you may have.</p>
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
          <div className="container mx-auto text-center">
            <h2 className="text-3xl mb-4">Church Bulletin</h2>
            <p className="mx-auto text-lg leading-relaxed">
              Welcome to our weekly bulletin. Here, you'll find updates, announcements, and other important information. This section will be updated weekly, so make sure to check back often. For now, this is placeholder content, but in the future, this content will be dynamic and fetched from a backend.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage