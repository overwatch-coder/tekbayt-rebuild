"use client";

import { OurTeamType } from "@/types";
import Image from "next/image";
import React from "react";
import { useState } from "react";

type TeamCardProps = {
  item: OurTeamType;
  idx: number;
};

const TeamCard = ({ item, idx }: TeamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-up"
      key={idx}
      className="col-span-1 rounded shadow-md transition-transform flex flex-col gap-5 items-center mx-auto max-w-md w-full p-10 bg-blue-20"
      // 3D effect on hover
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: isHovered
          ? "rotateY(15deg) rotateX(10deg) translateZ(20px)"
          : "none",
        transition: "transform 0.5s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={700}
        height={700}
        className="object-cover rounded-full border-2 border-black-40 h-40 w-40"
        // Add 3D transformation to the image as well
        style={{
          transform: isHovered ? "translateZ(40px)" : "translateZ(0)",
          transition: "transform 0.5s ease",
        }}
      />

      <div
        className="py-3 px-5 flex flex-col gap-3 items-center"
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
          transition: "transform 0.5s ease",
        }}
      >
        <h4 className="font-semibold text-center md:text-xl">{item.name}</h4>
        <p className="text-black-80 text-center text-sm tracking-wide leading-loose">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
