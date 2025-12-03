import React from 'react';
import { CheckCircle2, Circle, Rocket, Smartphone, Coins, Sparkles } from 'lucide-react';

const roadmapData = [
  {
    phase: "Fase 1 (Sekarang)",
    title: "Peluncuran Web Beta",
    description: "Rilis MVP website dengan fitur dasar menulis, membaca, dan profil pengguna. Fokus pada akuisisi 1.000 penulis pertama.",
    icon: Rocket,
    status: "current"
  },
  {
    phase: "Fase 2 (Q3 2024)",
    title: "Aplikasi Mobile",
    description: "Peluncuran aplikasi Android & iOS untuk pengalaman membaca on-the-go dan notifikasi real-time.",
    icon: Smartphone,
    status: "upcoming"
  },
  {
    phase: "Fase 3 (Q4 2024)",
    title: "Monetisasi Penulis",
    description: "Sistem 'Tip' dan 'Konten Premium' agar penulis bisa mendapatkan penghasilan langsung dari karya mereka.",
    icon: Coins,
    status: "upcoming"
  },
  {
    phase: "Fase 4 (2025)",
    title: "AI Writing Assistant",
    description: "Integrasi fitur AI untuk membantu penulis mengatasi writer's block dan memperbaiki tata bahasa secara otomatis.",
    icon: Sparkles,
    status: "upcoming"
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Peta Jalan Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Visi kami untuk masa depan. Lihat bagaimana kami berencana mengembangkan ekosistem Your Story.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {roadmapData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Icon/Marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white z-10 flex items-center justify-center">
                    {item.status === 'current' ? (
                      <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/40">
                        <CheckCircle2 size={18} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 border border-slate-300">
                        <Circle size={18} />
                      </div>
                    )}
                  </div>

                  {/* Spacer for Mobile layout adjustment */}
                  <div className="w-12 md:w-1/2 flex-shrink-0"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-4' : 'md:pl-12 pl-4'}`}>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
                      <div className={`absolute top-6 w-3 h-3 bg-white border border-slate-200 transform rotate-45 ${isEven ? 'left-[-7px] md:right-[-7px] md:left-auto' : 'left-[-7px]'}`}></div>
                      
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg ${item.status === 'current' ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500'}`}>
                          <item.icon size={20} />
                        </div>
                        <span className={`text-sm font-bold uppercase tracking-wider ${item.status === 'current' ? 'text-brand-600' : 'text-slate-500'}`}>
                          {item.phase}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
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
