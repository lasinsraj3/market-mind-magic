import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InvestmentPlans from "@/components/InvestmentPlans";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <InvestmentPlans />
    </div>
  );
};

export default Index;