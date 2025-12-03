import React, { useState, useEffect } from 'react';
import { BookerEmbed } from "@calcom/atoms";
import "@calcom/atoms/globals.min.css";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fallback in case onReady doesn't fire immediately or at all
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center">
      <a href="/" className=" flex items-center mt-20 my-5 gap-2 font-bold text-2xl font-openSans md:text-xl">
        <img className=" h-10 border rounded-sm  border-white/20" src="src/assets/fabina-icon.png"/>Fabina
      </a>
      <motion.div 
        initial={{ width: "400px", opacity: 0 }}
        animate={{ width: isLoaded ? "fit-content" : "400px", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mt-1 bg-white rounded-xl p-4 overflow-hidden shadow-2xl"
        style={{ maxWidth: "90vw" }}
      >
        {!isLoaded && (
          <div className="flex justify-center items-center h-[600px]">
            <img src='src/assets/fabina-icon.png' className="animate-pulse rounded-sm text-black w-10 h-10" />
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
