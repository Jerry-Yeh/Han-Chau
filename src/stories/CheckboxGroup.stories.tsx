import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { HCCheckbox, HCCheckboxGroup, CheckboxValueType } from '~/components/Checkbox';

export default {
  title: 'Components/CheckboxGroup',
  component: HCCheckbox,
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    value: {
      control: 'text',
      description: 'Used for selected value.',
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
    options: {
      control: false,
      description: '',
      table: {
        type: { summary: 'Array<CheckboxOptionType>' },
      },
    },
  },
} as Meta<typeof HCCheckbox>;

type Story = StoryFn<typeof HCCheckboxGroup>;

const dummyList = [
  { label: 'Option1', value: 1 },
  { label: 'Option2', value: 2 },
  { label: 'Option3', value: 3 },
];

export const Basic: Story = () => {
  const [value, setValue] = useState<CheckboxValueType[]>([]);

  const onChange = (list: CheckboxValueType[]) => {
    setValue(list);
    console.log('list', list);
  };

  return <HCCheckboxGroup value={value} onChange={onChange} options={dummyList} />;
};
