import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-[#C9F73A]">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your fitness career journey? Get in touch with our team 
            and we'll help you choose the right certification path.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C9F73A]" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2/0 Eve Street<br />
                  Guildford, NSW<br />
                  Australia
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#C9F73A]" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="tel:+61423446134" className="hover:text-[#C9F73A] transition-colors">
                    +61 423 446 134
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#C9F73A]" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a 
                    href="mailto:info@dfitacademy.com.au" 
                    className="hover:text-[#C9F73A] transition-colors"
                  >
                    info@dfitacademy.com.au
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C9F73A]" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <p className="text-sm pt-2">
                    * All times are in Australian Eastern Time (AET)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-to-r from-[#C9F73A]/10 to-gray-200/10">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <a href="/programs" className="text-[#C9F73A] hover:underline">
                      Browse Our Programs →
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href="/about" className="text-[#C9F73A] hover:underline">
                      Learn About Our Academy →
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href="/coaching" className="text-[#C9F73A] hover:underline">
                      Personal Coaching Services →
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does certification take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most of our certifications can be completed at your own pace, typically 
                  taking 2-6 months depending on the program and your schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are the certifications internationally recognized?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Our IFPA certifications are recognized in over 30 countries worldwide, 
                  giving you global career opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I need prior experience?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No prior experience is required for our Basic PFT certification. 
                  We welcome beginners and provide comprehensive training from the ground up.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer ongoing support including study materials, practical guidance, 
                  career advice, and access to our community of fitness professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;