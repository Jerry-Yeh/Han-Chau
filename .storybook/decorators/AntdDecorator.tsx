import React from 'react';
import { ConfigProvider } from 'antd';
import { StoryFn } from '@storybook/react';

const AntdDecorator = (Story: StoryFn) => {
  return (
    <ConfigProvider
      autoInsertSpaceInButton={false}
      theme={{
        token: {
          fontFamily: 'Inter, Noto Sans TC',
        },
        hashed: false,
      }}
    >
      <Story />
    </ConfigProvider>
  );
};

export default AntdDecorator;
