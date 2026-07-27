import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section - Identidad GZS */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images-api.printify.com/mockup/691342b6b9eb0eb1960e0a70/116353/106706/wavy-crest-oversized-tee-olive-graphic-t-shirt-with-made-in-nature-vibe.jpg" 
            alt="GZS Wear Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black italic">
            GZS WEAR
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-12 text-zinc-800 leading-relaxed italic">
            "No es solo ROPA con estilo propio,<br/>es tu NUEVA IDENTIDAD."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/shop" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-12 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all transform hover:scale-105"
            >
              VER COLECCIÓN <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías de la Colección 001 */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tighter italic text-center uppercase">Colección 001</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Camisetas */}
            <Link href="/shop?category=Camisetas" className="group relative aspect-[4/5] overflow-hidden bg-white shadow-xl">
              <img src="https://images-api.printify.com/mockup/6913477f977fe09de806df72/73207/98445/less-but-better-t-shirt-minimalist-graphic-tee.jpg" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="Camisetas" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold tracking-tighter italic uppercase">Camisetas</h3>
                <span className="text-xs tracking-[0.3em] font-bold">EXPLORAR</span>
              </div>
            </Link>

            {/* Sudaderas */}
            <Link href="/shop?category=Sudaderas" className="group relative aspect-[4/5] overflow-hidden bg-white shadow-xl">
              <img src="https://images-api.printify.com/mockup/6913462d7bdbd7caa7092190/33387/98424/question-mark-graphic-hoodie-cute-minimalist-logo-pullover.jpg" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="Sudaderas" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold tracking-tighter italic uppercase">Sudaderas</h3>
                <span className="text-xs tracking-[0.3em] font-bold">EXPLORAR</span>
              </div>
            </Link>

            {/* Accesorios */}
            <Link href="/shop?category=Accesorios" className="group relative aspect-[4/5] overflow-hidden bg-white shadow-xl">
              <img src="https://images-api.printify.com/mockup/69134c392401eb218001a07a/116421/109382/embroidered-gzs-wear-cuffed-beanie-black-knit-winter-hat.jpg" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="Accesorios" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-bold tracking-tighter italic uppercase">Accesorios</h3>
                <span className="text-xs tracking-[0.3em] font-bold">EXPLORAR</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Model Section (Urban Style) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
                alt="GZS Style" 
              />
              <div className="absolute -bottom-6 -right-6 bg-black text-white px-8 py-8 max-w-xs">
                 <p className="text-lg italic font-bold leading-tight">"LA ROPA NO TE HACE, TÚ HACES A LA ROPA."</p>
              </div>
            </div>
            
            <div>
              <span className="text-xs font-bold tracking-[0.5em] text-zinc-400 uppercase mb-4 block">Filosofía GZS</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter italic uppercase">Urban <br/> Essence.</h2>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed font-light italic">
                Nacidos en el entorno digital pero diseñados para el asfalto. GZS Wear representa la fusión entre el minimalismo estético y la durabilidad urbana. Cada producto de nuestra tienda oficial ha sido testeado para ofrecer una experiencia de identidad única.
              </p>
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-4 text-black font-bold text-lg border-b-2 border-black pb-2 hover:gap-8 transition-all"
              >
                COMPRAR TODA LA TIENDA <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
        </div>
      </section>
    </main>
  );
}
