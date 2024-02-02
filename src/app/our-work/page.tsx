import { portfolio } from "@/constants/our-work";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Work | Tekabyt",
  description:
    "Our Team Has Helped Different Business Grow. We boasts of amazing results for our clients that will help speed up and accelerate the growth of your business with our well scrutinized and goal oriented digital marketing experts.",
};

const OurWork = () => {
  return (
    <section className="px-5 md:px-20 flex flex-col gap-10 pt-10 pb-16">
      <h2 className="md:text-center font-semibold text-2xl md:text-4xl capitalize">
        <span className="text-orange-100">Our Team</span> has helped <br />{" "}
        Different Business grow
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
        {portfolio.map((item, idx) => (
          <div data-aos="flip-down" key={idx} className="flex flex-col gap-5">
            <div className="col-span-1 w-full relative rounded shadow hover:scale-105 transition-transform">
              <Image
                placeholder="blur"
                src={item.image}
                alt={item.name}
                width={700}
                height={700}
                className="object-cover"
              />

              <div className="py-3 px-5 flex flex-col gap-3 absolute bottom-0 left-0 w-full bg-gray-80/70">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-black-80">{item.type}</p>
              </div>
            </div>

            <Link
              href={item.url}
              target="_blank"
              className="text-black-80 underline hover:text-blue-100 w-fit"
            >
              Link to Case Study
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
