'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const ClientsMarquee = () => {
  const clients = [
    { id: 1, image: '/L1.webp', alt: 'Client 1' },
    { id: 2, image: '/L2.webp', alt: 'Client 2' },
    { id: 3, image: '/L3.webp', alt: 'Client 3' },
    { id: 4, image: '/L4.webp', alt: 'Client 4' },
    { id: 5, image: '/L5.webp', alt: 'Client 5' },
    { id: 6, image: '/L6.webp', alt: 'Client 6' },
    { id: 7, image: '/L7.webp', alt: 'Client 7' },
    { id: 8, image: '/L8.webp', alt: 'Client 8' },
    { id: 9, image: '/L9.webp', alt: 'Client 9' },
    { id: 10, image: '/L10.webp', alt: 'Client 10' },
  ];

  return (
    <div className="px-4 bg-white">
      <h1 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        className="max-w-[1200px] mx-auto text-3xl md:text-[80px] font-[800] text-[#002236] mt-8 aos-init aos-animate"
      >
        Our Clients
      </h1>
      
      <div className="relative overflow-hidden">
        <Marquee 
          speed={50} 
          autoFill={true}
          pauseOnHover={true}
          gradient={true}
          gradientColor="white"
          gradientWidth={200}
        >
          {clients.map((client) => (
            <div key={client.id} className="px-20 py-14 border-r border-b flex items-center">
              <Image
                src={client.image}
                alt={client.alt}
                width={125}
                height={76}
                className="w-[100px] hover:grayscale transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientsMarquee;