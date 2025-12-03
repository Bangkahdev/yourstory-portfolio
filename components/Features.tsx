import React from 'react';
import { PenLine, BookOpen, User, MessageSquare } from 'lucide-react';
import { Feature } from '../types';

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Posting Cerita",
    description: "Tulis dan terbitkan ceritamu dengan mudah. Editor kami dirancang agar kamu bisa fokus menuangkan imajinasi tanpa gangguan.",
    icon: PenLine
  },
  {
    id: 2,
    title: "Membaca Cerita",
    description: "Jelajahi ribuan cerita dari berbagai genre. Temukan inspirasi baru setiap hari dari penulis berbakat di seluruh dunia.",
    icon: BookOpen
  },
  {
    id: 3,
    title: "Profil Pengguna",
    description: "Tampilkan identitas dan karyamu. Halaman profil yang elegan membantu pembaca mengenal sosok di balik cerita.",
    icon: User
  },
  {
    id: 4,
    title: "Komentar & Likes",
    description: "Bangun interaksi. Berikan apresiasi melalui like dan diskusikan plot cerita melalui kolom komentar yang interaktif.",
    icon: MessageSquare
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fitur Unggulan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Platform kami menyediakan ekosistem lengkap bagi penulis dan pembaca untuk saling terhubung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group transform hover:-translate-y-2 hover:border-brand-200"
            >
              <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;