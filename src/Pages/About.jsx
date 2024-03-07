import React from "react";
import Hero from "../components/About/Hero";
import Company from "../components/About/Company";
import Logistics from "../components/About/Logistics";
import Experts from "../components/Home/Experts";
import Client from "../components/Home/Client";
import Pricing from "../components/About/Pricing";

const About = () => {
  return (
    <div>
      <Hero />
      <Company />
      <Logistics />
      <Experts />
      <Client />
      <Pricing />
    </div>
  );
};

export default About;
