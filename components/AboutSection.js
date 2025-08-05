"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true, margin: "-100px"})


  return (
    <section className="pt-24 pb-12 sm:pt-28 lg:pb-20 bg-white font-body">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center gap-36 lg:gap-16">
        {/* Left Images */}
        <motion.div
  initial={{ x: -700, opacity: 0 }}
  animate={isInView ? { x: 0, opacity: 1 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:w-1/2"
>
  {/* Container with proper aspect ratio */}
  <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
    
    {/* Main image (Vijay and his brother) - Background */}
    <div className="absolute top-8 right-0 w-[70%] h-[75%] z-10">
      <div className="relative w-full h-full border-4 sm:border-8 md:border-12 border-white shadow-2xl">
        <Image
          src="/about-img.JPG"
          alt="Vijay and his brother"
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
          className="object-cover"
          priority
        />
      </div>
    </div>

    {/* Counter image - Overlapping */}
    <div className="absolute bottom-0 left-0 w-[65%] h-[70%] z-20">
      <div className="relative w-full h-full border-4 sm:border-8 md:border-12 border-white shadow-2xl">
        <Image
          src="/about-img-2.JPG"
          alt="Vijay Restaurant's Counter"
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>

    {/* Optional: Decorative background circle */}
    <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 bg-orange-100 rounded-full opacity-30 -z-10"></div>
  </div>
</motion.div>

        {/* Right Content */}
        <motion.div
        initial={{x:700, opacity:0}}
        animate={isInView ? {x:0, opacity:1} : {}}
        transition={{duration: 0.6, ease: "easeOut"}} 
         className="w-full lg:w-1/2 space-y-3 text-center lg:text-left">
          <h4
            className={`text-sm md:text-lg font-semibold text-[var(--color-primary)] uppercase tracking-wide`}
          >
            Our Story
          </h4>
          <h2 className="text-4xl font-bold text-[RGB(8, 7, 15)]">About Us</h2>
          <p
            className={`text-[#6B6F72] leading-relaxed pt-2 mb-4 text-[16px] line-h-2.5 tracking-wide lg:tracking-wider`}
          >
            At Vijay Restaurant, we believe in the power of flavors to transport
            you on a culinary journey like no other. Nestled in the heart of the
            BITS Pilani, our restaurant is a haven for food enthusiasts seeking
            an unforgettable dining experience that tantalizes the senses and
            captures the essence of world cuisine.
          </p>
          <Link href="/about" className="bg-[#1e3a2b] text-white px-6 py-3 w-44 cursor-pointer font-semibold border-2 border-[#1e3a2b] hover:bg-white hover:text-black transition-all ease-in-out duration-300">
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
