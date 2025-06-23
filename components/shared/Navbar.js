"use client";

import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [isOpenSubMenuGallery, setIsOpenSubMenuGallery] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsOpenSubMenu(!isOpenSubMenu);
  };

  const toggleSubMenuGallery = () => {
    setIsOpenSubMenuGallery(!isOpenSubMenuGallery);
  };

  return (
    <header className="py-3 md:py-5 lg:py-3 bg-[var(--color-primary)] w-full fixed top-0 z-[999]">
      {/* Desktop version */}
      <nav className="flex relative justify-between md:justify-center items-center md:gap-12 lg:gap-28 w-11/12 md:w-9/12 mx-auto">
        <div className="flex-shrink-0">
          <motion.div
            initial={{ x: -500, rotate: 720 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
          >
            <Image src="/logo.PNG" alt="Vijay Restaurant Logo" className="w-20 h-20 sm:h-16 sm:w-16 lg:h-24 lg:w-24 ml-0 lg:ml-0 rounded-full" width={300} height={300} />
          </motion.div>
        </div>
        <div className="md:flex hidden">
        <ul className="flex gap-2 md:gap-6 lg:gap-8 text-[10px] md:text-sm lg:text-base pr-20 text-nowrap text-white font-semibold uppercase">
  <li>
    <Link href="/">Home</Link>
  </li>
  <li>
    <Link href="/about">About Us</Link>
  </li>

  {/* ✅ Fixed Dropdown Menu Item */}
  <li className="relative group">
    <div className="flex items-center gap-1 cursor-pointer">
      <p>Menu</p>
      <FaAngleDown />
    </div>

    {/* ✅ Fixed Dropdown Box - No gap */}
    <div
      className="absolute top-full left-0 bg-[var(--color-secondary)] text-white rounded shadow-md
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            pointer-events-none group-hover:pointer-events-auto
            transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0
            flex flex-col z-50 min-w-[180px] p-4 pt-6 text-[12px] md:text-[14px] lg:text-[16px]"
    >
      <Link href="/menu/takeaway" className="py-1 hover:underline cursor-pointer">
        TAKEAWAY MENU
      </Link>
      <Link href="/menu/dine-in" className="py-1 hover:underline cursor-pointer">
        DINE IN MENU
      </Link>
    </div>
  </li>

  <li className="relative group">
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
      <Link href="/gallery/food" className="py-1 hover:underline cursor-pointer">
        FOOD GALLERY
      </Link>
      <Link href="/gallery/interior" className="py-1 hover:underline cursor-pointer">
        INTERIOR GALLERY
      </Link>
    </div>
  </li>

  <li>
    <Link href="/contact">Contact Us</Link>
  </li>
</ul>
        </div>

        <button
          onClick={toggleMenu}
          className="text-white md:hidden cursor-pointer"
        >
          <RiMenu3Line className="size-8" />
        </button>

        {/* Mobile version */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="md:hidden fixed top-0 left-0 w-full h-screen bg-[var(--color-primary)] z-10"
            >
              <div className="flex justify-between py-6 px-4 border-b-[0.5px] border-gray-400">
                <h1 className="text-xl font-bold border-[0.5px] border-gray-400 px-3 py-3 rounded-2xl text-white">
                  Vijay Restaurant
                </h1>
                <button
                  onClick={toggleMenu}
                  className="text-white md:hidden cursor-pointer"
                >
                  <RiCloseLine className="size-10" />
                </button>
              </div>
              <ul className="flex pt-8 pl-8 flex-col gap-6 text-[16px] text-white font-semibold uppercase">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li className="relative">
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpenSubMenu ? "true" : "false"}
                    onClick={toggleSubMenu}
                  >
                    Menu {isOpenSubMenu ? <FaAngleDown className="mr-4" size={23} /> : <FaAngleRight className="mr-4" size={23} />}
                  </button>
                  <AnimatePresence>
                    {isOpenSubMenu && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="mt-2 ml-4 bg-[var(--color-primary)] border-t-[0.5px] border-gray-400"
                      >
                        <li className="py-2 px-4 text-white font-semibold uppercase">
                          <Link href="/menu/takeaway">Takeaway</Link>
                        </li>
                        <li className="py-2 px-4 text-white font-semibold uppercase">
                          <Link href="/menu/dine-in">Dine In</Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li className="relative">
                  <button
                    className="flex items-center justify-between w-full"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpenSubMenuGallery ? "true" : "false"}
                    onClick={toggleSubMenuGallery}
                  >
                    Gallery {isOpenSubMenuGallery ? <FaAngleDown className="mr-4" size={23} /> : <FaAngleRight className="mr-4" size={23} />}
                  </button>
                  <AnimatePresence>
                    {isOpenSubMenuGallery && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="mt-2 ml-4 bg-[var(--color-primary)] border-t-[0.5px] border-gray-400"
                      >
                        <li className="py-2 px-4 text-white font-semibold uppercase">
                          <Link href="/gallery/food">FOOD GALLERY</Link>
                        </li>
                        <li className="py-2 px-4 text-white font-semibold uppercase">
                          <Link href="/gallery/restaurant">INTERIOR GALLERY</Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
