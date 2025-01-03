import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="bg-accent py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">
              Why Choose MARKET MIND?
            </h2>
            <p className="text-lg text-gray-600">
              With over a decade of experience in financial markets, our expert
              trading team consistently delivers 5% monthly returns through
              strategic market positioning and professional risk management.
            </p>
            <div className="space-y-4">
              {[
                "Professional Trading Team",
                "Strategic Market Analysis",
                "24/7 Portfolio Monitoring",
                "Proven Return History",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-6 h-6" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Start Investing Now
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary/5 rounded-full absolute -top-4 -right-4 w-24 h-24" />
            <div className="aspect-square bg-secondary/10 rounded-full absolute -bottom-4 -left-4 w-32 h-32" />
            <div className="relative bg-white p-8 rounded-lg shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Our Investment Success
                  </h3>
                  <p className="text-gray-600">
                    Consistent returns through expert trading
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Active Investors", value: "10,000+" },
                    { label: "Monthly Returns", value: "5%" },
                    { label: "Years Trading", value: "10+" },
                    { label: "Portfolio Success", value: "99.9%" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-secondary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;