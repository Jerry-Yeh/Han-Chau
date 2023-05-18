import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const threshold = 10;
  const [isDown, setDown] = useState(false);
  const [isFully, setFully] = useState(true);

  useEffect(() => {
    let previousPosition = window.pageYOffset;

    const scrollMoreThanThreshold = (currentPosition: number) =>
      Math.abs(currentPosition - previousPosition) > threshold;

    const isScrollingDown = (currentPosition: number) => currentPosition > previousPosition;

    const updagteScrollingDirection = () => {
      const currentPosition = window.pageYOffset;
      // console.log('cur', currentPosition);

      if (scrollMoreThanThreshold(currentPosition)) {
        setDown(isScrollingDown(currentPosition));
        previousPosition = currentPosition > 0 ? currentPosition : 0;
      }

      if (currentPosition === 0) {
        setFully(true);
      } else {
        setFully(false);
      }
    };

    const onScroll = () => window.requestAnimationFrame(updagteScrollingDirection);

    window.addEventListener('scroll', onScroll, true);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [isDown, isFully];
};

export default useScrollDirection;
