import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Phone, ShoppingCart, UtensilsCrossed, Menu, X, Coffee } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: Phone, label: "About" },
  { to: "/menu", icon: UtensilsCrossed, label: "Menu" },
  { to: "/cart", icon: ShoppingCart, label: "Cart" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" 
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl transition-all duration-300 
              ${isScrolled 
                ? "bg-amber-600 shadow-lg shadow-amber-600/30" 
                : "bg-white/20 backdrop-blur-md"
              }`}
            >
              <Coffee 
                size={24} 
                className={`transition-all duration-300 group-hover:rotate-12
                  ${isScrolled ? "text-white" : "text-amber-800"}`} 
              />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-all duration-300
              ${isScrolled ? "text-gray-800" : "text-amber-900"}
              hidden sm:block`}
            >
              Café<span className="text-amber-600">Experience</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 rounded-xl flex items-center gap-2 font-medium
                  transition-all duration-300 group overflow-hidden
                  ${isActive(to)
                    ? isScrolled
                      ? "text-amber-700 bg-amber-100"
                      : "text-amber-800 bg-white/30 backdrop-blur-md"
                    : isScrolled
                      ? "text-gray-600 hover:text-amber-700 hover:bg-amber-50"
                      : "text-gray-800 hover:text-amber-800 hover:bg-white/20"
                  }`}
              >
                <Icon 
                  size={18} 
                  className={`transition-transform duration-300 group-hover:scale-110
                    ${isActive(to) ? "text-amber-600" : ""}`}
                />
                <span className="text-sm">{label}</span>
                {isActive(to) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/reservation"
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm
                transition-all duration-300 transform hover:scale-105
                ${isScrolled
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50"
                  : "bg-white/90 text-amber-800 hover:bg-white shadow-lg"
                }`}
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300
              ${isScrolled 
                ? "bg-amber-100 text-amber-700" 
                : "bg-white/20 backdrop-blur-md text-gray-800"
              }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden
          transition-opacity duration-300
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden
          shadow-2xl transition-transform duration-300 ease-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-600 shadow-lg shadow-amber-600/30">
                <Coffee size={20} className="text-white" />
              </div>
              <span className="text-lg font-bold text-gray-800">
                Café<span className="text-amber-600">Experience</span>
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-2">
            {navItems.map(({ to, icon: Icon, label }, index) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium
                  transition-all duration-300 transform
                  ${isActive(to)
                    ? "bg-amber-100 text-amber-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-amber-700"
                  }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <Icon size={20} className={isActive(to) ? "text-amber-600" : ""} />
                <span>{label}</span>
                {isActive(to) && (
                  <span className="ml-auto w-2 h-2 bg-amber-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link
              to="/reservation"
              className="block w-full text-center px-5 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-amber-600 to-amber-700 text-white
                shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50
                transition-all duration-300 transform hover:scale-[1.02]"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Footer Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-sm text-gray-500">
              <p>Open Daily: 8AM - 10PM</p>
              <p className="text-amber-600 font-medium mt-1">☎ +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
