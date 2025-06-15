
export const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C9F73A]">Contact Details</h3>
            <div className="space-y-2 text-gray-300">
              <p>D-FIT Academy Australia</p>
              <p>2/0 Eve Street, Guildford, NSW</p>
              <p>Email: info@dfitacademy.com.au</p>
              <p>Phone: +61 423 446 134</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C9F73A]">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-[#C9F73A] transition-colors">
                Home
              </a>
              <a href="/programs" className="block text-gray-300 hover:text-[#C9F73A] transition-colors">
                Our Programs
              </a>
              <a href="/about" className="block text-gray-300 hover:text-[#C9F73A] transition-colors">
                About Us
              </a>
              <a href="/coaching" className="block text-gray-300 hover:text-[#C9F73A] transition-colors">
                Coaching
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-[#C9F73A] transition-colors">
                Contact
              </a>
              <a href="/privacy-policy" className="block text-gray-300 hover:text-[#C9F73A] transition-colors">
                Privacy & Policy
              </a>
              <a href="/accessibility" className="block text-gray-300 hover:text-[#C9F73A] transition-colors">
                Accessibility Statement
              </a>
            </div>
          </div>

          {/* Accreditation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C9F73A]">Accreditation</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#0060F0] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">IFPA</span>
                </div>
                <div>
                  <p className="font-semibold">IFPA Accredited</p>
                  <p className="text-sm text-gray-400">International Fitness Professionals Association</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#C9F73A] rounded-full flex items-center justify-center">
                  <span className="text-[#0D0D0D] font-bold text-xs">NCCA</span>
                </div>
                <div>
                  <p className="font-semibold">NCCA Recognised</p>
                  <p className="text-sm text-gray-400">National Commission for Certifying Agencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2022 by D-Fit Academy. All rights reserved. 
            IFPA Personal Fitness Trainer Certification is accredited by the NCCA (National Commission for Certifying Agencies).
          </p>
          <div className="mt-4 bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-sm text-yellow-200">
              <strong>Important Notice:</strong> Our certifications are internationally accredited through IFPA (USA) and recognized in over 30 countries. 
              While they are ideal for professional development and employment in many fitness environments, 
              they are not nationally recognized qualifications in Australia under the Australian Qualifications Framework (AQF).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
