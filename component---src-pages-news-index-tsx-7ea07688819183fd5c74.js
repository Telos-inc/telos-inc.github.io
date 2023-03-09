"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[756],{8471:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n={};r.r(n),r.d(n,{exclude:function(){return _},extract:function(){return U},parse:function(){return L},parseUrl:function(){return q},pick:function(){return P},stringify:function(){return B},stringifyUrl:function(){return D}});var a=r(7294),o=r(1503),c=r(1883);var s=r(8032);var l=function(){const{newsBanner:e}={newsBanner:(0,c.K2)("845535019").NewsBanner.childImageSharp.gatsbyImageData};return a.createElement("div",{className:"w-full"},a.createElement(s.G,{image:e,alt:"텔로스 뉴스 베너 이미지"}))};var i=function(){return a.createElement("div",{className:"mx-auto mt-20 ssm:mt-40 px-30 ssm:px-50 max-w-1600 text-c-black-300"},a.createElement("h2",{className:"font-bold text-36 ssm:text-40 md:text-44 font-open-sans"},"News"),a.createElement("p",{className:"text-18 ssm:text-20 md:text-24 break-keep"},"새로운 텔로스의 소식, 언론보도 등 다양한 소식들을 만나 보실 수 있습니다."))},u=r(6010);var m=e=>{let{children:t,onClick:r,active:n}=e;return a.createElement("button",{className:(0,u.Z)(n?"bg-c-orange-300 text-white":"bg-c-gray-300 text-c-black-300"),onClick:r},t)};var f=e=>{let{selectedCategory:t,categoryList:r,itemClickCallback:n}=e;return a.createElement("div",{className:"flex flex-wrap font-semibold gap-15 md:gap-20 sm:text-18 md:text-20 all:font-open-sans text-c-black-300 under:py-6 under:px-15 md:under:py-8 md:under:px-25 under:rounded-3xl"},Object.entries(r).map((e=>{let[r,o]=e;return a.createElement(m,{onClick:()=>(e=>{history.pushState(null,"","?category="+e),n(e)})(r),active:r===t,key:r},a.createElement("span",null,r))})))};var p=e=>{let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:l}},link:i}=e;return a.createElement(c.rU,{to:i},a.createElement("article",null,a.createElement(s.G,{className:"w-full h-full",image:l,alt:"텔로스 뉴스 썸네일 이미지"}),a.createElement("p",{className:"mt-10 truncate text-18 ssm:text-20 md:text-22"},t),a.createElement("span",{className:"text-16 md:text-18 text-c-gray-400"},r)))};var d=function(e,t){const r=(0,a.useRef)(null),{0:n,1:o}=(0,a.useState)(1),c=(0,a.useMemo)((()=>"All"===e?t:t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return r.includes(e)}))),[e]);(0,a.useEffect)((()=>o(1)),[e]);return{containerRef:r,postList:c.slice(0,9*n),more:()=>{o((e=>e+1))},get isEnd(){return t.length<=c.slice(0,9*n).length||c.slice(0,9*n).length<9}}},y=r(5589);var g=function(e){let{posts:t,selectedCategory:r,...n}=e;const{containerRef:o,postList:c,more:s,isEnd:l}=d(r,t);return a.createElement("section",{className:"mx-auto mt-30 ssm:mt-40 md:mt-60 px-30 ssm:px-50 max-w-1600",ref:o},a.createElement(f,Object.assign({selectedCategory:r},n)),a.createElement("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 mt-35 gap-30 sm:gap-45"},c.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return a.createElement(p,Object.assign({},n,{link:r,key:t}))}))),a.createElement("div",{className:"flex justify-center mt-80 md:mt-120"},!l&&a.createElement("button",{className:"all:w-full all:h-70 all:sm:h-80 all:md:h-100",onClick:()=>s()},a.createElement(y.zw,null))))};const b="%[a-f0-9]{2}",x=new RegExp("("+b+")|([^%]+?)","gi"),h=new RegExp("("+b+")+","gi");function k(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],k(r),k(n))}function E(e){try{return decodeURIComponent(e)}catch{let t=e.match(x)||[];for(let r=1;r<t.length;r++)t=(e=k(t,r).join("")).match(x)||[];return e}}function j(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=h.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=E(r[0]);e!==r[0]&&(t[r[0]]=e)}r=h.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const a of n)e=e.replace(new RegExp(a,"g"),t[a]);return e}(e)}}function v(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function w(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,a)}}return r}const N=e=>null==e,C=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),F=Symbol("encodeFragmentIdentifier");function S(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function O(e,t){return t.encode?t.strict?C(e):encodeURIComponent(e):e}function I(e,t){return t.decode?j(e):e}function A(e){return Array.isArray(e)?e.sort():"object"==typeof e?A(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function R(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function $(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function U(e){const t=(e=R(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function L(e,t){S((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&I(r,e).includes(e.arrayFormatSeparator);r=o?I(r,e):r;const c=a||o?r.split(e.arrayFormatSeparator).map((t=>I(t,e))):null===r?r:I(r,e);n[t]=c};case"bracket-separator":return(t,r,n)=>{const a=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!a)return void(n[t]=r?I(r,e):r);const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>I(t,e)));void 0!==n[t]?n[t]=[...n[t],...o]:n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;const e=t.decode?a.replace(/\+/g," "):a;let[o,c]=v(e,"=");void 0===o&&(o=e),c=void 0===c?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?c:I(c,t),r(I(o,t),c,n)}for(const[a,o]of Object.entries(n))if("object"==typeof o&&null!==o)for(const[e,r]of Object.entries(o))o[e]=$(r,t);else n[a]=$(o,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=A(r):e[t]=r,e}),Object.create(null))}function B(e,t){if(!e)return"";S((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&N(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[O(t,e),"[",a,"]"].join("")]:[...r,[O(t,e),"[",O(a,e),"]=",O(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[O(t,e),"[]"].join("")]:[...r,[O(t,e),"[]=",O(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[O(t,e),":list="].join("")]:[...r,[O(t,e),":list=",O(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[O(r,e),t,O(a,e)].join("")]:[[n,O(a,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,O(t,e)]:[...r,[O(t,e),"=",O(n,e)].join("")]}}(t),a={};for(const[c,s]of Object.entries(e))r(c)||(a[c]=s);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const a=e[r];return void 0===a?"":null===a?O(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?O(r,t)+"[]":a.reduce(n(r),[]).join("&"):O(r,t)+"="+O(a,t)})).filter((e=>e.length>0)).join("&")}function q(e,t){t={decode:!0,...t};let[r,n]=v(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:L(U(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:I(n,t)}:{}}}function D(e,t){t={encode:!0,strict:!0,[F]:!0,...t};const r=R(e.url).split("?")[0]||"";let n=B({...L(U(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let a=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,a=t[F]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${a}`}function P(e,t,r){r={parseFragmentIdentifier:!0,[F]:!1,...r};const{url:n,query:a,fragmentIdentifier:o}=q(e,r);return D({url:n,query:w(a,t),fragmentIdentifier:o},r)}function _(e,t,r){return P(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var M=n,T=r(5162);var Z=function(e){let{location:{search:t,path:r},data:{allMarkdownRemark:{edges:n}}}=e;const{0:c,1:s}=(0,a.useState)("All"),u=M.parse(t),m="string"==typeof u.category&&u.category?u.category:"All",f=(0,a.useMemo)((()=>n.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return e.All++,r.forEach((t=>{e[t]?e[t]++:e[t]=1})),e}),{All:0})),[]);return(0,a.useEffect)((()=>{m&&s(m)}),[m]),a.createElement(o.Z,null,a.createElement(T.Z,{title:"NEWS",description:"뉴스 페이지"}),a.createElement(l,null),a.createElement(i,null),a.createElement(g,{itemClickCallback:s,selectedCategory:c,categoryList:f,posts:n}))}}}]);
//# sourceMappingURL=component---src-pages-news-index-tsx-7ea07688819183fd5c74.js.map