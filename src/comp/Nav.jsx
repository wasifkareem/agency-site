import React from "react";

const Nav = () => {
  return (
    <div className="  flex font-openSans px-6 justify-between z-10 items-center backdrop-blur-md text-white max-w-7xl  w-full py-5 ">
      <div className=" flex items-center gap-28 justify-between">
        <a href="/" className=" flex items-center gap-2 font-bold text-2xl font-openSans md:text-xl"><img className=" h-10 border rounded-sm border-white/20" src="src/assets/fabina-icon.png"/>Fabina</a>
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
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>

      <div>
        <a href="/contact"
          className="border border-white/20
  backdrop-blur-xl bg-linear-to-r px-5 p-3 md:p-3 md:px-6 rounded-xl text-sm from-white/10 via-white/5 to-white/10
  shadow-[0_0_30px_rgba(255,255,255,0.1)] "
        >
          Book a call
        </a>
      </div>
    </div>
  );
};

export default Nav;
