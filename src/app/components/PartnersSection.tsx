// components/PartnersSection.tsx
import Image from 'next/image';

export default function PartnersPage() {
  const partners = [
    { name: "BAT", logo: "/logos/image.png" },
  { name: "VELO", logo: "/logos/image2.png" },
  { name: "PediaSure", logo: "/logos/logo1.png" },
  { name: "UNICEF", logo: "/logos/logo3.webp" },
  { name: "Asset Avenue", logo: "/pertner-logos/Asset.png" },
  { name: "Atlas", logo: "/pertner-logos/Atlas.png" },
  { name: "Big Moe's Kitchen", logo: "/pertner-logos/Big-Moe's-Kitchen-Logo.png" },
  { name: "I Am Design", logo: "/pertner-logos/I-am-design.jpg" },
  { name: "Promethean", logo: "/pertner-logos/Promeathean.png" },
  { name: "Recession Proof Anchored", logo: "/pertner-logos/Recession.PNG" },
  { name: "Verdent", logo: "/pertner-logos/VERDENT.jpg" },
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
