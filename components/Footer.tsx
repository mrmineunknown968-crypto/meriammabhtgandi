
import React from 'react';
import { useContent } from '../hooks/useContent';
import type { Settings } from '../types';

const Footer: React.FC = () => {
  const settings = useContent<Settings>('/content/settings.json');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="font-bold text-lg text-white mb-1">{settings?.company_name}</p>
        <p className="mb-4">{settings?.location}</p>
        <p className="text-sm">
          &copy; {currentYear} {settings?.company_name}. All Rights Reserved.
        </p>
         <div className="mt-4">
            <a href="/admin/" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">
              Admin Login
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
   