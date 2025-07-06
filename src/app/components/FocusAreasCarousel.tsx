// components/FocusAreasCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const focusAreas = [
     {
      title: "Energy Access",
      description: "Our unwavering dedication to developing Energy Access solutions drives our never-ending quest for excellence. Our diverse team combines creative synergy from various professions.",
      imageUrl: "/sol.avif",
      link: "/our-area-of-focus/energy-access"
    },
    {
      title: "Market Research",
      description: "We conduct comprehensive Energy Market Research, providing organizations with in-depth insights and strategic evaluations to navigate the dynamic energy market landscape.",
      imageUrl: "/research.jpg",
      link: "/our-area-of-focus/market-research"
    },
    {
      title: "Climate Transition",
      description: "Committed to developing solutions for energy and climate transition, where sustainability is a guiding principle affecting every decision and activity.",
      imageUrl: "/climate.avif",
      link: "/our-area-of-focus/climate-transition"
    },
    {
      title: "Digital Solutions",
      description: "Specializing in Digital Systems Development, creating personalized solutions with cutting-edge technology to help organizations perform at their peak.",
      imageUrl: "/stats.avif",
      link: "/our-area-of-focus/digital-solutions"
    },
    {
      title: "Policy Advisory",
      description: "Providing expert guidance on energy policies and regulations to help shape sustainable energy frameworks and governance models.",
      imageUrl: "/ad.avif",
      link: "/our-area-of-focus/policy-advisory"
    },
    {
      title: "Renewable Energy",
      description: "Driving the transition to renewable energy sources through innovative projects and sustainable energy solutions.",
      imageUrl: "/sol.avif",
      link: "/our-area-of-focus/renewable-energy"
    }
];

export default function FocusAreasCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="!px-4 !pb-12"
    >
      {focusAreas.map((area, index) => (
        <SwiperSlide key={index}>
          <div className="group h-full flex flex-col">
            <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-lg">
              <Image
                src={area.imageUrl}
                alt={area.title}
                fill
                className="group-hover:scale-105 transition-transform duration-300 object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{area.title}</h3>
            <p className="mt-2 text-white/80 font-light flex-grow">{area.description}</p>
            <Link 
              href={area.link}
              className="mt-4 inline-block text-white hover:text-blue-200 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}