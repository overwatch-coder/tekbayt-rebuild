import ServicesHero from "./ServicesHero";
import WhatWeOffer from "./WhatWeOffer";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Services | Tekabyt",
  description:
    "We boasts of amazing results for our clients that will help speed up and accelerate the growth of your business with our well scrutinized and goal oriented digital marketing experts.",
};

const Services = () => {
  return (
    <section className="flex flex-col gap-5">
      <ServicesHero />
      <WhatWeOffer />
    </section>
  );
};

export default Services;
