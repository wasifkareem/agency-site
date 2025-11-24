import "./App.css";
import Hero from "./comp/Hero";
import Nav from "./comp/nav";
import { motion, useAnimation } from "motion/react";
import { useState, useEffect } from "react";
import Project from "./comp/Project";
import ServiceType from "./comp/ServiceType";
import Results from "./comp/Results";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className=" flex flex-col min-h-[2200px] items-center ">
        <Hero id="particles" />
        <Project />
        <Results />
        <ServiceType />
      </div>
    </>
  );
}

export default App;
