import React from 'react';

const Hero = () => {
  return (
    <div className='bg-slate-800 w-full min-h-[75vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center px-4 sm:px-8 md:px-16 lg:px-32 py-16'>
      <div className='max-w-7xl mx-auto w-full'>
        <div className='space-y-4 md:space-y-6 lg:space-y-8'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-bold leading-tight md:leading-snug lg:leading-normal'>
            Developing new paths <br className='hidden sm:block' />
            in the energy market.
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl font-medium max-w-4xl leading-relaxed'>
            At EMRC we provide Techno-economic, Regulatory and Financial within all aspects of Energy and Utility Businesses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;