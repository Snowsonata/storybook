import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Input } from '../Input/input';
import './_style.scss';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  multiple?: boolean;
  options: SelectOption[];
  value?: string | string[];
  onChange?: (selectedValue: string | string[], selectedOption: SelectOption | SelectOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = (props) => {
  
  const { placeholder, disabled, options, multiple, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

 const handleOptionClick = (option: SelectOption) => {
    if (option.disabled) return;

    let updatedValues: string[];

    if (multiple) {
      const isSelected = selectedValues.includes(option.value);
      if (isSelected) {
        updatedValues = selectedValues.filter(v => v !== option.value);
      } else {
        updatedValues = [...selectedValues, option.value];
      }
      setSelectedValues(updatedValues);
    } else {
      updatedValues = [option.value];
      setSelectedValues(updatedValues);
      setIsOpen(false); 
    }

   
    if (onChange) {
      // 找出当前选中的所有完整 Option 对象
      const currentSelectedOptions = options.filter(opt => updatedValues.includes(opt.value));
      
      // 根据单/多选模式，灵活返回字符串或数组
      if (multiple) {
        onChange(updatedValues, currentSelectedOptions);
      } else {
        onChange(updatedValues[0], currentSelectedOptions[0]);
      }
    }
  };
  
  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  const handleInputClick = () => {
    if (disabled) return;
    setIsOpen(prev => !prev);
  };

  const displayValue = options
    .filter(opt => selectedValues.includes(opt.value))
    .map(opt => opt.label)
    .join(', ');

  return (
    <div className="v-select-component" ref={containerRef}>
      <div className="v-select-input" onClick={() => { if(!disabled) setIsOpen(prev => !prev) }}>
        <Input
          readOnly
          placeholder={placeholder}
          disabled={disabled}
          // 把上面算好的文字显示在这里！完美解决 value/label 割裂问题
          value={displayValue} 
        />
      </div>

      {isOpen && (
        <ul className="v-select-dropdown">
          {options.map((item, index) => {
            // 我们还可以算出一个变量，判断当前项有没有被选中，用来给它加高亮样式！
            const isItemSelected = selectedValues.includes(item.value);
            return (
              <li
                key={index}
                className={`v-select-item ${item.disabled ? 'is-disabled' : ''} ${isItemSelected ? 'is-selected' : ''}`}
                onClick={() => handleOptionClick(item)}
              >
                {/* 增加一个极其简单的高亮标识 (如果是多选且被选中，就打个勾) */}
                {item.label} {multiple && isItemSelected && ' ✓'}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};