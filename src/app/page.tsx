import Link from "next/link";
import { ArrowRight, ShoppingBag, Zap, ShieldCheck, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Video/Hero Section Aesthetic */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop" 
            alt="Urban Style Model"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <span className="text-xs font-bold tracking-[0.5em] uppercase mb-4 block animate-fade-in">Est. 2026 — GZS Wear</span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 leading-none italic">
            URBAN <br/> IDENTITY
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto opacity-90 leading-relaxed italic">
            "No es solo ropa con estilo propio, es tu nueva identidad. Diseñada para aquellos que encuentran el orden en el caos urbano."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/shop" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              COMPRAR AHORA <ShoppingBag className="w-4 h-4" />
            </Link>
            <Link 
              href="/coleccion-001" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              COLECCIÓN 001
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 text-white/50 text-[10px] tracking-widest font-bold uppercase hidden md:flex">
          <span>Aesthetic</span>
          <div className="w-1 h-1 bg-white/50 rounded-full" />
          <span>Minimal</span>
          <div className="w-1 h-1 bg-white/50 rounded-full" />
          <span>Urban</span>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-center gap-3 text-white/70">
            <Globe className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Envío Global</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Pago Seguro</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <Zap className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Printify Direct</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <Zap className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Calidad Premium</span>
          </div>
        </div>
      </section>

      {/* Featured Model Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-black/5 rounded-full -z-10 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1529139513402-74829121ef51?q=80&w=1000&auto=format&fit=crop" 
                className="w-full aspect-[4/5] object-cover shadow-2xl" 
                alt="Urban Style Model Clothing" 
              />
              <div className="absolute bottom-8 right-8 bg-black text-white p-6 max-w-[200px]">
                <p className="text-sm font-bold italic">"La simplicidad es la máxima sofisticación."</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter italic">NEW URBAN ERA.</h2>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed font-light">
                Nuestra misión es redefinir el e-commerce de ropa urbana. No solo vendemos prendas, creamos una experiencia visual basada en el minimalismo y la identidad personal. Cada pieza de nuestra colección 001 ha sido seleccionada para ofrecer el máximo impacto con el mínimo ruido.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">Diseño Exclusivo</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">Fotografía de Autor</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">Print on Demand Ético</span>
                </div>
              </div>

              <Link 
                href="/shop" 
                className="inline-flex items-center gap-3 text-black font-bold border-b-2 border-black pb-2 hover:gap-6 transition-all"
              >
                EXPLORAR TIENDA <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Quote Section */}
      <section className="h-[60vh] relative flex items-center justify-center bg-zinc-100 overflow-hidden">
         <div className="text-center px-4 max-w-2xl relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 italic opacity-20">GZS WEAR</h3>
            <p className="text-2xl md:text-3xl font-light italic leading-tight">
               "Buscamos la armonía entre el asfalto y el estilo, entre lo efímero de la moda y lo eterno de la identidad."
            </p>
         </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-black text-white px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter italic">ÚNETE AL CLUB</h2>
          <p className="text-white/60 mb-8">Recibe noticias sobre nuevos lanzamientos y colecciones exclusivas.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Tu email..." 
              className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-3 focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              OK
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
