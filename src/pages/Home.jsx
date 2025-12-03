import React from "react";
import Hero from "../comp/Hero";
import Project from "../comp/Project";
import Results from "../comp/Results";
import Process from "../comp/process";
import Package from "../comp/package";
import Founder from "../comp/Founder";

const Home = () => {
  return (
    <div className=" flex flex-col items-center ">
      <Hero id="particles" />
      <Project />
      <Results />
      <Process/>
      <Package/>
      <Founder />
    </div>
  );
};

export default Home;
