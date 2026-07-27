"use client";

import { products } from "@/data/products";
import { useCart } from "@/store/useCart";
import { Plus } from "lucide-react";

export default function Shop() {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">TIENDA</h1>
        <p className="text-gray-500">Explora nuestra selección completa de productos GZS.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button 
                onClick={() => addItem(product)}
                className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-medium text-sm mb-1">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
