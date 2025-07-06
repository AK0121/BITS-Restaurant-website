"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let timeout;
    let interval;

    interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            setLoading(false);
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
         <motion.div
         key="loader"
         initial={{ y: 0 }}
         animate={{ y: 0 }}
         exit={{ y: "100%" }}
         transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
         className="fixed top-0 w-screen h-screen bg-[var(--color-primary)] z-[9999]"
       >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-[1.5px] h-[80vh] bg-white">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${percent * 0.8}vh` }} 
                  transition={{ ease: "linear", duration: 0.3 }}
                  className="w-full bg-black"
                />
              </div>

              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-white font-mono text-lg">
                {percent}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>{children}</div>
    </>
  );
}