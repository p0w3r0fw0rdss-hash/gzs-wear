"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/store/useCart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCart((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-4 premium-blur text-white shadow-2xl" : "py-8 bg-transparent text-black"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Menu Desktop Left */}
          <div className="hidden lg:flex space-x-10 text-[10px] font-black tracking-[0.2em]">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.name} href={link.href} className="hover:opacity-50 transition-opacity">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo Central */}
          <div className="flex-shrink-0 text-center">
            <Link href="/" className="text-3xl font-black tracking-[-0.05em] flex flex-col leading-none">
              <span className="italic">GZS</span>
              <span className="text-[10px] tracking-[0.6em] ml-1">WEAR</span>
            </Link>
          </div>

          {/* Icons Right */}
          <div className="flex items-center space-x-6 lg:space-x-10">
            <div className="hidden lg:flex space-x-10 text-[10px] font-black tracking-[0.2em] mr-4">
               {navLinks.slice(2).map((link) => (
                <Link key={link.name} href={link.href} className="hover:opacity-50 transition-opacity">
                  {link.name}
                </Link>
              ))}
            </div>
            
            <button className="hover:opacity-50 transition-opacity hidden sm:block">
               <Search className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] bg-black text-white flex flex-col justify-center items-center space-y-8 animate-fade-in">
          <button className="absolute top-8 right-8" onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8" />
          </button>
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
      )}
    </nav>
  );
}
