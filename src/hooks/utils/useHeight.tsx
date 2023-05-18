import { useState, useEffect, RefObject } from 'react';

const useHeight = (ref: RefObject<HTMLElement>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeight(ref.current!.clientHeight);
    });
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return height;
};

export default useHeight;
