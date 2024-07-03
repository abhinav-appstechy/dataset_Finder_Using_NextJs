import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-16 font-sans tracking-wide mt-40">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose">© 2024<a target='_blank'
          className="hover:underline mx-1">Dataset Finder</a>All Rights Reserved.</p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li><Link href="/" className="text-[15px] hover:text-white">Home</Link></li>
          <li><Link href="/aboutus" className="text-[15px] hover:text-white">About Us</Link></li>
          <li><Link href="/contactus" className="text-[15px] hover:text-white">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer