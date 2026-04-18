import type { Meta, StoryObj } from '@storybook/react';
// 注意这里要把 TabPane 也引进来
import { Tabs, TabPane } from './tabs'; 

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// 因为包含子节点结构，我们依然用 render 函数来展示
export const Default: Story = {
  render: () => (
    <Tabs defaultIndex={0}>
      <TabPane label="用户管理">这是用户管理面板的内容，可以放表格...</TabPane>
      <TabPane label="配置中心">这是配置中心的设置表单...</TabPane>
      <TabPane label="系统监控">服务器 CPU: 45%, 内存: 60%</TabPane>
    </Tabs>
  ),
};