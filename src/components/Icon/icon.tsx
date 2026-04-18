import type{ LucideIcon } from "lucide-react";
import './_style.scss';
import classNames from 'classnames';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement>{
    icon: LucideIcon;
    theme?:'primary' | 'danger' | 'warning' | 'success';
}

export const Icon: React.FC<IconProps> = (props) =>{
    const{icon:IconComponent,theme,className,...restProps}=props;
    const classes=classNames('v-icon',className,{
        [`icon-${theme}`]: theme
    });

    return (
        <span className={classes}{...restProps}>
            <IconComponent />
        </span>
    )
}