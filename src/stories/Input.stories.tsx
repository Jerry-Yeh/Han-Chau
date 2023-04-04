import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { FocusEvent, ChangeEvent, useState } from 'react';

import HCInput from '~/components/Input';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';
import MagnifyingGlass from '~/assets/img/heroicons/mini/magnifying-glass';
import XMark from '~/assets/img/heroicons/mini/x-mark';
import AdjustmentsHorizontal from '~/assets/img/heroicons/mini/adjustments-horizontal';

export default {
  title: 'Components/Input',
  component: HCInput,
  decorators: [AntdDecorator],
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    label: {
      control: 'text',
      description: 'A caption for input field.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'A short hint that describes the expected value of an input field.',
      table: {
        type: { summary: 'string' },
      },
    },
    prefix: {
      control: false,
      description: 'The prefix icon or text for the input field.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    suffix: {
      control: false,
      description: 'The suffix icon or text for the input field.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    type: {
      control: 'text',
      description: 'The type of input field. See MDN for more.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} as Meta<typeof HCInput>;

type Story = StoryObj<typeof HCInput>;

export const Basic: Story = {
  args: {
    label: 'caption',
    disabled: false,
  },
};

export const SearchBar: StoryFn<typeof HCInput> = () => {
  const [focus, setFocus] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onFocusHandler = () => setFocus(true);
  const onBlurHandler = () => setFocus(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const onClearHandler = () => setSearchText('');

  return (
    <HCInput
      value={searchText}
      prefix={<MagnifyingGlass className='icon-secondary' />}
      suffix={
        focus ? (
          <button onClick={onClearHandler}>
            <XMark className={`${searchText ? 'icon-tertiary' : 'icon-disabled'}`} />
          </button>
        ) : (
          <AdjustmentsHorizontal className='icon-secondary' />
        )
      }
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
    />
  );
};
