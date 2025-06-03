import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-md bg-transparent">
        <div className="flex items-center space-x-2">
          <img src="https://res.cloudinary.com/dfz0wkqij/image/upload/v1743994510/Group_18_zpgswd.png" alt="" className='h-6 w-auto' />
        </div>
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <HashLink to="/#features" className="text-gray-600 hover:text-gray-800">Features</HashLink>
          <HashLink to="/#pricing" className="text-gray-600 hover:text-gray-800">Pricing</HashLink>
          <Link to="#" className="text-gray-600 hover:text-gray-800 flex items-center">
            Resources <span className="ml-1">▾</span>
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <button className="bg-[#652d96] text-white px-4 py-2 rounded-lg font-medium">
            Book Demo
          </button>
        </nav>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-800">
              talent<span className="text-purple-600">app</span>
            </span>
          </div>
          <Link
            to="#"
            className="text-gray-600 hover:text-gray-800 text-lg font-medium"
            onClick={toggleSidebar}
          >
            Features
          </Link>
          <Link
            to="#"
            className="text-gray-600 hover:text-gray-800 text-lg font-medium"
            onClick={toggleSidebar}
          >
            Pricing
          </Link>
          <Link
            to="#"
            className="text-gray-600 hover:text-gray-800 text-lg font-medium flex items-center"
            onClick={toggleSidebar}
          >
            Resources <span className="ml-1">▾</span>
          </Link>
          <Link
            to="#"
            className="text-gray-600 hover:text-gray-800 text-lg font-medium"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
          <button
            className="bg-[#652d96] text-white px-4 py-2 rounded-lg font-medium w-full text-left"
            onClick={toggleSidebar}
          >
            Book Demo
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;