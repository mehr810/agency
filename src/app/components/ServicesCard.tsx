"use client";

import React, { useState } from "react";
import clsx from "clsx";

const services = [
    {
        title: "24/7 Call Center",
        description:
            "Reliable, around-the-clock customer support to keep your business always connected.",
    },
    {
        title: "Social Media Management",
        description:
            "End-to-end management of your social presence—content, scheduling, engagement, and growth.",
    },
    {
        title: "Paid Social Media Advertising",
        description:
            "Targeted ad campaigns designed to boost reach, engagement, and conversions.",
    },
    {
        title: "Service Design",
        description:
            "We design seamless, intuitive services that elevate user experience and drive loyalty.",
    },
    {
        title: "Lead Generation",
        description:
            "Smart, data-driven strategies to attract, capture, and convert high-quality leads.",
    },
];

const ServicesSection = () => {
    const [hovered, setHovered] = useState<number | null>(0);

    return (
        <section className="bg-white text-black py-16 px-4 md:px-8 font-sans overflow-x-hidden">
            <div className="max-w-[1800px] mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Our Expertise</h2>
                    <p className="text-2xl md:text-3xl font-light text-green-700 leading-tight">
                        Tailored digital services built to drive growth, <br />
                        <span className="text-black">designed for impact.</span>
                    </p>
                </div>


                {/* Paragraph */}
                <div className="mb-6 max-w-3xl">
                    <p className="text-lg md:text-xl text-gray-700">
                        At Mighty Five, we turn ideas into impact. Whether you&rsquo;re a startup finding your voice or an enterprise scaling your reach, our digital solutions are built to move fast, look sharp, and deliver real results. From strategy to execution, we craft experiences that connect, convert, and grow.
                        We don&rsquo;t just build brands — we build momentum.
                    </p>
                </div>
            </div>

            {/* OUTER BORDER WRAPPER */}
            <div className="relative border border-gray-300 rounded-xl px-4 sm:px-8 py-6 w-full overflow-hidden">
                {/* RIGHT vertical design lines */}
                <div className="absolute top-6 bottom-6 right-6 z-0 hidden lg:block">
                    <div className="w-[2px] h-16 bg-gray-300 mb-4"></div>
                    <div className="w-[2px] h-16 bg-gray-300"></div>
                </div>

                {/* CARD CONTAINER */}
                <div className="flex flex-nowrap justify-center gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className={clsx(
                                "relative border border-gray-200 rounded-xl w-[220px] h-[250px] flex-shrink-0 transition-all duration-300 overflow-hidden group",
                                hovered === index &&
                                "bg-gradient-to-tr from-green-600 to-yellow-400 text-white shadow-xl"
                            )}
                        >
                            {/* SVG lines */}
                            <svg
                                className="absolute right-0 top-0 h-full w-[80px] z-0 pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 250"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M80,0 Q60,125 0,250"
                                    stroke="#d1d5db"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <path
                                    d="M0,0 Q20,125 80,250"
                                    stroke="#d1d5db"
                                    strokeWidth="1"
                                    fill="none"
                                />
                            </svg>

                            {/* CARD CONTENT - left aligned + centered vertically */}
                            <div className="relative z-10 h-full flex flex-col justify-center items-start px-6">
                                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">
                                    {service.title}
                                </h3>
                                <p
                                    className={clsx(
                                        "text-xs leading-snug",
                                        hovered === index ? "text-white" : "text-gray-700"
                                    )}
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

export const ServicesCard = () => {
    return <ServicesSection />;
};
