import React from "react";
import { Particles } from "../components/ui/shadcn-io/particles";
import Nav from "./nav";
import {
  CandlestickChart,
  Layers,
  PackagePlus,
  ScrollText,
  SlidersHorizontal,
} from "lucide-react";
const Hero = () => {
  return (
    <div className="h-[950px] relative flex justify-center flex-col items-center ">
      {/* <HeroRipple
        style={{
          background: "linear-gradient(180deg,#081426 0%, #052033 100%)",
        }}
      /> */}

      <Nav />

      <Particles
        className="absolute inset-0  top-0 bg-[radial-gradient(ellipse_at_top,rgba(10,20,60,1)_0%,rgba(0,0,0,1)_70%)]  left-0 h-full  w-full "
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="text-white w-screen flex flex-col  px-6 justify-center h-full relative ">
        <div className="flex flex-col gap-5 items-center">
          <h1 className=" text-4xl md:text-8xl font-instrument text-center font-bold">
           
            <span
              className="[text-shadow:0_0_5px_rgba(255,210,80,1),0_0_14px_rgba(255,200,60,0.9)]
"
            >
              Premium CMS websites
            </span>{" "}
           
            Built for  <br />Modern Marketing Teams
          </h1>
          <p className=" font-openSans text-xl">
            Flexible websites your marketing team can update on their own, no developers <br/>needed, faster launches, more qualified leads.
          </p>
        </div>
        <button
          className="group relative bg-white hover:bg-amber-100 font-openSans hover:scale-105 rounded-xl  h-14 p-1  text-neutral-800 w-fit self-center mt-10 text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_18px_6px_rgba(255,193,1,0.45)]
"
        >
          <div className=" z-10 w-full font-openSans h-full px-5 text-center flex justify-center items-center  rounded-xl bg-linear-to-b from-neutral-200 via-neutral-100 to-neutral-50 shadow    transition-all ">
            {" "}
            Let's Talk
          </div>
        </button>
        <div className=" flex md:mt-24 justify-center items-center gap-5">
          <p
            className=" flex gap-3 items-center rounded-full px-6 py-2  group rounded-full px-6 py-2 backdrop-blur-xs border border-white/15 
             shadow-[0_6px_16px_rgba(0,0,0,0.5)]
             [box-shadow:inset_0_7px_12px_rgba(9,18,55,2)] text-white/85 hover:bg-[#dddcff0e] transition-all  text-sm
    md:p-2 md:px-4"
          >
            <PackagePlus
              className=" text-shadow-2xs text-[#7f95ee] "
              size={16}
            />
            Update Without Developers
          </p>
          <p
            className=" flex gap-3 items-center rounded-full px-6 py-2  group rounded-full px-6 py-2 backdrop-blur-xs border border-white/15 
            shadow-[0_6px_16px_rgba(0,0,0,0.5)]
            [box-shadow:inset_0_7px_12px_rgba(9,18,55,2)] text-white/85 hover:bg-[#dddcff0e] transition-all  text-sm
   md:p-2 md:px-4"
          >
            <Layers
              className="  text-[#7f95ee]  transition-all text-shadow-2xs drop-shadow-amber-500"
              size={16}
            />
            Flexible Component System
          </p>
          <p
            className=" flex gap-3 items-center rounded-full px-6 py-2  group rounded-full px-6 py-2 backdrop-blur-xs border border-white/15 
             shadow-[0_6px_16px_rgba(0,0,0,0.5)]
             [box-shadow:inset_0_7px_12px_rgba(9,18,55,2)] text-white/85 hover:bg-[#dddcff0e] transition-all  text-sm
    md:p-2 md:px-4"
          >
            <CandlestickChart
              className=" text-[#7f95ee]    text-shadow-2xs drop-shadow-amber-500"
              size={16}
            />
            Built for MQL Growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
