(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{c4d3:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return i})),o.d(e,"default",(function(){return d}));var n=o("IKa1"),a=o("ITlK"),r=o("r0ML"),c=o("V0Ug"),u=o("sN0p"),m=o("EeHy"),s=o("OQLO"),i=(o("ePqw"),o("xH0s"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/core/FuncComMemo.mdx"}});var p={_frontmatter:i},b=u.a;function d(t){var e,o,d=t.components,l=Object(a.a)(t,["components"]);return Object(c.b)(b,Object(n.a)({},p,l,{components:d,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"function-component-with-reactmemo"},"Function Component With React.memo"),Object(c.b)("h2",{id:"组件-props"},"组件 Props"),Object(c.b)(m.d,{of:s.a,mdxType:"Props"}),Object(c.b)("h2",{id:"基本使用"},"基本使用"),Object(c.b)(m.c,{__position:1,__code:'<FuncComMemo>Open</FuncComMemo>\n<FuncComMemo type="error">Open</FuncComMemo>\n<FuncComMemo.NoteButton />',__scope:(e={props:l,DefaultLayout:u.a,Playground:m.c,Props:m.d,FuncComMemo:s.a},e.DefaultLayout=u.a,e._frontmatter=i,e),mdxType:"Playground"},Object(c.b)(s.a,{mdxType:"FuncComMemo"},"Open"),Object(c.b)(s.a,{type:"error",mdxType:"FuncComMemo"},"Open"),Object(c.b)(s.a.NoteButton,null)),Object(c.b)("h2",{id:"复杂一点，带有状态管理的使用"},"复杂一点，带有状态管理的使用"),Object(c.b)(m.c,{__position:2,__code:"() => {\n  const [status, setStatus] = React.useState('primary')\n  function onButtonClick() {\n    setStatus(status === 'primary' ? 'error' : 'primary')\n  }\n  const color = status === 'primary' ? '#5352ED' : '#FF4757'\n  return (\n    <div>\n      <FuncComMemo onClick={onButtonClick} type={status}>\n        change Status\n      </FuncComMemo>\n      <div style={{ backgroundColor: color }} className=\"button-status\">\n        button status\n      </div>\n    </div>\n  )\n}",__scope:(o={props:l,DefaultLayout:u.a,Playground:m.c,Props:m.d,FuncComMemo:s.a},o.DefaultLayout=u.a,o._frontmatter=i,o),mdxType:"Playground"},(function(){var t=r.useState("primary"),e=t[0],o=t[1];var n="primary"===e?"#5352ED":"#FF4757";return Object(c.b)("div",null,Object(c.b)(s.a,{onClick:function(){o("primary"===e?"error":"primary")},type:e,mdxType:"FuncComMemo"},"change Status"),Object(c.b)("div",{style:{backgroundColor:n},className:"button-status"},"button status"))})))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/core/FuncComMemo.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-core-func-com-memo-mdx-19957177c253f00c2834.js.map