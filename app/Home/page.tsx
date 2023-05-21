// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <Head>
        <title>St. Paul's Circular Church</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">St. Paul's Circular Church</div>
        <p className="text-gray-500">An Authentic Episcopal Congregation in the Heart of Portland, Oregon.</p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-black">Welcome</h2>
        <p className="text-gray-500">Guided by the teachings of Jesus Christ...</p>
        <a href="#" className="text-blue-500">Learn more about Church Life</a>
      </div>

      <div>
        <h2 className="text-xl font-medium text-black">Worship</h2>
        <p className="text-gray-500">Sundays: 7:30 a.m. Holy Eucharist...</p>
        <a href="#" className="text-blue-500">Learn more about Worship</a>
      </div>

      <div>
        <h2 className="text-xl font-medium text-black">General Inquiries</h2>
        <p className="text-gray-500">Email: office@circularchurch.org...</p>
        <a href="#" className="text-blue-500">Contact a Priest</a>
      </div>

      <div>
        <h2 className="text-xl font-medium text-black">Quick Links</h2>
        <a href="#" className="text-blue-500">Book of Common Prayer</a>
        <a href="#" className="text-blue-500">COVID-19 Information</a>
        // Add more links as needed
      </div>

      <div>
        <h2 className="text-xl font-medium text-black">How To Give</h2>
        <p className="text-gray-500">For weekly updates by email...</p>
        <a href="#" className="text-blue-500">Subscribe</a>
      </div>
    </div>
  )
}
