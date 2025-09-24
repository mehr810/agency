import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

function Socials() {
  return (
    <div className="relative w-full h-[838px] my-10">
      {/* Background Image */}
      <Image
        src="/images/Component-1.png"
        alt="Project showcase"
        width={1526}
        height={838}
        className="object-cover"
      />

      {/* Overlay Content */}
      <section className="absolute inset-0 flex flex-col justify-center p-6 space-y-10">
        {/* Row 1 - LinkedIn + Facebook */}
        <div className="flex gap-6 ml-[400px]">
          {[
            { label: "LinkedIn", url: "https://linkedin.com" },
            { label: "Facebook", url: "https://facebook.com" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[258px] h-[82px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-4"
            >
              <span className="text-2xl">{item.label}</span>
              <div className="relative z-10 w-[68px] h-[62px] rounded-md bg-[#FFDE21] flex items-center justify-center mr-3">
                <SocialIcon
                  url={item.url}
                  style={{ width: 100, height: 100 }} // bigger icons
                  fgColor="#4B4B4B"
                  bgColor="transparent"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Twitter, Instagram, Get in Touch */}
        <div className="flex gap-6 ml-[400px] relative">
          {[
            { label: "X/Twitter", url: "https://x.com/" },
            { label: "Instagram", url: "https://instagram.com" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[258px] h-[82px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-4"
            >
              <span className="text-2xl">{item.label}</span>
              <div className="relative z-10 w-[68px] h-[62px] rounded-md bg-[#FFDE21] flex items-center justify-center">
                <SocialIcon
                  url={item.url}
                  style={{ width: 100, height: 100 }} // bigger icons
                  fgColor="#4B4B4B"
                  bgColor="transparent"
                />
              </div>
            </div>
          ))}

          {/* Custom Get in Touch */}
          <div className="w-[258px] h-[82px] flex items-center justify-between rounded-lg bg-[#4B4B4B] text-white px-3">
            <span className="text-2xl">Get in Touch</span>
              <div className="relative z-10 w-[68px] h-[62px] rounded-md bg-[#FFDE21] flex items-center justify-center">
              <Image
                src="/images/Vector.svg"
                alt="Get in Touch"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>

        {/* Line with Arrow cutting through */}
        <div className="relative left-[450px] w-[750px] h-[1px] bg-[#4B4B4B] mt-12">
          <div className="absolute -left-28 top-1/2 -translate-y-1/2">
            <Image
              src="/images/Component-2.svg"
              alt="Circle Arrow"
              width={254.08}
              height={163.27}
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-wrap justify-center gap-16 text-center mt-8 ml-[400px]">
          <div>
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center mx-auto mb-2">
              <Image
                src="/images/location.svg"
                alt="Location"
                width={24}
                height={24}
              />
            </div>
            <h4 className="font-semibold">Office Address</h4>
            <p className="text-sm">
              5900 Balcones drive suite 7070, austin <br /> texas, 78731
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center mx-auto mb-2">
              <Image
                src="/images/contact-headset.svg"
                alt="Support"
                width={32}
                height={32}
              />
            </div>
            <h4 className="font-semibold">24/7 Support</h4>
            <p className="text-sm">
              (+1) 307-300-3051 <br /> sales@mighty-five.com
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center mx-auto mb-2">
              <Image
                src="/images/timer.png"
                alt="Business Hours"
                width={50}
                height={50}
              />
            </div>
            <h4 className="font-semibold">Business Hours</h4>
            <p className="text-sm">
              Mon - Fri 8 AM - 10 PM <br /> Sun 11 AM - 5 PM
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Socials;  