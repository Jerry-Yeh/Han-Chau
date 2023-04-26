import React, { useState, ReactNode, useEffect } from 'react';

import HCStarLevel from '../Rate';

import StarIcon from '~/assets/img/heroicons/mini/star';

interface Props {
  children?: React.ReactNode;
  className?: string;
  type: 'rate';
  level: 0 | 1 | 2 | 3;
}

const Badge: React.FC<Props> = (props: Props) => {
  const [content, setContent] = useState<ReactNode>();

  useEffect(() => {
    switch (props.type) {
      case 'rate':
        setContent(<HCStarLevel level={props.level} size='s' onColor />);
        break;
    }
  }, [props.type, props.level]);

  return (
    <div className={`${props.className} px-1 py-0.5 bg-highlight rounded-lg inline-block`}>
      {content}
    </div>
  );
};

export default Badge;
