"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import GalleryLayout from "@/components/layouts/GalleryLayout";
import PhotoAlbum from "react-photo-album";
import Image from "next/image";
import "react-photo-album/styles.css";

// ✅ Photos array with required width & height
const images = [
  { src: "/vr-images/1.jpg", width: 800, height: 600, title: "Veg Spring Roll" },
  { src: "/vr-images/4.jpg", width: 800, height: 600, title: "Chilly Paneer" },
  { src: "/vr-images/5.jpg", width: 600, height: 900, title: "Veg Fried Rice" },
  { src: "/vr-images/6.jpg", width: 1200, height: 800, title: "Cheese Pav Bhaji" },
  { src: "/vr-images/7.jpg", width: 1000, height: 700, title: "Veg Fried Rice" },
  { src: "/vr-images/8.jpg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/9.jpg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/10.jpg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/13.jpg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/14.jpg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/15.jpg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/16.jpg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/17.jpg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/18.jpg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/19.jpg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/20.jpg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/21.jpg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/22.jpg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/23.jpg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/24.png", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/25.jpeg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/26.jpeg", width: 700, height: 700, title: "Chilly Paneer" },
  { src: "/vr-images/27.jpeg", width: 700, height: 700, title: "Veg Spring Roll" },
  { src: "/vr-images/28.jpg", width: 700, height: 700, title: "Chilly Paneer" },
];

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  const scrollY = useScroll().scrollY;
  const yTransform = useTransform(scrollY, [0, 1000], [0, -20]);

  return (
    <GalleryLayout>
      {/* Header Section */}
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
            OUR MEMORIES
          </motion.h1>

          <motion.p
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed max-w-3xl text-white"
          >
            Moments we cherish, experiences we share, and the stories we tell.
            Welcome to Our Memories, a collection that captures the essence of
            our journey together.
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
            <Link href="/" className="text-white hover:underline">
              HOME
            </Link>
            <span className="text-white">/</span>
            <p className="text-white">OUR MEMORIES</p>
          </div>
        </motion.nav>
      </motion.section>

      {/* Gallery Section */}
      <div className="px-8 py-16 bg-white">
        <PhotoAlbum
          layout="masonry"
          photos={images}
          targetRowHeight={300}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={({ photo, imageProps }) => (
            <Image
              {...imageProps}
              style={{ y: yTransform }}
              alt={photo.title}
              className="rounded-xl shadow-lg hover:scale-[1.03] transition-transform"
              placeholder="blur"
              blurDataURL="/tiny-placeholder.jpg"
            />
          )}
        />
      </div>

      {/* Lightbox Popup */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
        plugins={[Zoom]}
      />
    </GalleryLayout>
  );
}
