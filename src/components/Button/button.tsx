import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes }  from 'react'
/* 引入classNames插件，'npm install classNames --save''npm install @types/classNames --save'
*  用来控制className的变量
*/
import classNames from 'classnames'

// 导出按钮尺寸设置，是枚举类型
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
// 导出按钮类型设置，是枚举类型
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

// 设置按钮基础属性的接口
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
    children: React.ReactNode;
}
// 除了我们自己定义的button中的属性外，还要兼顾button原生的属性，如：onClick。
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
// 同样，link按钮也一样，需要兼顾原生的属性。
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// Partial使联合类型中的属性变的可传可不传，如autoFocus?: boolean;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

// 设置导出的按钮
const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        href,
        children,
        ...restProps
    } = props
    // btn,btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    // 判断是否为Link按钮
    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}
// 按钮的默认样式
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button