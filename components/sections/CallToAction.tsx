import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-600 to-rose-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-900 opacity-20 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Siap Menulis Cerita Pertamamu?
            </h2>
            <p className="text-brand-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan penulis lain yang telah menemukan suara mereka. Gratis selamanya untuk pembaca dan penulis pemula.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-600 font-bold rounded-full hover:bg-brand-50 transition-colors shadow-lg flex items-center justify-center space-x-2">
                <span>Daftar Sekarang</span>
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-700 text-white font-semibold rounded-full hover:bg-brand-800 transition-colors border border-brand-500">
                Hubungi Tim Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;