import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  ReactElement,
  useRef,
  useEffect,
} from 'react';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

import type { HandleSnackBar, SnackBarProps, SnackBarHandler } from '.';

const HCSnackBar: React.ForwardRefRenderFunction<HandleSnackBar, SnackBarProps> = (
  { className }: SnackBarProps,
  ref,
) => {
  const messageRef = useRef<HTMLDivElement>(null);

  const [icon, setIcon] = useState<ReactElement>();
  const [colorClass, setColorClass] = useState('');
  const [positionStyle, setPositionStyle] = useState('-100%');
  const [height, setHeight] = useState(0);
  const [value, setValue] = useState<SnackBarHandler>({ type: 'success', content: '' });

  useEffect(() => {
    const { current } = messageRef;

    if (!current) return;

    const observer = new ResizeObserver(() => {
      setHeight(current.getBoundingClientRect().height);
    });

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (height) {
      setPositionStyle(`-${height}px`);
    }
  }, [height]);

  useImperativeHandle(ref, () => ({
    open(value: SnackBarHandler) {
      setValue((prev) => ({ ...prev, ...value }));
    },
  }));

  useEffect(() => {
    switch (value.type) {
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
  }, [value.type]);

  useEffect(() => {
    if (value.content) {
      setPositionStyle('0');

      setTimeout(() => {
        setPositionStyle(`-${height}px`);
      }, 2000);
    }
  }, [value, height]);

  return (
    <div
      ref={messageRef}
      className={`${className} w-screen fixed left-0 flex justify-center p-4 transition-bottom duration-200 z-40`}
      style={{
        bottom: positionStyle,
      }}
    >
      <div className={`${colorClass} rounded-lg flex shadow-pop-over px-4`}>
        <div className='shrink-0 w-6 h-6 py-3 mr-4'>{icon}</div>
        <p className='text-body-s py-3.5'>{value.content}</p>
      </div>
    </div>
  );
};

export default forwardRef(HCSnackBar);
