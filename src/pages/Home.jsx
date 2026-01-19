import React from "react";
import Hero from "../comp/Hero";
import ProblemSolution from "../comp/ProblemSolution";
import Project from "../comp/Project";
import Results from "../comp/Results";
import Process from "../comp/process";
import Package from "../comp/package";
import Founder from "../comp/Founder";
import { Link } from "react-router-dom";
import { Gift } from "lucide-react";

const Home = () => {
  return (
    <div className=" flex flex-col items-center ">
      {/* <Link to="/free-website" className="w-full bg-neutral-950 border-b border-white/10 py-2.5 flex justify-center items-center gap-3 cursor-pointer group hover:bg-neutral-900 transition-colors">
         <span className="text-amber-400 group-hover:rotate-12 transition-transform duration-300">
            <Gift size={16} />
         </span>
         <p className="text-sm text-neutral-100 font-openSans">
            Win a free website worth <span className="text-white font-bold">$3000</span>
            <span className="mx-3 text-white/20">|</span>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Valid till Christmas</span>
         </p>
      </Link> */}
      <Hero id="particles" />
      <ProblemSolution />
      <Results />
      <Project />
      <Process/>
      {/* <Package/> */}
      <Founder />
    </div>
  );
};

export default Home;
