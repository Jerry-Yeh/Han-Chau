import { useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import ReactPlayer from 'react-player';

import type { PlayerProps } from '.';

const HCPlayer: React.FC<PlayerProps> = ({ url, start, end }: PlayerProps) => {
  const reactPlayerRef = useRef<ReactPlayer>(null);

  const handlePlay = () => {
    console.log('play');
  };

  const handleSeek = () => {
    console.log('seek');
  };

  const handleReady = () => {
    console.log('ready');
  };

  const handleCustomizeBtn = () => {
    console.log('test', reactPlayerRef.current);
    reactPlayerRef.current?.seekTo(60);
  };

  const handleDuration = () => {
    console.log('duration');
  };

  const handleProgress = () => {
    console.log('progress');
  };

  const handleEnd = () => {
    console.log('end');
    // reactPlayerRef.current?.showPreview();
    reactPlayerRef.current?.seekTo(60);
  };

  return (
    <div className='rounded-lg overflow-hidden aspect-video'>
      <ReactPlayer
        ref={reactPlayerRef}
        url={url}
        width='100%'
        height='100%'
        config={{
          youtube: {
            playerVars: {
              start,
              end,
            },
          },
        }}
        // controls={true}
        // onPlay={handlePlay}
        // onSeek={handleSeek}
        // onReady={handleReady}
        // onDuration={handleDuration}
        // onProgress={handleProgress}
        // onEnded={handleEnd}
      />
      {/* <button onClick={handleCustomizeBtn}>test</button> */}
    </div>
  );
};

export default HCPlayer;
