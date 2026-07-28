"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/store/useCart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCart((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "TIENDA", href: "/shop" },
    { name: "CAMISETAS", href: "/shop?category=Camisetas" },
    { name: "SUDADERAS", href: "/shop?category=Sudaderas" },
    { name: "ACCESORIOS", href: "/shop?category=Accesorios" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled 
        ? "py-4 bg-black text-white shadow-2xl" 
        : "py-6 bg-transparent text-black"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
                <span className="italic">GZS</span>
                <span className="text-[10px] tracking-[0.5em] font-bold border-l border-current pl-2">WEAR</span>
              </Link>
            </div>

            {/* Links Center */}
            <div className="hidden lg:flex space-x-8 text-[10px] font-black tracking-widest">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`hover:opacity-50 transition-opacity ${scrolled ? 'text-white' : 'text-black'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions Right */}
            <div className="flex items-center space-x-6">
              <Link href="/cart" className="relative group p-2">
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className={`absolute top-0 right-0 text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse ${scrolled ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    {cartCount}
                  </span>
                )}
              </Link>

              <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[110] bg-black text-white transition-all duration-500 flex flex-col justify-center items-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-8 right-8 p-4" onClick={() => setIsOpen(false)}>
          <X className="w-10 h-10" />
        </button>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-4xl font-black italic tracking-tighter hover:text-zinc-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
