import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import VideoTestimonials from './components/VideoTestimonials';
import AboutCreator from './components/AboutCreator';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProgramDetails from './components/ProgramDetails';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showPageContent, setShowPageContent] = useState(false);

  useEffect(() => {
    // Lógica VSL desativada para diagnóstico
    // const hasSeenVSL = localStorage.getItem('hasSeenVSL');

    // if (hasSeenVSL === 'true') {
    //   setShowPageContent(true);
    //   document.body.style.overflow = 'auto';
    // } else {
    //   document.body.style.overflow = 'hidden';
    // }
    
    // Forçando a exibição do conteúdo após o carregamento inicial
    document.body.style.overflow = 'auto';
    setShowPageContent(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  const handleShowPageContent = useCallback(() => {
    // Salva a "marcação" no navegador e mostra o conteúdo.
    // localStorage.setItem('hasSeenVSL', 'true');
    // setShowPageContent(true);
    // document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      <Header isLoading={!showPageContent} />
      <main>
        <Hero 
          isLoading={loading} 
          onShowPageContent={handleShowPageContent}
          isRevealed={showPageContent}
        />
        {/* Apenas renderiza o conteúdo após o carregamento inicial para evitar o "flash" */}
        {!loading && (
          <div className={`transition-opacity duration-1000 ${showPageContent ? 'opacity-100' : 'opacity-0'}`}>
              <Features />
              <Methodology />
              <VideoTestimonials />
              <ProgramDetails />
              <AboutCreator />
              <Testimonials />
              <ContactForm />
              <FAQ />
          </div>
        )}
      </main>
      {/* Também aplica a lógica ao rodapé */}
      {!loading && (
        <div className={`transition-opacity duration-1000 ${showPageContent ? 'opacity-100' : 'opacity-0'}`}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;