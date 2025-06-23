"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { Clock, Mail, MapPin, Phone, Heart } from 'lucide-react';
import {FaClock, FaMapPin, FaPhone, FaHeart} from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIcons = [
    { Icon: FaInstagram, color: "from-purple-600 to-pink-500", href: "#" },
    { Icon: FaFacebook, color: "from-blue-600 to-blue-500", href: "#" },
  ];

  return (
    <footer className="relative bg-[color:var(--color-primary)] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-lime-400 to-green-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="flex lg:flex-row flex-col gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-12 flex flex-col justify-center items-center">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="space-y-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Vijay Restaurant
                </h2>
                <p className="text-lg text-gray-300 max-w-md mx-auto">
                  Serving authentic flavors and creating memorable dining experiences 
                  at BITS Pilani since day one.
                </p>
              </motion.div>

              {/* Contact Info Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                      <FaClock className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Opening Hours</h3>
                  </div>
                  <div className="pl-10 space-y-1 text-gray-300">
                    <p className="font-medium">All Days</p>
                    <p className="text-white font-semibold">8:00 AM - 10:00 PM</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                    <IoMail className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                  </div>
                  <div className="pl-10 text-gray-300">
                    <p className="text-white hover:text-emerald-300 transition-colors cursor-pointer">
                      info@vijayrestaurant.com
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-lime-500 to-green-500 p-2 rounded-lg">
                      <FaMapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Location</h3>
                  </div>
                  <div className="pl-10 text-gray-300">
                    <p>BITS Pilani Campus</p>
                    <p>Pilani, Rajasthan 333031</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-lg">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                  </div>
                  <div className="pl-10 text-gray-300">
                    <p className="text-white font-semibold text-lg">+91 9876543210</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialIcons.map(({ Icon, color, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-lime-500/20 to-green-500/20 rounded-full blur-2xl"></div>
                
                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
                >
                  <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/footer-food-image.png"
                      alt="Delicious South Indian food with chai"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Image Caption */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-lg">
                        Authentic Flavors, Memorable Moments
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 bg-black/20 backdrop-blur-sm"
        >
              <div className="flex items-center flex-row justify-center py-2 space-x-2 text-gray-300">
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">© 2025 Vijay Restaurant. Made with</span>
                <FaHeart className="w-4 h-4 text-green-500 fill-current animate-pulse" />
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">in BITS Pilani</span>
              </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
