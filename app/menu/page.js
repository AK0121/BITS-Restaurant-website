"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaClock, FaTimes, FaSearchPlus, FaPhoneAlt} from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { LuUtensilsCrossed } from "react-icons/lu";

export default function MenuPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuImages = [
    { src: "/menu-1.webp", alt: "Main Menu", title: "Main Dishes" },
    { src: "/menu-2.webp", alt: "Beverages Menu", title: "Beverages & Desserts" }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % menuImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const openModal = () => {
    if (isMobile) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Modal Component
  const MenuModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-sm max-h-[100vh] bg-white rounded-lg overflow-hidden">
        {/* Modal Header */}
        <div onClick={closeModal} className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] pt-14 h-40 flex justify-center items-center gap-2 text-4xl text-white">
            <h3 className="text-center font-bold">close</h3>
              <FaTimes className="pt-0.5" />
        </div>

        {/* Modal Content */}
        <div className="relative bg-gray-100 h-[70vh]">
          {menuImages.map((menu, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentImageIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentImageIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              {/* Loading Shimmer */}
              {!imageLoaded[index] && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                </div>
              )}
              
              <Image
                src={menu.src}
                alt={menu.alt}
                fill
                sizes="100vw"
                className={`object-contain transition-opacity duration-500 ${
                  imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(index)}
                priority={index === 0}
                quality={90}
              />
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t">
          <div className="flex justify-center gap-2 mb-3">
            {menuImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-amber-400 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View ${menuImages[index].title}`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            Pinch to zoom for better view
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <LuUtensilsCrossed className="w-12 h-12 text-amber-300" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-amber-300">Exquisite</span> Menu
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover a culinary journey crafted with passion, featuring fresh ingredients and authentic flavors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-amber-200">
              <div className="flex items-center gap-2">
                <FaClock className="w-5 h-5" />
                <span>Open Daily 08:30 AM - 10:30 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-12 sm:h-16 lg:h-20">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(255 251 235)" />
          </svg>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Menu Categories */}
          <div className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] px-6 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {menuImages.map((menu, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    currentImageIndex === index
                      ? 'bg-white text-amber-400 shadow-lg scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                  }`}
                >
                  {menu.title}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Image Display */}
          <div className="relative">
            <div className="relative overflow-hidden bg-gray-100 min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]">
              {menuImages.map((menu, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-x-0'
                      : index < currentImageIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  {/* Loading Shimmer */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                    </div>
                  )}
                  
                  <Image
                    src={menu.src}
                    alt={menu.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    className={`object-contain transition-opacity duration-500 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    priority={index === 0}
                    quality={90}
                  />
                </div>
              ))}

              {/* Mobile: Tap to open modal overlay */}
              {isMobile && (
                <div 
                  className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
                  onClick={openModal}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                    <FaSearchPlus className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            {menuImages.length > 1 && !isMobile && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
                  aria-label="Previous menu"
                >
                  <FaArrowAltCircleLeft className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white cursor-pointer shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
                  aria-label="Next menu"
                >
                  <FaArrowAltCircleRight className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {menuImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {menuImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-amber-400 scale-125'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`View ${menuImages[index].title}`}
                  />
                ))}
              </div>
            )}

            {/* Mobile: Tap to view hint */}
            {isMobile && (
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                Tap to view
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <GiCoffeeCup className="w-16 h-16 text-amber-200 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Experience Amazing Flavors?
            </h2>
            <p className="text-amber-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Book your table now and let our chefs create an unforgettable dining experience for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.openinapp.co/a5xz0" className="bg-white text-amber-400 cursor-pointer px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Reserve Table
              </a>
              <a href="tel:+917014303606" className="bg-amber-400 text-white cursor-pointer px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-1 justify-center">
                Order Online <FaPhoneAlt className="animate-bounce"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <MenuModal />}

      {/* Custom Styles for Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}