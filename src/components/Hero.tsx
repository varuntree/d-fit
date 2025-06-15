import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Content */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:pr-8">
          <div className="mb-6 inline-flex items-center bg-[#C9F73A] rounded-full px-4 py-2">
            <span className="text-black font-medium text-sm">🔥 Hurry Up! First Course Starts July 1st</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-gray-900 animate-fade-in tracking-tight">
            Become a Certified<br />
            <span className="text-[#C9F73A]">Fitness Trainer</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-600 animate-fade-in-delay max-w-2xl">
            Start your fitness career with internationally recognized IFPA certifications. 
            Join thousands of certified professionals worldwide with our comprehensive training programs 
            designed for your success in the fitness industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Link to="/programs">
              <Button 
                size="lg" 
                className="bg-[#C9F73A] hover:bg-[#B8E629] text-black px-8 py-3 text-lg font-semibold rounded-full"
              >
                EXPLORE CERTIFICATIONS
              </Button>
            </Link>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Play className="w-5 h-5 ml-1" />
              </div>
              Watch video
            </button>
          </div>
        </div>

        {/* Right Content - Fitness Trainer Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Main large image - Fitness Professional Teaching */}
            <div 
              className="col-span-2 aspect-[16/10] bg-cover bg-center rounded-2xl shadow-2xl relative overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=500&fit=crop&crop=center')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Two smaller images - Diverse Fitness Training */}
            <div 
              className="aspect-square bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&h=400&fit=crop&crop=center')"
              }}
            ></div>
            <div 
              className="aspect-square bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&crop=center')"
              }}
            ></div>
          </div>
          
          {/* Certification Success Card */}
          <div className="absolute top-6 right-6 bg-white rounded-2xl p-5 shadow-xl w-52 backdrop-blur-sm bg-white/95 hover:scale-105 transition-transform duration-300">
            <div className="text-xs text-gray-500 mb-3 font-medium tracking-wide">IFPA Certified</div>
            <div className="text-4xl font-bold text-gray-900 mb-1 leading-none">1000<span className="text-lg font-normal text-gray-600">+</span></div>
            <div className="text-sm text-green-600 mb-4 font-medium flex items-center gap-1">
              <span className="text-green-500">↗</span> Students Trained
            </div>
            
            <div className="space-y-3">
              <div className="text-xs text-gray-500 font-medium tracking-wide">Career Success</div>
              <div className="flex gap-2">
                <div className="flex-1 bg-[#C9F73A] h-2 rounded-full"></div>
                <div className="flex-1 bg-[#C9F73A] h-2 rounded-full"></div>
                <div className="flex-1 bg-[#C9F73A] h-2 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400">95% Success Rate</div>
            </div>
          </div>

          {/* Countries Recognition */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg backdrop-blur-sm bg-white/95 hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-gray-900 leading-none">30<span className="text-lg text-gray-400 font-normal">+</span></div>
            <div className="text-xs text-gray-500 mt-1">Countries</div>
          </div>

          {/* IFPA Logo */}
          <div className="absolute top-6 left-6 w-12 h-12 bg-[#C9F73A] rounded-full p-1 shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <span className="text-black font-bold text-xs">IFPA</span>
          </div>
        </div>
      </div>
    </section>
  );
};