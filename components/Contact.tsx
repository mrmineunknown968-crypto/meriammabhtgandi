
import React from 'react';
import { useContent } from '../hooks/useContent';
import type { ContactContent, Settings } from '../types';

const Contact: React.FC = () => {
  const content = useContent<ContactContent>('/content/pages/contact.json');
  const settings = useContent<Settings>('/content/settings.json');

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content?.title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">{content?.description}</p>
        <a 
          href={`mailto:${settings?.contact_email}`} 
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105"
        >
          Email: {settings?.contact_email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
   