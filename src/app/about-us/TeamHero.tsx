"use client";

import React, { useEffect, useState } from "react";

const TeamHero = () => {
  const [currentText, setCurrentText] = useState(0);

  const textToAnimate = [
    "We are a group of young minds connected by a strong affinity of problem-solving for growth and development",
    "Our team is made up of well-trained and certified expert developers, UX researchers, UI designers, and Product designers",
    "We are committed to helping products and brand owners solve digital challenges limiting their brands",
    "We are a non-discriminate group with no biased view on gender, race or religion. We believe in equality, inclusiveness, and diversity",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textToAnimate.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [textToAnimate.length, currentText]);

  return (
    <div className="flex flex-col gap-7 items-center text-center px-5 md:px-20 relative">
      <h2 className="uppercase text-xl md:text-2xl font-semibold text-black-100">
        The Tekbayt Team
      </h2>
      <p className="text-sm md:text-base text-black-80 font-normal tracking-wide leading-loose md:max-w-2xl">
        {textToAnimate[currentText]}
      </p>
    </div>
  );
};

export default TeamHero;
