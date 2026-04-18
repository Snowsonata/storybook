import React,{ InputHTMLAttributes } from 'react';
import './_style.scss';

type NativeInputProps =Omit<InputHTMLAttributes<HTMLElement>, 'size'>;

export interface InputProps extends NativeInputProps{
    size?:'lg' | 'sm';
    prepend?:string;
    append?:string;
}

export const Input: React.FC<InputProps> = (props) =>{
    const { size, prepend, append, ...restProps}=props;

    return (
        <div className='v-input-wrapper'>
            {prepend && <span className="v-input-group-prepend">{prepend}</span>}
            <input className="v-input-inner" {...restProps} />
            {append && <span className="v-input-group-append">{append}</span>}
        </div>
    )
}