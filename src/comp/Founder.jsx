import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import wasifImage from "../assets/wasif.png";

const Founder = () => {
  return (
    <div className="w-full bg-black py-24 flex justify-center px-6">
      <div className="max-w-4xl w-full bg-neutral-900/20 border border-neutral-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 justify-between">
        
        {/* Left Side */}
        <div className="flex flex-col gap-8 max-w-lg">
          <div className="flex items-center gap-5">
            {/* Avatar Placeholder */}
            <div className="w-20 h-20 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden shadow-lg">
               <img className='w-full h-full object-cover object-top transform scale-140 transition-all' src={wasifImage} alt="Wasif Kareem - Founder of Fabina" />
            </div>
            <div className=' text-start'>
              <h3 className="text-2xl font-bold text-white font-instrument tracking-wider">Wasif Kareem</h3>
              <p className="text-neutral-400 text-sm mt-1">Founder, Design Engineer</p>
            </div>
          </div>
          
          <p className="text-neutral-300 text-lg leading-relaxed font-openSans font-light">
            "Hey, I'm Wasif. In today's fast-paced digital landscape, businesses need more than just a website, they need a scalable, flexible engine for growth. I specialize in building <span className="text-white font-medium">CMS-first, composable websites</span> that empower teams to move fast, iterate quickly, and stay ahead of the competition."
          </p>
        </div>

        {/* Right Side - Socials */}
        <div className="flex flex-col gap-2 min-w-[200px] pt-2">
          <span className="text-neutral-500 text-sm mb-4">Stay in touch</span>
          
          <a target='_blank' href="https://x.com/was_if__" className="group flex items-center justify-between py-3 border-b border-neutral-800 text-neutral-300 hover:text-white transition-colors">
            <span className="font-medium">Twitter</span>
            <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>
          
          <a target='_blank' href="https://www.linkedin.com/in/wasifdev2762/" className="group flex items-center justify-between py-3 border-b border-neutral-800 text-neutral-300 hover:text-white transition-colors">
            <span className="font-medium">LinkedIn</span>
            <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>
          
           <a href="mailto:wasif@fabina.studio" className="group flex items-center justify-between py-3 border-b border-neutral-800 text-neutral-300 hover:text-white transition-colors">
            <span className="font-medium">Email</span>
            <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Founder;
