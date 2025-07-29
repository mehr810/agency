"use client";

import Image from "next/image";

export default function MightyFiveStatement() {
  return (
    <section className="w-full flex justify-center items-center p-0 m-0">
      <div className="relative w-full h-[600px] md:h-[800px] p-0 m-0">
        <Image
          src="/pitch2.png"
          alt="Mighty Five visual"
          fill
          className="rounded object-cover"
        />
      </div>
    </section>
  );
}
