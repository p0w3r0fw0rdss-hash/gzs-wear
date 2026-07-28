"use client";

import { products } from "@/data/products";
import { getSocialContent } from "@/data/marketing";
import { Copy, Camera, MessageSquare, Pin, Globe } from "lucide-react";
import { useState } from "react";

export default function MarketingDashboard() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto bg-white min-h-screen">
      <header className="mb-20">
        <span className="text-[10px] font-black tracking-[1em] text-zinc-300 uppercase block">GZS WEAR / ENGINE</span>
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">Generador de Tráfico.</h1>
        <p className="mt-8 text-zinc-500 italic max-w-2xl">Copia y pega este contenido en tus redes sociales para atraer tráfico orgánico. Pinterest es tu prioridad para conseguir ventas gratis.</p>
      </header>

      <div className="space-y-32">
        {products.map((product) => {
          const content = getSocialContent(product);
          return (
            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-100 pt-12">
              <div className="lg:col-span-3">
                <img src={product.image} className="w-full aspect-square object-cover" alt={product.name} />
                <h3 className="mt-4 font-black italic uppercase tracking-tighter text-xl">{product.name}</h3>
              </div>
              
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Instagram */}
                <div className="bg-zinc-50 p-6 rounded-2xl relative">
                  <div className="flex items-center gap-2 mb-4 text-zinc-400">
                    <Camera className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase">Instagram/TikTok</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed h-32 overflow-y-auto">{content.instagram}</p>
                  <button 
                    onClick={() => handleCopy(content.instagram, `${product.id}-ig`)}
                    className="mt-4 w-full bg-black text-white py-3 text-[8px] font-black tracking-widest uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    {copied === `${product.id}-ig` ? "¡COPIADO!" : "COPIAR CAPTION"} <Copy className="w-3 h-3" />
                  </button>
                </div>

                {/* Pinterest */}
                <div className="bg-zinc-50 p-6 rounded-2xl relative">
                  <div className="flex items-center gap-2 mb-4 text-zinc-400">
                    <Pin className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase">Pinterest (Tráfico 🚀)</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed h-32 overflow-y-auto">{content.pinterest}</p>
                  <button 
                    onClick={() => handleCopy(content.pinterest, `${product.id}-pin`)}
                    className="mt-4 w-full bg-black text-white py-3 text-[8px] font-black tracking-widest uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    {copied === `${product.id}-pin` ? "¡COPIADO!" : "COPIAR TÍTULO PIN"} <Copy className="w-3 h-3" />
                  </button>
                </div>

                {/* Google SEO */}
                <div className="bg-zinc-50 p-6 rounded-2xl relative border-2 border-zinc-100">
                  <div className="flex items-center gap-2 mb-4 text-zinc-400">
                    <Globe className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase">Palabras Clave Google</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase leading-tight italic">
                    GZS Wear, {product.category}, Streetwear España, Minimalist, {product.name.toLowerCase()}, Identity, Buy Online.
                  </p>
                  <div className="mt-12 text-[8px] font-black text-zinc-300 uppercase">
                    Indexado automáticamente cada 24h
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
