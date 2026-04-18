// src/components/Menu/menu.tsx
import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import './_style.scss'; // 提前引入样式，防踩坑！

// 1. 定义菜单的模式 (横向 / 纵向)
type MenuMode = 'horizontal' | 'vertical';

// 2. 定义父组件 Menu 的 Props
export interface MenuProps {
  /** 默认高亮的菜单项索引 */
  defaultIndex?: string;
  className?: string;
  /** 菜单模式，默认横向 */
  mode?: MenuMode;
  /** 点击菜单项触发的回调 */
  onSelect?: (selectedIndex: string) => void;
  children?: React.ReactNode;
}

// 3. 核心：定义“大喇叭” (Context) 里要装什么数据
interface IMenuContext {
  index: string; // 当前高亮的索引
  onSelect?: (selectedIndex: string) => void; // 用于修改索引的函数
}

// 4. 创建 Context (大喇叭)，并给一个初始值
export const MenuContext = createContext<IMenuContext>({ index: '0' });

// src/components/Menu/menu.tsx (接着上面的代码写)

export const Menu: React.FC<MenuProps> = (props) => {
  const { 
    className, 
    mode = 'horizontal', 
    children, 
    defaultIndex = '0', 
    onSelect 
  } = props;
  
  // 维护当前被激活的菜单项的 index
  const [currentActive, setActive] = useState(defaultIndex);

  // 动态生成类名 (控制横向还是纵向)
  const classes = classNames('v-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  // 处理点击事件的函数：更新内部状态，并触发外部传入的回调
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  // 5. 将要广播的数据打包
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
  };

  return (
    <ul className={classes} data-testid="test-menu">
      {/* 6. 使用 Provider 包裹 children，把打包好的数据传下去 */}
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;