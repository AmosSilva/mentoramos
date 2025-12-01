import React, { useState, useMemo, useEffect } from 'react';
import { testimonialData } from '../src/data/testimonialsData';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ name, title, quote, image }: Testimonial) => (
  <div className="bg-[#131f25] p-8 rounded-2xl border-2 border-[#263b45] h-50 flex flex-col text-left">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-14 h-14 rounded-full mr-4 object-cover" />
      <div>
        <h4 className="font-bold text-lg font-manrope">{name}</h4>
        <p className="text-sm text-[#7fffd4] font-medium">{title}</p>
      </div>
    </div>
    <p className="text-gray-300">"{quote}"</p>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    
    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // Memoize the slides array to include clones for the infinite loop effect
  const slides = useMemo(() => {
    if (testimonialData.length === 0) return [];
    const firstClone = testimonialData[0];
    const lastClone = testimonialData[testimonialData.length - 1];
    return [lastClone, ...testimonialData, firstClone];
  }, [testimonialData]);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex: number) => prevIndex - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex: number) => prevIndex + 1);
  };

  const handleDotClick = (index: number) => {
    if (!isTransitioning) return;
    setCurrentIndex(index + 1); // Add 1 to account for the cloned slide at the beginning
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
    } else if (currentIndex === slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };
  
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const cardWidthVw = isMobile ? 80 : 50;
  const gapRem = isMobile ? 0.5 : 2;

  const transformStyle = {
    transform: `translateX(calc(50vw - ${cardWidthVw / 2}vw - ${gapRem / 2}rem - ${currentIndex} * (calc(${cardWidthVw}vw + ${gapRem}rem))))`,
  };

  const activeDotIndex = (currentIndex - 1 + testimonialData.length) % testimonialData.length;

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 xl:px-28 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-manrope">Histórias de sucesso</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          A confiança de quem já foi aprovado com o nosso método.
        </p>
      </div>

      <div className="mt-12 relative">
        <div
          className={`flex items-center gap-2 md:gap-8 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          onTransitionEnd={handleTransitionEnd}
          style={transformStyle}
        >
          {slides.map((testimonial: Testimonial, index: number) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="w-[80vw] md:w-[50vw] flex-shrink-0"
            >
              <div
                className={`transition-all duration-500 ease-in-out ${
                  currentIndex === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                }`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-8">
          <button onClick={handlePrev} className="bg-white/10 hover:brightness-125 text-white w-10 h-10 rounded-full transition-all flex items-center justify-center hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]" aria-label="Previous testimonial">
              <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="flex gap-2">
              {testimonialData.map((_, index: number) => (
                  <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full transition-all ${activeDotIndex === index ? 'bg-[#7fffd4]' : 'bg-white/20 hover:brightness-125 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]'}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
              ))}
          </div>
          <button onClick={handleNext} className="bg-white/10 hover:brightness-125 text-white w-10 h-10 rounded-full transition-all flex items-center justify-center hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]" aria-label="Next testimonial">
              <i className="fa-solid fa-arrow-right"></i>
          </button>
      </div>
    </section>
  );
};

export default Testimonials;