import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * Hook para observar quando um elemento entra no viewport.
 * Ele define isIntersecting como true na primeira vez que o elemento é visto
 * e então para de observar.
 */
export const useIntersectionObserver = (options: IntersectionObserverOptions = {}) => {
  const { root = null, rootMargin = '0px', threshold = 0.5 } = options;
  const [isIntersecting, setIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Desconecta após a primeira interseção para garantir que o GIF só 'rode' uma vez
          observer.unobserve(entry.target);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const currentRef = targetRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [root, rootMargin, threshold]);

  return { targetRef, isIntersecting };
};