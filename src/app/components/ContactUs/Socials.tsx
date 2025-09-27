import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
function Socials() {
  return (
    <div className="relative w-full my-10">
      {/* Desktop Background Image */}
      <Image
        src="/images/Component-1.png"
        alt="Project showcase"
        width={1526}
        height={838}
        className="object-cover hidden md:block"
      />

      {/* ===== Desktop Overlay Content (UNCHANGED) ===== */}
      <section className="absolute inset-0 flex flex-col justify-center p-6 space-y-10">
        <div className="hidden md:flex flex-col space-y-10">
          {/* 🔒 All your original desktop socials, line, info remain unchanged */}
          {/* Row 1 */}
          <div className="flex gap-6 ml-[400px]">
            {[{ label: "LinkedIn", url: "https://www.linkedin.com/company/mighty-five-agency/" },
            { label: "Facebook", url: "https://facebook.com" }].map((item, i) => (
              <div
                key={i}
                className="w-[258px] h-[82px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-4"
              >
                <span className="text-2xl">{item.label}</span>
                <div className="relative z-10 w-[68px] h-[62px] rounded-md bg-[#FFDE21] flex items-center justify-center mr-3">
                  <SocialIcon
                    url={item.url}
                    style={{ width: 100, height: 100 }}
                    fgColor="#4B4B4B"
                    bgColor="transparent"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-6 ml-[400px] relative">
            {[{ label: "X/Twitter", url: "https://x.com/" },
            { label: "Instagram", url: "https://www.instagram.com/mightyfive.agency?igsh=YXJ2eWY1cTBjZHpp" }].map((item, i) => (
              <div
                key={i}
                className="w-[258px] h-[82px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-4"
              >
                <span className="text-2xl">{item.label}</span>
                <div className="relative z-10 w-[68px] h-[62px] rounded-md bg-[#FFDE21] flex items-center justify-center">
                  <SocialIcon
                    url={item.url}
                    style={{ width: 100, height: 100 }}
                    fgColor="#4B4B4B"
                    bgColor="transparent"
                  />
                </div>
              </div>
            ))}

            {/* Get in Touch */}
            <Link
      href="mailto:sales@mighty-five.com"
      className="w-[258px] h-[82px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-3 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="text-2xl">Get in Touch</span>
      <div className="relative z-10 w-[68px] h-[62px] rounded-md bg-[#FFDE21] flex items-center justify-center">
        <Image
          src="/images/Vector.svg"
          alt="Get in Touch"
          width={32}
          height={32}
        />
      </div>
    </Link>
          </div>
          {/* Line with Arrow */}
          <div className="relative left-[450px] w-[750px] h-[1px] bg-[#4B4B4B] mt-12">
            <div className="absolute -left-28 top-1/2 -translate-y-1/2">
              <Image src="/images/Component-2.svg" alt="Circle Arrow" width={254.08} height={163.27} />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-wrap justify-center gap-16 text-center mt-8 ml-[400px]">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center mx-auto mb-2">
                <Image src="/images/location.svg" alt="Location" width={24} height={24} />
              </div>
              <h4 className="font-semibold">Office Address</h4>
              <p className="text-sm">5900 Balcones drive suite 7070, austin <br /> texas, 78731</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center mx-auto mb-2">
                <Image src="/images/contact-headset.svg" alt="Support" width={32} height={32} />
              </div>
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm">(+1) 307-300-3051 <br /> sales@mighty-five.com</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center mx-auto mb-2">
                <Image src="/images/timer.png" alt="Business Hours" width={50} height={50} />
              </div>
              <h4 className="font-semibold">Business Hours</h4>
              <p className="text-sm">Mon - Fri 8 AM - 10 PM <br /> Sun 11 AM - 5 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mobile Flow (outside overlay) ===== */}
      <div className="flex flex-col md:hidden space-y-6 mt-6">
        {/* 1. Socials + Get in Touch */}
        <div className="flex flex-col items-center space-y-4">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-3">
            {[{ label: "LinkedIn", url: "https://linkedin.com" },
            { label: "Facebook", url: "https://facebook.com" }].map((item, i) => (
              <div
                key={i}
                className="w-[143px] h-[37px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-3"
              >
                <span className="text-sm">{item.label}</span>
                <div className="w-8 h-8 rounded-md bg-[#FFDE21] flex items-center justify-center">
                  <SocialIcon url={item.url} style={{ width: 40, height: 40 }} fgColor="#4B4B4B" bgColor="transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-3">
            {[{ label: "X/Twitter", url: "https://x.com/" },
            { label: "Instagram", url: "https://instagram.com" }].map((item, i) => (
              <div
                key={i}
                className="w-[143px] h-[37px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-3"
              >
                <span className="text-sm">{item.label}</span>
                <div className="w-8 h-8 rounded-md bg-[#FFDE21] flex items-center justify-center">
                  <SocialIcon url={item.url} style={{ width: 40, height: 40 }} fgColor="#4B4B4B" bgColor="transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Get in Touch */}
          <div className="w-[143px] h-[37px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-3">
            <span className="text-sm">Get in Touch</span>
            <div className="w-8 h-8 rounded-md bg-[#FFDE21] flex items-center justify-center">
              <Image src="/images/Vector.svg" alt="Get in Touch" width={16} height={16} />
            </div>
          </div>
        </div>

        {/* 2. Background Image */}
        <Image
          src="/images/Component-4.png"
          alt="Project showcase"
          width={418}
          height={310}
          className="object-cover w-full h-auto"
        />

        {/* 3. Divider Line */}
        <div className="w-3/4 h-[1px] bg-[#4B4B4B] my-4 mx-auto"></div>

        {/* 4. Info Section */}
        <div className="grid grid-cols-3 gap-4 w-full text-center mt-2">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center mb-2">
              <Image src="/images/location.svg" alt="Location" width={20} height={20} />
            </div>
            <h4 className="font-bold text-xs">Office Address</h4>
            <p className="text-xs">
              24/A, New Boston Tower, <br /> New York, US
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center mb-2">
              <Image src="/images/contact-headset.svg" alt="Support" width={24} height={24} />
            </div>
            <h4 className="font-bold text-xs">24/7 Support</h4>
            <p className="text-xs">
              (+1) 302-260-2051 <br /> sales@mighty-five.com
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center mb-2">
              <Image src="/images/timer.png" alt="Business Hours" width={40} height={40} />
            </div>
            <h4 className="font-bold text-xs">Business Hours</h4>
            <p className="text-xs">
              Mon-Fri 8AM-10PM <br /> Sun 11AM-5PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
