import React from 'react';
import product from '../../assets/heroimage.png';

const ProductShowCase = () => {
  return (
    <section className="overflow-x-clip py-24 pt-14">
      <div className="md:px-10 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="my-5 section-title text-4xl md:text-5xl font-bold text-center text-gray-900">
            Send Offers Fast. Track Smart. Predict Success.
          </h2>
          <p className="section-description text-lg text-center text-gray-600">
            Talentid streamlines your hiring with instant offer releases, comprehensive tracking, 
            AI-powered joining predictions, and two-way feedback — all in one place.
          </p>
        </div>
        <div className="relative mt-10 max-w-[2000px] mx-auto">
          <div className="relative rounded-lg shadow-xl overflow-hidden">
            <img
              src={product}
              className="w-full object-cover"
              alt="dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowCase;