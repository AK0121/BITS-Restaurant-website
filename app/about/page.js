"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-no-repeat bg-center bg-cover py-20 px-8 z-10"
        style={{ backgroundImage: "url('/zig-zag-img.svg')" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl font-bold mb-8 tracking-wide text-white"
          >
            ABOUT US
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg leading-relaxed max-w-3xl text-white"
          >
            At Vijay Restaurant, a part of Birla Institute of Technology and
            Science, Pilani since 1980, we believe in the power of flavors to
            transport you on a culinary journey like no other. Nestled in the
            heart of the campus, our restaurant is a haven for food enthusiasts
            seeking an unforgettable dining experience that tantalizes the
            senses and captures the essence of world cuisine.
          </motion.p>
        </div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute top-8 right-8"
        >
          <div className="flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-white">
              HOME
            </Link>
            <span className="text-white">/</span>
            <p className="text-white">ABOUT US</p>
          </div>
        </motion.nav>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl card-shadow"
              >
                <Image
                  src="/about-page-img-2.jpg"
                  alt="Restaurant interior with warm lighting and elegant seating"
                  width={500}
                  height={500}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden h-64 rounded-xl card-shadow"
              >
                <Image
                  src="/about-page-img-1.jpg"
                  alt="Elegant dining area with crystal chandelier and wooden furniture"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="overflow-hidden h-64 rounded-xl card-shadow"
              >
                <Image
                  src="/about-page-img-3.jpg"
                  alt="Restaurant interior with warm lighting and elegant seating"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden relative bottom-32 rounded-xl card-shadow"
              >
                <Image
                  src="/about-page-img-4.jpg"
                  alt="Elegant dining area with crystal chandelier and wooden furniture"
                  width={500}
                  height={500}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-slate-800 mb-10"
              >
                About us
              </motion.h2>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 flex justify-start gap-5 pb-40 flex-col text-lg leading-relaxed"
              >
                <p>
                At <span className="font-semibold text-slate-800">Vijay Restaurant</span>, a part of{" "}
                <span className="font-semibold text-slate-800">
                  Birla Institute of Technology and Science, Pilani
                </span>{" "}
                since 1980, we believe in the power of flavors to transport you
                on a culinary journey like no other. Nestled in the heart of the
                campus, our restaurant is a haven for food enthusiasts seeking
                an unforgettable dining experience that tantalizes the senses and
                captures the essence of world cuisine.
                </p>
                <p>
                  Our chefs have carefully crafted a menu that blends
                  traditional flavors with modern twists, ensuring that every
                  dish is a masterpiece. From the aromatic spices of Indian
                  cuisine to the rich flavors of international dishes, every
                  bite is a testament to our commitment to quality and
                  excellence.
                </p>
                <p>
                  We take pride in our exceptional service, warm hospitality,
                  and attention to detail. Our staff is dedicated to ensuring
                  that every guest feels welcome and valued, whether you're a
                  student, a professor, or just visiting the campus. So come,
                  indulge in the flavors of the world, and let us pamper you
                  with our signature Vijay Restaurant experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
