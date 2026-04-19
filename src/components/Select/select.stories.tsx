import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// 模拟一些数据源
const defaultOptions = [
  { label: '塞尔达传说', value: 'zelda' },
  { label: '超级马力欧', value: 'mario' },
  { label: '宝可梦 (售罄)', value: 'pokemon', disabled: true },
  { label: '异度神剑', value: 'xenoblade' },
];

export const Default: Story = {
  args: {
    placeholder: '请选择你喜欢的游戏',
    options: defaultOptions,
    onChange: (val, opt) => console.log('当前选中:', val, opt)
  },
};

export const Multiple: Story = {
  args: {
    placeholder: '请选择多款游戏',
    multiple: true, // 开启多选！
    options: defaultOptions,
    onChange: (val, opt) => console.log('多选当前选中:', val, opt)
  },
};