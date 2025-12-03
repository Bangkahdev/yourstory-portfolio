import React from 'react';
import { Target, Lightbulb, Zap, Users, Compass, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">About Us</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Our Story & Mission
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            We are more than just a platform. We are a movement to reclaim the value of human creativity.
          </p>
        </div>

        {/* The Story / Problem / Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: The Narrative */}
          <div className={`space-y-8 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
             <div>
                <h4 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-4">The Origin Story</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  It started in a small coffee shop in Aceh. Our founders realized that while the world was getting louder, meaningful stories were getting harder to find. Writers were writing for algorithms, not people.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We asked ourselves: <span className="italic text-slate-800 dark:text-slate-100">"What if there was a place where quality mattered more than clickbait?"</span> That question became Your Story.
                </p>
             </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-8 rounded-3xl border border-rose-100 dark:border-rose-800/30 hover:border-rose-300 transition-colors">
              <h4 className="flex items-center space-x-3 text-lg font-bold text-slate-900 dark:text-white mb-2">
                <span className="p-2 bg-rose-100 dark:bg-rose-900/50 rounded-lg text-rose-600 dark:text-rose-300"><Zap size={18} /></span>
                <span>The Problem</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Talented writers are drowning in noise. Middlemen take 70% of revenue. Algorithms prioritize outrage over depth.
              </p>
            </div>

            <div className="bg-brand-50 dark:bg-brand-900/20 p-8 rounded-3xl border border-brand-100 dark:border-brand-800/30 hover:border-brand-300 transition-colors">
              <h4 className="flex items-center space-x-3 text-lg font-bold text-slate-900 dark:text-white mb-2">
                <span className="p-2 bg-brand-100 dark:bg-brand-900/50 rounded-lg text-brand-600 dark:text-brand-300"><Lightbulb size={18} /></span>
                <span>The Solution</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                A direct-to-consumer publishing ecosystem. Fair pay, transparent data, and tools built for craft, not clicks.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className={`relative transition-all duration-700 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-100 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-[2rem] -z-10 transform rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team collaborating on whiteboard" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white dark:border-slate-800 transform hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500"><Compass size={120} /></div>
                <h4 className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4">Our Vision</h4>
                <p className="font-serif text-2xl md:text-3xl leading-snug relative z-10">
                  "To build the world's most writer-centric digital ecosystem."
                </p>
            </div>
             <div className="bg-brand-600 dark:bg-brand-700 rounded-3xl p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500"><Heart size={120} /></div>
                <h4 className="text-brand-200 font-bold tracking-widest uppercase text-xs mb-4">Our Mission</h4>
                <p className="font-serif text-2xl md:text-3xl leading-snug relative z-10">
                  "Empower 1 million storytellers to make a living from their craft by 2030."
                </p>
            </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="mx-auto w-12 h-12 bg-stone-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                        <Target size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Transparency</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">No hidden algorithms. You own your audience.</p>
                </div>
                <div className="p-4 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="mx-auto w-12 h-12 bg-stone-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                        <Users size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Community</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">We believe the best stories are shared.</p>
                </div>
                 <div className="p-4 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="mx-auto w-12 h-12 bg-stone-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                        <Zap size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Innovation</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Leveraging tech to help stories find their home.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;