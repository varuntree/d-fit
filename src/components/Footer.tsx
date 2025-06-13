
export const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#A7E800]">Contact Details</h3>
            <div className="space-y-2 text-gray-300">
              <p>D-FIT Academy Australia</p>
              <p>Email: info@dfitacademy.com.au</p>
              <p>Phone: +61 XXX XXX XXX</p>
              <p>ABN: XX XXX XXX XXX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#A7E800]">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-[#A7E800] transition-colors">
                Home
              </a>
              <a href="#programs" className="block text-gray-300 hover:text-[#A7E800] transition-colors">
                Our Programs
              </a>
              <a href="#about" className="block text-gray-300 hover:text-[#A7E800] transition-colors">
                About Us
              </a>
              <a href="#enrol" className="block text-gray-300 hover:text-[#A7E800] transition-colors">
                Enrol Now
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-[#A7E800] transition-colors">
                Contact
              </a>
              <a href="/privacy-policy" className="block text-gray-300 hover:text-[#A7E800] transition-colors">
                Privacy Policy
              </a>
              <a href="/accessibility" className="block text-gray-300 hover:text-[#A7E800] transition-colors">
                Accessibility Statement
              </a>
            </div>
          </div>

          {/* Accreditation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#A7E800]">Accreditation</h3>
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
                <div className="w-12 h-12 bg-[#A7E800] rounded-full flex items-center justify-center">
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
            © 2025 D-FIT Academy Australia. All rights reserved. 
            Globally-recognised certifications through IFPA partnership.
          </p>
        </div>
      </div>
    </footer>
  );
};
