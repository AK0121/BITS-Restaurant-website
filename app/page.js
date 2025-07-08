"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import BestSellers from "@/components/BestSellers";
import { useTransition } from "@/components/shared/TransitionProvider";

export default function Home() {
  const MotionImage = motion.create(Image);
  const { loading } = useTransition();

  return  (
    <>
    <section className="relative w-full h-[120vh] lg:h-[90vh] mt-20 bg-white overflow-hidden">
      {/* Decorative Floating Images */}
      <MotionImage
        initial={{ x: -170, opacity: 0.6 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "linear" }}
        src="/home-top-left.png"
        alt="Leaf top left"
        width={160}
        height={160}
        className="hidden sm:block absolute -top-1 left-0 w-24 h-24 md:w-40 md:h-40 object-contain z-[0]"
      />
      <MotionImage
        initial={{ y: -120, opacity: 0.6 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
        src="/home-top-center.png"
        alt="Herb top center"
        width={120}
        height={120}
        className="absolute top-5 md:top-10 left-1/2 w-24 h-24 transform -translate-x-1/2 object-contain z-0"
      />
      <MotionImage
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "linear" }}
        src="/home-bottom-right.png"
        alt="Leaf bottom right"
        height={200}
        width={200}
        priority
        className="absolute -bottom-6 right-8 lg:right-[20rem] h-auto w-32 lg:w-xl object-contain z-0"
      />
      <MotionImage
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "linear" }}
        src="/home-top-right.png"
        alt="Leaf top right"
        height={200}
        width={200}
        className="absolute rotate-[450deg] sm:rotate-0 top-5 sm:-top-3 lg:-top-10 -right-20 lg:right-28 h-auto w-44 md:w-80 lg:w-[30rem] object-contain z-0"
      />
      <MotionImage
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "linear" }}
        src="/home-bottom-right-2.png"
        alt="Leaf top right"
        height={120}
        width={120}
        className="absolute bottom-20 right-0 lg:right-24 h-auto w-16 md:w-24 object-contain z-0"
      />
      <MotionImage
        initial={{ x: -180 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: "linear" }}
        src="/home-bottom-right-2.png"
        alt="Leaf top right"
        height={120}
        width={120}
        className="absolute bottom-52 left-0 md:-left-5 h-auto w-16 md:w-24 lg:w-44 object-contain z-0"
      />

      {/* Main Content Container */}
      <div className="font-body relative z-10 max-w-7xl mx-auto px-16 pt-48 flex flex-col lg:flex-row items-center justify-between gap-1 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col justify-center pt-0 sm:pt-10 items-center lg:justify-start lg:items-start gap-8 w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: -320 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="text-5xl sm:text-nowrap font-extrabold uppercase text-wrap text-center font-title"
          >
            Vijay Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -320 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
            className={`text-lg text-center lg:text-left text-gray-700 w-10/12`}
          >
            At Vijay Restaurant, we believe in the power of flavors to transport
            you on a culinary journey like no other.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -320 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="bg-[#1e3a2b] text-white cursor-pointer px-8 py-3 w-48 font-semibold border-2 border-[#1e3a2b] hover:bg-white hover:text-black transition-all ease-in-out duration-300"
          >
            See The Feast
          </motion.button>
        </div>

        {/* Hero Dish Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:mr-20">
          <MotionImage
            initial={{ scale: 0, rotate: 360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            src="/home-banner.png"
            alt="Paneer curry bowl"
            width={300}
            height={300}
            className="object-contain absolute z-50 top-0 lg:-top-40 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 w-96 h-96 lg:w-[21rem] lg:h-[21rem]"
            priority
          />
        </div>
      </div>
    </section>
    <AboutSection />
    <BestSellers />
    </>
  );
}
