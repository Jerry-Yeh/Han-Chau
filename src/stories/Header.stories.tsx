import { Meta, StoryObj, StoryFn } from '@storybook/react';
// import { useRef } from '@storybook/store';
import { useRef, useState } from 'react';

import HCHeader, { HeaderProps, HCHeaderRegion, HCHeaderIconButton } from '~/components/Header';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';
import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import Plus from '~/assets/img/heroicons/mini/plus';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';
import HCProgress from '~/components/Progress';
import HCTabs, { ActiveKey } from '~/components/Tabs';

import useHeight from '~/hooks/utils/useHeight';

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

const LongContent = () => (
  <main className='w-full px-4 pb-4 overflow-y-scroll'>
    <h3>Content start</h3>
    <div style={{ height: '800px' }}></div>
    <h3>Content end</h3>
  </main>
);

export const Fixed: StoryFn<typeof HCHeader> = ({ title, toolBar }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);

  return (
    <div>
      <HCHeader
        ref={headerRef}
        title=''
        prefix={<PrefixIcon />}
        suffix={<SuffixTwoIcons />}
        behavior='expanded'
        toolBar={toolBar}
      >
        <HCHeaderRegion behavior='fixed' top={headerHeight} className='bg-primary'>
          <div className='text-heading-m text-primary pl-4 pb-3'>{title}</div>
        </HCHeaderRegion>
      </HCHeader>

      <LongContent />
    </div>
  );
};

export const Expanded: StoryFn<typeof HCHeader> = ({ title, toolBar }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);

  return (
    <div>
      <HCHeader
        ref={headerRef}
        title={title}
        prefix={<PrefixIcon />}
        suffix={<SuffixTwoIcons />}
        behavior='expanded'
        toolBar={toolBar}
      >
        <HCHeaderRegion behavior='expanded' top={headerHeight} className='bg-primary'>
          <div className='text-heading-m text-primary pl-4 pb-3'>{title}</div>
        </HCHeaderRegion>
      </HCHeader>

      <LongContent />
    </div>
  );
};

export const FullyExpanded: StoryFn<typeof HCHeader> = ({ title, toolBar }: HeaderProps) => {
  return (
    <div className='relative flex flex-col'>
      <HCHeader
        title={title}
        prefix={<PrefixIcon />}
        suffix={<SuffixTwoIcons />}
        behavior='fully'
        toolBar={toolBar}
      >
        <HCHeaderRegion behavior='fully' className='bg-primary'>
          <div className='text-heading-m text-primary pl-4 pb-3'>{title}</div>
        </HCHeaderRegion>
      </HCHeader>
      <LongContent />
    </div>
  );
};

export const WorkoutRecord: StoryFn<typeof HCHeader> = ({ toolBar }: HeaderProps) => {
  const title = '開始健身';
  const expandedTitle = '開始紀錄你的訓練！';
  const tabItems = [
    {
      label: '4',
      sublabel: '未完成',
      value: 'INCOMPLETED',
    },
    {
      label: '0',
      sublabel: '完成',
      value: 'COMPLETED',
    },
  ];
  const [activeKey, updateActiveKey] = useState<ActiveKey>(tabItems[0].value);
  const changeTabHandler = (value: ActiveKey) => {
    updateActiveKey(value);
  };
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeight(headerRef);

  return (
    <div className='relative flex flex-col'>
      <HCHeader
        ref={headerRef}
        title={title}
        prefix={<PrefixIcon />}
        suffix={<SuffixTwoIcons />}
        behavior='fully'
        toolBar={toolBar}
      >
        <HCHeaderRegion behavior='fully' className='bg-primary'>
          <div className='text-heading-m text-primary pl-4 pb-3'>{expandedTitle}</div>
        </HCHeaderRegion>
        <HCHeaderRegion behavior='fully' className='bg-primary px-4'>
          <div className='text-body-s text-tertiary mb-4'>國際練胸日· 2023/05/17 15:28</div>
          <HCProgress rateClass='w-1/4' className='mb-2' />
          <div className='text-body-xs'>
            <span className='text-placeholder'>完成度 </span>
            <span className='text-tertiary'></span>
          </div>
        </HCHeaderRegion>
        <HCHeaderRegion behavior='fixed' top={headerHeight} className='bg-primary'>
          <HCTabs items={tabItems} activeKey={activeKey} onChange={changeTabHandler} />
        </HCHeaderRegion>
      </HCHeader>
      <LongContent />
    </div>
  );
};
