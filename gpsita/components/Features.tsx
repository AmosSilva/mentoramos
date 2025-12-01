import React from 'react';
import { featureData } from '../src/data/featuresData';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; details: string[] }> = ({ icon, title, description, details }) => (
  <div className="group bg-[#0c1b2d] p-6 xl:p-9 2xl:p-11 rounded-2xl border-2 border-[#192a44] flex flex-col items-start text-left transition-all duration-300 ease-in-out lg:hover:shadow-lg lg:hover:shadow-[#000]/20">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 xl:mb-4 font-manrope">{title}</h3>
    <p className="text-gray-300">{description}</p>
    <div className="hidden lg:flex items-center gap-2 mt-4 text-sm text-[#ffe566]">
      <span>Saiba mais</span>
      <i className="fa-solid fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
    </div>
    <ul className="space-y-2 mt-4 lg:mt-0 lg:group-hover:mt-6 text-sm lg:text-base text-gray-300 transition-all duration-500 ease-in-out overflow-hidden lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-96 lg:group-hover:opacity-100">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 bg-[#ffe566] rounded-full mt-1.5 flex-shrink-0"></div>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6 xl:px-28 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-manrope">Tudo que você precisa para ser aprovado</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Nosso método foca nas áreas mais importantes que definem a sua aprovação. Veja como vamos te guiar:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap:2 lg:-gap-8 mt-12 md:items-start">
          {featureData.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;