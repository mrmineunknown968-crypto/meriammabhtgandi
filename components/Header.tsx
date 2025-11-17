
import React, { useState } from 'react';
import { useContent } from '../hooks/useContent';
import type { Settings } from '../types';

const Header: React.FC = () => {
  const settings = useContent<Settings>('/content/settings.json');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          {settings?.company_name || 'Sarz Studio'}
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition duration-300">
              {link.name}
            </a>
          ))}
           <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Get a Quote
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition duration-300">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
   