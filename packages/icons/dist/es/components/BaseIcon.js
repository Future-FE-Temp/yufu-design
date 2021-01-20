import { createElement } from 'react';

const BaseIcon = props => {
  const {
    className,
    style,
    onClick,
    component: Component = 'svg',
    children
  } = props;
  return /*#__PURE__*/createElement("span", {
    role: "presentation",
    className: className,
    style: style,
    onClick: onClick
  }, /*#__PURE__*/createElement(Component, {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }, children));
};

export default BaseIcon;
