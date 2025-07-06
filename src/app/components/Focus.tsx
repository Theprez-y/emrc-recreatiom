'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Focus = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const focusAreas = [
    {
      id: 1,
      title: "Energy Access",
      content: "Our unwavering dedication to developing Energy Access solutions is more than a pledge; it drives our never-ending quest for excellence. Our diversified and highly talented staff combines creative synergy from many professions and experiences, allowing us to overcome obstacles and push boundaries. EMRC provides critical services to utilities in the energy industry, particularly Distribution Companies (Discos), with a primary focus on closing the energy gap in Africa by providing comprehensive energy services and support across grid infrastructure, utilities, and renewable energy.",
      link: "/our-area-of-focus/energy-access-and-mini-grids"
    },
    {
      id: 2,
      title: "Climate Change & Energy Transition",
      content: "Our work is motivated by a steadfast commitment to developing game-changing solutions for the energy and climate transition, where sustainability is more than a fashionable term, but a guiding principle that affects every activity and decision, including climate-friendly choices",
      link: "/our-area-of-focus/climate-change-clean-energy"
    },
    {
      id: 3,
      title: "Digital Systems Development",
      content: "We specialize in Digital Systems Development, creating personalized solutions that use cutting-edge technology such as performance monitoring tools, performance tracking tools and so to help organizations perform at their peak. Our competence is built on innovation, as seen by the success of earlier initiatives.",
      link: "/our-area-of-focus/digital-systems-development"
    },
    {
      id: 4,
      title: "Energy Market Research",
      content: "We do effective Energy Market Research for our customers, guided by a never-ending dedication to quality. Our goal is clear: to give organizations in-depth insights, strategic evaluations, and useful data that will allow them to confidently and proactively manage the ever-changing energy market.",
      link: "/our-area-of-focus/market-research-and-reporting"
    },
    {
      id: 5,
      title: "Financial Advisory",
      content: "Financial advisory services provide expert guidance on investment strategies, risk management, and financial planning to help businesses and individuals achieve their financial goals. Our team offers tailored solutions to navigate complex financial landscapes.",
      link: "/our-area-of-focus/financial-advisory"
    }
  ];

  return (
    <section className="relative py-12 px-4 bg-white overflow-hidden">
      <h1 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        className="text-3xl md:text-[80px] primary font-[800] text-[#002236] mb-8 aos-init aos-animate"
      >
        Our Focus Areas
      </h1>

      <div className="relative">
        <button 
          ref={navigationPrevRef}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 w-10 h-10 flex items-center justify-center border backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors" 
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-6 h-6 text-black">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>

        <button 
          ref={navigationNextRef}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 w-10 h-10 flex items-center justify-center border backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors" 
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6 text-black">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          centeredSlides={false}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="!overflow-visible"
        >
          {focusAreas.map((area, index) => (
            <SwiperSlide 
              key={area.id} 
              className="!w-[358px] relative p-5 border bg-gray-50/50 rounded-[8px]"
            >
              <h1 className="text-[60px] font-bold text-gray-500/20">0{area.id}</h1>
              <div className="mt-[2rem]">
                <h1 className="my-1 font-bold text-black">{area.title}</h1>
                <p className="text-sm mb-4 text-black overflow-hidden line-clamp-3 transition-all duration-400 ease-in-out">
                  {area.content}
                </p>
                <a 
                  className="inline-block py-2 text-primary rounded-md text-sm transition-colors  text-[#002236] relative" 
                  href={area.link}
                >
                  Learn More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Focus;