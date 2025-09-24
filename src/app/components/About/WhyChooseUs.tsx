/* eslint-disable */

"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

function WhyChooseUs() {
  return (
<section className="container mx-auto px-4 md:px-10 py-12 md:py-40">
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
  className="flex flex-col md:flex-row items-center md:pl-6 gap-4 md:gap-6 md:space-x-40"
>
  <div className="w-full md:w-1/3">
    <h4 className="text-yellow-500 text-lg md:text-xl font-semibold mb-2">
      Why Choose Us?
    </h4>
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
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-6 lg:px-8"
>
  {/* Card 1 */}
  <div className="relative bg-[#1C1C1F] text-white rounded-2xl overflow-hidden h-[420px] sm:h-[450px] md:h-[480px] lg:h-[500px] xl:h-[550px] w-full">
    <Image
      src="/Gradient+Blur.png"
      alt="Top Left Gradient"
      width={150}
      height={150}
      sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
      className="opacity-60 pointer-events-none object-cover"
    />
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 p-4 sm:p-6 md:p-8 lg:p-10">
      <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">Data-Driven Strategies</h3>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mt-1 py-2">
        Informed decisions powered by insights and analytics to maximize impact.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative rounded-2xl overflow-hidden h-[420px] sm:h-[450px] md:h-[480px] lg:h-[500px] xl:h-[550px] w-full">
    <Image
      src="/images/Component-5.png"
      alt="Seamless Collaboration"
      fill
      className="object-cover object-center"
    />
  </div>

  {/* Card 3 */}
  <div className="relative rounded-2xl overflow-hidden h-[420px] sm:h-[450px] md:h-[480px] lg:h-[500px] xl:h-[550px] w-full">
    <Image
      src="/c1-img-2.png"
      alt="5+ Years"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      className="object-cover object-top"
    />
    <div className="absolute bottom-0 w-full p-4 sm:p-6 md:p-8 lg:p-10 text-white bg-gradient-to-t from-black/60 to-transparent">
      <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">5+ Years Experience</h3>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mt-1 py-2 sm:py-3 md:py-4 lg:py-5">
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
        className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4 md:px-6 lg:px-8"
      >
        {/* First Card */}
        <div
          className="bg-[#1C1C1F] text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between relative w-full h-auto min-h-[150px] sm:min-h-[160px] md:min-h-[170px]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%), 
                      radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%)`,
            backgroundSize: "9px 9px",
            backgroundPosition: "0 0, 2.5px 2.5px",
            backgroundRepeat: "repeat",
          }}
        >
          <img
            src="/Gradient+Blur.png"
            alt="Top Left Gradient"
            className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover opacity-70 pointer-events-none"
            loading="lazy"
          />
          <img
            src="/Gradient+Blur.png"
            alt="Bottom Right Gradient"
            className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 object-cover opacity-70 pointer-events-none"
            loading="lazy"
          />
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2">⭐⭐⭐⭐⭐</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">99+ Happy Clients</p>
          </div>
          <div className="flex -space-x-2 justify-center sm:justify-end">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/client${i}.png`}
                alt="client"
                width={40}
                height={40}
                sizes="(max-width: 640px) 30px, (max-width: 768px) 35px, 40px"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>

        {/* Second Card */}
        <div
          className="bg-[#1C1C1F] text-white p-4 sm:p-5 md:p-6 lg:p-7 rounded-2xl flex items-center justify-start sm:justify-center w-full h-auto min-h-[120px] sm:min-h-[130px] md:min-h-[140px]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%), 
                      radial-gradient(circle, rgba(243, 243, 243, 0.3) 2%, transparent 2%)`,
            backgroundSize: "9px 9px",
            backgroundPosition: "0 0, 2.5px 2.5px",
            backgroundRepeat: "repeat",
          }}
        >
          <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4">
            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.7856 33C42.7856 33.5556 42.98 34.0556 43.3689 34.5C43.7578 34.9445 44.2578 35.1667 44.8689 35.1667C45.48 35.1667 45.98 34.9445 46.3689 34.5C46.7578 34.0556 46.9522 33.5556 46.9522 33C46.9522 32.4445 46.7578 31.9722 46.3689 31.5834C45.98 31.1945 45.48 31 44.8689 31C44.2578 31 43.7578 31.1945 43.3689 31.5834C42.98 31.9722 42.7856 32.4445 42.7856 33ZM38.2856 39.6667C38.2856 40.2222 38.48 40.7222 38.8689 41.1667C39.2578 41.6111 39.73 41.8334 40.2856 41.8334C40.8411 41.8334 41.3411 41.6111 41.7856 41.1667C42.23 40.7222 42.4522 40.2222 42.4522 39.6667C42.4522 39.1111 42.23 38.6389 41.7856 38.25C41.3411 37.8611 40.8411 37.6667 40.2856 37.6667C39.73 37.6667 39.2578 37.8611 38.8689 38.25C38.48 38.6389 38.2856 39.1111 38.2856 39.6667ZM44.2856 25C44.2856 25.5556 44.5078 26.0556 44.9522 26.5C45.3967 26.9445 45.8967 27.1667 46.4522 27.1667C47.0078 27.1667 47.48 26.9445 47.8689 26.5C48.2578 26.0556 48.4522 25.5556 48.4522 25C48.4522 24.4445 48.2578 23.9722 47.8689 23.5834C47.48 23.1945 47.0078 23 46.4522 23C45.8967 23 45.3967 23.1945 44.9522 23.5834C44.5078 23.9722 44.2856 24.4445 44.2856 25ZM31.4522 44.3334C31.4522 44.8889 31.6744 45.3611 32.1189 45.75C32.5633 46.1389 33.0633 46.3334 33.6189 46.3334C34.1744 46.3334 34.6467 46.1389 35.0356 45.75C35.4244 45.3611 35.6189 44.8611 35.6189 44.25C35.6189 43.6389 35.4244 43.1389 35.0356 42.75C34.6467 42.3611 34.1744 42.1667 33.6189 42.1667C33.0633 42.1667 32.5633 42.3611 32.1189 42.75C31.6744 43.1389 31.4522 43.6667 31.4522 44.3334ZM25.6189 43.6667C21.5078 43.7778 17.7856 42.5834 14.4522 40.0834C11.1189 37.5834 8.84111 34.3889 7.61889 30.5C6.39667 26.6111 6.48 22.7222 7.86889 18.8334C9.25778 14.9445 11.6744 11.8334 15.1189 9.50002C18.5633 7.16669 22.3411 6.08335 26.4522 6.25002C30.5633 6.41669 34.23 7.7778 37.4522 10.3334H33.9522C33.3967 10.4445 32.8967 10.6945 32.4522 11.0834C32.0078 11.4722 31.8133 11.9445 31.8689 12.5C31.9244 13.0556 32.1467 13.5556 32.5356 14C32.9244 14.4445 33.3967 14.6667 33.9522 14.6667H42.2856C42.8411 14.5556 43.3411 14.3056 43.7856 13.9167C44.23 13.5278 44.4522 13.0556 44.4522 12.5V4.16669C44.4522 3.61113 44.23 3.11113 43.7856 2.66669C43.3411 2.22225 42.8411 2.00002 42.2856 2.00002C41.73 2.00002 41.2578 2.22225 40.8689 2.66669C40.48 3.11113 40.23 3.61113 40.1189 4.16669V7.33335C37.5633 5.22224 34.7022 3.75002 31.5356 2.91669C28.3689 2.08336 25.1744 1.91669 21.9522 2.41669C18.73 2.91669 15.73 4.08335 12.9522 5.91669C10.1744 7.75002 7.92445 10.0834 6.20223 12.9167C4.48 15.75 3.39667 18.7778 2.95222 22C2.50778 25.2222 2.75778 28.4445 3.70222 31.6667C4.64667 34.8889 6.20222 37.7222 8.36889 40.1667C10.5356 42.6111 13.1189 44.5278 16.1189 45.9167C19.1189 47.3056 22.2856 47.9445 25.6189 47.8334C26.1744 47.8334 26.6744 47.6389 27.1189 47.25C27.5633 46.8611 27.7856 46.3889 27.7856 45.8334C27.7856 45.2778 27.5633 44.7778 27.1189 44.3334C26.6744 43.8889 26.1744 43.6667 25.6189 43.6667ZM33.2856 32.6667C33.73 32.3334 33.9522 31.8611 33.9522 31.25C33.9522 30.6389 33.73 30.1667 33.2856 29.8334L27.7856 24.1667V12.5C27.7856 11.9445 27.5633 11.4445 27.1189 11C26.6744 10.5556 26.1744 10.3611 25.6189 10.4167C25.0633 10.4722 24.5633 10.6945 24.1189 11.0834C23.6744 11.4722 23.4522 11.9445 23.4522 12.5V25C23.5633 25.5556 23.7856 26.0556 24.1189 26.5L30.4522 32.6667C30.7856 33.1111 31.2578 33.3334 31.8689 33.3334C32.48 33.3334 32.9522 33.1111 33.2856 32.6667Z" fill="#FFDE21"/>
</svg>

          </span>
          <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">7 Day Turnaround</h3>
          <img
            src="/Gradient+Blur.png"
            alt="Bottom Right Gradient"
            className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 object-cover opacity-40 pointer-events-none"
            loading="lazy"
          />
        </div>
      </motion.div>




      </section>  )
}

export default WhyChooseUs