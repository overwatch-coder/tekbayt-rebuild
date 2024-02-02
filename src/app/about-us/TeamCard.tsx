import { OurTeamType } from "@/types";
import Image from "next/image";
import React from "react";

type TeamCardProps = {
  item: OurTeamType;
  idx: number;
};

const TeamCard = ({ item, idx }: TeamCardProps) => {
  return (
    <div
      data-aos="fade-up"
      key={idx}
      className="col-span-1 rounded shadow-md hover:scale-105 transition-transform flex flex-col gap-5 items-center mx-auto max-w-md w-full p-10 bg-blue-20"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={700}
        height={700}
        className="object-cover rounded-full border-2 border-black-40 h-40 w-40"
      />

      <div className="py-3 px-5 flex flex-col gap-3 items-center">
        <h4 className="font-semibold text-center md:text-xl">{item.name}</h4>
        <p className="text-black-80 text-center text-sm tracking-wide leading-loose">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
