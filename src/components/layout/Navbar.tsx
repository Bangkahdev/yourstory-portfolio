import React, { useState } from 'react';
import { Menu, X, BookOpen, ArrowRight, Sun, Moon } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { useTheme } from '../../hooks/useTheme';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(20);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Vision', href: '#about' },
    { name: 'Product', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '#'}>
            <div className="bg-brand-600 p-2 rounded-lg text-white">
              <BookOpen size={24} strokeWidth={2.5} />
            </div>
            <span className={`font-serif font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
              Your Story
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-700">
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <a 
                href="https://yourstory-orcin.vercel.app/#/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg flex items-center gap-2"
              >
                Sign In <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-700 dark:text-slate-200"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-200 hover:text-brand-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-xl absolute w-full top-full left-0 border-t border-slate-100 dark:border-slate-800">
          <div className="px-4 pt-4 pb-8 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="https://yourstory-orcin.vercel.app/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-base font-bold text-white bg-brand-600 rounded-lg text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;