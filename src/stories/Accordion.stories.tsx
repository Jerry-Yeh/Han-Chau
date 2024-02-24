import { Meta, StoryFn } from '@storybook/react';
import { MouseEvent } from 'react';

import HCAccordion, { AccordionProps } from '~/components/Accordion';

export default {
  title: 'Components/Accordion',
  component: HCAccordion,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label of the panel.',
      defaultValue: { summary: 'Button' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    children: {
      control: 'text',
      description: 'Content of collapse item.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
    extra: {
      control: 'text',
      description: 'The extra element in the corner.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    label: '標題',
    children: '我是內容',
  },
} as Meta<typeof HCAccordion>;

type Story = StoryFn<typeof HCAccordion>;

export const Basic: Story = (args: AccordionProps) => {
  return <HCAccordion label={args.label}>{args.children}</HCAccordion>;
};

export const Extra: Story = (args: AccordionProps) => {
  const onClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <HCAccordion
      label={args.label}
      extra={
        <button onClick={onClick} className='text-highlight underline'>
          查看紀錄
        </button>
      }
    >
      {args.children}
    </HCAccordion>
  );
};

export const Multiple: Story = (args: AccordionProps) => {
  return (
    <div>
      <HCAccordion label={args.label}>{args.children}</HCAccordion>
      <HCAccordion label={args.label}>{args.children}</HCAccordion>
    </div>
  );
};
