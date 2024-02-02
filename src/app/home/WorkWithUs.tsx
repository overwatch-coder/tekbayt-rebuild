import { why_work_with_us } from "@/constants/home";
import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  return (
    <section className="py-10 bg-blue-20 flex flex-col gap-10 text-center items-center px-5 md:px-20 mx-auto">
      <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-semibold">
        Why work with us?
      </h2>

      <p
        data-aos="fade-up"
        className="text-base text-black-80 font-normal md:max-w-3xl"
      >
        We are team driven these common values that that helps us get amazing
        result that will boost the speed of your business growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-10 md:gap-20">
        {why_work_with_us.map((item, idx) => (
          <div
            data-aos="flip-up"
            key={idx}
            className="flex flex-col gap-6 rounded-lg shadow-md items-center bg-white px-5 py-10 w-full h-full md:w-[270px] md:h-[300px] col-span-1"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={50}
              height={50}
              quality={100}
              className="object-contain"
            />

            <h3 className="text-black-100 text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-black-80 text-sm tracking-wide leading-loose">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkWithUs;
