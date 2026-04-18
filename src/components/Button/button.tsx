// src/components/Button/button.tsx
import React from 'react';
import classNames from 'classnames';
import './_style.scss';

// 1. 定义字符串联合类型
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

// 2. 定义自定义的 Props
interface BaseButtonProps {
  className?: string;
  /** 设置按钮失效状态 */
  disabled?: boolean;
  /** 设置按钮尺寸 */
  size?: ButtonSize;
  /** 设置按钮类型 */
  btnType?: ButtonType;
  children: React.ReactNode; // 按钮里的文字或图标
  /** 点击跳转的地址，仅当 btnType="link" 时有效 */
  href?: string;
}

// 3. 重点：继承原生属性 (魔法开始的地方)
// 我们不仅需要自定义属性，还需要原生 button 的所有属性 (如 onClick, onMouseEnter, type 等)
// React 提供了 React.ButtonHTMLAttributes<HTMLElement> 来包含这些。
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;

// 同样，如果是链接，我们需要继承原生 a 标签的属性 (如 target, download 等)
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

// 4. 最终的 Props 类型：利用 Partial 将所有属性变为可选，并组合原生 button 和 a 的属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;


// src/components/Button/button.tsx (续)

export const Button: React.FC<ButtonProps> = (props) => {
  // 5. 解构赋值，取出我们关心的属性，剩下的全部塞进 restProps 变量里
  const {
    btnType = 'default', // 默认是 default 类型
    className,
    disabled = false,    // 默认不禁用
    size = 'sm',          // 默认小尺寸
    children,
    href,
    ...restProps         // 语法解析：展开运算符。代表 onClick, id, style 等所有原生属性
  } = props;

  // 6. 动态生成 CSS 类名 (BEM 规范)
  // 结果示例: "v-btn v-btn-primary v-btn-lg custom-class"
  const classes = classNames('v-btn', className, {
    [`v-btn-${btnType}`]: btnType, // 根据类型加类名
    [`v-btn-${size}`]: size,       // 根据尺寸加类名
    // 注意：如果是 link 类型的按钮，原生 a 标签没有 disabled 属性，
    // 我们需要手动加上一个 'disabled' 类名，在 CSS 里模拟禁用效果。
    'disabled': (btnType === 'link') && disabled 
  });

  // 7. 核心分支逻辑：判断渲染哪种 HTML 标签
  if (btnType === 'link' && href ) {
    // 如果是 link 类型且有链接地址，渲染 a 标签
    return (
      <a
        className={classes}
        href={href}
        // 既然是 link 模拟的禁用，如果 disabled 为 true，我们就把 restProps 里的 onClick 给干掉，防止还能点击
        {...(disabled ? {} : restProps)} 
      >
        {children}
      </a>
    )
  } else {
    // 其他情况 (默认)，渲染 button 标签
    return (
      <button
        className={classes}
        disabled={disabled} // 原生 button 支持 disabled 属性
        {...restProps}      // 语法解析：将 onClick, type 等原生属性一股脑透传给底层的 <button>
      >
        {children}
      </button>
    )
  }
}

export default Button;