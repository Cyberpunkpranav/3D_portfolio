"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({ children }) {
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });
    
    // Scroll to the top when pathname changes
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [pathname]); // Re-run effect when pathname changes

  return <>{children}</>;
}
