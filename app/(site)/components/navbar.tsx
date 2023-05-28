

import { getHome } from '@/sanity/utils/homeAPI/getHome';
import Link from 'next/link';

type Props = {
  params: { pageTitle: string, }
}

export default async function NavBar({ params }: Props) {
  const home = await getHome();

  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={'/home'} className="btn btn-ghost normal-case text-xl">{home.pageTitle}</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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
        </ul>
      </div>
    </header>
  )
}


