'use client';
import React  from 'react';
import Arrow from '@/app/assets/arrow-right.svg';

const CallToAction = () => {


  return (
    <section 
      className="bg-gradient-to-b from-white to-[_#e9d5ff] py-24 overflow-x-clip"
      aria-labelledby="cta-heading"
    >
      <div className="px-5">
        <div className="max-w-[700px] mx-auto relative">
          <h2 id="cta-heading" className="section-title">
            Download Staar AI Today
          </h2>

          <p className="section-description mt-5">
            Get Staar AI for free and let it work with your flow—enhancing code, files, and tasks right on your desktop.
          </p>
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary" aria-label="Download Staar AI for free">
            Download Now
          </button>
          <button 
            className="btn btn-text flex gap-2 items-center"
            aria-label="Learn more about Staar AI features"
          >
            <span>Discover Features</span>
            <Arrow className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;