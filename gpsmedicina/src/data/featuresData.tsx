import React from 'react';
import { CalendarIcon, ChartIcon, KeyIcon, CheckIcon } from '../../components/icons';

const iconClass = "text-3xl text-[#7fffd4]";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export const featureData: Feature[] = [
  {
    icon: <CalendarIcon className={iconClass} />,
    title: 'Organização dos estudos',
    description: 'Planejamento de estudos personalizado para otimizar seu tempo e cobrir todo o edital.',
    details: [
      'Montagem da agenda semanal personalizada',
      'Cronograma diário com assuntos específicos',
      'Acompanhamento personalizado contínuo',
      'Direcionamento para manter disciplina e foco',
    ]
  },
  {
    icon: <ChartIcon className={iconClass} />,
    title: 'Acompanhamento de desempenho',
    description: 'Análise detalhada de progresso, identificando pontos fortes e áreas para melhorar.',
    details: [
      'Orientação sobre como estudar no dia a dia',
      'Estratégias para simulados e correções',
      'Controle de horas por matéria',
      'Análise detalhada de desempenho',
    ]
  },
  {
    icon: <KeyIcon className={iconClass} />,
    title: 'Conteúdos chave para aprovação',
    description: 'Acesso a aulas e materiais específicos focados nos tópicos com maior incidência.',
    details: [
      'Direcionamento de conteúdos essenciais',
      'Listas personalizadas para seu vestibular',
      'Foco em conteúdo programático específico',
      'Correção de redação quinzenal com feedback',
    ]
  },
  {
    icon: <CheckIcon className={iconClass} />,
    title: 'Revisão e realização de provas',
    description: 'Estratégias para revisões eficientes para maximizar seu desempenho no dia da prova.',
    details: [
      'Resolução de provas anteriores',
      'Orientações para os dias de prova',
      'Orientação personalizada de revisões',
      'Ajustes estratégicos contínuos',
    ]
  },
];