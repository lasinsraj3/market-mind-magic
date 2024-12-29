import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 5 ? prev + 0.1 : 5));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-primary text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
            Grow Your Wealth with{" "}
            <span className="text-secondary">MARKET MIND</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in delay-100">
            Guaranteed {count.toFixed(1)}% Monthly Returns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90"
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm animate-float">
            <TrendingUp className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Trading</h3>
            <p className="text-gray-300">
              AI-powered analysis for optimal trading decisions
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm animate-float delay-100">
            <Shield className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-300">
              Bank-grade security for your investments
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm animate-float delay-200">
            <Award className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-300">
              Consistent returns backed by expert traders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;