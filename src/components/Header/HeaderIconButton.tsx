import React, { MouseEvent } from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
}

const HCHeaderIconButton: React.FC<Props> = (props: Props) => {
  return (
    <button className='p-3' onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default HCHeaderIconButton;
