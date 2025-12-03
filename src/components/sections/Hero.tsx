import React from 'react';
import { ArrowRight, ChevronRight, TrendingUp, Users, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decorative Elements with Floating Animation */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200 dark:bg-brand-900/30 opacity-40 blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-20 mt-40 w-72 h-72 rounded-full bg-purple-200 dark:bg-purple-900/30 opacity-40 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-rose-200 dark:bg-rose-900/30 opacity-40 blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={elementRef}>
        <div className={`flex flex-col items-center text-center max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 mb-8 shadow-sm hover:border-brand-300 dark:hover:border-brand-500 transition-all hover:scale-105 cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600 dark:bg-brand-400"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 tracking-wide uppercase">
              Now accepting seed partners
            </span>
            <ChevronRight size={14} className="text-slate-400" />
          </div>
          
          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
            Democratizing the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-rose-600 dark:from-brand-400 dark:to-rose-400">
              Creator Economy
            </span> <br className="hidden md:block"/>
            for Writers.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl">
            We are building the infrastructure for the next generation of storytelling. 
            A data-driven platform where creativity meets monetization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto mb-16">
            <a 
              href="https://yourstory-orcin.vercel.app/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white font-semibold rounded-full shadow-xl shadow-slate-900/10 dark:shadow-brand-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Start Writing</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center justify-center space-x-2 hover:border-slate-300"
            >
              <span>Contact Founders</span>
            </a>
          </div>

          {/* Traction / Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-slate-200 dark:border-slate-800 pt-8 opacity-90 w-full max-w-3xl">
            <div className="flex flex-col items-center group">
              <div className="flex items-center space-x-2 mb-1 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                <Users size={20} />
                <span className="font-bold text-2xl">2.5K+</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Waitlist Users</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="flex items-center space-x-2 mb-1 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                <Globe size={20} />
                <span className="font-bold text-2xl">15+</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Countries Reached</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center group">
              <div className="flex items-center space-x-2 mb-1 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                <TrendingUp size={20} />
                <span className="font-bold text-2xl">120%</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">MoM Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;