import Button from "@/components/shared/Button";
import { who_we_are } from "@/constants/home";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-10 flex flex-col gap-10 text-center items-center w-full">
      <div className="flex flex-col gap-5 px-5 md:px-20">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-semibold">
          Who we are
        </h2>

        <p
          data-aos="fade-up"
          className="text-base text-black-80 font-normal md:max-w-3xl"
        >
          We boasts of amazing results for our clients that will help speed up
          and accelerate the growth of your business with our well scrutinized
          and goal oriented digital marketing experts.
        </p>
      </div>

      <div className="flex flex-col gap-10 md:gap-16">
        {who_we_are.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-10 md:gap-20 md:flex-row md:items-center md:justify-between bg-white odd:bg-blue-20 py-8 md:even:flex-row-reverse w-full px-5 md:px-20"
          >
            <Image
              data-aos="fade-right"
              src={item.image}
              alt={item.title}
              width={1200}
              height={1200}
              quality={100}
              className="object-cover"
            />

            <div
              data-aos="fade-left"
              className="flex flex-col gap-7 items-start"
            >
              <h3 className="text-black-100 text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-black-80 text-sm tracking-wide leading-loose text-start">
                {item.desc}
              </p>

              <Button
                name="Learn more"
                url={`/services#${item.path}`}
                className="w-fit"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
