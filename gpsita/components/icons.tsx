import React from 'react';

interface IconProps {
  className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 8.5L12 15L22 8.5L12 2Z" stroke="#ffe566" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M2 15.5L12 22L22 15.5" stroke="#ffe566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 8.5L12 15L22 8.5" stroke="#ffe566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-calendar-days ${className || ''}`}></i>
);

export const ChartIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-chart-column ${className || ''}`}></i>
);

export const KeyIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-key ${className || ''}`}></i>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-circle-check ${className || ''}`}></i>
);

export const DiagnosisIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-magnifying-glass-chart ${className || ''}`}></i>
);

export const SessionsIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-users ${className || ''}`}></i>
);

export const PerformanceIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-gauge-high ${className || ''}`}></i>
);

export const WhatsappIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-brands fa-whatsapp ${className || ''}`}></i>
);

export const DriveIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-folder-open ${className || ''}`}></i>
);

export const VideoIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-video ${className || ''}`}></i>
);

export const ListCheckIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-list-check ${className || ''}`}></i>
);

export const BookOpenReaderIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-book-open-reader ${className || ''}`}></i>
);

export const RouteIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-route ${className || ''}`}></i>
);

export const FilePenIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-file-pen ${className || ''}`}></i>
);

export const DatabaseIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-database ${className || ''}`}></i>
);

export const LayerGroupIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-layer-group ${className || ''}`}></i>
);

export const StopwatchIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-stopwatch-20 ${className || ''}`}></i>
);

export const FlaskVialIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-flask-vial ${className || ''}`}></i>
);

export const ClipboardCheckIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-clipboard-check ${className || ''}`}></i>
);

export const HeadsetIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-headset ${className || ''}`}></i>
);