import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images-api.printify.com/mockup/691342b6b9eb0eb1960e0a70/116353/106706/wavy-crest-oversized-tee-olive-graphic-t-shirt-with-made-in-nature-vibe.jpg" 
            alt="GZS Wear Hero"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            GZS WEAR
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto italic">
            "No es solo ROPA con estilo propio, es tu NUEVA IDENTIDAD."
          </p>
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            VER COLECCIÓN <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">FILOSOFÍA GZS</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nacidos del deseo de simplificar el estilo sin perder la esencia. 
                Cada prenda es una declaración de intenciones. Minimalismo, calidad y propósito.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-black" />
                  <span className="text-sm font-medium uppercase tracking-widest">Aesthetic</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-black" />
                  <span className="text-sm font-medium uppercase tracking-widest">Consciente</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-black" />
                  <span className="text-sm font-medium uppercase tracking-widest">Identidad</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images-api.printify.com/mockup/69134c392401eb218001a07a/116421/109382/embroidered-gzs-wear-cuffed-beanie-black-knit-winter-hat.jpg" className="w-full aspect-square object-cover" alt="Product 1" />
              <img src="https://images-api.printify.com/mockup/6913477f977fe09de806df72/73207/98445/less-but-better-t-shirt-minimalist-graphic-tee.jpg" className="w-full aspect-square object-cover mt-8" alt="Product 2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
