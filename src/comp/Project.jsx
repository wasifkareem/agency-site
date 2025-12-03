import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronRight,
  CircleCheck,
  CircleMinus,
  LucideCircleMinus,
  MinusIcon,
} from "lucide-react";

const Project = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
   <div
      id='work' 
   >
     <a 
     target="_blank"
     href="https://pocketworks.co.uk/"
      className={`scroll-mt-32 ${isHovering ? 'cursor-none' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovering && (
        <motion.div
          className="fixed z-50 pointer-events-none bg-black text-white px-2 pl-3 py-2 rounded-full text-sm font-medium uppercase tracking-wider flex gap-1.5 justify-between"
          style={{ 
            left: mousePosition.x, 
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)' 
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
          Explore <ArrowUpRight className=" rounded-full border-dashed border" size={20}/>
        </motion.div>
      )}
      <div className=" grid grid-cols-4 max-w-[1300px]  p-mobile-primary py-16 md:p-10 -mt-16 relative bg-white  border rounded-2xl   ">
        <div className=" font-openSans col-span-5 lg:col-span-2 text-start pr-16 md:pr-24 flex flex-col gap-3 mb-10">
          {" "}
          <h2 className=" font-instrument text-4xl">
            Collaboration with Pocketworks
          </h2>
          {/* subtitle */}
          <p className=" ">
            Their previous website was rigid, forcing their marketing team to
            wait for days to update. We rebuilt it as a fully CMS-driven website
            — giving them complete control to edit pages, update content, and
            launch campaigns without developer involvement.
          </p>
          {/* bullet */}
          <div className=" hidden  lg:flex flex-col gap-3 mt-8">
            <p className=" m-0! flex text-neutral-600 justify-between w-full    gap-7">
              <span className=" min-w-24 text-sm">
                {" "}
                <span className="  rounded-full  border p-0.5 pr-3  flex items-center h-fit">
                  <LucideCircleMinus
                    size={18}
                    className=" text-white mr-1 fill-slate-400 text-4xl"
                  />{" "}
                  <span>Previous</span>
                </span>{" "}
              </span>
              Static site that required developer help, marketing waited days
              for even small updates.
            </p>

            <p className=" m-0! flex  gap-7 text-neutral-600 ">
              <span className=" min-w-24">
                <span className=" pr-3 p-0.5 w-fit  text-sm flex border rounded-full  border-green-600 items-center text-green-800 h-fit">
                  <CircleCheck
                    size={18}
                    className=" mr-1 text-white  fill-green-700 text-4xl"
                  />{" "}
                  New
                </span>{" "}
              </span>
              Fully CMS-driven site — marketing updates content in minutes,
              enabling faster campaigns and more qualified leads.
            </p>
          </div>
        </div>
        <div className=" col-span-5 lg:col-span-2">
          <div className=" w-full ">
            <img
              src="src/assets/pocketworks.png"
              className=" rounded-2xl border"
              alt=""
            />
            <motion.div 
              className=" flex items-start mt-6 gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }
              }}
            >
              <div className=" flex items-center gap-2">
                <motion.img
                  src="src/assets/slack-logo.png"
                  className=" h-9  bg-white rounded-full py-1 border -left-7 "
                  alt=""
                  variants={{
                    hidden: { opacity: 0, scale: 0, rotate: -180 },
                    visible: { 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
                      transition: { type: "spring", duration: 0.8 }
                    }
                  }}
                />
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                  }}
                >
                  <ChevronRight size={25} className=" text-neutral-500"/>
                </motion.div>
              </div>
              <motion.img
                className="  rounded-lg md:h-20 h-12 "
                src="src/assets/tobinreview.png"
                alt=""
                variants={{
                  hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </a>
   </div>
  );
};

export default Project;
