import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { useArgs } from '@storybook/store';

import { HCCheckbox } from '~/components/Checkbox';
import type { CheckboxProps, InputChangeEvent } from '~/components/Checkbox/interface';

export default {
  title: 'Components/Checkbox',
  component: HCCheckbox,
  argTypes: {
    label: {
      control: 'text',
      description: 'A caption for checkbox.',
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
      description: 'Disabled checkbox.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    description: {
      control: 'text',
      description: 'Description for checkbox.',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Specfies wheehter the checkbox is selected.',
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
} as Meta<typeof HCCheckbox>;

type Story = StoryFn<typeof HCCheckbox>;

export const Basic: Story = ({ label, description, disabled }: CheckboxProps) => {
  const [{ checked }, updateArgs] = useArgs();

  const onChangeHandler = (e: InputChangeEvent) => updateArgs({ show: e.target.checked });
  const onClickHandler = () => updateArgs({ checked: !checked });

  return (
    <HCCheckbox
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
