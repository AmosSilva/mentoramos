import joaoImage from '../assets/images/depoimentos/amos.webp';
import mariaImage from '../assets/images/depoimentos/amos.webp';
import anamage from '../assets/images/depoimentos/amos.webp';
import pedrosImage from '../assets/images/depoimentos/amos.webp';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

export const testimonialData: Testimonial[] = [
  {
    name: 'João Silva',
    title: 'Aprovado em Medicina - USP',
    quote: 'O GPS Medicina foi um divisor de águas na minha preparação. O planejamento personalizado e o acompanhamento próximo fizeram toda a diferença para a minha aprovação.',
    image: joaoImage,
  },
  {
    name: 'Maria Oliveira',
    title: 'Aprovada em Medicina - Unicamp',
    quote: 'Eu estava perdida, sem saber por onde começar. A mentoria me deu o direcionamento que eu precisava para focar no que realmente importa e conquistar minha vaga.',
    image: mariaImage,
  },
  {
    name: 'Ana Costa',
    title: 'Aprovada em Medicina - Unesp',
    quote: 'O suporte emocional e as estratégias de prova foram essenciais. Aprendi a controlar a ansiedade e a usar o tempo a meu favor. Recomendo demais!',
    image: anamage,
  },
  {
    name: 'Pedro Lima',
    title: 'Aprovado em Medicina - UFRJ',
    quote: 'As análises de desempenho foram cruciais. Conseguia ver exatamente onde precisava melhorar e ajustar meu plano de estudos com eficiência.',
    image: pedrosImage,
  },
];