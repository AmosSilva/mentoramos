import joaoImage from '../assets/images/depoimentos/amos.webp';
import mariaImage from '../assets/images/depoimentos/amos.webp';
import anaImage from '../assets/images/depoimentos/amos.webp';
import pedroImage from '../assets/images/depoimentos/amos.webp';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

export const textTestimonialData: Testimonial[] = [
  {
    name: 'João Silva',
    title: 'Aprovado no ITA',
    quote: 'O GPS ITA foi um divisor de águas na minha preparação. O planejamento personalizado e o acompanhamento próximo fizeram toda a diferença para a minha aprovação.',
    image: joaoImage,
  },
  {
    name: 'Maria Oliveira',
    title: 'Aprovada no ITA',
    quote: 'Eu estava perdida, sem saber por onde começar. A mentoria me deu o direcionamento que eu precisava para focar no que realmente importa e conquistar minha vaga.',
    image: mariaImage,
  },
  {
    name: 'Ana Costa',
    title: 'Aprovada no ITA',
    quote: 'O suporte emocional e as estratégias de prova foram essenciais. Aprendi a controlar a ansiedade e a usar o tempo a meu favor. Recomendo demais!',
    image: anaImage,
  },
  {
    name: 'Pedro Lima',
    title: 'Aprovado no ITA',
    quote: 'As análises de desempenho foram cruciais. Conseguia ver exatamente onde precisava melhorar e ajustar meu plano de estudos com eficiência.',
    image: pedroImage,
  },
];