import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { elementRef, isVisible } = useIntersectionObserver();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={elementRef}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Contact Info Side */}
          <div>
            <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Us
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              We are actively looking for partners, investors, and early adopters. Reach out to our team directly.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-brand-50 dark:bg-slate-800 rounded-lg text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-slate-700 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email Inquiries</h4>
                  <a href="mailto:mdhyaulatha@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">mdhyaulatha@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-brand-50 dark:bg-slate-800 rounded-lg text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-slate-700 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Lhokseumawe, Aceh<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-8">
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-4">Official Channels</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/Bangkah" target="_blank" rel="noopener noreferrer" className="p-3 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:text-slate-400 dark:hover:text-white transition-all transform hover:scale-110" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-3 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] dark:text-slate-400 dark:hover:text-white transition-all transform hover:scale-110" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-3 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] dark:text-slate-400 dark:hover:text-white transition-all transform hover:scale-110" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-stone-50 dark:bg-slate-800 p-8 md:p-10 rounded-3xl border border-stone-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            {status === 'success' ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 dark:bg-slate-800 rounded-3xl z-10 animate-fade-in p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                     <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. We will get back to you within 24 hours.</p>
               </div>
            ) : null}

            <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-6">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400 transition-colors">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={status === 'loading'}
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400 transition-colors">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={status === 'loading'}
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400 transition-colors">How can we help?</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                  placeholder="I'm interested in investment opportunities..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={status === 'loading'}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-1 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? (
                   <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                   </>
                ) : (
                   <>
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                   </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;