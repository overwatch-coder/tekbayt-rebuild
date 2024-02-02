import Button from "@/components/shared/Button";
import { portfolio } from "@/constants/our-work";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <section className="pt-10 pb-20 bg-blue-20 flex flex-col gap-10 items-center">
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Portfolio
      </h2>

      <div className="flex flex-col gap-10 md:flex-row items-center md:justify-between md:gap-16 px-5 md:px-20">
        {portfolio.slice(0, 3).map((item, idx) => (
          <Link
            data-aos="zoom-out-up"
            href={item.url}
            target="_blank"
            key={idx}
            className="flex flex-col items-center gap-5 rounded hover:scale-105 transition w-full h-full"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={1000}
              height={600}
              quality={100}
              className="object-contain"
            />

            <p className="text-black-100 text-lg md:text-xl font-semibold text-center">
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      <Button
        name="See All"
        url={`/our-work`}
        className="px-10 py-3 text-center w-fit"
      />
    </section>
  );
};

export default Portfolio;
