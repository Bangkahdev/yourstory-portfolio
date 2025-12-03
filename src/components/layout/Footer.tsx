import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
                <p className="font-serif font-bold text-2xl text-white mb-4">Your Story</p>
                <p className="text-sm leading-relaxed max-w-xs mb-6">
                    Empowering the next generation of storytellers with technology, community, and fair monetization.
                </p>
                <div className="flex space-x-4">
                    <a href="https://github.com/Bangkah" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#team" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Your Story Technology. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built in Aceh, Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;