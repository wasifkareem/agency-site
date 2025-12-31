import React, { useEffect, useState } from "react";

import { Particles } from "../components/ui/shadcn-io/particles";
import { CircleCheck, LoaderCircle, LayoutTemplate } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { animate } from "motion";
import { Bell, Magnet, User } from "lucide-react";

const Results = () => {
  const [tick, setTick] = useState(0);
  const [notificationCount, setNotificationCount] = useState(26);
  console.log(tick);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev === 4 ? 0 : prev + 1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationCount((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="why" className=" p-mobile-primary">
      <div className=" flex flex-col gap-4">
       <div className=" my-5 mt-10 md:mt-20">
         <h2 className=" font-instrument text-4xl md:text-7xl">
          Website That drive sales
        </h2>
        <p className=" text-lg md:text-xl mt-2 text-neutral-600">
          What we can help you to achieve?
        </p>
       </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-14  gap-4 w-full max-w-7xl items-stretch text-start">
          <div className=" shadow  border min-h- rounded-xl ">
            <div
              className=" flex flex-col justify-between font-openSans overflow-hidden max-w-lg items-center
              min-h-40 h-full w-full relative rounded-xl
              bg-[radial-gradient(ellipse_at_80%_10%,rgba(80,120,255,1)_4%,rgba(0,0,0,1)_40%)]
              
            "
            >
              <Particles
                className="absolute inset-0  top-0   left-0 h-full  w-full "
                quantity={100}
                ease={90}
                color="#ffffff"
                refresh
              />
              <span
                className=" absolute top-0 left-0 w-full h-full  bg-[radial-gradient(ellipse_at_0%_100%,rgba(245,158,11,1)_4%,rgba(0,0,0,0)_60%)]
             "
              ></span>
              <div className="bg-white  rounded-sm shadow-[0_0_18px_6px_rgba(255,193,1,0.25)] overflow-hidden z-20 my-10 w-72 border border-neutral-200/60 font-sans">
                {/* CMS Header */}
                <div className="bg-neutral-50/50 p-3 border-b border-neutral-200 flex items-center gap-2.5">
                  <div className="bg-purple-600 p-1.5 rounded-xs shadow-sm">
                    <LayoutTemplate size={14} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-neutral-800 leading-tight">
                      CONTENT MANAGER
                    </span>
                    <span className="text-[9px] text-neutral-500 font-medium">
                      Production Environment
                    </span>
                  </div>
                </div>

                {/* Rows */}
                {[
                  { label: "Q4 Promo Landing", t: 1 },
                  { label: "Black Friday Offer", t: 2 },
                  { label: "Webinar Registration", t: 3 },
                  { label: "Case Study: Fintech", t: 4 },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="p-2.5 px-4 bg-white font-openSans hover:bg-neutral-50 transition-colors flex items-center justify-between group cursor-default">
                      <div className="flex items-center gap-3">
                        <motion.div
                          layout
                          key={tick >= item.t ? "check" : "loading"}
                          initial={{ scale: 0.8, opacity: 0.6 }}
                          animate={{ scale: 1, opacity: 1 }}
                        >
                          {tick >= item.t ? (
                            <CircleCheck
                              size={16}
                              className="text-white fill-emerald-500"
                            />
                          ) : (
                            <LoaderCircle
                              size={16}
                              className="animate-spin text-neutral-400"
                            />
                          )}
                        </motion.div>
                        <div className="text-sm text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors">
                          {item.label}
                        </div>
                      </div>
                      <motion.div layout>
                        {tick >= item.t ? (
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-xs border border-emerald-200/50">
                            Published
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-xs border border-amber-200/50">
                            Drafting
                          </span>
                        )}
                      </motion.div>
                    </div>
                    {i < 3 && <hr className="border-neutral-100 mx-4" />}
                  </div>
                ))}
              </div>
              <div className=" text-white z-10 min-h-40 p-10 bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)]">
                <p>
                  <span className=" font-medium">Launch Campaigns Faster. </span>
                  <span className=" text-neutral-200 font-light">
                    {" "}
                   Create campaign pages in minutes, not weeks—without waiting on
                    developers.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow  border min-h- rounded-xl ">
            <div
              className=" flex flex-col justify-between font-openSans overflow-hidden max-w-lg items-center
              min-h-40 h-full w-full relative rounded-xl bg-black
              
            "
            >
              <span
                className=" absolute top-0 left-0 w-full h-full  bg-[radial-gradient(ellipse_at_90%_110%,rgba(456,123,11,1)_4%,rgba(0,0,0,0)_60%)]
             "
              ></span>

              <div className="relative w-full flex-1 translate-y-12 flex items-center justify-center pb-10">
                {/* Realistic 3D Magnet Gradients */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    {/* Main Body Gradient - Cylindrical 3D Red */}
                    <linearGradient
                      id="magnet-3d-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#7f1d1d" /> {/* Dark Red Shadow */}
                      <stop offset="35%" stopColor="#dc2626" /> {/* Red Base */}
                      <stop offset="50%" stopColor="#f87171" /> {/* Highlight */}
                      <stop offset="65%" stopColor="#dc2626" /> {/* Red Base */}
                      <stop offset="100%" stopColor="#7f1d1d" /> {/* Dark Red Shadow */}
                    </linearGradient>
                    {/* Stroke Gradient - Metallic Shine */}
                    <linearGradient
                      id="magnet-stroke-gradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#fca5a5" /> {/* Light Reflection */}
                      <stop offset="100%" stopColor="#991b1b" /> {/* Dark Edge */}
                    </linearGradient>
                  </defs>
                </svg>

                {/* Bell Group */}
                <motion.div
                  className="relative translate-y-2 z-0 cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Premium Bell Container with Sharp Thunder Shadows */}
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full   transition-all duration-500">
                    {/* Sharp Thunder Shadows - Blue Left, Amber Right */}
                    <div className="absolute bg-neutral-900  rounded-full " />
                    <motion.div
                      animate={{
                        rotate: [0, -7, 7, -7, 7, 0, 0],
                      }}
                      transition={{
                        duration: 5,
                        times: [0, 0.025, 0.05, 0.075, 0.1, 0.125, 1],
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <Bell
                        size={70}
                        className="text-neutral-200 fill-neutral-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      />
                      
                      {/* Notification Badge */}
                      <motion.div
                        key={notificationCount}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute -top-2 -right-2 bg-gradient-to-br from-orange-400 to-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg border border-white/20 z-10 min-w-[20px] text-center"
                      >
                        {notificationCount}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>


                {/* Attracted Users/Leads */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`right-${i}`}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: 80 + i * 25,
                      y: 50 - i * 35,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                      x: 20,
                      y: 20,
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 1.8,
                      ease: "easeInOut",
                    }}
                    className="absolute z-20"
                  >
                    <User
                      size={24}
                      className="text-neutral-200 fill-neutral-200/20 drop-shadow-md"
                    />
                  </motion.div>
                ))}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`left-${i}`}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: -(80 + i * 25),
                      y: -(50 - i * 35),
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                      x: -20,
                      y: -20,
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.8 + 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute z-20"
                  >
                    <User
                      size={24}
                      className="text-neutral-300 fill-neutral-300/20 drop-shadow-md"
                    />
                  </motion.div>
                ))}
              </div>
              <div className=" text-white z-10 min-h-40 p-10 bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)]">
                <p>
                  <span className=" font-medium">
                    Get more qualified leads.
                  </span>
                  <span className=" text-neutral-200 font-light">
                    {" "}
