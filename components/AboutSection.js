// components/AboutSection.tsx
import { montserrat, poppins } from "@/lib/font";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="pt-24 pb-12 sm:pt-40 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center gap-36 lg:gap-16">
        {/* Left Images */}
        <div className="relative w-9/12 mx-auto lg:mx-0 lg:w-1/2 flex justify-center items-center">
          <div className="absolute bottom-36 -left-7 sm:-left-10 sm:bottom-56 w-48 h-64 sm:w-72 sm:h-72 md:w-64 md:h-72 z-10 border-[12px] border-white">
            <Image
              src="/about-img.jpg"
              alt="Interior"
              sizes="(min-width:768px) 30vw 80vw"
              fill
              className="object-cover shadow-lg"
            />
          </div>
          <div className="relative w-64 sm:w-96 h-80 sm:h-96 md:w-72 md:h-96 z-0">
            <Image
              src="/about-img-2.jpg"
              alt="Soup"
              sizes="(min-width:768px) 23vw 70vw"
              fill
              className="object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-3 text-center lg:text-left">
          <h4
            className={`text-sm md:text-lg font-semibold text-[var(--color-primary)] uppercase tracking-wide ${montserrat.className}`}
          >
            Our Story
          </h4>
          <h2 className="text-4xl font-bold text-[RGB(8, 7, 15)]">About Us</h2>
          <p
            className={`text-[#6B6F72] leading-relaxed pt-2 text-[16px] line-h-2.5 ${poppins.className} tracking-wide lg:tracking-wider`}
          >
            At Vijay Restaurant, we believe in the power of flavors to transport
            you on a culinary journey like no other. Nestled in the heart of the
            BITS Pilani, our restaurant is a haven for food enthusiasts seeking
            an unforgettable dining experience that tantalizes the senses and
            captures the essence of world cuisine.
          </p>
          <button className="bg-[#1e3a2b] text-white mt-6 px-6 py-3 w-44 cursor-pointer font-semibold border-2 border-[#1e3a2b] hover:bg-white hover:text-black transition-all ease-in-out duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
