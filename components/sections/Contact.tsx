import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih, ${formData.name}! Pesan Anda telah kami terima (Simulasi).`);
    setFormData({ name: '', email: '', message: '' });
  };

  const preventScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real app, this would open a new tab
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="bg-slate-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Hubungi Kami</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Punya pertanyaan tentang platform kami? Tertarik berinvestasi? 
                  Atau ingin memberikan feedback fitur? Tim kami siap berdiskusi dengan Anda.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                      <Mail className="text-white" size={20} />
                    </div>
                    <span className="text-slate-200 group-hover:text-white transition-colors">halo@yourstory.id</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <span className="text-slate-200 group-hover:text-white transition-colors">t.me/yourstory_id</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-400 uppercase tracking-widest mb-4 font-semibold">Ikuti Kami</p>
                <div className="flex space-x-4">
                  <a href="#" onClick={preventScroll} className="p-3 bg-slate-800 rounded-full hover:bg-brand-500 transition-all hover:-translate-y-1" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" onClick={preventScroll} className="p-3 bg-slate-800 rounded-full hover:bg-brand-500 transition-all hover:-translate-y-1" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" onClick={preventScroll} className="p-3 bg-slate-800 rounded-full hover:bg-brand-500 transition-all hover:-translate-y-1" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Pesan / Pertanyaan</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Kirim Pesan</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;