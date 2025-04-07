'use client';
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719036032/jqwtdqg6ze25uyp0x0k4.webp",
  "https://res.cloudinary.com/dfz0wkqij/image/upload/v1743994466/1_dvuyej.png",
  "https://res.cloudinary.com/dfz0wkqij/image/upload/v1743962812/NavLogo_tfzyzy.png",
  "https://res.cloudinary.com/dfz0wkqij/image/upload/v1731956282/itssxuuewq9xzh1jy7sg.png",
  "https://res.cloudinary.com/dfz0wkqij/image/upload/v1726822689/image_2_1_wv4c3z.png"
];

const LogoTicker = () => {
  return (
    <section className='py-8 md:py-12 bg-white'>
      <div className="flex items-center justify-center">
        <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 animate-scroll"
            style={{ width: 'fit-content' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity
            }}
          >
            {[...logos, ...logos, ...logos].map((src, idx) => (
              <img
                key={idx}
                className='logo-ticker-Image w-20  h-auto'
                src={src}
                alt={`Partner Logo ${idx + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
