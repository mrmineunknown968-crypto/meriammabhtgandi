
import React from 'react';
import { useContent } from '../hooks/useContent';
import type { ServicesContent } from '../types';
import { CheckCircleIcon } from './Icons';

const Services: React.FC = () => {
  const content = useContent<ServicesContent>('/content/pages/services.json');

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{content?.title}</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
          {content?.service_list.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
   