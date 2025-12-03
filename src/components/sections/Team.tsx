import React from 'react';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';
import { TeamMember } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ExtendedTeamMember extends TeamMember {
  linkedin?: string;
  github?: string;
  website?: string;
  isCustomAvatar?: boolean;
}

const teamData: ExtendedTeamMember[] = [
  {
    id: 1,
    name: "Muhammad Dhiyaul Atha",
    role: "CEO & Product Manager",
    image: "Y", // Custom identifier
    isCustomAvatar: true,
    bio: "Fullstack Developer & Visionary Owner. Orchestrating the product roadmap, technical strategy, and business vision to revolutionize the creator economy.",
    linkedin: "https://www.linkedin.com/in/muhammad-dhyaul-atha/",
    github: "https://github.com/Bangkah"
  },
  {
    id: 2,
    name: "Kia",
    role: "CTO & Lead Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Expert in Scalable Architecture and AI Integration. Ensuring the platform handles millions of stories with zero latency.",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Fitri",
    role: "CMO & Community Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Marketing strategist focused on organic growth. Building a safe, inclusive, and vibrant community for writers across the archipelago.",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Alex",
    role: "Head of Product Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "UI/UX Specialist. Obsessed with accessibility and 'Zen-mode' interfaces. Crafting the distraction-free writing experience.",
    linkedin: "#"
  }
];

const Team: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="team" className="py-24 bg-stone-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">Leadership</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Meet the Builders
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A dynamic team of engineers, strategists, and designers united by a single mission: empowering storytellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div 
              key={member.id} 
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 dark:border-slate-700 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-64 overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                 <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                
                {member.isCustomAvatar ? (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 dark:bg-slate-950 group-hover:scale-110 transition-transform duration-700 relative">
                     {/* Decorative gradient blob behind the letter */}
                     <div className="absolute w-32 h-32 bg-brand-500/20 rounded-full blur-2xl animate-blob"></div>
                     <span className="relative z-10 font-serif text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-rose-600">
                       {member.image}
                     </span>
                  </div>
                ) : (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{member.name}</h3>
                <p className="text-brand-600 dark:text-brand-400 font-bold text-xs mb-4 uppercase tracking-wide">{member.role}</p>
                <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4">
                  {member.bio}
                </p>
                
                <div className="flex space-x-4 border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] hover:scale-110 transition-all" aria-label="LinkedIn">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="GitHub">
                        <Github size={18} />
                      </a>
                    )}
                    {!member.github && (
                       <a href="#" className="text-slate-400 hover:text-[#1DA1F2] hover:scale-110 transition-all" aria-label="Twitter">
                        <Twitter size={18} />
                      </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;