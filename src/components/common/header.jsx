import React  from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold text-gray-800">
          talent<span className="text-purple-600">app</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="#" className="text-gray-600 hover:text-gray-800">Features</Link>
        <Link to="#" className="text-gray-600 hover:text-gray-800">Pricing</Link>
        <Link to="#" className="text-gray-600 hover:text-gray-800 flex items-center">
          Resources <span className="ml-1">▾</span>
        </Link>
        <Link to="#" className="text-gray-600 hover:text-gray-800">Contact</Link>
        <button className="bg-[#652d96] text-white px-4 py-2 rounded-lg font-medium">
          Book Demo
        </button>
      </nav>
    </header>
  );
}

export default Header;