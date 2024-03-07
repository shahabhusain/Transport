import React from "react";
import Hero from "../components/Home/Hero";
import Safe from "../components/Home/Safe";
import Provide from "../components/Home/Provide";
import Transport from "../components/Home/Transport";
import Client from "../components/Home/Client";
import Opportunity from "../components/Home/Opportunity";
import Experts from "../components/Home/Experts";
import GetInTouch from "../components/Home/GetInTouch";
import News from "../components/Home/News";

const Home = () => {
  return (
    <div className=" md:pt-[800px]">
      <Hero />
      <Safe />
      <Provide />
      <Transport />
      <Client />
      <Opportunity />
      <Experts />
      <GetInTouch />
      <News />
    </div>
  );
};

export default Home;
