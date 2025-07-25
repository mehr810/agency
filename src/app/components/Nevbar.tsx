"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const navItems = [
  { label: "01 About", href: "/about" },
  { label: "02 Services", href: "/services" },
  { label: "03 Clients", href: "/client" },
  { label: "04 Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const renderNavItem = (item: typeof navItems[0], index: number) => {
    const [number, ...textParts] = item.label.split(" ");
    const text = textParts.join(" ");

    return (
      <motion.div
        key={item.href}
        initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.1 + index * 0.05 }}
      >
        <Link
          href={item.href}
          className={cn(
            "block font-medium transition-all duration-200",
            isMobile
              ? "text-[38px] text-gray-600 hover:text-black"
              : "text-9xl text-gray-600 hover:text-black hover:scale-105"
          )}
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-4xl mr-1 opacity-60">{number}</span>
          {text}
        </Link>
      </motion.div>
    );
  };

  return (
    <div className={playfair.className}>
      {/* Main Navbar */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white",
          menuOpen ? "py-0 px-4 sm:px-6 md:px-12" : "py-1 px-4 sm:px-6 md:px-12"
        )}
      >
        <div className="flex items-center justify-between gap-6 sm:gap-4">
          <Link
            href="/"
            className={cn(
              "block transition-all duration-300",
              menuOpen ? "opacity-0" : "opacity-100",
              isMobile ? "w-14" : "w-18 sm:w-20"
            )}
          >
            <Image
              src="/logo-mighty-five.png"
              alt="Logo"
              width={100}
              height={83}
              className="object-contain h-auto w-full"
              priority
            />
          </Link>

          <button
            className="relative w-9 h-4 focus:outline-none z-50 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div
              className={cn(
                "absolute left-0 w-full h-[3px] bg-black transition-all duration-300",
                menuOpen ? "rotate-45 top-1/2" : "top-0"
              )}
            />
            <div
              className={cn(
                "absolute left-0 bg-black transition-all duration-300 origin-left h-[3px]",
                menuOpen
                  ? "-rotate-45 top-1/2 w-full"
                  : "bottom-0 w-5 group-hover:w-full"
              )}
            />
          </button>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-md bg-white/80 z-30"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              >
                <div className="text-6xl md:text-8xl font-bold text-black/20 whitespace-nowrap rotate-90">
                  WE LIKE DOING
                </div>
                <div className="text-6xl md:text-8xl font-bold text-black/20 whitespace-nowrap rotate-90 mt-4">
                  IMPOSSIBLE THINGS
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "fixed inset-0 z-40 pt-32 px-6",
                isMobile
                  ? "flex items-start justify-center"
                  : "flex items-center justify-end pr-24"
              )}
            >
              <div className="space-y-10 text-right gap-1 text-amber-300">
                {navItems.map(renderNavItem)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
