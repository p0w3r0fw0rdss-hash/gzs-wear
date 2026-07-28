export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  printifyUrl: string;
}

export const products: Product[] = [
  {
    id: '24769872',
    name: "The New Classic Retro Tee",
    price: 26.42,
    image: "https://images-api.printify.com/mockup/69133ec19b5bf9726f08f39e/12052/92570/graphic-tee-the-new-classic-retro-script-tee-with-pink-x-brushback.jpg",
    category: "Camisetas",
    description: "Graphic Tee — 'The New Classic' Retro Script Tee with Pink X Brushback",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24769872"
  },
  {
    id: '24770590',
    name: "Less but Better T-Shirt",
    price: 27.63,
    image: "https://images-api.printify.com/mockup/6913477f977fe09de806df72/73207/98445/less-but-better-t-shirt-minimalist-graphic-tee.jpg",
    category: "Camisetas",
    description: "Minimalist Graphic Tee for everyday wear.",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24770590"
  },
  {
    id: '24751152',
    name: "Calm Is Confidence T-Shirt",
    price: 27.63,
    image: "https://images-api.printify.com/mockup/69124c1f386d9ee60c0fa8fb/73204/98445/minimalist-calm-is-confidence-graphic-t-shirt.jpg",
    category: "Camisetas",
    description: "Confidence in every thread.",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24751152"
  },
  {
    id: '24770505',
    name: "Question Mark Hoodie",
    price: 43.16,
    image: "https://images-api.printify.com/mockup/6913462d7bdbd7caa7092190/33387/98424/question-mark-graphic-hoodie-cute-minimalist-logo-pullover.jpg",
    category: "Sudaderas",
    description: "Minimalist logo pullover hoodie.",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24770505"
  },
  {
    id: '24769225',
    name: "Less Noise Crewneck",
    price: 34.91,
    image: "https://images-api.printify.com/mockup/6913318fb39f71909d05ca22/25454/98502/crewneck-sweatshirt-minimal-graphic-front-less-noise-more-you-back.jpg",
    category: "Sudaderas",
    description: "Less noise, more of you.",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24769225"
  },
  {
    id: '24770965',
    name: "GZS Wear Cuffed Beanie",
    price: 21.13,
    image: "https://images-api.printify.com/mockup/69134c392401eb218001a07a/116421/109382/embroidered-gzs-wear-cuffed-beanie-black-knit-winter-hat.jpg",
    category: "Accesorios",
    description: "Warmth with identity.",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24770965"
  },
  {
    id: '24769147',
    name: "Balance Baseball Cap",
    price: 20.27,
    image: "https://images-api.printify.com/mockup/69132f5bb39f71909d05c9d3/82433/53890/balance-embroidered-baseball-cap-casual-low-profile-tan-hat-for-mindfulness-everyday-wear.jpg",
    category: "Accesorios",
    description: "Find your balance.",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24769147"
  },
  {
    id: '24769442',
    name: "Urban Calm Tote Bag",
    price: 17.69,
    image: "https://images-api.printify.com/mockup/691335960d6edaa51b0aafc5/103599/100877/urban-calm-brown-aop-tote-bag-minimalist-floral-star-graphic.jpg",
    category: "Accesorios",
    description: "Carry your identity everywhere.",
    printifyUrl: "https://shop-gzswear.gazetastudio.com/product/24769442"
  }
];
