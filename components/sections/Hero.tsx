import React from 'react';
import { ArrowRight, PenTool } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-rose-200 opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white border border-brand-100 rounded-full px-4 py-2 mb-8 shadow-sm animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">Platform Menulis #1 di Indonesia</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Bagikan Ceritamu, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-rose-600">
              Inspirasi Dunia.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Setiap orang memiliki cerita yang layak didengar. Your Story memberikan ruang aman dan kreatif bagi penulis, penyair, dan pemimpi untuk terhubung.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Mulai Menulis</span>
              <PenTool size={18} />
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <span>Pelajari Lebih Lanjut</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;