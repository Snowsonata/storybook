// src/components/Button/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// 1. Meta 配置：定义组件的全局信息和控制面板
const meta = {
  title: 'Components/Button', // 在左侧菜单显示的路径
  component: Button,
  tags: ['autodocs'], // 自动生成 Docs 文档页
  
  // 重点：配置控制面板 (Controls)
  argTypes: {
    btnType: {
      control: 'select', // 告诉 Storybook 渲染成一个下拉选择框
      options: ['primary', 'default', 'danger', 'link'],
      description: '设置按钮的视觉类型', // 文档里的说明文字
    },
    size: {
      control: 'radio', // 渲染成单选按钮
      options: ['lg', 'sm', undefined], // undefined 代表不传，即默认尺寸
      description: '设置按钮尺寸',
    },
    disabled: {
      control: 'boolean', // 渲染成开关
      description: '是否禁用按钮',
    },
    href: {
      control: 'text',
      description: '点击跳转的地址 (仅 btnType="link" 时生效)',
    },
    children: {
      control: 'text',
      description: '按钮里的文字',
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 2. 编写各种状态的故事 (Stories)

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    btnType: 'primary',
    children: 'Primary Button',
  },
};

export const Danger: Story = {
  args: {
    btnType: 'danger',
    children: 'Danger Button',
  },
};

export const Link: Story = {
  args: {
    btnType: 'link',
    href: 'https://google.com',
    children: 'Link Button',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    btnType: 'primary',
    children: 'Large Primary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};