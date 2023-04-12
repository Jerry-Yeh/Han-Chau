import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/store';

import { HCRadio } from '~/components/Radio';

import type { RadioProps } from '~/components/Radio/interface';
import type { InputChangeEvent } from '~/components/ControlItem/interface';

import Chest from '~/assets/img/body/chest.svg';

export default {
  title: 'Components/Radio',
  component: HCRadio,
  argTypes: {
    label: {
      control: 'text',
      description: 'A caption for radio.',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: false,
      description: 'According to value for comparison, to determine whether the selected',
      table: {
        type: { summary: 'any' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled radio.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    description: {
      control: 'text',
      description: 'Description for radio.',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Specfies wheehter the radio is selected.',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    checked: false,
    label: '標籤',
    description: '內容',
    disabled: false,
  },
} as Meta<typeof HCRadio>;

type Story = StoryFn<typeof HCRadio>;

export const Basic: Story = ({ label, description, disabled }: RadioProps) => {
  const [{ checked }, updateArgs] = useArgs();

  const onChangeHandler = (e: InputChangeEvent) => updateArgs({ show: e.target.checked });
  const onClickHandler = () => {
    if (!checked) updateArgs({ checked: !checked });
  };

  return (
    <HCRadio
      value={0}
      checked={checked}
      disabled={disabled}
      label={label}
      description={description}
      onChange={onChangeHandler}
      onClick={onClickHandler}
    />
  );
};

export const Image: Story = ({ label, disabled }: RadioProps) => {
  const [{ checked }, updateArgs] = useArgs();

  const onChangeHandler = (e: InputChangeEvent) => updateArgs({ show: e.target.checked });
  const onClickHandler = () => {
    if (!checked) updateArgs({ checked: !checked });
  };

  return (
    <HCRadio
      value={0}
      checked={checked}
      disabled={disabled}
      label={label}
      image={<img src={Chest} alt='chest' />}
      onChange={onChangeHandler}
      onClick={onClickHandler}
    />
  );
};
