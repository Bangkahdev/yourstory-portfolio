import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Clara S.",
    role: "Penulis Novel",
    content: "Your Story memberikan ruang yang nyaman untuk saya berekspresi. Fitur komentarnya sangat membantu saya terhubung dengan pembaca.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Aditya P.",
    role: "Pembaca",
    content: "Saya menemukan banyak cerita indie yang luar biasa di sini. Tampilannya bersih dan enak dibaca di HP.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Nadia R.",
    role: "Content Creator",
    content: "Profil penggunanya sangat profesional. Saya bisa memamerkan portofolio tulisan saya dengan bangga kepada klien.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kata Komunitas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pengalaman nyata dari mereka yang telah bergabung dan berkarya bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((item) => (
            <div key={item.id} className="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex text-brand-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="mr-1" />
                ))}
              </div>
              <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
                "{item.content}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm" 
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-slate-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;