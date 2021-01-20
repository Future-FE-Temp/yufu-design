/// <reference types="react" />
import './Button.less';
export interface ButtonProps {
    /** 允许覆盖样式 */
    className?: string;
    /** 可以传入 children */
    children?: React.ReactNode;
    /** 组件类型 */
    type?: 'primary' | 'error' | 'default';
    /** 组件大小 */
    size?: 'large' | 'small' | 'default';
    /**
     * 单击事件
     */
    onClick?: () => void;
}
declare const Button: {
    (props: ButtonProps): JSX.Element;
    defaultProps: {
        type: string;
        size: string;
    };
};
export default Button;
