import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from './upload';

const meta = {
  title: 'Components/Upload',
  component: Upload,
  tags: ['autodocs'],
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 这是一个公开的假接口，用来测试发送请求的
    action: 'https://jsonplaceholder.typicode.com/posts',
    onSuccess: (data, file) => {
      console.log('Storybook 接收到成功啦!', data);
    },
    onError: (err, file) => {
      console.log('Storybook 接收到失败啦!', err);
    }
  },
};