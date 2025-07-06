'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from 'react';
import Ticker from './Ticker';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'About EMRC', href: '/about' },
        { name: 'Focus Areas', href: '/our-area-of-focus' },
        { name: 'Client List', href: '/about/clients' },
        { name: 'Podcast', href: '/podcast' },
        { name: 'Projects', href: '/projects' },
        { name: 'Webinars', href: '/webinars' },
      ],
    },
    { name: 'Services', href: '/services' },
    {
      name: 'Insights',
      href: '/insights',
      dropdown: [
        
      ],
    },
    {
      name: 'Join Our Team',
      href: '/join',
      dropdown: [
        
      ],
    },
    { name: 'Products', href: '/products' },
    { 
      name: 'Elec-T', 
      href: '/product',
      external: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4">
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      )
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className='bg-slate-900 sticky top-0 z-[100]'>
        <div className='flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2 sm:gap-4'>
          <div className='flex items-center justify-between w-full sm:w-auto'>
            <h3 className='text-[#ededed] text-sm sm:text-base'>Hourly updates</h3>
            <Link href="/login" className='text-[#ededed] text-sm sm:text-base sm:hidden'>Login</Link>
          </div>
          
          <div className="w-full sm:w-64 md:w-80 lg:w-96 xl:w-[500px] h-8 sm:h-10 transition-all duration-200 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 border rounded-lg relative flex items-center p-2">
            <MagnifyingGlassIcon className='w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-2'/> 
            <input
              type="text"
              placeholder="Search projects, generators, docs..."
              className='w-full pl-6 sm:pl-10 pr-4 sm:pr-24 py-1 sm:py-2 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none text-xs sm:text-sm'
            />
          </div>
          
          <Link href="/login" className='text-[#ededed] text-sm sm:text-base hidden sm:block'>Login</Link>
        </div>

        <div className="border-t border-slate-800 w-full">
          {isClient && <Ticker />}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="flex items-center justify-between sticky top-[68px] sm:top-[72px] z-[100] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 bg-white border-b">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Company Logo"
              width={80}
              height={40}
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-2 md:space-x-4 lg:space-x-6 mx-4">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 px-2 py-1 text-sm font-medium hover:text-blue-600 whitespace-nowrap flex items-center"
                >
                  {item.name}
                  {item.icon}
                </a>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-slate-900 px-2 py-1 text-sm font-medium hover:text-blue-600 whitespace-nowrap flex items-center"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    )}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Group Logo*/}
        <div className="hidden sm:flex items-center">
          <Link href="https://www.mrcgroup-consulting.com/" target="_blank">
            <Image
              src="/logo2.jpg"
              alt="MRC Group Logo"
              width={80}
              height={40}
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-slate-900 p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isClient && (
          <div className={`
            sm:hidden fixed inset-0 bg-white z-[90] transition-opacity duration-300
            ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            pt-20 px-4 overflow-y-auto
          `}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="text-slate-900 py-2 text-base font-medium hover:text-blue-600 w-full flex justify-between items-center"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      {activeDropdown === item.name && (
                        <div className="mt-2 space-y-2 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-slate-600 hover:text-slate-800 py-2"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-900 py-2 text-base font-medium hover:text-blue-600 flex items-center"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.name}
                      {item.external && (
                        <span className="ml-1 inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-up-right"
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-8">
                <Link href="https://www.mrcgroup-consulting.com/" target="_blank" className="inline-block">
                  <Image
                    src="/MRC-Group-Logo.jpg"
                    alt="MRC Group Logo"
                    width={80}
                    height={40}
                    className="w-20"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header;