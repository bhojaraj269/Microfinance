var e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return te(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+D(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+D(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+D(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&D(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function T(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&D(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(T)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=T,E=function(){re.postMessage(null)}}else E=function(){_(T,0)};function D(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,D(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.4`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),D=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=D&&e[D]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(se(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&tn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&tn(e,a,t[a])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ht]||null;if(!i)throw Error(s(90));qt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)_i(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=gi(31,n,t,i),e.elementType=ne,e.lanes=a,e;case y:return xi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=gi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case ee:return e=gi(13,n,t,i),e.elementType=ee,e.lanes=a,e;case te:return e=gi(19,n,t,i),e.elementType=te,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:o=10;break a;case S:o=9;break a;case w:o=11;break a;case T:o=14;break a;case E:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=gi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ge(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(s(519));function Gi(e){throw Zi(Ei(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=de(null),$i=null,ea=null;function ta(e,t,n){A(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,fe(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ra(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ra(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ge.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=O.S;O.S=function(e,t){tu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=de(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?A(wa,wa.current):A(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(s(460)),ka=Error(s(474)),Aa=Error(s(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(s(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(s(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===E&&Pa(a)===t.type)?(t=i(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=xi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case E:return t=Pa(t),f(e,t,n)}if(se(t)||ie(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===C)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Pa(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===C)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Pa(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===C)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&Ii(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&Ii(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Pa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Va(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=xi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=bi(a.type,a.key,a.props,null,e.mode,c),Va(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(a,e.mode,c),c.return=e,e=c}return o(e);case E:return a=Pa(a),b(e,r,a,c)}if(se(a))return h(e,r,a,c);if(ie(a)){if(l=ie(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ba(a),c);if(a.$$typeof===C)return b(e,r,la(e,a),c);Ha(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Si(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=de(null),ao=de(0);function oo(e,t){e=Gl,A(ao,e),A(io,t),Gl=e|t.baseLanes}function so(){A(ao,Gl),A(io,io.current)}function co(){Gl=ao.current,fe(io),fe(ao)}var lo=de(null),uo=null;function fo(e){var t=e.alternate;A(P,P.current&1),A(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){A(P,P.current),A(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(A(P,P.current),A(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){A(P,P.current),A(lo,lo.current)}function go(e){fe(lo),uo===e&&(uo=null),fe(P)}var P=de(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){O.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}O.H=Gs,a=t(n,r)}while(bo);return a}function Ao(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return ca(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(B=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((I||i).memoizedState,n);if(o&&(i.memoizedState=n,B=!0),i=i.queue,ms(Ko.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,i){if(zs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};O.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Qo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Rs(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ks(e).queue;Es(e,i,t,ce,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(s(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ps(Ko.bind(null,r,a,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(s(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ei(r,n),i=nc(e.stateNode,r,i),Qa(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Wi&&(e=Error(s(422),{cause:r}),Zi(Ei(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ei(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rc(i),ic(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var oc=Error(s(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(B||aa(e,t,n,!1),i=(n&e.childLanes)!==0,B||i){if(r=G,r!==null&&(o=ct(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,di(e,o),hu(r,e,o),oc;Du(),t=hc(e,t,n)}else e=a.treeContext,j=cf(o.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(i?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Dc({mode:`hidden`,children:c},i),r=xi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Dc({mode:`visible`,children:r.children},i),c=xi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),o=(n&e.childLanes)!==0,B||o){if(o=G,o!==null&&(r=ct(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(o,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,i,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(i=c.cachePool,i===null?i=Da():(l=N._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=cc(null,t,e,r,n);break a}else if(i===T){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(s(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Xs(r,t.pendingProps),bc(e,t,r,i,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ja(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0),eo(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==i){i=Ei(Error(s(424)),t),Zi(i),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===i){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Vi=t,Ui=!0,i=j,Zd(t.type)?(lf=i,j=cf(r.firstChild)):j=i),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?i=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,i=!0)),i||Gi(t)),ye(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=ca(i),r=r(i),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(i=Ta(),i===null&&(i=G,a=ma(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},qa(t),ta(t,N,i)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ta(t,N,r),r!==i.cache&&ia(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ic(t),a===null?(V(t),Lc(t,i,null,r,n)):(V(t),Rc(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,a)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,i,e,r,n)),null;case 27:if(be(t),n=he.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}e=pe.current,Ji(t)?Ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(be(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}if(a=pe.current,Ji(t))Ki(t,a);else{var o=Bd(he.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[mt]=t,a[ht]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=he.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Vi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(fe(P),r=t.memoizedState,r===null)return V(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,Bc(r,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return A(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>nu&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}else{if(!i)if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!M)return V(t),null}else 2*Ne()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=P.current,A(P,i?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(P),null;case 4:return ve(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&fe(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:fe(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&fe(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Xs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[xt]||a[mt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[mt]=e,Dt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[mt]=e,Dt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){i=e.stateNode;try{$t(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||i,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;tl(e,$c(e),i);break;case 5:var a=n.stateNode;n.flags&32&&($t(a,``),n.flags&=-33),tl(e,$c(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;el(e,$c(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:O.T===null?dt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),it(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Ne(),10<i)){if(yu(r,t,Yl,!Hl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Ne():(a&4194048)===a?tu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,O.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=O.H;return O.H=Hs,e===null?Hs:e}function Eu(){var e=O.A;return O.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,O.H=i,O.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Ne()+500,Su(e,t)):Ul=et(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Ma(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,O.H=r,O.A=i,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!je();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=si,at(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,i=k.p,k.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,k.p=i,O.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,k.p=r,O.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,k.p=r,O.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=O.T,i=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,a)}catch{}return!0}finally{k.p=i,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ne()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=di(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=$e(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=$e(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ct(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=zn;break;case ei:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Ct(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Tt(c),h=u==null?s:Tt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Tt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s))if(yr)v=Or;else{v=Er;var y=Tr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Yt(s,`number`,s.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,a);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:nn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ht]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=he.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Et(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Dt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Dt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Dt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Dt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.4`)throw Error(s(527,Lp,`19.2.4`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Zs,a=Qs,o=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),f=e(((e,t)=>{t.exports=d()}))(),p=`http://localhost:5000`,m=`
  @keyframes tm-fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes tm-slideUp { from { opacity:0; transform:translateY(24px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }

  .tm-overlay {
    position: fixed; inset: 0;
    background: rgba(10, 15, 30, 0.72);
    backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    z-index: 2000; padding: 16px;
    animation: tm-fadeIn 0.2s ease both;
  }
  .tm-modal {
    background: #fff; border-radius: 20px;
    width: 100%; max-width: 740px; max-height: 92vh;
    display: flex; flex-direction: column;
    box-shadow: 0 32px 80px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.06);
    animation: tm-slideUp 0.28s cubic-bezier(0.22,1,0.36,1) both;
    overflow: hidden;
  }
  .tm-header {
    padding: 22px 28px 18px;
    border-bottom: 1px solid #f1f5f9;
    display: flex; align-items: flex-start; justify-content: space-between;
    background: linear-gradient(135deg, #0B1F3E 0%, #1A3A6E 100%);
    flex-shrink: 0;
  }
  .tm-header-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(212,160,23,0.18); border: 1px solid rgba(212,160,23,0.35);
    border-radius: 20px; padding: 4px 12px;
    font-size: 10px; font-weight: 700; color: #F5C842;
    letter-spacing: 1px; margin-bottom: 10px;
  }
  .tm-title {
    font-family: 'Sora', 'DM Sans', sans-serif;
    font-size: 20px; font-weight: 800; color: #fff;
    letter-spacing: -0.4px; margin-bottom: 4px;
  }
  .tm-subtitle { font-size: 13px; color: rgba(255,255,255,0.55); }
  .tm-close-btn {
    background: rgba(255,255,255,0.1); border: none;
    width: 34px; height: 34px; border-radius: 10px; cursor: pointer;
    color: rgba(255,255,255,0.7); font-size: 18px; line-height: 1;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, color 0.2s; flex-shrink: 0; margin-top: 2px;
  }
  .tm-close-btn:hover { background: rgba(255,255,255,0.2); color: #fff; }

  .tm-scroll-hint {
    display: flex; align-items: center; gap: 8px;
    padding: 10px 28px; background: #FFFBEB;
    border-bottom: 1px solid rgba(212,160,23,0.2);
    font-size: 12.5px; color: #92400E; flex-shrink: 0;
  }
  .tm-scroll-hint.done {
    background: #ECFDF5; color: #065F46;
    border-bottom-color: rgba(34,197,94,0.2);
  }

  .tm-body {
    flex: 1; overflow-y: auto; padding: 24px 28px;
    background: #FAFAFA; min-height: 200px;
  }
  .tm-body::-webkit-scrollbar { width: 5px; }
  .tm-body::-webkit-scrollbar-track { background: transparent; }
  .tm-body::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 99px; }

  .tm-content-text {
    white-space: pre-wrap; font-family: 'DM Sans', sans-serif;
    font-size: 13.5px; color: #334155; margin: 0; line-height: 1.75;
  }
  .tm-content-text h1, .tm-content-text h2, .tm-content-text h3 {
    margin: 0 0 8px; color: #0B1F3E;
  }

  .tm-agree-row {
    display: flex; align-items: center; gap: 12px;
    padding: 16px 28px; border-top: 1px solid #f1f5f9;
    font-size: 14px; cursor: pointer; flex-shrink: 0;
    background: #fff;
    transition: background 0.2s;
  }
  .tm-agree-row:hover { background: #F8FAFC; }
  .tm-agree-row input[type="checkbox"] {
    width: 18px; height: 18px; flex-shrink: 0; cursor: pointer;
    accent-color: #1A7FD4;
  }

  .tm-footer {
    padding: 14px 28px; border-top: 1px solid #f1f5f9;
    display: flex; justify-content: flex-end; gap: 10px;
    background: #fff; flex-shrink: 0;
  }
  .tm-btn-cancel {
    padding: 10px 22px; border-radius: 10px;
    border: 1.5px solid #E2E8F0; background: #fff;
    color: #334155; cursor: pointer; font-weight: 600;
    font-family: inherit; font-size: 14px;
    transition: border-color 0.2s, background 0.2s;
  }
  .tm-btn-cancel:hover { border-color: #CBD5E1; background: #F8FAFC; }
  .tm-btn-agree {
    padding: 10px 22px; border-radius: 10px; border: none;
    background: linear-gradient(135deg, #1A7FD4 0%, #0F5FA8 100%);
    color: #fff; font-weight: 700; font-family: inherit; font-size: 14px;
    cursor: pointer; box-shadow: 0 4px 14px rgba(26,127,212,0.3);
    transition: all 0.2s; letter-spacing: 0.2px;
  }
  .tm-btn-agree:not(:disabled):hover { box-shadow: 0 6px 20px rgba(26,127,212,0.42); transform: translateY(-1px); }
  .tm-btn-agree:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; transform: none; }

  .tm-loading {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 60px 24px; gap: 14px; color: #94A3B8; font-size: 14px;
  }
  .tm-spinner {
    width: 36px; height: 36px; border-radius: 50%;
    border: 3px solid #E2E8F0; border-top-color: #1A7FD4;
    animation: tm-spin 0.8s linear infinite;
  }
  @keyframes tm-spin { to { transform: rotate(360deg); } }

  .tm-error {
    padding: 40px 24px; text-align: center; color: #DC2626; font-size: 14px;
  }
`;function h({open:e,onClose:t,mode:n=`view`,shopCode:r,onAgree:i}){let[a,o]=(0,l.useState)(!0),[s,c]=(0,l.useState)(``),[u,d]=(0,l.useState)(null),[h,g]=(0,l.useState)(!1),[_,v]=(0,l.useState)(!1),y=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(!e)return;o(!0),c(``),g(!1),v(!1);let t=n===`admin-agree`||n===`platform-agree`?`${p}/api/terms/platform`:`${p}/api/terms/shop/${r}`;n===`admin-agree`||n===`platform-agree`||r?fetch(t).then(e=>e.json()).then(e=>{e.success?d(e.data):c(e.message||`Could not load terms`)}).catch(()=>c(`Network error — could not load terms`)).finally(()=>o(!1)):(c(`No shop code provided`),o(!1))},[e,r,n]),(0,l.useEffect)(()=>{if(!a&&!s&&u&&y.current){let e=y.current;e.scrollHeight<=e.clientHeight&&v(!0)}},[a,s,u]);let b=()=>{let e=y.current;e&&e.scrollHeight-e.scrollTop-e.clientHeight<40&&v(!0)};if(!e)return null;let x=n===`platform-agree`||n===`admin-agree`,S=n===`agree`||x,C=S&&h&&_&&!a&&!s;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`style`,{children:m}),(0,f.jsx)(`div`,{className:`tm-overlay`,onClick:t,children:(0,f.jsxs)(`div`,{className:`tm-modal`,onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{className:`tm-header`,children:[(0,f.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,f.jsx)(`div`,{className:`tm-header-badge`,children:x?`🏢 SKYUP PLATFORM TERMS`:`📜 SCHEME TERMS`}),(0,f.jsx)(`div`,{className:`tm-title`,children:u?.title||`Terms and Conditions`}),x?(0,f.jsx)(`div`,{className:`tm-subtitle`,children:`SkyUp Digital Solutions · Platform Agreement · Effective 06 May 2025`}):u?.shopName?(0,f.jsxs)(`div`,{className:`tm-subtitle`,children:[u.shopName,u.version?` · Version ${u.version}`:``,u.effectiveFrom?` · Effective ${new Date(u.effectiveFrom).toLocaleDateString(`en-IN`)}`:``]}):null]}),(0,f.jsx)(`button`,{className:`tm-close-btn`,onClick:t,"aria-label":`Close`,children:`✕`})]}),S&&!a&&!s&&(0,f.jsx)(`div`,{className:`tm-scroll-hint${_?` done`:``}`,children:_?`✅ You've read all terms — you can now agree below`:`⬇ Please scroll to the bottom to read all terms before agreeing`}),(0,f.jsxs)(`div`,{ref:y,onScroll:b,className:`tm-body`,children:[a&&(0,f.jsxs)(`div`,{className:`tm-loading`,children:[(0,f.jsx)(`div`,{className:`tm-spinner`}),`Loading terms…`]}),!a&&s&&(0,f.jsxs)(`div`,{className:`tm-error`,children:[`⚠ `,s]}),!a&&!s&&u?.content&&(0,f.jsx)(`pre`,{className:`tm-content-text`,children:u.content})]}),S&&!a&&!s&&(0,f.jsxs)(`label`,{className:`tm-agree-row`,children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:h,onChange:e=>g(e.target.checked),disabled:!_}),(0,f.jsx)(`span`,{style:{color:_?`#0F172A`:`#94A3B8`,transition:`color 0.2s`,lineHeight:1.5},children:_?`I have read, understood and agree to the Terms and Conditions`:`Scroll to the bottom to enable agreement`})]}),(0,f.jsx)(`div`,{className:`tm-footer`,children:S?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`button`,{onClick:t,className:`tm-btn-cancel`,children:`Cancel`}),(0,f.jsx)(`button`,{disabled:!C,onClick:()=>C&&i?.(u?.version),className:`tm-btn-agree`,children:`✓ I Agree & Continue`})]}):(0,f.jsx)(`button`,{onClick:t,className:`tm-btn-agree`,children:`Close`})})]})})]})}var g=`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideInLeft { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
  @keyframes slideInRight { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
  @keyframes float1 { 0%,100%{transform:translateY(0)translateX(0)} 33%{transform:translateY(-18px)translateX(8px)} 66%{transform:translateY(10px)translateX(-6px)} }
  @keyframes float2 { 0%,100%{transform:translateY(0)translateX(0)} 50%{transform:translateY(-24px)translateX(-12px)} }
  @keyframes float3 { 0%,100%{transform:translateY(0)rotate(0deg)} 50%{transform:translateY(-14px)rotate(180deg)} }
  @keyframes pulse { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.1);opacity:1} }
  @keyframes particleDrift { 0%{transform:translateY(0)translateX(0);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(-130px)translateX(15px);opacity:0} }
  @keyframes borderGlow { 0%,100%{box-shadow:0 0 0 3px rgba(212,160,23,.13)} 50%{box-shadow:0 0 0 4px rgba(212,160,23,.28)} }
  @keyframes badgePop { 0%{transform:scale(.8);opacity:0} 60%{transform:scale(1.06)} 100%{transform:scale(1);opacity:1} }
  @keyframes shimmer { 0%{left:-100%} 100%{left:160%} }
  @keyframes successPop { 0%{transform:scale(.85);opacity:0} 60%{transform:scale(1.04)} 100%{transform:scale(1);opacity:1} }

  .ul-page { min-height:100vh; display:flex; flex-direction:column; font-family:'DM Sans',sans-serif; background:#F8FAFC; overflow-x:hidden; }
  
  .ul-mobile-header { order:-1; width:100%; height:120px; background:linear-gradient(160deg,#060D1A 0%,#0F1D36 100%); display:flex; align-items:center; justify-content:flex-start; padding-left:24px; position:relative; overflow:hidden; border-bottom:1px solid rgba(255,255,255,0.08); }
  @media(min-width:768px){ .ul-mobile-header { display:none; } }

  .ul-mobile-header::before {
    content:''; position:absolute; inset:0;
    background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events:none;
  }

  .ul-left { order:2; width:100%; min-height:auto; background:linear-gradient(160deg,#060F1E 0%,#0B1F3E 45%,#162D52 100%); display:flex; flex-direction:column; padding:32px 24px; position:relative; overflow:hidden; }
  
  @media(min-width:768px) {
    .ul-page { flex-direction:row; }
    .ul-left { order:unset; width:44%; min-height:100vh; padding:44px 48px; border-right:1px solid rgba(255,255,255,0.05); }
  }

  /* Professional Entrance Animations */
  @keyframes fadeSlideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  
  .ul-stagger-in > * { animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
  .ul-stagger-in > *:nth-child(1) { animation-delay: 0.1s; }
  .ul-stagger-in > *:nth-child(2) { animation-delay: 0.2s; }
  .ul-stagger-in > *:nth-child(3) { animation-delay: 0.3s; }
  .ul-stagger-in > *:nth-child(4) { animation-delay: 0.4s; }
  .ul-stagger-in > *:nth-child(5) { animation-delay: 0.5s; }

  .ul-orb1{position:absolute;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(212,160,23,.1) 0%,transparent 70%);top:-80px;right:-80px;pointer-events:none;animation:float1 12s ease-in-out infinite}
  .ul-orb2{position:absolute;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(26,127,212,.08) 0%,transparent 70%);bottom:-40px;left:-60px;pointer-events:none;animation:float2 15s ease-in-out infinite}
  
  @media(min-width:768px) {
    .ul-orb1 { width:360px; height:360px; }
    .ul-orb2 { width:280px; height:280px; bottom:60px; }
  }

  .ul-particle{position:absolute;border-radius:50%;background:rgba(255,255,255,.2);pointer-events:none;animation:particleDrift linear infinite}
  
  .ul-logo { position:relative; z-index:2; padding:8px; }
  @media(max-width:767px){ .ul-logo { display:none; } }

  .ul-logo-m { position:relative; z-index:2; margin-bottom: 4px; }

  .ul-logo-inner{display:flex;align-items:center;gap:14px}
  .ul-logo-placeholder{ 
    width:42px; height:42px; border-radius:12px; 
    background:linear-gradient(135deg,#D4A017 0%,#F5C842 50%,#D4A017 100%);
    background-size: 200% 100%;
    animation: shimmer 3s infinite linear;
    display:flex; align-items:center; justify-content:center;
    overflow: hidden;
  }
  .ul-logo-img { width:100%; height:100%; object-fit:contain; }

  @media(min-width:768px){ .ul-logo-placeholder { width:52px; height:52px; border-radius:14px; } }

  .ul-logo-text .name{font-family:'Sora',sans-serif;font-size:18px;font-weight:700;color:#fff;letter-spacing:.5px;line-height:1.1}
  @media(min-width:768px){ .ul-logo-text .name { font-size:20px; } }

  .ul-logo-text .sub{font-size:9px;color:rgba(255,255,255,.5);letter-spacing:3px;text-transform:uppercase;margin-top:4px;font-weight:600}
  @media(min-width:768px){ .ul-logo-text .sub { font-size:10px; letter-spacing:3.5px; } }

  .ul-center{position:relative;z-index:2; margin-top:20px}
  @media(min-width:768px){ .ul-center { margin-top:0; } }

  .ul-tagline{font-family:'Sora',sans-serif;font-size:24px;font-weight:800;color:#fff;line-height:1.2;margin-bottom:12px;letter-spacing:-.8px; animation: fadeSlideUp 0.8s 0.2s both; }
  @media(min-width:768px){ .ul-tagline { font-size:32px; margin-bottom:16px; } }

  .ul-tagline span{color:#F5C842}
  .ul-tagline-sub{font-size:13px;color:rgba(255,255,255,.6);line-height:1.65;max-width:300px; animation: fadeSlideUp 0.8s 0.3s both; }
  @media(min-width:768px){ .ul-tagline-sub { font-size:14px; line-height:1.75; } }

  .ul-features{margin-top:24px;display:flex;flex-direction:column;gap:14px; animation: fadeSlideUp 0.8s 0.4s both; }
  @media(min-width:768px){ .ul-features { margin-top:36px; gap:16px; } }

  .ul-feature{display:flex;align-items:flex-start;gap:14px;transition:transform .2s ease}
  .ul-feature:hover{transform:translateX(5px)}
  .ul-feature-icon{width:34px;height:34px;border-radius:10px;flex-shrink:0;background:rgba(212,160,23,.12);border:1px solid rgba(212,160,23,.22);display:flex;align-items:center;justify-content:center;font-size:15px;color:#F5C842}
  @media(min-width:768px){ .ul-feature-icon { width:40px; height:40px; border-radius:12px; font-size:18px; } }

  .ul-feature-text .ft{font-size:13px;font-weight:600;color:#fff;margin-bottom:2px}
  .ul-feature-text .fs{font-size:11.5px;color:rgba(255,255,255,.45);line-height:1.4}

  .ul-divider-line{width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);margin:24px 0; animation: fadeSlideUp 0.8s 0.5s both; }
  .ul-trust{display:flex;gap:20px;flex-wrap:wrap; animation: fadeSlideUp 0.8s 0.6s both; }
  .ul-trust-item{display:flex;align-items:center;gap:8px;font-size:11.5px;color:rgba(255,255,255,.4);transition:color .2s}
  .ul-trust-item:hover{color:rgba(255,255,255,.6)}
  .ul-trust-dot{width:6px;height:6px;border-radius:50%;background:#F5C842;opacity:.6}
  
  .ul-footer{position:relative;z-index:2;font-size:11.5px;color:rgba(255,255,255,.25);animation:fadeSlideUp 0.8s 0.7s both; margin-top:32px; border-top:1px solid rgba(255,255,255,0.05); padding-top:16px}
  @media(min-width:768px){ .ul-footer { margin-top:0; border-top:none; padding-top:0} }

  .ul-right{order:1;width:100%;flex:none;display:flex;align-items:center;justify-content:center;padding:40px 20px;animation:fadeSlideUp .7s cubic-bezier(.22,1,.36,1) both;overflow-y:visible}
  @media(min-width:768px){
    .ul-right { order:unset; flex:1; width:auto; padding:48px 52px; overflow-y:auto; }
  }
  .ul-form-card{width:100%;max-width:460px; background:#fff; padding: 24px; border-radius:24px; box-shadow: 0 20px 50px rgba(0,0,0,0.04); }
  @media(min-width:768px){ .ul-form-card { padding: 40px; } }

  .ul-badge{display:inline-flex;align-items:center;gap:8px;background:#FEF9C3;border:1px solid rgba(255,200,0,0.25);border-radius:24px;padding:6px 18px;font-size:11px;font-weight:700;color:#854D0E;margin-bottom:24px;letter-spacing:1px;text-transform:uppercase}
  .ul-badge-dot{width:7px;height:7px;border-radius:50%;background:#D4A017;animation:pulse 2s infinite}
  
  .ul-title{font-family:'Sora',sans-serif;font-size:32px;font-weight:800;color:#0F172A;margin-bottom:8px;letter-spacing:-.8px}
  .ul-subtitle{font-size:14.5px;color:#64748B;margin-bottom:32px;line-height:1.5}
  
  .ul-tabs{display:flex;background:#F8FAFC;border:1px solid #F1F5F9;border-radius:16px;padding:5px;margin-bottom:32px}
  .ul-tab{flex:1;padding:12px;text-align:center;border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .25s ease;color:#94A3B8;background:transparent}
  .ul-tab.active{background:#fff;color:#0F172A;box-shadow:0 4px 12px rgba(0,0,0,0.06)}
  
  .ul-field{margin-bottom:20px}
  .ul-label{display:block;font-size:12.5px;font-weight:700;color:#475569;margin-bottom:8px;letter-spacing:.3px;text-transform:uppercase}
  
  .ul-input-wrap{position:relative; transition: transform .2s ease}
  .ul-input-wrap:focus-within { transform: translateY(-1px); }
  .ul-input-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:18px;color:#CBD5E1;pointer-events:none;transition:color .2s}
  .ul-input-wrap:focus-within .ul-input-icon { color:#D4A017; }
  
  .ul-input{width:100%;padding:14px 16px 14px 50px;font-size:15px;font-family:'DM Sans',sans-serif;border:2px solid #F1F5F9;border-radius:16px;background:#F8FAFC;color:#0F172A;outline:none;transition:all .25s cubic-bezier(0.22, 1, 0.36, 1)}
  .ul-input:focus{border-color:#D4A017;box-shadow:0 0 0 5px rgba(212,160,23,.08);background:#fff}
  .ul-input.error{border-color:#EF4444;background:#FEF2F2}
  
  .ul-submit{width:100%;padding:16px 0;font-size:15.5px;font-weight:700;font-family:'Sora',sans-serif;border:none;border-radius:16px;cursor:pointer;background:linear-gradient(135deg,#D4A017 0%,#B8860B 100%);color:#fff;letter-spacing:.5px;box-shadow:0 10px 25px rgba(212,160,23,.3);margin-top:24px;transition:all .25s ease;position:relative;overflow:hidden}
  .ul-submit:hover{box-shadow:0 12px 32px rgba(212,160,23,.42);transform:translateY(-2px)}
  .ul-submit:active{transform:translateY(0) scale(.98)}
  .ul-submit-blue{background:linear-gradient(135deg,#2563EB 0%,#1E40AF 100%);box-shadow:0 10px 25px rgba(37,99,235,0.25)}
  .ul-submit-blue:hover{box-shadow:0 12px 32px rgba(37,99,235,0.35)}
  
  @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; transform: scale(1.15); } 100% { opacity: 0.6; } }
  @keyframes successPop { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
  
  .ul-switch{margin-top:28px;text-align:center;font-size:14px;color:#94A3B8}
  .ul-switch button{background:none;border:none;color:#2563EB;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;transition:color .2s}
  .ul-switch button:hover{color:#1E40AF}
  
  @media(orientation:landscape) and (max-height:600px){
    .ul-page { flex-direction: row; }
    .ul-left { width: 35%; display: flex; }
    .ul-right { width: 65%; padding: 24px 20px; }
    .ul-center { display: none; }
    .ul-logo { margin-bottom: 0; }
  }
  .ul-form-card{width:100%;max-width:460px}
  .ul-badge{display:inline-flex;align-items:center;gap:7px;background:#FDF6DC;border:1px solid rgba(212,160,23,.35);border-radius:24px;padding:5px 16px;font-size:11px;font-weight:700;color:#A37800;margin-bottom:20px;letter-spacing:1px;animation:badgePop .5s .65s both}
  .ul-badge-dot{width:7px;height:7px;border-radius:50%;background:#D4A017;animation:pulse 2s 1s ease-in-out infinite}
  .ul-title{font-family:'Sora',sans-serif;font-size:28px;font-weight:800;color:#0B1F3E;margin-bottom:5px;letter-spacing:-.5px;animation:fadeUp .6s .72s both}
  .ul-subtitle{font-size:13.5px;color:#475569;margin-bottom:28px;animation:fadeUp .6s .78s both}
  .ul-tabs{display:flex;background:#F1F5F9;border-radius:12px;padding:4px;margin-bottom:24px;animation:fadeUp .6s .80s both}
  .ul-tab{flex:1;padding:9px;text-align:center;border-radius:9px;font-size:13px;font-weight:600;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .22s;color:#64748B;background:transparent}
  .ul-tab.active{background:#fff;color:#0B1F3E;box-shadow:0 2px 8px rgba(0,0,0,.1)}
  .ul-field{margin-bottom:16px}
  .ul-label{display:block;font-size:12px;font-weight:600;color:#475569;margin-bottom:7px;letter-spacing:.6px;text-transform:uppercase}
  .ul-input-wrap{position:relative}
  .ul-input-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:15px;color:#94A3B8;pointer-events:none}
  .ul-input{width:100%;padding:12px 14px 12px 44px;font-size:14px;font-family:'DM Sans',sans-serif;border:1.5px solid #E2E8F0;border-radius:12px;background:#FAFAFA;color:#0B1F3E;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
  .ul-input:focus{border-color:#D4A017;box-shadow:0 0 0 4px rgba(212,160,23,.1);background:#fff;animation:borderGlow 2s ease-in-out infinite}
  .ul-input.error{border-color:#EF4444}
  .ul-input.valid{border-color:#22C55E;background:#F0FDF4}
  .ul-eye{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#94A3B8;font-size:15px;padding:4px;transition:color .2s}
  .ul-eye:hover{color:#D4A017}
  .ul-error{font-size:12px;color:#EF4444;margin-top:5px}
  .ul-upload-area{border:2px dashed #E2E8F0;border-radius:12px;padding:18px 14px;text-align:center;cursor:pointer;transition:all .2s;background:#FAFAFA;position:relative}
  .ul-upload-area:hover{border-color:#D4A017;background:#FFFBF0}
  .ul-upload-area.has-file{border-color:#22C55E;background:#F0FDF4}
  .ul-upload-area input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
  .ul-upload-icon{font-size:22px;margin-bottom:4px}
  .ul-upload-label{font-size:12px;font-weight:600;color:#475569}
  .ul-upload-sub{font-size:11px;color:#94A3B8;margin-top:2px}
  .ul-upload-name{font-size:11px;color:#16A34A;margin-top:4px;font-weight:600}
  .ul-grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  .ul-submit{width:100%;padding:14px 0;font-size:15px;font-weight:700;font-family:'Sora',sans-serif;border:none;border-radius:12px;cursor:pointer;background:linear-gradient(135deg,#D4A017 0%,#B8860B 100%);color:#fff;letter-spacing:.4px;box-shadow:0 6px 20px rgba(212,160,23,.38);margin-top:18px;transition:box-shadow .25s,transform .15s;position:relative;overflow:hidden}
  .ul-submit::before{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);transform:skewX(-20deg)}
  .ul-submit:hover::before{animation:shimmer .55s ease forwards}
  .ul-submit:hover{box-shadow:0 8px 28px rgba(212,160,23,.48);transform:translateY(-1px)}
  .ul-submit:active{transform:scale(.98)}
  .ul-submit:disabled{opacity:.75;cursor:not-allowed}
  .ul-submit-blue{background:linear-gradient(135deg,#1A7FD4 0%,#0F5FA8 100%);box-shadow:0 6px 20px rgba(26,127,212,.38)}
  .ul-submit-blue:hover{box-shadow:0 8px 28px rgba(26,127,212,.48)}
  .ul-switch{margin-top:20px;text-align:center;font-size:13px;color:#94A3B8}
  .ul-switch button{background:none;border:none;color:#1A7FD4;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px}
  .ul-success{text-align:center;padding:32px 20px;animation:successPop .5s both}
  .ul-success-icon{font-size:56px;margin-bottom:16px}
  .ul-success-title{font-family:'Sora',sans-serif;font-size:22px;font-weight:800;color:#0B1F3E;margin-bottom:8px}
  .ul-success-sub{font-size:13.5px;color:#475569;line-height:1.7;max-width:320px;margin:0 auto 24px}
  .ul-success-tag{display:inline-flex;align-items:center;gap:8px;background:#FEF9C3;border:1px solid rgba(212,160,23,.3);border-radius:24px;padding:8px 20px;font-size:12px;font-weight:700;color:#A37800}
  .ul-footer-note{margin-top:24px;text-align:center;font-size:11.5px;color:#94A3B8}
  .ul-progress{display:flex;align-items:center;gap:0;margin-bottom:24px}
  .ul-step{display:flex;flex-direction:column;align-items:center;flex:1}
  .ul-step-dot{width:28px;height:28px;border-radius:50%;border:2px solid #E2E8F0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#94A3B8;background:#fff;transition:all .3s;position:relative;z-index:1}
  .ul-step-dot.done{background:#D4A017;border-color:#D4A017;color:#fff}
  .ul-step-dot.active{background:#0B1F3E;border-color:#0B1F3E;color:#fff}
  .ul-step-label{font-size:10px;color:#94A3B8;margin-top:4px;text-align:center;font-weight:600;letter-spacing:.3px}
  .ul-step-label.active{color:#0B1F3E}
  .ul-step-label.done{color:#D4A017}
  .ul-step-line{flex:1;height:2px;background:#E2E8F0;margin-top:-14px;transition:background .3s}
  .ul-step-line.done{background:#D4A017}

  /* Shop code input special style */
  .shop-code-input{width:100%;padding:12px 14px 12px 48px;font-size:16px;font-weight:700;font-family:'Sora',sans-serif;border:2px solid #E2E8F0;border-radius:12px;background:#FAFAFA;color:#0B1F3E;outline:none;letter-spacing:3px;text-transform:uppercase;transition:border-color .2s,box-shadow .2s; min-height:50px}
  @media(min-width:768px){ .shop-code-input { padding:14px 14px 14px 50px; font-size:18px; letter-spacing:4px; } }
  .shop-code-input:focus{border-color:#D4A017;box-shadow:0 0 0 4px rgba(212,160,23,.1);background:#fff}
  .shop-code-input.valid{border-color:#22C55E;background:#F0FDF4}
  .shop-code-input.error{border-color:#EF4444}
  .shop-code-verified{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#ECFDF5;border:1px solid #A7F3D0;border-radius:10px;font-size:13px;font-weight:600;color:#065F46;margin-top:8px}

  /* Landscape Phones */
  @media(orientation:landscape) and (max-height:600px){
    .ul-page { flex-direction: row; }
    .ul-left { width: 35%; display: flex; }
    .ul-right { width: 65%; padding: 24px 20px; }
    .ul-center { display: none; }
    .ul-logo { margin-bottom: 0; }
  }
`,_=[{left:`12%`,dur:`9s`,delay:`0s`,size:3},{left:`30%`,dur:`13s`,delay:`2s`,size:2},{left:`52%`,dur:`10s`,delay:`4s`,size:4},{left:`71%`,dur:`15s`,delay:`1s`,size:2},{left:`85%`,dur:`11s`,delay:`6s`,size:3}],v=[{icon:`🥇`,title:`Real-time Gold Rates`,sub:`Live rate updates from admin every day`},{icon:`📊`,title:`Track Your Investment`,sub:`See gold grams, value & history anytime`},{icon:`🛡️`,title:`Secure & Verified`,sub:`KYC verified accounts, encrypted data`}],y=[`Shop Code`,`Personal Info`,`Documents`,`Set Password`];function b({label:e,icon:t,name:n,file:r,onChange:i}){return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{className:`ul-label`,children:e}),(0,f.jsxs)(`div`,{className:`ul-upload-area${r?` has-file`:``}`,children:[(0,f.jsx)(`input`,{type:`file`,accept:`image/*,.pdf`,onChange:e=>i(n,e.target.files[0])}),(0,f.jsx)(`div`,{className:`ul-upload-icon`,children:r?`✅`:t}),(0,f.jsx)(`div`,{className:`ul-upload-label`,children:r?`File selected`:`Click to upload`}),r?(0,f.jsx)(`div`,{className:`ul-upload-name`,children:r.name}):(0,f.jsx)(`div`,{className:`ul-upload-sub`,children:`JPG, PNG or PDF · Max 5MB`})]})]})}function x({file:e,onChange:t}){let[n,r]=(0,l.useState)(`upload`),[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)(!1),[c,u]=(0,l.useState)(``),d=(0,l.useRef)(null),p=(0,l.useRef)(null),m=(0,l.useRef)(null),h=async()=>{u(``),s(!1);try{let e=await navigator.mediaDevices.getUserMedia({video:{facingMode:`user`},audio:!1});m.current=e,d.current&&(d.current.srcObject=e,d.current.play()),a(!0)}catch{u(`Camera access denied. Please allow camera permission and try again.`)}},g=()=>{m.current&&=(m.current.getTracks().forEach(e=>e.stop()),null),d.current&&(d.current.srcObject=null),a(!1)},_=()=>{let e=d.current,n=p.current;if(!e||!n)return;let r=n.getContext(`2d`);n.width=e.videoWidth||400,n.height=e.videoHeight||300,r.drawImage(e,0,0),n.toBlob(e=>{t(`userPhoto`,new File([e],`selfie_${Date.now()}.jpg`,{type:`image/jpeg`})),s(!0),g()},`image/jpeg`,.92)},v=()=>{t(`userPhoto`,null),s(!1),h()},y=e=>{n!==e&&(e!==`camera`&&g(),r(e),s(!1),u(``),e===`camera`&&setTimeout(h,100))};return(0,l.useEffect)(()=>()=>g(),[]),(0,l.useEffect)(()=>{i&&d.current&&m.current&&!d.current.srcObject&&(d.current.srcObject=m.current,d.current.play())},[i]),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Your Selfie / Photo`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:8,marginBottom:10},children:[{id:`upload`,label:`📁 Upload File`},{id:`camera`,label:`📷 Take Live Photo`}].map(e=>(0,f.jsx)(`button`,{type:`button`,onClick:()=>y(e.id),style:{padding:`8px 16px`,fontSize:12,fontWeight:600,border:n===e.id?`2px solid #D4A017`:`1.5px solid #E2E8F0`,borderRadius:9,cursor:`pointer`,fontFamily:`'DM Sans',sans-serif`,background:n===e.id?`#FDF6DC`:`#FAFAFA`,color:n===e.id?`#A37800`:`#64748B`,transition:`all 0.2s`},children:e.label},e.id))}),n===`upload`&&(0,f.jsxs)(`div`,{className:`ul-upload-area${e?` has-file`:``}`,children:[(0,f.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>{t(`userPhoto`,e.target.files[0]),s(!1)}}),(0,f.jsx)(`div`,{className:`ul-upload-icon`,children:e?`✅`:`🤳`}),(0,f.jsx)(`div`,{className:`ul-upload-label`,children:e?`File selected`:`Click to upload`}),e?(0,f.jsx)(`div`,{className:`ul-upload-name`,children:e.name}):(0,f.jsx)(`div`,{className:`ul-upload-sub`,children:`JPG or PNG · Max 5MB`})]}),n===`camera`&&(0,f.jsxs)(`div`,{style:{border:`2px dashed #D4A017`,borderRadius:12,overflow:`hidden`,background:`#11182B`,position:`relative`,minHeight:220},children:[!o&&(0,f.jsx)(`video`,{ref:d,autoPlay:!0,playsInline:!0,muted:!0,style:{width:`100%`,display:i?`block`:`none`,borderRadius:10}}),o&&e&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,padding:12},children:[(0,f.jsx)(`img`,{src:URL.createObjectURL(e),alt:`Captured selfie`,style:{width:`100%`,maxHeight:220,objectFit:`cover`,borderRadius:10}}),(0,f.jsx)(`div`,{style:{color:`#22C55E`,fontWeight:600,fontSize:13,marginTop:8},children:`✅ Photo captured!`})]}),!i&&!o&&!c&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,padding:`32px 16px`,color:`rgba(255,255,255,0.7)`},children:[(0,f.jsx)(`div`,{style:{fontSize:40,marginBottom:10},children:`📷`}),(0,f.jsx)(`div`,{style:{fontSize:13,marginBottom:16},children:`Click to start your camera`}),(0,f.jsx)(`button`,{type:`button`,onClick:h,style:{padding:`10px 24px`,background:`#D4A017`,color:`#fff`,border:`none`,borderRadius:9,cursor:`pointer`,fontWeight:600,fontSize:13},children:`Start Camera`})]}),c&&(0,f.jsxs)(`div`,{style:{padding:16,color:`#EF4444`,fontSize:12.5,textAlign:`center`,background:`rgba(255,255,255,0.97)`},children:[`⚠ `,c,(0,f.jsx)(`br`,{}),(0,f.jsx)(`button`,{type:`button`,onClick:h,style:{marginTop:10,padding:`8px 18px`,background:`#EF4444`,color:`#fff`,border:`none`,borderRadius:8,cursor:`pointer`,fontWeight:600,fontSize:12},children:`Try Again`})]}),(0,f.jsx)(`canvas`,{ref:p,style:{display:`none`}}),i&&!o&&(0,f.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`12px 0`,background:`rgba(0,0,0,0.65)`},children:(0,f.jsx)(`button`,{type:`button`,onClick:_,style:{padding:`11px 32px`,background:`#D4A017`,color:`#fff`,border:`none`,borderRadius:10,cursor:`pointer`,fontWeight:700,fontSize:14,boxShadow:`0 4px 16px rgba(212,160,23,0.45)`},children:`📸 Capture Photo`})}),o&&(0,f.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`10px 0`,background:`rgba(0,0,0,0.55)`,gap:10},children:(0,f.jsx)(`button`,{type:`button`,onClick:v,style:{padding:`9px 22px`,background:`#475569`,color:`#fff`,border:`none`,borderRadius:9,cursor:`pointer`,fontWeight:600,fontSize:13},children:`🔄 Retake`})})]})]})}function S({data:e,errors:t,onChange:n,onVerified:r}){let[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)(``),[c,u]=(0,l.useState)(``),d=async e=>{if(e.length<6){s(``),r(!1);return}a(!0),u(``),r(!1);try{let t=await fetch(`${ne}/api/auth/validate-shop/${e}`),n=await t.json();t.ok&&n.success?(s(n.shopName),r(!0)):(s(``),u(`Invalid shop code. Please check with your jeweller.`),r(!1))}catch{s(``),u(`Could not verify. Check your internet connection.`),r(!1)}finally{a(!1)}};return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{background:`#FDF6DC`,border:`1px solid rgba(212,160,23,.3)`,borderRadius:12,padding:`14px 16px`,marginBottom:20,fontSize:13,color:`#92400E`,lineHeight:1.7},children:[`📌 Ask your `,(0,f.jsx)(`b`,{children:`jeweller / gold shop`}),` for their unique `,(0,f.jsx)(`b`,{children:`Shop Code`}),` and enter it below. Your registration will be sent directly to them for approval.`]}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Shop Code`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`🏪`}),(0,f.jsx)(`input`,{className:`shop-code-input${t.shopCode?` error`:``}${o?` valid`:``}`,placeholder:`e.g. GOL-4821`,value:e.shopCode,maxLength:8,onChange:e=>{let t=e.target.value.toUpperCase();n(`shopCode`,t),s(``),u(``),t.length>=6&&d(t)}})]}),i&&(0,f.jsx)(`div`,{style:{fontSize:12,color:`#94A3B8`,marginTop:6},children:`🔍 Verifying shop code…`}),o&&(0,f.jsxs)(`div`,{className:`shop-code-verified`,children:[`✅ Verified — `,(0,f.jsx)(`b`,{children:o})]}),(c||t.shopCode)&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,c||t.shopCode]})]})]})}function C({data:e,errors:t,onChange:n}){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`ul-grid2`,children:[(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Full Name`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`👤`}),(0,f.jsx)(`input`,{className:`ul-input${t.name?` error`:``}`,placeholder:`Ravi Kumar`,value:e.name,onChange:e=>n(`name`,e.target.value)})]}),t.name&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,t.name]})]}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Phone`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`📱`}),(0,f.jsx)(`input`,{className:`ul-input${t.phone?` error`:``}`,placeholder:`9876543210`,value:e.phone,maxLength:10,onChange:e=>n(`phone`,e.target.value)})]}),t.phone&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,t.phone]})]})]}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Email Address`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`✉`}),(0,f.jsx)(`input`,{className:`ul-input${t.email?` error`:``}`,type:`email`,placeholder:`you@example.com`,value:e.email,onChange:e=>n(`email`,e.target.value)})]}),t.email&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,t.email]})]}),(0,f.jsxs)(`div`,{className:`ul-grid2`,children:[(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Date of Birth`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,style:{position:`relative`},children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`📅`}),(0,f.jsx)(`input`,{type:`date`,id:`dob-input`,className:`ul-input`,value:e.dateOfBirth,max:new Date().toISOString().split(`T`)[0],onChange:e=>n(`dateOfBirth`,e.target.value),style:{paddingRight:44}}),(0,f.jsx)(`button`,{type:`button`,onClick:()=>{let e=document.getElementById(`dob-input`);e&&(e.showPicker&&e.showPicker(),e.focus())},style:{position:`absolute`,right:10,top:`50%`,transform:`translateY(-50%)`,background:`linear-gradient(135deg,#D4A017,#B8860B)`,border:`none`,borderRadius:8,width:30,height:30,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:15,boxShadow:`0 2px 8px rgba(212,160,23,0.35)`,transition:`opacity 0.15s`},title:`Pick date of birth`,children:`📅`})]})]}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Occupation`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`💼`}),(0,f.jsx)(`input`,{className:`ul-input`,placeholder:`e.g. Farmer`,value:e.occupation,onChange:e=>n(`occupation`,e.target.value)})]})]})]}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Address`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`🏠`}),(0,f.jsx)(`input`,{className:`ul-input`,placeholder:`Street, City, State`,value:e.address,onChange:e=>n(`address`,e.target.value)})]})]})]})}function w({data:e,errors:t,onFileChange:n}){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{style:{fontSize:13,color:`#475569`,marginBottom:18,lineHeight:1.6,background:`#FDF6DC`,border:`1px solid rgba(212,160,23,.25)`,borderRadius:10,padding:`12px 14px`},children:`📋 Upload clear photos of your documents for KYC verification.`}),(0,f.jsx)(`div`,{style:{marginBottom:14},children:(0,f.jsx)(b,{label:`Aadhar Card`,icon:`📄`,name:`aadharCardPhoto`,file:e.aadharCardPhoto,onChange:n})}),(0,f.jsx)(x,{file:e.userPhoto,onChange:n}),t.docs&&(0,f.jsxs)(`div`,{className:`ul-error`,style:{marginTop:10},children:[`⚠ `,t.docs]})]})}function ee({data:e,errors:t,onChange:n}){let[r,i]=(0,l.useState)(!1),[a,o]=(0,l.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Create Password`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`🔒`}),(0,f.jsx)(`input`,{type:r?`text`:`password`,className:`ul-input${t.password?` error`:``}`,style:{paddingRight:44},placeholder:`Min. 6 characters`,value:e.password,onChange:e=>n(`password`,e.target.value)}),(0,f.jsx)(`button`,{className:`ul-eye`,onClick:()=>i(!r),children:r?`🙈`:`👁`})]}),t.password&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,t.password]})]}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Confirm Password`}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`🔒`}),(0,f.jsx)(`input`,{type:a?`text`:`password`,className:`ul-input${t.confirm?` error`:``}`,style:{paddingRight:44},placeholder:`Re-enter password`,value:e.confirm,onChange:e=>n(`confirm`,e.target.value)}),(0,f.jsx)(`button`,{className:`ul-eye`,onClick:()=>o(!a),children:a?`🙈`:`👁`})]}),t.confirm&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,t.confirm]})]}),(0,f.jsxs)(`div`,{style:{fontSize:12,color:`#64748B`,background:`#F8FAFC`,border:`1px solid #E2E8F0`,borderRadius:10,padding:`12px 14px`,lineHeight:1.8},children:[`✅ Your account will be reviewed by the admin`,(0,f.jsx)(`br`,{}),`✅ You'll be able to log in once approved`,(0,f.jsx)(`br`,{}),`✅ All data is encrypted and secure`]})]})}function te({onBack:e}){let[t,n]=(0,l.useState)(0),[r,i]=(0,l.useState)(!1),[a,o]=(0,l.useState)(!1),[s,c]=(0,l.useState)({}),[u,d]=(0,l.useState)(!1),[p,m]=(0,l.useState)(!1),[g,_]=(0,l.useState)(!1),[v,b]=(0,l.useState)(null),[x,te]=(0,l.useState)(!1),[T,E]=(0,l.useState)({shopCode:``,name:``,email:``,phone:``,address:``,dateOfBirth:``,occupation:``,password:``,confirm:``,aadharCardPhoto:null,userPhoto:null}),re=(e,t)=>{E(n=>({...n,[e]:t})),c(t=>({...t,[e]:``}))},D=(e,t)=>{E(n=>({...n,[e]:t})),c(e=>({...e,docs:``}))},ie=()=>{let e={};return t===0&&(T.shopCode.trim()?u||(e.shopCode=`Invalid shop code. Please enter a valid code from your jeweller.`):e.shopCode=`Shop code is required`),t===1&&(T.name.trim()||(e.name=`Full name is required`),(!T.phone||T.phone.length<10)&&(e.phone=`Valid 10-digit phone required`),T.email&&!/\S+@\S+\.\S+/.test(T.email)&&(e.email=`Valid email required`)),t===2&&(T.aadharCardPhoto||(e.docs=`Aadhar card photo is required`),T.userPhoto||(e.docs=`User photo is required`)),t===3&&((!T.password||T.password.length<6)&&(e.password=`Minimum 6 characters`),T.password!==T.confirm&&(e.confirm=`Passwords do not match`),g||(e.terms=`You must agree to the Terms and Conditions`)),e};return r?(0,f.jsxs)(`div`,{className:`ul-success`,children:[(0,f.jsx)(`div`,{className:`ul-success-icon`,children:`🎉`}),(0,f.jsx)(`div`,{className:`ul-success-title`,children:`Application Submitted!`}),(0,f.jsxs)(`div`,{className:`ul-success-sub`,children:[`Your registration has been sent to `,(0,f.jsx)(`b`,{children:T.shopCode.toUpperCase()}),`.`,(0,f.jsx)(`br`,{}),`The shop admin will review your documents and approve your account — usually within 24 hours.`]}),(0,f.jsx)(`div`,{className:`ul-success-tag`,children:`⏳ Pending Admin Approval`}),(0,f.jsx)(`div`,{style:{marginTop:20},children:(0,f.jsx)(`button`,{className:`ul-submit ul-submit-blue`,style:{marginTop:0},onClick:e,children:`← Back to Login`})})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`ul-progress`,children:y.map((e,n)=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flex:n<y.length-1?`1`:`0`},children:[(0,f.jsxs)(`div`,{className:`ul-step`,children:[(0,f.jsx)(`div`,{className:`ul-step-dot${n<t?` done`:n===t?` active`:``}`,children:n<t?`✓`:n+1}),(0,f.jsx)(`div`,{className:`ul-step-label${n<t?` done`:n===t?` active`:``}`,children:e})]}),n<y.length-1&&(0,f.jsx)(`div`,{className:`ul-step-line${n<t?` done`:``}`})]},e))}),t===0&&(0,f.jsx)(S,{data:T,errors:s,onChange:(e,t)=>{re(e,t),e===`shopCode`&&d(!1)},onVerified:d}),t===1&&(0,f.jsx)(C,{data:T,errors:s,onChange:re}),t===2&&(0,f.jsx)(w,{data:T,errors:s,onChange:re,onFileChange:D}),t===3&&(0,f.jsx)(ee,{data:T,errors:s,onChange:re}),t===3&&(0,f.jsxs)(`div`,{style:{marginTop:18,display:`flex`,flexDirection:`column`,gap:10},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:10,padding:`14px 16px`,background:g?`#ECFDF5`:`#F8FAFC`,border:`1.5px solid ${g?`#A7F3D0`:s.terms?`#EF4444`:`#E2E8F0`}`,borderRadius:14,transition:`all 0.2s`},children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`all-terms-cb`,checked:g,onChange:e=>{_(e.target.checked),e.target.checked&&c(e=>({...e,terms:``}))},style:{width:18,height:18,flexShrink:0,marginTop:2,accentColor:`#D4A017`,cursor:`pointer`}}),(0,f.jsxs)(`div`,{style:{flex:1},children:[(0,f.jsxs)(`label`,{htmlFor:`all-terms-cb`,style:{fontSize:13.5,color:`#334155`,cursor:`pointer`,lineHeight:1.5},children:[`I agree to the`,` `,(0,f.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),m(!0)},style:{background:`none`,border:`none`,color:`#1A7FD4`,fontWeight:700,cursor:`pointer`,textDecoration:`underline`,fontFamily:`inherit`,fontSize:13.5,padding:0},children:`Scheme Terms and Conditions`}),` `,`of this shop and the`,` `,(0,f.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),te(!0)},style:{background:`none`,border:`none`,color:`#1A7FD4`,fontWeight:700,cursor:`pointer`,textDecoration:`underline`,fontFamily:`inherit`,fontSize:13.5,padding:0},children:`SkyUp Platform Terms`}),` `,`governing this platform.`]}),(0,f.jsx)(`div`,{style:{fontSize:11,color:`#94A3B8`,marginTop:4},children:`Between you, the shop owner & SkyUp Digital Solutions`})]}),g&&(0,f.jsx)(`span`,{style:{fontSize:18,flexShrink:0},children:`✅`})]}),s.terms&&(0,f.jsxs)(`div`,{className:`ul-error`,style:{marginLeft:4,marginTop:-4},children:[`⚠ `,s.terms]})]}),s.submit&&(0,f.jsxs)(`div`,{className:`ul-error`,style:{marginTop:12},children:[`⚠ `,s.submit]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:18},children:[t>0&&(0,f.jsx)(`button`,{className:`ul-submit`,style:{background:`#F1F5F9`,color:`#0B1F3E`,boxShadow:`none`,flex:`0 0 100px`},onClick:()=>n(e=>e-1),children:`← Back`}),(0,f.jsx)(`button`,{className:`ul-submit`,style:{flex:1,opacity:a||t===3&&!g?.6:1},onClick:t===y.length-1?async()=>{let e=ie();if(Object.keys(e).length){c(e);return}c({}),o(!0);try{let e=new FormData;e.append(`shopCode`,T.shopCode.toUpperCase()),e.append(`name`,T.name),e.append(`email`,T.email),e.append(`phone`,T.phone),e.append(`password`,T.password),e.append(`address`,T.address),e.append(`dateOfBirth`,T.dateOfBirth),e.append(`occupation`,T.occupation),e.append(`agreedToTerms`,String(g)),e.append(`agreedTermsVersion`,String(v||1)),e.append(`agreedToPlatformTerms`,String(g)),T.aadharCardPhoto&&e.append(`aadharCardPhoto`,T.aadharCardPhoto),T.userPhoto&&e.append(`userPhoto`,T.userPhoto);let t=await fetch(`${ne}/api/auth/user/register`,{method:`POST`,body:e}),n=await t.json();if(!t.ok)throw Error(n.message||`Registration failed`);i(!0)}catch(e){c({submit:e.message})}finally{o(!1)}}:()=>{let e=ie();if(Object.keys(e).length){c(e);return}c({}),n(e=>e+1)},disabled:a||t===3&&!g,children:a?`Submitting…`:t===y.length-1?`Submit Application →`:`Continue →`})]}),(0,f.jsxs)(`div`,{className:`ul-switch`,children:[`Already have an account? `,(0,f.jsx)(`button`,{onClick:e,children:`Sign in`})]}),(0,f.jsx)(h,{open:p,onClose:()=>m(!1),mode:`agree`,shopCode:T.shopCode,onAgree:e=>{_(!0),b(e),m(!1),c(e=>({...e,terms:``}))}}),(0,f.jsx)(h,{open:x,onClose:()=>te(!1),mode:`platform-agree`,onAgree:()=>{_(!0),te(!1),c(e=>({...e,terms:``}))}})]})}function T({rejectReason:e,token:t,userName:n,onBack:r}){let[i,a]=(0,l.useState)(null),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(!1),[d,p]=(0,l.useState)(``),[m,h]=(0,l.useState)(!1);return m?(0,f.jsxs)(`div`,{className:`ul-success`,children:[(0,f.jsx)(`div`,{className:`ul-success-icon`,children:`🎉`}),(0,f.jsx)(`div`,{className:`ul-success-title`,children:`Resubmitted!`}),(0,f.jsxs)(`div`,{className:`ul-success-sub`,children:[`Your updated documents have been sent for review.`,(0,f.jsx)(`br`,{}),`The shop admin will review and approve your account — usually within 24 hours.`]}),(0,f.jsx)(`div`,{className:`ul-success-tag`,children:`⏳ Pending Admin Approval`}),(0,f.jsx)(`div`,{style:{marginTop:20},children:(0,f.jsx)(`button`,{className:`ul-submit ul-submit-blue`,style:{marginTop:0},onClick:r,children:`← Back to Login`})})]}):(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #FEF2F2 0%, #FFF5F5 100%)`,border:`1.5px solid #FECACA`,borderRadius:14,padding:`16px 18px`,marginBottom:22},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:8},children:[(0,f.jsx)(`span`,{style:{fontSize:20},children:`❌`}),(0,f.jsx)(`div`,{style:{fontWeight:700,fontSize:14,color:`#B91C1C`,fontFamily:`'Sora', sans-serif`},children:`Application Rejected`})]}),(0,f.jsxs)(`div`,{style:{fontSize:13,color:`#7F1D1D`,lineHeight:1.6},children:[(0,f.jsx)(`b`,{children:`Reason:`}),` `,e||`Contact your shop admin for details.`]})]}),(0,f.jsx)(`div`,{style:{background:`#FDF6DC`,border:`1px solid rgba(212,160,23,.3)`,borderRadius:12,padding:`12px 14px`,marginBottom:20,fontSize:13,color:`#92400E`,lineHeight:1.65},children:`📋 Upload corrected documents below and resubmit for admin review. You only need to re-upload the documents that were flagged.`}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsxs)(`label`,{className:`ul-label`,children:[`Aadhaar Card Photo `,(0,f.jsx)(`span`,{style:{color:`#94A3B8`,fontWeight:400},children:`(re-upload if rejected)`})]}),(0,f.jsxs)(`div`,{className:`ul-upload-area${i?` has-file`:``}`,children:[(0,f.jsx)(`input`,{type:`file`,accept:`image/*,.pdf`,onChange:e=>a(e.target.files[0])}),(0,f.jsx)(`div`,{className:`ul-upload-icon`,children:i?`✅`:`📄`}),(0,f.jsx)(`div`,{className:`ul-upload-label`,children:i?`File selected`:`Click to upload Aadhaar`}),i?(0,f.jsx)(`div`,{className:`ul-upload-name`,children:i.name}):(0,f.jsx)(`div`,{className:`ul-upload-sub`,children:`JPG, PNG or PDF · Max 5MB`})]})]}),(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsxs)(`label`,{className:`ul-label`,children:[`Your Selfie / Photo `,(0,f.jsx)(`span`,{style:{color:`#94A3B8`,fontWeight:400},children:`(re-upload if rejected)`})]}),(0,f.jsxs)(`div`,{className:`ul-upload-area${o?` has-file`:``}`,children:[(0,f.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>s(e.target.files[0])}),(0,f.jsx)(`div`,{className:`ul-upload-icon`,children:o?`✅`:`🤳`}),(0,f.jsx)(`div`,{className:`ul-upload-label`,children:o?`File selected`:`Click to upload selfie`}),o?(0,f.jsx)(`div`,{className:`ul-upload-name`,children:o.name}):(0,f.jsx)(`div`,{className:`ul-upload-sub`,children:`JPG or PNG · Max 5MB`})]})]}),d&&(0,f.jsxs)(`div`,{className:`ul-error`,style:{marginBottom:12},children:[`⚠ `,d]}),(0,f.jsx)(`button`,{className:`ul-submit`,onClick:async()=>{if(!i&&!o){p(`Please upload at least one updated document to resubmit.`);return}p(``),u(!0);try{let e=new FormData;i&&e.append(`aadharCardPhoto`,i),o&&e.append(`userPhoto`,o);let n=await fetch(`${ne}/api/auth/user/resubmit`,{method:`PUT`,headers:{Authorization:`Bearer ${t}`},body:e}),r=await n.json();if(!n.ok)throw Error(r.message||`Resubmission failed`);h(!0)}catch(e){p(e.message)}finally{u(!1)}},disabled:c,style:{marginTop:8},children:c?`Submitting…`:`🔄 Resubmit for Approval →`}),(0,f.jsx)(`div`,{className:`ul-switch`,style:{marginTop:14},children:(0,f.jsx)(`button`,{onClick:r,children:`← Back to Login`})})]})}function E({onLogin:e}){let[t,n]=(0,l.useState)(``),[r,i]=(0,l.useState)(``),[a,o]=(0,l.useState)(!1),[s,c]=(0,l.useState)({}),[u,d]=(0,l.useState)(!1),[p,m]=(0,l.useState)(`password`),[h,g]=(0,l.useState)(!1),[_,v]=(0,l.useState)(``),[y,b]=(0,l.useState)(!1),[x,S]=(0,l.useState)(``),[C,w]=(0,l.useState)(null),ee=async()=>{if(!t||t.length<10){c({phone:`Valid 10-digit phone number is required`});return}c({}),b(!0),S(``);try{let e=await fetch(`${ne}/api/auth/user/login/send-otp`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({phone:t})}),n=await e.json();if(!e.ok)throw Error(n.message||`Failed to send OTP`);g(!0),S(`✅ OTP sent successfully. Please check your SMS.`)}catch(e){c({submit:e.message})}finally{b(!1)}};return C?(0,f.jsx)(T,{rejectReason:C.rejectReason,token:C.token,userName:C.userName,onBack:()=>w(null)}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Phone Number`}),h&&(0,f.jsx)(`button`,{type:`button`,onClick:()=>{g(!1),v(``),S(``)},style:{background:`none`,border:`none`,color:`#D4A017`,fontWeight:700,fontSize:`11px`,cursor:`pointer`,fontFamily:`inherit`,textTransform:`uppercase`,display:`flex`,alignItems:`center`,gap:`2px`},children:`✏️ Edit Number`})]}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`📱`}),(0,f.jsx)(`input`,{className:`ul-input${s.phone?` error`:``}`,placeholder:`10-digit phone number`,value:t,maxLength:10,disabled:h,onChange:e=>{n(e.target.value),c(e=>({...e,phone:``}))}})]}),s.phone&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,s.phone]})]}),p===`password`?(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Password`}),(0,f.jsx)(`button`,{type:`button`,onClick:()=>{m(`otp`),c({}),g(!1),v(``)},style:{background:`none`,border:`none`,color:`#1A7FD4`,fontWeight:700,fontSize:`11.5px`,cursor:`pointer`,fontFamily:`inherit`,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`7px`},children:`Login with OTP`})]}),(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`🔒`}),(0,f.jsx)(`input`,{type:a?`text`:`password`,className:`ul-input${s.pass?` error`:``}`,style:{paddingRight:44},placeholder:`••••••••`,value:r,onChange:e=>{i(e.target.value),c(e=>({...e,pass:``}))}}),(0,f.jsx)(`button`,{className:`ul-eye`,onClick:()=>o(!a),children:a?`🙈`:`👁`})]}),s.pass&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,s.pass]}),(0,f.jsx)(`div`,{style:{marginTop:`12px`,display:`flex`,justifyContent:`flex-end`},children:(0,f.jsx)(`button`,{type:`button`,onClick:()=>{m(`otp`),c({}),g(!1),v(``)},style:{background:`none`,border:`none`,color:`#D4A017`,fontWeight:600,fontSize:`13px`,cursor:`pointer`,fontFamily:`inherit`,display:`flex`,alignItems:`center`,gap:`5px`},children:`🔑 Don't know password? Login with OTP`})})]}):(0,f.jsxs)(`div`,{className:`ul-field`,children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,f.jsx)(`label`,{className:`ul-label`,children:`Verification OTP`}),(0,f.jsx)(`button`,{type:`button`,onClick:()=>{m(`password`),c({})},style:{background:`none`,border:`none`,color:`#1A7FD4`,fontWeight:700,fontSize:`11.5px`,cursor:`pointer`,fontFamily:`inherit`,textTransform:`uppercase`,letterSpacing:`0.5px`,marginBottom:`7px`},children:`Login with Password`})]}),h?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`ul-input-wrap`,children:[(0,f.jsx)(`span`,{className:`ul-input-icon`,children:`🔑`}),(0,f.jsx)(`input`,{className:`ul-input${s.otp?` error`:``}`,placeholder:`Enter 6-digit OTP`,value:_,maxLength:6,onChange:e=>{v(e.target.value),c(e=>({...e,otp:``}))}})]}),s.otp&&(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,s.otp]}),x&&(0,f.jsx)(`div`,{style:{fontSize:`12.5px`,color:`#22C55E`,fontWeight:600,marginTop:`6px`},children:x}),(0,f.jsx)(`div`,{style:{textAlign:`right`,marginTop:`8px`},children:(0,f.jsx)(`button`,{type:`button`,onClick:ee,disabled:y,style:{background:`none`,border:`none`,color:`#D4A017`,fontWeight:700,fontSize:`12px`,cursor:`pointer`,fontFamily:`inherit`,textDecoration:`underline`},children:y?`Resending...`:`Resend OTP`})})]}):(0,f.jsx)(`button`,{className:`ul-submit`,onClick:ee,disabled:y,style:{marginTop:`4px`,background:`linear-gradient(135deg,#D4A017 0%,#B8860B 100%)`,boxShadow:`0 6px 20px rgba(212,160,23,.38)`},children:y?`Sending OTP...`:`⚡ Send OTP via SMS`})]}),(p===`password`||h)&&(0,f.jsx)(`button`,{className:`ul-submit ul-submit-blue`,onClick:async()=>{let n={};if((!t||t.length<10)&&(n.phone=`Valid 10-digit phone required`),p===`password`?(!r||r.length<6)&&(n.pass=`Minimum 6 characters`):(!_||_.length<6)&&(n.otp=`6-digit OTP code is required`),Object.keys(n).length){c(n);return}c({}),d(!0);try{let n=p===`password`?`${ne}/api/auth/user/login`:`${ne}/api/auth/user/login/verify-otp`,i=p===`password`?{phone:t,password:r}:{phone:t,otp:_},a=await fetch(n,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)}),o=await a.json();if(o.status===`rejected`){w({rejectReason:o.rejectReason||``,token:o.token,userName:o.user?.name||``}),d(!1);return}if(!a.ok)throw Error(o.message||`Login failed`);sessionStorage.setItem(`userToken`,o.token),sessionStorage.setItem(`userInfo`,JSON.stringify(o.user||{})),e(o)}catch(e){c(t=>({...t,submit:e.message}))}finally{d(!1)}},disabled:u,style:{opacity:u?.82:1},children:u?`Signing in…`:`Sign In →`}),s.submit&&(0,f.jsxs)(`div`,{style:{marginTop:14},children:[(0,f.jsxs)(`div`,{className:`ul-error`,children:[`⚠ `,s.submit]}),s.submit===`Invalid credentials`&&p===`password`&&(0,f.jsxs)(`div`,{style:{marginTop:10,padding:`12px`,background:`#FFFBEB`,border:`1px solid #FDE68A`,borderRadius:`10px`,fontSize:`13px`,color:`#B45309`,lineHeight:`1.5`,textAlign:`left`},children:[`💡 `,(0,f.jsx)(`b`,{children:`Forgot your password?`}),` You can log in instantly without a password by using OTP verification.`,(0,f.jsx)(`button`,{type:`button`,onClick:()=>{m(`otp`),c({}),g(!1),v(``)},style:{display:`block`,marginTop:`8px`,background:`#D4A017`,color:`#fff`,border:`none`,borderRadius:`6px`,padding:`6px 12px`,fontSize:`12px`,fontWeight:`700`,cursor:`pointer`},children:`Switch to OTP Login`})]})]})]})}var ne=`http://localhost:5000`;function re({onLogin:e,onAdminLogin:t}){let[n,r]=(0,l.useState)(`login`);return(0,l.useEffect)(()=>{let e=`ul-global-styles`;if(!document.getElementById(e)){let t=document.createElement(`style`);t.id=e,t.textContent=g,document.head.appendChild(t)}return()=>{let t=document.getElementById(e);t&&t.remove()}},[]),(0,f.jsxs)(`div`,{className:`ul-page`,children:[(0,f.jsx)(`div`,{className:`ul-mobile-header`,children:(0,f.jsx)(`div`,{className:`ul-logo-m`,children:(0,f.jsxs)(`div`,{className:`ul-logo-inner`,children:[(0,f.jsx)(`div`,{className:`ul-logo-placeholder`}),(0,f.jsxs)(`div`,{className:`ul-logo-text`,children:[(0,f.jsx)(`div`,{className:`name`,children:`SkyUp Digital`}),(0,f.jsx)(`div`,{className:`sub`,children:`Solution`})]})]})})}),(0,f.jsxs)(`div`,{className:`ul-left`,children:[(0,f.jsx)(`div`,{className:`ul-orb1`}),(0,f.jsx)(`div`,{className:`ul-orb2`}),(0,f.jsx)(`div`,{className:`ul-orb3`}),_.map((e,t)=>(0,f.jsx)(`div`,{className:`ul-particle`,style:{left:e.left,bottom:`0`,width:e.size,height:e.size,animationDuration:e.dur,animationDelay:e.delay}},t)),(0,f.jsx)(`div`,{className:`ul-logo`,children:(0,f.jsxs)(`div`,{className:`ul-logo-inner`,children:[(0,f.jsx)(`div`,{className:`ul-logo-placeholder`}),(0,f.jsxs)(`div`,{className:`ul-logo-text`,children:[(0,f.jsx)(`div`,{className:`name`,children:`SkyUp Digital`}),(0,f.jsx)(`div`,{className:`sub`,children:`Solution`})]})]})}),(0,f.jsxs)(`div`,{className:`ul-center`,children:[(0,f.jsxs)(`div`,{className:`ul-tagline`,children:[`Your `,(0,f.jsx)(`span`,{children:`Gold`}),` Investment`,(0,f.jsx)(`br`,{}),`Tracked & Secured`]}),(0,f.jsx)(`div`,{className:`ul-tagline-sub`,children:`Join your jeweller's gold savings scheme and track your investment in real time.`}),(0,f.jsx)(`div`,{className:`ul-features`,children:v.map(e=>(0,f.jsxs)(`div`,{className:`ul-feature`,children:[(0,f.jsx)(`div`,{className:`ul-feature-icon`,children:e.icon}),(0,f.jsxs)(`div`,{className:`ul-feature-text`,children:[(0,f.jsx)(`div`,{className:`ft`,children:e.title}),(0,f.jsx)(`div`,{className:`fs`,children:e.sub})]})]},e.title))}),(0,f.jsx)(`div`,{className:`ul-divider-line`}),(0,f.jsx)(`div`,{className:`ul-trust`,children:[`256-bit Encrypted`,`KYC Verified`,`RBI Compliant`].map(e=>(0,f.jsxs)(`div`,{className:`ul-trust-item`,children:[(0,f.jsx)(`div`,{className:`ul-trust-dot`}),e]},e))})]}),(0,f.jsx)(`div`,{className:`ul-footer`,children:`© 2025 SkyUp Digital Solution. All rights reserved.`})]}),(0,f.jsx)(`div`,{className:`ul-right`,children:(0,f.jsxs)(`div`,{className:`ul-form-card ul-stagger-in`,children:[(0,f.jsxs)(`div`,{className:`ul-badge`,children:[(0,f.jsx)(`div`,{className:`ul-badge-dot`}),`USER PORTAL`]}),n===`login`?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`ul-title`,children:`Welcome back 👋`}),(0,f.jsx)(`div`,{className:`ul-subtitle`,children:`Sign in to your investment account`}),(0,f.jsxs)(`div`,{className:`ul-tabs`,children:[(0,f.jsx)(`button`,{className:`ul-tab active`,children:`Sign In`}),(0,f.jsx)(`button`,{className:`ul-tab`,onClick:()=>r(`register`),children:`New Account`})]}),(0,f.jsx)(E,{onLogin:e}),(0,f.jsxs)(`div`,{className:`ul-switch`,style:{marginTop:14},children:[`Don't have an account? `,(0,f.jsx)(`button`,{onClick:()=>r(`register`),children:`Register here`})]}),t&&(0,f.jsx)(`div`,{className:`ul-switch`,style:{marginTop:8},children:(0,f.jsx)(`button`,{onClick:t,style:{color:`#94A3B8`},children:`← Go to Admin Login`})})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`ul-title`,children:`Create Account 📝`}),(0,f.jsx)(`div`,{className:`ul-subtitle`,children:`Apply for your investment account`}),(0,f.jsx)(te,{onBack:()=>r(`login`)})]}),(0,f.jsx)(`div`,{className:`ul-footer-note`,children:`🔐 Secure login · Powered by SkyUp Digital Solution`})]})})]})}var D=`http://localhost:5000`,ie=e=>{if(!e)return null;let t=e.replace(/\\/g,`/`);return t.startsWith(`http`)?t:t.startsWith(`uploads/`)?D+`/`+t:D+`/uploads/`+t.split(`/`).pop()},ae=`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=DM+Sans:wght@400;500;600;700&display=swap');

  :root{
    --bg:#05070F;
    --bg-elev:#0B0F1C;
    --surface:#10152A;
    --surface-2:#151B35;
    --line:rgba(232,185,72,0.12);
    --line-strong:rgba(232,185,72,0.28);
    --line-cool:rgba(148,163,184,0.10);
    --gold:#E8B948;
    --gold-bright:#F5D678;
    --gold-deep:#8B6914;
    --gold-glow:rgba(232,185,72,0.35);
    --text:#F5F7FB;
    --text-dim:#A7B0C3;
    --text-mute:#5C6580;
    --green:#22D3AA;
    --red:#F87171;
    --amber:#F59E0B;
  }

  .lv.light{
    --bg:#F8F4EA;
    --bg-elev:#FFFDF7;
    --surface:#FFFFFF;
    --surface-2:#FBF5E3;
    --line:rgba(139,105,20,0.15);
    --line-strong:rgba(139,105,20,0.28);
    --line-cool:rgba(11,15,28,0.08);
    --gold:#A47B10;
    --gold-bright:#D4A017;
    --gold-deep:#6B4E0C;
    --gold-glow:rgba(164,123,16,0.22);
    --text:#1A1408;
    --text-dim:#5B5240;
    --text-mute:#8A8166;
  }

  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg)}

  /* Number cells — simple, classy, tabular-aligned */
  .lv-num{ font-variant-numeric:tabular-nums; font-feature-settings:"tnum"; letter-spacing:-0.005em }
  .lv-meta{
    font-family:'DM Sans',sans-serif; font-weight:500;
    text-transform:uppercase; letter-spacing:0.11em;
  }

  .lv{
    min-height:100vh;
    background:var(--bg);
    color:var(--text);
    font-family:'DM Sans',sans-serif;
    position:relative;
    overflow-x:hidden;
  }

  /* ─── Atmospheric layers ───────────────────────────── */
  .lv-aurora{
    position:fixed; inset:0; pointer-events:none; z-index:0;
    background:
      radial-gradient(900px 600px at 15% -10%, rgba(232,185,72,0.10), transparent 60%),
      radial-gradient(700px 500px at 95% 10%, rgba(139,105,20,0.08), transparent 60%),
      radial-gradient(800px 700px at 50% 110%, rgba(232,185,72,0.06), transparent 60%);
  }
  .lv.light .lv-aurora{
    background:
      radial-gradient(900px 600px at 15% -10%, rgba(164,123,16,0.12), transparent 60%),
      radial-gradient(700px 500px at 95% 10%, rgba(212,160,23,0.10), transparent 60%);
  }
  .lv-grain{
    position:fixed; inset:0; pointer-events:none; z-index:1; opacity:0.35;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/></svg>");
    mix-blend-mode:overlay;
  }

  /* ─── Shimmer ───────────────────────────────── */
  .lv-shimmer{
    background:linear-gradient(100deg,
      var(--gold) 0%, var(--gold) 38%,
      var(--gold-bright) 48%, #FFF4C7 50%,
      var(--gold-bright) 52%, var(--gold) 62%,
      var(--gold) 100%);
    background-size:250% 100%;
    -webkit-background-clip:text; background-clip:text;
    -webkit-text-fill-color:transparent; color:transparent;
    animation:lvShimmer 5.5s linear infinite;
  }
  @keyframes lvShimmer{
    0%{background-position:200% 0}
    100%{background-position:-50% 0}
  }

  /* ─── Keyframes ───────────────────────────── */
  @keyframes lvRise{
    from{opacity:0; transform:translateY(16px)}
    to{opacity:1; transform:translateY(0)}
  }
  @keyframes lvRiseSmall{
    from{opacity:0; transform:translateY(6px)}
    to{opacity:1; transform:translateY(0)}
  }
  @keyframes lvFade{ from{opacity:0} to{opacity:1} }
  @keyframes lvPulse{
    0%,100%{opacity:1; transform:scale(1)}
    50%{opacity:0.4; transform:scale(0.85)}
  }
  @keyframes lvRingDraw{
    from{stroke-dashoffset:var(--lv-ring-full)}
    to{stroke-dashoffset:var(--lv-ring-offset)}
  }
  @keyframes lvBarFill{ from{width:0 !important} }
  @keyframes lvSpin{ to{transform:rotate(360deg)} }
  @keyframes lvSheen{
    0%{transform:translateX(-120%) skewX(-20deg)}
    100%{transform:translateX(220%) skewX(-20deg)}
  }

  /* ─── Header ───────────────────────────────── */
  .lv-header{
    position:sticky; top:0; z-index:50;
    backdrop-filter:blur(18px) saturate(140%);
    -webkit-backdrop-filter:blur(18px) saturate(140%);
    background:linear-gradient(to bottom, rgba(5,7,15,0.90), rgba(5,7,15,0.70));
    border-bottom:1px solid var(--line);
  }
  .lv.light .lv-header{
    background:linear-gradient(to bottom, rgba(248,244,234,0.92), rgba(248,244,234,0.70));
  }
  .lv-header-inner{
    max-width:1240px; margin:0 auto;
    padding:11px 22px;
    display:flex; align-items:center; justify-content:space-between;
    gap:14px;
  }
  .lv-user{ display:flex; align-items:center; gap:11px; min-width:0 }
  .lv-avatar{
    width:36px; height:36px; border-radius:11px; flex-shrink:0;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    display:flex; align-items:center; justify-content:center;
    color:#1A1408; font-family:'Fraunces',serif; font-weight:700; font-size:16px;
    box-shadow:0 4px 14px rgba(232,185,72,0.28), inset 0 1px 0 rgba(255,255,255,0.35);
    position:relative; overflow:hidden;
  }
  .lv-avatar::after{
    content:""; position:absolute; inset:0;
    background:linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%);
    animation:lvSheen 6s ease-in-out infinite;
  }
  .lv-user-meta{ min-width:0 }
  .lv-user-name{
    font-family:'Fraunces',serif; font-weight:600; font-size:15px;
    letter-spacing:-0.01em; color:var(--text);
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }
  .lv-user-id{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:10px;
    color:var(--text-mute); letter-spacing:0.08em; margin-top:1px;
    text-transform:uppercase;
    font-variant-numeric:tabular-nums;
  }

  .lv-header-right{ display:flex; align-items:center; gap:8px; flex-shrink:0; position:relative }

  .lv-ticker{
    display:none; align-items:center; gap:10px;
    padding:6px 11px; border-radius:10px;
    background:linear-gradient(135deg, rgba(232,185,72,0.10), rgba(139,105,20,0.04));
    border:1px solid var(--line-strong);
  }
  @media(min-width:720px){ .lv-ticker{ display:flex } }
  .lv-ticker-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9px;
    color:var(--text-dim); letter-spacing:0.14em; text-transform:uppercase;
    display:flex; align-items:center; gap:6px;
  }
  .lv-live-dot{
    width:5px; height:5px; border-radius:50%;
    background:var(--gold); box-shadow:0 0 8px var(--gold);
    animation:lvPulse 1.8s ease-in-out infinite;
  }
  .lv-ticker-price{
    font-family:'Fraunces',serif; font-weight:600; font-size:14px;
    color:var(--gold-bright); letter-spacing:-0.01em;
    font-variant-numeric:tabular-nums;
  }

  .lv-iconbtn{
    width:34px; height:34px; border-radius:10px;
    background:rgba(232,185,72,0.06); border:1px solid var(--line);
    color:var(--text); font-size:14px; cursor:pointer;
    display:flex; align-items:center; justify-content:center;
    transition:all 0.2s;
  }
  .lv-iconbtn:hover{ background:rgba(232,185,72,0.14); border-color:var(--line-strong) }
  
  .lv-input {
    width: 100%;
    background: var(--bg-elev);
    border: 1.5px solid var(--line);
    border-radius: 12px;
    padding: 12px 16px;
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
  }
  .lv-input:hover { border-color: var(--line-strong); background: var(--surface); }
  .lv-input:focus { border-color: var(--gold); background: var(--surface); box-shadow: 0 0 0 4px var(--gold-glow); }
  .lv-input::placeholder { color: var(--text-mute); }
  
  /* Date input specific fixes */
  .lv-input[type="date"] {
    position: relative;
    color-scheme: dark;
    -webkit-appearance: none;
    min-height: 48px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23E8B948' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='4' width='18' height='18' rx='2' ry='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/></svg>");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 18px;
  }
  .lv.light .lv-input[type="date"] { 
    color-scheme: light; 
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23A47B10' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='4' width='18' height='18' rx='2' ry='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/></svg>");
  }
  .lv-input::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: pointer;
  }
  
  .lv-form-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media(max-width:520px){
    .lv-form-grid-2 { grid-template-columns: 1fr; }
  }

  
  /* Table wrappers for responsiveness */
  .lv-table-wrap {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 20px;
    border-radius: 12px;
    border: 1px solid var(--line-cool);
    background: var(--surface);
  }
  .lv-table-wrap::-webkit-scrollbar { height: 4px; }
  .lv-table-wrap::-webkit-scrollbar-thumb { background: var(--line-strong); border-radius: 10px; }


  .lv-menu-overlay{ position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:40 }
  .lv-menu{
    position:absolute; top:calc(100% + 12px); right:0; z-index:70;
    min-width:200px; padding:6px 0; border-radius:12px;
    background:var(--surface); border:1px solid var(--line-strong);
    box-shadow:0 16px 40px rgba(0,0,0,0.5);
    animation:lvRiseSmall 0.2s ease both;
  }
  .lv-menu-rate{
    padding:11px 16px 10px;
    border-bottom:1px solid var(--line);
  }
  .lv-menu-rate-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9px;
    color:var(--text-mute); letter-spacing:0.14em; text-transform:uppercase;
    margin-bottom:3px;
  }
  .lv-menu-rate-val{
    font-family:'Fraunces',serif; font-weight:600; font-size:17px;
    color:var(--gold-bright); font-variant-numeric:tabular-nums;
    letter-spacing:-0.01em;
  }
  .lv-menu-item{
    display:flex; align-items:center; gap:11px; width:100%;
    padding:9px 16px; background:none; border:none; cursor:pointer;
    font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:500;
    color:var(--text-dim); text-align:left; transition:all 0.15s;
  }
  .lv-menu-item:hover{ background:rgba(232,185,72,0.08); color:var(--text) }

  /* ─── Main ─────────────────────────────────── */
  .lv-main{
    position:relative; z-index:2;
    max-width:1240px; margin:0 auto;
    padding:22px 22px 48px;
    min-width:0;
  }
  @media(max-width:640px){ .lv-main{ padding:18px 14px 48px; } }

  /* ─── Error banner ─────────────────────────── */
  .lv-error{
    display:flex; align-items:flex-start; gap:12px;
    padding:12px 16px; margin-bottom:18px;
    border-radius:12px;
    background:linear-gradient(135deg, rgba(248,113,113,0.10), rgba(248,113,113,0.04));
    border:1px solid rgba(248,113,113,0.28);
    animation:lvRiseSmall 0.35s ease both;
  }
  .lv-error-icon{ font-size:17px; color:var(--red); flex-shrink:0 }
  .lv-error-body{ flex:1; min-width:0 }
  .lv-error-title{ font-weight:700; font-size:13px; color:var(--red); margin-bottom:2px }
  .lv-error-msg{ font-size:12px; color:var(--text-dim) }
  .lv-error-btn{
    padding:7px 14px; border-radius:9px; border:none; cursor:pointer;
    background:var(--red); color:#fff; font-weight:600; font-size:11.5px;
    font-family:'DM Sans',sans-serif; flex-shrink:0;
    transition:transform 0.15s;
  }
  .lv-error-btn:hover{ transform:translateY(-1px) }
  .lv-error-btn:active{ transform:scale(0.97) }

  /* ─── Welcome ─────────────────────────────── */
  .lv-welcome{ margin-bottom:20px; animation:lvRise 0.6s 0.05s ease both }
  .lv-eyebrow{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:10px;
    color:var(--text-mute); letter-spacing:0.22em; text-transform:uppercase;
    margin-bottom:8px;
    display:flex; align-items:center; gap:10px;
  }
  .lv-eyebrow::before{
    content:""; width:24px; height:1px; background:var(--gold);
  }
  .lv-greeting{
    font-family:'Fraunces',serif; font-weight:500;
    font-size:clamp(26px, 4.5vw, 38px); line-height:1.05;
    letter-spacing:-0.025em; color:var(--text);
  }
  .lv-greeting .lv-name{
    font-style:italic; font-weight:600;
    background:linear-gradient(105deg, var(--gold-bright), var(--gold) 50%, var(--gold-deep));
    -webkit-background-clip:text; background-clip:text;
    -webkit-text-fill-color:transparent;
  }
  .lv-date{
    font-family:'DM Sans',sans-serif; font-size:12.5px;
    color:var(--text-dim); margin-top:8px;
  }

  /* ─── Hero: gold rate ─────────────────────── */
  .lv-hero{
    position:relative; overflow:hidden;
    border-radius:18px; padding:20px 22px; margin-bottom:18px;
    background:
      radial-gradient(600px 300px at 85% -20%, rgba(232,185,72,0.18), transparent 70%),
      linear-gradient(135deg, #0D1327 0%, #151B35 100%);
    border:1px solid var(--line-strong);
    box-shadow:0 14px 40px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04);
    animation:lvRise 0.7s 0.1s ease both;
    display:flex; flex-direction:column; gap:16px;
  }
  .lv.light .lv-hero{
    background:
      radial-gradient(600px 300px at 85% -20%, rgba(212,160,23,0.22), transparent 70%),
      linear-gradient(135deg, #FFF8E6 0%, #FDF3D4 100%);
    box-shadow:0 14px 36px rgba(139,105,20,0.15), inset 0 1px 0 rgba(255,255,255,0.6);
  }
  .lv-hero::before{
    content:""; position:absolute; top:-50%; right:-20%;
    width:320px; height:320px; border-radius:50%;
    background:radial-gradient(closest-side, var(--gold-glow), transparent 70%);
    pointer-events:none; filter:blur(30px);
  }
  .lv-hero-top{
    display:flex; flex-wrap:wrap; gap:16px;
    justify-content:space-between; align-items:flex-end;
    position:relative; z-index:2;
  }
  .lv-hero-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:10px;
    color:var(--text-dim); letter-spacing:0.18em; text-transform:uppercase;
    display:flex; align-items:center; gap:9px;
    margin-bottom:10px;
  }
  .lv.light .lv-hero-label{ color:#8B6914 }
  .lv-hero-price{
    font-family:'Fraunces',serif; font-weight:500;
    font-size:clamp(34px, 6vw, 52px); line-height:1;
    letter-spacing:-0.035em;
    display:flex; align-items:baseline; gap:1px;
    font-variant-numeric:tabular-nums;
  }
  .lv-hero-rupee{ font-weight:400; opacity:0.9 }
  .lv-hero-unit{
    font-family:'DM Sans',sans-serif; font-size:11.5px; font-weight:500;
    color:var(--text-dim); letter-spacing:0.1em; text-transform:uppercase;
    margin-left:11px; margin-bottom:7px;
  }
  .lv.light .lv-hero-unit{ color:#8B6914 }
  .lv-hero-empty{
    font-family:'Fraunces',serif; font-style:italic; font-weight:400;
    font-size:clamp(20px, 3.6vw, 26px); color:var(--text-mute);
  }
  .lv-hero-updated{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:10px;
    color:var(--text-mute); letter-spacing:0.08em; margin-top:8px;
    text-transform:uppercase;
  }
  .lv-hero-qtys{
    display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;
    position:relative; z-index:2;
    padding-top:14px;
    border-top:1px solid var(--line);
  }
  .lv-qty{
    padding:10px 13px; border-radius:11px;
    background:rgba(232,185,72,0.04);
    border:1px solid var(--line);
    transition:all 0.3s cubic-bezier(0.22,1,0.36,1);
  }
  .lv.light .lv-qty{ background:rgba(255,255,255,0.6) }
  .lv-qty:hover{
    background:rgba(232,185,72,0.10);
    border-color:var(--line-strong);
    transform:translateY(-2px);
  }
  .lv-qty-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9.5px;
    color:var(--text-mute); letter-spacing:0.14em; margin-bottom:4px;
    text-transform:uppercase;
  }
  .lv-qty-val{
    font-family:'Fraunces',serif; font-weight:600; font-size:15px;
    color:var(--gold-bright); letter-spacing:-0.01em;
    font-variant-numeric:tabular-nums;
  }
  .lv.light .lv-qty-val{ color:#8B6914 }

  /* ─── Stats ───────────────────────────────── */
  .lv-stats{
    display:grid; gap:10px; margin-bottom:22px;
    grid-template-columns:repeat(1, 1fr);
  }
  @media(min-width:560px){ .lv-stats{ grid-template-columns:repeat(2, 1fr) } }
  @media(min-width:960px){ .lv-stats{ grid-template-columns:repeat(4, 1fr) } }
  .lv-stat{
    position:relative; overflow:hidden;
    padding:14px 16px; border-radius:14px;
    background:var(--surface);
    border:1px solid var(--line-cool);
    opacity:0; animation:lvRise 0.55s ease both;
    transition:all 0.35s cubic-bezier(0.22,1,0.36,1);
  }
  .lv-stat:hover{
    transform:translateY(-3px);
    border-color:var(--line-strong);
    box-shadow:0 14px 28px rgba(0,0,0,0.28);
  }
  .lv.light .lv-stat:hover{ box-shadow:0 14px 28px rgba(139,105,20,0.10) }
  .lv-stat::before{
    content:""; position:absolute; top:0; left:0; right:0; height:1px;
    background:linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity:0; transition:opacity 0.3s;
  }
  .lv-stat:hover::before{ opacity:1 }
  .lv-stat-head{
    display:flex; justify-content:space-between; align-items:flex-start;
    margin-bottom:10px;
  }
  .lv-stat-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9.5px;
    color:var(--text-mute); letter-spacing:0.16em; text-transform:uppercase;
  }
  .lv-stat-icon{
    width:28px; height:28px; border-radius:8px;
    display:flex; align-items:center; justify-content:center;
    font-size:13px; flex-shrink:0;
  }
  .lv-stat-value{
    font-family:'Fraunces',serif; font-weight:600;
    font-size:22px; line-height:1.3; letter-spacing:-0.02em;
    margin-bottom:4px;
    font-variant-numeric:tabular-nums;
    padding-top: 2px;
  }
  .lv-stat-sub{
    font-size:11px; color:var(--text-mute);
    letter-spacing:0.02em;
  }

  /* ─── Tabs ─────────────────────────────── */
  .lv-tabs{
    display:flex; gap:3px; padding:4px;
    border-radius:12px;
    background:var(--surface); border:1px solid var(--line-cool);
    margin-bottom:16px; width:fit-content;
    animation:lvRiseSmall 0.5s 0.3s ease both; opacity:0;
    overflow-x:auto; max-width:100%;
    scrollbar-width:none;
  }
  .lv-tabs::-webkit-scrollbar{ display:none }
  .lv-tab{
    padding:8px 16px; border:none; cursor:pointer;
    font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:600;
    color:var(--text-mute); background:transparent;
    border-radius:9px; transition:all 0.25s;
    white-space:nowrap;
  }
  .lv-tab:hover{ color:var(--text) }
  .lv-tab.active{
    background:linear-gradient(135deg, var(--gold), var(--gold-deep));
    color:#1A1408;
    box-shadow:0 4px 14px rgba(232,185,72,0.25);
  }
  .lv.light .lv-tab.active{
    background:linear-gradient(135deg, var(--gold-bright), var(--gold));
    color:#1A1408;
  }

  /* ─── Scheme cards ──────────────────────── */
  .lv-schemes{ display:flex; flex-direction:column; gap:12px }
  .lv-scheme{
    position:relative; overflow:hidden;
    padding:18px 20px; border-radius:16px;
    background:var(--surface);
    border:1px solid var(--line-cool);
    opacity:0; animation:lvRise 0.6s ease both;
    transition:all 0.4s cubic-bezier(0.22,1,0.36,1);
  }
  .lv-scheme:hover{
    border-color:var(--line-strong);
    transform:translateY(-2px);
    box-shadow:0 18px 36px rgba(0,0,0,0.32);
  }
  .lv.light .lv-scheme:hover{ box-shadow:0 18px 36px rgba(139,105,20,0.10) }
  .lv-scheme::before{
    content:""; position:absolute; left:0; top:0; bottom:0; width:3px;
    background:linear-gradient(180deg, var(--gold-bright), var(--gold), var(--gold-deep));
    opacity:0.75;
  }
  .lv-scheme-head{
    display:flex; flex-wrap:wrap; gap:16px;
    justify-content:space-between; align-items:flex-start;
    margin-bottom:14px;
  }
  .lv-scheme-headL{ flex:1; min-width:0 }
  .lv-scheme-tags{ display:flex; align-items:center; gap:7px; margin-bottom:8px; flex-wrap:wrap }
  .lv-scheme-id{
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:10px;
    padding:3px 9px; border-radius:20px;
    background:rgba(232,185,72,0.12); color:var(--gold-bright);
    letter-spacing:0.1em; text-transform:uppercase;
  }
  .lv.light .lv-scheme-id{ color:var(--gold-deep); background:rgba(164,123,16,0.14) }
  .lv-scheme-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9.5px;
    color:var(--text-mute); letter-spacing:0.16em; margin-bottom:3px;
    text-transform:uppercase;
  }
  .lv-scheme-monthly{
    font-family:'Fraunces',serif; font-weight:600;
    font-size:22px; line-height:1.2; letter-spacing:-0.02em;
    color:var(--text); font-variant-numeric:tabular-nums;
    padding-top: 2px;
  }
  .lv-scheme-gold{
    font-family:'Fraunces',serif; font-weight:600; font-size:16px;
    letter-spacing:-0.01em; margin-top:4px;
    line-height: 1.4;
    font-variant-numeric:tabular-nums;
    padding-top: 4px;
  }
  .lv-scheme-gold-em{
    font-family:'DM Sans',sans-serif; font-size:11px;
    color:var(--text-mute); margin-top:1px;
    font-variant-numeric:tabular-nums;
  }

  /* Circular progress ring */
  .lv-ring-wrap{
    position:relative; width:96px; height:96px; flex-shrink:0;
  }
  .lv-ring{ transform:rotate(-90deg) }
  .lv-ring-bg{ stroke:var(--line-cool); fill:none }
  .lv-ring-fg{
    fill:none; stroke:url(#goldGrad);
    stroke-linecap:round;
    animation:lvRingDraw 1.4s cubic-bezier(0.22,1,0.36,1) 0.3s both;
  }
  .lv-ring-center{
    position:absolute; inset:0;
    display:flex; flex-direction:column;
    align-items:center; justify-content:center;
    text-align:center;
  }
  .lv-ring-pct{
    font-family:'Fraunces',serif; font-weight:600;
    font-size:19px; line-height:1.2; letter-spacing:-0.02em;
    color:var(--gold-bright); font-variant-numeric:tabular-nums;
    padding-top: 1px;
  }
  .lv.light .lv-ring-pct{ color:var(--gold-deep) }
  .lv-ring-sub{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9px;
    color:var(--text-mute); letter-spacing:0.12em; margin-top:2px;
    text-transform:uppercase;
  }

  .lv-scheme-actions{
    display:flex; gap:9px; margin-top:6px;
  }
  .lv-btn-ghost{
    padding:7px 13px; border-radius:9px;
    background:rgba(232,185,72,0.08); border:1px solid var(--line);
    color:var(--text); font-family:'DM Sans',sans-serif;
    font-weight:600; font-size:11.5px; cursor:pointer;
    display:inline-flex; align-items:center; gap:7px;
    transition:all 0.2s;
  }
  .lv-btn-ghost:hover{
    background:rgba(232,185,72,0.16); border-color:var(--line-strong);
    transform:translateY(-1px);
  }
  .lv-btn-ghost:active{ transform:scale(0.97) }

  .lv-scheme-bar{
    height:6px; border-radius:99px; overflow:hidden;
    background:var(--line-cool);
    margin:3px 0 12px;
  }
  .lv-scheme-bar-fill{
    height:100%; border-radius:99px;
    background:linear-gradient(90deg, var(--gold-deep), var(--gold) 50%, var(--gold-bright));
    box-shadow:0 0 12px rgba(232,185,72,0.45);
    animation:lvBarFill 1.3s cubic-bezier(0.22,1,0.36,1) 0.3s both;
    position:relative; overflow:hidden;
  }
  .lv-scheme-bar-fill::after{
    content:""; position:absolute; inset:0;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
    animation:lvSheen 3.5s ease-in-out infinite;
  }
  .lv-scheme-barmeta{
    display:flex; justify-content:space-between;
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:10.5px;
    color:var(--text-mute); letter-spacing:0.05em; margin-bottom:12px;
    font-variant-numeric:tabular-nums;
  }
  .lv-scheme-stats{
    display:grid; gap:8px;
    grid-template-columns:repeat(1, 1fr);
  }
  @media(min-width:560px){ .lv-scheme-stats{ grid-template-columns:repeat(3, 1fr) } }
  .lv-scheme-mini{
    padding:9px 12px; border-radius:10px;
    background:var(--surface-2); border:1px solid var(--line-cool);
  }
  .lv-scheme-mini-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9px;
    color:var(--text-mute); letter-spacing:0.16em; margin-bottom:3px;
    text-transform:uppercase;
  }
  .lv-scheme-mini-val{
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:12.5px;
    color:var(--text); font-variant-numeric:tabular-nums;
  }

  /* ─── Empty state ────────────────────────── */
  .lv-empty{
    text-align:center; padding:42px 22px; border-radius:16px;
    background:var(--surface); border:1px dashed var(--line-strong);
  }
  .lv-empty-icon{
    font-size:36px; color:var(--gold); margin-bottom:10px; opacity:0.85;
    font-family:'Fraunces',serif;
  }
  .lv-empty-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:18px;
    color:var(--text); margin-bottom:4px; letter-spacing:-0.01em;
  }
  .lv-empty-sub{ color:var(--text-dim); font-size:12.5px; margin-bottom:16px }
  .lv-btn-gold{
    padding:10px 22px; border:none; border-radius:10px; cursor:pointer;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold), var(--gold-deep));
    color:#1A1408; font-family:'DM Sans',sans-serif;
    font-weight:700; font-size:12.5px;
    box-shadow:0 6px 18px rgba(232,185,72,0.32);
    transition:all 0.2s;
    position:relative; overflow:hidden;
  }
  .lv-btn-gold::after{
    content:""; position:absolute; top:0; left:0; bottom:0; width:30%;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
    animation:lvSheen 3s ease-in-out infinite;
  }
  .lv-btn-gold:hover{ transform:translateY(-2px); box-shadow:0 10px 22px rgba(232,185,72,0.4) }
  .lv-btn-gold:active{ transform:scale(0.97) }
  .lv-btn-gold:disabled{ opacity:0.6; cursor:not-allowed; transform:none }

  /* ─── Browse grid ─────────────────────── */
  .lv-browse-head{
    margin-bottom:14px; animation:lvRiseSmall 0.5s ease both;
  }
  .lv-browse-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:18px;
    color:var(--text); letter-spacing:-0.02em; margin-bottom:3px;
  }
  .lv-browse-sub{ font-size:12.5px; color:var(--text-dim) }

  .lv-browse-grid{
    display:grid; gap:12px;
    grid-template-columns:repeat(auto-fill, minmax(270px, 1fr));
  }
  .lv-plan{
    position:relative; overflow:hidden;
    padding:16px 18px; border-radius:14px;
    background:var(--surface);
    border:1px solid var(--line-cool);
    transition:all 0.35s cubic-bezier(0.22,1,0.36,1);
    opacity:0; animation:lvRise 0.55s ease both;
  }
  .lv-plan:hover{
    transform:translateY(-3px);
    border-color:var(--line-strong);
    box-shadow:0 16px 32px rgba(0,0,0,0.26);
  }
  .lv-plan.approved{ border-color:rgba(34,211,170,0.45) }
  .lv-plan.pending{ border-color:var(--line-strong) }
  .lv-plan.rejected{ border-color:rgba(248,113,113,0.45) }
  .lv-plan-id{
    position:absolute; top:0; right:0;
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:9.5px;
    padding:4px 11px; border-bottom-left-radius:10px;
    background:rgba(232,185,72,0.14); color:var(--gold-bright);
    letter-spacing:0.12em; text-transform:uppercase;
  }
  .lv.light .lv-plan-id{ color:var(--gold-deep) }
  .lv-plan-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:16px;
    color:var(--text); letter-spacing:-0.01em;
    margin:6px 56px 2px 0; line-height:1.25;
  }
  .lv-plan-date{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:10px;
    color:var(--text-mute); letter-spacing:0.08em; margin-bottom:12px;
    text-transform:uppercase;
  }
  .lv-plan-duo{
    display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;
  }
  .lv-plan-cell{
    padding:9px 11px; border-radius:10px;
    background:var(--surface-2); border:1px solid var(--line-cool);
  }
  .lv-plan-cell-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9px;
    color:var(--text-mute); letter-spacing:0.16em; margin-bottom:3px;
    text-transform:uppercase;
  }
  .lv-plan-cell-val{
    font-family:'Fraunces',serif; font-weight:600; font-size:15px;
    letter-spacing:-0.01em; font-variant-numeric:tabular-nums;
  }
  .lv-plan-highlight{
    padding:10px 12px; border-radius:12px; margin-bottom:10px;
    background:linear-gradient(135deg, rgba(232,185,72,0.10), rgba(139,105,20,0.04));
    border:1px solid var(--line);
    display:grid; grid-template-columns:1fr auto 1fr auto 1fr; align-items:center; gap:6px;
  }
  .lv-plan-h-col{ min-width:0 }
  .lv-plan-h-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:8px;
    color:var(--text-mute); letter-spacing:0.16em; margin-bottom:2px;
    text-transform:uppercase;
  }
  .lv-plan-h-val{
    font-family:'Fraunces',serif; font-weight:600; font-size:12px;
    color:var(--gold-bright); letter-spacing:-0.01em;
    font-variant-numeric:tabular-nums;
  }
  .lv.light .lv-plan-h-val{ color:var(--gold-deep) }
  .lv-plan-h-plus{
    font-family:'Fraunces',serif; font-size:15px;
    color:var(--text-mute);
  }
  .lv-plan-state{
    padding:9px 12px; border-radius:9px; text-align:center;
    font-size:12px; font-weight:600;
  }
  .lv-plan-state.approved{
    background:rgba(34,211,170,0.12); color:var(--green);
    border:1px solid rgba(34,211,170,0.3);
  }
  .lv-plan-state.pending{
    background:rgba(245,158,11,0.12); color:var(--amber);
    border:1px solid rgba(245,158,11,0.3);
  }
  .lv-plan-state.rejected{
    background:rgba(248,113,113,0.12); color:var(--red);
    border:1px solid rgba(248,113,113,0.3);
  }
  .lv-plan-join{
    width:100%; padding:10px; border:none; border-radius:10px; cursor:pointer;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    color:#1A1408; font-family:'DM Sans',sans-serif;
    font-weight:700; font-size:12.5px;
    box-shadow:0 6px 18px rgba(232,185,72,0.28);
    transition:all 0.2s;
    position:relative; overflow:hidden;
  }
  .lv-plan-join::after{
    content:""; position:absolute; top:0; left:0; bottom:0; width:30%;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
    animation:lvSheen 3s ease-in-out infinite;
  }
  .lv-plan-join:hover{ transform:translateY(-2px); box-shadow:0 10px 22px rgba(232,185,72,0.38) }
  .lv-plan-join:active{ transform:scale(0.98) }
  .lv-plan-join:disabled{ opacity:0.6; cursor:not-allowed; transform:none }
  .lv-plan-msg{
    margin-top:8px; font-size:11.5px; font-weight:600; text-align:center;
  }
  .lv-plan-msg.ok{ color:var(--green) }
  .lv-plan-msg.err{ color:var(--red) }

  /* ─── Payment history ─────────────────── */
  .lv-payments{
    padding:18px 20px; border-radius:16px;
    background:var(--surface); border:1px solid var(--line-cool);
    animation:lvRiseSmall 0.5s ease both;
  }
  .lv-payments-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:17px;
    color:var(--text); letter-spacing:-0.01em; margin-bottom:14px;
  }
  .lv-tbl-wrap{ overflow-x:auto; -webkit-overflow-scrolling:touch }
  .lv-tbl{ width:100%; border-collapse:collapse; min-width:620px }
  .lv-tbl th{
    padding:8px 12px; text-align:left;
    font-family:'DM Sans',sans-serif; font-size:9.5px; font-weight:600;
    color:var(--text-mute); letter-spacing:0.16em;
    border-bottom:1px solid var(--line-cool);
    white-space:nowrap; text-transform:uppercase;
  }
  .lv-tbl td{
    padding:11px 12px; font-size:12.5px; color:var(--text-dim);
    border-bottom:1px solid var(--line-cool);
    vertical-align:middle;
    font-variant-numeric:tabular-nums;
  }

  /* ─── Scheme Square Cards ────────────────── */
  .lv-scheme-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 20px;
    animation: lvRise 0.6s ease both;
  }
  .lv-scheme-card {
    background: var(--surface);
    border: 1px solid var(--line-cool);
    border-radius: 20px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    position: relative;
  }
  .lv-scheme-card:hover {
    transform: translateY(-5px);
    border-color: var(--gold);
    box-shadow: 0 15px 30px rgba(0,0,0,0.25);
  }
  .lv-scheme-card.active {
    border-color: var(--gold);
    background: rgba(232,185,72,0.05);
    box-shadow: inset 0 0 0 2px var(--gold);
  }
  .lv-scheme-card-icon {
    font-size: 32px;
    margin-bottom: 12px;
  }
  .lv-scheme-card-title {
    font-family: 'Fraunces', serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
  }
  .lv-scheme-card-desc {
    font-size: 11px;
    color: var(--text-dim);
    line-height: 1.4;
  }

  /* ─── Custom Request Form ────────────────── */
  .lv-join-form {
    margin-top: 32px;
    padding: 38px;
    background: var(--surface);
    border-radius: 28px;
    border: 1px solid var(--line-strong);
    animation: lvRiseSmall 0.5s both;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    max-width: 600px;
  }
  .lv-form-head { margin-bottom: 28px }
  .lv-form-title {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    color: var(--gold-bright);
    margin-bottom: 8px;
  }
  .lv-form-info {
    font-size: 13px;
    color: var(--text-dim);
    line-height: 1.6;
    padding: 12px 16px;
    background: rgba(232,185,72,0.06);
    border-radius: 12px;
    border-left: 3px solid var(--gold);
  }
  .lv-input-group { margin-top: 24px; margin-bottom: 24px; }
  .lv-input-label {
    display: block;
    font-size: 11px;
    font-weight: 700;
    color: var(--text-mute);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
  .lv-main-input-wrap { position: relative; display: flex; align-items: center; }
  .lv-input-prefix {
    position: absolute; left: 18px;
    font-size: 18px; font-weight: 600; color: var(--gold);
  }
  .lv-main-input {
    width: 100%;
    background: var(--bg-elev);
    border: 1.5px solid var(--line-cool);
    border-radius: 14px;
    padding: 16px 18px 16px 42px;
    color: var(--text);
    font-size: 18px;
    font-family: inherit;
    font-weight: 600;
    outline: none;
    transition: all 0.3s;
  }
  .lv-main-input:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 4px rgba(232,185,72,0.15);
  }
  .lv-form-actions { display: flex; gap: 12px; align-items: center; }
  .lv-btn-submit {
    flex: 1;
    padding: 16px; border: none; border-radius: 14px; cursor: pointer;
    background: linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    color: #1A1408; font-family: inherit; font-weight: 700; font-size: 14px;
    box-shadow: 0 10px 20px rgba(232,185,72,0.3);
    transition: all 0.2s;
  }
  .lv-btn-submit:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(232,185,72,0.45); }
  .lv-btn-submit:active { transform: scale(0.98); }
  .lv-btn-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  .lv-tbl tbody tr{ transition:background 0.2s }
  .lv-tbl tbody tr:hover{ background:rgba(232,185,72,0.04) }
  .lv-num{ font-variant-numeric:tabular-nums }
  .lv-gold-text{ color:var(--gold-bright); font-weight:600 }
  .lv.light .lv-gold-text{ color:var(--gold-deep) }

  /* ─── Badge ───────────────────────────── */
  .lv-badge{
    display:inline-flex; align-items:center; gap:5px;
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:9.5px;
    padding:3px 9px; border-radius:20px;
    letter-spacing:0.12em; text-transform:uppercase;
  }
  .lv-badge::before{
    content:""; width:4px; height:4px; border-radius:50%;
    background:currentColor;
  }
  .lv-badge.active   { background:rgba(34,211,170,0.14);  color:var(--green) }
  .lv-badge.complete { background:rgba(59,130,246,0.14);  color:#60A5FA }
  .lv-badge.paid     { background:rgba(34,211,170,0.14);  color:var(--green) }
  .lv-badge.pending  { background:rgba(245,158,11,0.14);  color:var(--amber) }
  .lv-badge.overdue  { background:rgba(248,113,113,0.14); color:var(--red) }
  .lv-badge.approved { background:rgba(34,211,170,0.14);  color:var(--green) }
  .lv-badge.rejected { background:rgba(248,113,113,0.14); color:var(--red) }

  /* ─── Loading screen ──────────────────── */
  .lv-loader{
    min-height:100vh; display:flex; align-items:center; justify-content:center;
    background:var(--bg); position:relative; overflow:hidden;
  }
  .lv-loader-inner{ text-align:center; position:relative; z-index:2 }
  .lv-spinner{
    width:44px; height:44px; margin:0 auto 16px;
    border-radius:50%;
    border:2px solid rgba(232,185,72,0.15);
    border-top-color:var(--gold);
    animation:lvSpin 0.9s linear infinite;
  }
  .lv-loader-text{
    font-family:'Fraunces',serif; font-style:italic;
    font-size:14px; color:var(--text-dim);
  }

  /* ─── Modal ───────────────────────────── */
  .lv-modal-backdrop{
    position:fixed; inset:0; z-index:500;
    background:rgba(5,7,15,0.75);
    backdrop-filter:blur(8px);
    display:flex; align-items:center; justify-content:center;
    padding:18px 14px;
    animation:lvFade 0.25s ease both;
  }
  .lv-modal{
    width:100%; max-width:680px; max-height:85vh;
    border-radius:16px; overflow:hidden;
    background:var(--surface); border:1px solid var(--line-strong);
    box-shadow:0 30px 60px rgba(0,0,0,0.55);
    display:flex; flex-direction:column;
    animation:lvRise 0.4s cubic-bezier(0.22,1,0.36,1) both;
  }
  .lv-modal-head{
    padding:15px 20px;
    background:linear-gradient(135deg, #0D1327 0%, #151B35 100%);
    border-bottom:1px solid var(--line);
    display:flex; justify-content:space-between; align-items:flex-start; gap:14px;
  }
  .lv.light .lv-modal-head{
    background:linear-gradient(135deg, #FFF8E6 0%, #FDF3D4 100%);
  }
  .lv-modal-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:16px;
    color:var(--text); letter-spacing:-0.01em;
  }
  .lv-modal-sub{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:10.5px;
    color:var(--text-mute); letter-spacing:0.08em; margin-top:3px;
    text-transform:uppercase;
  }
  .lv-modal-close{
    width:28px; height:28px; border-radius:8px;
    background:rgba(232,185,72,0.08); border:1px solid var(--line);
    color:var(--text); font-size:14px; cursor:pointer;
    flex-shrink:0; transition:all 0.2s;
  }
  .lv-modal-close:hover{ background:rgba(232,185,72,0.16) }
  .lv-modal-body{
    flex:1; overflow-y:auto;
    padding:14px 18px;
  }
  .lv-modal-summary{
    margin-top:12px; padding:11px 14px;
    border-radius:12px;
    background:var(--surface-2); border:1px solid var(--line-cool);
    display:grid; grid-template-columns:1fr; gap:11px;
  }
  @media(min-width:520px){ .lv-modal-summary{ grid-template-columns:repeat(3, 1fr) } }
  .lv-sum-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9px;
    color:var(--text-mute); letter-spacing:0.16em; margin-bottom:3px;
    text-transform:uppercase;
  }
  .lv-sum-val{
    font-family:'Fraunces',serif; font-weight:600; font-size:15px;
    letter-spacing:-0.01em; font-variant-numeric:tabular-nums;
  }

  /* ─── Payment modal ─────────────────────── */
  .lv-pay-modal{
    width:95%; max-width:520px; max-height:92vh;
    border-radius:24px;
    background:var(--surface); border:1px solid var(--line-strong);
    box-shadow:0 40px 100px rgba(0,0,0,0.7);
    display:flex; flex-direction:column;
    animation:lvRise 0.4s cubic-bezier(0.22,1,0.36,1) both;
    position:relative;
  }
  @media(max-width:520px){
    .lv-pay-modal { width: 98%; border-radius: 20px; }
  }


  .lv-pay-head{
    position:relative; padding:20px 22px 18px;
    background:
      radial-gradient(400px 200px at 100% -20%, rgba(232,185,72,0.22), transparent 70%),
      linear-gradient(135deg, #0D1327 0%, #151B35 100%);
    border-bottom:1px solid var(--line);
  }
  .lv.light .lv-pay-head{
    background:
      radial-gradient(400px 200px at 100% -20%, rgba(212,160,23,0.25), transparent 70%),
      linear-gradient(135deg, #FFF8E6 0%, #FDF3D4 100%);
  }
  .lv-pay-head-row{
    display:flex; justify-content:space-between; align-items:flex-start; gap:12px;
  }
  .lv-pay-eyebrow{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9.5px;
    color:var(--text-mute); letter-spacing:0.18em; text-transform:uppercase;
    display:flex; align-items:center; gap:8px;
    margin-bottom:6px;
  }
  .lv-pay-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:19px;
    color:var(--text); letter-spacing:-0.015em; line-height:1.2;
  }
  .lv-pay-amount{
    font-family:'Fraunces',serif; font-weight:600; font-size:26px;
    color:var(--gold-bright); letter-spacing:-0.02em;
    font-variant-numeric:tabular-nums; margin-top:8px;
  }
  .lv.light .lv-pay-amount{ color:var(--gold-deep) }
  .lv-pay-scheme-tag{
    display:inline-block; margin-top:5px;
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:10px;
    padding:3px 9px; border-radius:20px;
    background:rgba(232,185,72,0.14); color:var(--gold-bright);
    letter-spacing:0.1em; text-transform:uppercase;
  }
  .lv.light .lv-pay-scheme-tag{ color:var(--gold-deep) }

  .lv-pay-body{
    flex:1; overflow-y:auto; overflow-x:visible;
    padding:24px 32px 60px; /* Added 60px bottom padding for pickers */
  }
  @media(max-width:520px){
    .lv-pay-body { padding: 20px 16px 80px; } /* Even more on mobile */
  }


  .lv-pay-step-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9.5px;
    color:var(--text-mute); letter-spacing:0.18em; text-transform:uppercase;
    margin-bottom:10px; text-align:center;
  }

  /* ─── QR Card — PhonePe-inspired dark card with gold accents ─── */
  .lv-qr-card{
    position:relative;
    width:260px; margin:0 auto;
    border-radius:22px; padding:16px 14px 14px;
    background:linear-gradient(165deg, #1A2038 0%, #0A0E1C 100%);
    box-shadow:
      0 20px 50px rgba(0,0,0,0.5),
      0 0 0 1px rgba(232,185,72,0.25),
      inset 0 1px 0 rgba(255,255,255,0.05);
    animation:lvRiseSmall 0.45s ease both;
  }
  /* Light mode: keep the card dark for authentic UPI feel, just soften the glow */
  .lv.light .lv-qr-card{
    box-shadow:
      0 20px 40px rgba(139,105,20,0.25),
      0 0 0 1px rgba(212,160,23,0.4),
      inset 0 1px 0 rgba(255,255,255,0.05);
  }
  /* Gold accent border glow */
  .lv-qr-card::before{
    content:""; position:absolute; inset:-1px;
    border-radius:22px; padding:1px;
    background:linear-gradient(135deg, var(--gold-bright), transparent 40%, transparent 60%, var(--gold-deep));
    -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor; mask-composite:exclude;
    pointer-events:none; opacity:0.7;
  }

  /* Bank row at the top — "Axis Bank - 7317" */
  .lv-qr-bank{
    display:flex; align-items:center; gap:10px;
    padding:6px 6px 10px;
    margin-bottom:10px;
  }
  .lv-qr-bank-logo{
    width:32px; height:32px; border-radius:50%; flex-shrink:0;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    display:flex; align-items:center; justify-content:center;
    color:#1A1408; font-family:'Fraunces',serif; font-weight:700; font-size:16px;
    box-shadow:0 2px 8px rgba(232,185,72,0.35);
    font-style:italic;
  }
  .lv-qr-bank-name{
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:15px;
    color:#F5F7FB; letter-spacing:-0.005em;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }

  /* QR image container */
  .lv-qr-inner{
    position:relative;
    width:100%; aspect-ratio:1;
    border-radius:14px;
    background:#fff; padding:10px;
    overflow:hidden;
  }
  .lv-qr-inner img{
    display:block; width:100%; height:100%;
    object-fit:contain;
  }

  /* Center logo overlay — sits in the middle of the QR */
  .lv-qr-center{
    position:absolute; top:50%; left:50%;
    transform:translate(-50%, -50%);
    width:48px; height:48px; border-radius:50%;
    background:#0A0E1C;
    display:flex; align-items:center; justify-content:center;
    border:3px solid #fff;
    box-shadow:0 3px 10px rgba(0,0,0,0.4);
  }
  .lv-qr-center-inner{
    font-family:'Fraunces',serif; font-weight:700; font-size:22px;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold-deep));
    -webkit-background-clip:text; background-clip:text;
    -webkit-text-fill-color:transparent;
    line-height:1;
  }

  /* Gold corner brackets on the dark card */
  .lv-qr-corner{
    position:absolute; width:22px; height:22px;
    border:2px solid var(--gold);
    z-index:3;
  }
  .lv-qr-corner.tl{ top:8px;    left:8px;    border-right:none; border-bottom:none; border-top-left-radius:6px }
  .lv-qr-corner.tr{ top:8px;    right:8px;   border-left:none;  border-bottom:none; border-top-right-radius:6px }
  .lv-qr-corner.bl{ bottom:8px; left:8px;    border-right:none; border-top:none;    border-bottom-left-radius:6px }
  .lv-qr-corner.br{ bottom:8px; right:8px;   border-left:none;  border-top:none;    border-bottom-right-radius:6px }

  /* Empty state — no QR uploaded yet */
  .lv-qr-empty{
    width:260px; margin:0 auto;
    border-radius:22px;
    background:linear-gradient(165deg, #1A2038 0%, #0A0E1C 100%);
    border:1.5px dashed rgba(232,185,72,0.3);
    padding:44px 22px;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    color:var(--text-mute); text-align:center;
  }
  .lv-qr-empty-icon{
    font-size:34px; margin-bottom:10px; opacity:0.55;
    font-family:'Fraunces',serif; color:var(--gold);
  }
  .lv-qr-empty-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:14px;
    color:#E2E8F0; margin-bottom:4px;
  }
  .lv-qr-empty-sub{ font-size:11px; letter-spacing:0.02em; color:#94A3B8 }

  .lv-pay-shop{
    margin-top:22px; text-align:center;
    display:flex; flex-direction:column; align-items:center;
  }
  .lv-pay-shop-name{
    font-family:'Fraunces',serif; font-weight:600; font-size:18px;
    color:var(--text); letter-spacing:-0.01em; margin-bottom:3px;
  }
  .lv-pay-shop-owner{
    font-family:'DM Sans',sans-serif; font-size:12.5px;
    color:var(--text-dim); margin-bottom:14px;
  }
  .lv-pay-shop-owner .lv-pay-shop-owner-label{
    font-style:italic; color:var(--text-mute);
  }

  /* UPI payee name — shown between "Owner · X" and the phone pill.
     This is the name that UPI apps display when users scan the QR. */
  .lv-pay-payee{
    display:inline-flex; align-items:center; gap:9px;
    padding:9px 16px; margin-bottom:12px;
    border-radius:10px;
    background:rgba(232,185,72,0.06);
    border:1px solid var(--line);
    max-width:320px;
    width:fit-content;
  }
  .lv-pay-payee-icon{
    width:22px; height:22px; border-radius:6px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold-deep));
    color:#1A1408; font-family:'Fraunces',serif; font-weight:700; font-size:11px;
    box-shadow:0 2px 6px rgba(232,185,72,0.3);
  }
  .lv-pay-payee-text{
    display:flex; flex-direction:column; align-items:flex-start; min-width:0;
  }
  .lv-pay-payee-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:8.5px;
    color:var(--text-mute); letter-spacing:0.16em; text-transform:uppercase;
    margin-bottom:1px;
  }
  .lv-pay-payee-name{
    font-family:'Fraunces',serif; font-weight:600; font-size:14px;
    color:var(--text); letter-spacing:-0.005em;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    max-width:240px;
  }

  .lv-pay-phone{
    display:flex; align-items:stretch; gap:8px;
    padding:4px 4px 4px 16px; border-radius:12px;
    background:var(--surface-2); border:1px solid var(--line);
    max-width:300px; width:100%; margin:0 auto;
    transition:border-color 0.2s;
  }
  .lv-pay-phone:hover{ border-color:var(--line-strong) }
  .lv-pay-phone-val{
    flex:1; display:flex; align-items:center; gap:8px;
    font-family:'Fraunces',serif; font-weight:600; font-size:17px;
    color:var(--text); letter-spacing:-0.005em;
    font-variant-numeric:tabular-nums;
  }
  .lv-pay-phone-icon{
    font-size:14px; color:var(--gold); opacity:0.85;
  }
  .lv-pay-copy{
    padding:8px 14px; border:none; border-radius:9px;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    color:#1A1408; font-family:'DM Sans',sans-serif;
    font-weight:700; font-size:11.5px;
    cursor:pointer; transition:all 0.2s;
    display:inline-flex; align-items:center; gap:6px;
    letter-spacing:0.04em;
    flex-shrink:0;
  }
  .lv-pay-copy:hover{ transform:translateY(-1px); box-shadow:0 6px 14px rgba(232,185,72,0.35) }
  .lv-pay-copy:active{ transform:scale(0.96) }
  .lv-pay-copy.copied{
    background:linear-gradient(135deg, #22D3AA, #10B981);
    color:#fff;
  }

  .lv-pay-upi{
    margin-top:14px; padding:10px 14px;
    border-radius:10px;
    background:rgba(232,185,72,0.06); border:1px dashed var(--line);
    text-align:center;
  }
  .lv-pay-upi-label{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9.5px;
    color:var(--text-mute); letter-spacing:0.18em; text-transform:uppercase;
    margin-bottom:3px;
  }
  .lv-pay-upi-val{
    font-family:'Fraunces',serif; font-weight:600; font-size:14px;
    color:var(--gold-bright); word-break:break-all;
  }
  .lv.light .lv-pay-upi-val{ color:var(--gold-deep) }

  .lv-pay-note{
    margin-top:20px; padding:13px 15px;
    border-radius:12px;
    background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.2);
    display:flex; align-items:flex-start; gap:10px;
  }
  .lv-pay-note-icon{
    font-size:14px; color:#60A5FA; flex-shrink:0; line-height:1.5;
  }
  .lv-pay-note-body{
    font-size:12px; color:var(--text-dim); line-height:1.5;
  }
  .lv-pay-note-body b{ color:var(--text); font-weight:600 }

  /* ─── Step 2: Upload screenshot ─────────────────────────── */
  .lv-pay-divider{
    display:flex; align-items:center; gap:12px;
    margin:22px 0 16px;
  }
  .lv-pay-divider::before, .lv-pay-divider::after{
    content:""; flex:1; height:1px;
    background:linear-gradient(90deg, transparent, var(--line-strong), transparent);
  }
  .lv-pay-divider-text{
    font-family:'DM Sans',sans-serif; font-weight:500; font-size:9.5px;
    color:var(--text-mute); letter-spacing:0.18em; text-transform:uppercase;
    flex-shrink:0;
  }

  .lv-pay-upload{
    position:relative;
    border:1.5px dashed var(--line-strong);
    border-radius:14px;
    padding:22px 20px;
    text-align:center; cursor:pointer;
    transition:all 0.25s cubic-bezier(0.22,1,0.36,1);
    background:rgba(232,185,72,0.03);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    width:100%; box-sizing:border-box;
  }
  .lv-pay-upload:hover{
    border-color:var(--gold);
    background:rgba(232,185,72,0.08);
    transform:translateY(-1px);
  }
  .lv-pay-upload.has-file{
    border-style:solid;
    border-color:rgba(34,211,170,0.45);
    background:rgba(34,211,170,0.06);
  }
  .lv-pay-upload input[type="file"]{
    position:absolute; inset:0; opacity:0; cursor:pointer; width:100%; height:100%;
  }
  .lv-pay-upload-icon{
    width:44px; height:44px; margin:0 auto 10px;
    border-radius:12px;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    display:flex; align-items:center; justify-content:center;
    color:#1A1408; font-size:20px; font-weight:700;
    box-shadow:0 4px 12px rgba(232,185,72,0.3);
    flex-shrink:0;
  }
  .lv-pay-upload.has-file .lv-pay-upload-icon{
    background:linear-gradient(135deg, #22D3AA, #10B981);
    color:#fff;
  }
  .lv-pay-upload-title{
    font-family:'Fraunces',serif; font-weight:600; font-size:14px;
    color:var(--text); letter-spacing:-0.005em; margin-bottom:3px; text-align:center;
  }
  .lv-pay-upload-sub{
    font-family:'DM Sans',sans-serif; font-size:11px;
    color:var(--text-mute); letter-spacing:0.02em; text-align:center;
  }
  .lv-pay-upload-filename{
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:12px;
    color:var(--green); margin-top:4px; word-break:break-all; text-align:center;
  }

  .lv-pay-preview{
    margin-top:12px; padding:6px;
    border-radius:12px;
    background:var(--surface-2);
    border:1px solid var(--line-cool);
    position:relative;
  }
  .lv-pay-preview img{
    display:block; width:100%; max-height:220px;
    object-fit:contain; border-radius:8px;
    background:#000;
  }
  .lv-pay-preview-close{
    position:absolute; top:10px; right:10px;
    width:26px; height:26px; border-radius:50%;
    background:rgba(0,0,0,0.65); color:#fff;
    border:none; cursor:pointer; font-size:13px;
    display:flex; align-items:center; justify-content:center;
    backdrop-filter:blur(4px);
  }
  .lv-pay-preview-close:hover{ background:rgba(0,0,0,0.85) }

  .lv-pay-textarea{
    width:100%; margin-top:10px; padding:10px 12px;
    font-family:'DM Sans',sans-serif; font-size:12.5px;
    color:var(--text); background:var(--surface-2);
    border:1px solid var(--line-cool); border-radius:10px;
    resize:vertical; min-height:60px;
    transition:border-color 0.2s;
  }
  .lv-pay-textarea:focus{
    outline:none; border-color:var(--gold);
    background:var(--surface);
  }
  .lv-pay-textarea::placeholder{ color:var(--text-mute) }

  /* ─── Proof type tabs ───────────────────────────── */
  .lv-pay-proof-tabs{
    display:flex; gap:8px; margin-bottom:14px;
  }
  .lv-pay-proof-tab{
    flex:1; padding:9px 12px;
    border-radius:10px; border:1.5px solid var(--line-strong);
    background:transparent; cursor:pointer;
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:11.5px;
    color:var(--text-mute); letter-spacing:0.03em;
    transition:all 0.2s;
    display:flex; align-items:center; justify-content:center; gap:6px;
  }
  .lv-pay-proof-tab.active{
    border-color:var(--gold);
    background:rgba(232,185,72,0.10);
    color:var(--gold-bright);
  }
  .lv.light .lv-pay-proof-tab.active{ color:var(--gold-deep) }
  .lv-pay-proof-tab:hover:not(.active){
    border-color:var(--line-strong);
    background:rgba(232,185,72,0.04);
    color:var(--text-dim);
  }
  /* ─── UTR input ───────────────────────────── */
  .lv-pay-utr-wrap{
    position:relative;
  }
  .lv-pay-utr-input{
    width:100%; padding:13px 46px 13px 14px;
    box-sizing:border-box;
    font-family:'DM Sans',sans-serif; font-weight:600; font-size:14px;
    color:var(--text);
    background:var(--surface-2);
    border:1.5px solid var(--line-strong);
    border-radius:12px;
    letter-spacing:0.04em;
    transition:border-color 0.2s, background 0.2s;
  }
  .lv-pay-utr-input:focus{
    outline:none;
    border-color:var(--gold);
    background:var(--surface);
  }
  .lv-pay-utr-input::placeholder{
    color:var(--text-mute); font-weight:400; font-size:13px; letter-spacing:0.01em;
  }
  .lv-pay-utr-input.valid{
    border-color:rgba(34,211,170,0.55);
    background:rgba(34,211,170,0.04);
  }
  .lv-pay-utr-icon{
    position:absolute; right:13px; top:50%; transform:translateY(-50%);
    font-size:16px; color:var(--gold); opacity:0.7; pointer-events:none;
  }
  .lv-pay-utr-hint{
    font-family:'DM Sans',sans-serif; font-size:11px;
    color:var(--text-mute); margin-top:6px; letter-spacing:0.02em;
  }

  .lv-pay-submit{
    width:100%; margin-top:12px;
    padding:13px; border:none; border-radius:12px; cursor:pointer;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    color:#1A1408; font-family:'DM Sans',sans-serif;
    font-weight:700; font-size:13.5px; letter-spacing:0.04em;
    box-shadow:0 8px 20px rgba(232,185,72,0.32);
    transition:all 0.2s;
    position:relative; overflow:hidden;
    display:block; box-sizing:border-box;
  }
  .lv-pay-submit::after{
    content:""; position:absolute; top:0; left:0; bottom:0; width:30%;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
    animation:lvSheen 3s ease-in-out infinite;
  }
  .lv-pay-submit:hover:not(:disabled){
    transform:translateY(-2px);
    box-shadow:0 12px 26px rgba(232,185,72,0.4);
  }
  .lv-pay-submit:active:not(:disabled){ transform:scale(0.98) }
  .lv-pay-submit:disabled{
    opacity:0.5; cursor:not-allowed;
    background:var(--surface-2);
    color:var(--text-mute);
    box-shadow:none;
  }
  .lv-pay-submit:disabled::after{ display:none }

  .lv-pay-result{
    margin-top:12px; padding:12px 14px;
    border-radius:10px; font-size:12px; font-weight:600;
    line-height:1.5;
    animation:lvRiseSmall 0.3s ease both;
  }
  .lv-pay-result.ok{
    background:rgba(34,211,170,0.10);
    color:var(--green);
    border:1px solid rgba(34,211,170,0.3);
  }
  .lv-pay-result.err{
    background:rgba(248,113,113,0.10);
    color:var(--red);
    border:1px solid rgba(248,113,113,0.3);
  }

  .lv-pay-loading{
    padding:60px 20px; text-align:center;
  }

  /* Pay button on scheme cards */
  .lv-btn-pay{
    padding:7px 14px; border-radius:9px; border:none; cursor:pointer;
    background:linear-gradient(135deg, var(--gold-bright), var(--gold) 55%, var(--gold-deep));
    color:#1A1408; font-family:'DM Sans',sans-serif;
    font-weight:700; font-size:11.5px; letter-spacing:0.03em;
    display:inline-flex; align-items:center; gap:6px;
    box-shadow:0 4px 12px rgba(232,185,72,0.28);
    transition:all 0.2s;
    position:relative; overflow:hidden;
  }
  .lv-btn-pay::after{
    content:""; position:absolute; top:0; left:0; bottom:0; width:30%;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
    animation:lvSheen 3s ease-in-out infinite;
  }
  .lv-btn-pay:hover{ transform:translateY(-1px); box-shadow:0 7px 16px rgba(232,185,72,0.38) }
  .lv-btn-pay:active{ transform:scale(0.97) }

  /* ─── Scrollbars ─────────────────────── */
  ::-webkit-scrollbar{ width:6px; height:6px }
  ::-webkit-scrollbar-thumb{ background:rgba(232,185,72,0.25); border-radius:99px }
  ::-webkit-scrollbar-thumb:hover{ background:rgba(232,185,72,0.4) }

  /* ─── Mobile tweaks ──────────────────── */
  @media(max-width:560px){
    .lv-header-inner{ padding:10px 14px }
    .lv-avatar{ width:34px; height:34px; border-radius:10px; font-size:14px }
    .lv-user-name{ font-size:14px }
    .lv-welcome{ margin-bottom:16px }
    .lv-hero{ padding:16px 16px; border-radius:14px }
    .lv-scheme{ padding:15px 16px }
    .lv-scheme-head{ flex-direction:column; align-items:stretch }
    .lv-ring-wrap{ width:84px; height:84px; align-self:center }
    .lv-ring-pct{ font-size:17px }
    .lv-hero-qtys{ gap:7px }
    .lv-qty{ padding:8px 10px }
  }
`,oe=({status:e})=>(0,f.jsx)(`span`,{className:`lv-badge ${e||`pending`}`,children:{active:`Active`,complete:`Complete`,paid:`Paid`,pending:`Pending`,overdue:`Overdue`,approved:`Approved`,rejected:`Rejected`}[e]||`Pending`}),se=({value:e,max:t=13,size:n=96,stroke:r=8})=>{let i=(n-r)/2,a=2*Math.PI*i,o=Math.min(100,Math.round(e/t*100)),s=a-o/100*a;return(0,f.jsxs)(`div`,{className:`lv-ring-wrap`,children:[(0,f.jsxs)(`svg`,{className:`lv-ring`,width:n,height:n,children:[(0,f.jsx)(`defs`,{children:(0,f.jsxs)(`linearGradient`,{id:`goldGrad`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,f.jsx)(`stop`,{offset:`0%`,stopColor:`#F5D678`}),(0,f.jsx)(`stop`,{offset:`55%`,stopColor:`#E8B948`}),(0,f.jsx)(`stop`,{offset:`100%`,stopColor:`#8B6914`})]})}),(0,f.jsx)(`circle`,{className:`lv-ring-bg`,cx:n/2,cy:n/2,r:i,strokeWidth:r}),(0,f.jsx)(`circle`,{className:`lv-ring-fg`,cx:n/2,cy:n/2,r:i,strokeWidth:r,strokeDasharray:a,strokeDashoffset:s,style:{"--lv-ring-full":a,"--lv-ring-offset":s}})]}),(0,f.jsxs)(`div`,{className:`lv-ring-center`,children:[(0,f.jsxs)(`div`,{className:`lv-ring-pct`,children:[o,`%`]}),(0,f.jsxs)(`div`,{className:`lv-ring-sub`,children:[`M `,e,`/`,t]})]})]})};function O({wizard:e,setWizard:t,shopInfo:n,loadingShop:r,token:i,onSubmitted:a}){let o=()=>t({...e,step:Math.max(1,e.step-1)}),s=()=>t(null);return(0,f.jsx)(`div`,{className:`lv-modal-backdrop`,onClick:s,style:{zIndex:100},children:(0,f.jsxs)(`div`,{className:`lv-pay-modal`,onClick:e=>e.stopPropagation(),style:{maxWidth:640},children:[(0,f.jsx)(`div`,{className:`lv-pay-head`,children:(0,f.jsxs)(`div`,{className:`lv-pay-head-row`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`lv-pay-eyebrow`,children:[(0,f.jsx)(`span`,{className:`lv-live-dot`}),` Step `,e.step,` of 4`]}),(0,f.jsxs)(`div`,{className:`lv-pay-title`,children:[e.step===1&&`Configure Your Chit`,e.step===2&&`Terms & Conditions`,e.step===3&&`First Payment`,e.step===4&&`Request Submitted`]})]}),(0,f.jsx)(`button`,{className:`lv-modal-close`,onClick:s,children:`✕`})]})}),(0,f.jsxs)(`div`,{className:`lv-pay-body`,children:[e.error&&(0,f.jsx)(`div`,{style:{background:`rgba(248,113,113,0.1)`,color:`var(--red)`,padding:12,borderRadius:10,fontSize:13,marginBottom:24,border:`1px solid rgba(248,113,113,0.2)`},children:e.error}),e.step===1&&(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:11,color:`var(--text-mute)`,textTransform:`uppercase`,letterSpacing:1.5,marginBottom:10,fontWeight:700},children:[(0,f.jsx)(`span`,{style:{color:`var(--gold)`},children:`●`}),` Monthly Amount (₹)`]}),(0,f.jsxs)(`div`,{style:{position:`relative`},children:[(0,f.jsx)(`span`,{style:{position:`absolute`,left:16,top:`50%`,transform:`translateY(-50%)`,fontSize:20,color:`var(--gold)`,fontWeight:700},children:`₹`}),(0,f.jsx)(`input`,{type:`number`,className:`lv-input`,placeholder:`5,000`,value:e.form.monthlyAmount,onChange:n=>t({...e,form:{...e.form,monthlyAmount:n.target.value}}),style:{fontSize:28,fontWeight:800,padding:`18px 18px 18px 42px`,fontFamily:`'Fraunces', serif`,letterSpacing:`-0.02em`}})]})]}),(0,f.jsxs)(`div`,{className:`lv-form-grid-2`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{style:{display:`block`,fontSize:11,color:`var(--text-mute)`,textTransform:`uppercase`,letterSpacing:1.5,marginBottom:10,fontWeight:700},children:`Start Date`}),(0,f.jsx)(`input`,{type:`date`,className:`lv-input`,min:new Date().toISOString().split(`T`)[0],value:e.form.startDate,onChange:n=>t({...e,form:{...e.form,startDate:n.target.value}}),style:{padding:`14px 16px`,fontWeight:600}})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{style:{display:`block`,fontSize:11,color:`var(--text-mute)`,textTransform:`uppercase`,letterSpacing:1.5,marginBottom:10,fontWeight:700},children:`End Date`}),(0,f.jsx)(`input`,{type:`date`,className:`lv-input`,min:e.form.startDate||new Date().toISOString().split(`T`)[0],value:e.form.endDate,onChange:n=>t({...e,form:{...e.form,endDate:n.target.value}}),style:{padding:`14px 16px`,fontWeight:600}})]})]}),(0,f.jsx)(`div`,{style:{marginTop:8},children:(0,f.jsx)(`button`,{className:`lv-btn-submit`,onClick:async()=>{if(!e.form.monthlyAmount||!e.form.startDate||!e.form.endDate){t({...e,error:`Please fill all fields`});return}t({...e,submitting:!0,error:null});try{let n=await(await fetch(`${D}/api/terms/user/scheme/${e.schemeType}`,{headers:{Authorization:`Bearer ${i}`}})).json();n.success&&n.data?t({...e,step:2,terms:n.data,submitting:!1}):t({...e,submitting:!1,error:`Failed to load Terms. Please try again.`})}catch{t({...e,submitting:!1,error:`Network error loading terms`})}},disabled:e.submitting,style:{width:`100%`,padding:`18px`,borderRadius:16,fontSize:15,fontWeight:700,boxShadow:`0 10px 25px rgba(232,185,72,0.25)`},children:e.submitting?`Loading...`:`Continue to Terms & Conditions →`})})]}),e.step===2&&e.terms&&(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,f.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--line-strong)`,borderRadius:12,padding:20,maxHeight:300,overflowY:`auto`,fontSize:13,color:`var(--text-dim)`,lineHeight:1.6},children:[(0,f.jsx)(`h3`,{style:{color:`var(--text)`,marginBottom:12},children:e.terms.title}),(0,f.jsx)(`div`,{style:{whiteSpace:`pre-wrap`},children:e.terms.content})]}),(0,f.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:12,cursor:`pointer`,padding:12,border:`1px solid var(--line)`,borderRadius:12,background:`var(--bg-elev)`},children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:e.termsAgreed,onChange:n=>t({...e,termsAgreed:n.target.checked}),style:{width:18,height:18,accentColor:`var(--gold)`}}),(0,f.jsxs)(`span`,{style:{fontSize:14,color:`var(--text)`,fontWeight:500},children:[`I agree to the `,e.terms.shopName,` Terms & Conditions`]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,f.jsx)(`button`,{className:`lv-btn-ghost`,onClick:o,style:{flex:1},children:`← Back`}),(0,f.jsx)(`button`,{className:`lv-btn-submit`,onClick:async()=>{t({...e,submitting:!0,error:null});try{let n=await(await fetch(`${D}/api/scheme-join/request-type`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${i}`},body:JSON.stringify({planType:e.schemeType,monthlyAmount:e.form.monthlyAmount,startDate:e.form.startDate,endDate:e.form.endDate,termsAccepted:e.termsAgreed,termsVersion:e.terms?.version||1})})).json();n.success?t({...e,step:3,requestId:n.data._id,submitting:!1}):t({...e,submitting:!1,error:n.message})}catch{t({...e,submitting:!1,error:`Network error submitting request`})}},disabled:!e.termsAgreed||e.submitting,style:{flex:2},children:e.submitting?`Processing...`:`Agree & Continue`})]})]}),e.step===3&&(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[r?(0,f.jsx)(`div`,{style:{textAlign:`center`,padding:20},children:(0,f.jsx)(`div`,{className:`lv-spinner`})}):n?.error?(0,f.jsx)(`div`,{style:{color:`var(--red)`,textAlign:`center`},children:n.error}):(0,f.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,background:`var(--bg-elev)`,padding:20,borderRadius:16,border:`1px solid var(--line)`},children:[n?.qrCodeUrl&&(0,f.jsx)(`img`,{src:ie(n.qrCodeUrl),alt:`QR`,style:{width:120,height:120,borderRadius:12,background:`#fff`,padding:6}}),(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{fontSize:13,color:`var(--text-mute)`,marginBottom:4},children:[`Pay ₹`,e.form.monthlyAmount,` to`]}),(0,f.jsx)(`div`,{style:{fontSize:18,fontWeight:700,color:`var(--text)`,marginBottom:8},children:n?.upiId||`Shop UPI`}),n?.phone&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:14},children:[(0,f.jsxs)(`span`,{style:{color:`var(--text-dim)`},children:[`Ph: `,n.phone]}),(0,f.jsx)(`button`,{onClick:async()=>{if(n?.phone)try{await navigator.clipboard.writeText(n.phone)}catch{}},style:{background:`none`,border:`none`,color:`var(--gold)`,cursor:`pointer`,fontSize:12,fontWeight:600},children:`Copy`})]})]})]}),(0,f.jsx)(`div`,{style:{borderTop:`1px dashed var(--line)`,margin:`8px 0`}}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,f.jsxs)(`div`,{style:{flex:1},children:[(0,f.jsx)(`label`,{style:{display:`block`,fontSize:12,color:`var(--text-mute)`,marginBottom:8},children:`Upload Screenshot`}),(0,f.jsxs)(`div`,{style:{border:`2px dashed var(--line-strong)`,borderRadius:12,padding:`20px 12px`,textAlign:`center`,cursor:`pointer`,position:`relative`},children:[(0,f.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:n=>t({...e,file:n.target.files[0]}),style:{opacity:0,position:`absolute`,inset:0,cursor:`pointer`}}),(0,f.jsx)(`div`,{style:{fontSize:24,marginBottom:8},children:e.file?`🖼️`:`📤`}),(0,f.jsx)(`div`,{style:{fontSize:12,color:`var(--gold-bright)`,fontWeight:600},children:e.file?e.file.name:`Tap to upload`})]})]}),(0,f.jsxs)(`div`,{style:{flex:1},children:[(0,f.jsx)(`label`,{style:{display:`block`,fontSize:12,color:`var(--text-mute)`,marginBottom:8},children:`Or enter UTR No.`}),(0,f.jsx)(`input`,{type:`text`,className:`lv-input`,placeholder:`12-digit UTR`,value:e.utrNumber,onChange:n=>t({...e,utrNumber:n.target.value})})]})]}),(0,f.jsx)(`button`,{className:`lv-btn-submit`,onClick:async()=>{if(!e.file&&!e.utrNumber){t({...e,error:`Please provide a screenshot or UTR number`});return}t({...e,submitting:!0,error:null});try{let n=new FormData;e.file&&n.append(`screenshot`,e.file),e.utrNumber&&n.append(`utrNumber`,e.utrNumber);let r=await(await fetch(`${D}/api/scheme-join/${e.requestId}/first-payment`,{method:`POST`,headers:{Authorization:`Bearer ${i}`},body:n})).json();r.success?t({...e,step:4,submitting:!1}):t({...e,submitting:!1,error:r.message})}catch{t({...e,submitting:!1,error:`Network error uploading proof`})}},disabled:e.submitting||!e.file&&!e.utrNumber,style:{marginTop:8},children:e.submitting?`Uploading...`:`Submit Payment Proof`})]}),e.step===4&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,padding:`20px 0`},children:[(0,f.jsx)(`div`,{style:{fontSize:48,marginBottom:16},children:`🎉`}),(0,f.jsx)(`div`,{style:{fontSize:20,fontWeight:700,color:`var(--text)`,marginBottom:8},children:`Request Completed!`}),(0,f.jsx)(`div`,{style:{fontSize:14,color:`var(--text-dim)`,marginBottom:32,lineHeight:1.5},children:`Your chit request and payment proof have been successfully submitted. Once the admin verifies the payment, your chit will be activated.`}),(0,f.jsx)(`button`,{className:`lv-btn-submit`,onClick:()=>{s(),a()},style:{width:`100%`},children:`Go to Dashboard`})]})]})]})})}function k({scheme:e,shopInfo:t,loading:n,onClose:r,token:i,onSubmitted:a}){let[o,s]=(0,l.useState)(!1),[c,u]=(0,l.useState)(`screenshot`),[d,p]=(0,l.useState)(null),[m,h]=(0,l.useState)(null),[g,_]=(0,l.useState)(``),[v,y]=(0,l.useState)(``),[b,x]=(0,l.useState)(!1),[S,C]=(0,l.useState)(null),w=c===`screenshot`?!!d:g.trim().length>=6,ee=async()=>{if(t?.phone)try{await navigator.clipboard.writeText(t.phone),s(!0),setTimeout(()=>s(!1),1800)}catch{let e=document.createElement(`textarea`);e.value=t.phone,document.body.appendChild(e),e.select();try{document.execCommand(`copy`),s(!0),setTimeout(()=>s(!1),1800)}catch{}document.body.removeChild(e)}},te=e=>{let t=e.target.files?.[0];if(!t)return;if(t.size>5*1024*1024){C({ok:!1,text:`File too large. Max 5MB.`});return}if(!/^image\//.test(t.type)){C({ok:!1,text:`Please upload an image file (JPG or PNG).`});return}p(t),C(null);let n=new FileReader;n.onload=()=>h(n.result),n.readAsDataURL(t)},T=()=>{p(null),h(null),C(null)},E=async()=>{if(w){x(!0),C(null);try{let t=new FormData;t.append(`schemeId`,e._id),t.append(`monthNumber`,(e.currentMonth||0)+1),t.append(`userNote`,v),d&&t.append(`screenshot`,d),g.trim()&&t.append(`utrNumber`,g.trim());let n=await fetch(`${D}/api/payments/submit`,{method:`POST`,headers:{Authorization:`Bearer ${i}`},body:t}),o=await n.json();n.ok&&o.success?(C({ok:!0,text:`✓ Proof submitted! Admin will verify shortly.`}),a&&a(),setTimeout(()=>r(),2500)):C({ok:!1,text:o.message||`Submission failed. Please try again.`})}catch{C({ok:!1,text:`Network error. Please try again.`})}finally{x(!1)}}},ne=(()=>{if(!t?.qrCodeUrl)return null;let e=t.qrCodeUrl;return/^https?:\/\//i.test(e)||e.startsWith(`data:`)?e:D.replace(/\/+$/,``)+(e.startsWith(`/`)?e:`/`+e)})();return(0,f.jsx)(`div`,{className:`lv-modal-backdrop`,onClick:r,children:(0,f.jsxs)(`div`,{className:`lv-pay-modal`,onClick:e=>e.stopPropagation(),children:[(0,f.jsx)(`div`,{className:`lv-pay-head`,children:(0,f.jsxs)(`div`,{className:`lv-pay-head-row`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`lv-pay-eyebrow`,children:[(0,f.jsx)(`span`,{className:`lv-live-dot`}),`Secure Payment`]}),(0,f.jsx)(`div`,{className:`lv-pay-title`,children:`Pay Monthly Due`}),(0,f.jsxs)(`div`,{className:`lv-pay-amount`,children:[`₹`,(e.monthlyAmount||0).toLocaleString()]}),(0,f.jsx)(`div`,{className:`lv-pay-scheme-tag`,children:e.schemeId})]}),(0,f.jsx)(`button`,{className:`lv-modal-close`,onClick:r,children:`✕`})]})}),(0,f.jsx)(`div`,{className:`lv-pay-body`,children:n?(0,f.jsxs)(`div`,{className:`lv-pay-loading`,children:[(0,f.jsx)(`div`,{className:`lv-spinner`}),(0,f.jsx)(`div`,{className:`lv-loader-text`,children:`Loading payment details…`})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`lv-pay-step-label`,children:`Step 1 · Scan QR to Pay`}),ne?(0,f.jsxs)(`div`,{className:`lv-qr-card`,children:[(0,f.jsxs)(`div`,{className:`lv-qr-bank`,children:[(0,f.jsx)(`div`,{className:`lv-qr-bank-logo`,children:`A`}),(0,f.jsx)(`div`,{className:`lv-qr-bank-name`,children:t?.bankName||t?.shopName||`Your Shop`})]}),(0,f.jsxs)(`div`,{className:`lv-qr-inner`,children:[(0,f.jsx)(`span`,{className:`lv-qr-corner tl`}),(0,f.jsx)(`span`,{className:`lv-qr-corner tr`}),(0,f.jsx)(`span`,{className:`lv-qr-corner bl`}),(0,f.jsx)(`span`,{className:`lv-qr-corner br`}),(0,f.jsx)(`img`,{src:ne,alt:`Payment QR Code`,onError:e=>{e.currentTarget.style.display=`none`}}),(0,f.jsx)(`div`,{className:`lv-qr-center`,children:(0,f.jsx)(`div`,{className:`lv-qr-center-inner`,children:`₹`})})]})]}):(0,f.jsxs)(`div`,{className:`lv-qr-empty`,children:[(0,f.jsx)(`div`,{className:`lv-qr-empty-icon`,children:`◈`}),(0,f.jsx)(`div`,{className:`lv-qr-empty-title`,children:`QR Code Not Set`}),(0,f.jsx)(`div`,{className:`lv-qr-empty-sub`,children:`Your shop owner hasn't added a QR yet. Contact them on the phone below.`})]}),t?.upiId&&(0,f.jsxs)(`div`,{className:`lv-pay-upi`,children:[(0,f.jsx)(`div`,{className:`lv-pay-upi-label`,children:`Or Pay to UPI ID`}),(0,f.jsx)(`div`,{className:`lv-pay-upi-val`,children:t.upiId})]}),(0,f.jsxs)(`div`,{className:`lv-pay-shop`,children:[(0,f.jsx)(`div`,{className:`lv-pay-shop-name`,children:t?.shopName||`Your Shop`}),(0,f.jsxs)(`div`,{className:`lv-pay-shop-owner`,children:[(0,f.jsx)(`span`,{className:`lv-pay-shop-owner-label`,children:`Owner · `}),t?.ownerName||`—`]}),t?.upiPayeeName&&(0,f.jsxs)(`div`,{className:`lv-pay-payee`,children:[(0,f.jsx)(`span`,{className:`lv-pay-payee-icon`,children:`✓`}),(0,f.jsxs)(`span`,{className:`lv-pay-payee-text`,children:[(0,f.jsx)(`span`,{className:`lv-pay-payee-label`,children:`Paying To`}),(0,f.jsx)(`span`,{className:`lv-pay-payee-name`,children:t.upiPayeeName})]})]}),(0,f.jsxs)(`div`,{className:`lv-pay-phone`,children:[(0,f.jsxs)(`div`,{className:`lv-pay-phone-val`,children:[(0,f.jsx)(`span`,{className:`lv-pay-phone-icon`,children:`☏`}),t?.phone||`Not available`]}),t?.phone&&(0,f.jsx)(`button`,{className:`lv-pay-copy ${o?`copied`:``}`,onClick:ee,children:o?`✓ Copied`:`⧉ Copy`})]})]}),(0,f.jsx)(`div`,{className:`lv-pay-divider`,children:(0,f.jsx)(`span`,{className:`lv-pay-divider-text`,children:`Step 2 · Submit Proof`})}),(0,f.jsxs)(`div`,{className:`lv-pay-proof-tabs`,children:[(0,f.jsx)(`button`,{className:`lv-pay-proof-tab ${c===`screenshot`?`active`:``}`,onClick:()=>{u(`screenshot`),C(null)},disabled:b,children:`📷 Screenshot`}),(0,f.jsx)(`button`,{className:`lv-pay-proof-tab ${c===`utr`?`active`:``}`,onClick:()=>{u(`utr`),C(null)},disabled:b,children:`# UTR Number`})]}),c===`screenshot`?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`label`,{className:`lv-pay-upload ${d?`has-file`:``}`,children:[(0,f.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:te,disabled:b}),(0,f.jsx)(`div`,{className:`lv-pay-upload-icon`,children:d?`✓`:`↑`}),(0,f.jsx)(`div`,{className:`lv-pay-upload-title`,children:d?`Screenshot Ready`:`Upload Payment Screenshot`}),(0,f.jsx)(`div`,{className:`lv-pay-upload-sub`,children:d?`Click to change file`:`JPG or PNG · Max 5MB`}),d&&(0,f.jsx)(`div`,{className:`lv-pay-upload-filename`,children:d.name})]}),m&&(0,f.jsxs)(`div`,{className:`lv-pay-preview`,children:[(0,f.jsx)(`button`,{className:`lv-pay-preview-close`,onClick:T,disabled:b,children:`✕`}),(0,f.jsx)(`img`,{src:m,alt:`Payment screenshot preview`})]})]}):(0,f.jsxs)(`div`,{className:`lv-pay-utr-wrap`,children:[(0,f.jsx)(`input`,{className:`lv-pay-utr-input ${g.trim().length>=6?`valid`:``}`,type:`text`,inputMode:`numeric`,placeholder:`Enter UTR / Transaction Reference No.`,value:g,onChange:e=>{_(e.target.value),C(null)},disabled:b,maxLength:40}),(0,f.jsx)(`span`,{className:`lv-pay-utr-icon`,children:`🔑`}),(0,f.jsx)(`div`,{className:`lv-pay-utr-hint`,children:g.trim().length>=6?`✓ UTR entered — ${g.trim().length} characters`:`12-digit UTR number found in your bank / UPI app transaction history`})]}),(0,f.jsx)(`textarea`,{className:`lv-pay-textarea`,style:{marginTop:10},placeholder:`Optional note to admin (e.g., payment date, amount sent)…`,value:v,onChange:e=>y(e.target.value),disabled:b,maxLength:200}),(0,f.jsx)(`button`,{className:`lv-pay-submit`,onClick:E,disabled:!w||b,children:b?`Submitting…`:w?`Submit for Verification`:c===`screenshot`?`Upload Screenshot First`:`Enter UTR Number First`}),S&&(0,f.jsx)(`div`,{className:`lv-pay-result ${S.ok?`ok`:`err`}`,children:S.text}),(0,f.jsxs)(`div`,{className:`lv-pay-note`,children:[(0,f.jsx)(`span`,{className:`lv-pay-note-icon`,children:`ⓘ`}),(0,f.jsxs)(`div`,{className:`lv-pay-note-body`,children:[`After submitting, your payment goes to `,(0,f.jsx)(`b`,{children:`awaiting verification`}),`. The admin will review your proof and mark it as paid.`]})]})]})})]})})}function ce({scheme:e,payments:t,goldRate:n,onClose:r}){let i=e.planType===`Type2`,a=e.totalMonths||13,o=Array.from({length:a},(n,r)=>{let i=r+1;return i===a?{monthNumber:a,isOwnerMonth:!0,status:e.ownerPaymentDone?`paid`:`pending`,gramsAdded:e.ownerPaymentGrams||0,amount:e.monthlyAmount}:t.find(t=>t.monthNumber===i&&(t.scheme?._id||t.scheme)===e._id)||{monthNumber:i,status:`pending`,amount:e.monthlyAmount,gramsAdded:0}});return(0,f.jsx)(`div`,{className:`lv-modal-backdrop`,onClick:r,children:(0,f.jsxs)(`div`,{className:`lv-modal`,onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{className:`lv-modal-head`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`lv-modal-title`,children:[a,`-Month Schedule — `,e.schemeId]}),(0,f.jsxs)(`div`,{className:`lv-modal-sub`,children:[i?`Currency Conversion`:`Gold Accumulation`,` \xA0·\xA0 Monthly · ₹`,(e.monthlyAmount||0).toLocaleString(),` \xA0·\xA0 Started · `,e.startDate?new Date(e.startDate).toLocaleDateString(`en-IN`):`—`]})]}),(0,f.jsx)(`button`,{className:`lv-modal-close`,onClick:r,children:`✕`})]}),(0,f.jsxs)(`div`,{className:`lv-modal-body`,children:[(0,f.jsx)(`div`,{className:`lv-tbl-wrap`,children:(0,f.jsxs)(`table`,{className:`lv-tbl`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsx)(`tr`,{children:[`Month`,`Type`,`Amount`,`Gold`,`Due Date`,`Status`].map(e=>(0,f.jsx)(`th`,{children:e},e))})}),(0,f.jsx)(`tbody`,{children:o.map(t=>(0,f.jsxs)(`tr`,{style:t.isOwnerMonth?{background:`rgba(232,185,72,0.06)`}:{},children:[(0,f.jsxs)(`td`,{className:`lv-mono`,style:{color:`var(--text)`,fontWeight:600},children:[`M`,t.monthNumber]}),(0,f.jsx)(`td`,{children:t.isOwnerMonth?(0,f.jsx)(`span`,{className:`lv-badge complete`,style:{background:`rgba(232,185,72,0.14)`,color:`var(--gold-bright)`},children:`Bonus`}):(0,f.jsx)(`span`,{className:`lv-badge pending`,style:{background:`rgba(59,130,246,0.14)`,color:`#60A5FA`},children:`Payment`})}),(0,f.jsxs)(`td`,{className:`lv-mono`,style:{color:`var(--text)`},children:[`₹`,(t.amount||e.monthlyAmount||0).toLocaleString()]}),(0,f.jsx)(`td`,{className:`lv-mono lv-gold-text`,children:t.gramsAdded?`${Number(t.gramsAdded).toFixed(3)}g`:`—`}),(0,f.jsx)(`td`,{className:`lv-mono`,children:t.dueDate?new Date(t.dueDate).toLocaleDateString(`en-IN`):`—`}),(0,f.jsx)(`td`,{children:(0,f.jsx)(oe,{status:t.status})})]},t.monthNumber))})]})}),(0,f.jsxs)(`div`,{className:`lv-modal-summary`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-sum-label`,children:i?`Amount Accumulated`:`Gold Saved`}),(0,f.jsx)(`div`,{className:`lv-sum-val`,style:{color:`var(--gold-bright)`},children:i?`₹${(e.totalAmountAccumulated||0).toLocaleString()}`:`${(e.totalGramsAccumulated||0).toFixed(3)}g`})]}),n&&!i&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-sum-label`,children:`Current Value`}),(0,f.jsxs)(`div`,{className:`lv-sum-val`,style:{color:`var(--green)`},children:[`≈ ₹`,((e.totalGramsAccumulated||0)*n).toLocaleString()]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-sum-label`,children:`Installments Paid`}),(0,f.jsxs)(`div`,{className:`lv-sum-val`,style:{color:`var(--text)`},children:[e.currentMonth||0,` / `,a-1]})]})]})]})]})})}function le({profile:e,token:t,onUpdate:n}){let[r,i]=(0,l.useState)(!1),[a,o]=(0,l.useState)({name:e?.name||``,phone:e?.phone||``}),[s,c]=(0,l.useState)(null),[u,d]=(0,l.useState)(e?.userPhoto?ie(e.userPhoto):null),[p,m]=(0,l.useState)(!1),[h,g]=(0,l.useState)({type:``,text:``});return(0,f.jsxs)(`div`,{className:`lv-payments`,style:{animation:`lvRise 0.5s ease both`,maxWidth:600,margin:`0 auto`},children:[h.text&&(0,f.jsx)(`div`,{className:`lv-error ${h.type===`success`?`lv-msg-success`:``}`,style:{marginBottom:20,background:h.type===`success`?`rgba(34,211,170,0.1)`:void 0,borderColor:h.type===`success`?`rgba(34,211,170,0.3)`:void 0},children:(0,f.jsxs)(`div`,{className:`lv-error-body`,children:[(0,f.jsx)(`div`,{className:`lv-error-title`,style:{color:h.type===`success`?`var(--green)`:void 0},children:h.type===`success`?`Request Submitted`:`Error`}),(0,f.jsx)(`div`,{className:`lv-error-msg`,children:h.text})]})}),(0,f.jsxs)(`form`,{onSubmit:async r=>{if(r.preventDefault(),!a.name.trim()&&!a.phone.trim()&&!s)return g({type:`error`,text:`Please make at least one change.`});m(!0),g({type:``,text:``});try{let r=new FormData;if(a.name.trim()&&a.name!==e.name&&r.append(`name`,a.name),a.phone.trim()&&a.phone!==e.phone&&r.append(`phone`,a.phone),s&&r.append(`userPhoto`,s),![...r.keys()].length)return m(!1),g({type:`error`,text:`No actual changes made.`});let o=await(await fetch(`${D}/api/users/profile-update-request`,{method:`POST`,headers:{Authorization:`Bearer ${t}`},body:r})).json();o.success?(g({type:`success`,text:`Profile update requested. Awaiting admin approval.`}),i(!1),c(null),n&&n()):g({type:`error`,text:o.message||`Failed to submit request.`})}catch{g({type:`error`,text:`Network error occurred.`})}finally{m(!1)}},style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:20},children:[(0,f.jsx)(`div`,{style:{width:80,height:80,borderRadius:`50%`,overflow:`hidden`,background:`var(--surface-2)`,border:`2px solid var(--line)`,flexShrink:0},children:u?(0,f.jsx)(`img`,{src:u,alt:`Profile`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,f.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:24,color:`var(--text-mute)`},children:`👤`})}),(0,f.jsxs)(`div`,{style:{flex:1},children:[(0,f.jsx)(`label`,{style:{display:`block`,fontSize:12,fontWeight:600,color:`var(--text-dim)`,marginBottom:8},children:`PROFILE PICTURE`}),r?(0,f.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:e=>{let t=e.target.files[0];t&&(c(t),d(URL.createObjectURL(t)))},style:{fontSize:13,color:`var(--text)`}}):(0,f.jsx)(`div`,{style:{fontSize:14,color:`var(--text-mute)`},children:e?.userPhoto?`Custom photo set`:`No photo set`})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{style:{display:`block`,fontSize:12,fontWeight:600,color:`var(--text-dim)`,marginBottom:8},children:`FULL NAME`}),r?(0,f.jsx)(`input`,{type:`text`,value:a.name,onChange:e=>o(t=>({...t,name:e.target.value})),style:{width:`100%`,padding:`10px 14px`,borderRadius:10,background:`var(--surface-2)`,border:`1px solid var(--line-cool)`,color:`var(--text)`,fontSize:14}}):(0,f.jsx)(`div`,{style:{fontSize:15,color:`var(--text)`,fontWeight:500},children:e?.name})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{style:{display:`block`,fontSize:12,fontWeight:600,color:`var(--text-dim)`,marginBottom:8},children:`PHONE NUMBER`}),r?(0,f.jsx)(`input`,{type:`tel`,value:a.phone,onChange:e=>o(t=>({...t,phone:e.target.value})),style:{width:`100%`,padding:`10px 14px`,borderRadius:10,background:`var(--surface-2)`,border:`1px solid var(--line-cool)`,color:`var(--text)`,fontSize:14}}):(0,f.jsx)(`div`,{style:{fontSize:15,color:`var(--text)`,fontWeight:500},children:e?.phone})]}),r&&(0,f.jsxs)(`div`,{style:{padding:12,borderRadius:8,background:`rgba(232,185,72,0.1)`,border:`1px solid var(--line)`,fontSize:12,color:`var(--text-dim)`,lineHeight:1.5},children:[(0,f.jsx)(`b`,{style:{color:`var(--gold-bright)`},children:`Note:`}),` Any changes made here will be sent to your shop administrator for approval. Your profile will be updated once approved.`]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:10,marginTop:10},children:r?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`button`,{type:`button`,onClick:()=>{i(!1),d(e?.userPhoto?ie(e.userPhoto):null),o({name:e?.name||``,phone:e?.phone||``}),c(null)},className:`lv-btn-ghost`,style:{flex:1,justifyContent:`center`},children:`Cancel`}),(0,f.jsx)(`button`,{type:`submit`,disabled:p,className:`lv-btn-gold`,style:{flex:2},children:p?`Submitting...`:`Submit for Approval`})]}):(0,f.jsx)(`button`,{type:`button`,onClick:()=>i(!0),className:`lv-btn-gold`,style:{width:`100%`},children:`✏️ Request Profile Update`})})]})]})}function ue({onLogout:e}){let t=(0,l.useRef)(null),[n,r]=(0,l.useState)(null),[i,a]=(0,l.useState)(!0),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(null),[d,p]=(0,l.useState)(`schemes`),[m,h]=(0,l.useState)(!1),[g,_]=(0,l.useState)(!1),[v,y]=(0,l.useState)(()=>localStorage.getItem(`userTheme`)!==`light`),[b,x]=(0,l.useState)(null),[S,C]=(0,l.useState)(null),[w,ee]=(0,l.useState)(null),[te,T]=(0,l.useState)(null),[E,ne]=(0,l.useState)(!1),[re,ue]=(0,l.useState)([]),[de,fe]=(0,l.useState)(null),[A,pe]=(0,l.useState)([]),[me,he]=(0,l.useState)([]),[ge,_e]=(0,l.useState)(null),[ve,ye]=(0,l.useState)({}),[be,xe]=(0,l.useState)(!1),[Se,Ce]=(0,l.useState)(null),[we,Te]=(0,l.useState)(``),[Ee,De]=(0,l.useState)(!1),[Oe,ke]=(0,l.useState)(null),[Ae,je]=(0,l.useState)(null),[Me,Ne]=(0,l.useState)(null),[Pe,Fe]=(0,l.useState)(`paid`);(0,l.useEffect)(()=>{if(Se){let e=re.find(e=>e.planType===Se);e?Ie(e._id):pe([]),setTimeout(()=>{t.current&&t.current.scrollIntoView({behavior:`smooth`,block:`start`})},100)}},[Se,re]);let Ie=async e=>{xe(!0);try{let t=await fetch(`${D}/api/plans/public/${e}`,{headers:{Authorization:`Bearer ${ze}`}}).then(e=>e.json());t.success&&pe(t.data||[])}catch(e){console.error(e)}finally{xe(!1)}},Le=()=>y(e=>{let t=!e;return localStorage.setItem(`userTheme`,t?`dark`:`light`),t}),Re=(()=>{try{return JSON.parse(sessionStorage.getItem(`userInfo`)||`{}`)}catch{return{}}})(),ze=sessionStorage.getItem(`userToken`);(0,l.useEffect)(()=>{if(d===`schemes`&&!i){let e={Authorization:`Bearer ${ze}`},t=t=>fetch(t,{headers:e}).then(e=>e.json());Promise.all([t(`${D}/api/users/me`),t(`${D}/api/scheme-join/my`)]).then(([e,t])=>{e.success&&r(e.data),t.success&&he(t.data||[])}).catch(e=>console.error(`Tab refresh error:`,e))}},[d]),(0,l.useEffect)(()=>{C(null);let e={Authorization:`Bearer ${ze}`},t=t=>fetch(t,{headers:e}).then(async e=>{let t=await e.json().catch(()=>({}));if(!e.ok)throw Error(t.message||`Request failed (${e.status})`);return t});Promise.all([t(`${D}/api/users/me`),t(`${D}/api/goldrate/user/today`).catch(()=>({success:!1})),t(`${D}/api/categories/public`).catch(()=>({success:!1})),t(`${D}/api/scheme-join/my`).catch(()=>({success:!1}))]).then(([e,t,n,i])=>{e.success?r(e.data):C(e.message||`Failed to load profile data`),t.success&&t.data&&(s(t.data.ratePerGram),u(t.data)),n.success&&ue(n.data||[]),i.success&&he(i.data||[])}).catch(e=>{console.error(`Dashboard Fetch Error:`,e),e.message&&e.message.toLowerCase().includes(`failed to fetch`)?C(`Unable to connect to server. Please make sure the backend is running on port 5000.`):C(e.message||`Something went wrong. Please try again.`)}).finally(()=>a(!1))},[]),(0,l.useEffect)(()=>{if(!ze)return;let e=setInterval(async()=>{try{let e=await(await fetch(`${D}/api/goldrate/user/today`,{headers:{Authorization:`Bearer ${ze}`}})).json();e.success&&e.data&&(s(e.data.ratePerGram),u(e.data))}catch{}},5e3);return()=>clearInterval(e)},[ze]),(0,l.useEffect)(()=>{de&&(async()=>{xe(!0);try{let e=await(await fetch(`${D}/api/plans/public/${de}`)).json();e.success&&pe(e.data||[])}catch(e){console.error(e)}finally{xe(!1)}})()},[de]);let Be=n?.schemes||[],Ve=n?.payments||[],He=Be.filter(e=>e.status!==`complete`&&e.status!==`early_exit`),Ue=Be.filter(e=>e.status===`complete`||e.status===`early_exit`),We=Be.reduce((e,t)=>e+(t.totalGramsAccumulated||0),0).toFixed(3),Ge=Be.filter(e=>e.status===`active`).length,Ke=Ve.find(e=>e.status===`pending`),qe=Ve.filter(e=>e.status===`paid`).reduce((e,t)=>e+t.amount,0),Je=()=>{sessionStorage.removeItem(`userToken`),sessionStorage.removeItem(`userInfo`),e()},Ye=e=>{let t=e.planType===`Type2`,n=e.startDate?new Date(e.startDate).toLocaleDateString(`en-IN`):`—`,r=e.completionDate||e.earlyExitDate||e.updatedAt?new Date(e.completionDate||e.earlyExitDate||e.updatedAt).toLocaleDateString(`en-IN`):`—`,i=Ve.filter(t=>t.status===`paid`&&(t.scheme?._id===e._id||t.scheme===e._id)).reduce((e,t)=>e+t.amount,0),a=`
==================================================
        GOLD INVESTMENT SAVINGS SCHEME
              CLOSURE STATEMENT
==================================================
Scheme ID         : ${e.schemeId}
Status            : ${e.status===`complete`?`MATURED`:`CLOSED (EARLY EXIT)`}
Scheme Type       : ${t?`Currency Conversion (Type 2)`:`Gold Accumulation (Type 1)`}
Monthly Commitment: Rs. ${(e.monthlyAmount||0).toLocaleString()}
--------------------------------------------------
Start Date        : ${n}
Closure Date      : ${r}
--------------------------------------------------
Total Amount Paid : Rs. ${i.toLocaleString()}
Total Gold Saved  : ${t?`—`:`${(e.totalGramsAccumulated||0).toFixed(3)}g`}
Accumulated Value : Rs. ${(e.totalAmountAccumulated||0).toLocaleString()}
--------------------------------------------------
Thank you for investing with us!
==================================================`,o=new Blob([a.trim()],{type:`text/plain;charset=utf-8`}),s=URL.createObjectURL(o),c=document.createElement(`a`);c.href=s,c.download=`Statement_${e.schemeId}.txt`,document.body.appendChild(c),c.click(),document.body.removeChild(c)},Xe=async e=>{if(window.confirm(`Are you sure you want to cancel and remove this request?`))try{let t=await(await fetch(`${D}/api/scheme-join/${e}`,{method:`DELETE`,headers:{Authorization:`Bearer ${ze}`}})).json();if(t.success){let e=await fetch(`${D}/api/scheme-join/my`,{headers:{Authorization:`Bearer ${ze}`}}).then(e=>e.json());e.success&&he(e.data||[])}else alert(t.message||`Failed to cancel request`)}catch{alert(`Network error`)}},Ze=async e=>{if(ee(e),!te){ne(!0);try{let e=await fetch(`${D}/api/auth/shop-payment-info`,{headers:{Authorization:`Bearer ${ze}`}}),t=await e.json();e.ok&&t.success?T(t.data):T({error:t.message||`Could not load shop info`})}catch{T({error:`Network error. Please try again.`})}finally{ne(!1)}}},Qe=async e=>{if(je(e),e&&e.step===3&&!te&&!E){ne(!0);try{let e=await fetch(`${D}/api/auth/shop-payment-info`,{headers:{Authorization:`Bearer ${ze}`}}),t=await e.json();e.ok&&t.success?T(t.data):T({error:t.message||`Could not load shop info`})}catch{T({error:`Network error. Please try again.`})}finally{ne(!1)}}};if(i)return(0,f.jsxs)(`div`,{className:`lv ${v?``:`light`}`,children:[(0,f.jsx)(`style`,{children:ae}),(0,f.jsx)(`div`,{className:`lv-aurora`}),(0,f.jsx)(`div`,{className:`lv-grain`}),(0,f.jsx)(`div`,{className:`lv-loader`,children:(0,f.jsxs)(`div`,{className:`lv-loader-inner`,children:[(0,f.jsx)(`div`,{className:`lv-spinner`}),(0,f.jsx)(`div`,{className:`lv-loader-text`,children:`Opening your vault…`})]})})]});let $e=(n?.name||Re.name||``).split(` `)[0]||`User`;return(0,f.jsxs)(`div`,{className:`lv ${v?``:`light`}`,children:[(0,f.jsx)(`style`,{children:ae}),(0,f.jsx)(`div`,{className:`lv-aurora`}),(0,f.jsx)(`div`,{className:`lv-grain`}),b&&(0,f.jsx)(ce,{scheme:b,payments:Ve,goldRate:o,onClose:()=>x(null)}),w&&(0,f.jsx)(k,{scheme:w,shopInfo:te,loading:E,token:ze,onSubmitted:()=>{setTimeout(()=>window.location.reload(),800)},onClose:()=>ee(null)}),Ae&&(0,f.jsx)(O,{wizard:Ae,setWizard:Qe,shopInfo:te,loadingShop:E,token:ze,onSubmitted:()=>{setTimeout(()=>window.location.reload(),800)}}),g&&(0,f.jsx)(`div`,{className:`lv-modal-backdrop`,onClick:()=>_(!1),style:{zIndex:100},children:(0,f.jsxs)(`div`,{className:`lv-pay-modal`,style:{maxWidth:600,padding:0},onClick:e=>e.stopPropagation(),children:[(0,f.jsx)(`div`,{className:`lv-pay-head`,children:(0,f.jsxs)(`div`,{className:`lv-pay-head-row`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`lv-pay-eyebrow`,children:[(0,f.jsx)(`span`,{className:`lv-live-dot`}),`Settings`]}),(0,f.jsx)(`div`,{className:`lv-pay-title`,children:`My Profile`})]}),(0,f.jsx)(`button`,{className:`lv-modal-close`,onClick:()=>_(!1),children:`✕`})]})}),(0,f.jsx)(`div`,{style:{padding:24,maxHeight:`80vh`,overflowY:`auto`},children:(0,f.jsx)(le,{profile:n,token:ze,onUpdate:()=>{fetch(`${D}/api/users/me`,{headers:{Authorization:`Bearer ${ze}`}}).then(e=>e.json()).then(e=>{e.success&&r(e.data)})}})})]})}),(0,f.jsx)(`header`,{className:`lv-header`,children:(0,f.jsxs)(`div`,{className:`lv-header-inner`,children:[(0,f.jsxs)(`div`,{className:`lv-user`,children:[(0,f.jsx)(`div`,{className:`lv-avatar`,style:{padding:n?.userPhoto?0:void 0},children:n?.userPhoto?(0,f.jsx)(`img`,{src:ie(n.userPhoto),alt:n.name,style:{width:`100%`,height:`100%`,borderRadius:`inherit`,objectFit:`cover`}}):$e.charAt(0).toUpperCase()}),(0,f.jsxs)(`div`,{className:`lv-user-meta`,children:[(0,f.jsx)(`div`,{className:`lv-user-name`,children:n?.name||Re.name||`User`}),(0,f.jsxs)(`div`,{className:`lv-user-id`,children:[`ID · `,n?.userId||Re.userId||`—`]})]})]}),(0,f.jsxs)(`div`,{className:`lv-header-right`,children:[o&&(0,f.jsxs)(`div`,{className:`lv-ticker`,children:[(0,f.jsxs)(`div`,{className:`lv-ticker-label`,children:[(0,f.jsx)(`span`,{className:`lv-live-dot`}),`LIVE · GOLD/G`]}),(0,f.jsxs)(`div`,{className:`lv-ticker-price`,children:[`₹`,o.toLocaleString()]})]}),(0,f.jsx)(`button`,{className:`lv-iconbtn`,onClick:Le,title:v?`Light`:`Dark`,children:v?`☀`:`◐`}),(0,f.jsx)(`button`,{className:`lv-iconbtn`,onClick:()=>h(e=>!e),children:`⋮`}),m&&(0,f.jsxs)(`div`,{className:`lv-menu`,children:[o&&(0,f.jsxs)(`div`,{className:`lv-menu-rate`,children:[(0,f.jsx)(`div`,{className:`lv-menu-rate-label`,children:`TODAY'S GOLD RATE`}),(0,f.jsxs)(`div`,{className:`lv-menu-rate-val`,children:[`₹`,o.toLocaleString(),`/g`]})]}),(0,f.jsxs)(`button`,{className:`lv-menu-item`,onClick:()=>{Le(),h(!1)},children:[(0,f.jsx)(`span`,{style:{fontSize:15,width:20,textAlign:`center`},children:v?`☀`:`◐`}),v?`Light Mode`:`Dark Mode`]}),(0,f.jsxs)(`button`,{className:`lv-menu-item`,onClick:()=>{h(!1),_(!0)},children:[(0,f.jsx)(`span`,{style:{fontSize:15,width:20,textAlign:`center`},children:`⚙️`}),`Profile Settings`]}),(0,f.jsxs)(`button`,{className:`lv-menu-item`,onClick:()=>{h(!1),Je()},children:[(0,f.jsx)(`span`,{style:{fontSize:15,width:20,textAlign:`center`},children:`⏻`}),`Logout`]})]})]})]})}),m&&(0,f.jsx)(`div`,{className:`lv-menu-overlay`,onClick:()=>h(!1)}),(0,f.jsxs)(`main`,{className:`lv-main`,children:[S&&(0,f.jsxs)(`div`,{className:`lv-error`,children:[(0,f.jsx)(`span`,{className:`lv-error-icon`,children:`⚠`}),(0,f.jsxs)(`div`,{className:`lv-error-body`,children:[(0,f.jsx)(`div`,{className:`lv-error-title`,children:`Connection Issue`}),(0,f.jsx)(`div`,{className:`lv-error-msg`,children:S})]}),(0,f.jsx)(`button`,{className:`lv-error-btn`,onClick:()=>window.location.reload(),children:`Retry`})]}),(0,f.jsxs)(`section`,{className:`lv-welcome`,children:[(0,f.jsx)(`div`,{className:`lv-eyebrow`,children:`YOUR PRIVATE VAULT`}),(0,f.jsxs)(`h1`,{className:`lv-greeting`,children:[`Welcome back,`,(0,f.jsx)(`br`,{}),(0,f.jsxs)(`span`,{className:`lv-name`,children:[$e,`.`]})]}),(0,f.jsx)(`div`,{className:`lv-date`,children:new Date().toLocaleDateString(`en-IN`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`})})]}),(0,f.jsxs)(`section`,{className:`lv-hero`,children:[(0,f.jsx)(`div`,{className:`lv-hero-top`,children:(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`lv-hero-label`,children:[(0,f.jsx)(`span`,{className:`lv-live-dot`}),`TODAY'S GOLD RATE · SET BY YOUR SHOP`]}),o?(0,f.jsxs)(`div`,{className:`lv-hero-price`,children:[(0,f.jsx)(`span`,{className:`lv-hero-rupee lv-shimmer`,children:`₹`}),(0,f.jsx)(`span`,{className:`lv-shimmer`,children:o.toLocaleString()}),(0,f.jsx)(`span`,{className:`lv-hero-unit`,children:`per gram`})]}):(0,f.jsx)(`div`,{className:`lv-hero-empty`,children:`Rate not set today`}),c?.updatedAt&&(0,f.jsxs)(`div`,{className:`lv-hero-updated`,children:[`Updated · `,new Date(c.updatedAt).toLocaleString(`en-IN`,{day:`2-digit`,month:`short`,hour:`2-digit`,minute:`2-digit`})]})]})}),(0,f.jsx)(`div`,{className:`lv-hero-qtys`,children:[1,5,10].map(e=>(0,f.jsxs)(`div`,{className:`lv-qty`,children:[(0,f.jsxs)(`div`,{className:`lv-qty-label`,children:[e,`g`]}),(0,f.jsx)(`div`,{className:`lv-qty-val`,children:o?`₹${(o*e).toLocaleString()}`:`—`})]},e))})]}),(0,f.jsx)(`section`,{className:`lv-stats`,children:[{label:`TOTAL GOLD SAVED`,value:`${We}g`,sub:o?`≈ ₹${(parseFloat(We)*o).toLocaleString()}`:`Current value`,icon:`◆`,iconBg:`rgba(232,185,72,0.14)`,iconColor:`var(--gold-bright)`,valueColor:`var(--gold-bright)`},{label:`ACTIVE SCHEMES`,value:Ge,sub:`Currently running`,icon:`◈`,iconBg:`rgba(59,130,246,0.14)`,iconColor:`#60A5FA`,valueColor:`#60A5FA`},{label:`TOTAL AMOUNT PAID`,value:`₹${qe.toLocaleString()}`,sub:`${Ve.filter(e=>e.status===`paid`).length} payments made`,icon:`₹`,iconBg:`rgba(34,211,170,0.14)`,iconColor:`var(--green)`,valueColor:`var(--green)`},{label:`NEXT DUE`,value:Ke?`₹${Ke.amount?.toLocaleString()}`:`All Clear`,sub:Ke?`Month ${Ke.monthNumber}`:`No pending dues`,icon:Ke?`⏳`:`✓`,iconBg:Ke?`rgba(245,158,11,0.14)`:`rgba(34,211,170,0.14)`,iconColor:Ke?`var(--amber)`:`var(--green)`,valueColor:Ke?`var(--amber)`:`var(--green)`}].map((e,t)=>(0,f.jsxs)(`article`,{className:`lv-stat`,style:{animationDelay:`${.2+t*.08}s`},children:[(0,f.jsxs)(`div`,{className:`lv-stat-head`,children:[(0,f.jsx)(`div`,{className:`lv-stat-label`,children:e.label}),(0,f.jsx)(`div`,{className:`lv-stat-icon`,style:{background:e.iconBg,color:e.iconColor},children:e.icon})]}),(0,f.jsx)(`div`,{className:`lv-stat-value`,style:{color:e.valueColor},children:e.value}),(0,f.jsx)(`div`,{className:`lv-stat-sub`,children:e.sub})]},e.label))}),(0,f.jsx)(`nav`,{className:`lv-tabs`,children:[{id:`schemes`,label:`My Schemes`},{id:`browse`,label:`Browse Plans`},{id:`payments`,label:`Payment History`},{id:`past_chits`,label:`Past Chits`}].map(e=>(0,f.jsx)(`button`,{className:`lv-tab ${d===e.id?`active`:``}`,onClick:()=>{p(e.id),(e.id===`payments`||e.id===`past_chits`)&&Ne(null)},children:e.label},e.id))}),d===`schemes`&&(0,f.jsx)(`div`,{className:`lv-schemes`,children:He.length===0?(0,f.jsxs)(`div`,{className:`lv-empty-state`,style:{animation:`fadeUp 0.6s both`,textAlign:`center`,padding:`60px 20px`},children:[(0,f.jsx)(`div`,{className:`lv-empty-icon`,style:{fontSize:64,marginBottom:20},children:`💰`}),(0,f.jsx)(`h2`,{className:`lv-empty-title`,style:{fontFamily:`'Fraunces', serif`,fontSize:28,color:`var(--text)`,marginBottom:12},children:`Your Vault is Empty`}),(0,f.jsx)(`p`,{className:`lv-empty-sub`,style:{color:`var(--text-dim)`,maxWidth:440,margin:`0 auto 32px`,lineHeight:1.6},children:`You haven't joined any gold schemes yet. Start your journey today and secure your future with gold.`}),(0,f.jsx)(`button`,{className:`lv-btn-primary`,onClick:()=>p(`browse`),style:{padding:`16px 32px`,borderRadius:14,background:`var(--gold-bright)`,color:`#000`,fontWeight:800,border:`none`,cursor:`pointer`,boxShadow:`0 10px 25px rgba(232,185,72,0.3)`},children:`Browse Investment Plans →`})]}):He.map((e,t)=>{let n=e.planType===`Type2`,r=(e.totalMonths||13)-1,i=Math.min(100,Math.round((e.currentMonth||0)/r*100)),a=o?e.totalGramsAccumulated*o:0;return(0,f.jsxs)(`article`,{className:`lv-scheme`,style:{animationDelay:`${.1+t*.1}s`},children:[(0,f.jsxs)(`div`,{className:`lv-scheme-head`,children:[(0,f.jsxs)(`div`,{className:`lv-scheme-headL`,children:[(0,f.jsxs)(`div`,{className:`lv-scheme-tags`,children:[(0,f.jsx)(`span`,{className:`lv-scheme-id`,children:e.schemeId}),(0,f.jsx)(oe,{status:e.status})]}),(0,f.jsx)(`div`,{className:`lv-scheme-label`,children:`MONTHLY COMMITMENT`}),(0,f.jsxs)(`div`,{className:`lv-scheme-monthly`,children:[`₹`,(e.monthlyAmount||0).toLocaleString()]}),(0,f.jsxs)(`div`,{className:`lv-stat-group`,style:{marginTop:20},children:[(0,f.jsx)(`div`,{className:`lv-scheme-label`,children:n?`CASH VALUE ACCUMULATED`:`GOLD ACCUMULATED`}),(0,f.jsx)(`div`,{className:`lv-scheme-gold lv-shimmer`,style:{fontSize:n?32:36,color:n?`var(--text)`:`var(--gold-bright)`},children:n?`₹${(e.totalAmountAccumulated||0).toLocaleString()}`:`${(e.totalGramsAccumulated||0).toFixed(3)}g`}),!n&&o&&(0,f.jsxs)(`div`,{className:`lv-scheme-gold-em`,style:{fontSize:14},children:[`≈ ₹`,a.toLocaleString()]}),n&&e.totalGramsAccumulated>0&&(0,f.jsxs)(`div`,{className:`lv-scheme-gold-em`,style:{color:`var(--green)`,fontWeight:700},children:[`✓ Conversion Ready: `,e.totalGramsAccumulated.toFixed(3),`g`]})]}),(0,f.jsxs)(`div`,{className:`lv-scheme-actions`,children:[(0,f.jsxs)(`button`,{className:`lv-btn-pay`,onClick:()=>Ze(e),children:[(0,f.jsx)(`span`,{children:`₹`}),` Pay Now`]}),(0,f.jsxs)(`button`,{className:`lv-btn-ghost`,onClick:()=>x(e),children:[(0,f.jsx)(`span`,{children:`📅`}),` `,e.totalMonths||13,`-Month Schedule`]})]})]}),(0,f.jsx)(se,{value:e.currentMonth||0,max:r})]}),(0,f.jsxs)(`div`,{className:`lv-scheme-barmeta`,children:[(0,f.jsxs)(`span`,{children:[`Started · `,e.startDate?new Date(e.startDate).toLocaleDateString(`en-IN`):`—`]}),(0,f.jsxs)(`span`,{children:[i,`% complete`]})]}),(0,f.jsx)(`div`,{className:`lv-scheme-bar`,children:(0,f.jsx)(`div`,{className:`lv-scheme-bar-fill`,style:{width:`${i}%`}})}),(0,f.jsx)(`div`,{className:`lv-scheme-stats`,children:[{label:`RATE AT START`,value:`₹${(e.goldRateAtStart||0).toLocaleString()}/g`},{label:`SCHEME TYPE`,value:n?`Currency Conversion`:`Gold Accumulation`},{label:`TIME REMAINING`,value:e.status===`complete`||(e.currentMonth||0)>=r?`Complete`:`${r-(e.currentMonth||0)} months`}].map(e=>(0,f.jsxs)(`div`,{className:`lv-scheme-mini`,children:[(0,f.jsx)(`div`,{className:`lv-scheme-mini-label`,children:e.label}),(0,f.jsx)(`div`,{className:`lv-scheme-mini-val`,children:e.value})]},e.label))})]},e._id)})}),d===`past_chits`&&(0,f.jsx)(`div`,{className:`lv-schemes`,children:Ue.length===0?(0,f.jsxs)(`div`,{className:`lv-empty-state`,style:{animation:`fadeUp 0.6s both`,textAlign:`center`,padding:`60px 20px`},children:[(0,f.jsx)(`div`,{className:`lv-empty-icon`,style:{fontSize:64,marginBottom:20},children:`📜`}),(0,f.jsx)(`h2`,{className:`lv-empty-title`,style:{fontFamily:`'Fraunces', serif`,fontSize:28,color:`var(--text)`,marginBottom:12},children:`No Past Chits`}),(0,f.jsx)(`p`,{className:`lv-empty-sub`,style:{color:`var(--text-dim)`,maxWidth:440,margin:`0 auto 32px`,lineHeight:1.6},children:`You don't have any closed or matured chits yet. Once a scheme is completed or settled, it will appear here.`})]}):Ue.map((e,t)=>{let n=e.planType===`Type2`,r=Ve.filter(t=>t.status===`paid`&&t.scheme?._id===e._id).reduce((e,t)=>e+t.amount,0),i=e.startDate?new Date(e.startDate).toLocaleDateString(`en-IN`):`—`,a=e.completionDate||e.earlyExitDate||e.updatedAt?new Date(e.completionDate||e.earlyExitDate||e.updatedAt).toLocaleDateString(`en-IN`):`—`;return(0,f.jsx)(`article`,{className:`lv-scheme`,style:{animationDelay:`${.1+t*.1}s`,borderLeft:`4px solid var(--gold-bright)`},children:(0,f.jsx)(`div`,{className:`lv-scheme-head`,style:{marginBottom:0},children:(0,f.jsxs)(`div`,{className:`lv-scheme-headL`,style:{width:`100%`},children:[(0,f.jsxs)(`div`,{className:`lv-scheme-tags`,children:[(0,f.jsx)(`span`,{className:`lv-scheme-id`,children:e.schemeId}),(0,f.jsx)(`span`,{className:`lv-badge`,style:{background:e.status===`complete`?`rgba(16,185,129,0.15)`:`rgba(245,158,11,0.15)`,color:e.status===`complete`?`var(--green)`:`var(--gold-bright)`,fontSize:`12px`,fontWeight:700,padding:`4px 10px`,borderRadius:`20px`,textTransform:`uppercase`},children:e.status===`complete`?`Matured`:`Closed / Early Exit`})]}),(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(180px, 1fr))`,gap:`24px`,marginTop:`20px`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-scheme-label`,children:`TOTAL AMOUNT PAID`}),(0,f.jsxs)(`div`,{className:`lv-scheme-monthly`,style:{fontSize:28,color:`var(--text)`},children:[`₹`,r.toLocaleString()]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-scheme-label`,children:n?`CASH VALUE ACCUMULATED`:`TOTAL GOLD SAVED`}),(0,f.jsx)(`div`,{className:`lv-scheme-gold`,style:{fontSize:28,color:n?`var(--text)`:`var(--gold-bright)`},children:n?`₹${(e.totalAmountAccumulated||0).toLocaleString()}`:`${(e.totalGramsAccumulated||0).toFixed(3)}g`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-scheme-label`,children:`START DATE`}),(0,f.jsx)(`div`,{style:{fontSize:18,color:`var(--text)`,fontWeight:600,marginTop:4},children:i})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-scheme-label`,children:`CLOSURE DATE`}),(0,f.jsx)(`div`,{style:{fontSize:18,color:`var(--text)`,fontWeight:600,marginTop:4},children:a})]})]}),(0,f.jsx)(`div`,{className:`lv-scheme-actions`,style:{marginTop:`24px`},children:(0,f.jsxs)(`button`,{className:`lv-btn-pay`,onClick:()=>Ye(e),style:{background:`linear-gradient(135deg, #1e1b18 0%, #3a3227 100%)`,border:`1px solid var(--gold-bright)`,color:`var(--gold-bright)`,padding:`12px 24px`,borderRadius:`12px`,cursor:`pointer`,fontWeight:700,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,f.jsx)(`span`,{children:`📥`}),` Download Statement`]})})]})})},e._id)})}),d===`browse`&&(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`lv-browse-head`,children:[(0,f.jsx)(`div`,{className:`lv-browse-title`,children:`Predefined Schemes`}),(0,f.jsx)(`div`,{className:`lv-browse-sub`,children:`Choose a scheme logic and set your monthly contribution.`})]}),(0,f.jsxs)(`div`,{className:`lv-scheme-card-grid`,children:[(0,f.jsx)(`div`,{className:`lv-scheme-card ${Se===`Type1`?`active`:``}`,onClick:()=>Ce(`Type1`),children:(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-scheme-card-icon`,children:`💰`}),(0,f.jsx)(`div`,{className:`lv-scheme-card-title`,children:`Scheme 1`}),(0,f.jsxs)(`div`,{className:`lv-scheme-card-desc`,children:[(0,f.jsx)(`b`,{children:`Monthly Gold Accumulation`}),`. Every month you pay, gold is credited to your account based on that day's gold rate. You can redeem the total gold at the end of the term.`]})]})}),(0,f.jsx)(`div`,{className:`lv-scheme-card ${Se===`Type2`?`active`:``}`,onClick:()=>Ce(`Type2`),children:(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`lv-scheme-card-icon`,children:`🏗️`}),(0,f.jsx)(`div`,{className:`lv-scheme-card-title`,children:`Scheme 2`}),(0,f.jsxs)(`div`,{className:`lv-scheme-card-desc`,children:[(0,f.jsx)(`b`,{children:`Final Currency Conversion`}),`. Accumulate your monthly payments in cash value. At the end of the term, the total amount is converted to gold at the final rate, including a bonus month benefit.`]})]})})]}),Se&&(0,f.jsxs)(`div`,{style:{maxWidth:800,margin:`40px auto`},ref:t,children:[A.length>0&&(0,f.jsxs)(`div`,{style:{marginBottom:40},children:[(0,f.jsxs)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-mute)`,textTransform:`uppercase`,letterSpacing:1.5,marginBottom:16},children:[`Available `,Se===`Type1`?`Scheme 1`:`Scheme 2`,` Plans`]}),(0,f.jsx)(`div`,{style:{display:`grid`,gap:16},children:A.map(e=>(0,f.jsxs)(`div`,{className:`lv-plan`,style:{opacity:1,animation:`none`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:20},children:[(0,f.jsxs)(`div`,{style:{flex:1},children:[(0,f.jsx)(`div`,{style:{fontSize:16,fontWeight:700,color:`var(--text)`,marginBottom:4},children:e.name}),(0,f.jsxs)(`div`,{style:{fontSize:12,color:`var(--text-dim)`},children:[`₹`,e.monthlyAmount.toLocaleString(),` / month · `,e.duration,` Months `,e.bonusDetails&&`· ${e.bonusDetails}`]})]}),(0,f.jsx)(`button`,{className:`lv-btn-gold`,style:{padding:`8px 24px`,minWidth:100},onClick:()=>je({step:1,schemeType:Se,form:{monthlyAmount:e.monthlyAmount.toString(),startDate:``,endDate:``},terms:null,termsAgreed:!1,file:null,utrNumber:``,submitting:!1,error:null,requestId:null}),children:`Join Plan`})]},e._id))})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:40,padding:32,background:`var(--surface)`,border:`1px dashed var(--line-strong)`,borderRadius:20},children:[(0,f.jsx)(`div`,{style:{fontSize:18,fontWeight:700,color:`var(--text)`,marginBottom:8},children:`Want a custom amount?`}),(0,f.jsx)(`div`,{style:{fontSize:13,color:`var(--text-mute)`,marginBottom:20},children:`Set your own monthly contribution and start saving.`}),(0,f.jsxs)(`button`,{className:`lv-btn-submit`,style:{padding:`14px 40px`,borderRadius:100,fontSize:15,fontWeight:700,cursor:`pointer`},onClick:()=>je({step:1,schemeType:Se,form:{monthlyAmount:``,startDate:``,endDate:``},terms:null,termsAgreed:!1,file:null,utrNumber:``,submitting:!1,error:null,requestId:null}),children:[`✨ Create Custom `,Se===`Type1`?`Scheme 1`:`Scheme 2`,` Chit →`]})]}),(0,f.jsxs)(`div`,{style:{borderTop:`1px solid var(--line)`,paddingTop:32},children:[(0,f.jsx)(`div`,{style:{fontSize:14,fontWeight:700,color:`var(--text-mute)`,textTransform:`uppercase`,letterSpacing:1.5,marginBottom:16,textAlign:`center`},children:`Recent Requests`}),me.filter(e=>e.planType===Se&&e.status!==`approved`).map(e=>{let t=e.status===`awaiting_payment`,n=e.status===`payment_verified`;return e.status===`rejected`?(0,f.jsxs)(`div`,{style:{maxWidth:520,margin:`24px auto`,padding:`24px`,background:`rgba(239,68,68,0.05)`,border:`1px solid rgba(239,68,68,0.2)`,borderRadius:20,textAlign:`center`,marginBottom:20},children:[(0,f.jsx)(`div`,{style:{fontSize:32,marginBottom:12},children:`❌`}),(0,f.jsx)(`div`,{style:{fontWeight:800,color:`#EF4444`,fontSize:18,marginBottom:8},children:`Request Rejected`}),(0,f.jsxs)(`div`,{style:{fontSize:13,color:`var(--text-dim)`,lineHeight:1.5,marginBottom:16},children:[`Enrollment for `,Se===`Type1`?`Scheme 1`:`Scheme 2`,` (₹`,e.monthlyAmount,`) was rejected.`,e.adminNote&&(0,f.jsxs)(`div`,{style:{marginTop:8,fontStyle:`italic`},children:[`"`,e.adminNote,`"`]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,justifyContent:`center`},children:[(0,f.jsx)(`button`,{className:`lv-btn-ghost`,style:{padding:`8px 16px`,fontSize:12},onClick:()=>je({step:1,schemeType:Se,form:{monthlyAmount:e.monthlyAmount,startDate:``,endDate:``},terms:null,termsAgreed:!1,file:null,utrNumber:``,submitting:!1,error:null,requestId:null}),children:`Try Again`}),(0,f.jsx)(`button`,{onClick:()=>Xe(e._id),style:{background:`transparent`,color:`var(--text-mute)`,border:`none`,fontSize:12,textDecoration:`underline`,cursor:`pointer`},children:`Dismiss`})]})]},e._id):(0,f.jsxs)(`div`,{style:{maxWidth:520,margin:`20px auto`,padding:`18px 24px`,background:`var(--surface)`,border:`1px solid var(--line-strong)`,borderRadius:18,textAlign:`center`,boxShadow:`0 4px 20px rgba(0,0,0,0.05)`,marginBottom:16},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:12,marginBottom:8},children:[(0,f.jsx)(`span`,{style:{fontSize:24},children:t?`💳`:n?`✅`:`⏳`}),(0,f.jsx)(`span`,{style:{fontWeight:700,color:`var(--text)`,fontSize:16},children:t?`Payment Pending`:n?`Payment Verified!`:`Request Pending`})]}),(0,f.jsxs)(`div`,{style:{fontSize:13,color:`var(--text-mute)`,marginBottom:12},children:[Se===`Type1`?`Scheme 1`:`Scheme 2`,` · ₹`,e.monthlyAmount]}),(0,f.jsx)(`div`,{style:{fontSize:12,color:`var(--text-dim)`,lineHeight:1.4,marginBottom:16},children:t?`Admin is verifying your proof. activation soon.`:n?`Payment verified! Final activation in progress.`:`Waiting for admin review.`}),(0,f.jsx)(`button`,{onClick:()=>Xe(e._id),style:{background:`transparent`,color:`var(--text-mute)`,border:`none`,fontSize:11,textDecoration:`underline`,cursor:`pointer`},children:`Cancel Request`})]},e._id)})]})]})]}),d===`payments`&&(0,f.jsxs)(`div`,{className:`lv-payments`,children:[(0,f.jsx)(`div`,{className:`lv-payments-title`,children:`Payment History`}),Be.length===0?(0,f.jsxs)(`div`,{style:{textAlign:`center`,padding:40,color:`var(--text-mute)`},children:[(0,f.jsx)(`div`,{style:{fontSize:44,marginBottom:12,fontFamily:`'Fraunces',serif`,color:`var(--gold)`},children:`💰`}),(0,f.jsx)(`div`,{style:{fontFamily:`'Fraunces',serif`,fontSize:20,fontWeight:600,color:`var(--text)`,marginBottom:6},children:`No Chits Found`}),(0,f.jsx)(`div`,{style:{fontSize:13},children:`You are not enrolled in any schemes yet.`})]}):(0,f.jsx)(`div`,{className:`lv-tbl-wrap`,children:(0,f.jsxs)(`table`,{className:`lv-tbl`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Scheme ID`}),(0,f.jsx)(`th`,{children:`Started On`}),(0,f.jsx)(`th`,{children:`Monthly Amount`}),(0,f.jsx)(`th`,{children:`Action`})]})}),(0,f.jsx)(`tbody`,{children:Be.map(e=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{className:`lv-mono`,style:{color:`var(--text)`,fontWeight:600},children:e.schemeId}),(0,f.jsx)(`td`,{className:`lv-mono`,children:e.startDate?new Date(e.startDate).toLocaleDateString(`en-IN`):`—`}),(0,f.jsx)(`td`,{className:`lv-mono`,style:{color:`var(--gold)`},children:(0,f.jsxs)(`b`,{children:[`₹`,(e.monthlyAmount||0).toLocaleString()]})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(`button`,{className:`lv-btn-ghost`,onClick:()=>{Ne(e._id),Fe(`paid`)},style:{padding:`6px 14px`,fontSize:11},children:`View`})})]},e._id))})]})})]}),Me&&(0,f.jsx)(`div`,{className:`lv-modal-backdrop`,onClick:()=>Ne(null),children:(0,f.jsxs)(`div`,{className:`lv-pay-modal`,style:{maxWidth:800},onClick:e=>e.stopPropagation(),children:[(0,f.jsx)(`div`,{className:`lv-pay-head`,children:(0,f.jsxs)(`div`,{className:`lv-pay-head-row`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`lv-pay-eyebrow`,children:[(0,f.jsx)(`span`,{className:`lv-live-dot`}),`Detailed History`]}),(0,f.jsx)(`div`,{className:`lv-pay-title`,children:`Payment Breakdown`})]}),(0,f.jsx)(`button`,{className:`lv-modal-close`,onClick:()=>Ne(null),children:`✕`})]})}),(0,f.jsxs)(`div`,{style:{padding:`24px`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:8,marginBottom:20},children:[{id:`paid`,label:`Paid`},{id:`upcoming`,label:`Upcoming`},{id:`due`,label:`Due`}].map(e=>(0,f.jsx)(`button`,{onClick:()=>Fe(e.id),style:{padding:`8px 16px`,borderRadius:8,cursor:`pointer`,fontWeight:600,fontSize:12,fontFamily:`'DM Sans', sans-serif`,border:Pe===e.id?`1px solid var(--gold)`:`1px solid var(--line)`,background:Pe===e.id?`var(--gold-glow)`:`transparent`,color:Pe===e.id?`var(--gold-bright)`:`var(--text-mute)`,transition:`all 0.2s`},children:e.label},e.id))}),(()=>{let e=new Date,t=Ve.filter(e=>e.scheme?._id===Me).filter(t=>{if(Pe===`paid`)return t.status===`paid`;if(Pe===`upcoming`){if(t.status===`paid`)return!1;let n=t.scheme?.startDate?new Date(t.scheme.startDate):null;if(!n)return!1;let r=new Date(n);return r.setMonth(n.getMonth()+t.monthNumber-1),r>e}else if(Pe===`due`){if(t.status===`paid`)return!1;let n=t.scheme?.startDate?new Date(t.scheme.startDate):null;if(!n)return!0;let r=new Date(n);return r.setMonth(n.getMonth()+t.monthNumber-1),r<=e}return!0});return t.length===0?(0,f.jsx)(`div`,{style:{textAlign:`center`,padding:40,color:`var(--text-mute)`},children:(0,f.jsx)(`div`,{style:{fontSize:13},children:`No payments found in this category.`})}):(0,f.jsx)(`div`,{className:`lv-tbl-wrap`,children:(0,f.jsxs)(`table`,{className:`lv-tbl`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Month`}),(0,f.jsx)(`th`,{children:`Amount`}),Pe===`paid`&&(0,f.jsx)(`th`,{children:`Gold`}),Pe===`paid`&&(0,f.jsx)(`th`,{children:`Rate`}),Pe===`paid`&&(0,f.jsx)(`th`,{children:`Date Paid`}),(Pe===`upcoming`||Pe===`due`)&&(0,f.jsx)(`th`,{children:`Due Date`}),(0,f.jsx)(`th`,{children:`Status`})]})}),(0,f.jsx)(`tbody`,{children:t.map(e=>{let t=`—`;if(e.scheme?.startDate){let n=new Date(e.scheme.startDate);n.setMonth(n.getMonth()+e.monthNumber-1),t=n.toLocaleDateString(`en-IN`,{month:`short`,year:`numeric`})}return(0,f.jsxs)(`tr`,{children:[(0,f.jsxs)(`td`,{className:`lv-mono`,style:{color:`var(--text)`,fontWeight:600},children:[`M`,e.monthNumber]}),(0,f.jsx)(`td`,{className:`lv-mono`,style:{color:`var(--text)`},children:(0,f.jsxs)(`b`,{children:[`₹`,(e.amount||0).toLocaleString()]})}),Pe===`paid`&&(0,f.jsx)(`td`,{className:`lv-mono lv-gold-text`,children:e.gramsAdded?`${e.gramsAdded}g`:`—`}),Pe===`paid`&&(0,f.jsx)(`td`,{className:`lv-mono`,children:e.goldRateOnPaymentDay?`₹${e.goldRateOnPaymentDay.toLocaleString()}/g`:`—`}),Pe===`paid`&&(0,f.jsx)(`td`,{className:`lv-mono`,children:e.paidDate?new Date(e.paidDate).toLocaleDateString(`en-IN`):`—`}),(Pe===`upcoming`||Pe===`due`)&&(0,f.jsx)(`td`,{className:`lv-mono`,style:{color:`var(--text-dim)`},children:t}),(0,f.jsx)(`td`,{children:(0,f.jsx)(oe,{status:Pe===`due`&&e.status===`pending`?`due`:e.status})})]},e._id)})})]})})})()]})]})})]})]})}function de(){let[e,t]=(0,l.useState)(()=>!!sessionStorage.getItem(`userToken`));return e?(0,f.jsx)(ue,{onLogout:()=>{sessionStorage.removeItem(`userToken`),sessionStorage.removeItem(`userInfo`),t(!1)}}):(0,f.jsx)(re,{onLogin:()=>t(!0)})}(0,u.createRoot)(document.getElementById(`root`)).render((0,f.jsx)(l.StrictMode,{children:(0,f.jsx)(de,{})}));