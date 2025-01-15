"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";

export default function LenisProvider({ children }) {
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      direction: "vertical",
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Scroll to the top when pathname changes
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [pathname]); // Re-run effect when pathname changes

  return <>{children}</>;
}
