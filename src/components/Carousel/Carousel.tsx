import React from 'react';
import { Carousel } from 'antd';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const HCCarousel: React.FC<Props> = (props: Props) => {
  return <Carousel className={props.className}>{props.children}</Carousel>;
};

export default HCCarousel;
