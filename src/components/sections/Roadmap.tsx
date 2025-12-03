import React from 'react';
import { CheckCircle2, Circle, Flag, TrendingUp, Building2, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const roadmapData = [
  {
    phase: "Q1 2024",
    title: "Foundation & Alpha",
    description: "Core platform development. Launched private Alpha to 500 writers. Secured Pre-Seed funding.",
    icon: Building2,
    status: "done"
  },
  {
    phase: "Q3 2024",
    title: "Public Beta Launch",
    description: "Open registration. Reached 2,500 monthly active users. Released Monetization v1 (Tips).",
    icon: Flag,
    status: "current"
  },
  {
    phase: "Q4 2024",
    title: "Mobile App & Scale",
    description: "Native iOS/Android apps launch. Targeting 50k MAU. Series A fundraising preparation.",
    icon: TrendingUp,
    status: "upcoming"
  },
  {
    phase: "2025",
    title: "Global Expansion",
    description: "Localization for SEA markets. Enterprise partnerships for publishers. AI translation tools.",
    icon: Globe,
    status: "upcoming"
  }
];

const Roadmap: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="roadmap" className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">Milestones</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Journey
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We are moving fast. Here is our strategic roadmap from inception to market leadership.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {roadmapData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isDone = item.status === 'done';
              const isCurrent = item.status === 'current';
              
              // Staggered animation delay
              const delay = index * 200;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  
                  {/* Icon/Marker */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-slate-800 z-10 flex items-center justify-center bg-white dark:bg-slate-800">
                    {isDone ? (
                      <div className="w-full h-full bg-slate-800 dark:bg-slate-600 rounded-full flex items-center justify-center text-white">
                        <CheckCircle2 size={20} />
                      </div>
                    ) : isCurrent ? (
                       <div className="w-full h-full bg-brand-600 dark:bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/50 animate-pulse">
                        <Flag size={20} />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-600 border border-slate-300 dark:border-slate-600">
                        <Circle size={20} />
                      </div>
                    )}
                  </div>

                  {/* Spacer for Mobile layout adjustment */}
                  <div className="w-16 md:w-1/2 flex-shrink-0"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 pr-4' : 'md:pl-16 pl-4'}`}>
                    <div className={`p-6 rounded-2xl border ${isCurrent ? 'border-brand-200 dark:border-brand-700 bg-brand-50/50 dark:bg-brand-900/10 shadow-md scale-105' : 'border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg'} transition-all duration-300 relative group`}>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold uppercase tracking-wider ${isCurrent ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'}`}>
                          {item.phase}
                        </span>
                         {isCurrent && <span className="bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Current Focus</span>}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;