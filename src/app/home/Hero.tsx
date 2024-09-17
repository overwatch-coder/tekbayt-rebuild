import React from "react";
import hero_image from "@/assets/home/hero_image.png";
import excellent from "@/assets/home/excellent.png";
import Image from "next/image";
import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section className="px-5 md:px-20 flex flex-col gap-10 items-center md:flex-row md:justify-between pt-5 pb-10 md:pb-20">
      <div
        data-aos="fade-right"
        className="flex flex-col gap-5 items-center md:items-start text-center md:text-start"
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-black-100 leading-loose tracking-wide relative">
          <span className="before:animate-change before:absolute before:bottom-8 md:before:bottom-9 before:left-0" />{" "}
          Increase the <span className="text-blue-100 animate-fade">speed</span>{" "}
          of your business
        </h1>

        <p className="text-black-80 font-normal text-sm md:text-base">
          We speed up your business growth by building amazing & unique brands
          for your business and products with the best customer you can think
          of.
        </p>

        <Button
          url="/contact-us"
          name="Start a Project"
          className="w-full md:w-auto py-4 md:py-3 uppercase"
        />
      </div>

      <div data-aos="fade-left" className="relative">
        <Image
          src={hero_image}
          alt="Tekbayt hero image"
          width={800}
          height={800}
          quality={100}
          className="object-cover"
          priority
        />

        <Image
          src={excellent}
          alt="Tekbayt hero floating image"
          className="absolute -bottom-3 left-0 animate-bounce object-contain"
          width={80}
          height={80}
          quality={100}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
