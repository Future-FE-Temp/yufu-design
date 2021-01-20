export interface IconProps {
  /** 元素className */
  className?: string;
  /** 行内样式 */
  style?: React.CSSProperties;
  /** 元素点击事件 */
  onClick?: () => void;
}

interface BaseIconProps extends IconProps {
  component: any;
  children?: React.ReactNode;
}

const BaseIcon = (props: BaseIconProps) => {
  const { className, style, onClick, component: Component = 'svg', children } = props;
  return (
    <span aria-hidden="true" role="img" className={className} style={style} onClick={onClick}>
      <Component width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        {children}
      </Component>
    </span>
  );
};

export default BaseIcon;
