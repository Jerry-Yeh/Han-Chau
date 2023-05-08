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
    filter: {
      control: 'boolean',
      description: 'Whether the search bar has a filter suffix icon or not.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    filtering: {
      control: 'boolean',
      description: 'Whether the search bar filter is filtering or not.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      control: false,
      description: 'Specify a function that will be called when a user input.',
      table: {
        type: { summary: '(e: ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    onFilter: {
      control: false,
      description: 'Specify a function that will be called when a user click filter icon.',
      table: {
        type: { summary: '() => void' },
      },
    },
    onPrefix: {
      control: false,
      description: 'Specify a function that will be called when a user click prefix icon.',
      table: {
        type: { summary: '() => void' },
      },
    },
    onFocus: {
      control: false,
      description: 'Sepcify a function that will be called when a user focus on search bar.',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    value: '',
    prefixType: 'search',
    placeholder: '尋找健身動作',
    filter: true,
    filtering: false,
  },
} as Meta<typeof HCSearchBar>;

type Story = StoryFn<typeof HCSearchBar>;

export const Basic: Story = ({ prefixType, placeholder, filtering }: SearchBarProps) => {
  const [{ value }, updateArgs] = useArgs();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateArgs({ value: e.target.value });
  };

  return (
    <div className='p-4'>
      <HCSearchBar
        value={value}
        prefixType={prefixType}
        placeholder={placeholder}
        filtering={filtering}
        onChange={onChangeHandler}
      />
    </div>
  );
};
