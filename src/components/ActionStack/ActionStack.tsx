import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children?: React.ReactNode;
  show: boolean;
}

const HCActionStack: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('');

  useEffect(() => {
    if (ref.current?.clientHeight) {
      setHeight(`${ref.current?.clientHeight}px`);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`
        w-full px-4 pt-9 pb-6 bg-white box-border drop-shadow-reversed rounded-t-3xl
        fixed left-0 duration-800`}
      style={{ bottom: props.show ? '0' : `-${height}` }}
    >
      {props.children}
    </div>
  );
};

HCActionStack.defaultProps = {
  show: false,
};

export default HCActionStack;
