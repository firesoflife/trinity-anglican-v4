import Link from 'next/link'
import { getHome } from '@/sanity/utils/homeAPI/getHome'


type Props = {
  params: { pageTitle: string, }
}

const MobileNavbar = async ({ params }: Props) => {
  const home = await getHome()
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost normal-case text-lg">{home.pageTitle}</Link>
      </div>
      <div className="flex-none">

        {/* <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <Link href={'/about'}>
              About Us
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li><a>Our History</a></li>
              <li><a>Clergy & People</a></li>
              <li><a>Location</a></li>
            </ul>
          </li>
          <li tabIndex={0}>
            <Link href={'/worship'}>
              Worship
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li><a>What to Expect</a></li>
              <li><a>Worship Schedule</a></li>
              <li><a>Sermons & Teaching</a></li>
            </ul>
          </li>
          <li tabIndex={0}>
            <Link href={'/parishlife'}>
              Parish Life
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li><a>Parish Breakfast</a></li>
              <li><a>Ladies Bible Study</a></li>
              <li><a>Sunday School</a></li>
              <li><a>Parish Study Group</a></li>
              <li><a>Rector's Rice Bowl</a></li>
              <li><a>Refugee Sponsorhip</a></li>
              <li><a>Bulletins & News</a></li>
              <li><a>Ministry & Volunteer</a></li>
              <li><a>Event Calendar</a></li>
            </ul>
          </li>
          <li><a>Facility Rental</a></li>
          <li tabIndex={0}>
            <Link href={'/contact'}>
              Contact Us
            </Link>
          </li>
        </ul> */}


        <div>
          <button className="relative group">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
              </div>
            </div>
          </button>
        </div>



      </div>
    </header>
  )
}

export default MobileNavbar