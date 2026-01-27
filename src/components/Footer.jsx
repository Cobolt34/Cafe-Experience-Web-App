import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Clock, Heart } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-gradient-to-br from-amber-50/95 via-orange-50/95 to-yellow-50/95 backdrop-blur-xl border-t border-amber-200/50 mt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
                The Valley Cafe
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Experience the perfect blend of comfort, flavor, and warmth in Dehradun's coziest cafe. 
              Where every cup tells a story and every bite creates memories.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/thevalley_cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "About Us", href: "/about" },
                { name: "Experience Planner", href: "/cart" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-amber-700 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:bg-amber-600 transition-colors"></div>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              Contact Info
            </h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <MapPin size={18} className="text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Shop no.2, Char khamba, Post Office Rd, nr. Graphic Era, Clement Town, Dehradun
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Phone size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-gray-700">+91 9811060229</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail size={18} className="text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-gray-700">info@amacafe.co</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              Opening Hours
            </h4>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock size={18} className="text-amber-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Daily</p>
                  <p className="text-sm text-gray-600">Open 7 days a week</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700 mb-1">10:00 AM - 10:00 PM</p>
                <p className="text-sm text-gray-600">Monday to Sunday</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-amber-200/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <span>© 2025 The Valley Cafe. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>by Sagarika</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="hover:text-amber-700 transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="hover:text-amber-700 transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}