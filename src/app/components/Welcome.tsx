import React from 'react';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className='flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-15 bg-white text-black'>
      {/* Text Content */}
      <div className='w-full lg:w-[50%] mb-8 lg:mb-0 lg:pr-8 xl:pr-12'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-[#002236]'>
          Welcome
        </h1>
        
        <div className='space-y-6 sm:space-y-8'>
          <p className='text-base sm:text-lg md:text-xl'>
            EMRC are independent consultants specializing in energy market analysis, regulatory frameworks, techno-economic assessments, and financing strategies for clients in the electricity, renewable energy, and gas sectors worldwide. Our team is committed to delivering projects that ensure reliable and affordable energy access in various innovative ways.
          </p>
          
          <p className='text-base sm:text-lg md:text-xl'>
            At EMRC, our experts provide advisory services across the global energy landscape, focusing on market dynamics, regulatory compliance, economic analysis, and investment insights in the electricity, renewables, and gas sectors. We strive to support our clients by facilitating sustainable and cost-effective energy solutions through each of our engagements.
          </p>
        </div>

        <a 
          className="mt-6 group transition-all md:mt-8 inline-block bg-[#002236] py-2 md:py-3 px-6 md:px-8 font-[400] text-white hover:bg-[#D1FF8F] hover:text-[#0D547D] text-sm md:text-base relative overflow-hidden"
          href="/about"
        >
          <span className="absolute inset-0 bg-[#D1FF8F] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">Learn More</span>
        </a>
      </div>

      {/* Image Content */}
      <div className='w-full lg:w-[50%] lg:pl-8 xl:pl-12'>
        <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[750px] w-full'>
          <Image
            src="/env.jpg"
            alt="EMRC Energy Consultants"
            fill
            className='object-cover'
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;