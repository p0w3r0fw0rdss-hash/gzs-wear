"use client";

import { useCart } from "@/store/useCart";
import { Trash2, Minus, Plus, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-60 text-center min-h-screen bg-white">
        <span className="text-[10px] font-black tracking-[1em] text-zinc-300 mb-6 block uppercase">TUS SELECCIONES</span>
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-12 uppercase">Tu carrito <br/> está vacío</h2>
        <Link href="/shop" className="inline-block bg-black text-white px-12 py-6 text-xs font-black tracking-widest hover:bg-zinc-800 transition-all uppercase">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">Mi Carrito<span className="text-zinc-200">.</span></h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* List of Items */}
          <div className="lg:col-span-8 space-y-12">
            {items.map((item) => (
              <div key={item.id} className="group grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-100 items-center">
                <div className="md:col-span-3 aspect-[3/4] bg-zinc-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                <div className="md:col-span-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter mt-1">{item.name}</h3>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center border border-zinc-200 bg-zinc-50 px-4 py-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-zinc-400">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center font-black text-xs">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-zinc-400">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-[10px] font-black uppercase text-zinc-400 hover:text-red-600 transition-colors">
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="md:col-span-3 text-right">
                   <p className="text-2xl font-black italic tracking-tighter">${(item.price * item.quantity).toFixed(2)}</p>
                   <p className="text-[10px] font-bold text-zinc-300 uppercase mt-1">Ref: {item.id}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-4">
            <div className="bg-zinc-50 p-12 sticky top-40">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-10">Resumen</h2>
              
              <div className="space-y-6 mb-10 pb-10 border-b border-zinc-200">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-zinc-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-zinc-400">
                  <span>Envío</span>
                  <span className="text-black">GRATIS</span>
                </div>
              </div>

              <div className="flex justify-between text-3xl font-black italic tracking-tighter uppercase mb-12">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-zinc-400 uppercase mb-4 leading-relaxed">
                  Para finalizar tu compra, serás redirigido a la tienda oficial de Printify para cada producto de tu carrito.
                </p>
                
                {items.map(item => (
                  <a 
                    key={item.id}
                    href={item.printifyUrl} 
                    target="_blank"
                    className="w-full bg-black text-white px-8 py-5 text-[10px] font-black tracking-widest flex items-center justify-between hover:bg-zinc-800 transition-all group"
                  >
                    FINALIZAR: {item.name.slice(0, 15)}... <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                ))}
              </div>
              
              <div className="mt-10 flex items-center justify-center space-x-6 opacity-30 grayscale">
                 <ShieldCheck className="w-8 h-8" />
                 <Globe className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
