import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  title: string;
  rating: number;
  quote: string;
};

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <div className="relative w-full">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-6 bg-gray-50 flex-shrink-0 hover:shadow-lg transition-shadow max-w-xs"
            >
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-[#4B4B4B]">{testimonial.rating.toFixed(1)}</span>
                <span className="ml-2 text-yellow-400 text-lg">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {testimonial.rating % 1 >= 0.5 ? '½' : ''}
                </span>
              </div>
              <p className="text-gray-700 text-sm italic break-words">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}