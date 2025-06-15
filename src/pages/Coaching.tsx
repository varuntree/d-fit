import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CoachingPlans } from "@/components/CoachingPlans";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Clock, Phone } from "lucide-react";

const Coaching = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Beginner Fitness Enthusiast",
      rating: 5,
      text: "The personal coaching program completely transformed my approach to fitness. My coach was incredibly supportive and helped me build sustainable habits.",
      plan: "Premium Support"
    },
    {
      name: "Mike Chen",
      role: "Busy Professional",
      rating: 5,
      text: "Perfect for my hectic schedule. The one-time boost gave me exactly what I needed to get back on track with my fitness goals.",
      plan: "One-Time Boost"
    },
    {
      name: "Emma Williams",
      role: "New Mom",
      rating: 5,
      text: "The basic support plan was ideal for staying consistent. The weekly check-ins kept me motivated and accountable.",
      plan: "Basic Support"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Certified Coaches",
      description: "Work with IFPA-certified fitness professionals who understand your goals"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Online coaching that fits your lifestyle and time zone"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Multiple Support Channels",
      description: "Email, WhatsApp, and video calls depending on your plan"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Personalized Plans",
      description: "Custom workout and nutrition plans tailored to your specific needs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Personalised <span className="text-[#C9F73A]">Coaching & Nutrition</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting your fitness journey or need ongoing expert support, 
            we've got your back. Choose a plan that fits your goals and get access to a certified coach, 
            personalised workout plans, and nutrition guidance – all online.
          </p>
        </div>

        {/* Coaching Plans */}
        <div className="mb-20">
          <CoachingPlans />
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Coaching?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Plan</h3>
              <p className="text-muted-foreground">
                Select the coaching plan that best fits your goals, schedule, and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-muted-foreground">
                We'll pair you with a certified coach who specializes in your fitness goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Your Journey</h3>
              <p className="text-muted-foreground">
                Begin your personalized program with ongoing support and guidance.
              </p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#C9F73A]" />
                  Workout Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom workout routines designed specifically for your fitness level, 
                  goals, and available equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#C9F73A]" />
                  Nutrition Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personalized meal plans and nutrition advice to support your 
                  fitness goals and lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#C9F73A]" />
                  Progress Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular assessments and adjustments to ensure you're making 
                  consistent progress toward your goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#C9F73A]" />
                  Expert Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Direct access to certified fitness professionals for questions, 
                  motivation, and guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9F73A] text-[#C9F73A]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.plan}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#A7E800]/10 to-blue-500/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have achieved their fitness goals 
            with our expert coaching programs.
          </p>
          <Button 
            size="lg" 
            className="bg-[#C9F73A] hover:bg-[#B8E629] text-black px-8 py-3 text-lg"
          >
            Choose Your Plan
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Coaching;