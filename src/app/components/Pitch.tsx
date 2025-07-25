"use client";

import Image from "next/image";

export default function MightyFiveStatement() {
  return (
    <>
      {/* Heading Section */}
      <section className="w-full px-4 md:px-12 py-8 md:py-12 text-center text-green-900 bg-white">
        <div className="text-lg md:text-base tracking-widest font-semibold uppercase">
          <div className="inline-block border-b-2 border-green-900 pb-1">
            We are Mighty Five
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full flex justify-center items-center pb-8 md:pb-12 bg-white">
        <div className="relative w-full max-w-[800px] aspect-[16/10] px-4">
          <Image
            src="/pitch2.png"
            alt="Mighty Five visual"
            fill
            className="rounded object-contain"
          />
        </div>
      </section>
    </>
  );
}
