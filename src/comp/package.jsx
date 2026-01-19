import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import {DottedGlowBackground} from "../components/ui/dotted-glow-background";
import { CircleStar } from "lucide-react";
import { Link } from "react-router-dom";

const Package = () => {
  const packages = [
    {
      title: "The Marketing velocity plan",
      price: "$2,299 / month",
      subtitle: "Cancel or pause anytime.",
      eta: "2 months (Refactor) / 4 months (New Build)",
      pitch: "Your website is a product, not a project. Most teams are held back by an rigid sites and engineering backlogs. We breakdown your site pages into modular components, giving your marketing team total independence to launch, test, and scale without tapping the engineering.",
      features: [
        "Weekly Sprint Delivery: We ship updates, new pages, and CRO experiments every 7 days. No more waiting for \"the next release\".",
        "Marketer-Friendly Modular System: We build (or refactor) your site into a modular design system. Your team can spin up high-converting landing pages in minutes, not weeks.",
        "Marketing Ops Integration: Seamless, technical integration with HubSpot, Salesforce, and your existing data stack to ensure every lead is attributed.",
        "Embedded Slack Collaboration: We work inside your team’s Slack. No account managers, no siloes—just direct access to your dedicated WebOps lead.",
        "Zero Technical Debt: We handle all the maintenance, SEO architecture, and technical QA so your site stays fast and future-proof.",
      ],
      cta: "Book a call",
      highlight: true,
    },
  ];

  return (
    <div id="price" className="p-mobile-primary bg-black w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-instrument text-4xl md:text-7xl text-white mb-4 text-center">
          Transparent Pricing
        </h2>
        <p className="text-neutral-400 text-center text-lg mb-16 text-lg">
          Simple, transparent pricing for your business needs.
        </p>

        <div className="flex justify-center px-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="relative p-8 md:p-12 rounded-sm border flex flex-col h-full max-w-3xl w-full bg-neutral-900/50 shadow-amber-500/50 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]"
            >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-amber-500 text-black text-xs font-bold px-1 pr-3 py-1 rounded-full uppercase tracking-wider">
                <CircleStar />   Only Plan you need
                </div>

              <div className="mb-8 text-center md:text-left">
                <h3 className="font-instrument text-3xl md:text-4xl text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 my-4">
                    <span className="text-4xl md:text-5xl font-bold text-white font-openSans">{pkg.price}</span>
                    <span className="text-neutral-400 text-lg">{pkg.subtitle}</span>
                </div>
                
                <p className="text-neutral-300 text-base leading-relaxed mt-6 border-l-2 border-amber-500 pl-4 text-left">
                    {pkg.pitch}
                </p>
                
              </div>

              <div className="mb-4">
                  <h4 className="text-white font-semibold text-lg mb-4">{pkg.featuresHeader}</h4>
                  {/* <ul className="flex-1 flex flex-col gap-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex text-start items-start gap-3 text-neutral-300 text-sm md:text-base">
                        <Check size={20} className="text-amber-500 shrink-0 mt-1" />
                        <span>
                          {feature.includes(":") ? (
                            <>
                              <strong className="text-white font-semibold">{feature.split(":")[0]}.</strong>
                              {feature.substring(feature.indexOf(":") + 1)}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    ))}
                  </ul> */}
              </div>

              <Link target="_blank" to="https://cal.com/fabina/15min"
                className="w-full py-4 rounded-lg font-medium transition-all text-center text-lg bg-amber-500 text-black hover:bg-amber-400"
              >
               {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;