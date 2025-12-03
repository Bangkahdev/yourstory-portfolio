import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-brand-600 rounded-3xl rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Workspace Kreatif" 
              className="relative rounded-3xl shadow-xl w-full h-auto object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          
          <div>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Tentang Kami</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Membangun Jembatan Lewat Kata-Kata
            </h3>
            
            <div className="space-y-6 text-slate-600">
              <p className="text-lg">
                Your Story lahir dari sebuah ide sederhana: bahwa kata-kata memiliki kekuatan untuk menyembuhkan, menginspirasi, dan menyatukan kita.
              </p>
              
              <div className="bg-brand-50 p-6 rounded-2xl border-l-4 border-brand-500">
                <h4 className="font-bold text-brand-800 mb-2">Visi Kami</h4>
                <p className="text-brand-900/80">
                  Menjadi ekosistem digital terbesar yang memberdayakan kreator lokal untuk menyuarakan perspektif unik mereka ke panggung global.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-2">Misi Kami</h4>
                <ul className="list-disc list-inside space-y-2 marker:text-brand-500">
                  <li>Menyediakan platform yang user-friendly dan bebas gangguan.</li>
                  <li>Membangun komunitas yang suportif dan inklusif.</li>
                  <li>Menghargai hak cipta dan orisinalitas setiap karya.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;