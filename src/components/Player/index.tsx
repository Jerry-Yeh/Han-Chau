import { useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import ReactPlayer from 'react-player';

import WorkExerciseApi from '~/services/exercise';
import FoodApi from '~/services/food';

const Hello = () => {
  // useEffect(() => {
  //   const queryWorkoutExerciseList = async () => {
  //     const result = await WorkExerciseApi.queryWorkoutExerciseList();
  //     console.log(result);
  //   };
  //   queryWorkoutExerciseList();
  // }, []);

  /**
   * react-youtube
   */
  const reactPlayerRef = useRef<ReactPlayer>(null);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const videoId = '30b6xZ5q7k8';
  const opts: YouTubeProps['opts'] = {
    width: '560',
    height: '315',
    playerVars: {
      start: '60',
      end: '61',
    },
  };

  /**
   * react-player
   */
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
    <div>
      {/* <YouTube videoId={videoId} opts={opts} /> */}

      {/* react-player */}
      <ReactPlayer
        ref={reactPlayerRef}
        url='https://www.youtube.com/watch?v=CdOu0CucVUg'
        config={{
          youtube: {
            playerVars: {
              start: '60',
              end: '62',
            },
          },
        }}
        controls={true}
        onPlay={handlePlay}
        onSeek={handleSeek}
        onReady={handleReady}
        onDuration={handleDuration}
        onProgress={handleProgress}
        onEnded={handleEnd}
      />
      <button onClick={handleCustomizeBtn}>test</button>
    </div>
  );
};

export default Hello;
