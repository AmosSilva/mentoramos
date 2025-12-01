import React, { useEffect } from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  useEffect(() => {
    const scriptId = `vturb-script-${videoId}`;
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://scripts.converteai.net/f1156368-e642-4c69-b1bf-86397559d97d/players/${videoId}/v4/player.js`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [videoId]);

  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl shadow-[-4px_-4px_100px_-8px_rgba(0,64,153,0.5),_4px_4px_100px_-8px_rgba(0,122,82,0.6)] p-2 md:p-3 overflow-hidden">
      <div className="w-full h-full rounded-lg overflow-hidden">
        {/* @ts-ignore */}
        <vturb-smartplayer
          id={`vid-${videoId}`}
          style={{ display: 'block', width: '100%', height: '100%' }}
        ></vturb-smartplayer>
      </div>
    </div>
  );
};

export default VideoPlayer;