import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Clara S.",
    role: "Published Author",
    content: "Your Story gives me the creative control I've always wanted. The direct connection to my readers without algorithmic interference is a game changer.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Beta Reader",
    content: "I've discovered so many incredible indie voices here. The reading experience is clean, distraction-free, and genuinely focuses on the narrative.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Nadia R.",
    role: "Content Strategist",
    content: "The analytics dashboard is professional grade. Being able to see exactly where readers drop off helps me refine my storytelling pace effectively.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">Social Proof</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by Creators
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hear from the early adopters who are shaping the future of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-stone-50 dark:bg-slate-800 p-8 rounded-2xl border border-stone-100 dark:border-slate-700 hover:shadow-lg transition-all duration-500 relative group transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-8 right-8 text-brand-100 dark:text-brand-900/30 group-hover:text-brand-200 dark:group-hover:text-brand-900/50 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex text-brand-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="mr-1" />
                ))}
              </div>
              
              <blockquote className="text-slate-700 dark:text-slate-300 font-medium mb-8 leading-relaxed relative z-10">
                "{item.content}"
              </blockquote>
              
              <div className="flex items-center pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white dark:border-slate-700 shadow-sm" 
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">{item.role}</p>
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