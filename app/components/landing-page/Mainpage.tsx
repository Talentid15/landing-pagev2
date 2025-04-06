'use client';
import React from 'react';
import ArrowIcon from '@/app/assets/arrow-right.svg';

const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]'>
      <div className='container xl:px-20 md:px-10 max-md:px-5'>
        <div className="md:flex items-center">
          <div className='md:w-[478px] 2xl:w-[650px]'>
            <div className="tag">Discover, Test, and Buy ML Models</div>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
              The Ultimate ML Model Marketplace
            </h1>
            <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
              Explore and test pre-trained ML models for your projects. Discover the perfect solution, and seamlessly integrate powerful AI into your applications.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className='btn btn-primary'>Start Exploring Free Models</button>
              <button className='btn btn-text gap-1'>
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 2xl:ml-20 relative">
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
