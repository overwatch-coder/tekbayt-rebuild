import React from "react";
import contact_us from "@/assets/contact_us/contact_us.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Contact Us | Tekabyt",
  description:
    "LET'S TALK ABOUT BUSINESS. We are always ready to attend to you for any kind of digital services that you might need.",
};

const ContactUs = () => {
  return (
    <section className="px-5 md:px-20 flex flex-col py-10 md:py-20 p-5 md:gap-10 md:flex-row md:items-start md:justify-between">
      <div data-aos="zoom-out" className="flex flex-col gap-3 w-full">
        <h2 className="text-center md:text-start text-3xl md:text-4xl uppercase text-black-100 font-semibold">
          Let&apos;s talk about{" "}
          <span className="text-orange-100">business</span>
        </h2>
        <p className="text-center md:text-start text-base font-normal tracking-wide leading-loose text-black-80 md:max-w-xl">
          We are always ready to attend to you for any kind of digital services
          that you want.
        </p>
        <Image
          placeholder="blur"
          src={contact_us}
          width={500}
          height={500}
          quality={100}
          alt="contact us image"
          className="object-cover flex-shrink-0"
        />
      </div>

      <Form />
    </section>
  );
};

export default ContactUs;
