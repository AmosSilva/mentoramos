import React from 'react';
import { featureData } from '../src/data/featuresData.tsx';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, details }: FeatureCardProps) => (
  <div className="group bg-[#131f25] p-6 xl:p-9 2xl:p-10 rounded-2xl border-2 border-[#263b45] flex flex-col items-start text-left transition-all duration-300 ease-in-out lg:hover:shadow-lg lg:hover:shadow-[#000]/20">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl 2xl:text-2xl font-bold mb-2 2xl:mb-4 font-manrope">{title}</h3>
    <p className="text-gray-300">{description}</p>

    {/* "Saiba mais" button for desktop view */}
    <div className="hidden lg:flex items-center gap-2 mt-4 text-[#7fffd4] text-sm">
      <span>Saiba mais</span>
      <i className="fa-solid fa-chevron-down transition-transform duration-300 group-hover:-rotate-180"></i>
    </div>

    <ul className="space-y-2 mt-4 lg:mt-0 lg:group-hover:mt-4 text-sm lg:text-base text-gray-300 transition-all duration-500 ease-in-out overflow-hidden lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-96 lg:group-hover:opacity-100">
      {details.map((detail: string, index: number) => (
        <li key={index} className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 bg-[#7fffd4] rounded-full mt-1.5 flex-shrink-0"></div>
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