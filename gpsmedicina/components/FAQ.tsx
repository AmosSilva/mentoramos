import React, { useState } from 'react';
import { faqData } from '../src/data/faqData';

const FaqItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex justify-between items-center text-left py-6 px-2"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="text-2xl text-[#7fffd4] transform transition-transform duration-300">
          {isOpen ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-300 pb-6 px-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6 xl:px-28 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-manrope">Perguntas Frequentes</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Ainda tem dúvidas? Encontre aqui as respostas para as perguntas mais comuns sobre a nossa mentoria.
        </p>
        <div className="max-w-3xl mx-auto mt-12 text-left">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;