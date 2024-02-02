import Button from "@/components/shared/Button";
import { services } from "@/constants/services";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const WhatWeOffer = () => {
  return (
    <section className="py-10 flex flex-col gap-10 text-center items-center w-full">
      <div data-aos="fade-up" className="flex flex-col gap-5 px-5 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-black-80">
          What we offer
        </h2>

        <p className="text-base text-black-80 font-normal md:max-w-3xl">
          We boasts of amazing results for our clients that will help speed up
          and accelerate the growth of your business with our well scrutinized
          and goal oriented digital marketing experts.
        </p>

        <Button
          name="Start A Project"
          url="/contact-us"
          className="w-fit mx-auto text-center"
        />
      </div>

      <div className="flex flex-col gap-10 md:gap-16">
        {services.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="flex flex-col gap-10 md:gap-20 md:flex-row md:items-center md:justify-between bg-white odd:bg-blue-20 py-8 md:even:flex-row-reverse w-full px-5 md:px-20"
          >
            <Image
              data-aos="fade-right"
              src={item.image}
              alt={item.name}
              width={1500}
              height={1500}
              quality={100}
              className="object-cover"
            />

            <div
              data-aos="fade-left"
              className="flex flex-col gap-7 items-start"
            >
              <h3 className="text-black-100 text-lg md:text-2xl font-semibold">
                {item.name}
              </h3>

              <p className="text-black-80 text-sm tracking-wide leading-loose text-start">
                {item.desc}
              </p>

              <ul className="flex flex-col gap-5 items-start text-start">
                {item.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-black-80 text-sm flex items-center gap-1"
                  >
                    <BsDot size={25} color="black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
