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
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Stage Title */}
      <div className="text-center mb-24 z-20 relative px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-gray-800">
          Meet the minds behind the magic
        </h2>
        <p className="mt-2 text-gray-500 text-sm md:text-base">
          Our core team bringing visions to life
        </p>
      </div>

      {/* Background "the team" Text */}
      <div className="absolute top-10 z-0 pointer-events-none select-none leading-none hidden sm:block">
        <div className="text-[5rem] md:text-[14rem] font-extrabold text-gray-300">
          <span className="block -mb-10">the</span>
          <span className="block ml-10 md:ml-22">team</span>
        </div>
      </div>

      {/* Zig-Zag Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden sm:block">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute h-px bg-gray-500/50 w-1/2 ${i % 2 === 0 ? 'right-0' : 'left-0'}`}
            style={{ top: `${15 + i * 12}%` }}
          />
        ))}
      </div>

      {/* Floating Horizontal Text Labels */}
      <div className="absolute inset-0 z-10 pointer-events-none text-[10px] uppercase tracking-wider text-gray-400 hidden sm:block">
        {['visionaries', 'creatives', 'builders', 'dreamers', 'innovators', 'strategists'].map(
          (text, i) => (
            <p
              key={i}
              className={`absolute ${i % 2 === 0 ? 'right-6 text-right' : 'left-6 text-left'}`}
              style={{ top: `${13 + i * 12}%` }}
            >
              {text}
            </p>
          )
        )}
      </div>

      {/* Team Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-20 mt-10 md:mt-20">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-end gap-y-10 gap-x-5 md:gap-x-10">
          {teamMembers.map((member, i) => {
            let baseStyle = 'transition-transform duration-300 transform';
            let responsiveLayout = '';

            // For desktop styling, same as original
            if (i === 0) {
              responsiveLayout = 'md:mt-20 md:-translate-x-10';
            } else if (i === 1) {
              responsiveLayout = 'md:mt-0 md:translate-x-0';
            } else if (i === 2) {
              responsiveLayout = 'md:mt-30 md:translate-x-10';
            }

            return (
              <div
                key={i}
                className={`group relative w-60 h-80 mx-auto sm:mx-0 ${baseStyle} ${responsiveLayout}`}
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden rounded-lg shine-container">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg transition-all duration-500 ease-in-out group-hover:grayscale group-hover:scale-105"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-lg shine-mask" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm mb-3 opacity-80">{member.role}</p>
                  <div className="flex gap-3 text-white">
                    <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shine Animation */}
      <style jsx>{`
        .shine-container {
          position: relative;
        }

        .shine-mask::before {
          content: '';
          position: absolute;
          top: -150%;
          left: 150%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 1.5s ease;
          pointer-events: none;
        }

        .group:hover .shine-mask::before {
          animation: shine-slide 1.2s ease-out forwards;
          opacity: 1;
        }

        @keyframes shine-slide {
          0% {
            transform: translate(120%, -120%) rotate(45deg);
          }
          100% {
            transform: translate(-120%, 120%) rotate(45deg);
          }
        }
      `}</style>
    </section>
  );
}
