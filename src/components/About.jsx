import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [openSections, setOpenSections] = useState({
    hours: true, // Open Hours open by default
    address: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div
      className="min-h-screen px-6 py-16 font-serif text-gray-900"
      style={{
        backgroundImage: 'url("/background.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Page Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-center mb-16 drop-shadow-2xl bg-gradient-to-r from-amber-800 via-orange-800 to-yellow-800 bg-clip-text text-transparent"
      >
        About Us
      </motion.h1>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="mb-20 bg-white/35 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-10 max-w-5xl mx-auto transition-all duration-500 hover:border-white/70"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          ☕ Our Story
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          The coziest place in Dehradun to eat and chill. Now available on Swiggy and Zomato.<br></br>
          Guilt free thin crust pizzas, healthy bowls, sandwiches & treats served in a charming outpost with swings, airy decor, 
          and a peaceful ambiance that makes every visit feel like a little escape. <br></br>
          Our cafe is crafted to bring comfort, flavor, and joy in every bite.
        </p>
      </motion.section>

      {/* Cafe Pictures */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {["/cafe1.jpg", "/cafe2.jpg", "/cafe3.jpg"].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5,
              rotateX: 5
            }}
            className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
          >
            <img
              src={src}
              alt={`Cafe Interior ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Interior View {index + 1}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Open Hours, Address & Contact */}
      <section className="max-w-4xl mx-auto bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 space-y-6">
        
        {["hours", "address", "contact"].map((sectionKey) => {
          const sectionTitles = {
            hours: "OPEN HOURS",
            address: "ADDRESS",
            contact: "CONTACT",
          };
          return (
            <div key={sectionKey}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(sectionKey)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{sectionTitles[sectionKey]}</h3>
                
                {/* Clean + / - toggle */}
                <motion.span
                  className="text-2xl font-bold"
                  animate={{ rotate: openSections[sectionKey] ? 0 : 90 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  {openSections[sectionKey] ? "−" : "+"}
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {openSections[sectionKey] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-2 text-gray-800"
                  >
                    {sectionKey === "hours" && (
                      <p>Monday to Sunday : 10:00am - 10:00pm</p>
                    )}
                    {sectionKey === "address" && (
                      <p>
                        <a
                          href="https://www.google.com/maps/dir//Shop+no.2,+Char+khamba,+Post+Office+Rd,+nr.+Graphic+Era,+Clement+Town,+Dehradun,+Bharu+Wala+Grant,+Uttarakhand+248002/@30.2700201,77.9140993,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39092bad95934057:0x6f812e2cf19883e6!2m2!1d77.9965006!2d30.2700459?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-600"
                        >
                          Shop no.2, Char khamba, Post Office Rd, nr. Graphic Era, Clement Town, Dehradun,<br /> 
                          Bharu Wala Grant, Uttarakhand 248002
                        </a>
                      </p>
                    )}
                    {sectionKey === "contact" && (
                      <div>
                        <p>Phone: +91 9811060229</p>
                        <p>Mail: info@amacafe.co</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Visit Button */}
        <div className="mt-4 flex justify-center">
          <motion.a
            href="https://www.google.com/maps/dir//Shop+no.2,+Char+khamba,+Post+Office+Rd,+nr.+Graphic+Era,+Clement+Town,+Dehradun,+Bharu+Wala+Grant,+Uttarakhand+248002/@30.2700201,77.9140993,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39092bad95934057:0x6f812e2cf19883e6!2m2!1d77.9965006!2d30.2700459?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            VISIT
          </motion.a>
        </div>

      </section>
        <div className="mt-4 flex justify-center">
        <a
            href="https://www.instagram.com/thevalley_cafe" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg hover:scale-110 transition-transform"
        >
            IG
        </a>
        </div>
    </div>
  );
}
