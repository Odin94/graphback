(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{108:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),o=(t(0),t(230)),i={id:"intromigrations",title:"Migrating to Graphback from other technologies",sidebar_label:"Migrate To Graphback"},c={id:"version-0.12.x/migrations/intromigrations",isDocsHomePage:!1,title:"Migrating to Graphback from other technologies",description:"Graphback helps with building a GraphQL server from scratch including the database and API,",source:"@site/versioned_docs/version-0.12.x/migrations/migrations.md",permalink:"/docs/migrations/intromigrations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/migrations/migrations.md",version:"0.12.x",sidebar_label:"Migrate To Graphback"},p=[{value:"Graphback supported migrations",id:"graphback-supported-migrations",children:[]}],s={rightToc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback helps with building a GraphQL server from scratch including the database and API,\nbut in real world developers often already have their data stored in a database or work\nwith a very complex RESTful API that needs to be migrated. "),Object(o.b)("p",null,"For this purpose, Graphback will offer a number of migration options that allow developers to\nmigrate their data or REST API to a GraphQL Schema with very little effort, while still giving developers\nthe chance to adjust the schema and underlying data access layer. "),Object(o.b)("h2",{id:"graphback-supported-migrations"},"Graphback supported migrations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OpenAPI (RESTful server migrations)"),Object(o.b)("li",{parentName:"ul"},"Various plugins available as part of GraphQL compose\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/graphql-compose/graphql-compose"}),"https://github.com/graphql-compose/graphql-compose"))))}l.isMDXComponent=!0},230:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:r},s),{},{components:t})):a.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);