import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const menuData = {
  coffee: {
    hot: [
      { name: "Espresso", price: 120 },
      { name: "Americano", price: 130 },
      { name: "Cappuccino", price: 150 },
      { name: "Latte", price: 160 },
      { name: "Mocha", price: 170 },
      { name: "Macchiato", price: 140 },
      { name: "Hot Choclate", price: 100 },
      { name: "Masala Tea", price: 70 },
    ],
    cold: [
      { name: "Cold Brew", price: 180 },
      { name: "Iced Americano", price: 150 },
      { name: "Iced Latte", price: 170 },
      { name: "Hazelnut Cappuccino", price: 175 },
      { name: "Caramel Frappé", price: 190 },
      { name: "Banana Shake", price: 130 },
      { name: "Chocolate Shake", price: 149 },
      { name: "Oreo Shake", price: 149 },
      { name: "Strawberry Shake", price: 130 },
      { name: "Blueberry Shake", price: 130 },
    ],
  },
  appetizers: [
    { name: "Garlic Bread with Cheese", price: 120 },
    { name: "French Fries", price: 120 },
    { name: "Peri Peri Fries", price: 150 },
    { name: "Mushroom Grilled Sandwich", price: 149 },
    { name: "Vegetable Grilled Sandwich", price: 149 },
    { name: "Paneer Paprika Grilled Sandwich", price: 149 },
    { name: "Cucumber Tomato Coleslaw Sandwich", price: 99 },
    { name: "Tomato Capsicum Coleslaw Sandwich", price: 99 },
    { name: "Vegetable Waffle Sandwich", price: 175 },
    { name: "Chicken Waffle Sandwich", price: 250 },
    { name: "Aloo Patty Burger", price: 99 },
    { name: "Cheese Loaded Nachos", price: 170 },
    { name: "Paneer Patty Burger", price: 200 },
    { name: "Crispy Chicken Burger", price: 220 },
  ],
  main: [
    { name: "White Sauce Pasta", price: 200 },
    { name: "Red Sauce Pasta", price: 200 },
    { name: "Aglio E Olio", price: 200 },
    { name: "Mixed Sause Pasta", price: 200 },
    { name: "Farm House Builder Pizza", price: 250 },
    { name: "Peppy Paneer Pizza", price: 250 },
    { name: "Mushroom & Cheese Pizza", price: 250 },
    { name: "Margherita Pizza", price: 230 },
    { name: "BBQ Chicken Pizza", price: 320 },
    { name: "Veggie Delight Pizza", price: 270 },
    { name: "Grilled Chicken with Veggies", price: 350 },
    { name: "Paneer Steak Sizzler", price: 330 },
  ],
  desserts: [
    { name: "Brownie Sundae", price: 170 },
    { name: "Chocolate Sundae", price: 170 },
    { name: "Fruit and Nut Sundae", price: 170 },
    { name: "Vanilla Surprise", price: 170 },
    { name: "Classic Tiramisu", price: 220 },
    { name: "Cheesecake (Blueberry/Strawberry)", price: 250 },
    { name: "Churros with Chocolate Dip", price: 200 },
    { name: "Belgian Waffles with Ice Cream", price: 220 },
    { name: "Pancakes with Maple Syrup", price: 220 },
    { name: "Chocolate Lava Cake", price: 190 },
  ],
};

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
