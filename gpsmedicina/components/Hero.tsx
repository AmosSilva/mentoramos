import React, { useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import { CheckIcon } from './icons';
import { ctaLink } from '../src/data/appConfig';
import { siteConfig } from '../src/data/siteConfig';

interface HeroProps {
  isLoading: boolean;
  onShowPageContent: () => void;
  isRevealed: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoading, onShowPageContent, isRevealed }) => {

  useEffect(() => {
    if (isLoading || isRevealed) {
      return;
    }

    const timer = setTimeout(() => {
      onShowPageContent();
    }, siteConfig.ctaDelaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [isLoading, isRevealed, onShowPageContent]);

  if (isLoading) {
    return null;
  }

  return (
    <section className={`transition-all duration-1000 ${isRevealed ? 'py-20' : 'py-12'}`}>
      <div className="container mx-auto px-6 xl:px-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:min-h-[50vh]">
          
          <div className={`w-full text-left transition-all duration-1000 ease-in-out overflow-hidden ${isRevealed ? 'md:w-1/2 max-h-[1000px] md:mr-12' : 'md:w-0 max-h-0 md:mr-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-manrope">
              Sua aprovação em medicina começa aqui.
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Mentoria completa para vestibulandos de medicina. Saiba o que é, para quem é, e como podemos te ajudar a conquistar sua vaga.
            </p>
            <div className="space-y-3 mt-7">
              <div className="flex items-center justify-start space-x-3">
                <CheckIcon className="text-[#7fffd4]" />
                <span className="text-gray-300">Cronograma de estudos 100% personalizado</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <CheckIcon className="text-[#7fffd4]" />
                <span className="text-gray-300">Acompanhamento diário via WhatsApp</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <CheckIcon className="text-[#7fffd4]" />
                <span className="text-gray-300">Análise detalhada de desempenho</span>
              </div>
            </div>
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="mt-10 block w-full text-center md:inline-block md:w-auto bg-[linear-gradient(to_right,#3c89bd_24%,#5ca8a1_100%)] text-xl font-bold mb-2 font-manrope py-4 px-10 rounded-lg hover:brightness-110 transition-all hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]">
              Quero minha vaga agora
            </a>
          </div>

          <div className={`w-full transition-all duration-1000 ease-in-out ${isRevealed ? 'md:w-1/2' : 'md:w-full'}`}>
            <VideoPlayer videoId={siteConfig.vturbVideoId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;