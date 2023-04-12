import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/store';

import { HCRadio, HCRadioGroup, RadioValueType, GroupProps } from '~/components/Radio';

import Chest from '~/assets/img/body/chest.svg';

export default {
  title: 'Components/RadioGroup',
  component: HCRadio,
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    value: {
      control: false,
      description: 'Used for selected value.',
      table: {
        type: { summary: 'Nullable<RadioValueType>' },
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
  },
  args: {
    value: null,
    disabled: false,
  },
} as Meta<typeof HCRadioGroup>;

type Story = StoryFn<typeof HCRadioGroup>;

const dummyList = [
  { label: '標籤', value: 1 },
  { label: '標籤', value: 2 },
  { label: '標籤', value: 3 },
];

export const Basic: Story = ({ disabled }: GroupProps) => {
  const [{ value }, updateArgs] = useArgs();

  const onChange = (newValue: RadioValueType) => {
    updateArgs({ value: newValue });
  };

  return <HCRadioGroup value={value} onChange={onChange} options={dummyList} disabled={disabled} />;
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

  const onChange = (list: RadioValueType) => updateArgs({ value: list });

  return (
    <HCRadioGroup
      value={value}
      options={dummyImageList}
      disabled={disabled}
      image
      onChange={onChange}
    />
  );
};
