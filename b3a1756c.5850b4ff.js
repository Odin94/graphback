/*! For license information please see b3a1756c.5850b4ff.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{1082:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,j=s["".concat(b,".").concat(d)]||s[d]||u[d]||r;return a?c.a.createElement(j,l(l({ref:t},o),{},{components:a})):c.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<r;o++)b[o]=a[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1083:function(e,t,a){"use strict";e.exports=a(1084)},1084:function(e,t,a){"use strict";var n=a(1085),c="function"==typeof Symbol&&Symbol.for,r=c?Symbol.for("react.element"):60103,b=c?Symbol.for("react.portal"):60106,l=c?Symbol.for("react.fragment"):60107,i=c?Symbol.for("react.strict_mode"):60108,o=c?Symbol.for("react.profiler"):60114,p=c?Symbol.for("react.provider"):60109,s=c?Symbol.for("react.context"):60110,u=c?Symbol.for("react.forward_ref"):60112,d=c?Symbol.for("react.suspense"):60113,j=c?Symbol.for("react.memo"):60115,O=c?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}function N(){}function v(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=y.prototype;var k=v.prototype=new N;k.constructor=v,n(k,y.prototype),k.isPureReactComponent=!0;var _={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,a){var n,c={},b=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(b=""+t.key),t)C.call(t,n)&&!S.hasOwnProperty(n)&&(c[n]=t[n]);var i=arguments.length-2;if(1===i)c.children=a;else if(1<i){for(var o=Array(i),p=0;p<i;p++)o[p]=arguments[p+2];c.children=o}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:r,type:e,key:b,ref:l,props:c,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g,P=[];function T(e,t,a,n){if(P.length){var c=P.pop();return c.result=e,c.keyPrefix=t,c.func=a,c.context=n,c.count=0,c}return{result:e,keyPrefix:t,func:a,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function R(e,t,a,n){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case b:l=!0}}if(l)return a(n,e,""===t?"."+L(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var o=t+L(c=e[i],i);l+=R(c,o,a,n)}else if(null===e||"object"!=typeof e?o=null:o="function"==typeof(o=m&&e[m]||e["@@iterator"])?o:null,"function"==typeof o)for(e=o.call(e),i=0;!(c=e.next()).done;)l+=R(c=c.value,o=t+L(c,i++),a,n);else if("object"===c)throw a=""+e,Error(f(31,"[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return l}function E(e,t,a){return null==e?0:R(e,"",t,a)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,a){var n=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,a,(function(e){return e})):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+a)),n.push(e))}function F(e,t,a,n,c){var r="";null!=a&&(r=(""+a).replace(x,"$&/")+"/"),E(e,$,t=T(t,r,n,c)),M(t)}var A={current:null};function I(){var e=A.current;if(null===e)throw Error(f(321));return e}var W={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,a){if(null==e)return e;var n=[];return F(e,n,null,t,a),n},forEach:function(e,t,a){if(null==e)return e;E(e,U,t=T(null,null,t,a)),M(t)},count:function(e){return E(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=y,t.Fragment=l,t.Profiler=o,t.PureComponent=v,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,t.cloneElement=function(e,t,a){if(null==e)throw Error(f(267,e));var c=n({},e.props),b=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=_.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(p in t)C.call(t,p)&&!S.hasOwnProperty(p)&&(c[p]=void 0===t[p]&&void 0!==o?o[p]:t[p])}var p=arguments.length-2;if(1===p)c.children=a;else if(1<p){o=Array(p);for(var s=0;s<p;s++)o[s]=arguments[s+2];c.children=o}return{$$typeof:r,type:e.type,key:b,ref:l,props:c,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=D,t.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:j,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return I().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,a){return I().useReducer(e,t,a)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="16.13.1"},1085:function(e,t,a){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var a,l,i=b(e),o=1;o<arguments.length;o++){for(var p in a=Object(arguments[o]))c.call(a,p)&&(i[p]=a[p]);if(n){l=n(a);for(var s=0;s<l.length;s++)r.call(a,l[s])&&(i[l[s]]=a[l[s]])}}return i}},770:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),c=a(6),r=(a(1083),a(1082)),b={id:"_util_",title:"util",sidebar_label:"util"},l={unversionedId:"api/graphback-datasync/modules/_util_",id:"api/graphback-datasync/modules/_util_",isDocsHomePage:!1,title:"util",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_util_.md",slug:"/api/graphback-datasync/modules/_util_",permalink:"/docs/next/api/graphback-datasync/modules/_util_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_util_.md",version:"current",sidebar_label:"util"},i=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Object literals",id:"object-literals",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getDataSyncAnnotationData",id:"getdatasyncannotationdata",children:[]},{value:"getModelConfigFromGlobal",id:"getmodelconfigfromglobal",children:[]},{value:"isDataSyncModel",id:"isdatasyncmodel",children:[]},{value:"isDataSyncService",id:"isdatasyncservice",children:[]},{value:"isDataSyncType",id:"isdatasynctype",children:[]}]},{value:"Object literals",id:"object-literals-1",children:[{value:"<code>Const</code> ClientSideWins",id:"const-clientsidewins",children:[]},{value:"\u25aa <strong>ClientSideWins</strong>: <em>object</em>",id:"-clientsidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete",children:[]},{value:"resolveUpdate",id:"resolveupdate",children:[]},{value:"<code>Const</code> DataSyncFieldNames",id:"const-datasyncfieldnames",children:[]},{value:"\u25aa <strong>DataSyncFieldNames</strong>: <em>object</em>",id:"-datasyncfieldnames-object",children:[]},{value:"deleted",id:"deleted",children:[]},{value:"lastUpdatedAt",id:"lastupdatedat",children:[]},{value:"ttl",id:"ttl",children:[]},{value:"version",id:"version",children:[]},{value:"<code>Const</code> ServerSideWins",id:"const-serversidewins",children:[]},{value:"\u25aa <strong>ServerSideWins</strong>: <em>object</em>",id:"-serversidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete-1",children:[]},{value:"resolveUpdate",id:"resolveupdate-1",children:[]},{value:"<code>Const</code> ThrowOnConflict",id:"const-throwonconflict",children:[]},{value:"\u25aa <strong>ThrowOnConflict</strong>: <em>object</em>",id:"-throwonconflict-object",children:[]},{value:"resolveDelete",id:"resolvedelete-2",children:[]},{value:"resolveUpdate",id:"resolveupdate-2",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"index"},"Index"),Object(r.b)("h3",{id:"classes"},"Classes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_util_.conflicterror"}),"ConflictError"))),Object(r.b)("h3",{id:"interfaces"},"Interfaces"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconfigmap"}),"DataSyncModelConfigMap")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"))),Object(r.b)("h3",{id:"functions"},"Functions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#getdatasyncannotationdata"}),"getDataSyncAnnotationData")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#getmodelconfigfromglobal"}),"getModelConfigFromGlobal")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasyncmodel"}),"isDataSyncModel")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasyncservice"}),"isDataSyncService")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#isdatasynctype"}),"isDataSyncType"))),Object(r.b)("h3",{id:"object-literals"},"Object literals"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-clientsidewins"}),"ClientSideWins")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-datasyncfieldnames"}),"DataSyncFieldNames")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-serversidewins"}),"ServerSideWins")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_util_#const-throwonconflict"}),"ThrowOnConflict"))),Object(r.b)("h2",{id:"functions-1"},"Functions"),Object(r.b)("h3",{id:"getdatasyncannotationdata"},"getDataSyncAnnotationData"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getDataSyncAnnotationData"),"(",Object(r.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L14"}),"packages/graphback-datasync/src/util.ts:14"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"model")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getmodelconfigfromglobal"},"getModelConfigFromGlobal"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getModelConfigFromGlobal"),"(",Object(r.b)("inlineCode",{parentName:"p"},"modelName"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"globalConfig"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),"): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L51"}),"packages/graphback-datasync/src/util.ts:51"))),Object(r.b)("p",null,"Function to get conflict configuration of specific model from specified global configuration"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"modelName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the model's GraphQL type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"globalConfig")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specified global config")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isdatasyncmodel"},"isDataSyncModel"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isDataSyncModel"),"(",Object(r.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L6"}),"packages/graphback-datasync/src/util.ts:6"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"model")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isdatasyncservice"},"isDataSyncService"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isDataSyncService"),"(",Object(r.b)("inlineCode",{parentName:"p"},"service"),": GraphbackCRUDService): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L18"}),"packages/graphback-datasync/src/util.ts:18"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"service")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCRUDService")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isdatasynctype"},"isDataSyncType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isDataSyncType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"graphqlType"),": GraphQLObjectType): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L10"}),"packages/graphback-datasync/src/util.ts:10"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"graphqlType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("h2",{id:"object-literals-1"},"Object literals"),Object(r.b)("h3",{id:"const-clientsidewins"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," ClientSideWins"),Object(r.b)("h3",{id:"-clientsidewins-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"ClientSideWins"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L136"}),"packages/graphback-datasync/src/util.ts:136"))),Object(r.b)("p",null,"The ClientSideWins conflict resolution strategy"),Object(r.b)("h3",{id:"resolvedelete"},"resolveDelete"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L148"}),"packages/graphback-datasync/src/util.ts:148"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h3",{id:"resolveupdate"},"resolveUpdate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L137"}),"packages/graphback-datasync/src/util.ts:137"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"const-datasyncfieldnames"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," DataSyncFieldNames"),Object(r.b)("h3",{id:"-datasyncfieldnames-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"DataSyncFieldNames"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L80"}),"packages/graphback-datasync/src/util.ts:80"))),Object(r.b)("h3",{id:"deleted"},"deleted"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"deleted"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_deleted"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L83"}),"packages/graphback-datasync/src/util.ts:83"))),Object(r.b)("h3",{id:"lastupdatedat"},"lastUpdatedAt"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"lastUpdatedAt"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_lastUpdatedAt"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L82"}),"packages/graphback-datasync/src/util.ts:82"))),Object(r.b)("h3",{id:"ttl"},"ttl"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"ttl"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_ttl"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L84"}),"packages/graphback-datasync/src/util.ts:84"))),Object(r.b)("h3",{id:"version"},"version"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"version"),": ",Object(r.b)("em",{parentName:"p"},"string"),' = "_version"'),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L81"}),"packages/graphback-datasync/src/util.ts:81"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"const-serversidewins"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," ServerSideWins"),Object(r.b)("h3",{id:"-serversidewins-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"ServerSideWins"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L115"}),"packages/graphback-datasync/src/util.ts:115"))),Object(r.b)("p",null,"The ServerSideWins conflict resolution strategy"),Object(r.b)("h3",{id:"resolvedelete-1"},"resolveDelete"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L127"}),"packages/graphback-datasync/src/util.ts:127"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h3",{id:"resolveupdate-1"},"resolveUpdate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L116"}),"packages/graphback-datasync/src/util.ts:116"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"const-throwonconflict"},Object(r.b)("inlineCode",{parentName:"h3"},"Const")," ThrowOnConflict"),Object(r.b)("h3",{id:"-throwonconflict-object"},"\u25aa ",Object(r.b)("strong",{parentName:"h3"},"ThrowOnConflict"),": ",Object(r.b)("em",{parentName:"h3"},"object")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L161"}),"packages/graphback-datasync/src/util.ts:161"))),Object(r.b)("h3",{id:"resolvedelete-2"},"resolveDelete"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L165"}),"packages/graphback-datasync/src/util.ts:165"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h3",{id:"resolveupdate-2"},"resolveUpdate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/abc8270/packages/graphback-datasync/src/util.ts#L162"}),"packages/graphback-datasync/src/util.ts:162"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"conflict")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")))}p.isMDXComponent=!0}}]);