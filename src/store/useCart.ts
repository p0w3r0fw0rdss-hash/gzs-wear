import { create } from 'zustand';
import { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = currentItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ items: updatedItems, total: calculateTotal(updatedItems) });
    } else {
      const updatedItems = [...currentItems, { ...product, quantity: 1 }];
      set({ items: updatedItems, total: calculateTotal(updatedItems) });
    }
  },
  removeItem: (productId) => {
    const updatedItems = get().items.filter((item) => item.id !== productId);
    set({ items: updatedItems, total: calculateTotal(updatedItems) });
  },
  updateQuantity: (productId, quantity) => {
    const updatedItems = get().items.map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0);
    set({ items: updatedItems, total: calculateTotal(updatedItems) });
  },
  clearCart: () => set({ items: [], total: 0 }),
}));

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
