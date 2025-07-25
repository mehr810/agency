// components/TeamSection.tsx
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "MEHR HAIDER",
      role: "Founder",
      image: "/team/mehr.png"
    },
    {
      name: "MAHEEN",
      role: "Co-Founder",
      image: "/team/maheen.png"
    },
    {
      name: "ASMA ASAD KHAN",
      role: "Digital Innovation Lead",
      image: "/team/asma.png"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Meet The Team</h1>
          <h2 className="text-5xl font-semibold text-gray-900 mb-2">Our Professionals</h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-600 text-sm leading-relaxed mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis delectus dolorem possimus, dolor rerum.
          </p>
          <p className="text-xs text-gray-500">
            Images by <a href="https://www.freepik.com" target="_blank" className="underline">Freepik</a>
          </p>
        </div>
      </div>

      {/* Team Members with shadow box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
          >
            {/* Image */}
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain rounded"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index < 3}
              />
            </div>

            {/* Name and Role */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 text-gray-500">
              <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
