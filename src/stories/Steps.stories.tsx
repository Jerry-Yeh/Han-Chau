import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/store';
import { useState } from 'react';

import HCSteps, { StepItem } from '~/components/Steps';
import HCInput, { InputChangeEventType } from '~/components/Input';

export default {
  title: 'Components/Steps',
  component: HCSteps,
  argTypes: {
    items: {
      description: 'Content of the step item.',
      table: {
        type: { summary: 'StepItem[]' },
      },
    },
    dark: {
      control: 'boolean',
      description: 'Whether the step is dark mode or not.',
      defaultValue: { summary: false },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    items: [],
    dark: false,
  },
} as Meta<typeof HCSteps>;

type Story = StoryFn<typeof HCSteps>;

export const Basic: Story = () => {
  const [{ dark }] = useArgs();
  const items: StepItem[] = [
    {
      title: 'i m title',
      description: 'i m description',
    },
  ];

  return <HCSteps items={items} dark={dark} />;
};

export const Multiple: Story = () => {
  const [{ dark }] = useArgs();

  const items: StepItem[] = [
    {
      title: 'i m title1',
      description: 'i m description1',
    },
    {
      title: 'i m title2',
      description: 'i m description2',
    },
    {
      title: 'i m title3',
      description: 'i m description3',
    },
  ];

  return <HCSteps items={items} dark={dark} />;
};

export const WortoutForm: Story = () => {
  const [{ dark }] = useArgs();
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const handleChangeReps = (e: InputChangeEventType) => setReps(e.target.value);
  const handleChangeSets = (e: InputChangeEventType) => setSets(e.target.value);
  const items: StepItem[] = [
    {
      title: (
        <div className='flex pt-2 pr-4 pb-4 gap-x-2'>
          <HCInput value={reps} onChange={handleChangeReps} suffix='reps' />
          <HCInput value={sets} onChange={handleChangeSets} suffix='kg' />
        </div>
      ),
      description: `目前的加乘重量為 ${+reps * +sets} kg`,
    },
  ];

  return <HCSteps items={items} dark={dark} />;
};
