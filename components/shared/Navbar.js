"use client";

import Link from "next/link";
import { RiHome2Line, RiInformationLine, RiGalleryLine, RiMailLine } from "react-icons/ri";
import { MdOutlineMenuBook, MdOutlineRestaurantMenu  } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeToggle = () => {
    setIsOpen(false);
  };

  return (
    <header className="py-2 sm:py-3 bg-[var(--color-primary)] w-full fixed top-0 z-[999]">
      {/* Desktop version */}
      <nav className="flex relative justify-between md:justify-center items-center md:gap-12 lg:gap-28 w-11/12 md:w-9/12 mx-auto">
        <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="relative text-xl sm:text-4xl font-bold text-white border-[0.5px] border-white px-10 py-4 sm:py-5 rounded-2xl">
                <span className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 font-extralight text-gray-400 sm:text-[10px] text-[8px]">
                  since 1980
                </span>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 font-extralight text-gray-400 sm:text-[8px] text-[6px]">
                  One Bite at a Time
                </span>
                Vijay&#8217;s
              </h1>
            </Link>
        </div>
        <div className="md:flex hidden">
          <div className="flex gap-2 md:gap-6 lg:gap-8 text-[10px] md:text-sm lg:text-base pr-20 text-nowrap text-white font-semibold uppercase">
            <div>
              <Link href="/">Home</Link>
            </div>

            <div>
              <Link href="/about">About Us</Link>
            </div>
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <Link href="/menu" onClick={closeToggle}>Menu</Link>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
              <Link
                  href="/gallery"
                  className="cursor-pointer"
                >
                  GALLERY
                </Link>
              </div>
            </div>

            <div>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="flex items-center gap-2 bg-gray-200/10 text-white md:hidden rounded-full px-4 py-2 cursor-pointer"
        >
          <IoFastFood className="text-2xl" />
          <span className="text-2xl">Menu</span>
        </button>

        {/* Mobile version */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden fixed top-0 left-0 w-full h-screen bg-[var(--color-primary)] z-10"
            >
              <div className="flex justify-between py-6 px-4 border-b-[0.5px] border-gray-400">
              <h1 className="relative text-xl sm:text-4xl font-bold text-white border-[0.5px] border-white px-7 py-4 sm:py-5 rounded-2xl">
                <span className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 font-extralight text-gray-400 sm:text-[10px] text-[8px]">
                  since 1980
                </span>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 font-extralight text-gray-400 sm:text-[8px] text-[6px]">
                  One Bite at a Time
                </span>
                Vijay&#8217;s
              </h1>
                <button
                  onClick={handleToggle}
                  className="flex items-center gap-2 bg-gray-200/10 text-white md:hidden rounded-full px-4 py-2 cursor-pointer"
                >
                  <span className="text-2xl">Close</span>
                  <MdOutlineRestaurantMenu className="size-10" />
                </button> 
              </div>
              <div className="flex pt-8 flex-col gap-10 w-4/5 mx-auto">
                <Link
                  onClick={closeToggle}
                  href="/"
                  className="text-3xl text-center text-white font-semibold uppercase hover:text-gray-300 transition duration-300 ease-in-out bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-3 w-full mx-auto flex items-center gap-4"
                >
                  <RiHome2Line className="size-6" />
                  Home
                </Link>
                <Link
                  onClick={closeToggle}
                  href="/about"
                  className="text-3xl text-center text-white font-semibold uppercase hover:text-gray-300 transition duration-300 ease-in-out bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-3 w-full mx-auto flex items-center gap-4"
                >
                  <RiInformationLine className="size-6" />
                  About Us
                </Link>

                <div className="relative">
                  <Link
                    className="flex items-center justify-between w-full"
                    href="/menu"
                    onClick={closeToggle}
                  >
                    <span className="text-3xl text-center text-white font-semibold uppercase hover:text-gray-300 transition duration-300 ease-in-out bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-3 w-full mx-auto flex items-center gap-4">
                      <MdOutlineMenuBook className="size-6" />
                      Menu
                    </span>
                  </Link>

                </div>

                <div className="relative">
                  <Link
                    className="flex items-center justify-between w-full"
                    href="/gallery"
                    onClick={closeToggle}
                  >
                    <span className="text-3xl text-center text-white font-semibold uppercase hover:text-gray-300 transition duration-300 ease-in-out bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-3 w-full mx-auto flex items-center gap-4">
                      <RiGalleryLine className="size-6" />
                      Gallery
                    </span>
                  </Link>
                </div>
                  <Link
                    onClick={closeToggle}
                    href="/contact"
                    className="text-3xl text-center text-white font-semibold uppercase hover:text-gray-300 transition duration-300 ease-in-out bg-[rgba(255,255,255,0.1)] rounded-xl px-6 py-3 w-full mx-auto flex items-center gap-4"
                  >
                    <RiMailLine className="size-6" />
                    Contact Us
                  </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
