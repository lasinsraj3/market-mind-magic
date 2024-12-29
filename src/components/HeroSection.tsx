import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useToast } from "./ui/use-toast";

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 5 ? prev + 0.1 : 5));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleStartInvesting = () => {
    toast({
      title: "Contact Information",
      description: (
        <div className="space-y-2">
          <p>📞 Phone: +1 (555) 123-4567</p>
          <p>📧 Email: contact@marketmind.com</p>
          <p>📍 Address: 123 Trading Street, Financial District</p>
          <p>Our team will be happy to assist you with your investment journey!</p>
        </div>
      ),
      duration: 10000,
    });
  };

  return (
    <div className="relative min-h-screen bg-primary text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
            Grow Your Wealth with{" "}
            <span className="text-secondary">MARKET MIND</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in delay-100">
            Guaranteed {count.toFixed(1)}% Monthly Returns Through Expert Trading
          </p>
          <div className="flex justify-center animate-fade-in delay-200">
            <Button
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90"
              onClick={handleStartInvesting}
            >
              Start Investing <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm animate-float">
            <TrendingUp className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Trading</h3>
            <p className="text-gray-300">
              Professional traders managing your investments
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm animate-float delay-100">
            <Shield className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Investment</h3>
            <p className="text-gray-300">
              Your capital protected by strict risk management
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm animate-float delay-200">
            <Award className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Returns</h3>
            <p className="text-gray-300">
              Consistent 5% monthly returns for investors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;