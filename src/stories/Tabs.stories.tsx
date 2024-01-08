import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import HCTabs, { TabsItem, ActiveKey } from '~/components/Tabs';

export default {
  title: 'Components/Tabs',
  component: HCTabs,
  argTypes: {
    activeKey: {
      control: 'text',
      description: "Current tabs's key.",
      table: {
        type: { summary: 'ActiveKey' },
      },
    },
    items: {
      description: 'Configure tabs content.',
      table: {
        type: { summary: 'TabsItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    onChange: {
      control: false,
      description: 'Set the handler to handle click event.',
      table: {
        type: { summary: '(value: ActiveKey) => void' },
      },
    },
  },
} as Meta<typeof HCTabs>;

type Story = StoryFn<typeof HCTabs>;

export const Basic: Story = () => {
  const items: TabsItem[] = [
    {
      label: '0',
      sublabel: '標籤',
      value: 0,
    },
    {
      label: '0',
      sublabel: '標籤',
      value: 1,
    },
  ];
  const [activeKey, updateActiveKey] = useState<ActiveKey>(items[0].value);

  const handleChange = (value: ActiveKey) => {
    updateActiveKey(value);
  };

  return <HCTabs activeKey={activeKey} items={items} onChange={handleChange} />;
};
