
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, Globe, Star } from "lucide-react";

const Index = () => {
  const featuredPrograms = [
    {
      title: "Basic PFT",
      price: "$799",
      originalPrice: "$999",
      description: "Self‑paced entry package with PDF manual & study guide, proctored NCCA exam.",
      inclusions: "PDF Manual; Study Guide; 100‑Q Exam; Certificate",
      link: "/programs"
    },
    {
      title: "Classic PFT",
      price: "$1,399",
      originalPrice: "$1,699",
      description: "Mid‑tier package with lesson videos, workshop library & practice exam.",
      inclusions: "Textbook; Video lessons; Workshop Library; 1 Practice Exam; Live Q&A; Exam & Certificate",
      link: "/programs"
    },
    {
      title: "Premium PFT",
      price: "$2,199",
      originalPrice: "$2,499",
      description: "Flagship package incl. live webinar/in‑person workshop & 3 practice exams.",
      inclusions: "Textbook; Study Guide; Online workshops; 3 Practice Exams; Free Re‑test; Business Guide; Exam & Certificate",
      link: "/programs"
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, label: "NCCA Accredited", value: "100%" },
    { icon: <Users className="w-6 h-6" />, label: "Years Experience", value: "20+" },
    { icon: <Globe className="w-6 h-6" />, label: "Countries Recognized", value: "30+" },
    { icon: <Star className="w-6 h-6" />, label: "Global Recognition", value: "IFPA" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Personalised Coaching & Nutrition Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="bg-[#C9F73A] rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="w-16 h-1.5 bg-black mb-8 rounded-full"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-[1.1] tracking-tight">
                  Personalised Coaching & Nutrition
                </h2>
                <p className="text-black/80 mb-10 text-lg max-w-md leading-relaxed">
                  Whether you're just starting your fitness journey or need ongoing expert support, 
                  we've got your back. Choose a plan that fits your goals and get access to a certified coach.
                </p>
                <Link to="/coaching">
                  <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-10 py-4 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
                    VIEW PLANS
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Coaching Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main coaching image */}
                <div 
                  className="col-span-2 aspect-[16/10] bg-cover bg-center rounded-2xl relative shadow-2xl"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center')"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  
                  {/* Coaching Plans Card */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl w-48 hover:scale-105 transition-transform duration-300">
                    <div className="text-xs text-gray-500 mb-3 font-medium tracking-wide">Coaching Plans</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Basic Support</span>
                        <span className="text-sm font-bold text-[#C9F73A]">$59/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Premium Support</span>
                        <span className="text-sm font-bold text-[#C9F73A]">$99/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Two smaller coaching images */}
                <div 
                  className="aspect-square bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop&crop=center')"
                  }}
                ></div>
                <div 
                  className="aspect-square bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=400&fit=crop&crop=center')"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Move for Healthy Body Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="text-sm text-gray-500 mb-4">Our Authority</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Official IFPA<br />
                Affiliate Partner
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                As an official affiliate of the International Fitness Professionals Association (IFPA), 
                we deliver world-class education with NCCA accreditation. Our certifications are recognized 
                in over 30 countries, giving you global career opportunities.
              </p>
              <Link to="/about">
                <Button className="bg-[#C9F73A] hover:bg-[#B8E629] text-black rounded-full px-8 py-3 font-semibold">
                  LEARN MORE
                </Button>
              </Link>
            </div>

            {/* Right Content - Community Image */}
            <div className="relative">
              <div 
                className="aspect-[4/3] bg-cover bg-center rounded-3xl relative overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&crop=center')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                    Globally recognized certifications, locally delivered education
                  </h3>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#C9F73A] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <ArrowRight className="w-6 h-6 text-black" />
                </div>

                {/* Small indicator */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              LEVEL UP YOUR FITNESS CAREER
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pick your course. Earn your certification. Step into the fitness industry with confidence and global credibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {program.title}
                    {program.originalPrice && <Badge variant="secondary">Sale</Badge>}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {program.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {program.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-[#A7E800]">
                        {program.price}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link to={program.link}>
                    <Button className="w-full bg-[#A7E800] hover:bg-[#95D000] text-black group-hover:scale-105 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/programs">
              <Button variant="outline" size="lg">
                View All Programs <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Community CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#C9F73A] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight max-w-4xl mx-auto">
                Start your fitness career today with globally recognized certification!
              </h2>
              <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                Join thousands of certified professionals worldwide. IFPA accredited programs with NCCA recognition.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold">
                ENROLL NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
