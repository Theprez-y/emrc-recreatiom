import  Header  from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Number from './components/Number'
import Focus from './components/Focus'
import ClientsMarquee from "./components/ClientsMarquee";
import ServicesCTA from "./components/ServicesCTA";
import InsightsSection from "./components/InsightsSection";
import ServicesPage from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Welcome />
      <Focus />
      <Number />
      <ClientsMarquee />
      <ServicesCTA />
      <InsightsSection />
      <ServicesPage />
      <Contact />
      <Footer />
    </div>
  );
}
