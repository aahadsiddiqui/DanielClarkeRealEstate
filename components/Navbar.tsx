"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "bg-midnight/90 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-3"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-32 h-16 md:w-40 md:h-20 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Daniel Clarke Real Estate"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="ml-auto flex items-center gap-8">
            <Link
              href="/about"
              className="text-gray-300 hover:text-gold transition-colors font-medium text-lg hidden md:block"
            >
              About
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group hidden md:block">
              <button className="text-gray-300 hover:text-gold transition-colors font-medium text-lg flex items-center gap-1">
                Resources
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-midnight/95 backdrop-blur-xl border border-gold/20 rounded-2xl shadow-2xl overflow-hidden">
                  <Link
                    href="/credit-score"
                    className="block px-6 py-4 text-gray-300 hover:text-gold hover:bg-white/5 transition-colors border-b border-white/10"
                  >
                    <div className="font-medium">Credit Score Impact</div>
                    <div className="text-xs text-gray-500 mt-1">Ontario property buying</div>
                  </Link>
                  <Link
                    href="/mortgage-calculator"
                    className="block px-6 py-4 text-gray-300 hover:text-gold hover:bg-white/5 transition-colors border-b border-white/10"
                  >
                    <div className="font-medium">Mortgage Calculator</div>
                    <div className="text-xs text-gray-500 mt-1">Calculate your payments</div>
                  </Link>
                  <Link
                    href="/costly-mistakes"
                    className="block px-6 py-4 text-gray-300 hover:text-gold hover:bg-white/5 transition-colors"
                  >
                    <div className="font-medium">5 Costly Mistakes</div>
                    <div className="text-xs text-gray-500 mt-1">Avoid common pitfalls</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-gray-300 hover:text-gold transition-colors font-medium text-lg hidden md:block"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/10 mt-4 bg-black"
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/5 transition-colors rounded-lg"
                >
                  About
                </Link>

                {/* Mobile Resources Submenu */}
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-gray-500 mb-2">Resources</div>
                  <div className="space-y-1 pl-4">
                    <Link
                      href="/credit-score"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-300 hover:text-gold transition-colors"
                    >
                      Credit Score Impact
                    </Link>
                    <Link
                      href="/mortgage-calculator"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-300 hover:text-gold transition-colors"
                    >
                      Mortgage Calculator
                    </Link>
                    <Link
                      href="/costly-mistakes"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-300 hover:text-gold transition-colors"
                    >
                      5 Costly Mistakes
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/5 transition-colors rounded-lg"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
