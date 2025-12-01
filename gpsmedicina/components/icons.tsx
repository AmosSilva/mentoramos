import React from 'react';

interface IconProps {
  className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 8.5L12 15L22 8.5L12 2Z" stroke="#7fffd4" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M2 15.5L12 22L22 15.5" stroke="#7fffd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 8.5L12 15L22 8.5" stroke="#7fffd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }: IconProps) => (
  <i className={`fa-solid fa-calendar-days ${className || ''}`}></i>
);

export const ChartIcon: React.FC<IconProps> = ({ className }: IconProps) => (
  <i className={`fa-solid fa-chart-column ${className || ''}`}></i>
);

export const KeyIcon: React.FC<IconProps> = ({ className }: IconProps) => (
  <i className={`fa-solid fa-key ${className || ''}`}></i>
);

export const CheckIcon: React.FC<IconProps> = ({ className }: IconProps) => (
    <i className={`fa-solid fa-circle-check ${className || ''}`}></i>
);

export const DiagnosisIcon: React.FC<IconProps> = ({ className }: IconProps) => (
    <i className={`fa-solid fa-magnifying-glass-chart ${className || ''}`}></i>
);

export const SessionsIcon: React.FC<IconProps> = ({ className }: IconProps) => (
    <i className={`fa-solid fa-users ${className || ''}`}></i>
);

export const PerformanceIcon: React.FC<IconProps> = ({ className }: IconProps) => (
    <i className={`fa-solid fa-gauge-high ${className || ''}`}></i>
);

export const WhatsappIcon: React.FC<IconProps> = ({ className }: IconProps) => (
    <i className={`fa-brands fa-whatsapp ${className || ''}`}></i>
);

export const DriveIcon: React.FC<IconProps> = ({ className }: IconProps) => (
    <i className={`fa-solid fa-folder-open ${className || ''}`}></i>
);