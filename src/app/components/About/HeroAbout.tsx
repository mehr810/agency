"use client"
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["100", "400", "700"] });

export default function HeroAbout() {
return(
<section className={` ${inter.className} py-12 md:py-24 text-center overflow-hidden relative`}>
        {/* Infinite marquee for all screen sizes */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex whitespace-nowrap
      [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
    "
          >
            {/* Duplicate text for smooth looping */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-[200px] font-bold px-4 md:px-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              . About Us . &nbsp; . About Us . &nbsp; . About Us . &nbsp;
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-6xl md:text-[200px] font-bold px-4 md:px-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              . About Us . &nbsp; . About Us . &nbsp; . About Us . &nbsp;
            </motion.h1>
          </motion.div>
        </div>
      </section>
)}