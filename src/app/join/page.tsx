
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhyJoinEMRC() {
  return (
    <div className="bg-white">
      <Header />
      
      <div className="why-join-emrc-page bg-white">
        {/* Hero Section */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <div className="absolute top-0 right-0 z-20 h-full w-full bg-gradient-to-t from-[#071a24] via-black/60 to-transparent transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 z-10 h-full w-full overflow-hidden">
            <img 
              alt="Why Join EMRC" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 origin-bottom" 
              src="/join-teams/j-2.jpg"
            />
          </div>
          <div className="absolute bottom-16 sm:bottom-6 md:bottom-8 z-30 w-full">
            <div className="mx-auto max-w-[1200px] px-4">
              <h1 className="text-sm sm:text-base md:text-lg font-light text-white/80 mb-1 sm:mb-2">Our Culture</h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold text-white mb-2 sm:mb-3">Why Join EMRC</h1>
              <p className="text-sm sm:text-base md:text-lg font-light text-white/80 max-w-3xl">
                Be Part of Something Extraordinary
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section>
          <div className="max-w-[1200px] mx-auto p-4 text-black">
            <h1 className="text-[1.2rem] md:text-[3rem]">Why Choose EMRC</h1>
            <div className="w-full h-[1px] bg-black"></div>
            <p className="md:max-w-[60%]">
              At EMRC, we're more than just an organization—we're a movement. Join us to grow professionally, 
              make a difference, and be part of something bigger than yourself.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h1 className="text-3xl font-bold text-[#002236]">Our Mission</h1>
                <p className="text-lg text-black/80">
                  EMRC exists to unlock value across Africa by fostering innovation, collaboration, 
                  and sustainable growth. Together, we're building a brighter future for the continent and its people.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-bold text-[#002236] mb-2">Innovation</h4>
                    <p className="text-sm text-black/70">Driving change through creative solutions</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-bold text-[#002236] mb-2">Impact</h4>
                    <p className="text-sm text-black/70">Creating lasting positive change</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="/mission-image.jpg" 
                  alt="Our Mission" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-black py-16">
          <div className="container mx-auto px-4 max-w-[1200px] text-center">
            <h1 className="text-3xl font-bold mb-6">Join Us in Shaping Tomorrow</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of a team that's dedicated to making a real difference in Africa's energy sector.
            </p>
            <button className="px-8 py-4 bg-[#002236] text-white rounded-lg hover:bg-[#002236]/90 transition-colors duration-300 flex items-center mx-auto group">
              <span>View Open Positions</span>
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
                className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}