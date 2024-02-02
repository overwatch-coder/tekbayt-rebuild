import React from "react";
import Hero from "./home/Hero";
import WorkWithUs from "./home/WorkWithUs";
import WhoWeAre from "./home/WhoWeAre";
import Portfolio from "./home/Portfolio";
import Contact from "./home/Contact";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <WorkWithUs />
      <WhoWeAre />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
