import React, { useState, useEffect } from 'react';
import { BookerEmbed } from "@calcom/atoms";
import "@calcom/atoms/globals.min.css";
import { Loader2, MailIcon } from "lucide-react";
import { motion } from "motion/react";
import fabinaIcon from "../assets/fabina-icon.png";
import Nav from '../comp/Nav';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fallback in case onReady doesn't fire immediately or at all
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center">
         <div className="  flex font-openSans px-6 justify-between z-10 items-center backdrop-blur-md text-white max-w-7xl  w-full py-5 ">
      <div className=" flex items-center gap-28 justify-between">
        <Link to="/" className=" flex items-center gap-2 font-bold text-2xl font-openSans md:text-xl"><img className=" h-10 border rounded-sm border-white/20 z-30" src={fabinaIcon} alt="Fabina Logo"/>Fabina</Link>
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
      <motion.div 
        initial={{ width: "400px", opacity: 0 }}
        animate={{ width: isLoaded ? "fit-content" : "400px", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className=" bg-white rounded-xl p-4 mt-14 overflow-hidden shadow-2xl"
        style={{ maxWidth: "90vw" }}
      >
        {!isLoaded && (
          <div className="flex flex-col items-center justify-center text-neutral-900 text-lg h-[600px]">
                        <img src={fabinaIcon} className="animate-pulse my-5 rounded-sm text-black w-10 h-10" alt="Fabina Logo" />
           <div>
             <span className="font-semibold">Book a 15 min call.</span><br/>

And we'll reach out.
           </div>
          </div>
        )}
        <div className={isLoaded ? "block opacity-100 transition-opacity duration-500" : "hidden opacity-0"}>
          <BookerEmbed
            eventSlug="15min" 
            username="fabina" 
            view="month_view"
            customClassNames={{
              bookerContainer: "border-subtle border",
            }}
            onReady={() => setIsLoaded(true)}
            onCreateBookingSuccess={() => {
              console.log("booking created successfully");
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
