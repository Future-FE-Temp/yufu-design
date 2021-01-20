'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var BaseIcon = require('../components/BaseIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);

const PiechartSvg = () => /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("style", {
  type: "text/css"
})), /*#__PURE__*/React.createElement("path", {
  d: "M448 65.856a490.688 490.688 0 0 1 531.52 531.52H915.2A426.752 426.752 0 0 1 64 554.624c0-221.248 168.384-403.2 384-424.576V65.792z m0 531.456V216A341.376 341.376 0 0 0 490.688 896c171.968 0 317.12-128 338.688-298.688H448zM893.76 512a405.44 405.44 0 0 0-360.448-360.448V512h360.448z",
  "p-id": "12452"
}));

const Piechart = props => /*#__PURE__*/React.createElement(BaseIcon['default'], _extends__default['default']({
  component: PiechartSvg
}, props));

exports.default = Piechart;
