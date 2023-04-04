import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import HCPill, { PillValue, PillItem } from '~/components/Pill';
import { Nullable } from '~/typings/utils';

export default {
  title: 'Components/Pill',
  component: HCPill,
  argTypes: {},
} as Meta<typeof HCPill>;

type Story = StoryFn<typeof HCPill>;

const dummyList = [
  {
    label: '標籤',
    value: 1,
  },
  {
    label: '標籤',
    value: 2,
  },
  {
    label: '標籤',
    value: 3,
  },
  {
    label: '標籤',
    value: 4,
  },
  {
    label: '標籤',
    value: 5,
  },
  {
    label: '標籤',
    value: 6,
  },
];

export const Basic: Story = () => {
  const [value, setValue] = useState<Nullable<PillValue>>(null);

  const onChangeHandler = (value: PillValue) => setValue(value);

  return <HCPill value={value} list={dummyList} onChange={onChangeHandler} />;
};
