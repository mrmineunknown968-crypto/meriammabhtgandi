
import React from 'react';
import { useContent } from '../hooks/useContent';
import type { HomeContent, Settings } from '../types';

const Hero: React.FC = () => {
  const content = useContent<HomeContent>('/content/pages/home.json');
  const settings = useContent<Settings>('/content/settings.json');

  const heroStyle = content?.hero_image 
    ? { backgroundImage: `url(${content.hero_image})` }
    : {};

  return (
    <section id="home" className="relative bg-cover bg-center" style={heroStyle}>
      <div className="absolute inset-0 bg-slate-900/70 backdrop-brightness-50"></div>
      <div className="container mx-auto px-6 py-32 md:py-48 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {content?.headline || 'Professional Urdu Dubbing Services'}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          {content?.subheadline || 'Translation, dubbing, mixing, and delivery.'}
        </p>
        <a 
          href={`mailto:${settings?.contact_email}`} 
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          {content?.cta_text || 'Contact us today at'} {settings?.contact_email || ''}
        </a>
      </div>
    </section>
  );
};

export default Hero;
   