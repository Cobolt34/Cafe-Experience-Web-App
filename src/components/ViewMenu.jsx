import React, { useState } from "react";
import { Coffee, IceCream, Utensils, Sandwich } from "lucide-react";
import { Link } from "react-router-dom";

export default function ViewMenu() {
  const [showIcons, setShowIcons] = useState(false);

  // Icon data for easy mapping
  const icons = [
    { icon: <Coffee className="w-6 h-6 text-[#4b2e23]" />, link: "/menu#coffee", bg: "from-[#c6a477] to-[#6f4e37]" },
    { icon: <Sandwich className="w-6 h-6 text-[#593d2b]" />, link: "/menu#appetizers", bg: "from-[#d9b68f] to-[#8b5e3c]" },
    { icon: <Utensils className="w-6 h-6 text-[#482c1f]" />, link: "/menu#main", bg: "from-[#c48b6a] to-[#7a4b2c]" },
    { icon: <IceCream className="w-6 h-6 text-[#6b3f36]" />, link: "/menu#desserts", bg: "from-[#e0b4a3] to-[#a9746e]" },
  ];

  return (
    <div className="fixed top-6 left-6 z-50">
      <div
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
        className="relative flex flex-col items-center"
      >
        {/* View Menu Button */}
        <Link to="/menu">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 text-lg tracking-wider">
            View Menu
          </button>
        </Link>

        {/* Hover icons */}
        {showIcons && (
          <div className="flex gap-4 mt-4">
            {icons.map((item, idx) => (
              <Link key={idx} to={item.link}>
                <div
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br shadow-2xl from-white/10 to-white/30 backdrop-blur-md hover:scale-125 transition-transform duration-500 hover:shadow-3xl border border-white/20"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr ${item.bg} shadow-lg hover:shadow-xl transition-all duration-500`}
                  >
                    {item.icon}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
