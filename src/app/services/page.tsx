import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const services = [
    {
      title: "Policy & Regulation",
      description: "We provide advisory on the development of regulatory and policy documents to governments. To the private sector, we provide regulatory compliance support.",
      image: "/services/policy-regulation.jpg",
      link: "/services/policy-regulation"
    },
    {
      title: "Transaction Advisory",
      description: "EMRC helps clients to make informed investment decisions, minimize risks, and maximize the value of their energy assets or ventures.",
      image: "/services/transaction-advisory.jpg",
      link: "/services/transaction-advisory"
    },
    {
      title: "Service To Utilities",
      description: "We support utilities to improve the performance of their businesses and manage risk.",
      image: "/services/service-to-utilities.jpg",
      link: "/services/service-to-utilities"
    },
    {
      title: "Renewable Energy",
      description: "EMRC provides financial analysis, regulatory compliance, project development, grid integration on renewable energy.",
      image: "/services/renewable-energy.jpg",
      link: "/services/renewable-energy"
    },
    {
      title: "Dedicated IT Support",
      description: "EMRC provides IT support teams and support desks to companies needing application development, ensuring targeted expertise and steady progress.",
      image: "/services/dedicated-it-support.jpg",
      link: "/services/dedicated-it-support"
    },
    {
      title: "Project Development",
      description: "EMRC helps clients plan, assess and manage projects in the energy market.",
      image: "/services/project-development.jpg",
      link: "/services/project-development"
    },
    {
      title: "Financial Modelling",
      description: "We support investors in the electricity value chain by providing financial models to assess the economic viability of electricity projects.",
      image: "/services/financial-modelling.jpg",
      link: "/services/financial-modelling"
    },
    {
      title: "Software Engineering",
      description: "We handle the entire development workflow, from wireframe and design to database management, development, and after-sales support.",
      image: "/services/software-engineering.jpg",
      link: "/services/software-engineering"
    },
    {
      title: "Capacity Building",
      description: "We have provided training to various actors in the sector including regulators, policy-makers, and utility boards.",
      image: "/services/capacity-building.jpg",
      link: "/services/capacity-building"
    },
    {
      title: "Digital Transformation",
      description: "EMRC provides digital solutions to companies seeking to update outdated systems and push them into a faster, more efficient digital ecosystem.",
      image: "/services/digital-transformation.jpg",
      link: "/services/digital-transformation"
    },
    {
      title: "Tariff Design",
      description: "We support investors on Generation, Distribution, and renewable energy tariff design and modelling.",
      image: "/services/tariff-design.jpg",
      link: "/services/tariff-design"
    },
    {
      title: "Business Strategy",
      description: "EMRC provides trainings to existing and new power sector companies. We aid business process reengineering & planning.",
      image: "/services/business-strategy.jpg",
      link: "/services/business-strategy-and-planning"
    },
    {
      title: "Due Diligence",
      description: "We perform commercial, technical, and financial due diligence for energy projects. Identifying risks and opportunities.",
      image: "/services/due-diligence.jpg",
      link: "/services/due-diligence"
    },
    {
      title: "Energy Accounting",
      description: "We develop tools for distribution utilities that enable energy accounting and audit.",
      image: "/services/energy-accounting.jpg",
      link: "/services/energy-accounting"
    },
    {
      title: "AI and ML Algorithm",
      description: "We provide expertise in machine learning and generative AI, to design robust digital products and automate processes tailored to project needs.",
      image: "/services/ai-ml.jpg",
      link: "/services/ai-and-ml-algorithm"
    },
    {
      title: "Data Analysis",
      description: "We aid business by providing insights from data into market dynamics, supply and demand, and price trends in the energy sector.",
      image: "/services/data-analysis.jpg",
      link: "/services/data-analysis"
    }
  ];

  return (
    <div className="overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <div className="absolute top-0 right-0 z-20 h-full w-full bg-gradient-to-t from-[#071a24] via-black/60 to-transparent transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 z-10 h-full w-full overflow-hidden">
            <img 
              alt="Our Services" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 origin-bottom" 
              src="/service/services-single.webp"
            />
          </div>
          <div className="absolute bottom-16 sm:bottom-6 md:bottom-8 z-30 w-full">
            <div className="mx-auto max-w-[1200px] px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold text-white mb-2 sm:mb-3">
                Our Services
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-light text-white/80 max-w-3xl">
                Developing New Paths in the Energy Sector
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="rounded-[5px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white"
            >
              <div className="relative w-full aspect-video md:h-64 group overflow-hidden">
                <img 
                  alt={service.title}
                  className="object-cover transform transition-transform duration-300 group-hover:scale-110 w-full h-full"
                  src={service.image}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h1>
                <p className="text-sm md:text-base text-gray-600 line-clamp-2 md:line-clamp-3">
                  {service.description}
                </p>
                <a 
                  className="group inline-flex items-center text-primary font-medium md:font-semibold hover:text-primary-dark text-sm md:text-base" 
                  href={service.link}
                >
                  <span className="mr-2 transition-transform group-hover:translate-x-1">
                    <span className="hidden md:inline">Read Full Details</span>
                    <span className="md:hidden">Read More</span>
                  </span>
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
                    className="lucide lucide-chevron-right w-4 h-4 md:w-5 md:h-5 text-primary transform transition-transform group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;