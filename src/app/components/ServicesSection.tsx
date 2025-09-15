import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], display: 'swap' });


type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <>
      <section className={`${inter.className} mt-20 md:mt-28 overflow-hidden px-4 md:px-12 text-center`}>
        <h2 className="text-5xl sm:text-6xl md:text-9xl font-bold text-[#4B4B4B] tracking-widest flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-block md:hidden text-[#1C1C1F]"
          >
            SERVICES
          </motion.span>
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:inline-block text-[#1C1C1F]"
          >
            SERVICES
          </motion.span>
        </h2>
        <h2 className="text-2xl md:text-left sm:text-2xl text-[#4B4B4B] underline underline-offset-4 tracking-wide uppercase py-9 ml-10 md:mb-[-24px]">
          Services We Offer
        </h2>
        <section className="py-16 sm:py-10 md:ml-90">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-12 sm:space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12"
                >
                  <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-gray-400 font-semibold text-xs sm:text-sm">
                      {service.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#4B4B4B] mt-1 sm:mt-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 justify-center md:justify-start">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 sm:px-4 py-1 rounded-full border border-gray-300 bg-gray-100 text-[10px] sm:text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center mt-4 md:mt-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-gray-400 text-xs sm:text-sm">Image</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}