import React from 'react';
import { ctaLink } from '../src/data/appConfig';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 xl:px-28">
        <div className="bg-[#131f25] border-2 border-[#263b45] rounded-2xl p-8 md:p-16 max-w-4xl mx-auto text-center transition-shadow duration-300 shadow-[-4px_-4px_50px_0px_rgba(0,64,153,0.5),_4px_4px_50px_0px_rgba(0,122,82,0.6)] hover:shadow-[0px_0px_5px_0px_rgba(0,64,153,0.7),_0px_0px_5px_0px_rgba(0,122,82,0.8)]">
            <h2 className="text-4xl md:text-5xl font-extrabold font-manrope">Pronto para começar sua jornada?</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Clique no botão abaixo para garantir sua vaga na mentoria e dar o primeiro passo rumo à aprovação em medicina. As vagas são limitadas!
            </p>
            <a 
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[linear-gradient(to_right,#3c89bd_24%,#5ca8a1_100%)] text-white font-manrope font-bold py-4 px-10 rounded-lg text-lg hover:brightness-110 transition-all hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]"
            >
              Quero me inscrever
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;