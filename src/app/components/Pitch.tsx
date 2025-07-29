"use client";

import Image from "next/image";

export default function MightyFiveStatement() {
  return (
    <section className="w-full overflow-hidden p-0 m-0">
      <div className="relative w-full h-[220px] sm:h-[200px] md:h-[250px] lg:h-[600px] rounded overflow-hidden">
        <Image
          src="/pitch2.png"
          alt="Mighty Five visual"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
