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
    const hasSeenVSL = localStorage.getItem('hasSeenVSL');

    if (hasSeenVSL === 'true') {
      // Se o usuário já viu, mostra o conteúdo e ativa a rolagem imediatamente.
      setShowPageContent(true);
      document.body.style.overflow = 'auto';
    } else {
      // Se for a primeira vez, esconde a rolagem.
      document.body.style.overflow = 'hidden';
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  const handleShowPageContent = useCallback(() => {
    // Salva a "marcação" no navegador e mostra o conteúdo.
    localStorage.setItem('hasSeenVSL', 'true');
    setShowPageContent(true);
    document.body.style.overflow = 'auto';
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