import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Starter",
    price: "$1,000",
    description: "Perfect for new investors starting their journey",
    features: [
      "5% Monthly Returns",
      "Monthly Performance Reports",
      "Email Support Response within 24h",
      "Basic Market Analysis",
      "Minimum Lock Period: 3 Months",
    ],
    returns: {
      monthly: 50,
      yearly: 600,
    },
  },
  {
    name: "Professional",
    price: "$10,000",
    description: "Ideal for serious investors seeking consistent returns",
    features: [
      "5% Monthly Returns",
      "Weekly Performance Reports",
      "Priority Support Response within 12h",
      "Detailed Market Analysis",
      "Minimum Lock Period: 6 Months",
      "Dedicated Account Manager",
    ],
    returns: {
      monthly: 500,
      yearly: 6000,
    },
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$100,000",
    description: "For institutional investors and high-net-worth individuals",
    features: [
      "5% Monthly Returns",
      "Daily Performance Reports",
      "Instant VIP Support",
      "Comprehensive Market Analysis",
      "Minimum Lock Period: 12 Months",
      "Dedicated Investment Team",
      "Quarterly Strategy Review",
    ],
    returns: {
      monthly: 5000,
      yearly: 60000,
    },
  },
];

const InvestmentPlans = () => {
  const { toast } = useToast();

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
    <div className="bg-primary py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Investment Plans
          </h2>
          <p className="text-xl text-gray-300">
            Choose the investment plan that matches your financial goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-lg p-8 ${
                plan.popular
                  ? "transform scale-105 shadow-xl border-2 border-secondary"
                  : "shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-primary">{plan.price}</div>
                <div className="text-gray-600 mt-2">Minimum Investment</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-gray-600 mb-2">Expected Returns</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xl font-bold text-primary">
                        ${plan.returns.monthly}
                      </div>
                      <div className="text-sm text-gray-600">Monthly</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">
                        ${plan.returns.yearly}
                      </div>
                      <div className="text-sm text-gray-600">Yearly</div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="text-secondary w-5 h-5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-secondary text-primary hover:bg-secondary/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
                onClick={handleStartInvesting}
              >
                Start Investing
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;