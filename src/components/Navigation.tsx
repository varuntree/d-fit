
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCartStore();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "About", href: "/about" },
    { label: "Coaching", href: "/coaching" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-[#C9F73A] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">D</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">D-FIT Academy</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.href
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#C9F73A] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/programs">
                <Button className="bg-[#C9F73A] hover:bg-[#B8E629] text-black rounded-full px-6 font-semibold">
                  START YOUR JOURNEY
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-[#A7E800] font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Link to="/cart" className="w-full">
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Cart ({getTotalItems()})
                  </Button>
                </Link>
                <Link to="/programs" className="w-full">
                  <Button className="w-full bg-[#A7E800] hover:bg-[#95D000] text-black">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
