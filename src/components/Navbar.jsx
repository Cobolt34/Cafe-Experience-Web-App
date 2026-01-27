import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Phone, ShoppingCart, List, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", icon: Home, label: "Home", color: "from-blue-500 to-blue-600" },
    { to: "/about", icon: Phone, label: "About", color: "from-green-500 to-green-600" },
    { to: "/cart", icon: ShoppingCart, label: "Experience", color: "from-purple-500 to-purple-600" },
    { to: "/menu", icon: List, label: "Menu", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 right-6 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/30 backdrop-blur-xl shadow-2xl border border-white/40" 
          : "bg-white/20 backdrop-blur-md shadow-lg border border-white/30"
      } px-6 py-3 rounded-2xl`}
    >
      <div className="flex gap-2 items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-2 shadow-lg"
        >
          <Coffee size={20} className="text-white" />
        </motion.div>

        {/* Navigation Items */}
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          
          return (
            <motion.div
              key={item.to}
              className="relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link to={item.to}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-br ${item.color} text-white shadow-lg` 
                      : "hover:bg-white/30 text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <Icon size={20} />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredItem === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  >
                    {item.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
}
