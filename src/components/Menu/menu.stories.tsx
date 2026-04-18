// src/components/Menu/menu.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './menu';
import { MenuItem } from './menuItem';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    defaultIndex: { control: 'text', description: '默认激活的菜单项索引' },
    mode: { control: 'radio', options: ['horizontal', 'vertical'], description: '菜单布局模式' },
    onSelect: { action: 'selected', description: '点击触发的回调' }, // action 可以在 Storybook 底部的 Actions 面板中打印日志
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// 核心技巧：使用 render 属性来自定义如何渲染这个 Story
export const DefaultHorizontal: Story = {
  args: {
    defaultIndex: '0',
    mode: 'horizontal',
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem index="0">首页</MenuItem>
      <MenuItem index="1">产品中心</MenuItem>
      <MenuItem index="2" disabled>关于我们 (禁用)</MenuItem>
      <MenuItem index="3">联系方式</MenuItem>
    </Menu>
  ),
};

export const VerticalMode: Story = {
  args: {
    defaultIndex: '1',
    mode: 'vertical',
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem index="0">个人中心</MenuItem>
      <MenuItem index="1">订单管理</MenuItem>
      <MenuItem index="2">账号设置</MenuItem>
    </Menu>
  ),
};