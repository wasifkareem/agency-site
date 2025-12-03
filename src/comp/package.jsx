import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import {DottedGlowBackground} from "../components/ui/dotted-glow-background";
import { CircleStar } from "lucide-react";

const Package = () => {
  const packages = [
    {
      title: "Lead Machine",
      price: "$4,995",
      eta: "ETA: 4-8 Weeks",
      description: "The ultimate engine for marketing teams and growth.",
      features: [
        "Fully CMS Driven (Unlimited pages)",
        "40+ CMS driven Components",
        "Advanced Analytics Setup",
        "A/B Testing Ready Architecture",
        "Marketing Ops Integration",
      ],
      cta: "Scale Now",
      highlight: true,
    },
    {
      title: "Custom",
      price: "Let's Talk",
      description: "Need something else? Landing pages, redesigns, brand refreshes, or unique website requirements — tell us what you need.",
      features: [
       
      ],
      cta: "Discuss Your Project",
      highlight: false,
    },
  ];

  return (
    <div id="price" className="p-mobile-primary bg-black w-full py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-instrument text-4xl md:text-7xl text-white mb-4 text-center">
          Transparent Pricing, Choose one
        </h2>
        <p className="text-neutral-400 text-center text-lg mb-16 text-lg">
          Simple, transparent pricing for your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-sm border flex flex-col h-full ${
                pkg.highlight
                  ? "bg-neutral-900/50 shadow-amber-500/50 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]"
                  : "bg-neutral-900/20 border-neutral-800 hover:border-neutral-700"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-amber-500 text-black text-xs font-bold px-1 pr-3 py-1 rounded-full uppercase tracking-wider">
                <CircleStar />   Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-instrument text-3xl text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="text-4xl font-bold text-white my-4 font-openSans">{pkg.price}</div>
                {pkg.eta && <p className="text-amber-500 text-sm font-medium mb-2">{pkg.eta}</p>}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <ul className="flex-1 flex flex-col gap-4 mb-8">
                {pkg.features.map((feature, i) => (
                
                     <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                    <Check size={18} className={pkg.highlight ? "text-amber-500" : "text-neutral-500"} />
                    <span>{feature}</span>

                  </li>
                ))}
              </ul>

              <a href="/contact"
              
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  pkg.highlight
                    ? "bg-amber-500 text-black hover:bg-amber-400"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
               {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;