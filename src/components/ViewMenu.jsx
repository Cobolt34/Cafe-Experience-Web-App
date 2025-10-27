import React, { useState } from "react"; 
import { Coffee, IceCream, Utensils, Sandwich, ChefHat, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ViewMenu() {
  const [showIcons, setShowIcons] = useState(false);

  const menuCategories = [
    { 
      to: "/menu#coffee", 
      icon: Coffee, 
      label: "Coffee", 
      color: "from-amber-600 to-yellow-600",
      bgColor: "bg-amber-100/80"
    },
    { 
      to: "/menu#appetizers", 
      icon: Sandwich, 
      label: "Appetizers", 
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-100/80"
    },
    { 
      to: "/menu#main", 
      icon: Utensils, 
      label: "Main Course", 
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100/80"
    },
    { 
      to: "/menu#desserts", 
      icon: IceCream, 
      label: "Desserts", 
      color: "from-pink-600 to-purple-600",
      bgColor: "bg-pink-100/80"
    }
  ];

  return (
    <div className="fixed top-6 left-6 z-50">
      <motion.div
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Main Menu Button */}
        <Link to="/menu">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: showIcons ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChefHat size={20} />
              </motion.div>
              <span className="font-medium">View Menu</span>
              <motion.div
                animate={{ scale: showIcons ? 1.2 : 1, rotate: showIcons ? 360 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles size={16} className="text-yellow-400" />
              </motion.div>
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </motion.button>
        </Link>

        {/* Category Icons */}
        <AnimatePresence>
          {showIcons && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
              className="flex gap-3 mt-4"
            >
              {menuCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.to}
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: -20 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <Link to={category.to}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.15, 
                          y: -5,
                          rotate: [0, -5, 5, 0]
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`group relative w-14 h-14 flex items-center justify-center rounded-2xl ${category.bgColor} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}
                      >
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        <Icon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors relative z-10" />
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          {category.label}
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
