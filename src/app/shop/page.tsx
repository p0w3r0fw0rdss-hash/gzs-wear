"use client";

import { products } from "@/data/products";
import { useCart } from "@/store/useCart";
import { Plus, Eye, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Shop() {
  const addItem = useCart((state) => state.addItem);
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Camisetas", "Sudaderas", "Accesorios"];
  const filteredProducts = filter === "Todos" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <span className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-400 mb-4 block">Official Catalog</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">TIENDA</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full text-xs font-bold transition-all border ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-6 group">
              {/* Product Image */}
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <button 
                  onClick={() => addItem(product)}
                  className="bg-white text-black p-4 rounded-full shadow-xl hover:bg-black hover:text-white transition-all transform hover:scale-110"
                  title="Añadir al carrito"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              {/* Tag */}
              {product.price > 40 && (
                <div className="absolute top-4 left-4 bg-black text-white text-[8px] font-bold px-3 py-1 uppercase tracking-widest">
                  Premium
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-sm tracking-tight group-hover:underline cursor-pointer">
                  {product.name}
                </h3>
                <span className="font-medium text-sm ml-4">
                  ${product.price}
                </span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 mb-4">
                {product.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  {product.category}
                </span>
                <button 
                  onClick={() => addItem(product)}
                  className="text-[10px] font-bold uppercase tracking-widest hover:text-black transition-colors"
                >
                  + Añadir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SEO/Brand Content at Bottom */}
      <section className="mt-32 pt-20 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 italic">Materiales Premium</h4>
          <p className="text-zinc-500 text-xs leading-relaxed">
            Utilizamos solo los mejores proveedores de Printify para asegurar que cada camiseta y sudadera mantenga su forma y suavidad lavado tras lavado.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 italic">Corte Aesthetic</h4>
          <p className="text-zinc-500 text-xs leading-relaxed">
            Patrones diseñados específicamente para encajar en el estilo streetwear moderno: hombros caídos, largos precisos y comodidad urbana.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-4 italic">Identidad Visual</h4>
          <p className="text-zinc-500 text-xs leading-relaxed">
            Cada gráfico es una pieza de arte minimalista pensada para comunicar sin gritar. GZS Wear es el uniforme de la nueva era.
          </p>
        </div>
      </section>
    </div>
  );
}
