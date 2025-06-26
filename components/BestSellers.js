"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bestSellers = [
  {
    name: "Veg Spring Roll",
    image: "/paneer-img.jpg",
  },
  {
    name: "Chilly Paneer",
    image: "/uthappam-img.jpg",
  },
  {
    name: "Veg Fried Rice",
    image: "/rice-img.jpg",
  },
  {
    name: "Cheese Pav Bhaji",
    image: "/dosa-img.jpg",
  },
  {
    name: "Veg Fried Rice",
    image: "/rice-img.jpg",
  },
  {
    name: "Chilly Paneer",
    image: "/uthappam-img.jpg",
  },
  {
    name: "Veg Spring Roll",
    image: "/paneer-img.jpg",
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

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            smoothTransition: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {bestSellers.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`flex flex-col items-center py-20  ${
                index % 2 === 0 ? "-mt-12" : ""
              }`}
            >
              <motion.div
              initial={{y: 300, opacity:0}}
              animate={isInView? {y:0, opacity:1}: {}}
              transition={{duration: 0.5, ease:"easeIn"}}
                className="relative group w-full h-[300px] max-w-xs card-shadow overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width:768px) 30vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <h4 className="mt-4 text-lg font-semibold text-black">
                {item.name}
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
