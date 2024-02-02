import Button from "@/components/shared/Button";
import React from "react";

const Contact = () => {
  return (
    <section className="px-5 md:px-20 bg-image bg-cover bg-no-repeat bg-center py-14 flex flex-col w-full items-center mx-auto gap-7">
      <p className="text-center text-xl md:text-2xl max-w-xl text-white">
        Let us help you build your business & make your digital product stand
        out
      </p>
      <Button name="Contact Us" url="/contact-us" />
    </section>
  );
};

export default Contact;
