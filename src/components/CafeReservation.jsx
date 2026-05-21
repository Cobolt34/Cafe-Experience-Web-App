import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CafeReservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    service: "lunch",
    notes: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, date, time, guests } = formData;
    if (name && email && phone && date && time && guests) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        service: "lunch",
        notes: "",
      });
    }
  };

  const inputClass =
    "w-full px-4 pt-6 pb-3 rounded-xl bg-white/25 border border-white/30 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-60 text-gray-900 peer backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 focus:scale-105 focus:shadow-lg";

  const labelClass =
    "absolute left-4 top-3 text-gray-600 text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-gray-800";

  return (
    <div
      className="min-h-screen flex flex-col font-serif text-gray-900 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/background.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-2xl"
        />
      </div>

      {/* Header */}
      <header className="text-center py-16 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block text-6xl mb-4"
          >
            ☕
          </motion.div>
          <h1 className="text-6xl font-bold mb-6 drop-shadow-2xl tracking-wide bg-gradient-to-r from-amber-800 via-orange-800 to-yellow-800 bg-clip-text text-transparent">
            The Valley Cafe
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-4 font-medium">
            Book your table online easily and enjoy a warm coffeehouse experience.
          </p>
          <p className="text-lg text-gray-600">
            Where every cup tells a story and every bite creates memories ✨
          </p>
        </motion.div>
      </header>
          
      {/* Form Section */}
      <main className="flex justify-center px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative bg-white/25 backdrop-blur-2xl shadow-2xl rounded-3xl p-12 w-full max-w-2xl border border-white/40 hover:border-white/60 transition-all duration-500"
        >
          {/* Enhanced Stickers */}
          <motion.img
            src="/hotcoco.webp"
            alt="Hot Cocoa Sticker"
            className="absolute top-8 right-8 w-[120px] h-[120px] opacity-70 z-0 pointer-events-none"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.img
            src="/pizza.webp"
            alt="Pizza Sticker"
            className="absolute bottom-8 left-8 w-[110px] h-[110px] opacity-70 z-0 pointer-events-none"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center text-gray-900 relative z-10"
          >
            <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              Reserve Your Table
            </span>
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[{ name: "name", type: "text", label: "Full Name" },
              { name: "email", type: "email", label: "Email" },
              { name: "phone", type: "tel", label: "Phone" },
              { name: "guests", type: "number", label: "Number of Guests" }]
              .map((field) => (
                <div className="relative" key={field.name}>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder=" "
                    className={inputClass}
                    required
                  />
                  <label className={labelClass}>{field.label}</label>
                </div>
              ))}

            {/* Date & Time Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder=" "
                  className={inputClass}
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                  min={new Date().toISOString().split("T")[0]}
                />
                <label className={labelClass}>Date</label>
              </div>
              <div className="relative">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder=" "
                  className={inputClass}
                  required
                />
                <label className={labelClass}>Time</label>
              </div>
            </div>

            {/* Service Select */}
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/25 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-60 text-gray-900 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-102 focus:scale-105 focus:shadow-lg"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>

            {/* Notes */}
            <div className="relative">
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder=" "
                className={inputClass + " resize-none"}
              />
              <label className={labelClass}>Special Requests</label>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </motion.button>
          </form>
        </motion.div>
      </main>

      {/* Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/20 flex items-center justify-center z-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
                className="flex justify-center mb-4"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-gray-800 mb-6">We look forward to serving you ☕</p>
              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 hover:shadow-lg text-white font-medium transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}
