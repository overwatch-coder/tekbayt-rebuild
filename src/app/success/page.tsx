"use client";
import Button from "@/components/shared/Button";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Success = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState(searchParams.get("success"));

  useEffect(() => {
    if (!searchParams.has("success")) {
      setMessage(null);
      router.push("/contact-us");
    }

    if (searchParams.get("success") !== "true") {
      setTimeout(() => {
        router.push("/contact-us");
      }, 5000);
    }
  }, [router, searchParams]);

  if (!message) {
    return router.push("/contact-us");
  }

  return (
    <>
      <title>Thank you for contacting us! | Tekabyt</title>
      <meta name="description" content="We will be in touch with you shortly" />
      <section
        data-aos="zoom-out"
        className="px-5 md:px-20 flex items-center justify-center py-10 md:py-20"
      >
        <div className="flex flex-col gap-8 md:max-w-xl w-full rounded shadow-md py-10 px-5 items-center">
          <h2 className="text-3xl md:text-4xl text-center font-semibold text-black-100 animate-bounce">
            {message === "true"
              ? "Thank you for contacting us!"
              : "Failed to send message!"}
          </h2>

          <p className="text-base md:text-lg text-center text-black-80 tracking-wide">
            {message === "true"
              ? "We will be in touch with you shortly!"
              : "Please try again later"}
          </p>

          <Button
            name={message === "true" ? "Submit Another" : "Try Again"}
            url="/contact-us"
            className="bg-orange-100 w-fit text-center"
          />
        </div>
      </section>
    </>
  );
};

export default Success;
