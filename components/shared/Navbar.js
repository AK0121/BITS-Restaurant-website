"use client";

import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenuGallery, setIsOpenSubMenuGallery] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeToggle = () => {
    setIsOpen(false);
  };

  const toggleSubMenuGallery = () => {
    setIsOpenSubMenuGallery(!isOpenSubMenuGallery);
  };

  return (
    <header className="py-2 sm:py-3 bg-[var(--color-primary)] w-full fixed top-0 z-[999]">
      {/* Desktop version */}
      <nav className="flex relative justify-between md:justify-center items-center md:gap-12 lg:gap-28 w-11/12 md:w-9/12 mx-auto">
        <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="relative text-xl sm:text-4xl font-bold text-white border-[0.5px] border-white px-7 py-4 sm:py-5 rounded-2xl">
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

            {/* ✅ Fixed Dropdown Menu Item */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <Link href="/menu" onClick={closeToggle}>Menu</Link>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <p>Gallery</p>
                <FaAngleDown />
              </div>

              {/* Fixed Dropdown Box - No gap */}
              <div
                className="absolute top-full left-0 bg-[var(--color-secondary)] text-white rounded shadow-md
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        pointer-events-none group-hover:pointer-events-auto
        transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
        flex flex-col z-50 min-w-[180px] p-4 pt-6 text-[12px] md:text-[14px]"
              >
                <Link
                  href="/gallery/food"
                  className="py-1 hover:underline cursor-pointer"
                >
                  FOOD GALLERY
                </Link>
                <Link
                  href="/gallery/interior"
                  className="py-1 hover:underline cursor-pointer"
                >
                  INTERIOR GALLERY
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
          className="text-white md:hidden cursor-pointer"
        >
          <RiMenu3Line className="size-8" />
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
                  className="text-white md:hidden cursor-pointer"
                >
                  <RiCloseLine className="size-10" />
                </button>
              </div>
              <div className="flex pt-8 pl-8 flex-col gap-10 text-4xl text-white font-semibold uppercase">
                <Link onClick={closeToggle} href="/">
                  Home
                </Link>
                <Link onClick={closeToggle} href="/about">
                  About Us
                </Link>

                <div className="relative">
                  <Link
                    className="flex items-center justify-between w-full"
                    href="/menu"
                    onClick={closeToggle}
                  >
                    Menu
                  </Link>

                </div>

                <div className="relative">
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpenSubMenuGallery ? "true" : "false"}
                    onClick={toggleSubMenuGallery}
                  >
                    Gallery{" "}
                    {isOpenSubMenuGallery ? (
                      <FaAngleDown className="mr-4" size={23} />
                    ) : (
                      <FaAngleRight className="mr-4" size={23} />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpenSubMenuGallery && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="mt-2 ml-4 bg-[var(--color-primary)] border-t-[0.5px] border-gray-400 flex flex-col gap-2"
                      >
                        <Link onClick={closeToggle} href="/gallery/food" className="pt-5 pb-2 px-4 text-white font-semibold uppercase">FOOD GALLERY</Link>
                        <Link onClick={closeToggle} href="/gallery/interior" className="py-2 px-4 text-white font-semibold uppercase">INTERIOR GALLERY</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                  <Link onClick={closeToggle} href="/contact">Contact Us</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
