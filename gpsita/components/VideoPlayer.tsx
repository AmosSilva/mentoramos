import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  // Usando um iframe simples para diagnóstico
  const embedUrl = `https://www.youtube.com/embed/t_UDv2kNS9U?controls=1&modestbranding=1&rel=0`; // Usando um ID de placeholder

  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl shadow-[-4px_-4px_100px_-8px_rgba(0,64,153,0.5),_4px_4px_100px_-8px_rgba(0,122,82,0.6)] p-2 md:p-3 overflow-hidden">
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl}
        title="Player de Vídeo (Diagnóstico)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;