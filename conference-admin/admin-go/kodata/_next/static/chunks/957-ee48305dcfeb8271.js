(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{1957:function(e,t,r){"use strict";r.r(t);var n=r(6006),i=r(6394),o=r.n(i);let l=e=>{var t;let{filePath:r}=e,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=r.split(n).shift(),o=r.split(".").pop(),l=n.substring(0,n.lastIndexOf("."))||n;return{path:i,filename:l,extension:o||""}},a=function(e,t,r){var n;let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{filename:o,path:a,extension:s}=l({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(s.toUpperCase()))return e;let u=s;["JPG","JPEG","PNG","GIF"].includes(s.toUpperCase())&&(u="WEBP");let c=a,d=null===(n=c)||void 0===n?void 0:n.substr(-1);"/"!=d&&(c+="/");let f=e.includes("_next/static/media");r&&(c=r.endsWith("/")&&c&&c.startsWith("/")?r+c.slice(1):r.endsWith("/")||!c||c.startsWith("/")?r+c:r+"/"+c);let p="".concat(f?r?r+"/":"":c).concat("nextImageExportOptimizer","/").concat(o,"-opt-").concat(t,".").concat(u.toUpperCase());return i||"/"===p.charAt(0)||(p="/"+p),p},s=e=>{let t,{src:r,width:n,basePath:i}=e,o=r.replace(/^(https?|ftp):\/\//,"").replace(/[/\\:*?"<>|#%]/g,"_").replace(/[\x00-\x1F\x7F]/g,"").trim();return a(o,n,i,!0)},u=e=>{let{src:t,width:r,basePath:n}=e,i="object"==typeof t,o=i?t.src:t,l=i&&t.width||void 0;if(i&&l&&r>l){let e=[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],t=null;for(let r=0;r<e.length;r++)Number(e[r])>=l&&(null===t||Number(e[r])<t)&&(t=Number(e[r]));if(null!==t)return a(o,t,n)}return o.startsWith("http")?s({src:o,width:r,basePath:n}):a(o,r,n)},c=e=>{let{src:t}=e,r="object"==typeof t?t.src:t,n=r.startsWith("http");return n||"/"===r.charAt(0)||(r="/"+r),r},d=(0,n.forwardRef)((e,t)=>{let{src:r,priority:i=!1,loading:l,className:d,width:f,height:p,onLoadingComplete:m,unoptimized:g,placeholder:h="blur",basePath:b="",blurDataURL:v,style:y,onError:w,..._}=e,[P,S]=(0,n.useState)(!1),x=(0,n.useMemo)(()=>{if(v)return v;let e="object"==typeof r,t=e?r.src:r;return!0===g?t:t.startsWith("http")?s({src:t,width:10,basePath:b}):a(t,10,b)},[v,r,g]),E="object"==typeof r?r.src.endsWith(".svg"):r.endsWith(".svg"),[j,C]=(0,n.useState)(!1),O="blur"===h&&!E&&x&&x.startsWith("/")&&!j?{backgroundSize:(null==y?void 0:y.objectFit)||"cover",backgroundPosition:(null==y?void 0:y.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(x,")"),filter:"url(#sharpBlur)"}:void 0,I="object"==typeof r,z=I?r.src:r;b&&!I&&z.startsWith("/")&&(z=b+z),!b||I||z.startsWith("/")||(z=b+"/"+z);let M=n.createElement(o(),{ref:t,..._,...f&&{width:f},...p&&{height:p},...l&&{loading:l},className:"".concat(d," next-exported-image-blur-svg"),...m&&{onLoadingComplete:m},...h&&{placeholder:O||j?"empty":h},...g&&{unoptimized:g},...i&&{priority:i},...E&&{unoptimized:!0},style:{...y,...O},loader:P||!0===g?c:e=>u({src:r,width:e.width,basePath:b}),blurDataURL:x,onError:e=>{S(!0),C(!0),w&&w(e)},onLoadingComplete:e=>{0===e.naturalWidth&&S(!0),C(!0),m&&m(e)},src:I?r:z});return O?n.createElement(n.Fragment,null,n.createElement("noscript",null,n.createElement("style",null,"\n    .next-exported-image-blur-svg {\n       filter: none !important;\n    }\n    ")),M,n.createElement("svg",{style:{border:0,clip:"rect(0 0 0 0)",height:0,margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}},n.createElement("filter",{id:"sharpBlur"},n.createElement("feGaussianBlur",{stdDeviation:"20",colorInterpolationFilters:"sRGB"}),n.createElement("feColorMatrix",{type:"matrix",colorInterpolationFilters:"sRGB",values:"1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"}),n.createElement("feComposite",{in2:"SourceGraphic",operator:"in"})))):M});t.default=d},3240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let n=r(6927),i=r(5909),o=i._(r(6006)),l=n._(r(5538)),a=r(5468),s=r(5149),u=r(2281);r(3579);let c=n._(r(4489)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,r,n,i,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function p(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:a,decoding:s,className:u,style:c,fetchPriority:d,placeholder:m,loading:g,unoptimized:h,fill:b,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:_,onLoad:P,onError:S,...x}=e;return o.default.createElement("img",{...x,...p(d),loading:g,width:a,height:l,decoding:s,"data-nimg":b?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&f(e,m,v,y,w,h))},[r,m,v,y,w,S,h,t]),onLoad:e=>{let t=e.currentTarget;f(t,m,v,y,w,h)},onError:e=>{_(!0),"blur"===m&&w(!0),S&&S(e)}})}),g=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(u.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=d||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:i,onLoadingComplete:f}=e,g=(0,o.useRef)(i);(0,o.useEffect)(()=>{g.current=i},[i]);let h=(0,o.useRef)(f);(0,o.useEffect)(()=>{h.current=f},[f]);let[b,v]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),{props:_,meta:P}=(0,a.getImgProps)(e,{defaultLoader:c.default,imgConf:n,blurComplete:b,showAltText:y});return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:w,ref:t}),P.priority?o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+_.src+_.srcSet+_.sizes,rel:"preload",as:"image",href:_.srcSet?void 0:_.src,imageSrcSet:_.srcSet,imageSizes:_.sizes,crossOrigin:_.crossOrigin,referrerPolicy:_.referrerPolicy,...p(_.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let n=r(6927),i=n._(r(6006)),o=i.default.createContext({})},9334:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},5468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(3579);let n=r(9527),i=r(5149);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:v,fill:y=!1,style:w,onLoad:_,onLoadingComplete:P,placeholder:S="empty",blurDataURL:x,fetchPriority:E,layout:j,objectFit:C,objectPosition:O,lazyBoundary:I,lazyRoot:z,...M}=e,{imgConf:k,showAltText:A,blurComplete:W,defaultLoader:R}=t,G=k||i.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let F=M.loader||R;delete M.loader,delete M.srcSet;let N="__next_img_default"in F;if(N){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(j){"fill"===j&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!d&&(d=t)}let U="",B=l(b),D=l(v);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,x=x||e.blurDataURL,U=e.src,!y){if(B||D){if(B&&!D){let t=B/e.width;D=Math.round(e.height*t)}else if(!B&&D){let t=D/e.height;B=Math.round(e.width*t)}}else B=e.width,D=e.height}}let L=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:U)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,L=!1),a.unoptimized&&(f=!0),N&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let T=l(h),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:O}:{},A?{}:{color:"transparent"},w),J="blur"===S&&x&&!W?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:D,blurWidth:s,blurHeight:u,blurDataURL:x,objectFit:V.objectFit})+'")'}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[c]})}}({config:a,src:c,unoptimized:f,width:B,quality:T,sizes:d,loader:F}),q={...M,loading:L?"lazy":m,fetchPriority:E,width:B,height:D,decoding:"async",className:g,style:{...V,...J},sizes:H.sizes,srcSet:H.srcSet,src:H.src},$={unoptimized:f,priority:p,placeholder:S,fill:y};return{props:q,meta:$}}},5538:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(6927),i=r(5909),o=i._(r(6006)),l=n._(r(8703)),a=r(3188),s=r(577),u=r(9334);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(3579);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9527:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n||t,s=i||r,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2281:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let n=r(6927),i=n._(r(6006)),o=r(5149),l=i.default.createContext(o.imageConfigDefault)},5149:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7630:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let n=r(6927),i=r(5468),o=r(3579),l=r(3240),a=n._(r(4489)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},4489:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8703:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(5909),i=n._(r(6006)),o=i.useLayoutEffect,l=i.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},3579:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},6394:function(e,t,r){e.exports=r(7630)}}]);