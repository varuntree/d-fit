
export const OurStory = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2001 as the Dahanni Center in Lebanon, our journey began with a simple mission: 
              to turn passion into purpose and learners into leaders in the fitness industry.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In 2020, we became the official Australian affiliate of the International Fitness 
              Professionals Association (IFPA), bringing globally-recognised certifications to 
              Australian fitness enthusiasts.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Today, we're proud to offer internationally-accredited certifications that are 
              recognised worldwide, helping thousands of fitness professionals build successful careers.
            </p>
            
            {/* Accreditation Logos */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0060F0] rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">IFPA</span>
                </div>
                <span className="text-sm text-muted-foreground">IFPA Accredited</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#A7E800] rounded-full flex items-center justify-center mb-2">
                  <span className="text-[#0D0D0D] font-bold text-sm">NCCA</span>
                </div>
                <span className="text-sm text-muted-foreground">NCCA Recognised</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center" 
              alt="Fitness professional training" 
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0060F0]/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
