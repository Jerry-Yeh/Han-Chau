import { ChangeEvent } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/store';

import HCSearchBar from '~/components/SearchBar';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

import type { SearchBarProps } from '~/components/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: HCSearchBar,
  decorators: [AntdDecorator],
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    value: {
      control: 'text',
      description: 'The search bar content value.',
      table: {
        type: { summary: 'string' },
      },
    },
    prefixType: {
      control: 'select',
      options: ['search', 'previous'],
    },
    placeholder: {
      control: 'text',
      description: 'A short hint that describes the expected value of a search bar.',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      control: false,
      description: 'Callback when user input.',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    value: '',
    prefixType: 'search',
    placeholder: '尋找健身動作',
  },
} as Meta<typeof HCSearchBar>;

type Story = StoryFn<typeof HCSearchBar>;

export const Basic: Story = ({ prefixType, placeholder }: SearchBarProps) => {
  const [{ value }, updateArgs] = useArgs();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateArgs({ value: e.target.value });
  };

  return (
    <HCSearchBar
      value={value}
      prefixType={prefixType}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
