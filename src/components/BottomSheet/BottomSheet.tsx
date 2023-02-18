import React, { useEffect, useRef, useState } from 'react';
import {} from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  className?: string;
  show: boolean;
}

const HCBottomSheet: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [defaultPos, setDefaultPos] = useState('-bottom-full');
  const [shadow, setShadow] = useState('');

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current?.clientHeight);
      setDefaultPos('');
    }
  }, [height]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (props.show) {
      timer = setTimeout(() => {
        setShadow('drop-shadow-reversed');
      }, 0);
    } else {
      timer = setTimeout(() => {
        setShadow('');
      }, 800);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [props.show, shadow]);

  return (
    <div
      ref={ref}
      className={`
        ${props.className}
        ${defaultPos}
        ${shadow}
        w-full pt-9 pb-6 px-4 bg-white box-border rounded-t-3xl
        fixed left-0 transition-bottom duration-800`}
      style={{ bottom: props.show ? '0' : `-${height}px` }}
    >
      {props.children}
    </div>
  );
};

HCBottomSheet.defaultProps = {
  show: false,
  className: '',
};

export default HCBottomSheet;
