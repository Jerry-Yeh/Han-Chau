import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import ReactPlayer from 'react-player';

import type { PlayerProps, HandlePlayer } from '.';

const HCPlayer: React.ForwardRefRenderFunction<HandlePlayer, PlayerProps> = (
  { className, url, start, end }: PlayerProps,
  ref,
) => {
  const reactPlayerRef = useRef<ReactPlayer>(null);
  const [key, updateKey] = useState(0);

  useImperativeHandle(ref, () => ({
    reRender() {
      updateKey(key + 1);
    },
  }));

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

  const handleStop = () => {
    console.log('handleStop', reactPlayerRef.current);
    // setPlaying(false);
  };

  return (
    <div className={`${className} rounded-lg aspect-video`}>
      <ReactPlayer
        key={key}
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
        // playing={playing}
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

export default forwardRef(HCPlayer);
