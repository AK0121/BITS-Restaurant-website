"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/uthappam-img.jpg",
  "/paneer-img.jpg",
  "/uthappam-img.jpg",
  "/paneer-img.jpg",
  "/uthappam-img.jpg",
  "/paneer-img.jpg",
  "/uthappam-img.jpg",
  "/paneer-img.jpg",
];

const InteriorPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-no-repeat bg-center bg-cover py-20 px-8 z-10 mt-16 sm:mt-24"
        style={{ backgroundImage: "url('/zig-zag-img.svg')" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-8 tracking-wide text-white"
          >
            INTERIOR GALLERY
          </motion.h1>  

          <motion.p
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed max-w-3xl text-white"
          >
            At Vijay Restaurant, BITS Pilani, we believe in the power of flavors
            to transport you on a culinary journey like no other. Nestled in the
            heart of the campus, our restaurant is a haven for food enthusiasts
            seeking an unforgettable dining experience that tantalizes the
            senses and captures the essence of world cuisine.
          </motion.p>
        </div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 right-8"
        >
          <div className="flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-white">
              HOME
            </Link>
            <span className="text-white">/</span>
            <p className="text-white">INTERIOR GALLERY</p>
          </div>
        </motion.nav>
      </motion.section>
      <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
       className="w-11/12 my-10 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setIndex(i)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              width={200}
              height={200}
              className="object-cover w-full h-full scale-100 group-hover:scale-95 card-shadow transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom]}
        animation={{ fade: 300 }}
      />
    </div>
  );
};

export default InteriorPage;
