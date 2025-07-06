'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="max-w-[1200px] p-4 mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company description */}
          <div className="mb-8 w-full">
            <p className="text-gray-300 text-[14px] max-w-md leading-relaxed">
              EMRC offers innovative energy solutions, backed by 25+ years of expertise. Our tailored strategies drive sustainability with precision and client-centric focus.
            </p>
          </div>

          {/* About Us */}
          <div data-aos="fade-up" data-aos-duration="0" className="aos-init aos-animate">
            <h1 className="text-xl font-bold mb-4 text-gray-100">About Us</h1>
            <ul className="space-y-2">
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/about">About</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/our-area-of-fous">Focus Area</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/about/about-team">Our Team</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/clients">Client List</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/projects">Projects</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/corporate-services">Corporate Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-duration="1000" className="aos-init aos-animate">
            <h1 className="text-xl font-bold mb-4 text-gray-100">Services</h1>
            <ul className="space-y-2">
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/policy-regulation">Policy & Regulation</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/transaction-advisory">Transaction Advisory</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/service-to-utilities">Service To Utilities</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/renewable-energy">Renewable Energy</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/dedicated-it-support">Dedicated IT Support</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/project-development">Project Development</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/financial-modelling">Financial Modelling</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/software-engineering">Software Engineering</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/services/capacity-building">Capacity Building</Link></li>
            </ul>
          </div>

          {/* Media */}
          <div data-aos="fade-up" data-aos-duration="2000" className="aos-init aos-animate">
            <h1 className="text-xl font-bold mb-4 text-gray-100">Media</h1>
            <ul className="space-y-2">
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/insights">Insights</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/podcasts">Podcast</Link></li>
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/webinars">Webinars</Link></li>
            </ul>
          </div>

          {/* Support Center */}
          <div data-aos="fade-up" data-aos-duration="3000" className="aos-init aos-animate">
            <h1 className="text-xl font-bold mb-4 text-gray-100">Support Center</h1>
            <ul className="space-y-2">
              <li><Link className="text-gray-300 text-[14px] hover:!text-cl_green hover:text-emerald-400 transition-all font-[300] duration-300" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Secondary footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Useful Links */}
          <div>
            <h1 className="text-xl font-bold mb-4 text-gray-100">Useful Links</h1>
            <ul className="space-y-2">
              <li><a className="text-gray-300 text-[14px] hover:text-emerald-400 transition-colors duration-300" href="https://res.cloudinary.com/dijz9ibpt/image/upload/v1745928828/EMRC_Profile_2024_v2-2_compressed_vlcpvj.pdf">Our Profile</a></li>
              <li><a className="text-gray-300 text-[14px] hover:text-emerald-400 transition-colors duration-300" href="/Anti-slavery-and-human-trafficking-policy-v1-0-2018-11-19.pdf">Anti Slavery</a></li>
              <li><Link className="text-gray-300 text-[14px] hover:text-emerald-400 transition-colors duration-300" href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h1 className="text-xl font-bold mb-4 text-gray-100">Stay Connected with Us!</h1>
            <p className="text-gray-300 text-[14px] mb-4 leading-relaxed">
              Don't miss out on the latest updates, insights, and exclusive content! Subscribe to our newsletter
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 px-4 py-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-300 placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-primary hover:bg-emerald-600 text-white block md:inline-block rounded transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-sm text-[14px] text-gray-400">
          © 2025 Energy Market And Rates Consultant. All Rights Reserved |{' '}
          <Link className="underline hover:text-emerald-400 transition-colors duration-300" href="/privacy-policy">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <a className="underline hover:text-emerald-400 transition-colors duration-300" href="/Anti-slavery-and-human-trafficking-policy-v1-0-2018-11-19.pdf">
            Anti-Slavery
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;