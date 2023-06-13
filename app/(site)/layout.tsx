
import '../globals.css'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import NavBar from './components/navbar'
import Footer from './components/footer'
import MobileNavbar from './components/mobileNavbar'
import { header, header2, mainContent, mainContent2, subContent, subContent2 } from '../(site)/utilities/fonts'



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
              <NavBar props={mainContent} />
            </div>
            <div className='block lg:hidden'>
              {/* @ts-expect-error Async Server Component */}
              <MobileNavbar />
            </div>
            <main className={`
            //  Fonts // 
              ${header.variable} 
              ${header2.variable} 
              ${mainContent.variable}
              ${mainContent2.variable}
              ${subContent.variable}
              ${subContent2.variable}
            // Other classes //  
              h-screen
              `}>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html >
  )
} 
