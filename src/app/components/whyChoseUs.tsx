import React from "react";

const WhyChooseUs: React.FC = () => {
    return (
        <section className="p-10 font-sans">
            {/* Header */}
            <div className="mb-10 flex flex-col items-center">
        <img
          src="/Container (1).svg"
          alt="Why Choose Us"
          className="max-w-full"
        />
      </div>
            {/* Main Cards */}
            <div className="flex justify-between gap-5 mb-10">
                <div className="bg-gray-200 rounded-lg p-5 w-1/3 text-center">
                    <img
                        src="your-image-1.jpg"
                        alt="Data-Driven Strategies"
                        className="w-full h-44 object-cover rounded-lg"
                    />
                    <h3 className="text-lg mt-4 font-semibold">Data-Driven Strategies</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Informed decisions powered by insights and analytics to maximize impact.
                    </p>
                </div>

                <div className="bg-gray-200 rounded-lg p-5 w-1/3 text-center">
                    <img
                        src="your-image-2.jpg"
                        alt="Seamless Collaboration"
                        className="w-full h-44 object-cover rounded-lg"
                    />
                    <h3 className="text-lg mt-4 font-semibold">Seamless Collaboration</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Collaboration with teams to provide the best results, fast and efficient.
                    </p>
                </div>

                <div className="bg-gray-200 rounded-lg p-5 w-1/3 text-center">
                    <img
                        src="your-image-3.jpg"
                        alt="5+ Years Experiences"
                        className="w-full h-44 object-cover rounded-lg"
                    />
                    <h3 className="text-lg mt-4 font-semibold">5+ Years Experiences</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Over 5 years of experience delivering innovative digital solutions.
                    </p>
                </div>
            </div>

            {/* Additional Cards */}
            <div className="flex justify-between gap-5">

                <div className="bg-gray-100 rounded-lg p-5 w-2/3 text-center">
                    <h3 className="text-lg font-semibold mb-2">7 Day Turnaround</h3>
                    <p className="text-sm text-gray-600">
                        Fast and efficient service with a 7-day project turnaround.
                    </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-5 w-1/3 text-center">
                    <h3 className="text-lg font-semibold mb-2">99+ Happy Clients</h3>
                    <p className="text-xl">⭐⭐⭐⭐⭐</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
