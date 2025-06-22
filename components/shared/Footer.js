import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0c1f14] h-screen w-full flex flex-col md:flex-row justify-center gap-32 text-white">
      <section className="w-full md:w-1/2 text-content flex flex-col gap-10 pt-10 pl-7">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold uppercase">openning hours</h1>
          <div className="w-28 h-[2px] bg-white mt-1"></div>
          <p className="text-sm">All Day : 8:00 AM - 10:00 PM</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold uppercase">emial</h1>
          <div className="w-28 h-[2px] bg-white mt-1"></div>
          <p className="text-sm">info@vijayrestaurant.com</p>
        </div>
        <div>
          <h1 className="text-xl font-bold uppercase">Social media</h1>
          <div className="w-28 h-[2px] bg-white mt-1"></div>
          <div className="flex gap-2 justify-start items-center pt-5">
            <div className="bg-white p-3 rounded-full flex justify-center items-center cursor-pointer">
              <FaInstagram size={15} className="text-black" />
            </div>
            <div className="bg-white p-3 rounded-full flex justify-center items-center cursor-pointer">
              <FaFacebook size={15} className="text-black" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-[1px] bg-gray-500 mb-4"></div>
          <p className="text-sm text-center">
            © 2025 Vijay Restaurant. All rights reserved.
          </p>
        </div>
      </section>
      <section className="w-full md:w-1/2 h-full relative -top-32">
        <div className="relative w-full h-72 md:h-full">
          <Image
            src="/footer-food-image.png"
            alt="Delicious South Indian food with chai"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain rounded-md shadow-lg"
            priority
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
