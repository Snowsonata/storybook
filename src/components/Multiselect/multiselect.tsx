// src/components/Multiselect/multiselect.tsx
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './_style.scss';

// 1. 定义每一个选项的数据结构
export interface SelectOption {
  label: string; // 显示给用户看的文字 (如 "苹果")
  value: string; // 传给后台的真实值 (如 "apple")
}

// 2. 定义组件的 Props
export interface MultiselectProps {
  /** 供用户选择的选项数组 */
  options: SelectOption[];
  /** 没选东西时的提示文字 */
  placeholder?: string;
  /** 当选中项发生改变时触发的回调，回传所有选中项的 value 数组 */
  onChange?: (selectedValues: string[]) => void;
  className?: string;
}
// src/components/Multiselect/multiselect.tsx (续)

export const Multiselect: React.FC<MultiselectProps> = (props) => {
  const { options, placeholder = '请选择...', onChange, className } = props;

  // 状态 1：下拉面板是否展开
  const [isOpen, setIsOpen] = useState(false);
  // 状态 2：当前选中的数据数组
  const [selected, setSelected] = useState<SelectOption[]>([]);
  
  // Ref：获取整个组件最外层 div 的真实 DOM 节点 (用于判断点击是否发生在组件外部)
  const containerRef = useRef<HTMLDivElement>(null);

  // 魔法 1：处理“点击外部关闭下拉框”
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 如果下拉框开着，且鼠标点击的目标 (event.target) 不在 containerRef 这个 div 内部
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false); // 关闭下拉框
      }
    };
    // 在整个网页文档上监听点击事件
    document.addEventListener('click', handleClickOutside);
    // 组件销毁时，一定要清理监听器，防止内存泄漏！
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // 魔法 2：切换选项的选中状态 (核心业务逻辑)
  const toggleOption = (option: SelectOption) => {
    let newSelected;
    // 判断当前点击的这项目前是否已经被选中了
    const isSelected = selected.some(item => item.value === option.value);
    
    if (isSelected) {
      // 如果已经选中了，就把它从数组里踢出去 (取消选中)
      newSelected = selected.filter(item => item.value !== option.value);
    } else {
      // 如果没选中，就把他塞进数组尾部 (添加选中)
      newSelected = [...selected, option];
    }
    
    setSelected(newSelected); // 更新内部状态
    if (onChange) onChange(newSelected.map(item => item.value)); // 通知外部父组件
  };

  const classes = classNames('v-multiselect', className);

  return (
    // 把 ref 绑在最外层，它代表了整个组件的“领地”
    <div className={classes} ref={containerRef}>
      
      {/* 区域 1：触发器 (模拟输入框) */}
      <div 
        className={classNames('v-multiselect-trigger', { 'is-open': isOpen })} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.length === 0 ? (
          <span className="v-multiselect-placeholder">{placeholder}</span>
        ) : (
          <div className="v-multiselect-tags">
            {selected.map(item => (
              <span key={item.value} className="v-tag">
                {item.label}
                <span 
                  className="v-tag-close" 
                  onClick={(e) => {
                    // 魔法 3：阻止冒泡！
                    // 如果不加这行，点击 "X" 不仅会删除 Tag，点击事件还会继续向上传递给触发器，导致下拉框被意外打开/关闭！
                    e.stopPropagation(); 
                    toggleOption(item);
                  }}
                >
                  &times; {/* 乘号，看起来像 X */}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 区域 2：下拉列表 */}
      {isOpen && (
        <ul className="v-multiselect-dropdown">
          {options.map(option => {
            // 计算当前渲染的这个 <li> 是否处于选中状态
            const isSelected = selected.some(item => item.value === option.value);
            return (
              <li 
                key={option.value}
                className={classNames('v-multiselect-option', { 'is-selected': isSelected })}
                onClick={() => toggleOption(option)}
              >
                {option.label}
                {/* 如果选中了，在右边画一个对勾 */}
                {isSelected && <span className="check-icon">✓</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Multiselect;