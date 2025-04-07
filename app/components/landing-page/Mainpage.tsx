'use client';
import React, { useState } from 'react';
import ArrowIcon from '@/app/assets/arrow-right.svg';
import Image from 'next/image';
import User from '@/app/assets/girl.png'
import bg from '@/app/assets/bg.png'
import TryForFreePopup from '../common/Try';
import Link from 'next/link';

const MainPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <section className='pt-8 pb-20 md:pt-5 md:pb-0 overflow-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#652d96,_#e9d5ff)]'>
            <div className='container xl:px-20 md:px-10 max-md:px-5'>
                <div className="md:flex items-center">
                    <div className='md:w-[478px] 2xl:w-[650px]'>
                        <div className="tag">
                            No more getting ghosted in hiring
                        </div>
                        <h1 className='text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
                            Recruit Smarter.  Close Faster.  Ghost-Proof Your Offers.
                        </h1>
                        <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
                            Dont wait for candidates to disappear. Talentid helps you gauge intent, identify risks, and optimize your close strategy, all before the candidate joins.
                        </p>
                        <div className="flex gap-1 items-center mt-[30px]">
                        <Link href={"https://tally.so/r/3EBzql"} target='_blank' className='btn btn-primary'>Book a demo</Link>
                            <button className='btn btn-text gap-1'>
                                <span
                                    onClick={() => setIsPopupOpen(true)}
                                    className="px-1 py-2  rounded-lg hover:scale-105 transition-all duration-200"
                                >
                                    Try for free
                                </span>
                                <ArrowIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-20 md:h-[648px] md:flex-1 flex 2xl:ml-20 relative justify-center items-end">
                        <Image
                            src={User}
                            alt='image'
                            className='w-auto md:h-[80vh] z-10'
                        />
                        <Image
                            src={bg}
                            alt='image'
                            className='w-auto md:h-screen absolute bottom-0 left-0'
                        />
                    </div>
                </div>
            </div>
            <TryForFreePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </section>
    );
}

export default MainPage;
