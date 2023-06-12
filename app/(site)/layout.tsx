
import '../globals.css'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import NavBar from './components/navbar'
import Footer from './components/footer'
import MobileNavbar from './components/mobileNavbar'

/////////////////////////////////////////
/////////// FONT DEFINITIONS ///////////
///////////////////////////////////////
// import { Cormorant_Garamond } from '@next/font/google'

// const garamond = Cormorant_Garamond({
//   subsets: ['latin'],
//   weight: ["400", "600", "700"],
// })


export const metadata = {
  title: 'Trinity Anglican Church',
  description: 'Trinity Anglican Church, Nova Scotia, Canada. A welcoming community of faith in the Anglican tradition. We are a parish of the Anglican Diocese of Nova Scotia and Prince Edward Island, a member of the worldwide Anglican Communion, and a member of the World Council of Churches.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const home = await getHome();

  return (
    <html lang="en" data-theme="corporate" >
      <body >
        <div>
          <div className='bg-primary pt-7'>
            <div className='hidden lg:block'>
              {/* @ts-expect-error Async Server Component */}
              <NavBar />
            </div>
            <div className='block lg:hidden'>
              {/* @ts-expect-error Async Server Component */}
              <MobileNavbar />
            </div>
            <main className='h-screen'>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
} 
