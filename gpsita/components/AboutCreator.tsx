import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { professionalTimelineData, academicTimelineData } from '../src/data/timelineData';
import amosImage from '../src/assets/images/amos.webp';
import whitelogoGif from '../src/assets/images/whitelogo.gif';
import { LogoIcon } from './icons';
import { useIntersectionObserver } from '../src/hooks/useIntersectionObserver';

// Import academic timeline images
import eear200901 from '../src/assets/images/acadêmico/eear200901.png';
import ufpa200902 from '../src/assets/images/acadêmico/ufpa200902.png';
import afa201001 from '../src/assets/images/acadêmico/afa201001.png';
import usp201002 from '../src/assets/images/acadêmico/usp201002.png';
import ime2011 from '../src/assets/images/acadêmico/ime2011.png';
import ita20122020 from '../src/assets/images/acadêmico/ita20122020.png';

// Import professional timeline images
import casdImage from '../src/assets/images/profissional/casd.png';
import poliedroImage from '../src/assets/images/profissional/poliedro.png';
import lemannImage from '../src/assets/images/profissional/lemann.png';
import cenofImage from '../src/assets/images/profissional/cenof.png';
import planckImage from '../src/assets/images/profissional/planck.webp';
import itaImage from '../src/assets/images/profissional/ita.png';
import cataliseImage from '../src/assets/images/profissional/catalise.png';

// Helper function to get the image URL for the academic timeline
const getAcademicImageUrl = (year: string, index: number): string => {
  if (index === 0) return eear200901;
  if (index === 1) return ufpa200902;
  if (index === 2) return afa201001;
  if (index === 3) return usp201002;
  if (index === 4) return ime2011;
  
  // Usa ita20122020 para o bloco '2012 - 2020' (index 5) e para os anos subsequentes que ainda não têm imagem definida.
  if (index >= 5) return ita20122020;
  
  // Fallback (should not be reached based on current timelineData)
  return `https://picsum.photos/seed/${year}/160/160`;
};

// Helper function to get the image URL for the professional timeline
const getProfessionalImageUrl = (index: number): string => {
  switch (index) {
    case 0: return casdImage;
    case 1: return poliedroImage;
    case 2: return lemannImage;
    case 3: return cenofImage;
    case 4: return itaImage;
    case 5: return planckImage;
    case 6: return cataliseImage;
    default: return ''; 
  }
};

