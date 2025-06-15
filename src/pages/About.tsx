import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#C9F73A]">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Lebanon to Australia, our mission remains the same: 
            To turn passion into purpose — and learners into leaders.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">A Legacy of Excellence</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                D-FIT Academy was born from a legacy of passion and expertise. It all began over 20 years ago 
                with Dahanni Center in Lebanon - a trusted name in health, fitness, and transformation.
              </p>
              <p>
                What started as a single fitness center has evolved into an international academy, dedicated 
                to shaping certified professionals and empowering future fitness leaders. Today, as an official 
                IFPA affiliate in Australia, we bring world-class education, practical experience, and global 
                recognition to every student.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full h-96 bg-gradient-to-br from-[#C9F73A]/20 to-gray-200/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#C9F73A] mb-2">20+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-[#C9F73A]/10 to-gray-200/10 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At D-FIT Academy, we're here to help you grow, inspire, and create meaningful change 
              in your fitness career—one certification at a time.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">E</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in fitness education and professional development.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace modern teaching methods and cutting-edge fitness science.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">S</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support to help our students succeed in their fitness careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Accreditation Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Accreditation & Recognition</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#C9F73A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-black">IFPA</span>
                </div>
                <h3 className="font-semibold mb-2">IFPA Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Official affiliate of the International Fitness Professionals Association
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">NCCA</span>
                </div>
                <h3 className="font-semibold mb-2">NCCA Accredited</h3>
                <p className="text-sm text-muted-foreground">
                  Accredited by the National Commission for Certifying Agencies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Recognition */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Global Recognition</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="outline" className="text-sm">Australia</Badge>
            <Badge variant="outline" className="text-sm">USA</Badge>
            <Badge variant="outline" className="text-sm">Canada</Badge>
            <Badge variant="outline" className="text-sm">UK</Badge>
            <Badge variant="outline" className="text-sm">Lebanon</Badge>
            <Badge variant="outline" className="text-sm">UAE</Badge>
            <Badge variant="outline" className="text-sm">+25 Countries</Badge>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our certifications are internationally accredited through IFPA (USA) and recognized 
            in over 30 countries worldwide, giving you global career opportunities.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Notice for Australian Students</h3>
            <p className="text-sm text-yellow-700">
              Our certifications are internationally accredited through IFPA (USA) and recognized in over 30 countries. 
              While they are ideal for professional development and employment in many fitness environments, 
              they are not nationally recognized qualifications in Australia under the Australian Qualifications Framework (AQF).
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;