'use client';
import React from 'react';
import product from '@/app/assets/product-image.png';
import Image from 'next/image';

const ProductShowCase = () => {

  return (
    <section className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#652d96,_#e9d5ff)] py-24 pt-14">
      <div className="md:px-10 px-5">
        <div className="max-w-[900px] mx-auto">
          <div className="flex justify-center items-center">
            <div className="tag inline-block px-3 py-1 text-purple-800 rounded-full text-sm font-semibold">
              Get Started with Staar AI
            </div>
          </div>
          <h2 className='my-5 section-title text-4xl md:text-5xl font-bold text-center text-gray-900'>
            Install and Run Your Workflow Companion
          </h2>
          <p className='section-description text-lg text-center text-gray-600'>
            Download Staar AI as a zip file, unzip it, and run it on your desktop to start working smarter—code, files, and more, all in your flow.
          </p>
        </div>
        <div className="relative mt-10 max-w-[2000px] mx-auto">
          <div className="relative rounded-lg shadow-xl overflow-hidden">
            <Image
              src={product}
              className='w-full object-cover'
              alt='hero image'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowCase;