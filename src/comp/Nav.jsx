import React from "react";
import fabinaIcon from "../assets/fabina-icon.png";
import { Link } from "react-router-dom";
import { Mail, MailIcon, MailOpen } from "lucide-react";

const Nav = () => {
  return (
    <div className="  flex font-openSans px-6 justify-between z-10 items-center backdrop-blur-md text-white max-w-7xl  w-full py-5 ">
      <div className=" flex items-center gap-28 justify-between">
        <Link to="/" className=" flex items-center gap-2 font-bold text-2xl font-openSans md:text-xl"><img className=" h-10 border rounded-sm border-white/20 z-30" src={fabinaIcon} alt="Fabina Logo"/>Fabina</Link>
        <div className=" hidden md:flex flex-row text-md gap-7">
          <div>
            <a href="/#work">Work</a>
          </div>
          <div>
            <a href="/#why">Why Us</a>
          </div>
          <div>
            <a href="/#process">Process</a>
          </div> <div>
            <a href="/#price">Pricing</a>
          </div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="cursor-pointer">
        <Link to="mailto:wasif@fabina.studio"
          aria-label="Email Us"
          className="border  hover:bg-white/10  transition-all border-white/20
  backdrop-blur-xl bg-linear-to-r px-5 p-3 md:p-3 md:px-6 rounded-xl text-sm from-white/10 via-white/5 to-white/10
  shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2"
        >
          <MailIcon className=" stroke-none fill-white/50" size={20}/><span className=" hidden md:block">Email Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
