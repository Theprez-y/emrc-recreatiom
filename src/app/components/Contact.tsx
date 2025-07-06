'use client';
import React from 'react';
import Link from 'next/link';

const Contact = () => {
  const text = "We're here to support you! Whether you'd like to book an appointment, chat live with our team, or locate office, we've got you covered.";

  
  const renderAnimatedText = () => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap">
        {word.split('').map((char, charIndex) => (
          <span 
            key={charIndex}
            className="inline-block"
            style={{ 
              fontVariationSettings: '"wght" 400, "opsz" 9',
              display: 'inline-block'
            }}
            aria-hidden="true"
          >
            {char}
          </span>
        ))}
        <span className="inline-block">&nbsp;</span>
      </span>
    ));
  };

  return (
    <div className="relative">
      
      <div className="absolute inset-0 bg-[url('/sol.avif')] bg-cover bg-center bg-no-repeat"></div>

      <div className="relative z-10 max-w-[1200px] p-4 h-full mx-auto text-white flex items-center py-32">
        <div>
          <h2 
            data-aos="fade-up" 
            data-aos-duration="600" 
            className="text-[18px] text-white/70 aos-init aos-animate"
          >
            Need Assistance?
          </h2>
          
          <div style={{ position: 'relative' }}>
            <span className="text-white text-[30px] md:text-[50px] font-[300] max-w-[600px] mt-4 variable-proximity" style={{ display: 'inline' }}>
              {renderAnimatedText()}
              <span className="sr-only">
                We're here to support you! Whether you'd like to book an appointment, chat live with our team, or locate office, we've got you covered.
              </span>
            </span>
          </div>
          
          <Link
            data-aos="fade-up"
            data-aos-duration="1600"
            className="mt-4 inline-block text-white italic hover:underline aos-init aos-animate"
            href="/contact"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;