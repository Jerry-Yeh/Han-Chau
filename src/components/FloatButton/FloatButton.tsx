import React, { MouseEventHandler } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const FloatButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      className={`${props.className} w-12 h-12 p-3 bg-highlight rounded-full icon-onColor shadow-lg absolute right-4 bottom-4 cursor-pointer`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default FloatButton;
