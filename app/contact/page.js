"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaPaperPlane, FaStar } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaMapPin } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] via-green-900 to-[var(--color-primary)] text-white py-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-white animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
          >
            Experience the finest dining at Vijay Restaurant, BITS Pilani's culinary gem
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Visit Us Today
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Located in the heart of BITS Pilani campus, Vijay Restaurant has been serving 
                  delicious meals to students, faculty, and visitors for years. Come experience 
                  our warm hospitality and mouth-watering cuisine.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-3 rounded-full">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600 text-lg">
                        BITS Pilani Campus<br />
                        Pilani, Rajasthan 333031
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-3 rounded-full">
                      <FaPhoneAlt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Call Us</h3>
                      <p className="text-gray-600 text-xl font-semibold">+91 9876543210</p>
                      <p className="text-gray-500">For reservations & inquiries</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-3 rounded-full">
                      <FaRegClock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Opening Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><span className="font-semibold">Monday - Friday:</span> 7:00 AM - 11:00 PM</p>
                        <p><span className="font-semibold">Saturday - Sunday:</span> 7:00 AM - 12:00 AM</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-3 rounded-full">
                      <HiOutlineMail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600 text-lg">info@vijayrestaurant.com</p>
                      <p className="text-gray-500">We'll get back to you soon!</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">Send us a Message</h3>
                  <p className="text-gray-600">Have a question or want to make a reservation? We'd love to hear from you!</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-lg"
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-lg"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-lg"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-lg resize-none"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#1e3a2b] flex justify-center items-center gap-4 text-white cursor-pointer w-full px-8 py-3 font-semibold border-2 border-[#1e3a2b] hover:bg-white hover:text-black transition-all ease-in-out duration-300"
                  >
                    <FaPaperPlane className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;