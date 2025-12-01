import React from 'react';
import { methodologyData } from '../src/data/methodologyData.tsx';

interface MethodologyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast: boolean;
}

const MethodologyItem: React.FC<MethodologyItemProps> = ({ icon, title, description, isLast }: MethodologyItemProps) => (
  <div className="group flex items-stretch gap-6">
    <div className="relative">
      <div className="w-16 h-16 bg-[#131f25] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#3c555d] transition-shadow duration-300 shadow-[-1px_-1px_4px_0px_rgba(0,64,153,0.5),_1px_1px_4px_0px_rgba(0,122,82,0.6)] group-hover:shadow-[-4px_-4px_50px_0px_rgba(0,64,153,0.5),_4px_4px_50px_0px_rgba(0,122,82,0.6)]">
        {icon}
      </div>
      {!isLast && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-[calc(100%-2rem)] bg-white/20"></div>
      )}
    </div>
    <div className="pt-3">
      <h3 className="text-xl font-bold font-manrope">{title}</h3>
      <p className="text-gray-300 mt-1">{description}</p>
    </div>
  </div>
);

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20">
      <div className="container mx-auto px-6 xl:px-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold font-manrope">Como entregamos tudo isso para você</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
              Nossa metodologia é dividida em etapas claras e objetivas, garantindo que você tenha o suporte necessário em cada fase da sua preparação até a aprovação.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {methodologyData.map((item, index) => (
              <MethodologyItem key={item.title} {...item} isLast={index === methodologyData.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;