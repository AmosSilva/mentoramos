import React from 'react';
import logo from '../src/assets/images/logogpsita.svg';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-6 xl:px-28 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <a href="#" className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="GPS ITA Logo" className="h-8" />
        </a>
        <p className="text-gray-300 text-sm">
          © 2025 GPS ITA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;