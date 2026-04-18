import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';
import { Camera, Heart, AlertCircle, Settings } from 'lucide-react';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', fontSize: '24px' }}>
      {/* 默认颜色继承父级，可以自己设大小 */}
      <Icon icon={Camera} size={32} /> 
      {/* 应用我们写好的危险色主题 */}
      <Icon icon={Heart} theme="danger" size={32} />
      <Icon icon={AlertCircle} theme="warning" size={32} />
      <Icon icon={Settings} theme="primary" size={32} />
    </div>
  ),
};