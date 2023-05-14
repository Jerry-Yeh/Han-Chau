import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const threshold = 100;
  const [isDoan, setDown] = useState(false);
  const [isFully, setFully] = useState(true);

  useEffect(() => {
    let previousPosition = window.scrollY;

    const scrollMoreThanThreshold = (currentPosition: number) =>
      Math.abs(currentPosition - previousPosition) > threshold;

    const isScrollingUp = (currentPosition: number) => {
      return previousPosition < currentPosition;
    };

    const updagteScrollingDirection = () => {
      const currentPosition = window.scrollY;

      if (scrollMoreThanThreshold(currentPosition)) {
        setDown(isScrollingUp(currentPosition));
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

  return [isDoan, isFully];
};

export default useScrollDirection;
