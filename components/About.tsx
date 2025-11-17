
import React from 'react';
import { useContent } from '../hooks/useContent';
import type { AboutContent } from '../types';

const About: React.FC = () => {
  const content = useContent<AboutContent>('/content/pages/about.json');

  return (
    <section id="about" className="bg-slate-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">{content?.title}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">{content?.content}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">{content?.trusted_by_title}</h3>
            <div className="flex flex-wrap gap-3">
              {content?.client_locations.map(location => (
                <span key={location} className="bg-slate-700 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full">
                  {location}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {content?.features.map(feature => (
              <div key={feature.title} className="bg-slate-900 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
   