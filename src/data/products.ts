export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '24770965',
    name: "Embroidered 'GZS Wear' Cuffed Beanie",
    price: 21.13,
    image: "https://images-api.printify.com/mockup/69134c392401eb218001a07a/116421/109382/embroidered-gzs-wear-cuffed-beanie-black-knit-winter-hat.jpg",
    description: "Minimalist black knit winter hat with GZS Wear embroidery.",
    category: "Accessories"
  },
  {
    id: '24770590',
    name: "Less but Better T-Shirt",
    price: 27.63,
    image: "https://images-api.printify.com/mockup/6913477f977fe09de806df72/73207/98445/less-but-better-t-shirt-minimalist-graphic-tee.jpg",
    description: "Minimalist graphic tee with 'Less but Better' slogan.",
    category: "T-Shirts"
  },
  {
    id: '24770505',
    name: "Question Mark Graphic Hoodie",
    price: 43.16,
    image: "https://images-api.printify.com/mockup/6913462d7bdbd7caa7092190/33387/98424/question-mark-graphic-hoodie-cute-minimalist-logo-pullover.jpg",
    description: "Cute minimalist ?! logo pullover hoodie.",
    category: "Hoodies"
  },
  {
    id: '24770136',
    name: "Wavy Crest Oversized Tee",
    price: 37.54,
    image: "https://images-api.printify.com/mockup/691342b6b9eb0eb1960e0a70/116353/106706/wavy-crest-oversized-tee-olive-graphic-t-shirt-with-made-in-nature-vibe.jpg",
    description: "Olive graphic t-shirt with 'Made in Nature' vibe.",
    category: "T-Shirts"
  },
  {
    id: '24769872',
    name: "The New Classic Retro Script Tee",
    price: 26.42,
    image: "https://images-api.printify.com/mockup/69133ec19b5bf9726f08f39e/12052/92570/graphic-tee-the-new-classic-retro-script-tee-with-pink-x-brushback.jpg",
    description: "Retro script tee with pink X brushback detail.",
    category: "T-Shirts"
  },
  {
    id: '24769442',
    name: "Urban Calm Brown AOP Tote Bag",
    price: 17.69,
    image: "https://images-api.printify.com/mockup/691335960d6edaa51b0aafc5/103599/100877/urban-calm-brown-aop-tote-bag-minimalist-floral-star-graphic.jpg",
    description: "Minimalist floral star graphic brown tote bag.",
    category: "Accessories"
  },
  {
    id: '24769225',
    name: "Less Noise, More You Sweatshirt",
    price: 34.91,
    image: "https://images-api.printify.com/mockup/6913318fb39f71909d05ca22/25454/98502/crewneck-sweatshirt-minimal-graphic-front-less-noise-more-you-back.jpg",
    description: "Minimal graphic front and 'Less Noise, More You' back print.",
    category: "Sweatshirts"
  },
  {
    id: '24769147',
    name: "Balance Embroidered Baseball Cap",
    price: 20.27,
    image: "https://images-api.printify.com/mockup/69132f5bb39f71909d05c9d3/82433/53890/balance-embroidered-baseball-cap-casual-low-profile-tan-hat-for-mindfulness-everyday-wear.jpg",
    description: "Casual low-profile tan hat for mindfulness.",
    category: "Accessories"
  }
];
