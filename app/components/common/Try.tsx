'use client'
import React from 'react';
import { User, Briefcase, X } from 'lucide-react';
import Link from 'next/link';

interface TryForFreePopupProps {
  isOpen: boolean;
  onClose: () => void;
  className?:string
}

const TryForFreePopup: React.FC<TryForFreePopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white/90 rounded-2xl p-8 w-full max-w-md relative shadow-2xl transform transition-all duration-300 scale-100 hover:scale-102">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Popup Content */}
        <div className="text-center space-y-8">
            <img 
              src="https://res.cloudinary.com/dfz0wkqij/image/upload/v1743939781/tid_black_havegy.png" 
              alt="Talentid Logo" 
              className="w-28 h-8 mx-auto"
            />

          <div className="space-y-4">
            <Link href={"https://www.offers.talentid.app/login"} className="w-full px-6 py-4 bg-gradient-to-r from-[#652d96] to-[#8a4fc5] text-white rounded-xl hover:from-[#552480] hover:to-[#7a43b0] transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg">
              <User className="w-5 h-5" />
              <span className="font-medium">Sign up as Candidate</span>
            </Link>
            
            <Link href={"https://work.talentid.app/"} className="w-full px-6 py-4 bg-gradient-to-r from-[#652d96] to-[#8a4fc5] text-white rounded-xl hover:from-[#552480] hover:to-[#7a43b0] transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg">
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">Sign up as Recruiter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryForFreePopup;