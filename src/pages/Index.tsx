import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InvestmentPlans from "@/components/InvestmentPlans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <InvestmentPlans />
      <Footer />
    </div>
  );
};

export default Index;