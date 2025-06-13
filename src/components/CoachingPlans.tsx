
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const CoachingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Personalised workout plan",
        "Basic nutrition guidelines",
        "Email support",
        "Monthly check-ins"
      ]
    },
    {
      name: "One-Time Boost",
      price: "$399",
      description: "Intensive coaching for rapid results",
      features: [
        "Complete fitness assessment",
        "Custom meal planning",
        "Weekly video calls",
        "Progress tracking tools",
        "Supplement recommendations"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$599",
      description: "Comprehensive coaching with ongoing support",
      features: [
        "Everything in One-Time Boost",
        "Daily check-ins",
        "24/7 WhatsApp support",
        "Quarterly goal reassessment",
        "Access to exclusive content",
        "Priority booking"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-4">
            Personalised Coaching & Nutrition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take your fitness journey to the next level with our expert coaching programs designed to deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-[#0060F0] shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#A7E800] text-[#0D0D0D] px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-[#0D0D0D]">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-[#0060F0] mt-2">{plan.price}</div>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#A7E800] mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-[#0060F0] hover:bg-[#0050D0]' : 'bg-[#0D0D0D] hover:bg-[#0D0D0D]/80'} text-white`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
