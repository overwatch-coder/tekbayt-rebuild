import React from "react";
import { Metadata } from "next";
import { our_team } from "@/constants/our-team";
import TeamSlider from "./TeamSlider";
import TeamHero from "./TeamHero";
import TeamCard from "./TeamCard";

export const metadata: Metadata = {
  title: "About Us | Tekabyt",
  description:
    "We are a team of young, talented & goal-driven individuals. We are set out to give you the best experience, provides a solution that gives your business speedy growth",
};

const About = () => {
  return (
    <section className="flex flex-col gap-5 py-10">
      <TeamHero />

      <TeamSlider />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 place-items-center px-5 md:px-20 pb-20">
        {our_team.map((item, idx) => (
          <TeamCard idx={idx} item={item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default About;
