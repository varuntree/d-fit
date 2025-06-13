
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProgramCatalogue = () => {
  const [activeTab, setActiveTab] = useState("pft");

  const programs = {
    pft: [
      {
        name: "Basic PFT",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        price: "$299",
        originalPrice: "$399",
        description: "Essential certification for aspiring personal trainers"
      },
      {
        name: "Classic PFT",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
        price: "$499",
        originalPrice: "$599",
        description: "Comprehensive training with practical components"
      },
      {
        name: "Premium PFT",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
        price: "$799",
        originalPrice: "$999",
        description: "Advanced certification with specialisation modules"
      }
    ],
    fitness: [
      {
        name: "Master Fitness Trainer",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        price: "$899",
        originalPrice: "$1099",
        description: "Advanced training for experienced professionals"
      },
      {
        name: "Group Fitness Specialist",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
        price: "$599",
        originalPrice: "$699",
        description: "Specialise in group fitness instruction"
      },
      {
        name: "Medical Fitness Specialist",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
        price: "$999",
        originalPrice: "$1199",
        description: "Work with special populations and medical referrals"
      }
    ],
    ceu: [
      {
        name: "Strength Training Past 50",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        price: "$199",
        ceu: "6 CEU",
        description: "Specialised training for older adults"
      },
      {
        name: "Sports Nutrition Guidebook",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
        price: "$149",
        ceu: "4 CEU",
        description: "Comprehensive sports nutrition principles"
      },
      {
        name: "TRX Suspension Training",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
        price: "$249",
        ceu: "8 CEU",
        description: "Master suspension training techniques"
      }
    ]
  };

  const tabs = [
    { id: "pft", label: "PFT Certifications" },
    { id: "fitness", label: "Fitness Certificates" },
    { id: "ceu", label: "CEU Workshops" }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of IFPA-accredited certifications and continuing education workshops.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "bg-[#0060F0] text-white" : ""}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs[activeTab as keyof typeof programs].map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-[#0D0D0D]">{program.name}</CardTitle>
                  {program.ceu && (
                    <Badge className="bg-[#A7E800] text-[#0D0D0D] hover:bg-[#A7E800]/80">
                      {program.ceu}
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#0060F0]">{program.price}</span>
                    {program.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {program.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <Button className="w-full bg-[#A7E800] text-[#0D0D0D] hover:bg-[#A7E800]/80 font-semibold">
                  Enrol Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
