import React from 'react';
import logo from '../src/assets/images/logogpsmedicina.svg';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-6 xl:px-28 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="GPS Medicina Logo" className="h-7" />
        </a>
        <p className="text-gray-300 text-sm mb-4 md:mb-0">
          © 2025 GPS Medicina. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;