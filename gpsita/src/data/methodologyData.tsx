import React from 'react';
import { DiagnosisIcon, SessionsIcon, PerformanceIcon, WhatsappIcon, DriveIcon } from '../../components/icons';

const iconClass = "text-3xl text-[#ffe566]";

export const methodologyData = [
  {
    icon: <DiagnosisIcon className={iconClass} />,
    title: 'Entrevista diagnóstica inicial',
    description: 'Avaliação completa do seu perfil, objetivos e necessidades específicas para criar sua estratégia personalizada',
  },
  {
    icon: <SessionsIcon className={iconClass} />,
    title: 'Encontros individuais semanais',
    description: 'Reuniões individuais toda semana para acompanhar seu progresso e fazer ajustes necessários',
  },
  {
    icon: <WhatsappIcon className={iconClass} />,
    title: 'Suporte Diário',
    description: 'Acompanhamento diário via WhatsApp para tirar dúvidas e manter você motivado',
  },
  {
    icon: <PerformanceIcon className={iconClass} />,
    title: 'Sistema de acompanhamento dos estudos',
    description: 'Plataforma completa para monitorar seu desempenho, horas de estudo e evolução',
  },
  {
    icon: <DriveIcon className={iconClass} />,
    title: 'Drive GPS ITA com listas de exercícios',
    description: 'Acesso exclusivo ao nosso drive com listas de exercícios e materiais complementares',
  },
];