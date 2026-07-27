"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/useCart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCart((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-aesthetic">
              GZS WEAR
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            <Link href="/" className="hover-underline">INICIO</Link>
            <Link href="/shop" className="hover-underline">TIENDA</Link>
            <Link href="/coleccion-001" className="hover-underline">COLECCIÓN 001</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4">
          <Link href="/" className="block text-lg" onClick={() => setIsOpen(false)}>INICIO</Link>
          <Link href="/shop" className="block text-lg" onClick={() => setIsOpen(false)}>TIENDA</Link>
          <Link href="/coleccion-001" className="block text-lg" onClick={() => setIsOpen(false)}>COLECCIÓN 001</Link>
        </div>
      )}
    </nav>
  );
}
