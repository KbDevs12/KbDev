import Image from "next/image";
import React from "react";

interface CloudProps {
  x: number;
  y: number;
  speed: number;
}
const Cloud = ({ x, y, speed }: CloudProps) => {
  return (
    <div
      data-aos="fade-right"
      className="absolute top-0 animate-cloud"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        animationDuration: `${speed}s`,
        animationName: "cloud-animation, fadeOut",
        animationIterationCount: "infinite, 1",
        animationTimingFunction: "linear, linear",
      }}
    >
      <div className="w-48 h-24 relative">
        <Image src="/cloud.png" alt="Cloud" width={200} height={100} />
      </div>
    </div>
  );
};

export default Cloud;
