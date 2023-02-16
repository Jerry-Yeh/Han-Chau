import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  show: boolean;
}

const HCBottomSheet: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current?.clientHeight) {
      setHeight(ref.current?.clientHeight);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${props.className}
        ${props.show && 'drop-shadow-reversed'}
        w-full pt-9 pb-6 px-4 bg-white box-border rounded-t-3xl
        fixed left-0 duration-800`}
      // style={{ bottom: props.show ? '0' : `-${height}px` }}
      style={{ bottom: 0 }}
    >
      {props.children}
    </div>
  );
};

HCBottomSheet.defaultProps = {
  show: false,
};

export default HCBottomSheet;
