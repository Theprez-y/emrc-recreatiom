'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesCTA = () => {
  return (
    <div className='bg-[#052b41] py-20 md:py-32 lg:py-48 xl:py-64 w-full'>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="text-[rgb(197,205,210)] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-light leading-tight md:leading-[1.2] mb-8 md:mb-12 max-w-[90%]"
        >
          EMRC provides service providers & government agencies with high-quality expert advice and comprehensive bespoke solutions.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Link 
            href="/services" 
            className="group relative inline-flex items-center bg-white py-3 px-8 font-normal text-[#0D547D] overflow-hidden rounded-sm"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
              Go to Services
            </span>
            <span className="absolute inset-0 bg-[#D1FF8F] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesCTA;