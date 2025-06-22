"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Type-safe value context
const TransitionContext = createContext(null);

export const useTransition = () => useContext(TransitionContext);

export function TransitionProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <TransitionContext.Provider value={{ loading, percent }}>
      {children}
    </TransitionContext.Provider>
  );
}
