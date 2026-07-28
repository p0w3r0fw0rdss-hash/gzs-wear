"use client";

import { products } from "@/data/products";
import { useCart } from "@/store/useCart";
import { ShoppingCart, ExternalLink, ArrowUpRight } from "lucide-react";
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
    <div className="pt-40 pb-32 px-6 max-w-[1800px] mx-auto bg-white">
      <header className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="space-y-4">
          <span className="text-[10px] font-black tracking-[1em] text-zinc-300 uppercase block">GZS WEAR / OFICIAL SHOP</span>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">Catálogo<br/>Completo.</h1>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-4 text-[10px] font-black tracking-widest transition-all border-2 ${
                filter === cat 
                ? "bg-black text-white border-black" 
                : "bg-transparent text-zinc-400 border-zinc-100 hover:border-black hover:text-black"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-24">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative flex flex-col">
            {/* Image Link to Shop */}
            <a 
              href={product.printifyUrl} 
              target="_blank" 
              className="relative aspect-[3/4] overflow-hidden bg-zinc-50 mb-8 block shadow-sm group-hover:shadow-3xl transition-all duration-700"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              
              <div className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-xl opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                 <ArrowUpRight className="w-5 h-5 text-black" />
              </div>
            </a>

            {/* Info */}
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{product.category}</span>
                  <a 
                    href={product.printifyUrl} 
                    target="_blank"
                    className="block text-2xl font-black italic tracking-tighter uppercase group-hover:underline transition-all"
                  >
                    {product.name}
                  </a>
                </div>
                <p className="text-2xl font-black italic tracking-tighter">${product.price}</p>
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-zinc-50">
                 <button 
                  onClick={() => addItem(product)}
                  className="flex-grow bg-black text-white py-4 text-[10px] font-black tracking-widest hover:bg-zinc-800 transition-all uppercase"
                >
                  Añadir al Carrito
                </button>
                <a 
                  href={product.printifyUrl}
                  target="_blank"
                  className="px-6 border-2 border-zinc-100 flex items-center justify-center hover:border-black transition-colors"
                  title="Ver en tienda oficial"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SEO / Brand Details */}
      <section className="mt-60 grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-t border-zinc-100 pt-32">
          <div className="space-y-8">
             <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-tight">Diseñado para la <br/> Eternidad.</h2>
             <p className="text-zinc-500 text-lg italic font-light leading-relaxed">
               Cada gráfico ha sido curado bajo los estándares de Gazeta Studio para asegurar una estética atemporal. No seguimos modas de una semana; construimos identidades que duran años.
             </p>
          </div>
          <div className="aspect-[16/9] bg-zinc-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
             <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Detail" />
          </div>
      </section>
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="pt-40 text-center font-black italic tracking-tighter text-4xl">CARGANDO TIENDA...</div>}>
      <ShopContent />
    </Suspense>
  );
}
