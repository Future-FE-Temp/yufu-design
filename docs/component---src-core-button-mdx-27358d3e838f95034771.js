(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qWsO:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return b})),n.d(e,"default",(function(){return y}));var o=n("IKa1"),a=n("ITlK"),r=n("r0ML"),u=n("V0Ug"),s=n("sN0p"),c=n("EeHy"),p=n("8OwP"),i=n("kkNF"),b=(n("J18l"),n("xH0s"),{});void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/core/Button.mdx"}});var d={_frontmatter:b},l=s.a;function y(t){var e,n,y=t.components,m=Object(a.a)(t,["components"]);return Object(u.b)(l,Object(o.a)({},d,m,{components:y,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"button-按钮组件-h"},"Button 按钮组件 h"),Object(u.b)(c.d,{of:p.a,mdxType:"Props"}),Object(u.b)(c.d,{of:i.a,mdxType:"Props"}),Object(u.b)("h2",{id:"基本使用"},"基本使用"),Object(u.b)(c.c,{__position:1,__code:'<Button>Open</Button>\n<Button type="error">Open</Button>\n<Button type="default">Open</Button>',__scope:(e={props:m,DefaultLayout:s.a,Playground:c.c,Props:c.d,Button:p.a,TestButton:i.a},e.DefaultLayout=s.a,e._frontmatter=b,e),mdxType:"Playground"},Object(u.b)(p.a,{mdxType:"Button"},"Open"),Object(u.b)(p.a,{type:"error",mdxType:"Button"},"Open"),Object(u.b)(p.a,{type:"default",mdxType:"Button"},"Open")),Object(u.b)("h2",{id:"复杂一点，带有状态管理的使用s"},"复杂一点，带有状态管理的使用s"),Object(u.b)(c.c,{__position:2,__code:"() => {\n  const [status, setStatus] = React.useState('primary')\n  function onButtonClick() {\n    setStatus(status === 'primary' ? 'error' : 'primary')\n  }\n  const color = status === 'primary' ? '#5352ED' : '#FF4757'\n  return (\n    <div>\n      <Button onClick={onButtonClick} type={status}>\n        change Status\n      </Button>\n      <div style={{ backgroundColor: color }} className=\"button-status\">\n        button status\n      </div>\n    </div>\n  )\n}",__scope:(n={props:m,DefaultLayout:s.a,Playground:c.c,Props:c.d,Button:p.a,TestButton:i.a},n.DefaultLayout=s.a,n._frontmatter=b,n),mdxType:"Playground"},(function(){var t=r.useState("primary"),e=t[0],n=t[1];var o="primary"===e?"#5352ED":"#FF4757";return Object(u.b)("div",null,Object(u.b)(p.a,{onClick:function(){n("primary"===e?"error":"primary")},type:e,mdxType:"Button"},"change Status"),Object(u.b)("div",{style:{backgroundColor:o},className:"button-status"},"button status"))})))}void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/core/Button.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-core-button-mdx-27358d3e838f95034771.js.map