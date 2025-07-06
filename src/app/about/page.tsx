// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FocusAreasCarousel from '../components/FocusAreasCarousel';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <div className="absolute top-0 right-0 z-20 h-full w-full bg-gradient-to-t from-[#071a24] via-black/60 to-transparent transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 z-10 h-full w-full overflow-hidden">
            <Image
              src='/sol.avif'
              alt="About Us"
              fill
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 origin-bottom"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute bottom-16 sm:bottom-6 md:bottom-8 z-30 w-full">
            <div className="mx-auto max-w-[1200px] px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold text-white mb-2 sm:mb-3">
                About Us
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-[1200px] mx-auto p-4">
          <section className="py-7">
            <p className="leading-relaxed text-black/70">
              Energy Market and Rates Consultants (EMRC) is a leading management
              consulting firm dedicated to providing innovative solutions in the
              energy sector, founded by seasoned experts with a wealth of experience
              exceeding 25 years in the industry. Our team comprises dedicated
              professionals with demonstrated proficiency in designing and
              implementing impactful strategies, policies, and programs that drive
              sustainable advancements.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <section>
              <h2 className="font-semibold text-xl mb-4">MRC Group</h2>
              <p className="leading-relaxed text-black/70 font-light">
                We are part of a wider global group of companies. The MRC Group
                stands as a unified force in the global consultancy landscape,
                brought together by the collaboration of 11 former partners from
                Mercados EMI in Europe and the visionary founders of IPA Energy
                Consulting in the UK. This collective effort has given rise to a
                powerful consortium comprising nine sister companies, collectively
                operating as a single, cohesive organization with a shared vision
                and expertise.
              </p>
              <Link 
                href="/" 
                className="mt-6 inline-block italic font-semibold hover:underline"
              >
                Read More
              </Link>
            </section>
            
            <section>
              <div className="relative aspect-video">
                <Image 
                  src="/world.svg"
                  alt="Global Energy Network"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </section>
          </div>
        </main>

        {/* Focus Areas Section */}
        <section className="relative bg-[#002236] text-white py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#002236] opacity-20"></div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-light mb-8">EMRC Focus Areas</h2>
            <FocusAreasCarousel />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export const metadata = {
  title: 'About Us - Energy Market and Rates Consultants',
  description: 'Energy Market and Rates Consultants (EMRC) is a leading management consulting firm dedicated to providing innovative solutions in the energy sector, founded by seasoned experts with over 25 years of experience.',
  keywords: 'EMRC, Energy Market and Rates Consultants, about us, management consulting, energy sector, sustainable advancements, MRC Group, Mercados EMI, IPA Energy Consulting',
  openGraph: {
    title: 'About Us - Energy Market and Rates Consultants',
    description: 'Energy Market and Rates Consultants (EMRC) is a leading management consulting firm dedicated to providing innovative solutions in the energy sector, founded by seasoned experts with over 25 years of experience.',
    url: 'https://emrc-xi.vercel.app/about',
    siteName: 'Energy Market and Rates Consultants',
    images: [
      {
        url: 'https://yourdomain.com/images/image001.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Energy Market and Rates Consultants',
    description: 'Energy Market and Rates Consultants (EMRC) is a leading management consulting firm dedicated to providing innovative solutions in the energy sector, founded by seasoned experts with over 25 years of experience.',
    images: ['https://yourdomain.com/images/emrc-about-us.jpg'],
  },
};