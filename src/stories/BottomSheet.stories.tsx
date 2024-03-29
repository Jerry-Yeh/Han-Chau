import { Fragment } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useArgs, useEffect } from '@storybook/store';

import HCBottomSheet, { BottomSheetProps } from '~/components/BottomSheet';
import HCButton from '~/components/Button';
import HCInput from '~/components/Input';

export default {
  title: 'Components/BottomSheet',
  component: HCBottomSheet,
  argTypes: {
    children: {
      control: false,
      description: 'Actions in the bottom sheet.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Whether the bottom sheet is visible or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    title: {
      control: 'text',
      description: 'The header title for the bottom sheet.',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'The header description for the bottom sheet.',
      table: {
        type: { summary: 'string' },
      },
    },
    backdrop: {
      control: 'boolean',
      description: 'Whether the bottom sheet has backdrop or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    handle: {
      control: false,
      description: 'Add an icon on the header that can drag to the top.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    keyboard: {
      control: false,
      description: 'Set default height for keyboard showing',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    prefix: {
      control: 'boolean',
      description: 'The prefix previous icon for the header.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    suffix: {
      control: 'boolean',
      description: 'The suffix close icon for the header.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClose: {
      control: false,
      description: 'Specify a function that will close the bottom sheet.',
      table: {
        type: { summary: 'Function' },
      },
    },
    onPrefix: {
      control: false,
      description: 'Specify a function that will be called when a user clicks prefix icon.',
      table: {
        type: { summary: 'Function' },
      },
    },
  },
  args: {
    show: false,
    title: '標題',
    description: '解說',
    backdrop: true,
    handle: false,
    keyboard: false,
    prefix: false,
    suffix: true,
    children: (
      <Fragment>
        <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
        <HCButton color='primary' disabled>
          建立菜單
        </HCButton>
      </Fragment>
    ),
  },
} as Meta<typeof HCBottomSheet>;

type Story = StoryFn<typeof HCBottomSheet>;

export const Basic: Story = ({ backdrop }: BottomSheetProps) => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet show={show} onClose={handleClose} backdrop={backdrop}>
      <div className='px-4 pt-9'>
        <h3 className='text-heading-xs text-secondary mb-2'>歡迎來到 HANCHAU！</h3>
        <h4 className='text-body-xs text-tertiary mb-3'>跟著老師動次動次動</h4>
        <HCButton color='primary' className='mb-4'>
          馬上開始
        </HCButton>
      </div>
    </HCBottomSheet>
  );
};

export const Header: Story = (args: BottomSheetProps) => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet
      show={show}
      title={args.title}
      description={args.description}
      backdrop={args.backdrop}
      prefix={false}
      suffix={false}
      onClose={handleClose}
    >
      <div className='p-4'>
        <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
        <HCButton color='primary' disabled>
          建立菜單
        </HCButton>
      </div>
    </HCBottomSheet>
  );
};

export const HeaderPrefixAndSuffix: Story = (args: BottomSheetProps) => {
  const [{ show, prefix }, updateArgs] = useArgs();

  useEffect(() => {
    updateArgs({ prefix: true });
  }, [updateArgs]);

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet
      show={show}
      title={args.title}
      description={args.description}
      prefix={prefix}
      suffix={args.suffix}
      backdrop={args.backdrop}
      onClose={handleClose}
    >
      <div className='p-4'>
        <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
        <HCButton color='primary' disabled>
          建立菜單
        </HCButton>
      </div>
    </HCBottomSheet>
  );
};

export const Keyboard: Story = (args: BottomSheetProps) => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet
      show={show}
      title={args.title}
      description={args.description}
      backdrop={args.backdrop}
      keyboard
      prefix={args.prefix}
      suffix={args.suffix}
      onClose={handleClose}
    >
      <div className='px-4 pt-4'>
        <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
        <HCButton color='primary' disabled>
          建立菜單
        </HCButton>
      </div>
    </HCBottomSheet>
  );
};

export const Handle: Story = (args: BottomSheetProps) => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet
      show={show}
      title={args.title}
      description={args.description}
      backdrop={args.backdrop}
      handle
      prefix={args.prefix}
      suffix={args.suffix}
      onClose={handleClose}
    >
      <div className='px-4 pt-4'>
        <HCInput placeholder='輸入你的訓練菜單名稱' className='mb-3' />
        <HCButton color='primary' disabled>
          建立菜單
        </HCButton>
      </div>
    </HCBottomSheet>
  );
};

export const Footer: Story = (args: BottomSheetProps) => {
  const [{ show }, updateArgs] = useArgs();

  const handleClose = () => {
    updateArgs({ show: false });
  };

  return (
    <HCBottomSheet
      show={show}
      title={args.title}
      description={args.description}
      backdrop={args.backdrop}
      handle
      prefix={args.prefix}
      suffix={args.suffix}
      footer={<HCButton color='primary'>確認</HCButton>}
      onClose={handleClose}
    >
      <div className='p-4 h-screen bg-secondary flex flex-col justify-between items-center text-heading-xs'>
        <h3>Content start</h3>
        <h3>Content end</h3>
      </div>
    </HCBottomSheet>
  );
};
