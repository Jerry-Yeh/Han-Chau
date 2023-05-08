import React, { MouseEventHandler } from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  rightClass?: string;
  bottomClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const FloatButton: React.FC<Props> = ({
  children,
  className,
  rightClass,
  bottomClass,
  onClick,
}: Props) => {
  return (
    <button
      className={`${className} w-12 h-12 p-3 bg-highlight rounded-full icon-onColor shadow-pop-over fixed ${rightClass} ${bottomClass} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

FloatButton.defaultProps = {
  rightClass: 'right-4',
  bottomClass: 'bottom-4',
};

export default FloatButton;
