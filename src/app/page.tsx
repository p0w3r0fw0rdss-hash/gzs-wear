"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Globe, Zap, ShieldCheck, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. ULTRA HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl">
          <h1 className="text-[12vw] md:text-[15rem] font-black tracking-[-0.08em] text-white leading-[0.8] italic mb-12">
            GZS <br/> WEAR
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/90 mb-16 max-w-3xl mx-auto italic leading-tight">
            "No es solo ROPA con estilo propio, <br className="hidden md:block"/> es tu <span className="font-bold border-b-2 border-white">NUEVA IDENTIDAD</span>."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/shop" 
              className="group w-full sm:w-auto bg-white text-black px-16 py-8 text-sm font-black tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-4"
            >
              SHOP NOW <ShoppingBag className="w-4 h-4 group-hover:scale-125 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
           <ChevronDown className="text-white w-10 h-10 opacity-30" />
        </div>
      </section>

      {/* 2. FULL WIDTH BANNER - COLECCIÓN 001 */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="lg:w-1/2 space-y-12">
              <span className="text-xs font-black tracking-[0.5em] text-zinc-300 uppercase block">DROP 001 / VERANO 2026</span>
              <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">Identidad <br/> y Esencia.</h2>
              <p className="text-2xl text-zinc-500 font-light italic leading-relaxed">
                Diseñamos piezas que trascienden las tendencias. <br/> El minimalismo no es la ausencia de algo, es la presencia de lo esencial.
              </p>
              <div className="pt-10 flex gap-12">
                <div className="text-center">
                   <p className="text-4xl font-black italic">15+</p>
                   <p className="text-[10px] font-bold text-zinc-300 tracking-widest mt-2 uppercase">Productos</p>
                </div>
                <div className="text-center">
                   <p className="text-4xl font-black italic">100%</p>
                   <p className="text-[10px] font-bold text-zinc-300 tracking-widest mt-2 uppercase">Calidad</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <img src="https://images.unsplash.com/photo-1523381235312-3a1647fa9921?q=80&w=1000&auto=format&fit=crop" className="w-full aspect-square object-cover shadow-[40px_40px_0px_0px_rgba(0,0,0,0.05)]" alt="Style" />
               <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 hidden md:block">
                  <p className="text-2xl font-black italic tracking-tight">"GZS es el uniforme del mañana."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES WITH BACKGROUNDS (From Google Sites) */}
      <section className="bg-black py-10">
        {/* Camisetas Section */}
        <Link href="/shop?category=Camisetas" className="relative group block h-[80vh] overflow-hidden">
           <img src="https://lh3.googleusercontent.com/sitesv/AG8ngQX8XiGcvK5nK78x02wU7k9fQtJ-BLs0MJIQEX6ScDTjjA7IaYa7bS_SLzViGjwb5JNchZK1ZtyA8dLw3Vt29qxwavqYAQDSCFgjLtmir2H3ckuWwTWvXf2S5AmUthApTKViPYdc1YhF2NqAY_FLPPB1TCKFUGMqvg_6MuOwyO-NA7vCxOlgbzJKj-VWkBI2cEumgbpZ7S2utAbtThIS_4n1KhoEkk6JSY77_vPt=w1280" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" alt="Camisetas Background" />
           <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
           <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
              <span className="text-white text-xs font-black tracking-[1em] mb-4 uppercase opacity-60">CATEGORÍA 01</span>
              <h3 className="text-white text-7xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-none">CAMISETAS</h3>
              <div className="mt-12 bg-white text-black px-12 py-5 text-xs font-black tracking-widest opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                VER TODOS LOS MODELOS
              </div>
           </div>
        </Link>

        {/* Sudaderas Section */}
        <Link href="/shop?category=Sudaderas" className="relative group block h-[80vh] overflow-hidden border-y border-white/5">
           <img src="https://lh3.googleusercontent.com/sitesv/AG8ngQW0zg0K2lNae-LpvWGkabTCmtDZn-hYOUtO7yz0EjCAu9TDyByNbhawllM9OW8KGlXUrgJbGVnPvAm5HZpBh2zjHIdApv6zPFv5SHovo57XpHJNu5rIsQIfhNMwiqY3Kvq70ubBZSvGKdJQbnJD85yMIObMyEAs9LIy8Je6jzgjSVULBY9VXxGycVZ4EqCLRc6h-9bgCCXsm3tbJh5QLEJOIzGdz7KvgI-BRDA9=w1280" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" alt="Sudaderas Background" />
           <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
           <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
              <span className="text-white text-xs font-black tracking-[1em] mb-4 uppercase opacity-60">CATEGORÍA 02</span>
              <h3 className="text-white text-7xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-none">SUDADERAS</h3>
              <div className="mt-12 bg-white text-black px-12 py-5 text-xs font-black tracking-widest opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                VER TODOS LOS MODELOS
              </div>
           </div>
        </Link>

        {/* Accesorios Section */}
        <Link href="/shop?category=Accesorios" className="relative group block h-[80vh] overflow-hidden">
           <img src="https://lh3.googleusercontent.com/sitesv/AG8ngQXc8Cyv-wLt9Be5AW_QPRh0TISafJfgcqSHKfUGgEK78Qi07kX9V688xFHRLXwSvkB-CldDMEaRRZfr3UkLk1YYNjybB5T_XjVmfAQQ3vfu7hDGltHAgCCbXhAvZ4NWOiRqDV7U4G0GhUhmClZKHNwPV5yEGWTihZ4k6rqNabYYflBnp9pqU7_7nWaVBtw15qY1U-Q6jnRAsJTyoKTkT446Qcc4FsO-_cOqmpRO=w1280" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" alt="Accesorios Background" />
           <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
           <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
              <span className="text-white text-xs font-black tracking-[1em] mb-4 uppercase opacity-60">CATEGORÍA 03</span>
              <h3 className="text-white text-7xl md:text-[10rem] font-black italic tracking-tighter uppercase leading-none">EXTRAS</h3>
              <div className="mt-12 bg-white text-black px-12 py-5 text-xs font-black tracking-widest opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                VER TODOS LOS MODELOS
              </div>
           </div>
        </Link>
      </section>

      {/* 4. MARQUEE TEXT */}
      <section className="bg-white py-12 border-y border-black/5 overflow-hidden">
        <div className="flex space-x-20 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center space-x-20">
               <span className="text-8xl font-black italic tracking-tighter uppercase text-zinc-100">GZS WEAR®</span>
               <span className="text-8xl font-black italic tracking-tighter uppercase">NEW IDENTITY</span>
               <span className="text-8xl font-black italic tracking-tighter uppercase text-zinc-100">STREETWEAR</span>
               <span className="text-8xl font-black italic tracking-tighter uppercase">EST. 2026</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRUST BAR */}
      <section className="py-24 bg-white border-b border-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
           <div className="space-y-4 text-center md:text-left">
              <Globe className="w-8 h-8 mx-auto md:mx-0" />
              <h4 className="font-black text-xs tracking-widest uppercase">Envío Global</h4>
              <p className="text-zinc-400 text-xs italic">Desde el asfalto hasta tu puerta.</p>
           </div>
           <div className="space-y-4 text-center md:text-left">
              <Zap className="w-8 h-8 mx-auto md:mx-0" />
              <h4 className="font-black text-xs tracking-widest uppercase">Printify Direct</h4>
              <p className="text-zinc-400 text-xs italic">Producción bajo demanda consciente.</p>
           </div>
           <div className="space-y-4 text-center md:text-left">
              <ShieldCheck className="w-8 h-8 mx-auto md:mx-0" />
              <h4 className="font-black text-xs tracking-widest uppercase">Pago Seguro</h4>
              <p className="text-zinc-400 text-xs italic">Tu identidad protegida.</p>
           </div>
           <div className="space-y-4 text-center md:text-left">
              <ShoppingBag className="w-8 h-8 mx-auto md:mx-0" />
              <h4 className="font-black text-xs tracking-widest uppercase">Premium Fit</h4>
              <p className="text-zinc-400 text-xs italic">Cortes diseñados para destacar.</p>
           </div>
        </div>
      </section>

      {/* 6. NEWSLETTER CTA */}
      <section className="py-40 bg-zinc-50 px-6 overflow-hidden relative">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-10">Únete al DROP.</h2>
            <p className="text-xl text-zinc-400 mb-12 italic">Sé el primero en conocer los nuevos lanzamientos de GZS.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
               <input type="email" placeholder="TU EMAIL..." className="flex-grow bg-white border-2 border-zinc-100 px-8 py-5 text-xs font-black tracking-widest focus:outline-none focus:border-black transition-all" />
               <button className="bg-black text-white px-10 py-5 text-xs font-black tracking-widest hover:bg-zinc-800 transition-all">SUSCRIBIRSE</button>
            </div>
         </div>
         <div className="absolute top-0 right-0 text-[20rem] font-black italic text-zinc-100/50 leading-none -z-0 translate-x-1/2 -translate-y-1/2">GZS</div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
