(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return f}));var r=t("q1tI"),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(t),g=r,f=h["".concat(o,".").concat(g)]||h[g]||p[g]||a;return t?i.a.createElement(f,l(l({ref:n},s),{},{components:t})):i.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"===typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},Ff2n:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,"a",(function(){return r}))},"a3/r":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("q1tI"),i=t.n(r).a.createElement;function a(e){var n=e.children;return i("button",{style:{borderRadius:"3px",border:"1px solid black",color:"black",padding:"0.5em 1em",cursor:"pointer",fontSize:"1.1em"}},n)}},q7Kh:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"default",(function(){return h}));var r=t("wx14"),i=t("Ff2n"),a=t("q1tI"),o=t.n(a),l=t("7ljp"),c=t("a3/r"),s=(o.a.createElement,{title:"ROC Curve",date:"2020-07-29",time_to_read:"21min",image:"https://i.imgur.com/n4lLzMf.jpg",categories:["Machine-Learning","data-sciene"],author:"Mohammad Afroz",description:"The ROC curve is created by plotting the true positive rate (TPR) against the false positive rate (FPR) at various threshold settings.Checkout for more...."}),u={frontMatter:s};function h(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Secondpost"),Object(l.b)("h3",null,"sdfdf"),Object(l.b)("p",null,"Look, a button! \ud83d\udc47"),Object(l.b)(c.a,{mdxType:"Button"},"\ud83d\udc4b Hello"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{5-19}","{5-19}":!0}),'\nconst highlightLine = (lineArray, lineProps) => {\nlet shouldExclude = false\n\nlineArray.forEach((line, i) => {\n  const content = line.content\n\n  // Highlight lines with "// highlight-line"\n  if (content.replace(/\\s/g, "").includes("//highlight-line")) {\n    lineProps.className = `${lineProps.className} ${highlightClassName}`\n    line.content = content\n      .replace("// highlight-line", "")\n      .replace("//highlight-line", "")\n  }\n\n  // Stop highlighting\n  if (\n    !!highlightStart &&\n    content.replace(/\\s/g, "") === "//highlight-end"\n  ) {\n    highlightStart = false\n    shouldExclude = true\n  }\n\n  // Start highlighting after "//highlight-start"\n  if (\n    content.replace(/\\s/g, "") === "//highlight-start"\n  ) {\n    highlightStart = true\n    shouldExclude = true\n  }\n})\n// Highlight lines between //highlight-start & //highlight-end\nif (!!highlightStart) {\n  lineProps.className = `${lineProps.className} ${highlightClassName}`\n}\n\nreturn shouldExclude\n}\n\n')),Object(l.b)("h1",null,"sdfd"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{5-6}","{5-6}":!0}),"\n// src/components/CodeBlock.jsx\nimport React from 'react'\nimport rangeParser from 'parse-numeric-range';\nimport Highlight, { defaultProps } from 'prism-react-renderer'\n// Create a closure that determines if we have\n// to highlight the given index\nconst calculateLinesToHighlight = (meta) => {\n  const RE = /{([\\d,-]+)}/\n  if (shouldHighlightLine(index)) { lineProps.className = `${lineProps.className} highlight-line` }\n    const strlineNumbers = RE.exec(meta)[1]\n    const lineNumbers = rangeParser(strlineNumbers)\n    return (index) => (lineNumbers.includes(index + 1))\n  } else {\n    return () => false\n  }\n}\n// ...\n\n")))}h.isMDXComponent=!0},wx14:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}}]);