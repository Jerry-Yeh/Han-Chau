import { Meta, StoryObj, StoryFn } from '@storybook/react';

import HCHeader, { HeaderProps, HCHeaderRegion, HCHeaderIconButton } from '~/components/Header';
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
    behavior: {
      control: 'select',
      options: ['fixed', 'expanded', 'fully'],
      description: 'Scrolling behaviour of the header title.',
      table: {
        type: { summary: 'fixed | expanded | fully' },
        defaultValue: { summary: 'fixed' },
      },
    },
    toolBar: {
      control: 'boolean',
      description: 'Whether the header tool bar exists or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    title: '標題',
    size: 's',
    toolBar: true,
  },
} as Meta<typeof HCHeader>;

type Story = StoryObj<typeof HCHeader>;

export const Basic: Story = {};

const PrefixIcon = () => (
  <HCHeaderIconButton>
    <ArrowLeft />
  </HCHeaderIconButton>
);

const SuffixTwoIcons = () => (
  <div className='flex'>
    <HCHeaderIconButton>
      <Plus />
    </HCHeaderIconButton>
    <HCHeaderIconButton>
      <EllipsisVertical />
    </HCHeaderIconButton>
  </div>
);

const LongContent = () => (
  <div
    className='w-full flex flex-col justify-between p-4'
    style={{
      height: '1000px',
    }}
  >
    <h3>Content start</h3>
    <h3>Content end</h3>
  </div>
);

export const LeftIcon: Story = {
  args: {
    prefix: <PrefixIcon />,
  },
};

export const LeftIconAndSingleIcon: Story = {
  args: {
    prefix: <PrefixIcon />,
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
    prefix: <PrefixIcon />,
    suffix: <SuffixTwoIcons />,
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

export const Expanded: StoryFn<typeof HCHeader> = ({ title, toolBar }: HeaderProps) => {
  return (
    <div>
      <HCHeader
        title={title}
        prefix={<PrefixIcon />}
        suffix={<SuffixTwoIcons />}
        behavior='expanded'
        toolBar={toolBar}
      >
        <HCHeaderRegion region='toolBar' behavior='expanded'>
          <div className='text-heading-m text-primary pl-4 pb-3'>{title}</div>
        </HCHeaderRegion>
      </HCHeader>
      <LongContent />
    </div>
  );
};

export const Fully: StoryFn<typeof HCHeader> = ({ title, toolBar }: HeaderProps) => {
  return (
    <div className='relative flex flex-col'>
      <HCHeader
        title={title}
        prefix={<PrefixIcon />}
        suffix={<SuffixTwoIcons />}
        behavior='fully'
        toolBar={toolBar}
      >
        <HCHeaderRegion region='toolBar' behavior='fully'>
          <div className='text-heading-m text-primary pl-4 pb-3'>{title}</div>
        </HCHeaderRegion>
      </HCHeader>
      <LongContent />
    </div>
  );
};
