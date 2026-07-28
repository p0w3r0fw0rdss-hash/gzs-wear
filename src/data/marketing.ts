import { products } from './products';

export const generateKeywords = (productName: string, category: string) => {
  const base = [
    'streetwear españa',
    'moda aesthetic',
    'comprar ropa urbana',
    'gzs wear oficial',
    'minimalist clothing brand',
    'urban style outfit',
    'ropa minimalista hombre mujer',
    'tienda online moda 2026'
  ];
  
  const productKeywords = [
    productName.toLowerCase(),
    `${category.toLowerCase()} aesthetic`,
    `${productName.toLowerCase()} comprar españa`,
    `mejor ${category.toLowerCase()} urbana`,
    `estilo ${productName.toLowerCase()}`
  ];

  return [...base, ...productKeywords].join(', ');
};

export const getSocialContent = (product: any) => {
  return {
    instagram: `🔥 NUEVO DROP: ${product.name}. La identidad que estabas buscando. \n\nMinimalismo puro para el asfalto. \n\n👉 Consíguelo en el link de la bio. \n\n#GZSWear #StreetwearSpain #AestheticOutfits #MinimalStyle #UrbanIdentity #ModaUrbana`,
    pinterest: `${product.name} - Streetwear Aesthetic 2026. El básico elevado que necesitas. Ideas de outfits urbanos minimalistas.`,
    twitter: `Menos es más. El nuevo ${product.name} ya está disponible en la web. 🏙️✨ \n\n🛒 https://p0w3r0fw0rdss-hash.github.io/gzs-wear/shop \n\n#Streetwear #GZSWear`
  };
};
