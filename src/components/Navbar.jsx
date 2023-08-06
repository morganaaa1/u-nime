import React, { useEffect, useState } from 'react'
import profilePicture from '../assets/images/tes.jpg'

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
            <div className="text-white font-bold text-xl">U Nime</div>
            <ul className="md:flex space-x-4 gap-10 ml-10">
                <li>
                <a className="text-white hover:text-red-400 transition-colors duration-200 delay-50" href="#">Home</a>
                </li>
                <li>
                <a className="text-white hover:text-red-400 transition-colors duration-200 delay-50" href="#">Top Anime</a>
                </li>
                <li>
                <a className="text-white hover:text-red-400 transition-colors duration-200 delay-50" href="#">Best Anime</a>
                </li>
                {/* Aomedd more menu links as needed */}
            </ul>
        </div>

        {/* Right side */}
        <div className="md:flex items-center">
          {/* Profile picture and Search bar */}
          <div className="flex items-center gap-5">
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                className="bg-gray-700 text-white rounded px-3 py-1 focus:outline-none"
                placeholder="Search..."
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Search Icon Path */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
              </button>
            </div>
            {/* Profile picture */}
            <img className="h-8 w-8 rounded" src={profilePicture} alt="Profile" />
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar