
import '../globals.css'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import NavBar from './components/navbar'
import Footer from './components/footer'

/////////////////////////////////////////
/////////// FONT DEFINITIONS ///////////
///////////////////////////////////////


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
            {/* @ts-expect-error Async Server Component */}
            <NavBar />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
} 
