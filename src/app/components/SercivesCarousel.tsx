'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ServicesCarouselProps {
  title?: string;
  subtitle?: string;
  services: ServiceCard[];
  primaryColor?: string;
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  title = "EMRC Services",
  subtitle = "Discover how we're shaping the future of energy through innovation and expertise.",
  services,
  primaryColor = "#003756"
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = Math.ceil(services.length / 3);
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);


  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.clientWidth * currentSlide;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

 
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

 
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#003756] to-transparent"
          style={{ backgroundColor: primaryColor }}
        ></div>
      </div>

      {/* Navigation buttons */}
      <button 
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-200" 
        aria-label="Previous slide"
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-6 h-6 group-hover:scale-110 transition-transform duration-300" style={{ color: primaryColor }}>
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>
      
      <button 
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-200" 
        aria-label="Next slide"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6 group-hover:scale-110 transition-transform duration-300" style={{ color: primaryColor }}>
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight" style={{ color: primaryColor }}>
              {title.split(' ')[0]} <span className="text-gray-300">{title.split(' ').slice(1).join(' ')}</span>
              <span style={{ color: primaryColor }}>.</span>
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#003756] to-transparent w-24" style={{ backgroundImage: `linear-gradient(to right, transparent, ${primaryColor}, transparent)` }}></div>
              <div className="w-2 h-2 rounded-full mx-4" style={{ backgroundColor: primaryColor }}></div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#003756] to-transparent w-24" style={{ backgroundImage: `linear-gradient(to right, transparent, ${primaryColor}, transparent)` }}></div>
            </div>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {subtitle}
              <br />
              <span className="font-medium" style={{ color: primaryColor }}>Comprehensive solutions for every challenge.</span>
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="transform transition-all duration-1000 delay-300 py-6 translate-y-0 opacity-100">
          <div 
            className="relative overflow-hidden"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              className="flex transition-transform duration-700 ease-out" 
              style={{ 
                width: `${totalSlides * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full px-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.slice(slideIndex * 3, slideIndex * 3 + 3).map((service) => (
                      <ServiceCard 
                        key={service.id}
                        service={service}
                        primaryColor={primaryColor}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center mt-12 gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full h-3 ${currentSlide === index ? 'w-8' : 'w-3'}`}
              style={{
                backgroundColor: currentSlide === index ? primaryColor : '#d1d5db'
              }}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16 transform transition-all duration-1000 delay-500 translate-y-0 opacity-100">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                {services.length} Services Available
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Expert Solutions
              </span>
            </div>
            
            <Link href="/services" passHref>
              <button 
                className="group inline-flex items-center gap-3 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: primaryColor }}
              >
                <span className="font-semibold">Explore All Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-300" 
            style={{ 
              width: `${((currentSlide + 1) / totalSlides) * 100}%`,
              backgroundColor: primaryColor
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// ServiceCard component
const ServiceCard: React.FC<{ service: ServiceCard; primaryColor: string }> = ({ service, primaryColor }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          alt={service.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-100" 
          src={service.imageUrl} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300"
          style={{ backgroundColor: `${primaryColor}10` }}
        ></div>
      </div>
      
      <div className="p-6">
        <h3 
          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#003756] transition-colors duration-300 line-clamp-2"
          style={{ '--tw-text-opacity': 1, color: `rgba(${hexToRgb(primaryColor)}, var(--tw-text-opacity))` } as React.CSSProperties}
        >
          {service.title}
        </h3>
        
        <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <Link href={service.link} passHref>
            <div className="flex items-center font-medium text-sm transition-colors duration-300 cursor-pointer" style={{ color: primaryColor }}>
              <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </Link>
          
          <div className="relative">
            <div 
              className="w-3 h-3 rounded-full group-hover:opacity-50 transition-colors duration-300" 
              style={{ backgroundColor: `${primaryColor}20` }}
            ></div>
            <div 
              className="absolute inset-0 w-3 h-3 rounded-full animate-pulse" 
              style={{ backgroundColor: `${primaryColor}10` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#003756] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${primaryColor}, transparent)` }}
      ></div>
    </div>
  );
};


function hexToRgb(hex: string) {

  hex = hex.replace('#', '');
  
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

export default ServicesCarousel;