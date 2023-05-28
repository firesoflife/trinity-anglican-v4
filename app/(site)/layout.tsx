
import '../globals.css'
import { getHome } from '@/sanity/utils/homeAPI/getHome'
import NavBar from './components/navbar'
import Footer from './components/footer'

/////////////////////////////////////////
/////////// FONT DEFINITIONS ///////////
///////////////////////////////////////


export const metadata = {
  title: 'Thinking in Circles - A Critical Blog',
  description: 'Not to be confused with circular thinking, Thinking in Circles seeks the voice of reason on issues such as philosophy, technology, politics, policy, and more, through ancient wisdom and contemporary critical thinking. ',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const home = await getHome();

  return (
    <html lang="en" data-theme="corporate" >
      <body>
        <div className='flex flex-col min-h-screen'>
          {/* @ts-expect-error Async Server Component */}
          <NavBar />
          <main className='py-20 flex-grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 