Add CTAs and lead-capture points anywhere you need, and turn more visitors into qualified enquiries.   </span>
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow  border min-h- rounded-xl ">
            <div
              className=" flex flex-col justify-between font-openSans overflow-hidden max-w-lg items-center
              min-h-40 h-full w-full relative rounded-xl
              bg-[radial-gradient(ellipse_at_80%_10%,rgba(80,120,255,1)_4%,rgba(0,0,0,1)_40%)]
              
            "
            >
              <Particles
                className="absolute inset-0  top-0   left-0 h-full  w-full "
                quantity={100}
                ease={90}
                color="#ffffff"
                refresh
              />
              <span
                className=" absolute top-0 left-0 w-full h-full   bg-[radial-gradient(ellipse_at_0%_100%,rgba(456,123,11,1)_4%,rgba(0,0,0,0)_60%)]
             "
              ></span>
              <div className="relative w-fit  rounded-xl flex-1 flex items-center justify-center z-20 p-8">
                <div className=" w-full md:w-80 bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden flex flex-col">
                  {/* Browser Header */}
                  <div className="h-6 bg-neutral-50 border-b border-neutral-100 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-300" />
                    <div className="w-2 h-2 rounded-full bg-neutral-300" />
                    <div className="w-2 h-2 rounded-full bg-neutral-300" />
                  </div>

                  {/* Page Content */}
                  <div className="flex h-full min-h-[200px] px-7">
                    {/* Sidebar Hint */}
                    {/* <div className="w-12 border-r border-neutral-100 bg-neutral-50/30 flex flex-col items-center py-3 gap-2">
                      <div className="w-6 h-6 rounded bg-neutral-200/50 mb-1" />
                      <div className="w-4 h-1 rounded-full bg-neutral-200/50" />
                      <div className="w-4 h-1 rounded-full bg-neutral-200/50" />
                      <div className="w-4 h-1 rounded-full bg-neutral-200/50" />
                    </div> */}

                    {/* Main Grid Area */}
                    <div className="flex-1 p-4 flex flex-col">
                      {/* Hero Row */}
                      <div className="w-full h-12 bg-neutral-800  border border-neutral-700 flex items-center px-3 shadow-sm">
                        <span className="text-[10px] text-start font-semibold text-neutral-100">
                          Case Study: Fintech
                        </span>
                      </div>

                      <div className="grid grid-cols-10  w-full">
                        {/* Row 1: Static 70/30 */}
                        <div className="col-span-7 h-10 bg-neutral-50  border border-neutral-200 shadow-sm flex items-center justify-center">
                          <span className="text-[9px] font-medium text-neutral-400">
                            Q3 Performance
                          </span>
                        </div>
                        <div className="col-span-3 h-10 bg-neutral-50  border border-neutral-200 shadow-sm flex items-center justify-center">
                          <span className="text-[9px] font-medium text-neutral-400">
                            ROI
                          </span>
                        </div>
                        
                        

                        {/* Row 2: Static 30 / Animated 70 */}
                        <div className="col-span-3 h-10 bg-neutral-50  border border-neutral-200 shadow-sm flex items-center justify-center">
                          <span className="text-[9px] font-medium text-neutral-400">
                            Traffic
                          </span>
                        </div>
                        <div className="col-span-7 h-10 relative">
                          <motion.div
                            animate={{ opacity: [0, 1, 0, 0] }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              times: [0, 0.1, 0.2, 1],
                            }}
                            className="absolute inset-0  border-2 border-dashed border-amber-400/60 flex items-center justify-center"
                          />
                          <motion.div
                            animate={{
                              opacity: [0, 0, 1, 1, 0],
                              scale: [0.9, 0.9, 1, 1, 0.9],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              times: [0, 0.15, 0.25, 0.9, 1],
                            }}
                            className="absolute inset-0 bg-blue-50  border border-blue-100 shadow-sm flex items-center justify-center"
                          >
                            <span className="text-[9px] font-medium text-blue-600">
                              User Growth
                            </span>
                          </motion.div>
                        </div>
                        

                        {/* Row 3: Animated 50/50 */}
                        <div className="col-span-10 h-10 relative">
                          <motion.div
                            animate={{ opacity: [0, 0, 1, 0, 0] }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              times: [0, 0.3, 0.4, 0.5, 1],
                            }}
                            className="absolute inset-0  border-2 border-dashed border-amber-400/60 flex items-center justify-center"
                          />
                          <motion.div
                            animate={{
                              opacity: [0, 0, 0, 1, 1, 0],
                              scale: [0.9, 0.9, 0.9, 1, 1, 0.9],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              times: [0, 0.35, 0.4, 0.45, 0.9, 1],
                            }}
                            className="absolute inset-0 bg-purple-50  border border-purple-100 shadow-sm flex items-center justify-center"
                          >
                            <span className="text-[9px] font-medium text-purple-600">
                             Testimonial
                            </span>
                          </motion.div>
                        </div>
                        <div className="col-span-10 h-10 relative">
                          <motion.div
                            animate={{ opacity: [0, 0, 0, 1, 0, 0] }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              times: [0, 0.5, 0.6, 0.7, 1],
                            }}
                            className="absolute inset-0  border-2 border-dashed border-amber-400/60 flex items-center justify-center"
                          />
                          <motion.div
                            animate={{
                              opacity: [0, 0, 0, 0, 1, 1, 0],
                              scale: [0.9, 0.9, 0.9, 0.9, 1, 1, 0.9],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              times: [0, 0.55, 0.6, 0.65, 0.7, 0.9, 1],
                            }}
                            className="absolute inset-0 bg-emerald-50  border border-emerald-100 shadow-sm flex items-center justify-center"
                          >
                            <span className="text-[9px] font-medium text-emerald-600">
                              CTA
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-white z-10 p-10 min-h-40 bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)]">
                <p>
                  <span className=" font-medium">Flexible as You Scale. </span>
                  <span className=" text-neutral-200 font-light">
                    {" "}
Update anything without breaking layouts, every component stays on-brand as you grow.                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
