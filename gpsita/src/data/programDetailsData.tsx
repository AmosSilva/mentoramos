import React from "react";
import {
  VideoIcon,
  ListCheckIcon,
  BookOpenReaderIcon,
  RouteIcon,
  FilePenIcon,
  DatabaseIcon,
  LayerGroupIcon,
  StopwatchIcon,
  FlaskVialIcon,
  ClipboardCheckIcon,
  HeadsetIcon,
} from "../../components/icons";

const iconClass = "text-6xl text-[#ffe566]";

export const programDetails = [
  {
    icon: <VideoIcon className={iconClass} />,
    title: "Aulas de Exatas",
    text: "Aulas gravadas do básico ao avançado de Física, Química, Matemática com metodologia Microlearning. (1637 aulas com 390 horas)",
  },
  {
    icon: <ListCheckIcon className={iconClass} />,
    title: "Listas de Exercícios",
    text: "Listas de exercícios do básico ao avançado de Física Química e Matemática. (11.627 Questões com gabarito e várias delas com resolução)",
  },
  {
    icon: <BookOpenReaderIcon className={iconClass} />,
    title: "Aulas de Humanas",
    text: "Aulas gravadas do básico ao avançado de Português, Inglês e Literatura (337 aulas, 187 horas e 2239 Questões com gabarito e várias delas com resolução)",
  },
  {
    icon: <RouteIcon className={iconClass} />,
    title: "Trilha de Estudos",
    text: "Trilha de estudos detalhada, dividida por frentes e com checklists de assuntos para você nunca mais se sentir perdido. Siga um caminho claro e objetivo para a aprovação.",
  },
  {
    icon: <FilePenIcon className={iconClass} />,
    title: "Redação Quinzenal",
    text: "Temas de redação quinzenais com correção detalhada e focada nos critérios do ITA. Aprimore sua escrita e argumentação para garantir uma nota excelente.",
  },
  {
    icon: <DatabaseIcon className={iconClass} />,
    title: "Questões ITA 2.0",
    text: "Banco de questões ITA 2.0 com provas do ITA de exatas de 1995 a 2025 divididas por assunto, maior parte com resolução e resolução em vídeo de 2017 a 2025)",
  },
  {
    icon: <LayerGroupIcon className={iconClass} />,
    title: "Outros Questões",
    text: "Banco de questões IME (2010 a 2022), Banco de Questões AFA (2010 a 2022) e Banco de Questões EEAR (2014 a 2023) para um preparo completo.",
  },
  {
    icon: <StopwatchIcon className={iconClass} />,
    title: "Ciclos de Simulados",
    text: "7 Ciclos de simulados 100% focados no ITA, com gabarito comentado e análise de desempenho para você treinar em condições reais de prova.",
  },
  {
    icon: <FlaskVialIcon className={iconClass} />,
    title: "Bizuários de Química",
    text: "Bizuários de Química com os principais macetes e dicas para resolver questões complexas de forma rápida e eficiente. O segredo para gabaritar a prova.",
  },
  {
    icon: <ClipboardCheckIcon className={iconClass} />,
    title: "Revisão de Véspera",
    text: "Revisão completa e estratégica na semana que antecede o vestibular do ITA, focando nos tópicos de maior incidência para garantir que o conteúdo esteja fresco na memória.",
  },
  {
    icon: <HeadsetIcon className={iconClass} />,
    title: "Plantão de Dúvidas",
    text: "Plantão de dúvidas ao vivo e online com nossos monitores especializados para você não ficar com nenhuma pergunta sem resposta. Suporte total na sua jornada.",
  },
];