const AboutCreator: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState<'professional' | 'academic'>('professional');
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const initialLoad = useRef(true);
  
  // Use Intersection Observer on the content block containing the GIF
  const { targetRef: gifTargetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  // Drag-to-scroll refs
  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const timelineData = activeTimeline === 'professional' ? professionalTimelineData : academicTimelineData;

  // Reset state and scroll position when the timeline data changes
  useEffect(() => {
    setActiveIndex(0);
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
    initialLoad.current = true; // Prevent centering on timeline switch
    itemRefs.current = []; // Clear old refs
  }, [activeTimeline]);

  // Set initial scroll to the beginning on mount
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  // Center active item on change, but not on initial load/switch
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    const container = containerRef.current;
    const activeItem = itemRefs.current[activeIndex];
    if (container && activeItem) {
      const containerCenter = container.offsetWidth / 2;
      const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
      container.scrollTo({
        left: itemCenter - containerCenter,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    wasDragged.current = false;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    if (!containerRef.current || !isDragging.current) return;
    isDragging.current = false;
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
  };

  const handleMouseUp = () => {
    if (!containerRef.current) return;
    isDragging.current = false;
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
    // Reset wasDragged after a short delay to allow click event to fire
    setTimeout(() => { wasDragged.current = false; }, 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current);
    if (Math.abs(walk) > 5) { // Threshold to prevent click from being a drag
      wasDragged.current = true;
    }
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleItemClick = (index: number) => {
    if (wasDragged.current) return;
    setActiveIndex(index);
  };

  const TimelineSelector = () => (
    <div className="flex justify-center gap-8 mb-8">
      <button
        onClick={() => setActiveTimeline('professional')}
        className={`pb-2 font-semibold transition-colors duration-300 ${activeTimeline === 'professional' ? 'text-white border-b-2 border-[#ffe566]' : 'text-gray-400 border-b-2 border-transparent hover:text-white'}`}
      >
        Trajetória Profissional
      </button>
      <button
        onClick={() => setActiveTimeline('academic')}
        className={`pb-2 font-semibold transition-colors duration-300 ${activeTimeline === 'academic' ? 'text-white border-b-2 border-[#ffe566]' : 'text-gray-400 border-b-2 border-transparent hover:text-white'}`}
      >
        Trajetória Acadêmica
      </button>
    </div>
  );


  return (
    <section id="about-creator" className="py-20 my-20 bg-[#0c1b2d] shadow-[-4px_-4px_100px_-8px_rgba(0,64,153,0.5),_4px_4px_100px_-8px_rgba(0,122,82,0.6)]">
      <div className="container mx-auto px-6 xl:px-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
             <div className="p-1">
              <img
                src={amosImage}
                alt="Amós Silva"
                className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-[#426f84] object-cover object-[0_25%] bg-[linear-gradient(to_bottom,#305570,#00858e)] shadow-[-4px_-4px_100px_0px_rgba(0,64,153,0.5),_4px_4px_100px_0px_rgba(0,122,82,0.6)] hover:shadow-[-4px_-4px_50px_0px_rgba(0,64,153,0.5),_4px_4px_50px_0px_rgba(0,122,82,0.6)] transition-shadow duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start" ref={gifTargetRef}>
            {isIntersecting ? (
              <img 
                src={whitelogoGif} 
                alt="Conheça o criador do método" 
                className="h-40 md:h-96 w-full md:w-96 object-cover md:-mb-16 relative z-10" 
              />
            ) : (
              // Placeholder estático para manter o layout antes do GIF ser carregado
              <div className="h-12 md:h-16 w-auto ob relative z-10 flex items-center justify-center">
                <LogoIcon className="h-12 md:h-16 w-auto text-white" />
              </div>
            )}
            <div className="text-gray-300 leading-relaxed space-y-4 mt-8 text-center lg:text-left">
              <p>Textinho bacana Textinho bacana Textinho bacana Textinho bacana Textinho bacana Textinho bacana Textinho bacana Textinho bacana Textinho bacana </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <TimelineSelector />
          <div
            ref={containerRef}
            className="relative overflow-x-auto scrollbar-hide -mx-6 xl:-mx-28 2xl:mx-0 2xl:flex 2xl:justify-center cursor-grab 2xl:cursor-auto"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="timeline-inner relative inline-flex items-start pl-6 xl:pl-28 2xl:px-0 pt-4" style={{ paddingRight: 'calc(50vw - 80px)' }}>
              {/* The connecting line */}
              <div
                className="absolute top-[12.5rem] h-px bg-white/30 left-[104px] xl:left-[192px] 2xl:left-[80px]"
                style={{
                  width: `${(timelineData.length - 1) * 160}px`
                }}
              ></div>

              {timelineData.map((item, index) => (
                <div
                  key={`${activeTimeline}-${index}`}
                  ref={(el: HTMLDivElement | null) => { if (el) itemRefs.current[index] = el; }}
                  className="flex-shrink-0 text-center cursor-pointer relative group"
                  style={{ width: '160px' }}
                  onClick={() => handleItemClick(index)}
                >
                  <div className={`w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden transition-all duration-300 transform group-hover:scale-125 ${activeIndex === index ? 'scale-125' : ''}`} >
                    <img 
                      src={
                        activeTimeline === 'academic' 
                          ? getAcademicImageUrl(item.year, index) 
                          : getProfessionalImageUrl(index)
                      } 
                      alt={item.year} 
                      className="object-contain p-2 w-full h-full rounded-lg" 
                    />
                  </div>
                  <p className={`font-bold font-manrope text-lg transition-colors group-hover:text-white ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}>{item.year}</p>

                  <div className="mt-4 relative h-6">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-4 h-4 bg-[#131f25] border-2 rounded-full relative z-10 transition-all group-hover:border-[#ffe566] group-hover:bg-[#ffe566] ${activeIndex === index ? 'border-[#ffe566] bg-[#ffe566]' : 'border-white/10'}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 max-w-3xl mx-auto min-h-[6rem]">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">{timelineData[activeIndex]?.description}</p>
          </div>
        </div>

      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        @media (min-width: 1536px) {
          .timeline-inner {
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutCreator;