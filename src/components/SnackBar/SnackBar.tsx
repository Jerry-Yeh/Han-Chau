import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useRef,
  ReactElement,
  useCallback,
  useLayoutEffect,
} from 'react';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

import type { HandleMessage, SnackBarProps } from '.';

const HCSnackBar: React.ForwardRefRenderFunction<HandleMessage, SnackBarProps> = (
  { className, type = 'success', content }: SnackBarProps,
  ref,
) => {
  // const messageRef = useRef<HTMLDivElement>(null);

  const [icon, setIcon] = useState<ReactElement>();
  const [colorClass, setColorClass] = useState('');
  const [positionStyle, setPositionStyle] = useState('');
  const [height, setHeight] = useState(0);
  const messageRef = useCallback((node: HTMLDivElement) => {
    if (node && node.getBoundingClientRect()) {
      console.log(node.getBoundingClientRect());
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  useLayoutEffect(() => {
    switch (type) {
      case 'success':
        setIcon(<CheckCircleIcon />);
        setColorClass('bg-success icon-onColor text-onColor');
        break;
      case 'error':
        setIcon(<XCircleIcon />);
        setColorClass('bg-destructive icon-onColor text-onColor');
        break;
      case 'warning':
        setIcon(<ExclamationTriangleIcon />);
        setColorClass('bg-warning icon-primary text-secondary');
        break;
    }
  }, [type]);

  useImperativeHandle(ref, () => ({
    open() {
      setPositionStyle('0');

      setTimeout(() => {
        setPositionStyle(`-${height}px`);
      }, 2000);
    },
  }));

  useLayoutEffect(() => {
    setPositionStyle(`-${height}px`);
  }, [height]);

  return (
    <div
      ref={messageRef}
      className={`${className} w-screen fixed flex justify-center p-4 transition-bottom duration-200`}
      style={{
        bottom: positionStyle,
      }}
    >
      <div className={`${colorClass} rounded-lg flex shadow-lg px-4`}>
        <div className='shrink-0 w-6 h-6 py-3 mr-4'>{icon}</div>
        <p className='text-body-s py-3.5'>{content}</p>
      </div>
    </div>
  );
};

export default forwardRef(HCSnackBar);
