import ServicesCarousel from './SercivesCarousel';

const services = [
  {
    id: 1,
    title: "Policy & Regulation",
    description: "We provide advisory on the development of regulatory and policy documents to governments. To the private sector, we provide regulatory compliance support.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    link: "/services/policy-regulation"
  },
  {
    id: 2,
    title: "Transaction Advisory",
    description: "EMRC helps clients to make informed investment decisions, minimize risks, and maximize the value of their energy assets or ventures.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    link: "/services/transaction-advisory"
  },
  
];

const ServicesPage = () => {
  return (
    <div>
      <ServicesCarousel 
        services={services}
        primaryColor="#003756" 
      />
    </div>
  );
};

export default ServicesPage;