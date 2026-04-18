// src/components/Alert/alert.tsx
import React, { useState } from 'react';
import classNames from 'classnames';
import './_style.scss';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  /** 警告提示内容 (主标题) */
  message: string;
  /** 警告提示的辅助性文字介绍 (可选) */
  description?: string; // 语法解析：属性名后的 ? 表示这个属性是可选的 (非必填)
  /** 指定警告提示的样式，有四种选择 (可选，默认 info) */
  type?: AlertType;
  /** 默认不显示关闭按钮 (可选) */
  closable?: boolean;
  /** 关闭时触发的回调函数 (可选) */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void; // 语法解析：定义一个函数类型，接收鼠标点击事件作为参数，无返回值 (void)
  /** 自定义最外层类名 (组件库标配，方便用户覆盖样式) */
  className?: string;
}

// 语法解析：React.FC 是 Functional Component 的缩写，泛型 <AlertProps> 告诉 React 这个组件接收什么属性
export const Alert: React.FC<AlertProps> = (props) => {
  // 3. 解构赋值，并赋予默认值。如果用户没传 type，默认就是 'info'
  const {
    message,
    description,
    type = 'info',
    closable = true,
    onClose,
    className
  } = props;

  // 4. 定义内部状态：控制 Alert 是否可见
  // 语法解析：useState(false) 表示初始值为 false (即没有被关闭，是可见的)
  // 为什么不用 CSS 的 display: none？因为使用状态控制，在组件被关闭时，可以直接将其从 React 的虚拟 DOM 树中卸载，节省性能。
  const [closed, setClosed] = useState(false);

  // 5. 动态生成 CSS 类名 (这就是 classnames 模块的威力)
  // 如果 type 是 'success'，且用户传了 className='my-alert'，且有 description，
  // 最终的 class 会变成: "v-alert v-alert-success v-alert-with-desc my-alert"
  const classes = classNames('v-alert', className, {
    [`v-alert-${type}`]: type, // 动态键名：根据 type 变量拼接类名
    'v-alert-with-desc': description, // 如果 description 存在，则添加这个类名 (方便在 SCSS 中调整整体 padding)
  });

  // 6. 处理关闭点击事件
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true); // 将内部状态改为 true，触发组件重新渲染
    if (onClose) {
      onClose(e); // 如果用户传入了 onClose 回调，则调用它，并将事件对象传回
    }
  };

  // 7. 条件渲染：如果 closed 状态为 true，直接返回 null，这意味着该组件在 DOM 结构中消失了
  if (closed) {
    return null;
  }

  // 8. 返回最终的 JSX 结构
  return (
    <div className={classes} data-testid="test-alert">
      <div className="v-alert-content">
        <span className="v-alert-message">{message}</span>
        {/* 语法解析：逻辑与 (&&) 渲染。如果 description 有值，才会渲染 <p> 标签 */}
        {description && <p className="v-alert-description">{description}</p>}
      </div>
      
      {/* 逻辑与渲染：如果 closable 为 true，渲染关闭按钮 */}
      {closable && (
        <button type="button" className="v-alert-close-icon" onClick={handleClose}>
          X
        </button>
      )}
    </div>
  );
};

export default Alert;