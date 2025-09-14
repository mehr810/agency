"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const navItems = [
  { label: "01 About", href: "/about" },
  { label: "02 Services", href: "/services" },
  { label: "03 Portfolio", href: "/portfolio" },
  { label: "04 Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | "initial">("initial");
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY) {
        setScrollDirection("down");
      } else if (current < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const renderNavItem = (item: typeof navItems[0], idx: number) => {
    const [num, ...words] = item.label.split(" ");
    const text = words.join(" ");
    return (
      <motion.div
        key={item.href}
        initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.1 + idx * 0.05 }}
      >
        <Link
          href={item.href}
          prefetch={true} // 👈 add this
          onMouseEnter={() => router.prefetch(item.href)} // 👈 triggers fetch on hover
          className={cn(
            "block font-medium transition-all duration-200",
            isMobile
              ? "text-[38px] text-gray-600 hover:text-black"
              : "text-8xl text-gray-600 hover:text-black hover:scale-105"
          )}
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-4xl mr-1 opacity-60">{num}</span>
          {text}
        </Link>
      </motion.div>
    );
  };

  const showNavbar = scrollDirection === "initial" || scrollDirection === "up" || menuOpen;

  return (
    <div className={playfair.className}>
      {/* Navbar */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out",
          menuOpen ? "bg-transparent" : "bg-white",
          "px-4 sm:px-6 md:px-12",
          showNavbar ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
        )}
        style={{ paddingTop: "5px", paddingBottom: "[-7px]px" }} // ↓ tighter padding here ↓
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "transition-opacity duration-300 pt-2",
              menuOpen ? "opacity-0" : "opacity-100",
              isMobile ? "w-[72px]" : "w-[90px] sm:w-[110px]"
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src="/logo-mighty-five.png"
                alt="Logo"
                width={120}
                height={100}
                className="object-contain h-auto w-full"
                priority
              />
            </motion.div>
          </Link>


          {/* Hamburger / X */}
          <button
            className="relative w-9 h-9 flex items-center justify-center focus:outline-none z-50 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <motion.span
              className="absolute bg-black rounded-sm"
              style={{ height: 3, width: 30 }}
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute bg-black rounded-sm"
              style={{ height: 3, width: 30 }}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute bg-black rounded-sm"
              style={{ height: 3, width: 30 }}
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
              transition={{ duration: 0.3 }}
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
              className="fixed inset-0 backdrop-blur-md bg-white/80 z-40"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
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
                "fixed inset-0 z-40 px-6 overflow-y-auto max-h-screen",
                isMobile
                  ? "pt-[90px] flex items-start justify-center"
                  : "pt-[90px] flex items-start justify-end pr-24"
              )}
            >
              <div className="space-y-10 text-right text-amber-300 pb-20 mt-10">
                {navItems.map(renderNavItem)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}