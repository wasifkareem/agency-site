import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import greenPaper from "../assets/papers/green.svg?url";
import amberPaper from "../assets/papers/amber.svg?url";

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0", "end 1"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={containerRef} className="w-full relative py-20 md:py-32">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="font-instrument text-4xl md:text-7xl font-bold text-neutral-900 mb-6">
          Our Process, Step by Step
        </h2>
      </div>

      {/* Animated Path SVG */}
      <svg
        className="hidden lg:block absolute  top-48 -left-60 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 1200 2400"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <mask id="drawingMask">
            <motion.path
              d="M 1250 350 
          C 1100 500, 750 250, 600 700 
          C 700 800, 1050 750, 1200 900 
          C 1400 1100, 800 1250, 500 1000 
          C 800 1950, 1400 1200, 1200 1600
          C 1400 1100, 800 2250, 500 1700 "
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </mask>
        </defs>
        
        {/* Base Dashed Line */}
        <path
          d="M 1250 350 
          C 1100 500, 750 250, 600 700 
          C 700 800, 1050 750, 1200 900 
          C 1400 1100, 800 1250, 500 1000 
          C 800 1950, 1400 1200, 1200 1600
          C 1400 1100, 800 2250, 500 1700 
          "
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />

        {/* Animated Amber Radiance Line (Masked) */}
        <path
          d="M 1250 350 
          C 1100 500, 750 250, 600 700 
          C 700 800, 1050 750, 1200 900 
          C 1400 1100, 800 1250, 500 1000 
          C 800 1950, 1400 1200, 1200 1600
          C 1400 1100, 800 2250, 500 1700 "
          fill="none"
          stroke="#f59e0b"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6 6"
          filter="url(#glow)"
          mask="url(#drawingMask)"
        />
      </svg>

      <div className=" my-10 lg:my-20 flex flex-col lg:pt-10 gap-10 justify-center items-center relative z-10">
        {/* Row 1: 02 (Left) & 01 (Right) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-56">
          <div
            className="lg:mt-40 order-2 lg:order-1 mx-6 font-openSans pb-20 shadow-xl max-w-sm p-10 lg:-rotate-12 px-7 relative overflow-hidden border-slate-200/20 backdrop-blur-xl text-start border-4 rounded-sm"
            style={{
              backgroundImage: `url("${greenPaper}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="font-caveat text-7xl leading-2 text-amber-100">
              02
            </span>
            <h3 className="text-4xl mt-4 font-medium">Wireframing</h3>
            <p
              className="w-full text-xl mt-2 text-gray-600"
              style={{
                lineHeight: "2.5rem",
                backgroundImage:
                  "linear-gradient(transparent 95%, rgba(0,0,0,0.1) 95%)",
                backgroundSize: "100% 2.5rem",
              }}
            >
              Low fidelity wireframes for your website to understand the user flow and layout.
            </p>
          </div>
          <div
            className="h-fit order-1 lg:order-2 mx-6 font-openSans pb-20 shadow-xl max-w-sm p-10 lg:rotate-12 px-7 relative overflow-hidden border-slate-200/20 backdrop-blur-xl text-start border-4 rounded-sm"
            style={{
              backgroundImage: `url("${amberPaper}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="font-caveat text-7xl leading-2 text-slate-600">
              01
            </span>
            <h3 className="text-4xl mt-4 font-medium">Discovery & Strategy</h3>
            <p
              className="w-full text-gray-600 text-xl mt-2"
              style={{
                lineHeight: "2.5rem",
                backgroundImage:
                  "linear-gradient(transparent 95%, rgba(0,0,0,0.1) 95%)",
                backgroundSize: "100% 2.5rem",
              }}
            >
              15 min call to Understand your goals, audience, and current bottlenecks.
            </p>
          </div>
        </div>

        {/* Row 2: 04 (Left) & 03 (Right) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-56">
          <div
            className="lg:mt-40 order-2 lg:order-1 mx-6 font-openSans pb-20 shadow-xl  max-w-sm p-10 lg:-rotate-12 px-7 relative overflow-hidden border-slate-200/20 backdrop-blur-xl text-start border-4 rounded-sm"
            style={{
              backgroundImage: `url("${greenPaper}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="font-caveat text-7xl leading-2 text-amber-100">
              04
            </span>
            <h3 className="text-4xl mt-4 font-medium">UI Design</h3>
            <p
              className="w-full text-gray-600 text-xl mt-2"
              style={{
                lineHeight: "2.5rem",
                backgroundImage:
                  "linear-gradient(transparent 95%, rgba(0,0,0,0.1) 95%)",
                backgroundSize: "100% 2.5rem",
              }}
            >
              A scalable, on-brand interface built for consistency.
            </p>
          </div>
          <div
            className="h-fit order-1 lg:order-2 mx-6 font-openSans pb-20 shadow-xl max-w-sm p-10 lg:rotate-12 px-7 relative overflow-hidden border-slate-200/20 backdrop-blur-xl text-start border-4 rounded-sm"
            style={{
              backgroundImage: `url("${amberPaper}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="font-caveat text-7xl leading-2 text-slate-600">
              03
            </span>
            <h3 className="text-4xl mt-4 font-medium">CMS Modeling</h3>
            <p
              className="w-full text-gray-600 text-xl mt-2"
              style={{
                lineHeight: "2.5rem",
                backgroundImage:
                  "linear-gradient(transparent 95%, rgba(0,0,0,0.1) 95%)",
                backgroundSize: "100% 2.5rem",
              }}
            >
 scalable CMS models so your team can update pages effortlessly.            </p>
          </div>
        </div>

        {/* Row 3: 06 (Left) & 05 (Right) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-56">
          <div
            className="lg:mt-40 order-2 lg:order-1 mx-6 font-openSans pb-20 shadow-xl max-w-sm p-10 lg:-rotate-12 px-7 relative overflow-hidden border-slate-200/20 backdrop-blur-xl text-start border-4 rounded-sm"
            style={{
              backgroundImage: `url("${greenPaper}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="font-caveat text-7xl leading-2 text-amber-100">
              06
            </span>
            <h3 className="text-4xl mt-4 font-medium">Maintenance</h3>
            <p
              className="w-full text-gray-600 text-xl mt-2"
              style={{
                lineHeight: "2.5rem",
                backgroundImage:
                  "linear-gradient(transparent 95%, rgba(0,0,0,0.1) 95%)",
                backgroundSize: "100% 2.5rem",
              }}
            >
              At this step your website is live, but we are still here to help you fix bugs and maintain it.
            </p>
          </div>
          <div
            className="h-fit order-1 lg:order-2 mx-6 font-openSans pb-20 shadow-xl max-w-sm p-10 lg:rotate-12 px-7 relative overflow-hidden border-slate-200/20 backdrop-blur-xl text-start border-4 rounded-sm"
            style={{
              backgroundImage: `url("${amberPaper}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="font-caveat text-7xl leading-2 text-slate-600">
              05
            </span>
            <h3 className="text-4xl mt-4 font-medium">Development</h3>
            <p
              className="w-full text-gray-600 text-xl mt-2"
              style={{
                lineHeight: "2.5rem",
                backgroundImage:
                  "linear-gradient(transparent 95%, rgba(0,0,0,0.1) 95%)",
                backgroundSize: "100% 2.5rem",
              }}
            >
              Fast, accessible, SEO-ready, a11y-ready website with CMS integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
