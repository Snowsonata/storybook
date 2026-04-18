// src/components/Menu/menuItem.tsx
import React, { useContext } from 'react';
import classNames from 'classnames';
// 引入刚刚在 menu.tsx 中创建的 Context (大喇叭)
import { MenuContext } from './menu';

export interface MenuItemProps {
  /** 菜单项的唯一标识 */
  index: string;
  /** 是否禁用 */
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, children } = props;
  
  // 1. 核心：使用 useContext 收听大喇叭里的数据
  const context = useContext(MenuContext);

  // 2. 动态生成类名：如果大喇叭里播报的 index 等于我自己的 index，我就高亮 (is-active)
  const classes = classNames('v-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index, 
  });

  // 3. 点击自己时，调用大喇叭里的 onSelect 函数，把自己的 index 传给父组件
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;