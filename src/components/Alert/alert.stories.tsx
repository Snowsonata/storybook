import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';

// 基础配置
const meta = {
  title: 'Components/Alert', // 在左侧菜单显示的层级
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// 故事 1：默认状态
export const Default: Story = {
  args: {
    message: '这是一条默认提示',
  },
};

// 故事 2：不同类型
export const SuccessWithDescription: Story = {
  args: {
    type: 'success',
    message: '成功操作',
    description: '详细的成功描述信息写在这里。',
    closable: true,
  },
};