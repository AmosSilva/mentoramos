import React, { useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import { CheckIcon } from './icons';
import { ctaLink } from '../src/data/navigationData';
import { siteConfig } from '../src/data/siteConfig';

interface HeroProps {
  isLoading: boolean;
  onShowPageContent: () => void;
  isRevealed: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoading, onShowPageContent, isRevealed }) => {

  useEffect(() => {
    // Se a página já estiver revelada (usuário recorrente), não faz nada.
    if (isLoading || isRevealed) {
      return;
    }

    // Inicia o temporizador apenas para novos usuários.
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
          {/* Container do Texto */}
          <div className={`w-full text-left transition-all duration-1000 ease-in-out overflow-hidden ${isRevealed ? 'md:w-1/2 max-h-[1000px] md:mr-12' : 'md:w-0 max-h-0 md:mr-0'}`}>
            <div className={`transition-opacity duration-500 ease-in-out ${isRevealed ? 'opacity-100 delay-500' : 'opacity-0'}`}>
              <h1 className="mt-12 md:mt-0 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-manrope">
                Sua aprovação no ITA começa aqui.
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl md:mx-0">
                Mentoria completa para vestibulandos do ITA. Saiba o que é, para quem é, e como podemos te ajudar a conquistar sua vaga.
              </p>
              <div className="space-y-3 mt-7">
                <div className="flex items-center justify-start space-x-3">
                  <CheckIcon className="text-[#ffe566]" />
                  <span className="text-gray-300">Cronograma de estudos 100% personalizado</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <CheckIcon className="text-[#ffe566]" />
                  <span className="text-gray-300">Acompanhamento diário via WhatsApp</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <CheckIcon className="text-[#ffe566]" />
                  <span className="text-gray-300">Análise detalhada de desempenho</span>
                </div>
              </div>
              <div className="mt-10 h-16">
                <div className={`transition-all duration-700 ease-in-out ${isRevealed ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-5'}`}>
                  <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center md:inline-block md:w-auto bg-[linear-gradient(to_right,#3c89bd_24%,#5ca8a1_100%)] text-xl font-bold mb-2 font-manrope py-4 px-10 rounded-lg hover:brightness-110 transition-all hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]">
                    Quero minha vaga agora
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Container do Vídeo */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${isRevealed ? 'md:w-1/2' : 'md:w-full'}`}>
            <VideoPlayer videoId={siteConfig.vturbVideoId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;