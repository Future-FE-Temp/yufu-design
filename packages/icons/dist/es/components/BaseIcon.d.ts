/// <reference types="react" />
export interface IconProps {
    /** 元素className */
    className?: string;
    /** 行内样式 */
    style?: React.CSSProperties;
    /** 元素点击事件 */
    onClick?: () => void;
}
interface BaseIconProps extends IconProps {
    component: React.ElementType;
    children?: React.ReactNode;
}
declare const BaseIcon: (props: BaseIconProps) => JSX.Element;
export default BaseIcon;
