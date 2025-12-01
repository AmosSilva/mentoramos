import React, { useMemo } from "react";
import polygonSvg from "../src/assets/images/polygon.svg";
import { programDetails } from "../src/data/programDetailsData";

const DetailCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  text: string;
  rotation: number;
}> = ({ icon, title, text, rotation }) => (
  <div className="bg-[#0c1b2d] p-8 lg:p-6 xl:p-8 2xl:p-10 rounded-2xl border-2 border-[#192a44] flex flex-col h-full transform hover:border-[#ffe566]/50 transition-all duration-300">
    <div className="flex justify-center mb-6 p-4 relative">
      {/* Polygon Background - Rotated randomly and styled to match the blue/teal reference image */}
      <img
        src={polygonSvg}
        alt="Background shape"
        className="absolute w-24 h-24 -top-2 transition-transform duration-300"
        style={{
          transform: `rotate(${rotation}deg)`,
          filter: "opacity(0.4)",
        }}
      />
      {/* Icon (z-index ensures it's on top) */}
      <div className="relative z-10">{icon}</div>
    </div>
    <div className="w-full text-left">
      <h3 className="text-lg lg:text-xl font-bold font-manrope text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  </div>
);

const ProgramDetails: React.FC = () => {
  // Calculate random rotations once for all cards
  const rotations = useMemo(
    () => programDetails.map(() => Math.floor(Math.random() * 360)),
    []
  );

  return (
    <section id="program-details" className="py-20">
      <div className="container mx-auto px-6 xl:px-28 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-manrope">
          Nossa Plataforma Completa
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Acesso a uma biblioteca de conteúdo vasta e direcionada, com tudo que
          você precisa para ser aprovado nos vestibulares mais concorridos do
          país.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {programDetails.map((detail, index) => (
            <DetailCard
              key={index}
              icon={detail.icon}
              title={detail.title}
              text={detail.text}
              rotation={rotations[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;