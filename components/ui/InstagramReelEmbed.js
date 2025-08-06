// "use client";
// import { useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// export default function InstagramReelShowcase() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//   const reels = [
//     "https://www.instagram.com/reel/DM5HVzZvltk/?utm_source=ig_web_copy_link",
//     "https://www.instagram.com/reel/DM9ygfvvafb/?utm_source=ig_web_copy_link&igsh=MXZ6ODI0ZDJoa2tlYQ==",
//     "https://www.instagram.com/reel/DM4aeRoTAye/?utm_source=ig_web_copy_link&igsh=cHVhNjVwYjZiOHA1"
//   ];

//   useEffect(() => {
//     // Load Instagram embed script
//     const script = document.createElement("script");
//     script.src = "https://www.instagram.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Re-process embeds when component mounts
//     const timer = setTimeout(() => {
//       if (window.instgrm) {
//         window.instgrm.Embeds.process();
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 100,
//       rotateY: -15,
//       scale: 0.8
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       rotateY: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 0.8
//       }
//     },
//   };

//   const glowVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: { 
//       scale: 1, 
//       opacity: [0, 0.3, 0],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         repeatType: "loop",
//       }
//     }
//   };

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen bg-[#ffffff] py-20 px-4 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             rotate: 360,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-yellow-400/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             rotate: -360,
//             scale: [1.2, 1, 1.2],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-l from-yellow-400/10 to-emerald-500/10 rounded-full blur-3xl"
//         />
//       </div>

//       {/* Floating Particles */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             y: [-20, -40, -20],
//             x: [-10, 10, -10],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 3 + i * 0.5,
//             repeat: Infinity,
//             delay: i * 0.3,
//           }}
//           className="absolute w-2 h-2 bg-yellow-400 rounded-full blur-sm"
//           style={{
//             top: `${20 + i * 15}%`,
//             left: `${10 + i * 15}%`,
//           }}
//         />
//       ))}

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//             className="text-5xl md:text-8xl font-bold text-gray-950 mb-6 font-poppins"
//           >
//             From Our Kitchen
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-xl md:text-2xl text-gray-600 font-light tracking-wide font-poppins"
//           >
//             Experience the magic behind every dish
//           </motion.p>
//         </motion.div>

//         {/* Instagram Reels Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 perspective-1000"
//         >
//           {reels.map((reelUrl, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ 
//                 scale: 1.05, 
//                 rotateY: 5,
//                 transition: { type: "spring", stiffness: 300, damping: 20 }
//               }}
//               className="relative group"
//             >
//               {/* Glow Effect */}
//               <motion.div
//                 variants={glowVariants}
//                 className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-yellow-400/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:opacity-60 transition-opacity duration-300"
//               />
              
//               {/* Card Container */}
//               <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/20 shadow-2xl overflow-hidden">
//                 {/* Decorative Corner Elements */}
//                 <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-br-full" />
//                 <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-emerald-500/20 to-transparent rounded-tl-full" />
                
//                 {/* Instagram Embed */}
//                 <div className="relative z-10">
//                   <blockquote
//                     className="instagram-media"
//                     data-instgrm-captioned
//                     data-instgrm-permalink={reelUrl}
//                     data-instgrm-version="14"
//                     style={{
//                       background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
//                       border: "1px solid rgba(16, 185, 129, 0.2)",
//                       borderRadius: "16px",
//                       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
//                       margin: "0",
//                       maxWidth: "100%",
//                       minWidth: "280px",
//                       padding: 0,
//                       width: "100%",
//                       height: "400px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#10b981",
//                       fontSize: "18px",
//                       fontWeight: "600",
//                       textAlign: "center"
//                     }}
//                   >
//                     <div className="flex flex-col items-center space-y-4">
//                       <div className="w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
//                       <span>Instagram Reel {index}</span>
//                       <span className="text-sm text-gray-400">Replace with your reel URL</span>
//                     </div>
//                   </blockquote>
//                 </div>

//                 {/* Shimmer Effect */}
//                 <motion.div
//                   animate={{
//                     x: [-100, 400],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     repeatDelay: 3,
//                     ease: "easeInOut"
//                   }}
//                   className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
//                 />
//               </div>

//               {/* Floating Label */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
//                 className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
//               >
//                 Fresh Content
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 1.5 }}
//           className="text-center mt-20"
//         >
//           <motion.button
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300"
//           >
//             <span>Follow Our Journey</span>
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-5.1 5.1c-.292.293-.677.44-1.061.44s-.769-.147-1.061-.44l-5.1-5.1c-.586-.585-.586-1.536 0-2.121.585-.586 1.535-.586 2.121 0L12 10.672l4.632-4.632c.586-.586 1.536-.586 2.121 0 .586.585.586 1.536 0 2.12z"/>
//             </svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }