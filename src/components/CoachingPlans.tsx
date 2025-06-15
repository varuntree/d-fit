
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const CoachingPlans = () => {
  const plans = [
    {
      name: "Basic Support",
      price: "$59",
      period: "/month",
      description: "Stay on Track With Structure",
      features: [
        "4‑week Workout",
        "Meal Plan Template", 
        "Email Check‑in"
      ]
    },
    {
      name: "One-Time Boost",
      price: "Contact",
      period: "",
      description: "Need a quick reset?",
      features: [
        "Fully personalised plan",
        "Workout + nutrition",
        "30-minute Zoom call with coach"
      ],
      popular: true
    },
    {
      name: "Premium Support",
      price: "$99",
      period: "/month", 
      description: "Total transformation",
      features: [
        "Custom Workout",
        "Custom Meal Plan",
        "2×/wk WhatsApp",
        "Progress Adjustments"
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
                  <span className="bg-[#C9F73A] text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-[#0D0D0D]">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-[#C9F73A] mt-2">{plan.price}<span className="text-lg text-gray-600">{plan.period}</span></div>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#C9F73A] mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black"
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
