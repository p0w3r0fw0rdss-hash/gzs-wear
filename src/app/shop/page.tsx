"use client";

import { products } from "@/data/products";
import { useCart } from "@/store/useCart";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ShopContent() {
  const addItem = useCart((state) => state.addItem);
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setFilter(category);
    }
  }, [searchParams]);

  const categories = ["Todos", "Camisetas", "Sudaderas", "Accesorios"];
  const filteredProducts = filter === "Todos" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 italic uppercase">Catálogo</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-3 rounded-full text-xs font-bold tracking-widest transition-all border ${
                filter === cat 
                ? "bg-black text-white border-black" 
                : "bg-transparent text-zinc-500 border-zinc-200 hover:border-black hover:text-black"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              
              <button 
                onClick={() => addItem(product)}
                className="absolute bottom-6 right-6 bg-black text-white p-5 rounded-full shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-800"
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">{product.category}</span>
              <h3 className="font-bold text-xl tracking-tighter italic mb-2 group-hover:text-zinc-600 transition-colors cursor-pointer">
                {product.name}
              </h3>
              <p className="font-medium text-lg text-black">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="pt-40 text-center">Cargando tienda...</div>}>
      <ShopContent />
    </Suspense>
  );
}
