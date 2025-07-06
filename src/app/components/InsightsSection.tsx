'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type FloatingDot = {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
};

type Insight = {
  id: number;
  title: string;
  date: string;
  link: string;
};

const InsightsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [floatingDots, setFloatingDots] = useState<FloatingDot[]>([]);

  const insights: Insight[] = [
    {
      id: 1,
      title: "Assessing Nigeria's current Nationally Determined Contributions (NDC)",
      date: "May 26, 2025",
      link: "/insights/assessing-nigeria-s-current-nationally-determined-contributions-ndc"
    },
    {
      id: 2,
      title: "The Role of Result Based Financing in Driving Nigeria's Transition",
      date: "May 26, 2025",
      link: "/insights/the-role-of-result-based-financing-in-driving-nigeria-s-transition"
    },
    {
      id: 3,
      title: "Nigerian Electricity Supply Industry Half-Year Report Q3 2024 and Q4 2024",
      date: "May 26, 2025",
      link: "/insights/nigerian-electricity-supply-industry-half-year-report-q3-2024-and-q4-2024"
    }
  ];

  useEffect(() => {
    setIsMounted(true);
    setFloatingDots(Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 3}s`
    })));
  }, []);

  return (
    <section id="insights-section" className="relative py-32 mt-16 overflow-hidden bg-[#021e31]">
      {/* Background pulse circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Floating dots - only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingDots.map((dot: FloatingDot) => (
            <div 
              key={dot.id}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: dot.left,
                top: dot.top,
                animationDelay: dot.delay,
                animationDuration: dot.duration
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-6">
        <div className="mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h1 className="text-3xl md:text-7xl font-black text-white tracking-tight">
            Insights<span className="text-white/30">.</span>
          </h1>
        </div>

        <div className="transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
          <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-6">
            {insights.map((insight: Insight, index: number) => (
              <div 
                key={insight.id}
                className="group relative border-b md:border-none border-b-white/20 p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Hover effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div 
                    className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 w-8 h-full animate-shimmer"
                    style={{ animation: 'shimmer 2s ease-in-out infinite' }}
                  ></div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h1 className="text-white text-xl md:text-2xl font-bold mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {insight.title}
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4 text-white/60">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors duration-300">
                      {insight.date}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href={insight.link} className="group/link flex items-center gap-2 font-medium italic hover:no-underline text-white hover:text-white/90 transition-all duration-300">
                      <span className="border-b border-white/50 group-hover/link:border-white transition-colors duration-300">
                        Read more
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                    <div className="relative">
                      <div className="w-3 h-3 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-white/10 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-tl from-white/20 to-transparent rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add shimmer animation to global styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default InsightsSection;