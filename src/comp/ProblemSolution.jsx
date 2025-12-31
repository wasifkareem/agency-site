import React from "react";
import { XCircle, CheckCircle, Lock, Zap, Layers, AlertCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="w-full pt-20 md:pt-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-instrument font-bold text-neutral-900 mb-6">
            The Website Bottleneck, <span className="text-amber-600 italic">Solved</span>
          </h2>
          <p className="text-neutral-600 font-openSans text-lg md:text-xl max-w-2xl mx-auto">
            Stop letting technical dependencies slow down your growth. We bridge the gap between marketing ambition and engineering reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Problem Card */}
          <div className="group relative p-8 md:p-10  border border-neutral-200 bg-neutral-50/50 hover:border-red-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-red-100 text-red-600">
                  <AlertCircle size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-instrument font-medium text-neutral-900">
                  The Problem
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4 items-start text-start">
                  <XCircle className="text-red-500 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-neutral-600  leading-relaxed font-openSans">
                       <span className="text-neutral-900 font-semibold mb-1 font-openSans">Marketing is Blocked. </span>
                      Simple copy edits and landing pages require engineering tickets, waiting weeks for basic changes.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <XCircle className="text-red-500 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-neutral-600  text-start leading-relaxed font-openSans">
                      <span className="text-neutral-900 font-semibold mb-1 font-openSans">Missed Opportunities. </span>
                      Campaigns get delayed and experiments are deprioritized, directly impacting your sales pipeline.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <XCircle className="text-red-500 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-neutral-600  text-start leading-relaxed font-openSans">
                      <span className="text-neutral-900 font-semibold mb-1 font-openSans">Engineering Distraction. </span>
                      Your best developers are stuck fixing website issues instead of building your core product.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group relative p-8 md:p-10  border border-neutral-200 bg-white hover:border-amber-400/50 transition-all duration-500 shadow-xl shadow-neutral-200/50">
            <div className="absolute inset-0 bg-linear-to-b from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-amber-100 text-amber-600">
                  <Zap size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-instrument font-medium text-neutral-900">
                  The "Modular" Way
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <CheckCircle className="text-amber-500 mt-1 shrink-0" size={20} />
                  <div>
                   
                    <p className="text-neutral-600  text-start leading-relaxed font-openSans">
                       <span className="text-neutral-900 font-semibold mb-1 font-openSans">Marketing Autonomy. </span>
                      We breakdown your site pages into modular components, Marketing builds pages independently using these components, in hours not days.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="text-amber-500 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-neutral-600  text-start leading-relaxed font-openSans">
                       <span className="text-neutral-900 font-semibold mb-1 font-openSans">Speed to Market. </span>
                      Launch campaigns in hours, not weeks. Run A/B tests without tapping the engineering team.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle className="text-amber-500 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-neutral-600  text-start leading-relaxed font-openSans">
                       <span className="text-neutral-900 font-semibold mb-1 font-openSans">Built-in Guardrails. </span>
                      Robust design systems ensure every page looks premium and consistent, no matter who builds it.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
