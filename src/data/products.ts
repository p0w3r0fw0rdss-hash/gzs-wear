export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  modelImage: string;
  description: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '24770965',
    name: "Embroidered 'GZS Wear' Cuffed Beanie",
    price: 21.13,
    image: "https://images-api.printify.com/mockup/69134c392401eb218001a07a/116421/109382/embroidered-gzs-wear-cuffed-beanie-black-knit-winter-hat.jpg",
    modelImage: "https://images-api.printify.com/mockup/69134c392401eb218001a07a/116421/109382/embroidered-gzs-wear-cuffed-beanie-black-knit-winter-hat.jpg",
    description: "Un gorro de punto negro minimalista con el bordado exclusivo de GZS Wear. Perfecto para un estilo urbano y sofisticado en invierno.",
    category: "Accesorios",
    features: ["Bordado de alta calidad", "Tejido suave y cálido", "Ajuste cómodo"]
  },
  {
    id: '24770590',
    name: "Less but Better T-Shirt",
    price: 27.63,
    image: "https://images-api.printify.com/mockup/6913477f977fe09de806df72/73207/98445/less-but-better-t-shirt-minimalist-graphic-tee.jpg",
    modelImage: "https://images-api.printify.com/mockup/6913477f977fe09de806df72/73207/98445/less-but-better-t-shirt-minimalist-graphic-tee.jpg",
    description: "Inspirada en el diseño funcional, esta camiseta proclama que menos es más. Algodón premium y corte moderno.",
    category: "Camisetas",
    features: ["100% Algodón", "Corte Unisex", "Diseño Minimalista"]
  },
  {
    id: '24770505',
    name: "Question Mark Graphic Hoodie",
    price: 43.16,
    image: "https://images-api.printify.com/mockup/6913462d7bdbd7caa7092190/33387/98424/question-mark-graphic-hoodie-cute-minimalist-logo-pullover.jpg",
    modelImage: "https://images-api.printify.com/mockup/6913462d7bdbd7caa7092190/33387/98424/question-mark-graphic-hoodie-cute-minimalist-logo-pullover.jpg",
    description: "Sudadera con capucha y el logo icónico de la marca. Comodidad absoluta sin comprometer el estilo.",
    category: "Sudaderas",
    features: ["Forro polar suave", "Capucha ajustable", "Bolsillo canguro"]
  },
  {
    id: '24770136',
    name: "Wavy Crest Oversized Tee",
    price: 37.54,
    image: "https://images-api.printify.com/mockup/691342b6b9eb0eb1960e0a70/116353/106706/wavy-crest-oversized-tee-olive-graphic-t-shirt-with-made-in-nature-vibe.jpg",
    modelImage: "https://images-api.printify.com/mockup/691342b6b9eb0eb1960e0a70/116353/106706/wavy-crest-oversized-tee-olive-graphic-t-shirt-with-made-in-nature-vibe.jpg",
    description: "Camiseta de corte oversized en color oliva. Estilo relajado con un gráfico inspirado en la naturaleza.",
    category: "Camisetas",
    features: ["Ajuste Oversized", "Color oliva tendencia", "Tacto premium"]
  },
  {
    id: '24769872',
    name: "The New Classic Retro Script Tee",
    price: 26.42,
    image: "https://images-api.printify.com/mockup/69133ec19b5bf9726f08f39e/12052/92570/graphic-tee-the-new-classic-retro-script-tee-with-pink-x-brushback.jpg",
    modelImage: "https://images-api.printify.com/mockup/69133ec19b5bf9726f08f39e/12052/92570/graphic-tee-the-new-classic-retro-script-tee-with-pink-x-brushback.jpg",
    description: "Un clásico renovado. Tipografía retro con un toque moderno en color rosa.",
    category: "Camisetas",
    features: ["Estampado duradero", "Suave al tacto", "Cuello redondo reforzado"]
  },
  {
    id: '24769442',
    name: "Urban Calm Tote Bag",
    price: 17.69,
    image: "https://images-api.printify.com/mockup/691335960d6edaa51b0aafc5/103599/100877/urban-calm-brown-aop-tote-bag-minimalist-floral-star-graphic.jpg",
    modelImage: "https://images-api.printify.com/mockup/691335960d6edaa51b0aafc5/103599/100877/urban-calm-brown-aop-tote-bag-minimalist-floral-star-graphic.jpg",
    description: "Bolsa de tela marrón con diseño floral minimalista. El accesorio perfecto para tu día a día.",
    category: "Accesorios",
    features: ["Gran capacidad", "Costuras reforzadas", "Estética Urban Calm"]
  },
  {
    id: '24769225',
    name: "Less Noise Sweatshirt",
    price: 34.91,
    image: "https://images-api.printify.com/mockup/6913318fb39f71909d05ca22/25454/98502/crewneck-sweatshirt-minimal-graphic-front-less-noise-more-you-back.jpg",
    modelImage: "https://images-api.printify.com/mockup/6913318fb39f71909d05ca22/25454/98502/crewneck-sweatshirt-minimal-graphic-front-less-noise-more-you-back.jpg",
    description: "Menos ruido, más tú. Una sudadera que habla por sí sola a través de su minimalismo.",
    category: "Sudaderas",
    features: ["Interior cepillado", "Puños elásticos", "Gráfico en la espalda"]
  },
  {
    id: '24769147',
    name: "Balance Baseball Cap",
    price: 20.27,
    image: "https://images-api.printify.com/mockup/69132f5bb39f71909d05c9d3/82433/53890/balance-embroidered-baseball-cap-casual-low-profile-tan-hat-for-mindfulness-everyday-wear.jpg",
    modelImage: "https://images-api.printify.com/mockup/69132f5bb39f71909d05c9d3/82433/53890/balance-embroidered-baseball-cap-casual-low-profile-tan-hat-for-mindfulness-everyday-wear.jpg",
    description: "Gorra bordada de perfil bajo. Encuentra el equilibrio en tu estilo diario.",
    category: "Accesorios",
    features: ["Cierre ajustable", "100% Algodón", "Perfil bajo"]
  }
];
