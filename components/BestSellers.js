"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import {Carousel} from "./ui/carsousel";

const slideData = [
  {
    name: "Veg Spring Roll",
    src: "/vr-images/13.JPG",
    button: "Order Now",
    title: "Veg Spring Roll",
  },
  {
    name: "Chilly Paneer",
    src: "/vr-images/18.JPG",
    button: "Order Now",
    title: "Chilly Paneer",
  },
  {
    name: "Veg Fried Rice",
    src: "/vr-images/15.JPG",
    button: "Order Now",
    title: "Veg Fried Rice",
  },
  {
    name: "Cheese Pav Bhaji",
    src: "/vr-images/16.JPG",
    button: "Order Now",
    title: "Cheese Pav Bhaji",
  },
  {
    name: "Veg Fried Rice",
    src: "/vr-images/17.JPG",
    button: "Order Now",
    title: "Veg Fried Rice",
  },
  {
    name: "Chilly Paneer",
    src: "/vr-images/14.JPG",
    button: "Order Now",
    title: "Chilly Paneer",
  },
  {
    name: "Veg Spring Roll",
    src: "/vr-images/19.JPG",
    button: "Order Now",
    title: "Veg Spring Roll",
  },  
];

export default function BestSellers() {
  const ref=useRef(null)
  const isInView = useInView(ref, {once: true, margin:"-100px"})
  return (
    <section className="pt-20 pb-36 bg-[#f8fdfd] px-6 md:px-10">
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
