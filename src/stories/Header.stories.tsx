import { Meta, StoryObj } from '@storybook/react';

import HCHeader from '~/components/Header';
import HCHeaderIconButton from '~/components/Header/HeaderIconButton';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';
import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import Plus from '~/assets/img/heroicons/mini/plus';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';

export default {
  title: 'Components/Header',
  component: HCHeader,
  decorators: [AntdDecorator],
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the header.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    prefix: {
      control: false,
      description: 'Handle prefix action of header.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    suffix: {
      control: false,
      description: 'Handle suffix action of header.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Set the size of header.',
      defaultValue: { summary: 's' },
      table: {
        type: { summary: 'string' },
      },
    },
    expand: {
      control: 'boolean',
      description: 'Whether the header is expanded or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    title: '標題',
    expand: false,
    size: 's',
  },
} as Meta<typeof HCHeader>;

type Story = StoryObj<typeof HCHeader>;

export const Basic: Story = {};

export const LeftIcon: Story = {
  args: {
    prefix: (
      <HCHeaderIconButton>
        <ArrowLeft />
      </HCHeaderIconButton>
    ),
  },
};

export const LeftIconAndSingleIcon: Story = {
  args: {
    prefix: (
      <HCHeaderIconButton>
        <ArrowLeft />
      </HCHeaderIconButton>
    ),
    suffix: (
      <div className='flex'>
        <HCHeaderIconButton>
          <EllipsisVertical />
        </HCHeaderIconButton>
      </div>
    ),
  },
};

export const LeftIconAndTwoIcons: Story = {
  args: {
    prefix: (
      <HCHeaderIconButton>
        <ArrowLeft />
      </HCHeaderIconButton>
    ),
    suffix: (
      <div className='flex'>
        <HCHeaderIconButton>
          <Plus />
        </HCHeaderIconButton>
        <HCHeaderIconButton>
          <EllipsisVertical />
        </HCHeaderIconButton>
      </div>
    ),
  },
};

export const LeftIconAndAction: Story = {
  args: {
    prefix: (
      <HCHeaderIconButton>
        <ArrowLeft />
      </HCHeaderIconButton>
    ),
    suffix: <HCHeaderIconButton>action</HCHeaderIconButton>,
  },
};

export const ActionAndAction: Story = {
  args: {
    prefix: <HCHeaderIconButton>action</HCHeaderIconButton>,
    suffix: <HCHeaderIconButton>action</HCHeaderIconButton>,
  },
};
