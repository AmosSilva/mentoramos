import React from 'react';

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ youtubeId, title }) => {
  // URL de embed com controles ativados
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?controls=1&modestbranding=1&rel=0`;

  return (
    <div className="relative w-full aspect-video bg-[#E8E4D8] rounded-xl shadow-[-4px_-4px_100px_-8px_rgba(0,64,153,0.5),_4px_4px_100px_-8px_rgba(0,122,82,0.6)] p-2 md:p-3 overflow-hidden">
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;