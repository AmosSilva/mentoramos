import React from 'react';

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ youtubeId, title }) => {
  // URL de embed com controles ativados
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?controls=1&modestbranding=1&rel=0`;

  return (
    <div className="relative w-full aspect-video bg-[#E8E4D8] rounded-xl p-2 md:p-3 overflow-hidden">
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