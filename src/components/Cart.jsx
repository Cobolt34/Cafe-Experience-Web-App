import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="min-h-screen px-6 py-16 bg-[#fefefe] font-serif">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">₹{item.price} x {item.qty}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQty(item.name, item.qty - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.name, item.qty + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  <button onClick={() => removeFromCart(item.name)} className="ml-4 text-red-500">Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
            <div className="flex gap-4">
              <button onClick={clearCart} className="px-4 py-2 bg-gray-300 rounded-lg">Clear</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
