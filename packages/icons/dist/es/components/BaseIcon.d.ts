import * as React from 'react';
export interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
interface BaseIconProps extends IconProps {
    component: any;
    children?: React.ReactNode;
}
declare const BaseIcon: (props: BaseIconProps) => JSX.Element;
export default BaseIcon;
