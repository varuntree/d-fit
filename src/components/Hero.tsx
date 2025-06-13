
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&crop=center')"
        }}
      >
        <div className="absolute inset-0 bg-[#0D0D0D]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Certify Your <span className="text-[#A7E800]">Passion</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Transform your fitness passion into a globally-recognised career with IFPA-accredited certifications from Australia's premier fitness education provider.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#0060F0] hover:bg-[#0050D0] text-white px-8 py-3 text-lg"
          >
            Explore Programs
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#A7E800] text-[#A7E800] hover:bg-[#A7E800] hover:text-[#0D0D0D] px-8 py-3 text-lg"
          >
            Get Coaching
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#A7E800]">26+</div>
            <div className="text-gray-300">CEU Workshops</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#A7E800]">IFPA</div>
            <div className="text-gray-300">Accredited</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#A7E800]">Global</div>
            <div className="text-gray-300">Recognition</div>
          </div>
        </div>
      </div>
    </section>
  );
};
