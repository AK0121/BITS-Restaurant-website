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
         initial={{ y: 0, skewY: 0, scaleY: 1 }}
         animate={{ y: 0, skewY: 0, scaleY: 1 }}
         exit={{
           y: "100%",
           skewY: -8,
           scaleY: 1.2,   
           borderTopLeftRadius: "50%",
           borderTopRightRadius: "50%",
         }}
         transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
         className="fixed top-0 left-0 w-full h-screen bg-[var(--color-primary)] z-[9999] flex items-center justify-center origin-top"
       >
            <div className="relative flex items-end justify-center h-full">
              <div className="relative w-[1.5px] h-[80vh] bg-white overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${percent * 0.8}vh` }} 
                  transition={{ ease: "linear", duration: 0.3 }}
                  className="absolute top-0 w-full bg-black"
                />
              </div>

              <div className="absolute bottom-[calc(80vh+2rem)] text-white font-mono text-lg">
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
