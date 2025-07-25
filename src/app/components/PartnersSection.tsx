// components/PartnersSection.tsx
import Image from 'next/image';

export default function PartnersPage() {
  const partners = [
    { name: "BAT", logo: "/logos/image.png" },
    { name: "VELO", logo: "/logos/image2.png" },
    { name: "GSK", logo: "/logos/logo.png" },
    { name: "PediaSure", logo: "/logos/logo1.png" },
    { name: "UNICEF", logo: "/logos/logo3.webp" },
    { name: "Toyota1", logo: "/logos/logo4.webp" },
    { name: "Toyota2", logo: "/logos/logo5.webp" },
    { name: "Toyota3", logo: "/logos/logo6.webp" },
    { name: "Toyota4", logo: "/logos/logo7.webp" },
    { name: "Toyota5", logo: "/logos/logo7.webp" },
    { name: "Toyota6", logo: "/logos/logo7.webp" },
    { name: "Toyota7", logo: "/logos/logo7.webp" },
    { name: "Toyota8", logo: "/logos/logo7.webp" },
    { name: "Toyota9", logo: "/logos/logo7.webp" },
    { name: "Toyota10", logo: "/logos/logo7.webp" },
  ];

  const columns = 5; // Match grid with 5 columns as in the image

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 font-sans text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold leading-tight mb-4">
        <span className="bg-gradient-to-r from-red-500 to-blue-600 text-transparent bg-clip-text">
          We have strong partnerships with some of the world&apos;s leading brands
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm max-w-3xl mx-auto mb-12">
        Our integrated approach to digital marketing drives the nature of our client relationships.
        We strive for long-term business partnerships that are strategically challenging, creatively rewarding
        and give us the opportunity to develop brands in the digital space.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {partners.map((partner, index) => {
          const isFirstRow = index < columns;
          const isLastColumn = (index + 1) % columns === 0;
          const isFirstColumn = index % columns === 0;

          return (
            <div
              key={index}
              className={`flex items-center justify-center h-28 p-4 bg-white border-b border-r
                ${!isFirstRow ? 'border-t' : ''}
                ${!isLastColumn ? '' : 'border-r-0'}
                ${!isFirstColumn ? '' : 'border-l-0'}
                border-gray-400`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
