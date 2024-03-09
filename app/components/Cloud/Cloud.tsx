"use client";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Cloud() {
  const ctn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const awan = self.selector!(".cloud");

      for (const Cloud of awan) {
        gsap
          .fromTo(
            Cloud,
            {
              x: -500,
              opacity: Math.floor(Math.random() * (90 - 70 + 1) + 70) / 100,
            },
            {
              x: window.innerWidth,
              duration: Math.floor(Math.random() * (30 - 20 + 1) + 20),
              repeat: -1,
              ease: "none",
              delay: Math.floor(Math.random() * (3 - 0 + 1) + 0),
              immediateRender: true,
            }
          )
          .play();
      }
    }, ctn);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ctn} className="relative w-screen mt-2">
      <Image
        className="cloud absolute"
        src="/cloud.png"
        alt="Cloud"
        width={200}
        height={100}
      />
      <Image
        className="cloud absolute top-24"
        src="/cloud.png"
        alt="Cloud"
        width={100}
        height={50}
      />
      <Image
        className="cloud absolute top-32"
        src="/cloud.png"
        alt="Cloud"
        width={100}
        height={100}
      />
      <Image
        className="cloud absolute top-10"
        src="/cloud.png"
        alt="Cloud"
        width={150}
        height={100}
      />
    </div>
  );
}
