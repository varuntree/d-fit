
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { CoachingPlans } from "@/components/CoachingPlans";
import { ProgramCatalogue } from "@/components/ProgramCatalogue";
import { FeaturedCEUs } from "@/components/FeaturedCEUs";
import { OurStory } from "@/components/OurStory";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CoachingPlans />
      <ProgramCatalogue />
      <FeaturedCEUs />
      <OurStory />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
