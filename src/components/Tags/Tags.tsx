import React, { useState } from 'react';

import type { TagsProps } from '.';

const Tags: React.FC<TagsProps> = ({ className, data }: TagsProps) => {
  const [itemClass] = useState(
    'border border-secondary bg-tertiary text-body-bold-xs text-tertiary rounded px-2 py-1',
  );

  return (
    <div className={`${className} flex gap-x-2`}>
      {data.map((item) =>
        typeof item === 'string' ? (
          <div key={item} className={itemClass}>
            {item}
          </div>
        ) : (
          <div key={item.text} className={itemClass}>
            {item.text}
          </div>
        ),
      )}
    </div>
  );
};

export default Tags;
