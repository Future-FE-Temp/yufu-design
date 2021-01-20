import _extends from '@babel/runtime/helpers/esm/extends';
import { createElement } from 'react';
import BaseIcon from '../components/BaseIcon.js';

const LightbulbSvg = () => /*#__PURE__*/createElement("svg", null, /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("style", {
  type: "text/css"
})), /*#__PURE__*/createElement("path", {
  d: "M425.536 768h43.776V554.688h85.376V768h43.776c5.632-51.264 31.808-93.632 74.24-139.84 4.864-5.184 35.52-36.992 39.168-41.472a256 256 0 1 0-399.808-0.128c3.648 4.608 34.432 36.416 39.168 41.6 42.496 46.208 68.672 88.576 74.24 139.84z m1.152 85.312V896h170.624v-42.688H426.688zM245.504 640a341.312 341.312 0 1 1 532.928 0.064c-26.496 32.96-95.744 85.248-95.744 149.248V896c0 47.104-38.208 85.312-85.376 85.312H426.688A85.312 85.312 0 0 1 341.312 896v-106.688c0-64-69.312-116.288-95.808-149.312z",
  "p-id": "12327"
}));

const Lightbulb = props => /*#__PURE__*/createElement(BaseIcon, _extends({
  component: LightbulbSvg
}, props));

export default Lightbulb;
