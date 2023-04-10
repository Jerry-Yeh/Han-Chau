import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/store';

import { HCCheckboxGroup, CheckboxValueType } from '~/components/Checkbox';
import type { GroupProps } from '~/components/Checkbox/interface';

import Chest from '~/assets/img/body/chest.svg';

export default {
  title: 'Components/CheckboxGroup',
  component: HCCheckboxGroup,
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    value: {
      control: false,
      description: 'Used for selected value.',
      table: {
        type: { summary: 'Array<string | number | boolean>' },
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
  args: {
    value: [],
    disabled: false,
  },
} as Meta<typeof HCCheckboxGroup>;

type Story = StoryFn<typeof HCCheckboxGroup>;

const dummyList = [
  { label: '標籤', value: 1 },
  { label: '標籤', value: 2 },
  { label: '標籤', value: 3 },
];

export const Basic: Story = ({ disabled }: GroupProps) => {
  const [{ value }, updateArgs] = useArgs();

  const onChange = (list: CheckboxValueType[]) => updateArgs({ value: list });

  return (
    <HCCheckboxGroup value={value} onChange={onChange} options={dummyList} disabled={disabled} />
  );
};

const dummyImageList = [
  { label: '標籤', value: 1, image: <img src={Chest} alt='chest' /> },
  { label: '標籤', value: 2, image: <img src={Chest} alt='chest' /> },
  { label: '標籤', value: 3, image: <img src={Chest} alt='chest' /> },
  { label: '標籤', value: 4, image: <img src={Chest} alt='chest' /> },
  { label: '標籤', value: 5, image: <img src={Chest} alt='chest' /> },
  { label: '標籤', value: 6, image: <img src={Chest} alt='chest' /> },
];

export const Image: Story = ({ disabled }: GroupProps) => {
  const [{ value }, updateArgs] = useArgs();

  const onChange = (list: CheckboxValueType[]) => updateArgs({ value: list });

  return (
    <HCCheckboxGroup
      value={value}
      options={dummyImageList}
      disabled={disabled}
      image
      onChange={onChange}
    />
  );
};
