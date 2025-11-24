import React from "react";

const Nav = () => {
  return (
    <div className="  flex font-openSans px-6 justify-between z-10 items-center backdrop-blur-md text-white max-w-7xl  w-full py-5 ">
      <div className=" flex items-center gap-28 justify-between">
        <div className=" font-extrabold text-2xl md:text-3xl">Fabina</div>
        <div className=" hidden md:flex flex-row gap-5">
          <div>
            <a href="">Our Services</a>
          </div>
          <div>
            <a href="#sec">Use Cases</a>
          </div>
          <div>
            <a href="">Work</a>
          </div>
          <div>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>

      <div>
        <button
          className="border border-white/20
  backdrop-blur-xl bg-linear-to-r px-5 p-3 md:p-3 md:px-6 rounded-xl text-sm from-white/10 via-white/5 to-white/10
  shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Nav;
