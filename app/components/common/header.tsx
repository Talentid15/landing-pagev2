import React from 'react';
import Arrow from '@/app/assets/arrow-right.svg';
import MenuIcon from '@/app/assets/menu.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='sticky z-20 top-0 backdrop-blur-sm bg-transparent'>
            <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
                <p className='text-white/60 hidden md:block'>
                No more getting ghosted during critical moments—recruit smarter, close faster, and ghost-proof your hiring process.
                </p>
                <div className="inline-flex gap-1 items-center">
                    <p>Join Talentid.app now</p>
                    <Arrow className="h-4 w-4 inline-flex justify-center items-center" />
                </div>
            </div>
            <div className="p-5">
                <div className="">
                    <div className="flex items-center justify-between">
                        <img src={"https://res.cloudinary.com/dfz0wkqij/image/upload/v1743939781/tid_black_havegy.png"} alt='Staar AI Logo' className='w-28 h-8' />
                        <MenuIcon className="h-5 w-5 md:hidden" />
                        <nav className='hidden md:flex gap-6 text-black/60 items-center lg:ml-20'>
                            <Link href="#home" className="hover:text-black transition-colors duration-200">Home</Link>
                            <Link href="#features" className="hover:text-black transition-colors duration-200">Pricing</Link>
                            <Link href="#download" className="hover:text-black transition-colors duration-200">Resources</Link>
                            <Link href="#support" className="hover:text-black transition-colors duration-200">Contact</Link>
                        </nav>
                        <div className="">
                            <button
                                className="px-5 py-2 text-[_#652d96] rounded-lg hover:scale-105 transition-all duration-200"
                            >
                               Login
                            </button>
                            <button
                                className="px-5 py-2 bg-[_#652d96] text-white rounded-lg  hover:scale-105 transition-all duration-200"
                            >
                               Try for free
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;