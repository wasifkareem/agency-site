import React from "react";
import { Particles } from "../components/ui/shadcn-io/particles";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import {
  CandlestickChart,
  Layers,
  PackagePlus,
  ScrollText,
  SlidersHorizontal,
} from "lucide-react";
const Hero = () => {
  return (
    <div className=" h-[760px] sm:h-[1050px] relative flex justify-center flex-col items-center ">
      {/* <HeroRipple
        style={{
          background: "linear-gradient(180deg,#081426 0%, #052033 100%)",
        }}
      /> */}

      <Nav />
      
      <div className="absolute top-0 right-0 w-[80%] h-[60%] z-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(255,193,1,0.25)_0%,rgba(0,0,0,0)_60%)] mix-blend-screen"></div>
      <Particles
        className="absolute inset-0  top-0 bg-[radial-gradient(ellipse_at_top,rgba(10,20,60,1)_0%,rgba(0,0,0,1)_70%)]  left-0 h-full  w-full "
        quantity={100}
        staticity={50}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="text-white w-screen flex flex-col  px-6 mt-20 md:mt-0 md:justify-center h-full relative ">
        <div className="flex flex-col gap-5 items-center">
          <h1 className=" text-4xl md:text-8xl font-instrument text-center font-bold leading-12 md:leading-26">
           
            <span
              className="  [text-shadow:0_0_5px_rgba(255,210,80,1),0_0_14px_rgba(255,200,60,0.9)]
"
            >
              Premium websites
            </span>{" "}
           
            Built for  <br />Modern Marketing Teams
          </h1>
          <p className=" font-openSans text-lg md:text-xl leading-8">
          We help marketing teams turn outdated sites into scalable, high-converting<br/> CMS websites that drive engagement, leads, and growth.
          </p>
        </div>
        <button
          className="group relative bg-white hover:bg-amber-100 font-openSans hover:scale-105 rounded-3xl h-16 md:h-20 p-1.5 font-semibold text-neutral-800 w-fit self-center mt-10 md:mt-16 text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_18px_6px_rgba(255,193,1,0.45)]"
        >
          <Link to="/contact" className=" z-10 w-full font-openSans h-full px-8 md:px-10 text-center flex text-lg md:text-xl justify-center items-center rounded-3xl bg-linear-to-b from-neutral-300/70 via-neutral-100 to-neutral-50 shadow transition-all ">
            {" "}
            Let's Talk
          </Link>
        </button>
        <div className=" hidden md:flex md:mt-24 justify-center items-center gap-5">
          <p
            className=" flex gap-3 items-center rounded-full px-6 py-2  group rounded-full px-6 py-2 backdrop-blur-xs border border-white/15 
             shadow-[0_6px_16px_rgba(0,0,0,0.5)]
             [box-shadow:inset_0_10px_12px_rgba(9,18,55,2)] text-white/85 hover:bg-[#dddcff0e] transition-all  text-sm
    md:p-2 md:px-4"
          >
            <PackagePlus
              className=" text-shadow-2xs text-[#7f95ee] "
              size={16}
            />
            Composable CMS Sites
          </p>
          <p
            className=" flex gap-3 items-center rounded-full px-6 py-2  group rounded-full px-6 py-2 backdrop-blur-xs border border-white/15 
            shadow-[0_6px_16px_rgba(0,0,0,0.5)]
            [box-shadow:inset_0_10px_12px_rgba(9,18,55,2)] text-white/85 hover:bg-[#dddcff0e] transition-all  text-sm
   md:p-2 md:px-4"
          >
            <Layers
              className="  text-[#7f95ee]  transition-all text-shadow-2xs drop-shadow-amber-500"
              size={16}
            />
           Scalable Design
          </p>
          <p
            className=" flex gap-3 items-center rounded-full px-6 py-2  group rounded-full px-6 py-2 backdrop-blur-xs border border-white/15 
             shadow-[0_6px_16px_rgba(0,0,0,0.5)]
             [box-shadow:inset_0_10px_12px_rgba(9,18,55,2)] text-white/85 hover:bg-[#dddcff0e] transition-all  text-sm
    md:p-2 md:px-4"
          >
            <CandlestickChart
              className=" text-[#7f95ee]    text-shadow-2xs drop-shadow-amber-500"
              size={16}
            />
            Built for Conversions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
