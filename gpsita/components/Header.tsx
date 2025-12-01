import React, { useState } from 'react';
import logo from '../src/assets/images/logogpsita.svg';
import { navLinks, ctaLink } from '../src/data/navigationData';

interface HeaderProps {
    isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-1000 ease-in-out overflow-hidden ${isLoading ? 'max-h-0 opacity-0 py-0' : 'max-h-96 opacity-100 py-4'}`}>
      <div className="container mx-auto px-6 xl:px-28">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="GPS ITA Logo" className="h-8" />
          </a>
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="hidden lg:block bg-[linear-gradient(to_right,#3c89bd_24%,#5ca8a1_100%)] text-white font-manrope font-bold py-2 px-6 rounded-lg hover:brightness-110 transition-all hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]">
            Quero me inscrever
          </a>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
              <nav className="flex flex-col items-center gap-4">
                  {navLinks.map((link) => (
                      <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                      </a>
                  ))}
                  <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[linear-gradient(to_right,#3c89bd_24%,#5ca8a1_100%)] text-white font-manrope font-bold py-3 px-6 rounded-lg hover:brightness-110 transition-all hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]" onClick={() => setIsMenuOpen(false)}>
                      Quero me inscrever
                  </a>
              </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;