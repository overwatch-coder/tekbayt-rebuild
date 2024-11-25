"use client";

import { our_team_slide_images } from "@/constants/our-team";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const TeamSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalWidth = carousel.scrollWidth; // Total width of the content

    const animate = () => {
      setScrollPosition((prev) => {
        if (prev >= totalWidth / 2) {
          // Reset the position to half, creating a seamless loop
          return 0;
        }
        return prev + 3; // Increase this value to speed up (higher number means faster scroll)
      });

      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="w-full h-[360px] flex flex-col justify-center relative bg-white overflow-hidden">
      <div className="absolute top-0 h-[70px] w-full bg-white rounded-b-[70%] z-10"></div>
      <div className="absolute bottom-0 h-[70px] w-full bg-white rounded-t-[50%] z-10"></div>
      <div
        ref={carouselRef}
        className="w-full flex flex-nowrap items-start"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Duplicate the array to make it scroll continuously */}
        {[...our_team_slide_images, ...our_team_slide_images].map(
          (src, index) => (
            <div
              key={index}
              className="h-[340px] w-[340px] min-w-[340px] mr-[10px] relative flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TeamSlider;
