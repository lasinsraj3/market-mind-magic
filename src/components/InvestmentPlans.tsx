import { Button } from "./ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$1,000",
    features: [
      "5% Monthly Returns",
      "Basic AI Analytics",
      "Weekly Reports",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$10,000",
    features: [
      "5% Monthly Returns",
      "Advanced AI Analytics",
      "Daily Reports",
      "Priority Support",
      "Personal Account Manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$100,000",
    features: [
      "5% Monthly Returns",
      "Custom AI Solutions",
      "Real-time Reports",
      "24/7 Support",
      "Dedicated Team",
      "Custom Strategies",
    ],
  },
];

const InvestmentPlans = () => {
  return (
    <div className="bg-primary py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Investment Plans
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that fits your investment goals
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
                <div className="text-4xl font-bold text-primary">{plan.price}</div>
                <div className="text-gray-600 mt-2">Minimum Investment</div>
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
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;