"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

type AosProviderProps = {
  children: React.ReactNode;
};

const AosProvider = ({ children }: AosProviderProps) => {
  useEffect(() => {
    // initialising library
    Aos.init({
      delay: 10, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return <div className="overflow-x-hidden">{children}</div>;
};

export default AosProvider;
