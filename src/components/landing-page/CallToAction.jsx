import React, { useState } from 'react';
import Arrow from '../../assets/arrow-right.svg';
import TryForFreePopup from '../common/Try';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      className="bg-gradient-to-b from-white to-[_#e9d5ff] py-24 overflow-x-clip"
      aria-labelledby="cta-heading"
    >
      <div className="px-5">
        <div className="max-w-[700px] mx-auto relative">
          <h2 id="cta-heading" className="section-title">
            Try Talentid.app today!
          </h2>

          <p className="section-description mt-5">
            We tell you who’s gonna ghost, before they do.
          </p>
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <Link to={"https://tally.so/r/3EBzql"} target='_blank' className='btn btn-primary'>Book a demo</Link>
          <button className='btn btn-text gap-1'>
            <span
              onClick={() => setIsPopupOpen(true)}
              className="px-1 py-2  rounded-lg hover:scale-105 transition-all duration-200"
            >
              Try for free
            </span>
            <img src={Arrow} className="h-5 w-5" />
          </button>
        </div>
      </div>
      <TryForFreePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default CallToAction;