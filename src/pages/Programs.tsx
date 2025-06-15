import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCartStore } from "@/stores/cartStore";
import { useToast } from "@/hooks/use-toast";

const Programs = () => {
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = (program: any, category: string) => {
    addItem({
      id: program.id,
      title: program.title,
      price: program.salePrice,
      originalPrice: program.originalPrice,
      category: category
    });
    
    toast({
      title: "Added to Cart",
      description: `${program.title} has been added to your cart.`,
    });
  };

  const pftCertifications = [
    {
      id: "basic-pft",
      title: "Basic PFT",
      tier: "Basic",
      originalPrice: 999,
      salePrice: 799,
      description: "Self‑paced entry package with PDF manual & study guide, proctored NCCA exam.",
      inclusions: ["PDF Manual", "Study Guide", "100‑Q Exam", "Certificate"]
    },
    {
      id: "classic-pft",
      title: "Classic PFT",
      tier: "Classic",
      originalPrice: 1699,
      salePrice: 1399,
      description: "Mid‑tier package with lesson videos, workshop library & practice exam.",
      inclusions: ["Textbook", "Video lessons", "Workshop Library", "1 Practice Exam", "Live Q&A", "Exam & Certificate"]
    },
    {
      id: "premium-pft",
      title: "Premium PFT",
      tier: "Premium",
      originalPrice: 2499,
      salePrice: 2199,
      description: "Flagship package incl. live webinar/in‑person workshop & 3 practice exams.",
      inclusions: ["Textbook", "Study Guide", "Online workshops", "3 Practice Exams", "Free Re‑test", "Business Guide", "Exam & Certificate"]
    }
  ];

  const careerTrackCertifications = [
    {
      id: "master-pft",
      title: "Master Personal Fitness Trainer",
      originalPrice: 5999,
      salePrice: 5499,
      description: "Elite 4‑course bundle for advanced exercise science & business mastery.",
      inclusions: ["Premium PFT", "Sports Nutrition Specialist", "Advanced PFT", "Master PFT", "8‑yr Cert"]
    },
    {
      id: "group-fitness",
      title: "Group Fitness Specialist",
      originalPrice: 5999,
      salePrice: 5499,
      description: "Specialist pathway for leading inclusive, high‑energy group classes.",
      inclusions: ["Premium PFT", "Sports Nutrition", "Group Leadership modules", "8‑yr Cert"]
    },
    {
      id: "medical-fitness",
      title: "Medical Fitness Specialist",
      originalPrice: 5999,
      salePrice: 5499,
      description: "Prepare to work with clients managing chronic health conditions.",
      inclusions: ["Premium PFT", "Sports Nutrition", "Special Populations", "Sports Medicine Trainer", "8‑yr Cert"]
    }
  ];

  const workshopsCEU12 = [
    {
      id: "strength-training-50",
      title: "STRENGTH TRAINING PAST 50",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "sports-nutrition",
      title: "SPORTS NUTRITION GUIDEBOOK",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "sports-first-aid",
      title: "SPORTS FIRST AID",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "soccer-conditioning",
      title: "SPORTS CONDITIONING SPECIALIST : SOCCER",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "football-conditioning",
      title: "SPORTS CONDITIONING SPECIALIST: FOOTBALL",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "prescriptive-stretching",
      title: "PRESCRIPTIVE STRETCHING",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "postural-correction",
      title: "POSTURAL CORRECTION",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "martial-arts",
      title: "MARTIAL ARTS CONDITIONING",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "frail-elderly",
      title: "EXERCISE FOR THE FRAIL ELDERLY",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "meal-athletes",
      title: "DEVELOPING MEAL FOR ATHLETES",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "dancer-wellness",
      title: "DANCER WELLNESS",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "core-training",
      title: "CORE TRAINING FOR ATHLETES",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "breathing-athletic",
      title: "BREATHING FOR ULTIMATE ATHLETIC SUCCESS",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "sports-mechanics",
      title: "APPLIED SPORTS MECHANICS",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "plyometric-training",
      title: "ADVANCED PLYOMETRIC TRAINING",
      ceu: "12 CEU",
      originalPrice: 699,
      salePrice: 599,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    }
  ];

  const performanceNutrition = [
    {
      id: "performance-nutrition",
      title: "PERFORMANCE NUTRITION",
      ceu: "8 CEU",
      originalPrice: 649,
      salePrice: 549,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    }
  ];

  const workshopsCEU6 = [
    {
      id: "yoga-athletes",
      title: "YOGA FOR ATHLETES",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "trx-suspension",
      title: "TRX SUSPENSION TRAINING",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "stretching-anatomy",
      title: "STRETCHING ANATOMY",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "stretch-to-win",
      title: "STRETCH TO WIN",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "running-anatomy",
      title: "RUNNING ANATOMY",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "obstacle-course",
      title: "OBSTACLE COURSE TRAINING",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "nutrition-young",
      title: "NUTRITION FOR YOUNG ATHLETES",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "muscle-mechanics",
      title: "MUSCLE MECHANICS",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "weight-training-programs",
      title: "DESIGNING WEIGHT TRAINING PROGRAMS",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "full-body-flexibility",
      title: "FULL BODY FLEXIBILITY",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    },
    {
      id: "fundamental-weight",
      title: "FUNDAMENTAL WEIGHT TRAINING",
      ceu: "6 CEU",
      originalPrice: 349,
      salePrice: 299,
      description: "Continuing‑education self‑study course (textbook/ebook + exam).",
      inclusions: ["Textbook/E‑book", "Study Guide", "CEU Exam"]
    }
  ];

  const coachingPlans = [
    {
      id: "basic-support",
      title: "Basic Support Plan",
      duration: "Monthly",
      price: 59,
      description: "General workout + balanced meal template; monthly email check‑in.",
      inclusions: ["4‑week Workout", "Meal Plan Template", "Email Check‑in"]
    },
    {
      id: "premium-support",
      title: "Premium Support Plan",
      duration: "Monthly",
      price: 99,
      description: "Custom workout & nutrition with 2× weekly WhatsApp follow‑ups.",
      inclusions: ["Custom Workout", "Custom Meal Plan", "2×/wk WhatsApp", "Progress Adjustments"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#C9F73A]">Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step into the fitness industry with confidence and global credibility. 
            Choose from our comprehensive range of IFPA-accredited certifications and specialized workshops.
          </p>
        </div>

        <Tabs defaultValue="pft" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="pft">PFT Certifications</TabsTrigger>
            <TabsTrigger value="career">Career Track</TabsTrigger>
            <TabsTrigger value="workshops">Workshops & CEU</TabsTrigger>
            <TabsTrigger value="coaching">Coaching Plans</TabsTrigger>
          </TabsList>

          <TabsContent value="pft" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Personal Fitness Trainer Certifications</h2>
              <p className="text-muted-foreground">
                Start your fitness career with internationally recognized IFPA certifications
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pftCertifications.map((cert) => (
                <Card key={cert.id} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <Badge variant="secondary">{cert.tier}</Badge>
                    </div>
                    <CardDescription>{cert.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          ${cert.originalPrice}
                        </span>
                        <span className="text-2xl font-bold text-[#C9F73A]">
                          ${cert.salePrice}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {cert.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-[#C9F73A] rounded-full mr-2"></span>
                          {inclusion}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black"
                      onClick={() => handleAddToCart(cert, "PFT Certification")}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="career" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Career Track Certifications</h2>
              <p className="text-muted-foreground">
                Elite certification bundles for advanced exercise science & business mastery
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {careerTrackCertifications.map((cert) => (
                <Card key={cert.id} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <Badge className="bg-[#C9F73A] text-black">Elite</Badge>
                    </div>
                    <CardDescription>{cert.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          ${cert.originalPrice}
                        </span>
                        <span className="text-2xl font-bold text-[#C9F73A]">
                          ${cert.salePrice}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {cert.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-[#C9F73A] rounded-full mr-2"></span>
                          {inclusion}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black"
                      onClick={() => handleAddToCart(cert, "Career Track")}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workshops" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Workshops & CEU Courses</h2>
              <p className="text-muted-foreground">
                Continuing Education Units to maintain and advance your certifications
              </p>
            </div>
            
            {/* Performance Nutrition - 8 CEU */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Performance Nutrition (8 CEU)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {performanceNutrition.map((workshop) => (
                  <Card key={workshop.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{workshop.title}</CardTitle>
                        <Badge className="bg-[#C9F73A] text-black">{workshop.ceu}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground line-through">
                            ${workshop.originalPrice}
                          </span>
                          <span className="text-xl font-bold text-[#C9F73A]">
                            ${workshop.salePrice}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black" 
                        size="sm"
                        onClick={() => handleAddToCart(workshop, "Workshop & CEU")}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 12 CEU Workshops */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Specialized Training (12 CEU)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {workshopsCEU12.map((workshop) => (
                  <Card key={workshop.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{workshop.title}</CardTitle>
                        <Badge className="bg-[#C9F73A] text-black">{workshop.ceu}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground line-through">
                            ${workshop.originalPrice}
                          </span>
                          <span className="text-xl font-bold text-[#C9F73A]">
                            ${workshop.salePrice}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black" 
                        size="sm"
                        onClick={() => handleAddToCart(workshop, "Workshop & CEU")}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 6 CEU Workshops */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Foundation Training (6 CEU)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {workshopsCEU6.map((workshop) => (
                  <Card key={workshop.id} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{workshop.title}</CardTitle>
                        <Badge className="bg-[#C9F73A] text-black">{workshop.ceu}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground line-through">
                            ${workshop.originalPrice}
                          </span>
                          <span className="text-xl font-bold text-[#C9F73A]">
                            ${workshop.salePrice}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black" 
                        size="sm"
                        onClick={() => handleAddToCart(workshop, "Workshop & CEU")}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="coaching" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Personalised Coaching & Nutrition</h2>
              <p className="text-muted-foreground">
                Whether you're just starting your fitness journey or need ongoing expert support, we've got your back.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {coachingPlans.map((plan) => (
                <Card key={plan.id} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{plan.title}</CardTitle>
                      <Badge variant="secondary">{plan.duration}</Badge>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-[#C9F73A]">
                          ${plan.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /{plan.duration.toLowerCase()}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-[#C9F73A] rounded-full mr-2"></span>
                          {inclusion}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-[#C9F73A] hover:bg-[#B8E629] text-black"
                      onClick={() => handleAddToCart(plan, "Coaching Plan")}
                    >
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Programs;