export default function Coleccion001() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="relative h-[60vh] bg-zinc-900 flex items-center justify-center text-white overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images-api.printify.com/mockup/6913318fb39f71909d05ca22/25454/98502/crewneck-sweatshirt-minimal-graphic-front-less-noise-more-you-back.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold tracking-tighter mb-4 italic">COLECCIÓN 001</h1>
          <p className="text-xl tracking-widest font-light">"IDENTITY & ESSENCE"</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-12 bg-gray-50 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">EL ORIGEN</h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestra primera colección se centra en los básicos elevados. Piezas que no gritan, sino que afirman. 
            Utilizamos tipografía minimalista y espacios en blanco para dar aire a tu identidad.
          </p>
        </div>
        <div className="aspect-square bg-gray-100">
           <img src="https://images-api.printify.com/mockup/6913462d7bdbd7caa7092190/33387/98424/question-mark-graphic-hoodie-cute-minimalist-logo-pullover.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
