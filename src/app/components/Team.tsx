'use client';

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { name: 'MEHR HAIDER', role: 'Founder', image: '/team/mehr.webp' },
  { name: 'MAHEEN', role: 'Co-Founder', image: '/team/maheen.webp' },
  { name: 'ASMA ASAD KHAN', role: 'Digital Innovation Lead', image: '/team/asma.webp' },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white max-w-7xl mx-auto px-6 md:px-20">
      {/* Top Section: Heading + Tagline */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        {/* Left: Heading */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Meet The Team <br />
            <span className="relative inline-block">
              <span className="relative inline-block text-black">
                Our
                <span className="absolute -bottom-1 left-0 h-1 w-10 bg-blue-600 rounded-full"></span>
              </span>{' '}
              <span className="text-black">Professionals</span>
            </span>
          </h2>
        </div>

        {/* Right: Tagline, Image credit, Read More button */}
<div className="md:w-1/2 flex flex-col justify-center gap-6">
  <p className="text-gray-500 italic text-base whitespace-pre-line">
    We are a team of bold thinkers and creative minds,{"\n"}
    committed to delivering innovative solutions that{"\n"}
    drive growth, impact, and lasting value.
  </p>
  <p className="text-sm text-gray-400">
    Powered by passion and precision,{"\n"}
    we transform ideas into reality through strategy,{"\n"}
    collaboration, and a relentless pursuit of excellence.
  </p>
</div>
      </div>

      {/* Bottom Section: Team Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 px-2 md:px-10">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="text-center shadow-md rounded-md overflow-hidden w-full sm:w-64"
          >
            <div className="relative w-full h-90">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 16rem"
                priority={i === 0} // optional: prioritize first image loading
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-600 text-lg">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-800 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
