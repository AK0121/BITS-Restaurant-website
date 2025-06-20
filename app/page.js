import { poppins } from "@/lib/font";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen relative bg-white">
      <div className="absolute w-40 h-40 top-0 -left-10">
        <Image src="/home-top-left.png" alt="food" width={200} height={200} className=" object-contain" />
      </div>
      <div className="absolute w-40 h-40 bottom-0 -right-10">
        <Image src="/home-bottom-right.png" alt="food" width={200} height={200} className=" object-contain" />
      </div>

      <div className="absolute w-40 h-40 top-4">
        <Image src="/home-top-center.png" alt="food" width={120} height={120} className=" object-contain" />
      </div>
    <section className="relative h-screen w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center">
      <div className="Main-text flex flex-col gap-8 w-5/12 mr-40 ml-2 mb-20">
        <h1 className="text-5xl font-bold uppercase">Vijay Restaurant</h1>
        <p className={`text-lg ${poppins.className}`}>At Vijay Restaurant, we believe in the power of flavors to transport you on a culinary journey like no other.</p>
        <button className="bg-[#1e3a2b] text-white px-4 py-3 w-40 font-semibold">Order Now</button>
      </div>
      <div className="relative z-50 image-content w-80 lg:w-96">
        <Image src="/home-banner.png" alt="food" width={500} height={500} className="object-contain" />
      </div>
    </section>
    </div>
  );
}
