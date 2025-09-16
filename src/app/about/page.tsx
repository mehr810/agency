/* eslint-disable */
"use client";

import Image from "next/image";
import { FC } from "react";
import AnimatedTeamProfiles from "../components/AnimatedTeamProfiles";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'], // whatever weights you want
  variable: '--font-inter',
});



const AboutPage: FC = () => {
  return (
    <main className={`${inter.className}  text-gray-900 relative`}>

      {/* HERO */}
      <section className="py-12 md:py-24 text-center overflow-hidden relative">
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



      {/* INTRO + MISSION */}
      <section className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 md:pl-15 gap-8 md:gap-[60px] py-5 md:py-5 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}          // when page first loads
          animate={{ opacity: 1, y: 0 }}           // fade in on load
          transition={{ duration: 1, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}       // fade in on scroll into view
          viewport={{ once: false, amount: 0.3 }}  // triggers again when re-scrolled into view
          className="md:sticky md:top-24"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-7">
            Elevating brands through digital marketing.
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            At <span className="font-bold">Mighty Five Agency,</span> we don’t
            just run campaigns — we create digital strategies that inspire,
            engage, and convert. We believe impactful marketing starts with
            meaningful insights. That’s why we work closely with our clients to
            understand their vision, goals, and audience, ensuring every campaign
            delivers measurable results.
          </p>
          <AnimatedTeamProfiles />
        </motion.div>
        {/* RIGHT CARDS */}
        <div className="relative flex flex-col gap-20">
          {[
            {
              title: "Our Mission",
              text: "To help brands shine online, tell their story effectively, and achieve measurable success through smart strategies and innovative digital marketing.",
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.6753 5.71869L40.3292 5.42542L43.5551 2.19948C43.8484 1.90622 43.995 1.58851 43.995 1.24637C43.995 0.904221 43.8728 0.610954 43.6284 0.366566C43.384 0.122177 43.0908 -1.52588e-05 42.7486 -1.52588e-05C42.4065 -1.52588e-05 42.0888 0.146618 41.7955 0.439884L38.5696 3.66582L38.2763 1.31968C38.2763 0.830906 38.0075 0.488762 37.4698 0.293251C36.9322 0.0977402 36.4678 0.195496 36.0768 0.586517L29.9182 6.74512C26.79 4.98552 23.4663 4.10572 19.9471 4.10572C17.3077 4.10572 14.7661 4.61893 12.3222 5.64537C9.87832 6.6718 7.72769 8.1137 5.87034 9.97105C4.01298 11.8284 2.57109 13.979 1.54466 16.4229C0.518222 18.8668 0.00500488 21.4085 0.00500488 24.0479C0.00500488 26.6873 0.518222 29.2289 1.54466 31.6728C2.57109 34.1167 4.01298 36.2673 5.87034 38.1247C7.72769 39.982 9.87832 41.4239 12.3222 42.4503C14.7661 43.4768 17.3077 43.99 19.9471 43.99C22.5865 43.99 25.1282 43.4768 27.5721 42.4503C30.016 41.4239 32.1666 39.982 34.0239 38.1247C35.8813 36.2673 37.3232 34.1167 38.3496 31.6728C39.3761 29.2289 39.8893 26.6873 39.8893 24.0479C39.8893 20.5287 39.0095 17.205 37.2499 14.0768L43.4085 7.91819C43.7995 7.52716 43.8973 7.06282 43.7017 6.52517C43.5062 5.98751 43.1641 5.71869 42.6753 5.71869ZM23.3197 24.0479C23.3197 25.0254 23.002 25.8563 22.3666 26.5406C21.7312 27.2249 20.9247 27.5671 19.9471 27.5671C18.9696 27.5671 18.1387 27.2249 17.4544 26.5406C16.7701 25.8563 16.4279 25.0254 16.4279 24.0479C16.4279 23.0703 16.7701 22.2638 17.4544 21.6284C18.1387 20.993 18.9696 20.6753 19.9471 20.6753C20.4359 20.6753 20.8758 20.773 21.2668 20.9686L19.0673 23.1681C18.7741 23.3636 18.6274 23.6568 18.6274 24.0479C18.6274 24.4389 18.7496 24.7566 18.994 25.001C19.2384 25.2454 19.5561 25.3676 19.9471 25.3676C20.3382 25.3676 20.6314 25.2209 20.8269 24.9277L23.0264 22.7282C23.222 23.1192 23.3197 23.5591 23.3197 24.0479ZM23.1731 19.0623C22.1955 18.378 21.1202 18.0359 19.9471 18.0359C18.2853 18.0359 16.8678 18.6224 15.6948 19.7955C14.5217 20.9686 13.9352 22.386 13.9352 24.0479C13.9352 25.7097 14.5217 27.1272 15.6948 28.3002C16.8678 29.4733 18.2853 30.0598 19.9471 30.0598C21.609 30.0598 23.0264 29.4733 24.1995 28.3002C25.3726 27.1272 25.9591 25.7097 25.9591 24.0479C25.9591 22.8748 25.617 21.7995 24.9327 20.8219L28.1586 17.7426C29.6249 19.6 30.3581 21.7017 30.3581 24.0479C30.3581 25.9052 29.8938 27.6404 28.9651 29.2533C28.0364 30.8663 26.7656 32.1371 25.1526 33.0658C23.5397 33.9945 21.8045 34.4588 19.9471 34.4588C18.0898 34.4588 16.3546 33.9945 14.7417 33.0658C13.1287 32.1371 11.8579 30.8663 10.9292 29.2533C10.0005 27.6404 9.53617 25.9052 9.53617 24.0479C9.53617 22.1905 10.0005 20.4553 10.9292 18.8424C11.8579 17.2294 13.1287 15.9586 14.7417 15.0299C16.3546 14.1012 18.0898 13.6369 19.9471 13.6369C22.2933 13.6369 24.395 14.3701 26.2524 15.8364L23.1731 19.0623ZM19.9471 41.3506C16.819 41.3506 13.9107 40.593 11.2225 39.0778C8.53418 37.5626 6.43243 35.4608 4.91722 32.7725C3.40201 30.0843 2.64441 27.176 2.64441 24.0479C2.64441 20.9197 3.40201 18.0359 4.91722 15.3965C6.43243 12.7571 8.53418 10.6553 11.2225 9.09125C13.9107 7.52716 16.8434 6.74512 20.0205 6.74512C23.1975 6.74512 26.2035 7.57604 29.0384 9.23788L29.3317 12.7571L28.1586 14.0768C25.7147 12.1217 22.9776 11.1441 19.9471 11.1441C17.601 11.1441 15.4259 11.7062 13.422 12.8304C11.418 13.9546 9.82944 15.5187 8.65637 17.5227C7.48331 19.5267 6.89677 21.7017 6.89677 24.0479C6.89677 26.394 7.48331 28.569 8.65637 30.573C9.82944 32.577 11.418 34.1656 13.422 35.3386C15.4259 36.5117 17.601 37.0982 19.9471 37.0982C22.2933 37.0982 24.4683 36.5117 26.4723 35.3386C28.4763 34.1656 30.0404 32.577 31.1646 30.573C32.2888 28.569 32.8509 26.394 32.8509 24.0479C32.8509 21.0174 31.8733 18.2803 29.9182 15.8364L31.2379 14.6633L34.7571 14.9566C36.419 17.7915 37.2499 20.7975 37.2499 23.9745C37.2499 27.1516 36.4678 30.0843 34.9037 32.7725C33.3397 35.4608 31.2379 37.5626 28.5985 39.0778C25.9591 40.593 23.0753 41.3506 19.9471 41.3506ZM35.197 12.4638L31.8244 12.1706L31.5312 8.79799L36.0768 4.25235L36.2234 6.59848C36.3212 6.89175 36.4678 7.13614 36.6633 7.33165C36.8589 7.52716 37.1032 7.67379 37.3965 7.77155L39.7426 7.91819L35.197 12.4638Z" fill="#FFDE21" />
                </svg>

              ),
            },
            {
              title: "Our Vision",
              text: "To inspire innovation through strategy, technology, and storytelling — making every digital interaction impactful and results-driven.",
              icon: (
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9.88462C17.8943 9.88462 13.9841 10.9355 10.2693 13.0372C6.55463 15.139 3.23094 18.0961 0.298272 21.9086C0.10276 22.2018 0.00500488 22.544 0.00500488 22.935C0.00500488 23.326 0.10276 23.6682 0.298272 23.9614C3.23094 27.7739 6.55463 30.731 10.2693 32.8327C13.9841 34.9345 17.8943 35.9854 22 35.9854C26.1057 35.9854 30.016 34.9345 33.7307 32.8327C37.4454 30.731 40.7691 27.7739 43.7017 23.9614C43.8973 23.6682 43.995 23.326 43.995 22.935C43.995 22.544 43.8973 22.2018 43.7017 21.9086C40.7691 18.0961 37.4454 15.139 33.7307 13.0372C30.016 10.9355 26.1057 9.88462 22 9.88462ZM22.5865 32.1729C20.7292 32.2706 19.0429 31.8796 17.5277 30.9998C16.0125 30.12 14.815 28.9225 13.9352 27.4073C13.0554 25.8921 12.6644 24.2058 12.7621 22.3485C12.9576 20.0023 13.8619 18.0228 15.4748 16.4098C17.0878 14.7968 19.0673 13.8926 21.4135 13.6971C23.2708 13.5993 24.9571 13.9904 26.4723 14.8701C27.9875 15.75 29.185 16.9475 30.0648 18.4627C30.9446 19.9779 31.3357 21.6642 31.2379 23.5215C31.0424 25.8677 30.1382 27.8472 28.5252 29.4602C26.9122 31.0731 24.9327 31.9774 22.5865 32.1729ZM22.2933 27.9205C20.8269 28.0183 19.5561 27.5295 18.4808 26.4542C17.4055 25.3789 16.9167 24.1081 17.0145 22.6417C17.1122 21.3709 17.601 20.2956 18.4808 19.4158C19.3606 18.536 20.4359 18.0472 21.7067 17.9495C23.1731 17.8517 24.4439 18.3405 25.5192 19.4158C26.5945 20.4911 27.0833 21.7619 26.9855 23.2283C26.8878 24.4991 26.399 25.5744 25.5192 26.4542C24.6394 27.334 23.5641 27.8228 22.2933 27.9205Z" fill="#FFDE21" />
                </svg>


              ),
            },
            {
              title: "Collaborate with Us",
              text: "Let’s build something extraordinary — from impactful campaigns to data-driven, innovative digital experiences.",
              icon: (
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.2526 6.15857C26.2526 4.9855 25.8371 3.98351 25.0062 3.15258C24.1752 2.32166 23.1733 1.9062 22.0002 1.9062C20.8271 1.9062 19.8496 2.32166 19.0675 3.15258C18.2855 3.98351 17.8945 4.9855 17.8945 6.15857C17.8945 7.33163 18.2855 8.30919 19.0675 9.09124C19.8496 9.87328 20.8271 10.2643 22.0002 10.2643C23.1733 10.2643 24.1752 9.87328 25.0062 9.09124C25.8371 8.30919 26.2526 7.33163 26.2526 6.15857ZM22.0002 8.21144C21.4137 8.21144 20.9249 8.01593 20.5339 7.6249C20.1428 7.23388 19.9473 6.7451 19.9473 6.15857C19.9473 5.57204 20.1428 5.05882 20.5339 4.61892C20.9249 4.17902 21.4137 3.95907 22.0002 3.95907C22.5867 3.95907 23.0999 4.17902 23.5398 4.61892C23.9797 5.05882 24.1997 5.57204 24.1997 6.15857C24.1997 6.7451 23.9797 7.23388 23.5398 7.6249C23.0999 8.01593 22.5867 8.21144 22.0002 8.21144ZM30.3583 31.2329H42.9688C42.9688 29.4733 42.3578 27.9825 41.1358 26.7606C39.9139 25.5386 38.4231 24.9276 36.6635 24.9276C34.9039 24.9276 33.4131 25.5386 32.1912 26.7606C30.9693 27.9825 30.3583 29.4733 30.3583 31.2329ZM36.6635 27.1271C37.4456 27.1271 38.1543 27.2982 38.7897 27.6404C39.4251 27.9825 39.9383 28.4957 40.3294 29.18H32.9977C33.3887 28.4957 33.9019 27.9825 34.5373 27.6404C35.1727 27.2982 35.8815 27.1271 36.6635 27.1271ZM40.9159 20.8219C40.9159 19.6488 40.5004 18.6468 39.6695 17.8159C38.8386 16.985 37.8366 16.5695 36.6635 16.5695C35.4905 16.5695 34.5129 16.985 33.7309 17.8159C32.9488 18.6468 32.5578 19.6488 32.5578 20.8219C32.5578 21.1152 32.5578 21.4573 32.5578 21.8483H23.0266V16.5695H28.3054C28.3054 14.8099 27.6944 13.3192 26.4725 12.0972C25.2506 10.8753 23.7598 10.2643 22.0002 10.2643C20.2406 10.2643 18.7498 10.8753 17.5279 12.0972C16.3059 13.3192 15.695 14.8099 15.695 16.5695H20.9738V21.8483H11.4426C11.4426 21.4573 11.4426 21.1152 11.4426 20.8219C11.4426 19.6488 11.0516 18.6468 10.2695 17.8159C9.48747 16.985 8.50992 16.5695 7.33685 16.5695C6.16378 16.5695 5.16179 16.985 4.33087 17.8159C3.49994 18.6468 3.08448 19.6488 3.08448 20.8219C3.08448 21.995 3.49994 22.9725 4.33087 23.7546C5.16179 24.5366 6.13934 24.9276 7.26353 24.9276C8.38772 24.9276 9.34084 24.5855 10.1229 23.9012H20.9738V29.3266C20.094 29.5221 19.3608 29.9865 18.7743 30.7197C18.1877 31.4528 17.8945 32.3571 17.8945 33.4324C17.8945 34.5077 18.2855 35.4608 19.0675 36.2917C19.8496 37.1226 20.8271 37.5381 22.0002 37.5381C23.1733 37.5381 24.1752 37.1226 25.0062 36.2917C25.8371 35.4608 26.2526 34.5077 26.2526 33.4324C26.2526 32.3571 25.9593 31.4528 25.3728 30.7197C24.7862 29.9865 24.0042 29.5221 23.0266 29.3266V23.9012H33.8775C34.6595 24.5855 35.6126 24.9276 36.7368 24.9276C37.861 24.9276 38.8386 24.5366 39.6695 23.7546C40.5004 22.9725 40.9159 21.995 40.9159 20.8219ZM18.3344 14.5167C18.7254 13.8324 19.2386 13.3192 19.874 12.977C20.5094 12.6349 21.2181 12.4638 22.0002 12.4638C22.7822 12.4638 23.491 12.6349 24.1264 12.977C24.7618 13.3192 25.275 13.8324 25.666 14.5167H20.9738H18.3344ZM7.33685 22.8748C6.75032 22.8748 6.26154 22.6793 5.87052 22.2882C5.47949 21.8972 5.28398 21.4084 5.28398 20.8219C5.28398 20.2354 5.47949 19.7222 5.87052 19.2823C6.26154 18.8424 6.75032 18.6224 7.33685 18.6224C7.92338 18.6224 8.41216 18.8424 8.80318 19.2823C9.19421 19.7222 9.38972 20.2354 9.38972 20.8219C9.38972 21.4084 9.19421 21.8972 8.80318 22.2882C8.41216 22.6793 7.92338 22.8748 7.33685 22.8748ZM24.0531 33.2857C24.0531 33.8723 23.8575 34.3855 23.4665 34.8254C23.0755 35.2653 22.5867 35.4852 22.0002 35.4852C21.4137 35.4852 20.9249 35.2653 20.5339 34.8254C20.1428 34.3855 19.9473 33.8967 19.9473 33.3591C19.9473 32.8214 20.1184 32.3571 20.4605 31.966C20.8027 31.575 21.2181 31.3306 21.7069 31.2329H22.2935C22.7822 31.3306 23.1977 31.575 23.5398 31.966C23.882 32.3571 24.0531 32.797 24.0531 33.2857ZM34.6107 20.8219C34.6107 20.2354 34.8062 19.7222 35.1972 19.2823C35.5882 18.8424 36.077 18.6224 36.6635 18.6224C37.2501 18.6224 37.7388 18.8424 38.1299 19.2823C38.5209 19.7222 38.7164 20.2354 38.7164 20.8219C38.7164 21.4084 38.5209 21.8972 38.1299 22.2882C37.7388 22.6793 37.2501 22.8748 36.6635 22.8748C36.077 22.8748 35.5882 22.6793 35.1972 22.2882C34.8062 21.8972 34.6107 21.4084 34.6107 20.8219ZM15.695 43.8433H28.3054C28.3054 42.0837 27.6944 40.593 26.4725 39.371C25.2506 38.1491 23.7598 37.5381 22.0002 37.5381C20.2406 37.5381 18.7498 38.1491 17.5279 39.371C16.3059 40.593 15.695 42.0837 15.695 43.8433ZM22.0002 39.591C22.7822 39.591 23.491 39.7865 24.1264 40.1775C24.7618 40.5685 25.275 41.1062 25.666 41.7905H18.3344C18.7254 41.1062 19.2386 40.5685 19.874 40.1775C20.5094 39.7865 21.2181 39.591 22.0002 39.591ZM1.03162 31.2329H13.6421C13.6421 29.4733 13.0311 27.9825 11.8092 26.7606C10.5872 25.5386 9.09645 24.9276 7.33685 24.9276C5.57725 24.9276 4.08648 25.5386 2.86453 26.7606C1.64259 27.9825 1.03162 29.4733 1.03162 31.2329ZM7.33685 27.1271C8.11889 27.1271 8.82762 27.2982 9.46303 27.6404C10.0984 27.9825 10.6117 28.4957 11.0027 29.18H3.67102C4.06204 28.4957 4.57526 27.9825 5.21067 27.6404C5.84608 27.2982 6.55481 27.1271 7.33685 27.1271Z" fill="#FFDE21" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="md:sticky md:top-24 bg-[#1C1C1F] text-white p-4 md:p-6 rounded-2xl shadow-xl flex flex-col items-center text-center w-full md:w-[85%] h-auto md:h-[100%] mx-auto mb-2 md:mb-0"
              style={{ zIndex: 10 + i, transform: `translateY(${i * 20}px)` }}
            >
              {item.icon}
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="sticky top-10 w-full md:w-[75%] mx-auto hidden md:block"
            style={{ zIndex: 1 }}
          >
            <img
              src="/logo-mighty-five.png"
              alt="Background Logo"
              className="absolute left-0 md:left-[-67%] top-7 md:top-[-90px] opacity-10 w-34 md:w-55 object-contain pointer-events-none"
            />
          </motion.div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-4 md:px-10 py-12 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center md:pl-6 gap-4 md:gap-6"
        >
          <div className="w-full md:w-1/3">
            <h4 className="text-yellow-500 text-lg md:text-xl font-semibold mb-2">Why Choose Us?</h4>
            <h2 className="text-xl sm:text-2xl md:text-[44px] font-bold mb-2">
              We are offering the best solutions
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 text-base md:text-[20px] mb-6 max-w-3xl">
              We offer a full range of digital services to help your brand stand out, connect, and grow.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          {/* Card 1 */}
          <div className="relative bg-[#1C1C1F] text-white rounded-2xl overflow-hidden h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <Image
              src="/Gradient+Blur.png"
              alt="Top Left Gradient"
              width={199.21}
              height={200}
              className="opacity-60 pointer-events-none"
            />
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 p-6 sm:p-8 md:p-10">
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">Data-Driven Strategies</h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mt-1 py-2">
                Informed decisions powered by insights and analytics to maximize impact.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <img
              src="/card2.png"
              alt="Seamless Collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0">
              <Image
                src="/images/blur-overly.png"
                alt="Collaboration Icon"
                width={407.39}
                height={206}
              className="mr-1"
              />
            </div>

          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <Image
              src="/c1-img-2.png"
              alt="5+ Years"
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full p-4 sm:p-6 md:p-8 lg:p-10 text-white">
              <h3 className="font-semibold flex-row md:text-5xl text-3xl">5+ Years Experience</h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mt-1 py-3 sm:py-5 md:py-6 lg:py-7 xl:py-8">
                Over 5 years of experience delivering innovative digital solutions.
              </p>
            </div>
          </div>
        </motion.div>




        {/* SECOND ROW (2 WIDE CARDS) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 mt-10 px-4 md:px-6"
        >
          {/* First Card */}
          <div
            className="bg-[#1C1C1F] text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-[170px]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%), 
                        radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%)`,
              backgroundSize: "9px 9px",
              backgroundPosition: "0 0, 2.5px 2.5px",
              backgroundRepeat: "repeat",
            }}
          >
            {/* Top Left Gradient */}
            <img
              src="/Gradient+Blur.png"
              alt="Top Left Gradient"
              className="absolute top-0 left-0 w-20 md:w-30 h-20 md:h-50 object-fill opacity-70 pointer-events-none"
            />

            {/* Bottom Right Gradient */}
            <img
              src="/Gradient+Blur.png"
              alt="Bottom Right Gradient"
              className="absolute bottom-0 right-0 w-28 md:w-40 h-28 md:h-50 object-contain opacity-70 pointer-events-none"
            />

            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="font-semibold text-lg md:text-2xl mb-2">⭐⭐⭐⭐⭐</h3>
              <p className="text-lg md:text-2xl">99+ Happy Clients</p>
            </div>

            <div className="flex -space-x-2 justify-center md:justify-end">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`/client${i}.png`}
                  alt="client"
                  width={50}
                  height={50}
                  className="md:w-[80px] md:h-[80px] rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>

          {/* Second Card */}
          <div
            className="bg-[#1C1C1F] text-white p-6 md:p-5 rounded-2xl flex items-center justify-start md:justify-center w-full md:w-80 h-auto md:h-43 relative ml-0 md:ml-auto"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%), 
                        radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%)`,
              backgroundSize: "9px 9px",
              backgroundPosition: "0 0, 2.5px 2.5px",
              backgroundRepeat: "repeat",
            }}
          >
            <span className="text-yellow-400 text-xl md:text-2xl mb-2 mr-4">
              <svg
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.7856 33C42.7856 33.5556 42.98 34.0556 43.3689 34.5C43.7578 34.9445 44.2578 35.1667 44.8689 35.1667C45.48 35.1667 45.98 34.9445 46.3689 34.5C46.7578 34.0556 46.9522 33.5556 46.9522 33C46.9522 32.4445 46.7578 31.9722 46.3689 31.5834C45.98 31.1945 45.48 31 44.8689 31C44.2578 31 43.7578 31.1945 43.3689 31.5834C42.98 31.9722 42.7856 32.4445 42.7856 33ZM38.2856 39.6667C38.2856 40.2222 38.48 40.7222 38.8689 41.1667C39.2578 41.6111 39.73 41.8334 40.2856 41.8334C40.8411 41.8334 41.3411 41.6111 41.7856 41.1667C42.23 40.7222 42.4522 40.2222 42.4522 39.6667C42.4522 39.1111 42.23 38.6389 41.7856 38.25C41.3411 37.8611 40.8411 37.6667 40.2856 37.6667C39.73 37.6667 39.2578 37.8611 38.8689 38.25C38.48 38.6389 38.2856 39.1111 38.2856 39.6667ZM44.2856 25C44.2856 25.5556 44.5078 26.0556 44.9522 26.5C45.3967 26.9445 45.8967 27.1667 46.4522 27.1667C47.0078 27.1667 47.48 26.9445 47.8689 26.5C48.2578 26.0556 48.4522 25.5556 48.4522 25C48.4522 24.4445 48.2578 23.9722 47.8689 23.5834C47.48 23.1945 47.0078 23 46.4522 23C45.8967 23 45.3967 23.1945 44.9522 23.5834C44.5078 23.9722 44.2856 24.4445 44.2856 25ZM31.4522 44.3334C31.4522 44.8889 31.6744 45.3611 32.1189 45.75C32.5633 46.1389 33.0633 46.3334 33.6189 46.3334C34.1744 46.3334 34.6467 46.1389 35.0356 45.75C35.4244 45.3611 35.6189 44.8611 35.6189 44.25C35.6189 43.6389 35.4244 43.1389 35.0356 42.75C34.6467 42.3611 34.1744 42.1667 33.6189 42.1667C33.0633 42.1667 32.5633 42.3611 32.1189 42.75C31.6744 43.1389 31.4522 43.6667 31.4522 44.3334ZM25.6189 43.6667C21.5078 43.7778 17.7856 42.5834 14.4522 40.0834C11.1189 37.5834 8.84111 34.3889 7.61889 30.5C6.39667 26.6111 6.48 22.7222 7.86889 18.8334C9.25778 14.9445 11.6744 11.8334 15.1189 9.50002C18.5633 7.16669 22.3411 6.08335 26.4522 6.25002C30.5633 6.41669 34.23 7.7778 37.4522 10.3334H33.9522C33.3967 10.4445 32.8967 10.6945 32.4522 11.0834C32.0078 11.4722 31.8133 11.9445 31.8689 12.5C31.9244 13.0556 32.1467 13.5556 32.5356 14C32.9244 14.4445 33.3967 14.6667 33.9522 14.6667H42.2856C42.8411 14.5556 43.3411 14.3056 43.7856 13.9167C44.23 13.5278 44.4522 13.0556 44.4522 12.5V4.16669C44.4522 3.61113 44.23 3.11113 43.7856 2.66669C43.3411 2.22225 42.8411 2.00002 42.2856 2.00002C41.73 2.00002 41.2578 2.22225 40.8689 2.66669C40.48 3.11113 40.23 3.61113 40.1189 4.16669V7.33335C37.5633 5.22224 34.7022 3.75002 31.5356 2.91669C28.3689 2.08336 25.1744 1.91669 21.9522 2.41669C18.73 2.91669 15.73 4.08335 12.9522 5.91669C10.1744 7.75002 7.92445 10.0834 6.20223 12.9167C4.48 15.75 3.39667 18.7778 2.95222 22C2.50778 25.2222 2.75778 28.4445 3.70222 31.6667C4.64667 34.8889 6.20222 37.7222 8.36889 40.1667C10.5356 42.6111 13.1189 44.5278 16.1189 45.9167C19.1189 47.3056 22.2856 47.9445 25.6189 47.8334C26.1744 47.8334 26.6744 47.6389 27.1189 47.25C27.5633 46.8611 27.7856 46.3889 27.7856 45.8334C27.7856 45.2778 27.5633 44.7778 27.1189 44.3334C26.6744 43.8889 26.1744 43.6667 25.6189 43.6667ZM33.2856 32.6667C33.73 32.3334 33.9522 31.8611 33.9522 31.25C33.9522 30.6389 33.73 30.1667 33.2856 29.8334L27.7856 24.1667V12.5C27.7856 11.9445 27.5633 11.4445 27.1189 11C26.6744 10.5556 26.1744 10.3611 25.6189 10.4167C25.0633 10.4722 24.5633 10.6945 24.1189 11.0834C23.6744 11.4722 23.4522 11.9445 23.4522 12.5V25C23.5633 25.5556 23.7856 26.0556 24.1189 26.5L30.4522 32.6667C30.7856 33.1111 31.2578 33.3334 31.8689 33.3334C32.48 33.3334 32.9522 33.1111 33.2856 32.6667Z"
                  fill="#FFDE21"
                />
              </svg>
            </span>
            <h3 className="font-semibold text-lg md:text-xl">7 Day Turnaround</h3>

            {/* Bottom Right Gradient */}
            <img
              src="/Gradient+Blur.png"
              alt="Bottom Right Gradient"
              className="absolute bottom-0 right-0 w-28 md:w-45 h-28 md:h-60 object-contain opacity-40 pointer-events-none"
            />
          </div>
        </motion.div>




      </section>

      {/* PROCESS STEPS (TIMELINE) */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-gray-600 text-4xl md:text-5xl font-bold mb-3">
            3 easy steps to get
            <span className="block text-gray-600 mb-5">started</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-16">
            Our three-step method blends strategy and creativity
            <span className="block text-gray-600 mt-2">
              while keeping you in the loop.
            </span>
          </p>

          {/* TIMELINE */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400 -translate-x-1/2"></div>

            {/* STEP 1 */}
            <motion.div
              className="mb-16 md:mb-20 flex flex-col md:flex-row md:justify-end relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Number on the line */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 md:top-6 bg-yellow-400 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center z-10">
                01
              </div>
              <div className="bg-[#151515] text-white p-6 rounded-2xl w-full md:w-96 text-left relative mt-12 md:mt-0 md:ml-10">
                <span className="absolute -top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  3-5 days
                </span>
                <h3 className="font-bold mb-2">Discovery & Strategy</h3>
                <p className="text-sm text-gray-300">
                  We start by understanding your goals, audience, and challenges. Together, we define the vision and roadmap.
                </p>
              </div>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              className="mb-16 md:mb-20 flex flex-col md:flex-row md:justify-start relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Number on the line */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 md:top-6 bg-yellow-400 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center z-10">
                02
              </div>
              <div className="bg-[#151515] text-white p-6 rounded-2xl w-full md:w-96 text-left relative mt-12 md:mt-0 md:mr-10">
                <span className="absolute -top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  1 week
                </span>
                <h3 className="font-bold mb-2">Design & Prototype</h3>
                <p className="text-sm text-gray-300">
                  Our team crafts modern, user-friendly designs that reflect your brand and engage your users.
                </p>
              </div>
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              className="flex flex-col md:flex-row md:justify-end relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Number on the line */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 md:top-6 bg-yellow-400 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center z-10">
                03
              </div>
              <div className="bg-[#151515] text-white p-6 rounded-2xl w-full md:w-96 text-left relative mt-12 md:mt-0 md:ml-10">
                <span className="absolute -top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  6-7 days
                </span>
                <h3 className="font-bold mb-2">Launch & Support</h3>
                <p className="text-sm text-gray-300">
                  After launch, we stay by your side with updates, optimizations and long-term support.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
