const baseStyle = {
  display: 'inline-block',
  lineHeight: 0
};

const BaseIcon = props => {
  const {
    className,
    style,
    onClick,
    component: Component = 'svg',
    children
  } = props;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    role: "img",
    className: className,
    style: { ...baseStyle,
      ...style
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Component, {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }, children));
};

export default BaseIcon;
