"use client";

import { useCart } from "@/store/useCart";
import { Trash2, Minus, Plus } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-40 text-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <Link href="/shop" className="text-black underline underline-offset-4">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-12 tracking-tighter">TU CARRITO</h1>

      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.id} className="flex gap-6 pb-8 border-b border-gray-100">
            <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{item.name}</h3>
                <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-4">${item.price}</p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <div className="flex justify-between text-lg font-bold mb-6">
          <span>TOTAL</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors">
          FINALIZAR COMPRA
        </button>
        <p className="text-xs text-gray-400 text-center mt-4">
          Impuestos y envío calculados al finalizar la compra.
        </p>
      </div>
    </div>
  );
}
