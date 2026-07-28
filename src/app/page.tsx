"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Globe, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION - VIDEO STYLE AESTHETIC */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images-api.printify.com/mockup/691342b6b9eb0eb1960e0a70/116353/106706/wavy-crest-oversized-tee-olive-graphic-t-shirt-with-made-in-nature-vibe.jpg" 
            alt="GZS Wear Urban Background"
            className="w-full h-full object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in">
          <span className="text-[10px] font-black tracking-[1em] text-white/60 mb-6 block uppercase">NUEVA COLECCIÓN DISPONIBLE</span>
          <h1 className="text-7xl md:text-[12rem] font-black tracking-[-0.05em] text-white leading-none italic mb-8">
            GZS <br className="md:hidden"/> WEAR
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 mb-12 max-w-2xl mx-auto italic leading-relaxed">
            "No es solo ropa con estilo propio, <br className="hidden md:block"/> es tu <span className="font-bold text-white">NUEVA IDENTIDAD</span>."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/shop" 
              className="w-full sm:w-auto bg-white text-black px-12 py-6 text-xs font-black tracking-widest hover:bg-zinc-200 transition-all transform hover:scale-105"
            >
              EXPLORAR TIENDA
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 hidden lg:flex flex-col space-y-4">
            <div className="w-12 h-[1px] bg-white/30" />
            <span className="text-[8px] font-black text-white/40 tracking-[0.5em] rotate-90 origin-left mt-8 uppercase">EST. 2026</span>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION (From Google Sites) */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop" 
                className="w-full aspect-[4/5] object-cover" 
                alt="Identity Fashion" 
              />
              <div className="absolute top-10 left-10 bg-black text-white px-6 py-2 text-[10px] font-black tracking-widest uppercase">
                IDENTIDAD URBANA
              </div>
            </div>
            
            <div className="space-y-10">
              <span className="text-xs font-black tracking-[0.4em] text-zinc-400 uppercase">Filosofía de Marca</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">Tu Estilo, <br/> Tu Regla.</h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed italic">
                 Nacidos del deseo de simplificar el estilo sin perder la esencia. 
                 Cada prenda de GZS WEAR es una declaración de intenciones. 
                 Minimalismo, calidad y propósito.
              </p>
              
              <div className="grid grid-cols-2 gap-10 pt-8 border-t border-zinc-100">
                <div>
                  <h4 className="font-black text-[10px] tracking-widest mb-2 uppercase italic">Esencia</h4>
                  <p className="text-sm text-zinc-400 italic">Diseños que no gritan, sino que afirman tu presencia.</p>
                </div>
                <div>
                  <h4 className="font-black text-[10px] tracking-widest mb-2 uppercase italic">Calidad</h4>
                  <p className="text-sm text-zinc-400 italic">Materiales seleccionados para durar en el tiempo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES GRID (The "Collection 001" feel) */}
      <section className="bg-zinc-100 py-32 px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">Colección<br/>001.</h2>
            <Link href="/shop" className="text-xs font-black tracking-widest border-b-2 border-black pb-2 mb-4 hover:opacity-50 transition-all uppercase">
              Ver Catálogo Completo
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Camisetas */}
            <Link href="/shop?category=Camisetas" className="relative h-[80vh] group overflow-hidden bg-zinc-200">
              <img src="https://lh3.googleusercontent.com/sitesv/AG8ngQX8XiGcvK5nK78x02wU7k9fQtJ-BLs0MJIQEX6ScDTjjA7IaYa7bS_SLzViGjwb5JNchZK1ZtyA8dLw3Vt29qxwavqYAQDSCFgjLtmir2H3ckuWwTWvXf2S5AmUthApTKViPYdc1YhF2NqAY_FLPPB1TCKFUGMqvg_6MuOwyO-NA7vCxOlgbzJKj-VWkBI2cEumgbpZ7S2utAbtThIS_4n1KhoEkk6JSY77_vPt=w1280" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Camisetas" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-8xl font-black italic tracking-tighter uppercase">TEES</span>
                <span className="text-[10px] font-black tracking-[0.5em] mt-4">DESCUBRIR</span>
              </div>
              <div className="absolute bottom-10 left-10 text-white group-hover:opacity-0 transition-opacity">
                 <h3 className="text-3xl font-black italic uppercase">Camisetas</h3>
              </div>
            </Link>

            {/* Sudaderas */}
            <Link href="/shop?category=Sudaderas" className="relative h-[80vh] group overflow-hidden bg-zinc-200">
              <img src="https://lh3.googleusercontent.com/sitesv/AG8ngQW0zg0K2lNae-LpvWGkabTCmtDZn-hYOUtO7yz0EjCAu9TDyByNbhawllM9OW8KGlXUrgJbGVnPvAm5HZpBh2zjHIdApv6zPFv5SHovo57XpHJNu5rIsQIfhNMwiqY3Kvq70ubBZSvGKdJQbnJD85yMIObMyEAs9LIy8Je6jzgjSVULBY9VXxGycVZ4EqCLRc6h-9bgCCXsm3tbJh5QLEJOIzGdz7KvgI-BRDA9=w1280" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Sudaderas" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-8xl font-black italic tracking-tighter uppercase">HOODS</span>
                <span className="text-[10px] font-black tracking-[0.5em] mt-4">DESCUBRIR</span>
              </div>
              <div className="absolute bottom-10 left-10 text-white group-hover:opacity-0 transition-opacity">
                 <h3 className="text-3xl font-black italic uppercase">Sudaderas</h3>
              </div>
            </Link>

            {/* Accesorios */}
            <Link href="/shop?category=Accesorios" className="relative h-[80vh] group overflow-hidden bg-zinc-200">
              <img src="https://lh3.googleusercontent.com/sitesv/AG8ngQXc8Cyv-wLt9Be5AW_QPRh0TISafJfgcqSHKfUGgEK78Qi07kX9V688xFHRLXwSvkB-CldDMEaRRZfr3UkLk1YYNjybB5T_XjVmfAQQ3vfu7hDGltHAgCCbXhAvZ4NWOiRqDV7U4G0GhUhmClZKHNwPV5yEGWTihZ4k6rqNabYYflBnp9pqU7_7nWaVBtw15qY1U-Q6jnRAsJTyoKTkT446Qcc4FsO-_cOqmpRO=w1280" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Accesorios" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-8xl font-black italic tracking-tighter uppercase">EXTRA</span>
                <span className="text-[10px] font-black tracking-[0.5em] mt-4">DESCUBRIR</span>
              </div>
              <div className="absolute bottom-10 left-10 text-white group-hover:opacity-0 transition-opacity">
                 <h3 className="text-3xl font-black italic uppercase">Accesorios</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM QUALITY BAR */}
      <section className="bg-black text-white py-20 overflow-hidden">
        <div className="flex space-x-20 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex items-center space-x-20">
               <span className="text-6xl font-black italic tracking-tighter uppercase outline-text">PRINTIFY QUALITY</span>
               <span className="text-6xl font-black italic tracking-tighter uppercase">NEW IDENTITY</span>
               <span className="text-6xl font-black italic tracking-tighter uppercase outline-text">URBAN STYLE</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER / CALL TO ACTION */}
      <footer className="bg-white py-32 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-10">¿Listo para cambiar tu identidad?</h2>
           <Link href="/shop" className="inline-block bg-black text-white px-20 py-8 text-sm font-black tracking-widest hover:bg-zinc-800 transition-all">
             COMPRAR AHORA
           </Link>
           
           <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-20 border-t border-zinc-100">
             <div>
               <h4 className="font-black text-xs uppercase tracking-widest mb-6 italic">GZS WEAR</h4>
               <p className="text-zinc-400 text-sm italic font-light">Tienda oficial. Ropa urbana diseñada para conectar con tu esencia a través del minimalismo moderno.</p>
             </div>
             <div className="flex flex-col space-y-4">
               <h4 className="font-black text-xs uppercase tracking-widest mb-2 italic">Enlaces</h4>
               <Link href="/shop" className="text-sm font-bold hover:underline italic">Tienda</Link>
               <Link href="/shop?category=Camisetas" className="text-sm font-bold hover:underline italic">Camisetas</Link>
               <Link href="/shop?category=Sudaderas" className="text-sm font-bold hover:underline italic">Sudaderas</Link>
             </div>
             <div>
               <h4 className="font-black text-xs uppercase tracking-widest mb-6 italic">Soporte</h4>
               <p className="text-sm font-bold italic">info@gazetastudio.com</p>
               <div className="flex space-x-6 mt-6">
                 {/* Social Icons Placeholder */}
                 <span className="w-5 h-5 bg-zinc-200 rounded-full" />
                 <span className="w-5 h-5 bg-zinc-200 rounded-full" />
               </div>
             </div>
           </div>
        </div>
      </footer>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
