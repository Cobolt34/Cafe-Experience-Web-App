import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import menuData from "../data/menuData.json";

export default function Menu() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
      <h1 className="text-5xl font-bold text-center mb-14 drop-shadow-lg">
        Our Menu
      </h1>

      {/* Coffee Section */}
      <section
        id="coffee"
        className="relative mb-16 bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8"
      >
        <img
          src="/coffee.webp"
          alt="Coffee Sticker"
          className="absolute w-32 h-32 opacity-80 pointer-events-none -z-10
                     top-[-1rem] sm:top-0 md:top-0
                     right-2 sm:right-0 md:right-0
                     -translate-y-1/4 translate-x-1/4"
        />
        <h2 className="text-3xl font-semibold mb-6 tracking-wide text-gray-800">
          ☕ Coffee & Beverages
        </h2>

        <h3 className="text-2xl font-medium mb-4">Hot</h3>
        <ul className="grid md:grid-cols-2 gap-5 mb-8">
          {menuData.coffee.hot.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-white/60 backdrop-blur-lg p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-lg">{item.name}</span>
              <span className="font-semibold text-gray-800">₹{item.price}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-medium mb-4">Cold</h3>
        <ul className="grid md:grid-cols-2 gap-5">
          {menuData.coffee.cold.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-white/60 backdrop-blur-lg p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-lg">{item.name}</span>
              <span className="font-semibold text-gray-800">₹{item.price}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Other Categories */}
      {[
        { key: "appetizers", sticker: "/sandwich.webp" },
        { key: "main", sticker: "/pasta.webp" },
        { key: "desserts", sticker: "/waffle.webp" },
      ].map(({ key, sticker }) => (
        <section
          key={key}
          id={key}
          className="relative mb-16 bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8"
        >
          {/* Sticker */}
          <img
            src={sticker}
            alt={`${key} Sticker`}
            className="absolute w-32 h-32 opacity-80 pointer-events-none -z-10
                       top-[-1rem] sm:top-0 md:top-0
                       right-2 sm:right-0 md:right-0
                       -translate-y-1/4 translate-x-1/4"
          />

          <h2 className="text-3xl font-semibold mb-6 capitalize tracking-wide text-gray-800">
            {key === "appetizers"
              ? "🥪 Appetizers"
              : key === "main"
              ? "🍲 Main Course"
              : "🍨 Desserts"}
          </h2>

          <ul className="grid md:grid-cols-2 gap-5">
            {menuData[key].map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-white/60 backdrop-blur-lg p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-lg">{item.name}</span>
                <span className="font-semibold text-gray-800">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
