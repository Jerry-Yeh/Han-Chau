import { useState, useEffect, RefObject } from 'react';

const useHeight = (ref: RefObject<HTMLElement>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.clientHeight);
  }, [ref, ref.current?.clientHeight]);

  return height;
};

export default useHeight;
