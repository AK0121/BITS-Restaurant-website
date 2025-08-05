"use client";
import { ReactLenis } from "lenis/react";

export default function GalleryLayout({ children }) {
  return (
    <ReactLenis 
      root 
      options={{
        smoothWheel: true,
        lerp: 0.1,        // smoothness
        duration: 1.4     // scroll speed
      }}
    >
      {children}
    </ReactLenis>
  );
}
