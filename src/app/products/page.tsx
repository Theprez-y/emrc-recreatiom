import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProductsPage = () => {
  return (
    <>
    <Header />
    <div>
      {/* Hero Section */}
      <div className="bg-[#fcfcfc]">
        <div className="relative max-w-[1200px] mx-auto p-4 h-screen overflow-hidden">
          <div className="absolute inset-0 z-0 bg-center opacity-10"></div>
          <div className="relative z-10 flex flex-col justify-center h-full">
            <div style={{ opacity: 1, transform: 'none' }}>
              <span className="text-sm font-[500] text-black/60 uppercase tracking-widest">
                EMRC PRODUCTS
              </span>
            </div>
           <h1 className="text-4xl md:text-6xl font-[800] bg-gradient-to-r from-[#002236]  to-[#c3ee06] bg-clip-text text-transparent leading-tight mb-4 mt-4">Empowering Energy<br />Markets Through<br/><span className="relative inline-block text-black">Innovation</span></h1>
            <p className="max-w-2xl mb-8 text-black" style={{ opacity: 1 }}>
              Welcome to the future of energy market solutions. At EMRC, we combine deep industry expertise with cutting-edge technology to deliver powerful software tools that transform how businesses operate in the energy sector.
            </p>
            <div className="flex space-x-4" style={{ opacity: 1, transform: 'none' }}>
              <Link href="/contact" legacyBehavior>
                <a className="relative bg-[#002236] text-white px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                  <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity rounded-lg"></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-[1200px] mx-auto p-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-[600] text-gray-800 leading-tight">
              Why Choose EMRC's<br />
              Digital Solutions?
            </h1>
          </div>
          <div className="md:w-1/2 text-black/80 text-base">
            <p>
              In today's fast-paced energy landscape, staying ahead requires more than just data—it demands actionable insights, seamless integration, and scalable solutions. That's where our digital systems department comes in. We build intuitive, robust, and customizable software tools tailored specifically for energy market participants, regulatory bodies, and stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="border-b max-w-[1200px] mx-auto p-4">
        <div>
          {/* Elec-T Product */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Elec-T</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-ful bg-neutral-200 p-4 rounded-[5px]">
                <Image 
                  src="/nesi-2.png" 
                  alt="Energy Sent Out" 
                  width={500}
                  height={256}
                  className="object-cover w-full h-64 object-top"
                />
              </div>
              <div className="w-ful bg-neutral-200 p-4 rounded-[5px]">
                <Image 
                  src="/nesi-3.png" 
                  alt="Total Customer Population" 
                  width={500}
                  height={256}
                  className="object-cover w-full h-64 object-top"
                />
              </div>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-4 mt-8">
              <div>
                <div className="mb-4 md:mb-0">
                  <ul className="list-none">
                    <li className="mb-2">
                      <Link href="/products/elec-t" legacyBehavior>
                        <a className="text-primary text-[1rem] hover:text-[#c3ee06]] hover:underline transition-all">
                          View Product Information
                        </a>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <a 
                        href="https://elec-t.energymrc.ng/" 
                        className="text-primary text-[1rem] hover:text-cl_green hover:underline transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Product
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* The Ravens Product */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">The Ravens</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-ful bg-neutral-200 p-4 rounded-[5px]">
                <Image 
                  src="/commercial page.png" 
                  alt="Commercial Workspace" 
                  width={500}
                  height={256}
                  className="object-cover w-full h-64 object-top"
                />
              </div>
              <div className="w-ful bg-neutral-200 p-4 rounded-[5px]">
                <Image 
                  src="/finance.png" 
                  alt="Financial Workspace" 
                  width={500}
                  height={256}
                  className="object-cover w-full h-64 object-top"
                />
              </div>
              <div className="w-ful bg-neutral-200 p-4 rounded-[5px]">
                <Image 
                  src="/staff.png" 
                  alt="Staff Management" 
                  width={500}
                  height={256}
                  className="object-cover w-full h-64 object-top"
                />
              </div>
              <div className="w-ful bg-neutral-200 p-4 rounded-[5px]">
                <Image 
                  src="/gis.png" 
                  alt="GIS" 
                  width={500}
                  height={256}
                  className="object-cover w-full h-64 object-top"
                />
              </div>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-4 mt-8">
              <div>
                <div className="mb-4 md:mb-0">
                  <ul className="list-none">
                    <li className="mb-2">
                      <Link href="/the-ravens" legacyBehavior>
                        <a className="text-primary text-[1rem] hover:text-cl_green hover:underline transition-all">
                          View Product Information
                        </a>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <a 
                        href="https://the-ravens.energymrc.ng/" 
                        className="text-primary text-[1rem] hover:text-cl_green hover:underline transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Product
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="max-w-[1200px] mx-auto p-4 py-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-[600] text-gray-800 mb-8">
            What Sets Us Apart?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 p-4 rounded">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Industry Expertise</h2>
              <p className="text-gray-600">
                With years of experience in energy markets and regulation, we understand the unique challenges faced by our clients.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Customization</h2>
              <p className="text-gray-600">
                Every client is different, which is why we offer tailored solutions that align perfectly with your business needs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Security & Reliability</h2>
              <p className="text-gray-600">
                Built with enterprise-grade security measures to protect sensitive data while maintaining high performance.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Support You Can Count On</h2>
              <p className="text-gray-600">
                Our dedicated team is always available to assist with implementation, training, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#002236] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgOGgxNnYtOEgwdjh6bTE2IDB2OEgwdjJoMTZ2LTh6TTAgMTZoMTZ2LThIMHY4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                Ready to Transform<br className="hidden md:block" /> Your Business?
              </span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="leading-relaxed text-white/70 font-light">
                At EMRC, we believe technology should empower people—not complicate their lives. Let us help you unlock new opportunities, reduce costs, and achieve greater efficiencies through our innovative software solutions.
              </p>
              <div className="border-t border-white/20 w-24 mx-auto"></div>
              <p className="text-blue-100/90 italic font-medium">
                "Contact us today to schedule a demo or learn more about how our products can benefit your organization. Together, let's shape the future of energy markets."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <button className="bg-white text-[#002236] px-10 py-5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductsPage;