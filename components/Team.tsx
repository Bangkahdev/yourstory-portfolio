import React from 'react';
import { TeamMember } from '../types';

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Andi Saputra",
    role: "Founder & CEO",
    image: "https://picsum.photos/300/300?random=1",
    bio: "Penulis novel best-seller yang ingin mendemokratisasi dunia penerbitan digital."
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Head of Content",
    image: "https://picsum.photos/300/300?random=2",
    bio: "Editor berpengalaman dengan passion menemukan bakat-bakat baru yang tersembunyi."
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Lead Developer",
    image: "https://picsum.photos/300/300?random=3",
    bio: "Tech enthusiast yang percaya bahwa teknologi harus melayani seni, bukan sebaliknya."
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tim Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Bertemu dengan wajah-wajah penuh semangat yang membangun rumah bagi cerita Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamData.map((member) => (
            <div key={member.id} className="text-center group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-brand-200 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg relative z-10 mx-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-brand-600 font-medium mb-3">{member.role}</p>
              <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;