
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const FeaturedCEUs = () => {
  const featuredCEUs = [
    {
      name: "Muscle Mechanics",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      price: "$179",
      ceu: "6 CEU",
      description: "Understanding muscle function and biomechanics"
    },
    {
      name: "Yoga for Athletes",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop&crop=center",
      price: "$149",
      ceu: "4 CEU",
      description: "Integrate yoga principles into athletic training"
    },
    {
      name: "Core Training for Athletes",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      price: "$199",
      ceu: "8 CEU",
      description: "Advanced core training methodologies"
    },
    {
      name: "Running Anatomy",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
      price: "$169",
      ceu: "6 CEU",
      description: "Biomechanics and anatomy for runners"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-4">
            Featured CEU Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance your expertise with our most popular continuing education workshops, designed to keep you at the forefront of fitness science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCEUs.map((ceu, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={ceu.image} 
                  alt={ceu.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-[#0060F0] text-white">
                    {ceu.ceu}
                  </Badge>
                  <span className="text-xl font-bold text-[#0060F0]">{ceu.price}</span>
                </div>
                <CardTitle className="text-lg font-bold text-[#0D0D0D] leading-tight">
                  {ceu.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {ceu.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button className="w-full bg-[#A7E800] text-[#0D0D0D] hover:bg-[#A7E800]/80 font-semibold text-sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#0060F0] hover:bg-[#0050D0] text-white px-8"
          >
            View All CEU Workshops
          </Button>
        </div>
      </div>
    </section>
  );
};
