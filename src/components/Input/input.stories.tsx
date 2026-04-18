import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '请输入内容...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '禁止输入',
    disabled: true,
  },
};

export const WithPrependAndAppend: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Input placeholder="mysite" prepend="https://" append=".com" />
    </div>
  ),
};