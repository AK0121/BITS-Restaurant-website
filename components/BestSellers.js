"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import {Carousel} from "./ui/carsousel";

const slideData = [
  {
    name: "Mattar Paneer",
    src: "/vr-images/13.JPG",
    button: "Order Now",
    title: "Mattar Paneer",
  },
  {
    name: "Dosa",
    src: "/vr-images/18.JPG",
    button: "Order Now",
    title: "Dosa",
  },
  {
    name: "",
    src: "/vr-images/15.JPG",
    button: "Order Now",
    title: "Veg Fried Rice",
  },
  {
    name: "Veg Fried Rice",
    src: "/vr-images/16.JPG",
    button: "Order Now",
    title: "Veg Fried Rice",
  },
  {
    name: "Rabri",
    src: "/vr-images/17.JPG",
    button: "Order Now",
    title: "Rabri",
  },
  {
    name: "Paneer cutlet",
    src: "/vr-images/14.JPG",
    button: "Order Now",
    title: "Paneer cutlet",
  },
  {
    name: "Ice Mocha",
    src: "/vr-images/19.JPG",
    button: "Order Now",
    title: "Ice Mocha",
  },  
];

export default function BestSellers() {
  const ref=useRef(null)
  const isInView = useInView(ref, {once: true, margin:"-100px"})
  return (
    <section className="pt-20 pb-36 bg-[#f8fdfd] px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-sm font-semibold text-green-900 uppercase tracking-wider">
          Vijay Restaurant
        </h3>
        <h2 ref={ref} className="text-4xl md:text-5xl font-bold text-black mt-2 mb-12">
          Best Seller Items
        </h2>
        <Carousel slides={slideData} />
      </div>
    </section>
  );
}
