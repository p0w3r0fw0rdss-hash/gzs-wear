export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  // CAMISETAS
  {
    id: '24769872',
    name: "The New Classic Retro Script Tee",
    price: 26.42,
    image: "https://images-api.printify.com/mockup/69133ec19b5bf9726f08f39e/12052/92570/graphic-tee-the-new-classic-retro-script-tee-with-pink-x-brushback.jpg",
    category: "Camisetas",
    description: "Graphic Tee — 'The New Classic' Retro Script Tee with Pink X Brushback"
  },
  {
    id: '24770590',
    name: "Less but Better T-Shirt",
    price: 27.63,
    image: "https://images-api.printify.com/mockup/6913477f977fe09de806df72/73207/98445/less-but-better-t-shirt-minimalist-graphic-tee.jpg",
    category: "Camisetas",
    description: "Less but Better T-Shirt — Minimalist Graphic Tee"
  },
  {
    id: '24751152',
    name: "Calm Is Confidence T-Shirt",
    price: 27.63,
    image: "https://images-api.printify.com/mockup/69124c1f386d9ee60c0fa8fb/73204/98445/minimalist-calm-is-confidence-graphic-t-shirt.jpg",
    category: "Camisetas",
    description: "Minimalist 'Calm Is Confidence' Graphic T-Shirt"
  },
  {
    id: '24767870',
    name: "Focused • Present • Free T-Shirt",
    price: 27.63,
    image: "https://images-api.printify.com/mockup/691310677bdbd7caa70916fd/78993/98445/focused-present-free-t-shirt-minimalist-mindfulness-tee.jpg",
    category: "Camisetas",
    description: "Focused • Present • Free T-Shirt — Minimalist Mindfulness Tee"
  },
  {
    id: '24754851',
    name: "Wavy Crest Oversized Tee",
    price: 37.54,
    image: "https://images-api.printify.com/mockup/691342b6b9eb0eb1960e0a70/116353/106706/wavy-crest-oversized-tee-olive-graphic-t-shirt-with-made-in-nature-vibe.jpg",
    category: "Camisetas",
    description: "Oversized Tee — Minimal Floral Bar Graphic with 'Let’s Play' Backprint"
  },
  {
    id: '24768592',
    name: "Minimal Minded Oversize Tee",
    price: 37.54,
    image: "https://images-api.printify.com/mockup/69131dc26b1bda054f0f8546/116321/106706/minimal-minded-oversize-tee-minimal-graphic-pink-logo-t-shirt.jpg",
    category: "Camisetas",
    description: "Minimal Minded Oversize Tee — Minimal Graphic Pink Logo T-Shirt"
  },
  // SUDADERAS
  {
    id: '24768514',
    name: "Breathe Crewneck Sweatshirt",
    price: 34.00,
    image: "https://images-api.printify.com/mockup/69131bc0e759c2f72c069bf4/25447/98502/breathe-crewneck-sweatshirt-calm-pastel-pullover-for-relaxation-self-care.jpg",
    category: "Sudaderas",
    description: "Breathe Crewneck Sweatshirt — Calm Pastel Pullover for Relaxation & Self-Care"
  },
  {
    id: '24770505',
    name: "Question Mark Graphic Hoodie",
    price: 43.16,
    image: "https://images-api.printify.com/mockup/6913462d7bdbd7caa7092190/33387/98424/question-mark-graphic-hoodie-cute-minimalist-logo-pullover.jpg",
    category: "Sudaderas",
    description: "Question Mark Graphic Hoodie — Cute Minimalist ?! Logo Pullover"
  },
  {
    id: '24769225',
    name: "Less Noise Crewneck",
    price: 34.91,
    image: "https://images-api.printify.com/mockup/6913318fb39f71909d05ca22/25454/98502/crewneck-sweatshirt-minimal-graphic-front-less-noise-more-you-back.jpg",
    category: "Sudaderas",
    description: "Crewneck Sweatshirt — Minimal Graphic Front & 'Less Noise, More You' Back"
  },
  {
    id: '24752850',
    name: "GZS Minimal Logo Hoodie",
    price: 43.16,
    image: "https://images-api.printify.com/mockup/6912551555faf49d3a091b5d/33427/98424/gzs-minimal-logo-hoodie-neutral-streetwear-pullover.jpg",
    category: "Sudaderas",
    description: "GZS Minimal Logo Hoodie – Neutral Streetwear Pullover"
  },
  // ACCESORIOS
  {
    id: '24753431',
    name: "Presence Baseball Cap",
    price: 20.27,
    image: "https://images-api.printify.com/mockup/69125bfc121010a9800553cb/104280/53890/presence-embroidered-baseball-cap-minimal-script-dad-hat.jpg",
    category: "Accesorios",
    description: "Presence Embroidered Baseball Cap — Minimal Script Dad Hat"
  },
  {
    id: '24769147',
    name: "Balance Baseball Cap",
    price: 20.27,
    image: "https://images-api.printify.com/mockup/69132f5bb39f71909d05c9d3/82433/53890/balance-embroidered-baseball-cap-casual-low-profile-tan-hat-for-mindfulness-everyday-wear.jpg",
    category: "Accesorios",
    description: "Balance Embroidered Baseball Cap — Casual Low-Profile Tan Hat"
  },
  {
    id: '24770965',
    name: "GZS Wear Cuffed Beanie",
    price: 21.13,
    image: "https://images-api.printify.com/mockup/69134c392401eb218001a07a/116421/109382/embroidered-gzs-wear-cuffed-beanie-black-knit-winter-hat.jpg",
    category: "Accesorios",
    description: "Embroidered 'GZS Wear' Cuffed Beanie — Black Knit Winter Hat"
  },
  {
    id: '24769442',
    name: "Urban Calm Tote Bag",
    price: 17.69,
    image: "https://images-api.printify.com/mockup/691335960d6edaa51b0aafc5/103599/100877/urban-calm-brown-aop-tote-bag-minimalist-floral-star-graphic.jpg",
    category: "Accesorios",
    description: "Urban Calm Brown AOP Tote Bag — Minimalist Floral Star Graphic"
  }
];
