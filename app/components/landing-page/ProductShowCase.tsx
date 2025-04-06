'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProductShowCase = () => {
  const productRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null); 
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={productRef} className='bg-gradient-to-b overflow-x-clip from-[#FFFFFF] to-[_#e9d5ff] py-24'>
      <div className="md:px-10 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className='my-5 section-title text-4xl md:text-5xl font-bold text-center text-gray-900'>
            Install and Run Your Workflow Companion
          </h2>
          <p className='section-description text-lg text-center text-gray-600'>
            Download Staar AI as a zip file, unzip it, and run it on your desktop to start working smarter—code, files, and more, all in your flow.
          </p>
        </div>
        <div className="relative mt-10 max-w-[2000px] mx-auto">
          <div className="relative rounded-lg shadow-xl overflow-hidden">
            <video
              ref={videoRef}
              src={'https://res.cloudinary.com/dxfujspwu/video/upload/v1743732650/staarai_yppsln.mp4'}
              loop
              muted
              className='w-full object-cover'
            />
            {!isPlaying && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handlePlayPause}
              >
                <motion.button
                  className="flex items-center justify-center w-20 h-20 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Play Video"
                >
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowCase;