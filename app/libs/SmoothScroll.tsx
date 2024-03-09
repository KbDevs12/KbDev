"use client";
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();
    AOS.init();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return children;
}
