
import React from 'react';
import { useContent } from '../hooks/useContent';
import type { WhyChooseUsContent } from '../types';
import { GlobeIcon, StarIcon, UsersIcon, CheckCircleIcon } from './Icons';

const iconMap: { [key: string]: React.FC<{className: string}> } = {
  Globe: GlobeIcon,
  Star: StarIcon,
  Users: UsersIcon,
  CheckCircle: CheckCircleIcon,
};

const WhyChooseUs: React.FC = () => {
  const content = useContent<WhyChooseUsContent>('/content/pages/why-choose-us.json');

  return (
    <section id="why-choose-us" className="bg-slate-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">{content?.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content?.reasons.map((reason) => {
            const IconComponent = iconMap[reason.icon] || StarIcon;
            return (
              <div key={reason.title} className="bg-slate-900 p-8 rounded-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-slate-700 p-4 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
   