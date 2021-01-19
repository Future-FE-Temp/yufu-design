(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RollupUI = {}));
}(this, (function (exports) { 'use strict';

  var Button = function Button(props) {
    var className = props.className,
        children = props.children,
        type = props.type,
        onClick = props.onClick,
        size = props.size;
    var color = '#333333';

    if (type === 'primary') {
      color = '#5352ED';
    } else if (type === 'error') {
      color = '#FF4757';
    }

    var height = 32;

    if (size === 'large') {
      height = 40;
    } else if (size === 'small') {
      height = 24;
    }
    /** 组件底层由原生 button 组件实现 */


    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: className + " button",
      style: {
        borderColor: color,
        color: color,
        height: height
      },
      onClick: onClick
    }, children);
  };

  Button.defaultProps = {
    type: 'primary',
    size: 'default'
  };

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
