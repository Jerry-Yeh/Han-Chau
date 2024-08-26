import { Meta, StoryFn } from '@storybook/react';

import HCInputLongFullspace from '~/components/InputLongFullspace';
import AntdDecorator from '../../.storybook/decorators/AntdDecorator';

export default {
    title: 'Components/InputLongFullspace',
    component: HCInputLongFullspace,
    decorators: [AntdDecorator],
    parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
    argTypes: {
        value: {
            control: 'text',
            description: 'The input content value.',
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
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        onChange: {
            control: false,
            description: 'Callback when user input.'
        }
    },
} as Meta<typeof HCInputLongFullspace>;

type Story = StoryFn<typeof HCInputLongFullspace>;

export const Default: Story = () => {
    return <div className='p-4'>
        <HCInputLongFullspace label='標題' placeholder='標籤' prompt='小提示' />
    </div>
};

export const Disabled: Story = () => {
    return <div className='p-4'>
        <HCInputLongFullspace label='標題' placeholder='標籤' prompt='小提示' disabled />
    </div>
};