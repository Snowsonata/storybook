// src/components/Multiselect/multiselect.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Multiselect } from './multiselect';

const meta = {
  title: 'Components/Multiselect',
  component: Multiselect,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'selected_values_changed' }, // 打印 onChange 回传的数据
  },
} satisfies Meta<typeof Multiselect>;

export default meta;
type Story = StoryObj<typeof meta>;

// 准备点假数据
const defaultOptions = [
  { label: '🍎 苹果 (Apple)', value: 'apple' },
  { label: '🍌 香蕉 (Banana)', value: 'banana' },
  { label: '🍒 樱桃 (Cherry)', value: 'cherry' },
  { label: '🍇 葡萄 (Grape)', value: 'grape' },
  { label: '🍉 西瓜 (Watermelon)', value: 'watermelon' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: '请选择你喜欢的水果...',
  },
};