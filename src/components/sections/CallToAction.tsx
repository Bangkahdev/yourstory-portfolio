import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-700 via-brand-600 to-rose-600 dark:from-brand-800 dark:via-brand-700 dark:to-rose-800 rounded-[2rem] p-10 md:p-20 text-center text-white shadow-2xl shadow-brand-900/20 relative overflow-hidden">
          
          {/* Abstract Shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-900 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <Sparkles size={16} className="text-brand-200" />
              <span className="text-sm font-medium text-brand-50">Join the Private Beta</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Shape the Future?
            </h2>
            <p className="text-brand-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Be among the first 10,000 writers to access the platform. Lock in your username and get early supporter benefits.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <a 
                href="https://yourstory-orcin.vercel.app/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-white text-brand-700 font-bold rounded-full hover:bg-brand-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="mailto:mdhyaulatha@gmail.com"
                className="w-full sm:w-auto px-10 py-4 bg-brand-800/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-brand-800/50 transition-all border border-white/20 flex items-center justify-center"
              >
                Contact Founders
              </a>
            </div>
            
            <p className="mt-8 text-xs text-brand-200 opacity-80">
              No credit card required. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;