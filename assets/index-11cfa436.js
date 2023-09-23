(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();function sa(t,e){const c=Object.create(null),a=t.split(",");for(let n=0;n<a.length;n++)c[a[n]]=!0;return e?n=>!!c[n.toLowerCase()]:n=>!!c[n]}const b2={},T6=[],Y1=()=>{},JM=()=>!1,ZM=/^on[^a-z]/,$t=t=>ZM.test(t),ia=t=>t.startsWith("onUpdate:"),t1=Object.assign,oa=(t,e)=>{const c=t.indexOf(e);c>-1&&t.splice(c,1)},ey=Object.prototype.hasOwnProperty,m2=(t,e)=>ey.call(t,e),Z=Array.isArray,N6=t=>Ne(t)==="[object Map]",qt=t=>Ne(t)==="[object Set]",Ms=t=>Ne(t)==="[object Date]",o2=t=>typeof t=="function",W2=t=>typeof t=="string",Y0=t=>typeof t=="symbol",w2=t=>t!==null&&typeof t=="object",la=t=>w2(t)&&o2(t.then)&&o2(t.catch),xo=Object.prototype.toString,Ne=t=>xo.call(t),ty=t=>Ne(t).slice(8,-1),Ao=t=>Ne(t)==="[object Object]",fa=t=>W2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$8=sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wt=t=>{const e=Object.create(null);return c=>e[c]||(e[c]=t(c))},cy=/-(\w)/g,z4=Wt(t=>t.replace(cy,(e,c)=>c?c.toUpperCase():"")),ay=/\B([A-Z])/g,r0=Wt(t=>t.replace(ay,"-$1").toLowerCase()),jt=Wt(t=>t.charAt(0).toUpperCase()+t.slice(1)),f5=Wt(t=>t?`on${jt(t)}`:""),J0=(t,e)=>!Object.is(t,e),q8=(t,e)=>{for(let c=0;c<t.length;c++)t[c](e)},rt=(t,e,c)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:c})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ny=t=>{const e=W2(t)?Number(t):NaN;return isNaN(e)?t:e};let ys;const K5=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function N4(t){if(Z(t)){const e={};for(let c=0;c<t.length;c++){const a=t[c],n=W2(a)?oy(a):N4(a);if(n)for(const r in n)e[r]=n[r]}return e}else{if(W2(t))return t;if(w2(t))return t}}const ry=/;(?![^(]*\))/g,sy=/:([^]+)/,iy=/\/\*[^]*?\*\//g;function oy(t){const e={};return t.replace(iy,"").split(ry).forEach(c=>{if(c){const a=c.split(sy);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function S1(t){let e="";if(W2(t))e=t;else if(Z(t))for(let c=0;c<t.length;c++){const a=S1(t[c]);a&&(e+=a+" ")}else if(w2(t))for(const c in t)t[c]&&(e+=c+" ");return e.trim()}const ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fy=sa(ly);function So(t){return!!t||t===""}function uy(t,e){if(t.length!==e.length)return!1;let c=!0;for(let a=0;c&&a<t.length;a++)c=Gt(t[a],e[a]);return c}function Gt(t,e){if(t===e)return!0;let c=Ms(t),a=Ms(e);if(c||a)return c&&a?t.getTime()===e.getTime():!1;if(c=Y0(t),a=Y0(e),c||a)return t===e;if(c=Z(t),a=Z(e),c||a)return c&&a?uy(t,e):!1;if(c=w2(t),a=w2(e),c||a){if(!c||!a)return!1;const n=Object.keys(t).length,r=Object.keys(e).length;if(n!==r)return!1;for(const s in t){const i=t.hasOwnProperty(s),o=e.hasOwnProperty(s);if(i&&!o||!i&&o||!Gt(t[s],e[s]))return!1}}return String(t)===String(e)}function hy(t,e){return t.findIndex(c=>Gt(c,e))}const F2=t=>W2(t)?t:t==null?"":Z(t)||w2(t)&&(t.toString===xo||!o2(t.toString))?JSON.stringify(t,To,2):String(t),To=(t,e)=>e&&e.__v_isRef?To(t,e.value):N6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((c,[a,n])=>(c[`${a} =>`]=n,c),{})}:qt(e)?{[`Set(${e.size})`]:[...e.values()]}:w2(e)&&!Z(e)&&!Ao(e)?String(e):e;let W1;class dy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=W1,!e&&W1&&(this.index=(W1.scopes||(W1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=W1;try{return W1=this,e()}finally{W1=c}}}on(){W1=this}off(){W1=this.parent}stop(e){if(this._active){let c,a;for(c=0,a=this.effects.length;c<a;c++)this.effects[c].stop();for(c=0,a=this.cleanups.length;c<a;c++)this.cleanups[c]();if(this.scopes)for(c=0,a=this.scopes.length;c<a;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function my(t,e=W1){e&&e.active&&e.effects.push(t)}function py(){return W1}const ua=t=>{const e=new Set(t);return e.w=0,e.n=0,e},No=t=>(t.w&p3)>0,Eo=t=>(t.n&p3)>0,vy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p3},gy=t=>{const{deps:e}=t;if(e.length){let c=0;for(let a=0;a<e.length;a++){const n=e[a];No(n)&&!Eo(n)?n.delete(t):e[c++]=n,n.w&=~p3,n.n&=~p3}e.length=c}},Q5=new WeakMap;let w0=0,p3=1;const X5=30;let K1;const W3=Symbol(""),Y5=Symbol("");class ha{constructor(e,c=null,a){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,my(this,a)}run(){if(!this.active)return this.fn();let e=K1,c=o3;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=K1,K1=this,o3=!0,p3=1<<++w0,w0<=X5?vy(this):_s(this),this.fn()}finally{w0<=X5&&gy(this),p3=1<<--w0,K1=this.parent,o3=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){K1===this?this.deferStop=!0:this.active&&(_s(this),this.onStop&&this.onStop(),this.active=!1)}}function _s(t){const{deps:e}=t;if(e.length){for(let c=0;c<e.length;c++)e[c].delete(t);e.length=0}}let o3=!0;const ko=[];function s0(){ko.push(o3),o3=!1}function i0(){const t=ko.pop();o3=t===void 0?!0:t}function E1(t,e,c){if(o3&&K1){let a=Q5.get(t);a||Q5.set(t,a=new Map);let n=a.get(c);n||a.set(c,n=ua()),Io(n)}}function Io(t,e){let c=!1;w0<=X5?Eo(t)||(t.n|=p3,c=!No(t)):c=!t.has(K1),c&&(t.add(K1),K1.deps.push(t))}function I4(t,e,c,a,n,r){const s=Q5.get(t);if(!s)return;let i=[];if(e==="clear")i=[...s.values()];else if(c==="length"&&Z(t)){const o=Number(a);s.forEach((l,f)=>{(f==="length"||f>=o)&&i.push(l)})}else switch(c!==void 0&&i.push(s.get(c)),e){case"add":Z(t)?fa(c)&&i.push(s.get("length")):(i.push(s.get(W3)),N6(t)&&i.push(s.get(Y5)));break;case"delete":Z(t)||(i.push(s.get(W3)),N6(t)&&i.push(s.get(Y5)));break;case"set":N6(t)&&i.push(s.get(W3));break}if(i.length===1)i[0]&&J5(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);J5(ua(o))}}function J5(t,e){const c=Z(t)?t:[...t];for(const a of c)a.computed&&Ls(a);for(const a of c)a.computed||Ls(a)}function Ls(t,e){(t!==K1||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Hy=sa("__proto__,__v_isRef,__isVue"),Ro=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Y0)),Vy=da(),zy=da(!1,!0),Cy=da(!0),ws=My();function My(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...c){const a=d2(this);for(let r=0,s=this.length;r<s;r++)E1(a,"get",r+"");const n=a[e](...c);return n===-1||n===!1?a[e](...c.map(d2)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...c){s0();const a=d2(this)[e].apply(this,c);return i0(),a}}),t}function yy(t){const e=d2(this);return E1(e,"has",t),e.hasOwnProperty(t)}function da(t=!1,e=!1){return function(a,n,r){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&r===(t?e?Fy:Uo:e?Oo:Fo).get(a))return a;const s=Z(a);if(!t){if(s&&m2(ws,n))return Reflect.get(ws,n,r);if(n==="hasOwnProperty")return yy}const i=Reflect.get(a,n,r);return(Y0(n)?Ro.has(n):Hy(n))||(t||E1(a,"get",n),e)?i:p1(i)?s&&fa(n)?i:i.value:w2(i)?t?$o(i):Qt(i):i}}const _y=Po(),Ly=Po(!0);function Po(t=!1){return function(c,a,n,r){let s=c[a];if(q6(s)&&p1(s)&&!p1(n))return!1;if(!t&&(!it(n)&&!q6(n)&&(s=d2(s),n=d2(n)),!Z(c)&&p1(s)&&!p1(n)))return s.value=n,!0;const i=Z(c)&&fa(a)?Number(a)<c.length:m2(c,a),o=Reflect.set(c,a,n,r);return c===d2(r)&&(i?J0(n,s)&&I4(c,"set",a,n):I4(c,"add",a,n)),o}}function wy(t,e){const c=m2(t,e);t[e];const a=Reflect.deleteProperty(t,e);return a&&c&&I4(t,"delete",e,void 0),a}function by(t,e){const c=Reflect.has(t,e);return(!Y0(e)||!Ro.has(e))&&E1(t,"has",e),c}function xy(t){return E1(t,"iterate",Z(t)?"length":W3),Reflect.ownKeys(t)}const Do={get:Vy,set:_y,deleteProperty:wy,has:by,ownKeys:xy},Ay={get:Cy,set(t,e){return!0},deleteProperty(t,e){return!0}},Sy=t1({},Do,{get:zy,set:Ly}),ma=t=>t,Kt=t=>Reflect.getPrototypeOf(t);function m8(t,e,c=!1,a=!1){t=t.__v_raw;const n=d2(t),r=d2(e);c||(e!==r&&E1(n,"get",e),E1(n,"get",r));const{has:s}=Kt(n),i=a?ma:c?ga:Z0;if(s.call(n,e))return i(t.get(e));if(s.call(n,r))return i(t.get(r));t!==n&&t.get(e)}function p8(t,e=!1){const c=this.__v_raw,a=d2(c),n=d2(t);return e||(t!==n&&E1(a,"has",t),E1(a,"has",n)),t===n?c.has(t):c.has(t)||c.has(n)}function v8(t,e=!1){return t=t.__v_raw,!e&&E1(d2(t),"iterate",W3),Reflect.get(t,"size",t)}function bs(t){t=d2(t);const e=d2(this);return Kt(e).has.call(e,t)||(e.add(t),I4(e,"add",t,t)),this}function xs(t,e){e=d2(e);const c=d2(this),{has:a,get:n}=Kt(c);let r=a.call(c,t);r||(t=d2(t),r=a.call(c,t));const s=n.call(c,t);return c.set(t,e),r?J0(e,s)&&I4(c,"set",t,e):I4(c,"add",t,e),this}function As(t){const e=d2(this),{has:c,get:a}=Kt(e);let n=c.call(e,t);n||(t=d2(t),n=c.call(e,t)),a&&a.call(e,t);const r=e.delete(t);return n&&I4(e,"delete",t,void 0),r}function Ss(){const t=d2(this),e=t.size!==0,c=t.clear();return e&&I4(t,"clear",void 0,void 0),c}function g8(t,e){return function(a,n){const r=this,s=r.__v_raw,i=d2(s),o=e?ma:t?ga:Z0;return!t&&E1(i,"iterate",W3),s.forEach((l,f)=>a.call(n,o(l),o(f),r))}}function H8(t,e,c){return function(...a){const n=this.__v_raw,r=d2(n),s=N6(r),i=t==="entries"||t===Symbol.iterator&&s,o=t==="keys"&&s,l=n[t](...a),f=c?ma:e?ga:Z0;return!e&&E1(r,"iterate",o?Y5:W3),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:i?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function Q4(t){return function(...e){return t==="delete"?!1:this}}function Ty(){const t={get(r){return m8(this,r)},get size(){return v8(this)},has:p8,add:bs,set:xs,delete:As,clear:Ss,forEach:g8(!1,!1)},e={get(r){return m8(this,r,!1,!0)},get size(){return v8(this)},has:p8,add:bs,set:xs,delete:As,clear:Ss,forEach:g8(!1,!0)},c={get(r){return m8(this,r,!0)},get size(){return v8(this,!0)},has(r){return p8.call(this,r,!0)},add:Q4("add"),set:Q4("set"),delete:Q4("delete"),clear:Q4("clear"),forEach:g8(!0,!1)},a={get(r){return m8(this,r,!0,!0)},get size(){return v8(this,!0)},has(r){return p8.call(this,r,!0)},add:Q4("add"),set:Q4("set"),delete:Q4("delete"),clear:Q4("clear"),forEach:g8(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=H8(r,!1,!1),c[r]=H8(r,!0,!1),e[r]=H8(r,!1,!0),a[r]=H8(r,!0,!0)}),[t,c,e,a]}const[Ny,Ey,ky,Iy]=Ty();function pa(t,e){const c=e?t?Iy:ky:t?Ey:Ny;return(a,n,r)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?a:Reflect.get(m2(c,n)&&n in a?c:a,n,r)}const Ry={get:pa(!1,!1)},Py={get:pa(!1,!0)},Dy={get:pa(!0,!1)},Fo=new WeakMap,Oo=new WeakMap,Uo=new WeakMap,Fy=new WeakMap;function Oy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(t){return t.__v_skip||!Object.isExtensible(t)?0:Oy(ty(t))}function Qt(t){return q6(t)?t:va(t,!1,Do,Ry,Fo)}function Bo(t){return va(t,!1,Sy,Py,Oo)}function $o(t){return va(t,!0,Ay,Dy,Uo)}function va(t,e,c,a,n){if(!w2(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=n.get(t);if(r)return r;const s=Uy(t);if(s===0)return t;const i=new Proxy(t,s===2?a:c);return n.set(t,i),i}function E6(t){return q6(t)?E6(t.__v_raw):!!(t&&t.__v_isReactive)}function q6(t){return!!(t&&t.__v_isReadonly)}function it(t){return!!(t&&t.__v_isShallow)}function qo(t){return E6(t)||q6(t)}function d2(t){const e=t&&t.__v_raw;return e?d2(e):t}function Wo(t){return rt(t,"__v_skip",!0),t}const Z0=t=>w2(t)?Qt(t):t,ga=t=>w2(t)?$o(t):t;function jo(t){o3&&K1&&(t=d2(t),Io(t.dep||(t.dep=ua())))}function Go(t,e){t=d2(t);const c=t.dep;c&&J5(c)}function p1(t){return!!(t&&t.__v_isRef===!0)}function e2(t){return Ko(t,!1)}function By(t){return Ko(t,!0)}function Ko(t,e){return p1(t)?t:new $y(t,e)}class $y{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:d2(e),this._value=c?e:Z0(e)}get value(){return jo(this),this._value}set value(e){const c=this.__v_isShallow||it(e)||q6(e);e=c?e:d2(e),J0(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:Z0(e),Go(this))}}function K2(t){return p1(t)?t.value:t}const qy={get:(t,e,c)=>K2(Reflect.get(t,e,c)),set:(t,e,c,a)=>{const n=t[e];return p1(n)&&!p1(c)?(n.value=c,!0):Reflect.set(t,e,c,a)}};function Qo(t){return E6(t)?t:new Proxy(t,qy)}class Wy{constructor(e,c,a,n){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ha(e,()=>{this._dirty||(this._dirty=!0,Go(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=a}get value(){const e=d2(this);return jo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function jy(t,e,c=!1){let a,n;const r=o2(t);return r?(a=t,n=Y1):(a=t.get,n=t.set),new Wy(a,n,r||!n,c)}function l3(t,e,c,a){let n;try{n=a?t(...a):t()}catch(r){Ee(r,e,c)}return n}function J1(t,e,c,a){if(o2(t)){const r=l3(t,e,c,a);return r&&la(r)&&r.catch(s=>{Ee(s,e,c)}),r}const n=[];for(let r=0;r<t.length;r++)n.push(J1(t[r],e,c,a));return n}function Ee(t,e,c,a=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,i=c;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,s,i)===!1)return}r=r.parent}const o=e.appContext.config.errorHandler;if(o){l3(o,null,10,[t,s,i]);return}}Gy(t,c,n,a)}function Gy(t,e,c,a=!0){console.error(t)}let ee=!1,Z5=!1;const d1=[];let o4=0;const k6=[];let b4=null,R3=0;const Xo=Promise.resolve();let Ha=null;function Va(t){const e=Ha||Xo;return t?e.then(this?t.bind(this):t):e}function Ky(t){let e=o4+1,c=d1.length;for(;e<c;){const a=e+c>>>1;te(d1[a])<t?e=a+1:c=a}return e}function za(t){(!d1.length||!d1.includes(t,ee&&t.allowRecurse?o4+1:o4))&&(t.id==null?d1.push(t):d1.splice(Ky(t.id),0,t),Yo())}function Yo(){!ee&&!Z5&&(Z5=!0,Ha=Xo.then(el))}function Qy(t){const e=d1.indexOf(t);e>o4&&d1.splice(e,1)}function Jo(t){Z(t)?k6.push(...t):(!b4||!b4.includes(t,t.allowRecurse?R3+1:R3))&&k6.push(t),Yo()}function Ts(t,e=ee?o4+1:0){for(;e<d1.length;e++){const c=d1[e];c&&c.pre&&(d1.splice(e,1),e--,c())}}function Zo(t){if(k6.length){const e=[...new Set(k6)];if(k6.length=0,b4){b4.push(...e);return}for(b4=e,b4.sort((c,a)=>te(c)-te(a)),R3=0;R3<b4.length;R3++)b4[R3]();b4=null,R3=0}}const te=t=>t.id==null?1/0:t.id,Xy=(t,e)=>{const c=te(t)-te(e);if(c===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return c};function el(t){Z5=!1,ee=!0,d1.sort(Xy);const e=Y1;try{for(o4=0;o4<d1.length;o4++){const c=d1[o4];c&&c.active!==!1&&l3(c,null,14)}}finally{o4=0,d1.length=0,Zo(),ee=!1,Ha=null,(d1.length||k6.length)&&el()}}function Yy(t,e,...c){if(t.isUnmounted)return;const a=t.vnode.props||b2;let n=c;const r=e.startsWith("update:"),s=r&&e.slice(7);if(s&&s in a){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:h}=a[f]||b2;h&&(n=c.map(d=>W2(d)?d.trim():d)),u&&(n=c.map(st))}let i,o=a[i=f5(e)]||a[i=f5(z4(e))];!o&&r&&(o=a[i=f5(r0(e))]),o&&J1(o,t,6,n);const l=a[i+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,J1(l,t,6,n)}}function tl(t,e,c=!1){const a=e.emitsCache,n=a.get(t);if(n!==void 0)return n;const r=t.emits;let s={},i=!1;if(!o2(t)){const o=l=>{const f=tl(l,e,!0);f&&(i=!0,t1(s,f))};!c&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!r&&!i?(w2(t)&&a.set(t,null),null):(Z(r)?r.forEach(o=>s[o]=null):t1(s,r),w2(t)&&a.set(t,s),s)}function Xt(t,e){return!t||!$t(e)?!1:(e=e.slice(2).replace(/Once$/,""),m2(t,e[0].toLowerCase()+e.slice(1))||m2(t,r0(e))||m2(t,e))}let s1=null,cl=null;function ot(t){const e=s1;return s1=t,cl=t&&t.type.__scopeId||null,e}function k2(t,e=s1,c){if(!e||t._n)return t;const a=(...n)=>{a._d&&qs(-1);const r=ot(e);let s;try{s=t(...n)}finally{ot(r),a._d&&qs(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function u5(t){const{type:e,vnode:c,proxy:a,withProxy:n,props:r,propsOptions:[s],slots:i,attrs:o,emit:l,render:f,renderCache:u,data:h,setupState:d,ctx:v,inheritAttrs:H}=t;let y,V;const C=ot(t);try{if(c.shapeFlag&4){const M=n||a;y=G1(f.call(M,M,u,r,d,h,v)),V=o}else{const M=e;y=G1(M.length>1?M(r,{attrs:o,slots:i,emit:l}):M(r,null)),V=e.props?o:Zy(o)}}catch(M){O0.length=0,Ee(M,t,1),y=Q(C4)}let b=y;if(V&&H!==!1){const M=Object.keys(V),{shapeFlag:E}=b;M.length&&E&7&&(s&&M.some(ia)&&(V=e_(V,s)),b=j6(b,V))}return c.dirs&&(b=j6(b),b.dirs=b.dirs?b.dirs.concat(c.dirs):c.dirs),c.transition&&(b.transition=c.transition),y=b,ot(C),y}function Jy(t){let e;for(let c=0;c<t.length;c++){const a=t[c];if(ae(a)){if(a.type!==C4||a.children==="v-if"){if(e)return;e=a}}else return}return e}const Zy=t=>{let e;for(const c in t)(c==="class"||c==="style"||$t(c))&&((e||(e={}))[c]=t[c]);return e},e_=(t,e)=>{const c={};for(const a in t)(!ia(a)||!(a.slice(9)in e))&&(c[a]=t[a]);return c};function t_(t,e,c){const{props:a,children:n,component:r}=t,{props:s,children:i,patchFlag:o}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(c&&o>=0){if(o&1024)return!0;if(o&16)return a?Ns(a,s,l):!!s;if(o&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(s[h]!==a[h]&&!Xt(l,h))return!0}}}else return(n||i)&&(!i||!i.$stable)?!0:a===s?!1:a?s?Ns(a,s,l):!0:!!s;return!1}function Ns(t,e,c){const a=Object.keys(e);if(a.length!==Object.keys(t).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(e[r]!==t[r]&&!Xt(c,r))return!0}return!1}function Ca({vnode:t,parent:e},c){for(;e&&e.subTree===t;)(t=e.vnode).el=c,e=e.parent}const c_=t=>t.__isSuspense,a_={name:"Suspense",__isSuspense:!0,process(t,e,c,a,n,r,s,i,o,l){t==null?r_(e,c,a,n,r,s,i,o,l):s_(t,e,c,a,n,s,i,o,l)},hydrate:i_,create:Ma,normalize:o_},n_=a_;function ce(t,e){const c=t.props&&t.props[e];o2(c)&&c()}function r_(t,e,c,a,n,r,s,i,o){const{p:l,o:{createElement:f}}=o,u=f("div"),h=t.suspense=Ma(t,n,a,e,u,c,r,s,i,o);l(null,h.pendingBranch=t.ssContent,u,null,a,h,r,s),h.deps>0?(ce(t,"onPending"),ce(t,"onFallback"),l(null,t.ssFallback,e,c,a,null,r,s),I6(h,t.ssFallback)):h.resolve(!1,!0)}function s_(t,e,c,a,n,r,s,i,{p:o,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:v,pendingBranch:H,isInFallback:y,isHydrating:V}=u;if(H)u.pendingBranch=h,t3(h,H)?(o(H,h,u.hiddenContainer,null,n,u,r,s,i),u.deps<=0?u.resolve():y&&(o(v,d,c,a,n,null,r,s,i),I6(u,d))):(u.pendingId++,V?(u.isHydrating=!1,u.activeBranch=H):l(H,n,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),y?(o(null,h,u.hiddenContainer,null,n,u,r,s,i),u.deps<=0?u.resolve():(o(v,d,c,a,n,null,r,s,i),I6(u,d))):v&&t3(h,v)?(o(v,h,c,a,n,u,r,s,i),u.resolve(!0)):(o(null,h,u.hiddenContainer,null,n,u,r,s,i),u.deps<=0&&u.resolve()));else if(v&&t3(h,v))o(v,h,c,a,n,u,r,s,i),I6(u,h);else if(ce(e,"onPending"),u.pendingBranch=h,u.pendingId++,o(null,h,u.hiddenContainer,null,n,u,r,s,i),u.deps<=0)u.resolve();else{const{timeout:C,pendingId:b}=u;C>0?setTimeout(()=>{u.pendingId===b&&u.fallback(d)},C):C===0&&u.fallback(d)}}function Ma(t,e,c,a,n,r,s,i,o,l,f=!1){const{p:u,m:h,um:d,n:v,o:{parentNode:H,remove:y}}=l;let V;const C=f_(t);C&&e!=null&&e.pendingBranch&&(V=e.pendingId,e.deps++);const b=t.props?ny(t.props.timeout):void 0,M={vnode:t,parent:e,parentComponent:c,isSVG:s,container:a,hiddenContainer:n,anchor:r,deps:0,pendingId:0,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(E=!1,F=!1){const{vnode:K,activeBranch:a2,pendingBranch:i2,pendingId:C2,effects:U2,parentComponent:O1,container:o1}=M;if(M.isHydrating)M.isHydrating=!1;else if(!E){const B2=a2&&i2.transition&&i2.transition.mode==="out-in";B2&&(a2.transition.afterLeave=()=>{C2===M.pendingId&&h(i2,o1,v2,0)});let{anchor:v2}=M;a2&&(v2=v(a2),d(a2,O1,M,!0)),B2||h(i2,o1,v2,0)}I6(M,i2),M.pendingBranch=null,M.isInFallback=!1;let $1=M.parent,_4=!1;for(;$1;){if($1.pendingBranch){$1.effects.push(...U2),_4=!0;break}$1=$1.parent}_4||Jo(U2),M.effects=[],C&&e&&e.pendingBranch&&V===e.pendingId&&(e.deps--,e.deps===0&&!F&&e.resolve()),ce(K,"onResolve")},fallback(E){if(!M.pendingBranch)return;const{vnode:F,activeBranch:K,parentComponent:a2,container:i2,isSVG:C2}=M;ce(F,"onFallback");const U2=v(K),O1=()=>{M.isInFallback&&(u(null,E,i2,U2,a2,null,C2,i,o),I6(M,E))},o1=E.transition&&E.transition.mode==="out-in";o1&&(K.transition.afterLeave=O1),M.isInFallback=!0,d(K,a2,null,!0),o1||O1()},move(E,F,K){M.activeBranch&&h(M.activeBranch,E,F,K),M.container=E},next(){return M.activeBranch&&v(M.activeBranch)},registerDep(E,F){const K=!!M.pendingBranch;K&&M.deps++;const a2=E.vnode.el;E.asyncDep.catch(i2=>{Ee(i2,E,0)}).then(i2=>{if(E.isUnmounted||M.isUnmounted||M.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:C2}=E;s7(E,i2,!1),a2&&(C2.el=a2);const U2=!a2&&E.subTree.el;F(E,C2,H(a2||E.subTree.el),a2?null:v(E.subTree),M,s,o),U2&&y(U2),Ca(E,C2.el),K&&--M.deps===0&&M.resolve()})},unmount(E,F){M.isUnmounted=!0,M.activeBranch&&d(M.activeBranch,c,E,F),M.pendingBranch&&d(M.pendingBranch,c,E,F)}};return M}function i_(t,e,c,a,n,r,s,i,o){const l=e.suspense=Ma(e,a,c,t.parentNode,document.createElement("div"),null,n,r,s,i,!0),f=o(t,l.pendingBranch=e.ssContent,c,l,r,s);return l.deps===0&&l.resolve(!1,!0),f}function o_(t){const{shapeFlag:e,children:c}=t,a=e&32;t.ssContent=Es(a?c.default:c),t.ssFallback=a?Es(c.fallback):Q(C4)}function Es(t){let e;if(o2(t)){const c=W6&&t._c;c&&(t._d=!1,S()),t=t(),c&&(t._d=!0,e=B1,Vl())}return Z(t)&&(t=Jy(t)),t=G1(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(c=>c!==t)),t}function l_(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Jo(t)}function I6(t,e){t.activeBranch=e;const{vnode:c,parentComponent:a}=t,n=c.el=e.el;a&&a.subTree===c&&(a.vnode.el=n,Ca(a,n))}function f_(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const V8={};function j3(t,e,c){return al(t,e,c)}function al(t,e,{immediate:c,deep:a,flush:n,onTrack:r,onTrigger:s}=b2){var i;const o=py()===((i=e1)==null?void 0:i.scope)?e1:null;let l,f=!1,u=!1;if(p1(t)?(l=()=>t.value,f=it(t)):E6(t)?(l=()=>t,a=!0):Z(t)?(u=!0,f=t.some(M=>E6(M)||it(M)),l=()=>t.map(M=>{if(p1(M))return M.value;if(E6(M))return F3(M);if(o2(M))return l3(M,o,2)})):o2(t)?e?l=()=>l3(t,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),J1(t,o,3,[d])}:l=Y1,e&&a){const M=l;l=()=>F3(M())}let h,d=M=>{h=C.onStop=()=>{l3(M,o,4)}},v;if(ne)if(d=Y1,e?c&&J1(e,o,3,[l(),u?[]:void 0,d]):l(),n==="sync"){const M=rL();v=M.__watcherHandles||(M.__watcherHandles=[])}else return Y1;let H=u?new Array(t.length).fill(V8):V8;const y=()=>{if(C.active)if(e){const M=C.run();(a||f||(u?M.some((E,F)=>J0(E,H[F])):J0(M,H)))&&(h&&h(),J1(e,o,3,[M,H===V8?void 0:u&&H[0]===V8?[]:H,d]),H=M)}else C.run()};y.allowRecurse=!!e;let V;n==="sync"?V=y:n==="post"?V=()=>x1(y,o&&o.suspense):(y.pre=!0,o&&(y.id=o.uid),V=()=>za(y));const C=new ha(l,V);e?c?y():H=C.run():n==="post"?x1(C.run.bind(C),o&&o.suspense):C.run();const b=()=>{C.stop(),o&&o.scope&&oa(o.scope.effects,C)};return v&&v.push(b),b}function u_(t,e,c){const a=this.proxy,n=W2(t)?t.includes(".")?nl(a,t):()=>a[t]:t.bind(a,a);let r;o2(e)?r=e:(r=e.handler,c=e);const s=e1;H3(this);const i=al(n,r.bind(a),c);return s?H3(s):f3(),i}function nl(t,e){const c=e.split(".");return()=>{let a=t;for(let n=0;n<c.length&&a;n++)a=a[c[n]];return a}}function F3(t,e){if(!w2(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),p1(t))F3(t.value,e);else if(Z(t))for(let c=0;c<t.length;c++)F3(t[c],e);else if(qt(t)||N6(t))t.forEach(c=>{F3(c,e)});else if(Ao(t))for(const c in t)F3(t[c],e);return t}function v1(t,e){const c=s1;if(c===null)return t;const a=ec(c)||c.proxy,n=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,i,o,l=b2]=e[r];s&&(o2(s)&&(s={mounted:s,updated:s}),s.deep&&F3(i),n.push({dir:s,instance:a,value:i,oldValue:void 0,arg:o,modifiers:l}))}return t}function E3(t,e,c,a){const n=t.dirs,r=e&&e.dirs;for(let s=0;s<n.length;s++){const i=n[s];r&&(i.oldValue=r[s].value);let o=i.dir[a];o&&(s0(),J1(o,c,8,[t.el,i,t,e]),i0())}}function ya(t,e){return o2(t)?(()=>t1({name:t.name},e,{setup:t}))():t}const P0=t=>!!t.type.__asyncLoader,rl=t=>t.type.__isKeepAlive;function h_(t,e){sl(t,"a",e)}function d_(t,e){sl(t,"da",e)}function sl(t,e,c=e1){const a=t.__wdc||(t.__wdc=()=>{let n=c;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Yt(e,a,c),c){let n=c.parent;for(;n&&n.parent;)rl(n.parent.vnode)&&m_(a,e,c,n),n=n.parent}}function m_(t,e,c,a){const n=Yt(e,t,a,!0);ol(()=>{oa(a[e],n)},c)}function Yt(t,e,c=e1,a=!1){if(c){const n=c[t]||(c[t]=[]),r=e.__weh||(e.__weh=(...s)=>{if(c.isUnmounted)return;s0(),H3(c);const i=J1(e,c,t,s);return f3(),i0(),i});return a?n.unshift(r):n.push(r),r}}const j4=t=>(e,c=e1)=>(!ne||t==="sp")&&Yt(t,(...a)=>e(...a),c),p_=j4("bm"),il=j4("m"),v_=j4("bu"),g_=j4("u"),H_=j4("bum"),ol=j4("um"),V_=j4("sp"),z_=j4("rtg"),C_=j4("rtc");function M_(t,e=e1){Yt("ec",t,e)}const ll="components";function X3(t,e){return __(ll,t,!0,e)||t}const y_=Symbol.for("v-ndc");function __(t,e,c=!0,a=!1){const n=s1||e1;if(n){const r=n.type;if(t===ll){const i=cL(r,!1);if(i&&(i===e||i===z4(e)||i===jt(z4(e))))return r}const s=ks(n[t]||r[t],e)||ks(n.appContext[t],e);return!s&&a?r:s}}function ks(t,e){return t&&(t[e]||t[z4(e)]||t[jt(z4(e))])}function v3(t,e,c,a){let n;const r=c&&c[a];if(Z(t)||W2(t)){n=new Array(t.length);for(let s=0,i=t.length;s<i;s++)n[s]=e(t[s],s,void 0,r&&r[s])}else if(typeof t=="number"){n=new Array(t);for(let s=0;s<t;s++)n[s]=e(s+1,s,void 0,r&&r[s])}else if(w2(t))if(t[Symbol.iterator])n=Array.from(t,(s,i)=>e(s,i,void 0,r&&r[i]));else{const s=Object.keys(t);n=new Array(s.length);for(let i=0,o=s.length;i<o;i++){const l=s[i];n[i]=e(t[l],l,i,r&&r[i])}}else n=[];return c&&(c[a]=n),n}function Q1(t,e,c={},a,n){if(s1.isCE||s1.parent&&P0(s1.parent)&&s1.parent.isCE)return e!=="default"&&(c.name=e),Q("slot",c,a&&a());let r=t[e];r&&r._c&&(r._d=!1),S();const s=r&&fl(r(c)),i=a4(z2,{key:c.key||s&&s.key||`_${e}`},s||(a?a():[]),s&&t._===1?64:-2);return!n&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function fl(t){return t.some(e=>ae(e)?!(e.type===C4||e.type===z2&&!fl(e.children)):!0)?t:null}const e7=t=>t?yl(t)?ec(t)||t.proxy:e7(t.parent):null,D0=t1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>e7(t.parent),$root:t=>e7(t.root),$emit:t=>t.emit,$options:t=>_a(t),$forceUpdate:t=>t.f||(t.f=()=>za(t.update)),$nextTick:t=>t.n||(t.n=Va.bind(t.proxy)),$watch:t=>u_.bind(t)}),h5=(t,e)=>t!==b2&&!t.__isScriptSetup&&m2(t,e),L_={get({_:t},e){const{ctx:c,setupState:a,data:n,props:r,accessCache:s,type:i,appContext:o}=t;let l;if(e[0]!=="$"){const d=s[e];if(d!==void 0)switch(d){case 1:return a[e];case 2:return n[e];case 4:return c[e];case 3:return r[e]}else{if(h5(a,e))return s[e]=1,a[e];if(n!==b2&&m2(n,e))return s[e]=2,n[e];if((l=t.propsOptions[0])&&m2(l,e))return s[e]=3,r[e];if(c!==b2&&m2(c,e))return s[e]=4,c[e];t7&&(s[e]=0)}}const f=D0[e];let u,h;if(f)return e==="$attrs"&&E1(t,"get",e),f(t);if((u=i.__cssModules)&&(u=u[e]))return u;if(c!==b2&&m2(c,e))return s[e]=4,c[e];if(h=o.config.globalProperties,m2(h,e))return h[e]},set({_:t},e,c){const{data:a,setupState:n,ctx:r}=t;return h5(n,e)?(n[e]=c,!0):a!==b2&&m2(a,e)?(a[e]=c,!0):m2(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=c,!0)},has({_:{data:t,setupState:e,accessCache:c,ctx:a,appContext:n,propsOptions:r}},s){let i;return!!c[s]||t!==b2&&m2(t,s)||h5(e,s)||(i=r[0])&&m2(i,s)||m2(a,s)||m2(D0,s)||m2(n.config.globalProperties,s)},defineProperty(t,e,c){return c.get!=null?t._.accessCache[e]=0:m2(c,"value")&&this.set(t,e,c.value,null),Reflect.defineProperty(t,e,c)}};function Is(t){return Z(t)?t.reduce((e,c)=>(e[c]=null,e),{}):t}function R4(t){const e=Y_();let c=t();return f3(),la(c)&&(c=c.catch(a=>{throw H3(e),a})),[c,()=>H3(e)]}let t7=!0;function w_(t){const e=_a(t),c=t.proxy,a=t.ctx;t7=!1,e.beforeCreate&&Rs(e.beforeCreate,t,"bc");const{data:n,computed:r,methods:s,watch:i,provide:o,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:v,activated:H,deactivated:y,beforeDestroy:V,beforeUnmount:C,destroyed:b,unmounted:M,render:E,renderTracked:F,renderTriggered:K,errorCaptured:a2,serverPrefetch:i2,expose:C2,inheritAttrs:U2,components:O1,directives:o1,filters:$1}=e;if(l&&b_(l,a,null),s)for(const v2 in s){const H2=s[v2];o2(H2)&&(a[v2]=H2.bind(c))}if(n){const v2=n.call(c,c);w2(v2)&&(t.data=Qt(v2))}if(t7=!0,r)for(const v2 in r){const H2=r[v2],L4=o2(H2)?H2.bind(c,c):o2(H2.get)?H2.get.bind(c,c):Y1,K4=!o2(H2)&&o2(H2.set)?H2.set.bind(c):Y1,n4=q2({get:L4,set:K4});Object.defineProperty(a,v2,{enumerable:!0,configurable:!0,get:()=>n4.value,set:w1=>n4.value=w1})}if(i)for(const v2 in i)ul(i[v2],a,c,v2);if(o){const v2=o2(o)?o.call(c):o;Reflect.ownKeys(v2).forEach(H2=>{W8(H2,v2[H2])})}f&&Rs(f,t,"c");function B2(v2,H2){Z(H2)?H2.forEach(L4=>v2(L4.bind(c))):H2&&v2(H2.bind(c))}if(B2(p_,u),B2(il,h),B2(v_,d),B2(g_,v),B2(h_,H),B2(d_,y),B2(M_,a2),B2(C_,F),B2(z_,K),B2(H_,C),B2(ol,M),B2(V_,i2),Z(C2))if(C2.length){const v2=t.exposed||(t.exposed={});C2.forEach(H2=>{Object.defineProperty(v2,H2,{get:()=>c[H2],set:L4=>c[H2]=L4})})}else t.exposed||(t.exposed={});E&&t.render===Y1&&(t.render=E),U2!=null&&(t.inheritAttrs=U2),O1&&(t.components=O1),o1&&(t.directives=o1)}function b_(t,e,c=Y1){Z(t)&&(t=c7(t));for(const a in t){const n=t[a];let r;w2(n)?"default"in n?r=m4(n.from||a,n.default,!0):r=m4(n.from||a):r=m4(n),p1(r)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):e[a]=r}}function Rs(t,e,c){J1(Z(t)?t.map(a=>a.bind(e.proxy)):t.bind(e.proxy),e,c)}function ul(t,e,c,a){const n=a.includes(".")?nl(c,a):()=>c[a];if(W2(t)){const r=e[t];o2(r)&&j3(n,r)}else if(o2(t))j3(n,t.bind(c));else if(w2(t))if(Z(t))t.forEach(r=>ul(r,e,c,a));else{const r=o2(t.handler)?t.handler.bind(c):e[t.handler];o2(r)&&j3(n,r,t)}}function _a(t){const e=t.type,{mixins:c,extends:a}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:s}}=t.appContext,i=r.get(e);let o;return i?o=i:!n.length&&!c&&!a?o=e:(o={},n.length&&n.forEach(l=>lt(o,l,s,!0)),lt(o,e,s)),w2(e)&&r.set(e,o),o}function lt(t,e,c,a=!1){const{mixins:n,extends:r}=e;r&&lt(t,r,c,!0),n&&n.forEach(s=>lt(t,s,c,!0));for(const s in e)if(!(a&&s==="expose")){const i=x_[s]||c&&c[s];t[s]=i?i(t[s],e[s]):e[s]}return t}const x_={data:Ps,props:Ds,emits:Ds,methods:b0,computed:b0,beforeCreate:y1,created:y1,beforeMount:y1,mounted:y1,beforeUpdate:y1,updated:y1,beforeDestroy:y1,beforeUnmount:y1,destroyed:y1,unmounted:y1,activated:y1,deactivated:y1,errorCaptured:y1,serverPrefetch:y1,components:b0,directives:b0,watch:S_,provide:Ps,inject:A_};function Ps(t,e){return e?t?function(){return t1(o2(t)?t.call(this,this):t,o2(e)?e.call(this,this):e)}:e:t}function A_(t,e){return b0(c7(t),c7(e))}function c7(t){if(Z(t)){const e={};for(let c=0;c<t.length;c++)e[t[c]]=t[c];return e}return t}function y1(t,e){return t?[...new Set([].concat(t,e))]:e}function b0(t,e){return t?t1(Object.create(null),t,e):e}function Ds(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:t1(Object.create(null),Is(t),Is(e??{})):e}function S_(t,e){if(!t)return e;if(!e)return t;const c=t1(Object.create(null),t);for(const a in e)c[a]=y1(t[a],e[a]);return c}function hl(){return{app:null,config:{isNativeTag:JM,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let T_=0;function N_(t,e){return function(a,n=null){o2(a)||(a=t1({},a)),n!=null&&!w2(n)&&(n=null);const r=hl(),s=new Set;let i=!1;const o=r.app={_uid:T_++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:sL,get config(){return r.config},set config(l){},use(l,...f){return s.has(l)||(l&&o2(l.install)?(s.add(l),l.install(o,...f)):o2(l)&&(s.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,u){if(!i){const h=Q(a,n);return h.appContext=r,f&&e?e(h,l):t(h,l,u),i=!0,o._container=l,l.__vue_app__=o,ec(h.component)||h.component.proxy}},unmount(){i&&(t(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o},runWithContext(l){ft=o;try{return l()}finally{ft=null}}};return o}}let ft=null;function W8(t,e){if(e1){let c=e1.provides;const a=e1.parent&&e1.parent.provides;a===c&&(c=e1.provides=Object.create(a)),c[t]=e}}function m4(t,e,c=!1){const a=e1||s1;if(a||ft){const n=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:ft._context.provides;if(n&&t in n)return n[t];if(arguments.length>1)return c&&o2(e)?e.call(a&&a.proxy):e}}function E_(t,e,c,a=!1){const n={},r={};rt(r,Zt,1),t.propsDefaults=Object.create(null),dl(t,e,n,r);for(const s in t.propsOptions[0])s in n||(n[s]=void 0);c?t.props=a?n:Bo(n):t.type.props?t.props=n:t.props=r,t.attrs=r}function k_(t,e,c,a){const{props:n,attrs:r,vnode:{patchFlag:s}}=t,i=d2(n),[o]=t.propsOptions;let l=!1;if((a||s>0)&&!(s&16)){if(s&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Xt(t.emitsOptions,h))continue;const d=e[h];if(o)if(m2(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const v=z4(h);n[v]=a7(o,i,v,d,t,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{dl(t,e,n,r)&&(l=!0);let f;for(const u in i)(!e||!m2(e,u)&&((f=r0(u))===u||!m2(e,f)))&&(o?c&&(c[u]!==void 0||c[f]!==void 0)&&(n[u]=a7(o,i,u,void 0,t,!0)):delete n[u]);if(r!==i)for(const u in r)(!e||!m2(e,u))&&(delete r[u],l=!0)}l&&I4(t,"set","$attrs")}function dl(t,e,c,a){const[n,r]=t.propsOptions;let s=!1,i;if(e)for(let o in e){if($8(o))continue;const l=e[o];let f;n&&m2(n,f=z4(o))?!r||!r.includes(f)?c[f]=l:(i||(i={}))[f]=l:Xt(t.emitsOptions,o)||(!(o in a)||l!==a[o])&&(a[o]=l,s=!0)}if(r){const o=d2(c),l=i||b2;for(let f=0;f<r.length;f++){const u=r[f];c[u]=a7(n,o,u,l[u],t,!m2(l,u))}}return s}function a7(t,e,c,a,n,r){const s=t[c];if(s!=null){const i=m2(s,"default");if(i&&a===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&o2(o)){const{propsDefaults:l}=n;c in l?a=l[c]:(H3(n),a=l[c]=o.call(null,e),f3())}else a=o}s[0]&&(r&&!i?a=!1:s[1]&&(a===""||a===r0(c))&&(a=!0))}return a}function ml(t,e,c=!1){const a=e.propsCache,n=a.get(t);if(n)return n;const r=t.props,s={},i=[];let o=!1;if(!o2(t)){const f=u=>{o=!0;const[h,d]=ml(u,e,!0);t1(s,h),d&&i.push(...d)};!c&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!o)return w2(t)&&a.set(t,T6),T6;if(Z(r))for(let f=0;f<r.length;f++){const u=z4(r[f]);Fs(u)&&(s[u]=b2)}else if(r)for(const f in r){const u=z4(f);if(Fs(u)){const h=r[f],d=s[u]=Z(h)||o2(h)?{type:h}:t1({},h);if(d){const v=Bs(Boolean,d.type),H=Bs(String,d.type);d[0]=v>-1,d[1]=H<0||v<H,(v>-1||m2(d,"default"))&&i.push(u)}}}const l=[s,i];return w2(t)&&a.set(t,l),l}function Fs(t){return t[0]!=="$"}function Os(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Us(t,e){return Os(t)===Os(e)}function Bs(t,e){return Z(e)?e.findIndex(c=>Us(c,t)):o2(e)&&Us(e,t)?0:-1}const pl=t=>t[0]==="_"||t==="$stable",La=t=>Z(t)?t.map(G1):[G1(t)],I_=(t,e,c)=>{if(e._n)return e;const a=k2((...n)=>La(e(...n)),c);return a._c=!1,a},vl=(t,e,c)=>{const a=t._ctx;for(const n in t){if(pl(n))continue;const r=t[n];if(o2(r))e[n]=I_(n,r,a);else if(r!=null){const s=La(r);e[n]=()=>s}}},gl=(t,e)=>{const c=La(e);t.slots.default=()=>c},R_=(t,e)=>{if(t.vnode.shapeFlag&32){const c=e._;c?(t.slots=d2(e),rt(e,"_",c)):vl(e,t.slots={})}else t.slots={},e&&gl(t,e);rt(t.slots,Zt,1)},P_=(t,e,c)=>{const{vnode:a,slots:n}=t;let r=!0,s=b2;if(a.shapeFlag&32){const i=e._;i?c&&i===1?r=!1:(t1(n,e),!c&&i===1&&delete n._):(r=!e.$stable,vl(e,n)),s=e}else e&&(gl(t,e),s={default:1});if(r)for(const i in n)!pl(i)&&!(i in s)&&delete n[i]};function n7(t,e,c,a,n=!1){if(Z(t)){t.forEach((h,d)=>n7(h,e&&(Z(e)?e[d]:e),c,a,n));return}if(P0(a)&&!n)return;const r=a.shapeFlag&4?ec(a.component)||a.component.proxy:a.el,s=n?null:r,{i,r:o}=t,l=e&&e.r,f=i.refs===b2?i.refs={}:i.refs,u=i.setupState;if(l!=null&&l!==o&&(W2(l)?(f[l]=null,m2(u,l)&&(u[l]=null)):p1(l)&&(l.value=null)),o2(o))l3(o,i,12,[s,f]);else{const h=W2(o),d=p1(o);if(h||d){const v=()=>{if(t.f){const H=h?m2(u,o)?u[o]:f[o]:o.value;n?Z(H)&&oa(H,r):Z(H)?H.includes(r)||H.push(r):h?(f[o]=[r],m2(u,o)&&(u[o]=f[o])):(o.value=[r],t.k&&(f[t.k]=o.value))}else h?(f[o]=s,m2(u,o)&&(u[o]=s)):d&&(o.value=s,t.k&&(f[t.k]=s))};s?(v.id=-1,x1(v,c)):v()}}}const x1=l_;function D_(t){return F_(t)}function F_(t,e){const c=K5();c.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:s,createText:i,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=Y1,insertStaticContent:v}=t,H=(m,p,z,_=null,x=null,A=null,O=!1,k=null,R=!!p.dynamicChildren)=>{if(m===p)return;m&&!t3(m,p)&&(_=w(m),w1(m,x,A,!0),m=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:Y,shapeFlag:q}=p;switch(T){case Jt:y(m,p,z,_);break;case C4:V(m,p,z,_);break;case j8:m==null&&C(p,z,_,O);break;case z2:O1(m,p,z,_,x,A,O,k,R);break;default:q&1?E(m,p,z,_,x,A,O,k,R):q&6?o1(m,p,z,_,x,A,O,k,R):(q&64||q&128)&&T.process(m,p,z,_,x,A,O,k,R,P)}Y!=null&&x&&n7(Y,m&&m.ref,A,p||m,!p)},y=(m,p,z,_)=>{if(m==null)a(p.el=i(p.children),z,_);else{const x=p.el=m.el;p.children!==m.children&&l(x,p.children)}},V=(m,p,z,_)=>{m==null?a(p.el=o(p.children||""),z,_):p.el=m.el},C=(m,p,z,_)=>{[m.el,m.anchor]=v(m.children,p,z,_,m.el,m.anchor)},b=({el:m,anchor:p},z,_)=>{let x;for(;m&&m!==p;)x=h(m),a(m,z,_),m=x;a(p,z,_)},M=({el:m,anchor:p})=>{let z;for(;m&&m!==p;)z=h(m),n(m),m=z;n(p)},E=(m,p,z,_,x,A,O,k,R)=>{O=O||p.type==="svg",m==null?F(p,z,_,x,A,O,k,R):i2(m,p,x,A,O,k,R)},F=(m,p,z,_,x,A,O,k)=>{let R,T;const{type:Y,props:q,shapeFlag:J,transition:r2,dirs:f2}=m;if(R=m.el=s(m.type,A,q&&q.is,q),J&8?f(R,m.children):J&16&&a2(m.children,R,null,_,x,A&&Y!=="foreignObject",O,k),f2&&E3(m,null,_,"created"),K(R,m,m.scopeId,O,_),q){for(const _2 in q)_2!=="value"&&!$8(_2)&&r(R,_2,null,q[_2],A,m.children,_,x,l1);"value"in q&&r(R,"value",null,q.value),(T=q.onVnodeBeforeMount)&&s4(T,_,m)}f2&&E3(m,null,_,"beforeMount");const L2=(!x||x&&!x.pendingBranch)&&r2&&!r2.persisted;L2&&r2.beforeEnter(R),a(R,p,z),((T=q&&q.onVnodeMounted)||L2||f2)&&x1(()=>{T&&s4(T,_,m),L2&&r2.enter(R),f2&&E3(m,null,_,"mounted")},x)},K=(m,p,z,_,x)=>{if(z&&d(m,z),_)for(let A=0;A<_.length;A++)d(m,_[A]);if(x){let A=x.subTree;if(p===A){const O=x.vnode;K(m,O,O.scopeId,O.slotScopeIds,x.parent)}}},a2=(m,p,z,_,x,A,O,k,R=0)=>{for(let T=R;T<m.length;T++){const Y=m[T]=k?Z4(m[T]):G1(m[T]);H(null,Y,p,z,_,x,A,O,k)}},i2=(m,p,z,_,x,A,O)=>{const k=p.el=m.el;let{patchFlag:R,dynamicChildren:T,dirs:Y}=p;R|=m.patchFlag&16;const q=m.props||b2,J=p.props||b2;let r2;z&&k3(z,!1),(r2=J.onVnodeBeforeUpdate)&&s4(r2,z,p,m),Y&&E3(p,m,z,"beforeUpdate"),z&&k3(z,!0);const f2=x&&p.type!=="foreignObject";if(T?C2(m.dynamicChildren,T,k,z,_,f2,A):O||H2(m,p,k,null,z,_,f2,A,!1),R>0){if(R&16)U2(k,p,q,J,z,_,x);else if(R&2&&q.class!==J.class&&r(k,"class",null,J.class,x),R&4&&r(k,"style",q.style,J.style,x),R&8){const L2=p.dynamicProps;for(let _2=0;_2<L2.length;_2++){const j2=L2[_2],q1=q[j2],V6=J[j2];(V6!==q1||j2==="value")&&r(k,j2,q1,V6,x,m.children,z,_,l1)}}R&1&&m.children!==p.children&&f(k,p.children)}else!O&&T==null&&U2(k,p,q,J,z,_,x);((r2=J.onVnodeUpdated)||Y)&&x1(()=>{r2&&s4(r2,z,p,m),Y&&E3(p,m,z,"updated")},_)},C2=(m,p,z,_,x,A,O)=>{for(let k=0;k<p.length;k++){const R=m[k],T=p[k],Y=R.el&&(R.type===z2||!t3(R,T)||R.shapeFlag&70)?u(R.el):z;H(R,T,Y,null,_,x,A,O,!0)}},U2=(m,p,z,_,x,A,O)=>{if(z!==_){if(z!==b2)for(const k in z)!$8(k)&&!(k in _)&&r(m,k,z[k],null,O,p.children,x,A,l1);for(const k in _){if($8(k))continue;const R=_[k],T=z[k];R!==T&&k!=="value"&&r(m,k,T,R,O,p.children,x,A,l1)}"value"in _&&r(m,"value",z.value,_.value)}},O1=(m,p,z,_,x,A,O,k,R)=>{const T=p.el=m?m.el:i(""),Y=p.anchor=m?m.anchor:i("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:r2}=p;r2&&(k=k?k.concat(r2):r2),m==null?(a(T,z,_),a(Y,z,_),a2(p.children,z,Y,x,A,O,k,R)):q>0&&q&64&&J&&m.dynamicChildren?(C2(m.dynamicChildren,J,z,x,A,O,k),(p.key!=null||x&&p===x.subTree)&&wa(m,p,!0)):H2(m,p,z,Y,x,A,O,k,R)},o1=(m,p,z,_,x,A,O,k,R)=>{p.slotScopeIds=k,m==null?p.shapeFlag&512?x.ctx.activate(p,z,_,O,R):$1(p,z,_,x,A,O,R):_4(m,p,R)},$1=(m,p,z,_,x,A,O)=>{const k=m.component=X_(m,_,x);if(rl(m)&&(k.ctx.renderer=P),J_(k),k.asyncDep){if(x&&x.registerDep(k,B2),!m.el){const R=k.subTree=Q(C4);V(null,R,p,z)}return}B2(k,m,p,z,x,A,O)},_4=(m,p,z)=>{const _=p.component=m.component;if(t_(m,p,z))if(_.asyncDep&&!_.asyncResolved){v2(_,p,z);return}else _.next=p,Qy(_.update),_.update();else p.el=m.el,_.vnode=p},B2=(m,p,z,_,x,A,O)=>{const k=()=>{if(m.isMounted){let{next:Y,bu:q,u:J,parent:r2,vnode:f2}=m,L2=Y,_2;k3(m,!1),Y?(Y.el=f2.el,v2(m,Y,O)):Y=f2,q&&q8(q),(_2=Y.props&&Y.props.onVnodeBeforeUpdate)&&s4(_2,r2,Y,f2),k3(m,!0);const j2=u5(m),q1=m.subTree;m.subTree=j2,H(q1,j2,u(q1.el),w(q1),m,x,A),Y.el=j2.el,L2===null&&Ca(m,j2.el),J&&x1(J,x),(_2=Y.props&&Y.props.onVnodeUpdated)&&x1(()=>s4(_2,r2,Y,f2),x)}else{let Y;const{el:q,props:J}=p,{bm:r2,m:f2,parent:L2}=m,_2=P0(p);if(k3(m,!1),r2&&q8(r2),!_2&&(Y=J&&J.onVnodeBeforeMount)&&s4(Y,L2,p),k3(m,!0),q&&V2){const j2=()=>{m.subTree=u5(m),V2(q,m.subTree,m,x,null)};_2?p.type.__asyncLoader().then(()=>!m.isUnmounted&&j2()):j2()}else{const j2=m.subTree=u5(m);H(null,j2,z,_,m,x,A),p.el=j2.el}if(f2&&x1(f2,x),!_2&&(Y=J&&J.onVnodeMounted)){const j2=p;x1(()=>s4(Y,L2,j2),x)}(p.shapeFlag&256||L2&&P0(L2.vnode)&&L2.vnode.shapeFlag&256)&&m.a&&x1(m.a,x),m.isMounted=!0,p=z=_=null}},R=m.effect=new ha(k,()=>za(T),m.scope),T=m.update=()=>R.run();T.id=m.uid,k3(m,!0),T()},v2=(m,p,z)=>{p.component=m;const _=m.vnode.props;m.vnode=p,m.next=null,k_(m,p.props,_,z),P_(m,p.children,z),s0(),Ts(),i0()},H2=(m,p,z,_,x,A,O,k,R=!1)=>{const T=m&&m.children,Y=m?m.shapeFlag:0,q=p.children,{patchFlag:J,shapeFlag:r2}=p;if(J>0){if(J&128){K4(T,q,z,_,x,A,O,k,R);return}else if(J&256){L4(T,q,z,_,x,A,O,k,R);return}}r2&8?(Y&16&&l1(T,x,A),q!==T&&f(z,q)):Y&16?r2&16?K4(T,q,z,_,x,A,O,k,R):l1(T,x,A,!0):(Y&8&&f(z,""),r2&16&&a2(q,z,_,x,A,O,k,R))},L4=(m,p,z,_,x,A,O,k,R)=>{m=m||T6,p=p||T6;const T=m.length,Y=p.length,q=Math.min(T,Y);let J;for(J=0;J<q;J++){const r2=p[J]=R?Z4(p[J]):G1(p[J]);H(m[J],r2,z,null,x,A,O,k,R)}T>Y?l1(m,x,A,!0,!1,q):a2(p,z,_,x,A,O,k,R,q)},K4=(m,p,z,_,x,A,O,k,R)=>{let T=0;const Y=p.length;let q=m.length-1,J=Y-1;for(;T<=q&&T<=J;){const r2=m[T],f2=p[T]=R?Z4(p[T]):G1(p[T]);if(t3(r2,f2))H(r2,f2,z,null,x,A,O,k,R);else break;T++}for(;T<=q&&T<=J;){const r2=m[q],f2=p[J]=R?Z4(p[J]):G1(p[J]);if(t3(r2,f2))H(r2,f2,z,null,x,A,O,k,R);else break;q--,J--}if(T>q){if(T<=J){const r2=J+1,f2=r2<Y?p[r2].el:_;for(;T<=J;)H(null,p[T]=R?Z4(p[T]):G1(p[T]),z,f2,x,A,O,k,R),T++}}else if(T>J)for(;T<=q;)w1(m[T],x,A,!0),T++;else{const r2=T,f2=T,L2=new Map;for(T=f2;T<=J;T++){const I1=p[T]=R?Z4(p[T]):G1(p[T]);I1.key!=null&&L2.set(I1.key,T)}let _2,j2=0;const q1=J-f2+1;let V6=!1,Vs=0;const z0=new Array(q1);for(T=0;T<q1;T++)z0[T]=0;for(T=r2;T<=q;T++){const I1=m[T];if(j2>=q1){w1(I1,x,A,!0);continue}let r4;if(I1.key!=null)r4=L2.get(I1.key);else for(_2=f2;_2<=J;_2++)if(z0[_2-f2]===0&&t3(I1,p[_2])){r4=_2;break}r4===void 0?w1(I1,x,A,!0):(z0[r4-f2]=T+1,r4>=Vs?Vs=r4:V6=!0,H(I1,p[r4],z,null,x,A,O,k,R),j2++)}const zs=V6?O_(z0):T6;for(_2=zs.length-1,T=q1-1;T>=0;T--){const I1=f2+T,r4=p[I1],Cs=I1+1<Y?p[I1+1].el:_;z0[T]===0?H(null,r4,z,Cs,x,A,O,k,R):V6&&(_2<0||T!==zs[_2]?n4(r4,z,Cs,2):_2--)}}},n4=(m,p,z,_,x=null)=>{const{el:A,type:O,transition:k,children:R,shapeFlag:T}=m;if(T&6){n4(m.component.subTree,p,z,_);return}if(T&128){m.suspense.move(p,z,_);return}if(T&64){O.move(m,p,z,P);return}if(O===z2){a(A,p,z);for(let q=0;q<R.length;q++)n4(R[q],p,z,_);a(m.anchor,p,z);return}if(O===j8){b(m,p,z);return}if(_!==2&&T&1&&k)if(_===0)k.beforeEnter(A),a(A,p,z),x1(()=>k.enter(A),x);else{const{leave:q,delayLeave:J,afterLeave:r2}=k,f2=()=>a(A,p,z),L2=()=>{q(A,()=>{f2(),r2&&r2()})};J?J(A,f2,L2):L2()}else a(A,p,z)},w1=(m,p,z,_=!1,x=!1)=>{const{type:A,props:O,ref:k,children:R,dynamicChildren:T,shapeFlag:Y,patchFlag:q,dirs:J}=m;if(k!=null&&n7(k,null,z,m,!0),Y&256){p.ctx.deactivate(m);return}const r2=Y&1&&J,f2=!P0(m);let L2;if(f2&&(L2=O&&O.onVnodeBeforeUnmount)&&s4(L2,p,m),Y&6)d8(m.component,z,_);else{if(Y&128){m.suspense.unmount(z,_);return}r2&&E3(m,null,p,"beforeUnmount"),Y&64?m.type.remove(m,p,z,x,P,_):T&&(A!==z2||q>0&&q&64)?l1(T,p,z,!1,!0):(A===z2&&q&384||!x&&Y&16)&&l1(R,p,z),_&&g6(m)}(f2&&(L2=O&&O.onVnodeUnmounted)||r2)&&x1(()=>{L2&&s4(L2,p,m),r2&&E3(m,null,p,"unmounted")},z)},g6=m=>{const{type:p,el:z,anchor:_,transition:x}=m;if(p===z2){H6(z,_);return}if(p===j8){M(m);return}const A=()=>{n(z),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(m.shapeFlag&1&&x&&!x.persisted){const{leave:O,delayLeave:k}=x,R=()=>O(z,A);k?k(m.el,A,R):R()}else A()},H6=(m,p)=>{let z;for(;m!==p;)z=h(m),n(m),m=z;n(p)},d8=(m,p,z)=>{const{bum:_,scope:x,update:A,subTree:O,um:k}=m;_&&q8(_),x.stop(),A&&(A.active=!1,w1(O,m,p,z)),k&&x1(k,p),x1(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},l1=(m,p,z,_=!1,x=!1,A=0)=>{for(let O=A;O<m.length;O++)w1(m[O],p,z,_,x)},w=m=>m.shapeFlag&6?w(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),$=(m,p,z)=>{m==null?p._vnode&&w1(p._vnode,null,null,!0):H(p._vnode||null,m,p,null,null,null,z),Ts(),Zo(),p._vnode=m},P={p:H,um:w1,m:n4,r:g6,mt:$1,mc:a2,pc:H2,pbc:C2,n:w,o:t};let G,V2;return e&&([G,V2]=e(P)),{render:$,hydrate:G,createApp:N_($,G)}}function k3({effect:t,update:e},c){t.allowRecurse=e.allowRecurse=c}function wa(t,e,c=!1){const a=t.children,n=e.children;if(Z(a)&&Z(n))for(let r=0;r<a.length;r++){const s=a[r];let i=n[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=n[r]=Z4(n[r]),i.el=s.el),c||wa(s,i)),i.type===Jt&&(i.el=s.el)}}function O_(t){const e=t.slice(),c=[0];let a,n,r,s,i;const o=t.length;for(a=0;a<o;a++){const l=t[a];if(l!==0){if(n=c[c.length-1],t[n]<l){e[a]=n,c.push(a);continue}for(r=0,s=c.length-1;r<s;)i=r+s>>1,t[c[i]]<l?r=i+1:s=i;l<t[c[r]]&&(r>0&&(e[a]=c[r-1]),c[r]=a)}}for(r=c.length,s=c[r-1];r-- >0;)c[r]=s,s=e[s];return c}const U_=t=>t.__isTeleport,F0=t=>t&&(t.disabled||t.disabled===""),$s=t=>typeof SVGElement<"u"&&t instanceof SVGElement,r7=(t,e)=>{const c=t&&t.to;return W2(c)?e?e(c):null:c},B_={__isTeleport:!0,process(t,e,c,a,n,r,s,i,o,l){const{mc:f,pc:u,pbc:h,o:{insert:d,querySelector:v,createText:H,createComment:y}}=l,V=F0(e.props);let{shapeFlag:C,children:b,dynamicChildren:M}=e;if(t==null){const E=e.el=H(""),F=e.anchor=H("");d(E,c,a),d(F,c,a);const K=e.target=r7(e.props,v),a2=e.targetAnchor=H("");K&&(d(a2,K),s=s||$s(K));const i2=(C2,U2)=>{C&16&&f(b,C2,U2,n,r,s,i,o)};V?i2(c,F):K&&i2(K,a2)}else{e.el=t.el;const E=e.anchor=t.anchor,F=e.target=t.target,K=e.targetAnchor=t.targetAnchor,a2=F0(t.props),i2=a2?c:F,C2=a2?E:K;if(s=s||$s(F),M?(h(t.dynamicChildren,M,i2,n,r,s,i),wa(t,e,!0)):o||u(t,e,i2,C2,n,r,s,i,!1),V)a2||z8(e,c,E,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const U2=e.target=r7(e.props,v);U2&&z8(e,U2,null,l,0)}else a2&&z8(e,F,K,l,1)}Hl(e)},remove(t,e,c,a,{um:n,o:{remove:r}},s){const{shapeFlag:i,children:o,anchor:l,targetAnchor:f,target:u,props:h}=t;if(u&&r(f),(s||!F0(h))&&(r(l),i&16))for(let d=0;d<o.length;d++){const v=o[d];n(v,e,c,!0,!!v.dynamicChildren)}},move:z8,hydrate:$_};function z8(t,e,c,{o:{insert:a},m:n},r=2){r===0&&a(t.targetAnchor,e,c);const{el:s,anchor:i,shapeFlag:o,children:l,props:f}=t,u=r===2;if(u&&a(s,e,c),(!u||F0(f))&&o&16)for(let h=0;h<l.length;h++)n(l[h],e,c,2);u&&a(i,e,c)}function $_(t,e,c,a,n,r,{o:{nextSibling:s,parentNode:i,querySelector:o}},l){const f=e.target=r7(e.props,o);if(f){const u=f._lpa||f.firstChild;if(e.shapeFlag&16)if(F0(e.props))e.anchor=l(s(t),e,i(t),c,a,n,r),e.targetAnchor=u;else{e.anchor=s(t);let h=u;for(;h;)if(h=s(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}l(u,e,f,c,a,n,r)}Hl(e)}return e.anchor&&s(e.anchor)}const q_=B_;function Hl(t){const e=t.ctx;if(e&&e.ut){let c=t.children[0].el;for(;c!==t.targetAnchor;)c.nodeType===1&&c.setAttribute("data-v-owner",e.uid),c=c.nextSibling;e.ut()}}const z2=Symbol.for("v-fgt"),Jt=Symbol.for("v-txt"),C4=Symbol.for("v-cmt"),j8=Symbol.for("v-stc"),O0=[];let B1=null;function S(t=!1){O0.push(B1=t?null:[])}function Vl(){O0.pop(),B1=O0[O0.length-1]||null}let W6=1;function qs(t){W6+=t}function zl(t){return t.dynamicChildren=W6>0?B1||T6:null,Vl(),W6>0&&B1&&B1.push(t),t}function I(t,e,c,a,n,r){return zl(g(t,e,c,a,n,r,!0))}function a4(t,e,c,a,n){return zl(Q(t,e,c,a,n,!0))}function ae(t){return t?t.__v_isVNode===!0:!1}function t3(t,e){return t.type===e.type&&t.key===e.key}const Zt="__vInternal",Cl=({key:t})=>t??null,G8=({ref:t,ref_key:e,ref_for:c})=>(typeof t=="number"&&(t=""+t),t!=null?W2(t)||p1(t)||o2(t)?{i:s1,r:t,k:e,f:!!c}:t:null);function g(t,e=null,c=null,a=0,n=null,r=t===z2?0:1,s=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cl(e),ref:e&&G8(e),scopeId:cl,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:s1};return i?(ba(o,c),r&128&&t.normalize(o)):c&&(o.shapeFlag|=W2(c)?8:16),W6>0&&!s&&B1&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&B1.push(o),o}const Q=W_;function W_(t,e=null,c=null,a=0,n=null,r=!1){if((!t||t===y_)&&(t=C4),ae(t)){const i=j6(t,e,!0);return c&&ba(i,c),W6>0&&!r&&B1&&(i.shapeFlag&6?B1[B1.indexOf(t)]=i:B1.push(i)),i.patchFlag|=-2,i}if(aL(t)&&(t=t.__vccOpts),e){e=j_(e);let{class:i,style:o}=e;i&&!W2(i)&&(e.class=S1(i)),w2(o)&&(qo(o)&&!Z(o)&&(o=t1({},o)),e.style=N4(o))}const s=W2(t)?1:c_(t)?128:U_(t)?64:w2(t)?4:o2(t)?2:0;return g(t,e,c,a,n,s,r,!0)}function j_(t){return t?qo(t)||Zt in t?t1({},t):t:null}function j6(t,e,c=!1){const{props:a,ref:n,patchFlag:r,children:s}=t,i=e?G_(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Cl(i),ref:e&&e.ref?c&&n?Z(n)?n.concat(G8(e)):[n,G8(e)]:G8(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==z2?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&j6(t.ssContent),ssFallback:t.ssFallback&&j6(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function g3(t=" ",e=0){return Q(Jt,null,t,e)}function Ml(t,e){const c=Q(j8,null,t);return c.staticCount=e,c}function $2(t="",e=!1){return e?(S(),a4(C4,null,t)):Q(C4,null,t)}function G1(t){return t==null||typeof t=="boolean"?Q(C4):Z(t)?Q(z2,null,t.slice()):typeof t=="object"?Z4(t):Q(Jt,null,String(t))}function Z4(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:j6(t)}function ba(t,e){let c=0;const{shapeFlag:a}=t;if(e==null)e=null;else if(Z(e))c=16;else if(typeof e=="object")if(a&65){const n=e.default;n&&(n._c&&(n._d=!1),ba(t,n()),n._c&&(n._d=!0));return}else{c=32;const n=e._;!n&&!(Zt in e)?e._ctx=s1:n===3&&s1&&(s1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else o2(e)?(e={default:e,_ctx:s1},c=32):(e=String(e),a&64?(c=16,e=[g3(e)]):c=8);t.children=e,t.shapeFlag|=c}function G_(...t){const e={};for(let c=0;c<t.length;c++){const a=t[c];for(const n in a)if(n==="class")e.class!==a.class&&(e.class=S1([e.class,a.class]));else if(n==="style")e.style=N4([e.style,a.style]);else if($t(n)){const r=e[n],s=a[n];s&&r!==s&&!(Z(r)&&r.includes(s))&&(e[n]=r?[].concat(r,s):s)}else n!==""&&(e[n]=a[n])}return e}function s4(t,e,c,a=null){J1(t,e,7,[c,a])}const K_=hl();let Q_=0;function X_(t,e,c){const a=t.type,n=(e?e.appContext:t.appContext)||K_,r={uid:Q_++,vnode:t,type:a,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new dy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ml(a,n),emitsOptions:tl(a,n),emit:null,emitted:null,propsDefaults:b2,inheritAttrs:a.inheritAttrs,ctx:b2,data:b2,props:b2,attrs:b2,slots:b2,refs:b2,setupState:b2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Yy.bind(null,r),t.ce&&t.ce(r),r}let e1=null;const Y_=()=>e1||s1;let xa,z6,Ws="__VUE_INSTANCE_SETTERS__";(z6=K5()[Ws])||(z6=K5()[Ws]=[]),z6.push(t=>e1=t),xa=t=>{z6.length>1?z6.forEach(e=>e(t)):z6[0](t)};const H3=t=>{xa(t),t.scope.on()},f3=()=>{e1&&e1.scope.off(),xa(null)};function yl(t){return t.vnode.shapeFlag&4}let ne=!1;function J_(t,e=!1){ne=e;const{props:c,children:a}=t.vnode,n=yl(t);E_(t,c,n,e),R_(t,a);const r=n?Z_(t,e):void 0;return ne=!1,r}function Z_(t,e){const c=t.type;t.accessCache=Object.create(null),t.proxy=Wo(new Proxy(t.ctx,L_));const{setup:a}=c;if(a){const n=t.setupContext=a.length>1?tL(t):null;H3(t),s0();const r=l3(a,t,0,[t.props,n]);if(i0(),f3(),la(r)){if(r.then(f3,f3),e)return r.then(s=>{s7(t,s,e)}).catch(s=>{Ee(s,t,0)});t.asyncDep=r}else s7(t,r,e)}else _l(t,e)}function s7(t,e,c){o2(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:w2(e)&&(t.setupState=Qo(e)),_l(t,c)}let js;function _l(t,e,c){const a=t.type;if(!t.render){if(!e&&js&&!a.render){const n=a.template||_a(t).template;if(n){const{isCustomElement:r,compilerOptions:s}=t.appContext.config,{delimiters:i,compilerOptions:o}=a,l=t1(t1({isCustomElement:r,delimiters:i},s),o);a.render=js(n,l)}}t.render=a.render||Y1}H3(t),s0(),w_(t),i0(),f3()}function eL(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,c){return E1(t,"get","$attrs"),e[c]}}))}function tL(t){const e=c=>{t.exposed=c||{}};return{get attrs(){return eL(t)},slots:t.slots,emit:t.emit,expose:e}}function ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qo(Wo(t.exposed)),{get(e,c){if(c in e)return e[c];if(c in D0)return D0[c](t)},has(e,c){return c in e||c in D0}}))}function cL(t,e=!0){return o2(t)?t.displayName||t.name:t.name||e&&t.__name}function aL(t){return o2(t)&&"__vccOpts"in t}const q2=(t,e)=>jy(t,e,ne);function Aa(t,e,c){const a=arguments.length;return a===2?w2(e)&&!Z(e)?ae(e)?Q(t,null,[e]):Q(t,e):Q(t,null,e):(a>3?c=Array.prototype.slice.call(arguments,2):a===3&&ae(c)&&(c=[c]),Q(t,e,c))}const nL=Symbol.for("v-scx"),rL=()=>m4(nL),sL="3.3.4",iL="http://www.w3.org/2000/svg",P3=typeof document<"u"?document:null,Gs=P3&&P3.createElement("template"),oL={insert:(t,e,c)=>{e.insertBefore(t,c||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,c,a)=>{const n=e?P3.createElementNS(iL,t):P3.createElement(t,c?{is:c}:void 0);return t==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:t=>P3.createTextNode(t),createComment:t=>P3.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>P3.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,c,a,n,r){const s=c?c.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),c),!(n===r||!(n=n.nextSibling)););else{Gs.innerHTML=a?`<svg>${t}</svg>`:t;const i=Gs.content;if(a){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}e.insertBefore(i,c)}return[s?s.nextSibling:e.firstChild,c?c.previousSibling:e.lastChild]}};function lL(t,e,c){const a=t._vtc;a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?t.removeAttribute("class"):c?t.setAttribute("class",e):t.className=e}function fL(t,e,c){const a=t.style,n=W2(c);if(c&&!n){if(e&&!W2(e))for(const r in e)c[r]==null&&i7(a,r,"");for(const r in c)i7(a,r,c[r])}else{const r=a.display;n?e!==c&&(a.cssText=c):e&&t.removeAttribute("style"),"_vod"in t&&(a.display=r)}}const Ks=/\s*!important$/;function i7(t,e,c){if(Z(c))c.forEach(a=>i7(t,e,a));else if(c==null&&(c=""),e.startsWith("--"))t.setProperty(e,c);else{const a=uL(t,e);Ks.test(c)?t.setProperty(r0(a),c.replace(Ks,""),"important"):t[a]=c}}const Qs=["Webkit","Moz","ms"],d5={};function uL(t,e){const c=d5[e];if(c)return c;let a=z4(e);if(a!=="filter"&&a in t)return d5[e]=a;a=jt(a);for(let n=0;n<Qs.length;n++){const r=Qs[n]+a;if(r in t)return d5[e]=r}return e}const Xs="http://www.w3.org/1999/xlink";function hL(t,e,c,a,n){if(a&&e.startsWith("xlink:"))c==null?t.removeAttributeNS(Xs,e.slice(6,e.length)):t.setAttributeNS(Xs,e,c);else{const r=fy(e);c==null||r&&!So(c)?t.removeAttribute(e):t.setAttribute(e,r?"":c)}}function dL(t,e,c,a,n,r,s){if(e==="innerHTML"||e==="textContent"){a&&s(a,n,r),t[e]=c??"";return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){t._value=c;const l=i==="OPTION"?t.getAttribute("value"):t.value,f=c??"";l!==f&&(t.value=f),c==null&&t.removeAttribute(e);return}let o=!1;if(c===""||c==null){const l=typeof t[e];l==="boolean"?c=So(c):c==null&&l==="string"?(c="",o=!0):l==="number"&&(c=0,o=!0)}try{t[e]=c}catch{}o&&t.removeAttribute(e)}function D3(t,e,c,a){t.addEventListener(e,c,a)}function mL(t,e,c,a){t.removeEventListener(e,c,a)}function pL(t,e,c,a,n=null){const r=t._vei||(t._vei={}),s=r[e];if(a&&s)s.value=a;else{const[i,o]=vL(e);if(a){const l=r[e]=VL(a,n);D3(t,i,l,o)}else s&&(mL(t,i,s,o),r[e]=void 0)}}const Ys=/(?:Once|Passive|Capture)$/;function vL(t){let e;if(Ys.test(t)){e={};let a;for(;a=t.match(Ys);)t=t.slice(0,t.length-a[0].length),e[a[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):r0(t.slice(2)),e]}let m5=0;const gL=Promise.resolve(),HL=()=>m5||(gL.then(()=>m5=0),m5=Date.now());function VL(t,e){const c=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=c.attached)return;J1(zL(a,c.value),e,5,[a])};return c.value=t,c.attached=HL(),c}function zL(t,e){if(Z(e)){const c=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{c.call(t),t._stopped=!0},e.map(a=>n=>!n._stopped&&a&&a(n))}else return e}const Js=/^on[a-z]/,CL=(t,e,c,a,n=!1,r,s,i,o)=>{e==="class"?lL(t,a,n):e==="style"?fL(t,c,a):$t(e)?ia(e)||pL(t,e,c,a,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ML(t,e,a,n))?dL(t,e,a,r,s,i,o):(e==="true-value"?t._trueValue=a:e==="false-value"&&(t._falseValue=a),hL(t,e,a,n))};function ML(t,e,c,a){return a?!!(e==="innerHTML"||e==="textContent"||e in t&&Js.test(e)&&o2(c)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Js.test(e)&&W2(c)?!1:e in t}const ut=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?c=>q8(e,c):e};function yL(t){t.target.composing=!0}function Zs(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const N1={created(t,{modifiers:{lazy:e,trim:c,number:a}},n){t._assign=ut(n);const r=a||n.props&&n.props.type==="number";D3(t,e?"change":"input",s=>{if(s.target.composing)return;let i=t.value;c&&(i=i.trim()),r&&(i=st(i)),t._assign(i)}),c&&D3(t,"change",()=>{t.value=t.value.trim()}),e||(D3(t,"compositionstart",yL),D3(t,"compositionend",Zs),D3(t,"change",Zs))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:c,trim:a,number:n}},r){if(t._assign=ut(r),t.composing||document.activeElement===t&&t.type!=="range"&&(c||a&&t.value.trim()===e||(n||t.type==="number")&&st(t.value)===e))return;const s=e??"";t.value!==s&&(t.value=s)}},ei={deep:!0,created(t,{value:e,modifiers:{number:c}},a){const n=qt(e);D3(t,"change",()=>{const r=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>c?st(ht(s)):ht(s));t._assign(t.multiple?n?new Set(r):r:r[0])}),t._assign=ut(a)},mounted(t,{value:e}){ti(t,e)},beforeUpdate(t,e,c){t._assign=ut(c)},updated(t,{value:e}){ti(t,e)}};function ti(t,e){const c=t.multiple;if(!(c&&!Z(e)&&!qt(e))){for(let a=0,n=t.options.length;a<n;a++){const r=t.options[a],s=ht(r);if(c)Z(e)?r.selected=hy(e,s)>-1:r.selected=e.has(s);else if(Gt(ht(r),e)){t.selectedIndex!==a&&(t.selectedIndex=a);return}}!c&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ht(t){return"_value"in t?t._value:t.value}const _L=["ctrl","shift","alt","meta"],LL={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_L.some(c=>t[`${c}Key`]&&!e.includes(c))},re=(t,e)=>(c,...a)=>{for(let n=0;n<e.length;n++){const r=LL[e[n]];if(r&&r(c,e))return}return t(c,...a)},wL=t1({patchProp:CL},oL);let ci;function bL(){return ci||(ci=D_(wL))}const xL=(...t)=>{const e=bL().createApp(...t),{mount:c}=e;return e.mount=a=>{const n=AL(a);if(!n)return;const r=e._component;!o2(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const s=c(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},e};function AL(t){return W2(t)?document.querySelector(t):t}const Sa=(t,e)=>{const c=t.__vccOpts||t;for(const[a,n]of e)c[a]=n;return c},SL={},TL={class:"font-roboto"};function NL(t,e){const c=X3("router-view");return S(),a4(n_,null,{default:k2(()=>[g("div",TL,[Q(c)])]),_:1})}const EL=Sa(SL,[["render",NL]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const y6=typeof window<"u";function kL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const M2=Object.assign;function p5(t,e){const c={};for(const a in e){const n=e[a];c[a]=Z1(n)?n.map(t):t(n)}return c}const U0=()=>{},Z1=Array.isArray,IL=/\/$/,RL=t=>t.replace(IL,"");function v5(t,e,c="/"){let a,n={},r="",s="";const i=e.indexOf("#");let o=e.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(a=e.slice(0,o),r=e.slice(o+1,i>-1?i:e.length),n=t(r)),i>-1&&(a=a||e.slice(0,i),s=e.slice(i,e.length)),a=OL(a??e,c),{fullPath:a+(r&&"?")+r+s,path:a,query:n,hash:s}}function PL(t,e){const c=e.query?t(e.query):"";return e.path+(c&&"?")+c+(e.hash||"")}function ai(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function DL(t,e,c){const a=e.matched.length-1,n=c.matched.length-1;return a>-1&&a===n&&G6(e.matched[a],c.matched[n])&&Ll(e.params,c.params)&&t(e.query)===t(c.query)&&e.hash===c.hash}function G6(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ll(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const c in t)if(!FL(t[c],e[c]))return!1;return!0}function FL(t,e){return Z1(t)?ni(t,e):Z1(e)?ni(e,t):t===e}function ni(t,e){return Z1(e)?t.length===e.length&&t.every((c,a)=>c===e[a]):t.length===1&&t[0]===e}function OL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const c=e.split("/"),a=t.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=c.length-1,s,i;for(s=0;s<a.length;s++)if(i=a[s],i!==".")if(i==="..")r>1&&r--;else break;return c.slice(0,r).join("/")+"/"+a.slice(s-(s===a.length?1:0)).join("/")}var se;(function(t){t.pop="pop",t.push="push"})(se||(se={}));var B0;(function(t){t.back="back",t.forward="forward",t.unknown=""})(B0||(B0={}));function UL(t){if(!t)if(y6){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RL(t)}const BL=/^[^#]+#/;function $L(t,e){return t.replace(BL,"#")+e}function qL(t,e){const c=document.documentElement.getBoundingClientRect(),a=t.getBoundingClientRect();return{behavior:e.behavior,left:a.left-c.left-(e.left||0),top:a.top-c.top-(e.top||0)}}const tc=()=>({left:window.pageXOffset,top:window.pageYOffset});function WL(t){let e;if("el"in t){const c=t.el,a=typeof c=="string"&&c.startsWith("#"),n=typeof c=="string"?a?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!n)return;e=qL(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ri(t,e){return(history.state?history.state.position-e:-1)+t}const o7=new Map;function jL(t,e){o7.set(t,e)}function GL(t){const e=o7.get(t);return o7.delete(t),e}let KL=()=>location.protocol+"//"+location.host;function wl(t,e){const{pathname:c,search:a,hash:n}=e,r=t.indexOf("#");if(r>-1){let i=n.includes(t.slice(r))?t.slice(r).length:1,o=n.slice(i);return o[0]!=="/"&&(o="/"+o),ai(o,"")}return ai(c,t)+a+n}function QL(t,e,c,a){let n=[],r=[],s=null;const i=({state:h})=>{const d=wl(t,location),v=c.value,H=e.value;let y=0;if(h){if(c.value=d,e.value=h,s&&s===v){s=null;return}y=H?h.position-H.position:0}else a(d);n.forEach(V=>{V(c.value,v,{delta:y,type:se.pop,direction:y?y>0?B0.forward:B0.back:B0.unknown})})};function o(){s=c.value}function l(h){n.push(h);const d=()=>{const v=n.indexOf(h);v>-1&&n.splice(v,1)};return r.push(d),d}function f(){const{history:h}=window;h.state&&h.replaceState(M2({},h.state,{scroll:tc()}),"")}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function si(t,e,c,a=!1,n=!1){return{back:t,current:e,forward:c,replaced:a,position:window.history.length,scroll:n?tc():null}}function XL(t){const{history:e,location:c}=window,a={value:wl(t,c)},n={value:e.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const u=t.indexOf("#"),h=u>-1?(c.host&&document.querySelector("base")?t:t.slice(u))+o:KL()+t+o;try{e[f?"replaceState":"pushState"](l,"",h),n.value=l}catch(d){console.error(d),c[f?"replace":"assign"](h)}}function s(o,l){const f=M2({},e.state,si(n.value.back,o,n.value.forward,!0),l,{position:n.value.position});r(o,f,!0),a.value=o}function i(o,l){const f=M2({},n.value,e.state,{forward:o,scroll:tc()});r(f.current,f,!0);const u=M2({},si(a.value,o,null),{position:f.position+1},l);r(o,u,!1),a.value=o}return{location:a,state:n,push:i,replace:s}}function YL(t){t=UL(t);const e=XL(t),c=QL(t,e.state,e.location,e.replace);function a(r,s=!0){s||c.pauseListeners(),history.go(r)}const n=M2({location:"",base:t,go:a,createHref:$L.bind(null,t)},e,c);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function JL(t){return typeof t=="string"||t&&typeof t=="object"}function bl(t){return typeof t=="string"||typeof t=="symbol"}const X4={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xl=Symbol("");var ii;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ii||(ii={}));function K6(t,e){return M2(new Error,{type:t,[xl]:!0},e)}function w4(t,e){return t instanceof Error&&xl in t&&(e==null||!!(t.type&e))}const oi="[^/]+?",ZL={sensitive:!1,strict:!1,start:!0,end:!0},ew=/[.+*?^${}()[\]/\\]/g;function tw(t,e){const c=M2({},ZL,e),a=[];let n=c.start?"^":"";const r=[];for(const l of t){const f=l.length?[]:[90];c.strict&&!l.length&&(n+="/");for(let u=0;u<l.length;u++){const h=l[u];let d=40+(c.sensitive?.25:0);if(h.type===0)u||(n+="/"),n+=h.value.replace(ew,"\\$&"),d+=40;else if(h.type===1){const{value:v,repeatable:H,optional:y,regexp:V}=h;r.push({name:v,repeatable:H,optional:y});const C=V||oi;if(C!==oi){d+=10;try{new RegExp(`(${C})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+M.message)}}let b=H?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(b=y&&l.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),n+=b,d+=20,y&&(d+=-8),H&&(d+=-20),C===".*"&&(d+=-50)}f.push(d)}a.push(f)}if(c.strict&&c.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}c.strict||(n+="/?"),c.end?n+="$":c.strict&&(n+="(?:/|$)");const s=new RegExp(n,c.sensitive?"":"i");function i(l){const f=l.match(s),u={};if(!f)return null;for(let h=1;h<f.length;h++){const d=f[h]||"",v=r[h-1];u[v.name]=d&&v.repeatable?d.split("/"):d}return u}function o(l){let f="",u=!1;for(const h of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const d of h)if(d.type===0)f+=d.value;else if(d.type===1){const{value:v,repeatable:H,optional:y}=d,V=v in l?l[v]:"";if(Z1(V)&&!H)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=Z1(V)?V.join("/"):V;if(!C)if(y)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);f+=C}}return f||"/"}return{re:s,score:a,keys:r,parse:i,stringify:o}}function cw(t,e){let c=0;for(;c<t.length&&c<e.length;){const a=e[c]-t[c];if(a)return a;c++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function aw(t,e){let c=0;const a=t.score,n=e.score;for(;c<a.length&&c<n.length;){const r=cw(a[c],n[c]);if(r)return r;c++}if(Math.abs(n.length-a.length)===1){if(li(a))return 1;if(li(n))return-1}return n.length-a.length}function li(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nw={type:0,value:""},rw=/[a-zA-Z0-9_]/;function sw(t){if(!t)return[[]];if(t==="/")return[[nw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${c})/"${l}": ${d}`)}let c=0,a=c;const n=[];let r;function s(){r&&n.push(r),r=[]}let i=0,o,l="",f="";function u(){l&&(c===0?r.push({type:0,value:l}):c===1||c===2||c===3?(r.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=o}for(;i<t.length;){if(o=t[i++],o==="\\"&&c!==2){a=c,c=4;continue}switch(c){case 0:o==="/"?(l&&u(),s()):o===":"?(u(),c=1):h();break;case 4:h(),c=a;break;case 1:o==="("?c=2:rw.test(o)?h():(u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:c=3:f+=o;break;case 3:u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:e("Unknown state");break}}return c===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),s(),n}function iw(t,e,c){const a=tw(sw(t.path),c),n=M2(a,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function ow(t,e){const c=[],a=new Map;e=hi({strict:!1,end:!0,sensitive:!1},e);function n(f){return a.get(f)}function r(f,u,h){const d=!h,v=lw(f);v.aliasOf=h&&h.record;const H=hi(e,f),y=[v];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const M of b)y.push(M2({},v,{components:h?h.record.components:v.components,path:M,aliasOf:h?h.record:v}))}let V,C;for(const b of y){const{path:M}=b;if(u&&M[0]!=="/"){const E=u.record.path,F=E[E.length-1]==="/"?"":"/";b.path=u.record.path+(M&&F+M)}if(V=iw(b,u,H),h?h.alias.push(V):(C=C||V,C!==V&&C.alias.push(V),d&&f.name&&!ui(V)&&s(f.name)),v.children){const E=v.children;for(let F=0;F<E.length;F++)r(E[F],V,h&&h.children[F])}h=h||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&o(V)}return C?()=>{s(C)}:U0}function s(f){if(bl(f)){const u=a.get(f);u&&(a.delete(f),c.splice(c.indexOf(u),1),u.children.forEach(s),u.alias.forEach(s))}else{const u=c.indexOf(f);u>-1&&(c.splice(u,1),f.record.name&&a.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function i(){return c}function o(f){let u=0;for(;u<c.length&&aw(f,c[u])>=0&&(f.record.path!==c[u].record.path||!Al(f,c[u]));)u++;c.splice(u,0,f),f.record.name&&!ui(f)&&a.set(f.record.name,f)}function l(f,u){let h,d={},v,H;if("name"in f&&f.name){if(h=a.get(f.name),!h)throw K6(1,{location:f});H=h.record.name,d=M2(fi(u.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),f.params&&fi(f.params,h.keys.map(C=>C.name))),v=h.stringify(d)}else if("path"in f)v=f.path,h=c.find(C=>C.re.test(v)),h&&(d=h.parse(v),H=h.record.name);else{if(h=u.name?a.get(u.name):c.find(C=>C.re.test(u.path)),!h)throw K6(1,{location:f,currentLocation:u});H=h.record.name,d=M2({},u.params,f.params),v=h.stringify(d)}const y=[];let V=h;for(;V;)y.unshift(V.record),V=V.parent;return{name:H,path:v,params:d,matched:y,meta:uw(y)}}return t.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:s,getRoutes:i,getRecordMatcher:n}}function fi(t,e){const c={};for(const a of e)a in t&&(c[a]=t[a]);return c}function lw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fw(t){const e={},c=t.props||!1;if("component"in t)e.default=c;else for(const a in t.components)e[a]=typeof c=="object"?c[a]:c;return e}function ui(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uw(t){return t.reduce((e,c)=>M2(e,c.meta),{})}function hi(t,e){const c={};for(const a in t)c[a]=a in e?e[a]:t[a];return c}function Al(t,e){return e.children.some(c=>c===t||Al(t,c))}const Sl=/#/g,hw=/&/g,dw=/\//g,mw=/=/g,pw=/\?/g,Tl=/\+/g,vw=/%5B/g,gw=/%5D/g,Nl=/%5E/g,Hw=/%60/g,El=/%7B/g,Vw=/%7C/g,kl=/%7D/g,zw=/%20/g;function Ta(t){return encodeURI(""+t).replace(Vw,"|").replace(vw,"[").replace(gw,"]")}function Cw(t){return Ta(t).replace(El,"{").replace(kl,"}").replace(Nl,"^")}function l7(t){return Ta(t).replace(Tl,"%2B").replace(zw,"+").replace(Sl,"%23").replace(hw,"%26").replace(Hw,"`").replace(El,"{").replace(kl,"}").replace(Nl,"^")}function Mw(t){return l7(t).replace(mw,"%3D")}function yw(t){return Ta(t).replace(Sl,"%23").replace(pw,"%3F")}function _w(t){return t==null?"":yw(t).replace(dw,"%2F")}function dt(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Lw(t){const e={};if(t===""||t==="?")return e;const a=(t[0]==="?"?t.slice(1):t).split("&");for(let n=0;n<a.length;++n){const r=a[n].replace(Tl," "),s=r.indexOf("="),i=dt(s<0?r:r.slice(0,s)),o=s<0?null:dt(r.slice(s+1));if(i in e){let l=e[i];Z1(l)||(l=e[i]=[l]),l.push(o)}else e[i]=o}return e}function di(t){let e="";for(let c in t){const a=t[c];if(c=Mw(c),a==null){a!==void 0&&(e+=(e.length?"&":"")+c);continue}(Z1(a)?a.map(r=>r&&l7(r)):[a&&l7(a)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+c,r!=null&&(e+="="+r))})}return e}function ww(t){const e={};for(const c in t){const a=t[c];a!==void 0&&(e[c]=Z1(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return e}const bw=Symbol(""),mi=Symbol(""),Na=Symbol(""),Ea=Symbol(""),f7=Symbol("");function C0(){let t=[];function e(a){return t.push(a),()=>{const n=t.indexOf(a);n>-1&&t.splice(n,1)}}function c(){t=[]}return{add:e,list:()=>t.slice(),reset:c}}function e3(t,e,c,a,n){const r=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((s,i)=>{const o=u=>{u===!1?i(K6(4,{from:c,to:e})):u instanceof Error?i(u):JL(u)?i(K6(2,{from:e,to:u})):(r&&a.enterCallbacks[n]===r&&typeof u=="function"&&r.push(u),s())},l=t.call(a&&a.instances[n],e,c,o);let f=Promise.resolve(l);t.length<3&&(f=f.then(o)),f.catch(u=>i(u))})}function g5(t,e,c,a){const n=[];for(const r of t)for(const s in r.components){let i=r.components[s];if(!(e!=="beforeRouteEnter"&&!r.instances[s]))if(xw(i)){const l=(i.__vccOpts||i)[e];l&&n.push(e3(l,c,a,r,s))}else{let o=i();n.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${r.path}"`));const f=kL(l)?l.default:l;r.components[s]=f;const h=(f.__vccOpts||f)[e];return h&&e3(h,c,a,r,s)()}))}}return n}function xw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pi(t){const e=m4(Na),c=m4(Ea),a=q2(()=>e.resolve(K2(t.to))),n=q2(()=>{const{matched:o}=a.value,{length:l}=o,f=o[l-1],u=c.matched;if(!f||!u.length)return-1;const h=u.findIndex(G6.bind(null,f));if(h>-1)return h;const d=vi(o[l-2]);return l>1&&vi(f)===d&&u[u.length-1].path!==d?u.findIndex(G6.bind(null,o[l-2])):h}),r=q2(()=>n.value>-1&&Nw(c.params,a.value.params)),s=q2(()=>n.value>-1&&n.value===c.matched.length-1&&Ll(c.params,a.value.params));function i(o={}){return Tw(o)?e[K2(t.replace)?"replace":"push"](K2(t.to)).catch(U0):Promise.resolve()}return{route:a,href:q2(()=>a.value.href),isActive:r,isExactActive:s,navigate:i}}const Aw=ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pi,setup(t,{slots:e}){const c=Qt(pi(t)),{options:a}=m4(Na),n=q2(()=>({[gi(t.activeClass,a.linkActiveClass,"router-link-active")]:c.isActive,[gi(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const r=e.default&&e.default(c);return t.custom?r:Aa("a",{"aria-current":c.isExactActive?t.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:n.value},r)}}}),Sw=Aw;function Tw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nw(t,e){for(const c in e){const a=e[c],n=t[c];if(typeof a=="string"){if(a!==n)return!1}else if(!Z1(n)||n.length!==a.length||a.some((r,s)=>r!==n[s]))return!1}return!0}function vi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gi=(t,e,c)=>t??e??c,Ew=ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:c}){const a=m4(f7),n=q2(()=>t.route||a.value),r=m4(mi,0),s=q2(()=>{let l=K2(r);const{matched:f}=n.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),i=q2(()=>n.value.matched[s.value]);W8(mi,q2(()=>s.value+1)),W8(bw,i),W8(f7,n);const o=e2();return j3(()=>[o.value,i.value,t.name],([l,f,u],[h,d,v])=>{f&&(f.instances[u]=l,d&&d!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),l&&f&&(!d||!G6(f,d)||!h)&&(f.enterCallbacks[u]||[]).forEach(H=>H(l))},{flush:"post"}),()=>{const l=n.value,f=t.name,u=i.value,h=u&&u.components[f];if(!h)return Hi(c.default,{Component:h,route:l});const d=u.props[f],v=d?d===!0?l.params:typeof d=="function"?d(l):d:null,y=Aa(h,M2({},v,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return Hi(c.default,{Component:y,route:l})||y}}});function Hi(t,e){if(!t)return null;const c=t(e);return c.length===1?c[0]:c}const kw=Ew;function Iw(t){const e=ow(t.routes,t),c=t.parseQuery||Lw,a=t.stringifyQuery||di,n=t.history,r=C0(),s=C0(),i=C0(),o=By(X4);let l=X4;y6&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=p5.bind(null,w=>""+w),u=p5.bind(null,_w),h=p5.bind(null,dt);function d(w,$){let P,G;return bl(w)?(P=e.getRecordMatcher(w),G=$):G=w,e.addRoute(G,P)}function v(w){const $=e.getRecordMatcher(w);$&&e.removeRoute($)}function H(){return e.getRoutes().map(w=>w.record)}function y(w){return!!e.getRecordMatcher(w)}function V(w,$){if($=M2({},$||o.value),typeof w=="string"){const z=v5(c,w,$.path),_=e.resolve({path:z.path},$),x=n.createHref(z.fullPath);return M2(z,_,{params:h(_.params),hash:dt(z.hash),redirectedFrom:void 0,href:x})}let P;if("path"in w)P=M2({},w,{path:v5(c,w.path,$.path).path});else{const z=M2({},w.params);for(const _ in z)z[_]==null&&delete z[_];P=M2({},w,{params:u(z)}),$.params=u($.params)}const G=e.resolve(P,$),V2=w.hash||"";G.params=f(h(G.params));const m=PL(a,M2({},w,{hash:Cw(V2),path:G.path})),p=n.createHref(m);return M2({fullPath:m,hash:V2,query:a===di?ww(w.query):w.query||{}},G,{redirectedFrom:void 0,href:p})}function C(w){return typeof w=="string"?v5(c,w,o.value.path):M2({},w)}function b(w,$){if(l!==w)return K6(8,{from:$,to:w})}function M(w){return K(w)}function E(w){return M(M2(C(w),{replace:!0}))}function F(w){const $=w.matched[w.matched.length-1];if($&&$.redirect){const{redirect:P}=$;let G=typeof P=="function"?P(w):P;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=C(G):{path:G},G.params={}),M2({query:w.query,hash:w.hash,params:"path"in G?{}:w.params},G)}}function K(w,$){const P=l=V(w),G=o.value,V2=w.state,m=w.force,p=w.replace===!0,z=F(P);if(z)return K(M2(C(z),{state:typeof z=="object"?M2({},V2,z.state):V2,force:m,replace:p}),$||P);const _=P;_.redirectedFrom=$;let x;return!m&&DL(a,G,P)&&(x=K6(16,{to:_,from:G}),n4(G,G,!0,!1)),(x?Promise.resolve(x):C2(_,G)).catch(A=>w4(A)?w4(A,2)?A:K4(A):H2(A,_,G)).then(A=>{if(A){if(w4(A,2))return K(M2({replace:p},C(A.to),{state:typeof A.to=="object"?M2({},V2,A.to.state):V2,force:m}),$||_)}else A=O1(_,G,!0,p,V2);return U2(_,G,A),A})}function a2(w,$){const P=b(w,$);return P?Promise.reject(P):Promise.resolve()}function i2(w){const $=H6.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(w):w()}function C2(w,$){let P;const[G,V2,m]=Rw(w,$);P=g5(G.reverse(),"beforeRouteLeave",w,$);for(const z of G)z.leaveGuards.forEach(_=>{P.push(e3(_,w,$))});const p=a2.bind(null,w,$);return P.push(p),l1(P).then(()=>{P=[];for(const z of r.list())P.push(e3(z,w,$));return P.push(p),l1(P)}).then(()=>{P=g5(V2,"beforeRouteUpdate",w,$);for(const z of V2)z.updateGuards.forEach(_=>{P.push(e3(_,w,$))});return P.push(p),l1(P)}).then(()=>{P=[];for(const z of m)if(z.beforeEnter)if(Z1(z.beforeEnter))for(const _ of z.beforeEnter)P.push(e3(_,w,$));else P.push(e3(z.beforeEnter,w,$));return P.push(p),l1(P)}).then(()=>(w.matched.forEach(z=>z.enterCallbacks={}),P=g5(m,"beforeRouteEnter",w,$),P.push(p),l1(P))).then(()=>{P=[];for(const z of s.list())P.push(e3(z,w,$));return P.push(p),l1(P)}).catch(z=>w4(z,8)?z:Promise.reject(z))}function U2(w,$,P){i.list().forEach(G=>i2(()=>G(w,$,P)))}function O1(w,$,P,G,V2){const m=b(w,$);if(m)return m;const p=$===X4,z=y6?history.state:{};P&&(G||p?n.replace(w.fullPath,M2({scroll:p&&z&&z.scroll},V2)):n.push(w.fullPath,V2)),o.value=w,n4(w,$,P,p),K4()}let o1;function $1(){o1||(o1=n.listen((w,$,P)=>{if(!d8.listening)return;const G=V(w),V2=F(G);if(V2){K(M2(V2,{replace:!0}),G).catch(U0);return}l=G;const m=o.value;y6&&jL(ri(m.fullPath,P.delta),tc()),C2(G,m).catch(p=>w4(p,12)?p:w4(p,2)?(K(p.to,G).then(z=>{w4(z,20)&&!P.delta&&P.type===se.pop&&n.go(-1,!1)}).catch(U0),Promise.reject()):(P.delta&&n.go(-P.delta,!1),H2(p,G,m))).then(p=>{p=p||O1(G,m,!1),p&&(P.delta&&!w4(p,8)?n.go(-P.delta,!1):P.type===se.pop&&w4(p,20)&&n.go(-1,!1)),U2(G,m,p)}).catch(U0)}))}let _4=C0(),B2=C0(),v2;function H2(w,$,P){K4(w);const G=B2.list();return G.length?G.forEach(V2=>V2(w,$,P)):console.error(w),Promise.reject(w)}function L4(){return v2&&o.value!==X4?Promise.resolve():new Promise((w,$)=>{_4.add([w,$])})}function K4(w){return v2||(v2=!w,$1(),_4.list().forEach(([$,P])=>w?P(w):$()),_4.reset()),w}function n4(w,$,P,G){const{scrollBehavior:V2}=t;if(!y6||!V2)return Promise.resolve();const m=!P&&GL(ri(w.fullPath,0))||(G||!P)&&history.state&&history.state.scroll||null;return Va().then(()=>V2(w,$,m)).then(p=>p&&WL(p)).catch(p=>H2(p,w,$))}const w1=w=>n.go(w);let g6;const H6=new Set,d8={currentRoute:o,listening:!0,addRoute:d,removeRoute:v,hasRoute:y,getRoutes:H,resolve:V,options:t,push:M,replace:E,go:w1,back:()=>w1(-1),forward:()=>w1(1),beforeEach:r.add,beforeResolve:s.add,afterEach:i.add,onError:B2.add,isReady:L4,install(w){const $=this;w.component("RouterLink",Sw),w.component("RouterView",kw),w.config.globalProperties.$router=$,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>K2(o)}),y6&&!g6&&o.value===X4&&(g6=!0,M(n.location).catch(V2=>{}));const P={};for(const V2 in X4)Object.defineProperty(P,V2,{get:()=>o.value[V2],enumerable:!0});w.provide(Na,$),w.provide(Ea,Bo(P)),w.provide(f7,o);const G=w.unmount;H6.add(w),w.unmount=function(){H6.delete(w),H6.size<1&&(l=X4,o1&&o1(),o1=null,o.value=X4,g6=!1,v2=!1),G()}}};function l1(w){return w.reduce(($,P)=>$.then(()=>i2(P)),Promise.resolve())}return d8}function Rw(t,e){const c=[],a=[],n=[],r=Math.max(e.matched.length,t.matched.length);for(let s=0;s<r;s++){const i=e.matched[s];i&&(t.matched.find(l=>G6(l,i))?a.push(i):c.push(i));const o=t.matched[s];o&&(e.matched.find(l=>G6(l,o))||n.push(o))}return[c,a,n]}function cc(){return m4(Ea)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=function(t){const e=[];let c=0;for(let a=0;a<t.length;a++){let n=t.charCodeAt(a);n<128?e[c++]=n:n<2048?(e[c++]=n>>6|192,e[c++]=n&63|128):(n&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++a)&1023),e[c++]=n>>18|240,e[c++]=n>>12&63|128,e[c++]=n>>6&63|128,e[c++]=n&63|128):(e[c++]=n>>12|224,e[c++]=n>>6&63|128,e[c++]=n&63|128)}return e},Pw=function(t){const e=[];let c=0,a=0;for(;c<t.length;){const n=t[c++];if(n<128)e[a++]=String.fromCharCode(n);else if(n>191&&n<224){const r=t[c++];e[a++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=t[c++],s=t[c++],i=t[c++],o=((n&7)<<18|(r&63)<<12|(s&63)<<6|i&63)-65536;e[a++]=String.fromCharCode(55296+(o>>10)),e[a++]=String.fromCharCode(56320+(o&1023))}else{const r=t[c++],s=t[c++];e[a++]=String.fromCharCode((n&15)<<12|(r&63)<<6|s&63)}}return e.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<t.length;n+=3){const r=t[n],s=n+1<t.length,i=s?t[n+1]:0,o=n+2<t.length,l=o?t[n+2]:0,f=r>>2,u=(r&3)<<4|i>>4;let h=(i&15)<<2|l>>6,d=l&63;o||(d=64,s||(h=64)),a.push(c[f],c[u],c[h],c[d])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Il(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const c=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<t.length;){const r=c[t.charAt(n++)],i=n<t.length?c[t.charAt(n)]:0;++n;const l=n<t.length?c[t.charAt(n)]:64;++n;const u=n<t.length?c[t.charAt(n)]:64;if(++n,r==null||i==null||l==null||u==null)throw new Dw;const h=r<<2|i>>4;if(a.push(h),l!==64){const d=i<<4&240|l>>2;if(a.push(d),u!==64){const v=l<<6&192|u;a.push(v)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fw=function(t){const e=Il(t);return Rl.encodeByteArray(e,!0)},mt=function(t){return Fw(t).replace(/\./g,"")},Pl=function(t){try{return Rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=()=>Ow().__FIREBASE_DEFAULTS__,Bw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$w=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pl(t[1]);return e&&JSON.parse(e)},ac=()=>{try{return Uw()||Bw()||$w()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dl=t=>{var e,c;return(c=(e=ac())===null||e===void 0?void 0:e.emulatorHosts)===null||c===void 0?void 0:c[t]},Fl=t=>{const e=Dl(t);if(!e)return;const c=e.lastIndexOf(":");if(c<=0||c+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(c+1),10);return e[0]==="["?[e.substring(1,c-1),a]:[e.substring(0,c),a]},Ol=()=>{var t;return(t=ac())===null||t===void 0?void 0:t.config},Ul=t=>{var e;return(e=ac())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}wrapCallback(e){return(c,a)=>{c?this.reject(c):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(c):e(c,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},a=e||"demo-project",n=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),i="";return[mt(JSON.stringify(c)),mt(JSON.stringify(s)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ww(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z1())}function jw(){var t;const e=(t=ac())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qw(){const t=z1();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Yw(){return new Promise((t,e)=>{try{let c=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),c||self.indexedDB.deleteDatabase(a),t(!0)},n.onupgradeneeded=()=>{c=!1},n.onerror=()=>{var r;e(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(c){e(c)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="FirebaseError";class y4 extends Error{constructor(e,c,a){super(c),this.code=e,this.customData=a,this.name=Jw,Object.setPrototypeOf(this,y4.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ke.prototype.create)}}class ke{constructor(e,c,a){this.service=e,this.serviceName=c,this.errors=a}create(e,...c){const a=c[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?Zw(r,a):"Error",i=`${this.serviceName}: ${s} (${n}).`;return new y4(n,i,a)}}function Zw(t,e){return t.replace(eb,(c,a)=>{const n=e[a];return n!=null?String(n):`<${a}?>`})}const eb=/\{\$([^}]+)}/g;function tb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pt(t,e){if(t===e)return!0;const c=Object.keys(t),a=Object.keys(e);for(const n of c){if(!a.includes(n))return!1;const r=t[n],s=e[n];if(Vi(r)&&Vi(s)){if(!pt(r,s))return!1}else if(r!==s)return!1}for(const n of a)if(!c.includes(n))return!1;return!0}function Vi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){const e=[];for(const[c,a]of Object.entries(t))Array.isArray(a)?a.forEach(n=>{e.push(encodeURIComponent(c)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function x0(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,r]=a.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function A0(t){const e=t.indexOf("?");if(!e)return"";const c=t.indexOf("#",e);return t.substring(e,c>0?c:void 0)}function cb(t,e){const c=new ab(t,e);return c.subscribe.bind(c)}class ab{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(c=>{c.next(e)})}error(e){this.forEachObserver(c=>{c.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,c,a){let n;if(e===void 0&&c===void 0&&a===void 0)throw new Error("Missing Observer.");nb(e,["next","error","complete"])?n=e:n={next:e,error:c,complete:a},n.next===void 0&&(n.next=H5),n.error===void 0&&(n.error=H5),n.complete===void 0&&(n.complete=H5);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{c(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nb(t,e){if(typeof t!="object"||t===null)return!1;for(const c of e)if(c in t&&typeof t[c]=="function")return!0;return!1}function H5(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){return t&&t._delegate?t._delegate:t}class V3{constructor(e,c,a){this.name=e,this.instanceFactory=c,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const a=new qw;if(this.instancesDeferred.set(c,a),this.isInitialized(c)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:c});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(c=e==null?void 0:e.optional)!==null&&c!==void 0?c:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ib(e))try{this.getOrInitializeService({instanceIdentifier:I3})}catch{}for(const[c,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(c);try{const r=this.getOrInitializeService({instanceIdentifier:n});a.resolve(r)}catch{}}}}clearInstance(e=I3){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(c=>"INTERNAL"in c).map(c=>c.INTERNAL.delete()),...e.filter(c=>"_delete"in c).map(c=>c._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=I3){return this.instances.has(e)}getOptions(e=I3){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:c});for(const[r,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);a===i&&s.resolve(n)}return n}onInit(e,c){var a;const n=this.normalizeInstanceIdentifier(c),r=(a=this.onInitCallbacks.get(n))!==null&&a!==void 0?a:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,c){const a=this.onInitCallbacks.get(c);if(a)for(const n of a)try{n(e,c)}catch{}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:sb(e),options:c}),this.instances.set(e,a),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=I3){return this.component?this.component.multipleInstances?e:I3:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sb(t){return t===I3?void 0:t}function ib(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new rb(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p2;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(p2||(p2={}));const lb={debug:p2.DEBUG,verbose:p2.VERBOSE,info:p2.INFO,warn:p2.WARN,error:p2.ERROR,silent:p2.SILENT},fb=p2.INFO,ub={[p2.DEBUG]:"log",[p2.VERBOSE]:"log",[p2.INFO]:"info",[p2.WARN]:"warn",[p2.ERROR]:"error"},hb=(t,e,...c)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),n=ub[e];if(n)console[n](`[${a}]  ${t.name}:`,...c);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=fb,this._logHandler=hb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p2.DEBUG,...e),this._logHandler(this,p2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p2.VERBOSE,...e),this._logHandler(this,p2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p2.INFO,...e),this._logHandler(this,p2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p2.WARN,...e),this._logHandler(this,p2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p2.ERROR,...e),this._logHandler(this,p2.ERROR,...e)}}const db=(t,e)=>e.some(c=>t instanceof c);let zi,Ci;function mb(){return zi||(zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pb(){return Ci||(Ci=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $l=new WeakMap,u7=new WeakMap,ql=new WeakMap,V5=new WeakMap,Ia=new WeakMap;function vb(t){const e=new Promise((c,a)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{c(u3(t.result)),n()},s=()=>{a(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(c=>{c instanceof IDBCursor&&$l.set(c,t)}).catch(()=>{}),Ia.set(e,t),e}function gb(t){if(u7.has(t))return;const e=new Promise((c,a)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{c(),n()},s=()=>{a(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});u7.set(t,e)}let h7={get(t,e,c){if(t instanceof IDBTransaction){if(e==="done")return u7.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ql.get(t);if(e==="store")return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return u3(t[e])},set(t,e,c){return t[e]=c,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hb(t){h7=t(h7)}function Vb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...c){const a=t.call(z5(this),e,...c);return ql.set(a,e.sort?e.sort():[e]),u3(a)}:pb().includes(t)?function(...e){return t.apply(z5(this),e),u3($l.get(this))}:function(...e){return u3(t.apply(z5(this),e))}}function zb(t){return typeof t=="function"?Vb(t):(t instanceof IDBTransaction&&gb(t),db(t,mb())?new Proxy(t,h7):t)}function u3(t){if(t instanceof IDBRequest)return vb(t);if(V5.has(t))return V5.get(t);const e=zb(t);return e!==t&&(V5.set(t,e),Ia.set(e,t)),e}const z5=t=>Ia.get(t);function Cb(t,e,{blocked:c,upgrade:a,blocking:n,terminated:r}={}){const s=indexedDB.open(t,e),i=u3(s);return a&&s.addEventListener("upgradeneeded",o=>{a(u3(s.result),o.oldVersion,o.newVersion,u3(s.transaction),o)}),c&&s.addEventListener("blocked",o=>c(o.oldVersion,o.newVersion,o)),i.then(o=>{r&&o.addEventListener("close",()=>r()),n&&o.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const Mb=["get","getKey","getAll","getAllKeys","count"],yb=["put","add","delete","clear"],C5=new Map;function Mi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(C5.get(e))return C5.get(e);const c=e.replace(/FromIndex$/,""),a=e!==c,n=yb.includes(c);if(!(c in(a?IDBIndex:IDBObjectStore).prototype)||!(n||Mb.includes(c)))return;const r=async function(s,...i){const o=this.transaction(s,n?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[c](...i),n&&o.done]))[0]};return C5.set(e,r),r}Hb(t=>({...t,get:(e,c,a)=>Mi(e,c)||t.get(e,c,a),has:(e,c)=>!!Mi(e,c)||t.has(e,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(c=>{if(Lb(c)){const a=c.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(c=>c).join(" ")}}function Lb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const d7="@firebase/app",yi="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y3=new ka("@firebase/app"),wb="@firebase/app-compat",bb="@firebase/analytics-compat",xb="@firebase/analytics",Ab="@firebase/app-check-compat",Sb="@firebase/app-check",Tb="@firebase/auth",Nb="@firebase/auth-compat",Eb="@firebase/database",kb="@firebase/database-compat",Ib="@firebase/functions",Rb="@firebase/functions-compat",Pb="@firebase/installations",Db="@firebase/installations-compat",Fb="@firebase/messaging",Ob="@firebase/messaging-compat",Ub="@firebase/performance",Bb="@firebase/performance-compat",$b="@firebase/remote-config",qb="@firebase/remote-config-compat",Wb="@firebase/storage",jb="@firebase/storage-compat",Gb="@firebase/firestore",Kb="@firebase/firestore-compat",Qb="firebase",Xb="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m7="[DEFAULT]",Yb={[d7]:"fire-core",[wb]:"fire-core-compat",[xb]:"fire-analytics",[bb]:"fire-analytics-compat",[Sb]:"fire-app-check",[Ab]:"fire-app-check-compat",[Tb]:"fire-auth",[Nb]:"fire-auth-compat",[Eb]:"fire-rtdb",[kb]:"fire-rtdb-compat",[Ib]:"fire-fn",[Rb]:"fire-fn-compat",[Pb]:"fire-iid",[Db]:"fire-iid-compat",[Fb]:"fire-fcm",[Ob]:"fire-fcm-compat",[Ub]:"fire-perf",[Bb]:"fire-perf-compat",[$b]:"fire-rc",[qb]:"fire-rc-compat",[Wb]:"fire-gcs",[jb]:"fire-gcs-compat",[Gb]:"fire-fst",[Kb]:"fire-fst-compat","fire-js":"fire-js",[Qb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Map,p7=new Map;function Jb(t,e){try{t.container.addComponent(e)}catch(c){Y3.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,c)}}function J3(t){const e=t.name;if(p7.has(e))return Y3.debug(`There were multiple attempts to register component ${e}.`),!1;p7.set(e,t);for(const c of vt.values())Jb(c,t);return!0}function nc(t,e){const c=t.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},h3=new ke("app","Firebase",Zb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,c,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new V3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw h3.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f6=Xb;function Wl(t,e={}){let c=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:m7,automaticDataCollectionEnabled:!1},e),n=a.name;if(typeof n!="string"||!n)throw h3.create("bad-app-name",{appName:String(n)});if(c||(c=Ol()),!c)throw h3.create("no-options");const r=vt.get(n);if(r){if(pt(c,r.options)&&pt(a,r.config))return r;throw h3.create("duplicate-app",{appName:n})}const s=new ob(n);for(const o of p7.values())s.addComponent(o);const i=new ex(c,a,s);return vt.set(n,i),i}function Ra(t=m7){const e=vt.get(t);if(!e&&t===m7&&Ol())return Wl();if(!e)throw h3.create("no-app",{appName:t});return e}function p4(t,e,c){var a;let n=(a=Yb[t])!==null&&a!==void 0?a:t;c&&(n+=`-${c}`);const r=n.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const i=[`Unable to register library "${n}" with version "${e}":`];r&&i.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&i.push("and"),s&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Y3.warn(i.join(" "));return}J3(new V3(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx="firebase-heartbeat-database",cx=1,ie="firebase-heartbeat-store";let M5=null;function jl(){return M5||(M5=Cb(tx,cx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ie)}}}).catch(t=>{throw h3.create("idb-open",{originalErrorMessage:t.message})})),M5}async function ax(t){try{return await(await jl()).transaction(ie).objectStore(ie).get(Gl(t))}catch(e){if(e instanceof y4)Y3.warn(e.message);else{const c=h3.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Y3.warn(c.message)}}}async function _i(t,e){try{const a=(await jl()).transaction(ie,"readwrite");await a.objectStore(ie).put(e,Gl(t)),await a.done}catch(c){if(c instanceof y4)Y3.warn(c.message);else{const a=h3.create("idb-set",{originalErrorMessage:c==null?void 0:c.message});Y3.warn(a.message)}}}function Gl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=1024,rx=30*24*60*60*1e3;class sx{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new ox(c),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const c=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Li();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(n=>n.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:c}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const r=new Date(n.date).valueOf();return Date.now()-r<=rx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Li(),{heartbeatsToSend:c,unsentEntries:a}=ix(this._heartbeatsCache.heartbeats),n=mt(JSON.stringify({version:2,heartbeats:c}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Li(){return new Date().toISOString().substring(0,10)}function ix(t,e=nx){const c=[];let a=t.slice();for(const n of t){const r=c.find(s=>s.agent===n.agent);if(r){if(r.dates.push(n.date),wi(c)>e){r.dates.pop();break}}else if(c.push({agent:n.agent,dates:[n.date]}),wi(c)>e){c.pop();break}a=a.slice(1)}return{heartbeatsToSend:c,unsentEntries:a}}class ox{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Yw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ax(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var c;if(await this._canUseIndexedDBPromise){const n=await this.read();return _i(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var c;if(await this._canUseIndexedDBPromise){const n=await this.read();return _i(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function wi(t){return mt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t){J3(new V3("platform-logger",e=>new _b(e),"PRIVATE")),J3(new V3("heartbeat",e=>new sx(e),"PRIVATE")),p4(d7,yi,t),p4(d7,yi,"esm2017"),p4("fire-js","")}lx("");var fx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Pa=Pa||{},n2=fx||self;function rc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Re(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ux(t){return Object.prototype.hasOwnProperty.call(t,y5)&&t[y5]||(t[y5]=++hx)}var y5="closure_uid_"+(1e9*Math.random()>>>0),hx=0;function dx(t,e,c){return t.call.apply(t.bind,arguments)}function mx(t,e,c){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g1(t,e,c){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g1=dx:g1=mx,g1.apply(null,arguments)}function C8(t,e){var c=Array.prototype.slice.call(arguments,1);return function(){var a=c.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function a1(t,e){function c(){}c.prototype=e.prototype,t.$=e.prototype,t.prototype=new c,t.prototype.constructor=t,t.ac=function(a,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(a,s)}}function S3(){this.s=this.s,this.o=this.o}var px=0;S3.prototype.s=!1;S3.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),px!=0)&&ux(this)};S3.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Kl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let c=0;c<t.length;c++)if(c in t&&t[c]===e)return c;return-1};function Da(t){const e=t.length;if(0<e){const c=Array(e);for(let a=0;a<e;a++)c[a]=t[a];return c}return[]}function bi(t,e){for(let c=1;c<arguments.length;c++){const a=arguments[c];if(rc(a)){const n=t.length||0,r=a.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=a[s]}else t.push(a)}}function H1(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}H1.prototype.h=function(){this.defaultPrevented=!0};var vx=function(){if(!n2.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{n2.addEventListener("test",()=>{},e),n2.removeEventListener("test",()=>{},e)}catch{}return t}();function oe(t){return/^[\s\xa0]*$/.test(t)}function sc(){var t=n2.navigator;return t&&(t=t.userAgent)?t:""}function l4(t){return sc().indexOf(t)!=-1}function Fa(t){return Fa[" "](t),t}Fa[" "]=function(){};function gx(t,e){var c=lA;return Object.prototype.hasOwnProperty.call(c,t)?c[t]:c[t]=e(t)}var Hx=l4("Opera"),Q6=l4("Trident")||l4("MSIE"),Ql=l4("Edge"),v7=Ql||Q6,Xl=l4("Gecko")&&!(sc().toLowerCase().indexOf("webkit")!=-1&&!l4("Edge"))&&!(l4("Trident")||l4("MSIE"))&&!l4("Edge"),Vx=sc().toLowerCase().indexOf("webkit")!=-1&&!l4("Edge");function Yl(){var t=n2.document;return t?t.documentMode:void 0}var g7;e:{var _5="",L5=function(){var t=sc();if(Xl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ql)return/Edge\/([\d\.]+)/.exec(t);if(Q6)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Vx)return/WebKit\/(\S+)/.exec(t);if(Hx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(L5&&(_5=L5?L5[1]:""),Q6){var w5=Yl();if(w5!=null&&w5>parseFloat(_5)){g7=String(w5);break e}}g7=_5}var H7;if(n2.document&&Q6){var xi=Yl();H7=xi||parseInt(g7,10)||void 0}else H7=void 0;var zx=H7;function le(t,e){if(H1.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var c=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xl){e:{try{Fa(e.nodeName);var n=!0;break e}catch{}n=!1}n||(e=null)}}else c=="mouseover"?e=t.fromElement:c=="mouseout"&&(e=t.toElement);this.relatedTarget=e,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Cx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&le.$.h.call(this)}}a1(le,H1);var Cx={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),Mx=0;function yx(t,e,c,a,n){this.listener=t,this.proxy=null,this.src=e,this.type=c,this.capture=!!a,this.la=n,this.key=++Mx,this.fa=this.ia=!1}function ic(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Oa(t,e,c){for(const a in t)e.call(c,t[a],a,t)}function _x(t,e){for(const c in t)e.call(void 0,t[c],c,t)}function Jl(t){const e={};for(const c in t)e[c]=t[c];return e}const Ai="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zl(t,e){let c,a;for(let n=1;n<arguments.length;n++){a=arguments[n];for(c in a)t[c]=a[c];for(let r=0;r<Ai.length;r++)c=Ai[r],Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}}function oc(t){this.src=t,this.g={},this.h=0}oc.prototype.add=function(t,e,c,a,n){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var s=z7(t,e,a,n);return-1<s?(e=t[s],c||(e.ia=!1)):(e=new yx(e,this.src,r,!!a,n),e.ia=c,t.push(e)),e};function V7(t,e){var c=e.type;if(c in t.g){var a=t.g[c],n=Kl(a,e),r;(r=0<=n)&&Array.prototype.splice.call(a,n,1),r&&(ic(e),t.g[c].length==0&&(delete t.g[c],t.h--))}}function z7(t,e,c,a){for(var n=0;n<t.length;++n){var r=t[n];if(!r.fa&&r.listener==e&&r.capture==!!c&&r.la==a)return n}return-1}var Ua="closure_lm_"+(1e6*Math.random()|0),b5={};function ef(t,e,c,a,n){if(a&&a.once)return cf(t,e,c,a,n);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ef(t,e[r],c,a,n);return null}return c=qa(c),t&&t[Pe]?t.O(e,c,Re(a)?!!a.capture:!!a,n):tf(t,e,c,!1,a,n)}function tf(t,e,c,a,n,r){if(!e)throw Error("Invalid event type");var s=Re(n)?!!n.capture:!!n,i=$a(t);if(i||(t[Ua]=i=new oc(t)),c=i.add(e,c,a,s,r),c.proxy)return c;if(a=Lx(),c.proxy=a,a.src=t,a.listener=c,t.addEventListener)vx||(n=s),n===void 0&&(n=!1),t.addEventListener(e.toString(),a,n);else if(t.attachEvent)t.attachEvent(nf(e.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Lx(){function t(c){return e.call(t.src,t.listener,c)}const e=wx;return t}function cf(t,e,c,a,n){if(Array.isArray(e)){for(var r=0;r<e.length;r++)cf(t,e[r],c,a,n);return null}return c=qa(c),t&&t[Pe]?t.P(e,c,Re(a)?!!a.capture:!!a,n):tf(t,e,c,!0,a,n)}function af(t,e,c,a,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)af(t,e[r],c,a,n);else a=Re(a)?!!a.capture:!!a,c=qa(c),t&&t[Pe]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],c=z7(r,c,a,n),-1<c&&(ic(r[c]),Array.prototype.splice.call(r,c,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=$a(t))&&(e=t.g[e.toString()],t=-1,e&&(t=z7(e,c,a,n)),(c=-1<t?e[t]:null)&&Ba(c))}function Ba(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pe])V7(e.i,t);else{var c=t.type,a=t.proxy;e.removeEventListener?e.removeEventListener(c,a,t.capture):e.detachEvent?e.detachEvent(nf(c),a):e.addListener&&e.removeListener&&e.removeListener(a),(c=$a(e))?(V7(c,t),c.h==0&&(c.src=null,e[Ua]=null)):ic(t)}}}function nf(t){return t in b5?b5[t]:b5[t]="on"+t}function wx(t,e){if(t.fa)t=!0;else{e=new le(e,this);var c=t.listener,a=t.la||t.src;t.ia&&Ba(t),t=c.call(a,e)}return t}function $a(t){return t=t[Ua],t instanceof oc?t:null}var x5="__closure_events_fn_"+(1e9*Math.random()>>>0);function qa(t){return typeof t=="function"?t:(t[x5]||(t[x5]=function(e){return t.handleEvent(e)}),t[x5])}function c1(){S3.call(this),this.i=new oc(this),this.S=this,this.J=null}a1(c1,S3);c1.prototype[Pe]=!0;c1.prototype.removeEventListener=function(t,e,c,a){af(this,t,e,c,a)};function i1(t,e){var c,a=t.J;if(a)for(c=[];a;a=a.J)c.push(a);if(t=t.S,a=e.type||e,typeof e=="string")e=new H1(e,t);else if(e instanceof H1)e.target=e.target||t;else{var n=e;e=new H1(a,t),Zl(e,n)}if(n=!0,c)for(var r=c.length-1;0<=r;r--){var s=e.g=c[r];n=M8(s,a,!0,e)&&n}if(s=e.g=t,n=M8(s,a,!0,e)&&n,n=M8(s,a,!1,e)&&n,c)for(r=0;r<c.length;r++)s=e.g=c[r],n=M8(s,a,!1,e)&&n}c1.prototype.N=function(){if(c1.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var c=t.g[e],a=0;a<c.length;a++)ic(c[a]);delete t.g[e],t.h--}}this.J=null};c1.prototype.O=function(t,e,c,a){return this.i.add(String(t),e,!1,c,a)};c1.prototype.P=function(t,e,c,a){return this.i.add(String(t),e,!0,c,a)};function M8(t,e,c,a){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var n=!0,r=0;r<e.length;++r){var s=e[r];if(s&&!s.fa&&s.capture==c){var i=s.listener,o=s.la||s.src;s.ia&&V7(t.i,s),n=i.call(o,a)!==!1&&n}}return n&&!a.defaultPrevented}var Wa=n2.JSON.stringify;class bx{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xx(){var t=ja;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ax{constructor(){this.h=this.g=null}add(e,c){const a=rf.get();a.set(e,c),this.h?this.h.next=a:this.g=a,this.h=a}}var rf=new bx(()=>new Sx,t=>t.reset());class Sx{constructor(){this.next=this.g=this.h=null}set(e,c){this.h=e,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}function Tx(t){var e=1;t=t.split(":");const c=[];for(;0<e&&t.length;)c.push(t.shift()),e--;return t.length&&c.push(t.join(":")),c}function Nx(t){n2.setTimeout(()=>{throw t},0)}let fe,ue=!1,ja=new Ax,sf=()=>{const t=n2.Promise.resolve(void 0);fe=()=>{t.then(Ex)}};var Ex=()=>{for(var t;t=xx();){try{t.h.call(t.g)}catch(c){Nx(c)}var e=rf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ue=!1};function lc(t,e){c1.call(this),this.h=t||1,this.g=e||n2,this.j=g1(this.qb,this),this.l=Date.now()}a1(lc,c1);D=lc.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),i1(this,"tick"),this.ga&&(Ga(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ga(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){lc.$.N.call(this),Ga(this),delete this.g};function Ka(t,e,c){if(typeof t=="function")c&&(t=g1(t,c));else if(t&&typeof t.handleEvent=="function")t=g1(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:n2.setTimeout(t,e||0)}function of(t){t.g=Ka(()=>{t.g=null,t.i&&(t.i=!1,of(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kx extends S3{constructor(e,c){super(),this.m=e,this.j=c,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:of(this)}N(){super.N(),this.g&&(n2.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function he(t){S3.call(this),this.h=t,this.g={}}a1(he,S3);var Si=[];function lf(t,e,c,a){Array.isArray(c)||(c&&(Si[0]=c.toString()),c=Si);for(var n=0;n<c.length;n++){var r=ef(e,c[n],a||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ff(t){Oa(t.g,function(e,c){this.g.hasOwnProperty(c)&&Ba(e)},t),t.g={}}he.prototype.N=function(){he.$.N.call(this),ff(this)};he.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fc(){this.g=!0}fc.prototype.Ea=function(){this.g=!1};function Ix(t,e,c,a,n,r){t.info(function(){if(t.g)if(r)for(var s="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var u=f.split("_");s=2<=u.length&&u[1]=="type"?s+(f+"="+l+"&"):s+(f+"=redacted&")}}else s=null;else s=r;return"XMLHTTP REQ ("+a+") [attempt "+n+"]: "+e+`
`+c+`
`+s})}function Rx(t,e,c,a,n,r,s){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+n+"]: "+e+`
`+c+`
`+r+" "+s})}function b6(t,e,c,a){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Dx(t,c)+(a?" "+a:"")})}function Px(t,e){t.info(function(){return"TIMEOUT: "+e})}fc.prototype.info=function(){};function Dx(t,e){if(!t.g)return e;if(!e)return null;try{var c=JSON.parse(e);if(c){for(t=0;t<c.length;t++)if(Array.isArray(c[t])){var a=c[t];if(!(2>a.length)){var n=a[1];if(Array.isArray(n)&&!(1>n.length)){var r=n[0];if(r!="noop"&&r!="stop"&&r!="close")for(var s=1;s<n.length;s++)n[s]=""}}}}return Wa(c)}catch{return e}}var u6={},Ti=null;function uc(){return Ti=Ti||new c1}u6.Ta="serverreachability";function uf(t){H1.call(this,u6.Ta,t)}a1(uf,H1);function de(t){const e=uc();i1(e,new uf(e))}u6.STAT_EVENT="statevent";function hf(t,e){H1.call(this,u6.STAT_EVENT,t),this.stat=e}a1(hf,H1);function _1(t){const e=uc();i1(e,new hf(e,t))}u6.Ua="timingevent";function df(t,e){H1.call(this,u6.Ua,t),this.size=e}a1(df,H1);function De(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return n2.setTimeout(function(){t()},e)}var hc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qa(){}Qa.prototype.h=null;function Ni(t){return t.h||(t.h=t.i())}function pf(){}var Fe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xa(){H1.call(this,"d")}a1(Xa,H1);function Ya(){H1.call(this,"c")}a1(Ya,H1);var C7;function dc(){}a1(dc,Qa);dc.prototype.g=function(){return new XMLHttpRequest};dc.prototype.i=function(){return{}};C7=new dc;function Oe(t,e,c,a){this.l=t,this.j=e,this.m=c,this.W=a||1,this.U=new he(this),this.P=Fx,t=v7?125:void 0,this.V=new lc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vf}function vf(){this.i=null,this.g="",this.h=!1}var Fx=45e3,M7={},gt={};D=Oe.prototype;D.setTimeout=function(t){this.P=t};function y7(t,e,c){t.L=1,t.v=pc(P4(e)),t.s=c,t.S=!0,gf(t,null)}function gf(t,e){t.G=Date.now(),Ue(t),t.A=P4(t.v);var c=t.A,a=t.W;Array.isArray(a)||(a=[String(a)]),Lf(c.i,"t",a),t.C=0,c=t.l.J,t.h=new vf,t.g=jf(t.l,c?e:null,!t.s),0<t.O&&(t.M=new kx(g1(t.Pa,t,t.g),t.O)),lf(t.U,t.g,"readystatechange",t.nb),e=t.I?Jl(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),de(),Ix(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&f4(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const f=f4(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>f)&&(f!=3||v7||this.g&&(this.h.h||this.g.ja()||Ri(this.g)))){this.J||f!=4||e==7||(e==8||0>=u?de(3):de(2)),mc(this);var c=this.g.da();this.ca=c;t:if(Hf(this)){var a=Ri(this.g);t="";var n=a.length,r=f4(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){O3(this),$0(this);var s="";break t}this.h.i=new n2.TextDecoder}for(e=0;e<n;e++)this.h.h=!0,t+=this.h.i.decode(a[e],{stream:r&&e==n-1});a.splice(0,n),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=c==200,Rx(this.j,this.u,this.A,this.m,this.W,f,c),this.i){if(this.aa&&!this.K){t:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(i)){var l=i;break t}}l=null}if(c=l)b6(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_7(this,c);else{this.i=!1,this.o=3,_1(12),O3(this),$0(this);break e}}this.S?(Vf(this,f,s),v7&&this.i&&f==3&&(lf(this.U,this.V,"tick",this.mb),this.V.start())):(b6(this.j,this.m,s,null),_7(this,s)),f==4&&O3(this),this.i&&!this.J&&(f==4?Bf(this.l,this):(this.i=!1,Ue(this)))}else sA(this.g),c==400&&0<s.indexOf("Unknown SID")?(this.o=3,_1(12)):(this.o=0,_1(13)),O3(this),$0(this)}}}catch{}finally{}};function Hf(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Vf(t,e,c){let a=!0,n;for(;!t.J&&t.C<c.length;)if(n=Ox(t,c),n==gt){e==4&&(t.o=4,_1(14),a=!1),b6(t.j,t.m,null,"[Incomplete Response]");break}else if(n==M7){t.o=4,_1(15),b6(t.j,t.m,c,"[Invalid Chunk]"),a=!1;break}else b6(t.j,t.m,n,null),_7(t,n);Hf(t)&&n!=gt&&n!=M7&&(t.h.g="",t.C=0),e!=4||c.length!=0||t.h.h||(t.o=1,_1(16),a=!1),t.i=t.i&&a,a?0<c.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+c.length),an(e),e.M=!0,_1(11))):(b6(t.j,t.m,c,"[Invalid Chunked Response]"),O3(t),$0(t))}D.mb=function(){if(this.g){var t=f4(this.g),e=this.g.ja();this.C<e.length&&(mc(this),Vf(this,t,e),this.i&&t!=4&&Ue(this))}};function Ox(t,e){var c=t.C,a=e.indexOf(`
`,c);return a==-1?gt:(c=Number(e.substring(c,a)),isNaN(c)?M7:(a+=1,a+c>e.length?gt:(e=e.slice(a,a+c),t.C=a+c,e)))}D.cancel=function(){this.J=!0,O3(this)};function Ue(t){t.Y=Date.now()+t.P,zf(t,t.P)}function zf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=De(g1(t.lb,t),e)}function mc(t){t.B&&(n2.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Px(this.j,this.A),this.L!=2&&(de(),_1(17)),O3(this),this.o=2,$0(this)):zf(this,this.Y-t)};function $0(t){t.l.H==0||t.J||Bf(t.l,t)}function O3(t){mc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ga(t.V),ff(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function _7(t,e){try{var c=t.l;if(c.H!=0&&(c.g==t||L7(c.i,t))){if(!t.K&&L7(c.i,t)&&c.H==3){try{var a=c.Ja.g.parse(e)}catch{a=null}if(Array.isArray(a)&&a.length==3){var n=a;if(n[0]==0){e:if(!c.u){if(c.g)if(c.g.G+3e3<t.G)zt(c),Hc(c);else break e;cn(c),_1(18)}}else c.Fa=n[1],0<c.Fa-c.V&&37500>n[2]&&c.G&&c.A==0&&!c.v&&(c.v=De(g1(c.ib,c),6e3));if(1>=xf(c.i)&&c.oa){try{c.oa()}catch{}c.oa=void 0}}else U3(c,11)}else if((t.K||c.g==t)&&zt(c),!oe(e))for(n=c.Ja.g.parse(e),e=0;e<n.length;e++){let l=n[e];if(c.V=l[0],l=l[1],c.H==2)if(l[0]=="c"){c.K=l[1],c.pa=l[2];const f=l[3];f!=null&&(c.ra=f,c.l.info("VER="+c.ra));const u=l[4];u!=null&&(c.Ga=u,c.l.info("SVER="+c.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(a=1.5*h,c.L=a,c.l.info("backChannelRequestTimeoutMs_="+a)),a=c;const d=t.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=a.i;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ja(r,r.h),r.h=null))}if(a.F){const H=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;H&&(a.Da=H,A2(a.I,a.F,H))}}c.H=3,c.h&&c.h.Ba(),c.ca&&(c.S=Date.now()-t.G,c.l.info("Handshake RTT: "+c.S+"ms")),a=c;var s=t;if(a.wa=Wf(a,a.J?a.pa:null,a.Y),s.K){Af(a.i,s);var i=s,o=a.L;o&&i.setTimeout(o),i.B&&(mc(i),Ue(i)),a.g=s}else Of(a);0<c.j.length&&Vc(c)}else l[0]!="stop"&&l[0]!="close"||U3(c,7);else c.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?U3(c,7):tn(c):l[0]!="noop"&&c.h&&c.h.Aa(l),c.A=0)}}de(4)}catch{}}function Ux(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(rc(t)){for(var e=[],c=t.length,a=0;a<c;a++)e.push(t[a]);return e}e=[],c=0;for(a in t)e[c++]=t[a];return e}function Bx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(rc(t)||typeof t=="string"){var e=[];t=t.length;for(var c=0;c<t;c++)e.push(c);return e}e=[],c=0;for(const a in t)e[c++]=a;return e}}}function Cf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var c=Bx(t),a=Ux(t),n=a.length,r=0;r<n;r++)e.call(void 0,a[r],c&&c[r],t)}var Mf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $x(t,e){if(t){t=t.split("&");for(var c=0;c<t.length;c++){var a=t[c].indexOf("="),n=null;if(0<=a){var r=t[c].substring(0,a);n=t[c].substring(a+1)}else r=t[c];e(r,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}function G3(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof G3){this.h=t.h,Ht(this,t.j),this.s=t.s,this.g=t.g,Vt(this,t.m),this.l=t.l;var e=t.i,c=new me;c.i=e.i,e.g&&(c.g=new Map(e.g),c.h=e.h),Ei(this,c),this.o=t.o}else t&&(e=String(t).match(Mf))?(this.h=!1,Ht(this,e[1]||"",!0),this.s=S0(e[2]||""),this.g=S0(e[3]||"",!0),Vt(this,e[4]),this.l=S0(e[5]||"",!0),Ei(this,e[6]||"",!0),this.o=S0(e[7]||"")):(this.h=!1,this.i=new me(null,this.h))}G3.prototype.toString=function(){var t=[],e=this.j;e&&t.push(T0(e,ki,!0),":");var c=this.g;return(c||e=="file")&&(t.push("//"),(e=this.s)&&t.push(T0(e,ki,!0),"@"),t.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,c!=null&&t.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&t.push("/"),t.push(T0(c,c.charAt(0)=="/"?jx:Wx,!0))),(c=this.i.toString())&&t.push("?",c),(c=this.o)&&t.push("#",T0(c,Kx)),t.join("")};function P4(t){return new G3(t)}function Ht(t,e,c){t.j=c?S0(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ei(t,e,c){e instanceof me?(t.i=e,Qx(t.i,t.h)):(c||(e=T0(e,Gx)),t.i=new me(e,t.h))}function A2(t,e,c){t.i.set(e,c)}function pc(t){return A2(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function S0(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function T0(t,e,c){return typeof t=="string"?(t=encodeURI(t).replace(e,qx),c&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ki=/[#\/\?@]/g,Wx=/[#\?:]/g,jx=/[#\?]/g,Gx=/[#\?@]/g,Kx=/#/g;function me(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function T3(t){t.g||(t.g=new Map,t.h=0,t.i&&$x(t.i,function(e,c){t.add(decodeURIComponent(e.replace(/\+/g," ")),c)}))}D=me.prototype;D.add=function(t,e){T3(this),this.i=null,t=o0(this,t);var c=this.g.get(t);return c||this.g.set(t,c=[]),c.push(e),this.h+=1,this};function yf(t,e){T3(t),e=o0(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _f(t,e){return T3(t),e=o0(t,e),t.g.has(e)}D.forEach=function(t,e){T3(this),this.g.forEach(function(c,a){c.forEach(function(n){t.call(e,n,a,this)},this)},this)};D.ta=function(){T3(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),c=[];for(let a=0;a<e.length;a++){const n=t[a];for(let r=0;r<n.length;r++)c.push(e[a])}return c};D.Z=function(t){T3(this);let e=[];if(typeof t=="string")_f(this,t)&&(e=e.concat(this.g.get(o0(this,t))));else{t=Array.from(this.g.values());for(let c=0;c<t.length;c++)e=e.concat(t[c])}return e};D.set=function(t,e){return T3(this),this.i=null,t=o0(this,t),_f(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Lf(t,e,c){yf(t,e),0<c.length&&(t.i=null,t.g.set(o0(t,e),Da(c)),t.h+=c.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var c=0;c<e.length;c++){var a=e[c];const r=encodeURIComponent(String(a)),s=this.Z(a);for(a=0;a<s.length;a++){var n=r;s[a]!==""&&(n+="="+encodeURIComponent(String(s[a]))),t.push(n)}}return this.i=t.join("&")};function o0(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Qx(t,e){e&&!t.j&&(T3(t),t.i=null,t.g.forEach(function(c,a){var n=a.toLowerCase();a!=n&&(yf(this,a),Lf(this,n,c))},t)),t.j=e}var Xx=class{constructor(t,e){this.g=t,this.map=e}};function wf(t){this.l=t||Yx,n2.PerformanceNavigationTiming?(t=n2.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(n2.g&&n2.g.Ka&&n2.g.Ka()&&n2.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yx=10;function bf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xf(t){return t.h?1:t.g?t.g.size:0}function L7(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ja(t,e){t.g?t.g.add(e):t.h=e}function Af(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wf.prototype.cancel=function(){if(this.i=Sf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const c of t.g.values())e=e.concat(c.F);return e}return Da(t.i)}var Jx=class{stringify(t){return n2.JSON.stringify(t,void 0)}parse(t){return n2.JSON.parse(t,void 0)}};function Zx(){this.g=new Jx}function eA(t,e,c){const a=c||"";try{Cf(t,function(n,r){let s=n;Re(n)&&(s=Wa(n)),e.push(a+r+"="+encodeURIComponent(s))})}catch(n){throw e.push(a+"type="+encodeURIComponent("_badmap")),n}}function tA(t,e){const c=new fc;if(n2.Image){const a=new Image;a.onload=C8(y8,c,a,"TestLoadImage: loaded",!0,e),a.onerror=C8(y8,c,a,"TestLoadImage: error",!1,e),a.onabort=C8(y8,c,a,"TestLoadImage: abort",!1,e),a.ontimeout=C8(y8,c,a,"TestLoadImage: timeout",!1,e),n2.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else e(!1)}function y8(t,e,c,a,n){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,n(a)}catch{}}function Be(t){this.l=t.fc||null,this.j=t.ob||!1}a1(Be,Qa);Be.prototype.g=function(){return new vc(this.l,this.j)};Be.prototype.i=function(t){return function(){return t}}({});function vc(t,e){c1.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Za,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}a1(vc,c1);var Za=0;D=vc.prototype;D.open=function(t,e){if(this.readyState!=Za)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pe(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||n2).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$e(this)),this.readyState=Za};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pe(this)),this.g&&(this.readyState=3,pe(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof n2.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Tf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$e(this):pe(this),this.readyState==3&&Tf(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,$e(this))};D.Ya=function(t){this.g&&(this.response=t,$e(this))};D.ka=function(){this.g&&$e(this)};function $e(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pe(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var c=e.next();!c.done;)c=c.value,t.push(c[0]+": "+c[1]),c=e.next();return t.join(`\r
`)};function pe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var cA=n2.JSON.parse;function O2(t){c1.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nf,this.L=this.M=!1}a1(O2,c1);var Nf="",aA=/^https?$/i,nA=["POST","PUT"];D=O2.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,c,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():C7.g(),this.C=this.u?Ni(this.u):Ni(C7),this.g.onreadystatechange=g1(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Ii(this,r);return}if(t=c||"",c=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var n in a)c.set(n,a[n]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const r of a.keys())c.set(r,a.get(r));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(c.keys()).find(r=>r.toLowerCase()=="content-type"),n=n2.FormData&&t instanceof n2.FormData,!(0<=Kl(nA,e))||a||n||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,s]of c)this.g.setRequestHeader(r,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{If(this),0<this.B&&((this.L=rA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g1(this.ua,this)):this.A=Ka(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Ii(this,r)}};function rA(t){return Q6&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Pa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,i1(this,"timeout"),this.abort(8))};function Ii(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ef(t),gc(t)}function Ef(t){t.F||(t.F=!0,i1(t,"complete"),i1(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,i1(this,"complete"),i1(this,"abort"),gc(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gc(this,!0)),O2.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?kf(this):this.kb())};D.kb=function(){kf(this)};function kf(t){if(t.h&&typeof Pa<"u"&&(!t.C[1]||f4(t)!=4||t.da()!=2)){if(t.v&&f4(t)==4)Ka(t.La,0,t);else if(i1(t,"readystatechange"),f4(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var c;if(!(c=e)){var a;if(a=s===0){var n=String(t.I).match(Mf)[1]||null;!n&&n2.self&&n2.self.location&&(n=n2.self.location.protocol.slice(0,-1)),a=!aA.test(n?n.toLowerCase():"")}c=a}if(c)i1(t,"complete"),i1(t,"success");else{t.m=6;try{var r=2<f4(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Ef(t)}}finally{gc(t)}}}}function gc(t,e){if(t.g){If(t);const c=t.g,a=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||i1(t,"ready");try{c.onreadystatechange=a}catch{}}}function If(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(n2.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function f4(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<f4(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cA(e)}};function Ri(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function sA(t){const e={};t=(t.g&&2<=f4(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(oe(t[a]))continue;var c=Tx(t[a]);const n=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const r=e[n]||[];e[n]=r,r.push(c)}_x(e,function(a){return a.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rf(t){let e="";return Oa(t,function(c,a){e+=a,e+=":",e+=c,e+=`\r
`}),e}function en(t,e,c){e:{for(a in c){var a=!1;break e}a=!0}a||(c=Rf(c),typeof t=="string"?c!=null&&encodeURIComponent(String(c)):A2(t,e,c))}function M0(t,e,c){return c&&c.internalChannelParams&&c.internalChannelParams[t]||e}function Pf(t){this.Ga=0,this.j=[],this.l=new fc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=M0("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=M0("baseRetryDelayMs",5e3,t),this.hb=M0("retryDelaySeedMs",1e4,t),this.eb=M0("forwardChannelMaxRetries",2,t),this.xa=M0("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new wf(t&&t.concurrentRequestLimit),this.Ja=new Zx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=Pf.prototype;D.ra=8;D.H=1;function tn(t){if(Df(t),t.H==3){var e=t.W++,c=P4(t.I);if(A2(c,"SID",t.K),A2(c,"RID",e),A2(c,"TYPE","terminate"),qe(t,c),e=new Oe(t,t.l,e),e.L=2,e.v=pc(P4(c)),c=!1,n2.navigator&&n2.navigator.sendBeacon)try{c=n2.navigator.sendBeacon(e.v.toString(),"")}catch{}!c&&n2.Image&&(new Image().src=e.v,c=!0),c||(e.g=jf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ue(e)}qf(t)}function Hc(t){t.g&&(an(t),t.g.cancel(),t.g=null)}function Df(t){Hc(t),t.u&&(n2.clearTimeout(t.u),t.u=null),zt(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&n2.clearTimeout(t.m),t.m=null)}function Vc(t){if(!bf(t.i)&&!t.m){t.m=!0;var e=t.Na;fe||sf(),ue||(fe(),ue=!0),ja.add(e,t),t.C=0}}function iA(t,e){return xf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=De(g1(t.Na,t,e),$f(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const n=new Oe(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Jl(r),Zl(r,this.U)):r=this.U),this.o!==null||this.O||(n.I=r,r=null),this.P)e:{for(var e=0,c=0;c<this.j.length;c++){t:{var a=this.j[c];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break t}a=void 0}if(a===void 0)break;if(e+=a,4096<e){e=c;break e}if(e===4096||c===this.j.length-1){e=c+1;break e}}e=1e3}else e=1e3;e=Ff(this,n,e),c=P4(this.I),A2(c,"RID",t),A2(c,"CVER",22),this.F&&A2(c,"X-HTTP-Session-Id",this.F),qe(this,c),r&&(this.O?e="headers="+encodeURIComponent(String(Rf(r)))+"&"+e:this.o&&en(c,this.o,r)),Ja(this.i,n),this.bb&&A2(c,"TYPE","init"),this.P?(A2(c,"$req",e),A2(c,"SID","null"),n.aa=!0,y7(n,c,null)):y7(n,c,e),this.H=2}}else this.H==3&&(t?Pi(this,t):this.j.length==0||bf(this.i)||Pi(this))};function Pi(t,e){var c;e?c=e.m:c=t.W++;const a=P4(t.I);A2(a,"SID",t.K),A2(a,"RID",c),A2(a,"AID",t.V),qe(t,a),t.o&&t.s&&en(a,t.o,t.s),c=new Oe(t,t.l,c,t.C+1),t.o===null&&(c.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ff(t,c,1e3),c.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ja(t.i,c),y7(c,a,e)}function qe(t,e){t.na&&Oa(t.na,function(c,a){A2(e,a,c)}),t.h&&Cf({},function(c,a){A2(e,a,c)})}function Ff(t,e,c){c=Math.min(t.j.length,c);var a=t.h?g1(t.h.Va,t.h,t):null;e:{var n=t.j;let r=-1;for(;;){const s=["count="+c];r==-1?0<c?(r=n[0].g,s.push("ofs="+r)):r=0:s.push("ofs="+r);let i=!0;for(let o=0;o<c;o++){let l=n[o].g;const f=n[o].map;if(l-=r,0>l)r=Math.max(0,n[o].g-100),i=!1;else try{eA(f,s,"req"+l+"_")}catch{a&&a(f)}}if(i){a=s.join("&");break e}}}return t=t.j.splice(0,c),e.F=t,a}function Of(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;fe||sf(),ue||(fe(),ue=!0),ja.add(e,t),t.A=0}}function cn(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=De(g1(t.Ma,t),$f(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Uf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=De(g1(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_1(10),Hc(this),Uf(this))};function an(t){t.B!=null&&(n2.clearTimeout(t.B),t.B=null)}function Uf(t){t.g=new Oe(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=P4(t.wa);A2(e,"RID","rpc"),A2(e,"SID",t.K),A2(e,"AID",t.V),A2(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&A2(e,"TO",t.qa),A2(e,"TYPE","xmlhttp"),qe(t,e),t.o&&t.s&&en(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var c=t.g;t=t.pa,c.L=1,c.v=pc(P4(e)),c.s=null,c.S=!0,gf(c,t)}D.ib=function(){this.v!=null&&(this.v=null,Hc(this),cn(this),_1(19))};function zt(t){t.v!=null&&(n2.clearTimeout(t.v),t.v=null)}function Bf(t,e){var c=null;if(t.g==e){zt(t),an(t),t.g=null;var a=2}else if(L7(t.i,e))c=e.F,Af(t.i,e),a=1;else return;if(t.H!=0){if(e.i)if(a==1){c=e.s?e.s.length:0,e=Date.now()-e.G;var n=t.C;a=uc(),i1(a,new df(a,c)),Vc(t)}else Of(t);else if(n=e.o,n==3||n==0&&0<e.ca||!(a==1&&iA(t,e)||a==2&&cn(t)))switch(c&&0<c.length&&(e=t.i,e.i=e.i.concat(c)),n){case 1:U3(t,5);break;case 4:U3(t,10);break;case 3:U3(t,6);break;default:U3(t,2)}}}function $f(t,e){let c=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(c*=2),c*e}function U3(t,e){if(t.l.info("Error code "+e),e==2){var c=null;t.h&&(c=null);var a=g1(t.pb,t);c||(c=new G3("//www.google.com/images/cleardot.gif"),n2.location&&n2.location.protocol=="http"||Ht(c,"https"),pc(c)),tA(c.toString(),a)}else _1(2);t.H=0,t.h&&t.h.za(e),qf(t),Df(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_1(2)):(this.l.info("Failed to ping google.com"),_1(1))};function qf(t){if(t.H=0,t.ma=[],t.h){const e=Sf(t.i);(e.length!=0||t.j.length!=0)&&(bi(t.ma,e),bi(t.ma,t.j),t.i.i.length=0,Da(t.j),t.j.length=0),t.h.ya()}}function Wf(t,e,c){var a=c instanceof G3?P4(c):new G3(c);if(a.g!="")e&&(a.g=e+"."+a.g),Vt(a,a.m);else{var n=n2.location;a=n.protocol,e=e?e+"."+n.hostname:n.hostname,n=+n.port;var r=new G3(null);a&&Ht(r,a),e&&(r.g=e),n&&Vt(r,n),c&&(r.l=c),a=r}return c=t.F,e=t.Da,c&&e&&A2(a,c,e),A2(a,"VER",t.ra),qe(t,a),a}function jf(t,e,c){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=c&&t.Ha&&!t.va?new O2(new Be({ob:!0})):new O2(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Gf(){}D=Gf.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Ct(){if(Q6&&!(10<=Number(zx)))throw Error("Environmental error: no available transport.")}Ct.prototype.g=function(t,e){return new D1(t,e)};function D1(t,e){c1.call(this),this.g=new Pf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!oe(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oe(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new l0(this)}a1(D1,c1);D1.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,c=this.h||void 0;_1(0),t.Y=e,t.na=c||{},t.G=t.aa,t.I=Wf(t,null,t.Y),Vc(t)};D1.prototype.close=function(){tn(this.g)};D1.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var c={};c.__data__=t,t=c}else this.v&&(c={},c.__data__=Wa(t),t=c);e.j.push(new Xx(e.fb++,t)),e.H==3&&Vc(e)};D1.prototype.N=function(){this.g.h=null,delete this.j,tn(this.g),delete this.g,D1.$.N.call(this)};function Kf(t){Xa.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const c in e){t=c;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}a1(Kf,Xa);function Qf(){Ya.call(this),this.status=1}a1(Qf,Ya);function l0(t){this.g=t}a1(l0,Gf);l0.prototype.Ba=function(){i1(this.g,"a")};l0.prototype.Aa=function(t){i1(this.g,new Kf(t))};l0.prototype.za=function(t){i1(this.g,new Qf)};l0.prototype.ya=function(){i1(this.g,"b")};function oA(){this.blockSize=-1}function e4(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}a1(e4,oA);e4.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function A5(t,e,c){c||(c=0);var a=Array(16);if(typeof e=="string")for(var n=0;16>n;++n)a[n]=e.charCodeAt(c++)|e.charCodeAt(c++)<<8|e.charCodeAt(c++)<<16|e.charCodeAt(c++)<<24;else for(n=0;16>n;++n)a[n]=e[c++]|e[c++]<<8|e[c++]<<16|e[c++]<<24;e=t.g[0],c=t.g[1],n=t.g[2];var r=t.g[3],s=e+(r^c&(n^r))+a[0]+3614090360&4294967295;e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[1]+3905402710&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[2]+606105819&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[3]+3250441966&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(r^c&(n^r))+a[4]+4118548399&4294967295,e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[5]+1200080426&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[6]+2821735955&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[7]+4249261313&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(r^c&(n^r))+a[8]+1770035416&4294967295,e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[9]+2336552879&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[10]+4294925233&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[11]+2304563134&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(r^c&(n^r))+a[12]+1804603682&4294967295,e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[13]+4254626195&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[14]+2792965006&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[15]+1236535329&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(n^r&(c^n))+a[1]+4129170786&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[6]+3225465664&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[11]+643717713&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[0]+3921069994&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(c^n))+a[5]+3593408605&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[10]+38016083&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[15]+3634488961&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[4]+3889429448&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(c^n))+a[9]+568446438&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[14]+3275163606&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[3]+4107603335&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[8]+1163531501&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(c^n))+a[13]+2850285829&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[2]+4243563512&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[7]+1735328473&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[12]+2368359562&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(c^n^r)+a[5]+4294588738&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[8]+2272392833&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[11]+1839030562&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[14]+4259657740&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(c^n^r)+a[1]+2763975236&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[4]+1272893353&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[7]+4139469664&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[10]+3200236656&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(c^n^r)+a[13]+681279174&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[0]+3936430074&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[3]+3572445317&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[6]+76029189&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(c^n^r)+a[9]+3654602809&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[12]+3873151461&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[15]+530742520&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[2]+3299628645&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(n^(c|~r))+a[0]+4096336452&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[7]+1126891415&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[14]+2878612391&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[5]+4237533241&4294967295,c=n+(s<<21&4294967295|s>>>11),s=e+(n^(c|~r))+a[12]+1700485571&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[3]+2399980690&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[10]+4293915773&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[1]+2240044497&4294967295,c=n+(s<<21&4294967295|s>>>11),s=e+(n^(c|~r))+a[8]+1873313359&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[15]+4264355552&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[6]+2734768916&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[13]+1309151649&4294967295,c=n+(s<<21&4294967295|s>>>11),s=e+(n^(c|~r))+a[4]+4149444226&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[11]+3174756917&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[2]+718787259&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(n+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+n&4294967295,t.g[3]=t.g[3]+r&4294967295}e4.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var c=e-this.blockSize,a=this.m,n=this.h,r=0;r<e;){if(n==0)for(;r<=c;)A5(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(a[n++]=t.charCodeAt(r++),n==this.blockSize){A5(this,a),n=0;break}}else for(;r<e;)if(a[n++]=t[r++],n==this.blockSize){A5(this,a),n=0;break}}this.h=n,this.i+=e};e4.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var c=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=c&255,c/=256;for(this.j(t),t=Array(16),e=c=0;4>e;++e)for(var a=0;32>a;a+=8)t[c++]=this.g[e]>>>a&255;return t};function y2(t,e){this.h=e;for(var c=[],a=!0,n=t.length-1;0<=n;n--){var r=t[n]|0;a&&r==e||(c[n]=r,a=!1)}this.g=c}var lA={};function nn(t){return-128<=t&&128>t?gx(t,function(e){return new y2([e|0],0>e?-1:0)}):new y2([t|0],0>t?-1:0)}function u4(t){if(isNaN(t)||!isFinite(t))return R6;if(0>t)return r1(u4(-t));for(var e=[],c=1,a=0;t>=c;a++)e[a]=t/c|0,c*=w7;return new y2(e,0)}function Xf(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return r1(Xf(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=u4(Math.pow(e,8)),a=R6,n=0;n<t.length;n+=8){var r=Math.min(8,t.length-n),s=parseInt(t.substring(n,n+r),e);8>r?(r=u4(Math.pow(e,r)),a=a.R(r).add(u4(s))):(a=a.R(c),a=a.add(u4(s)))}return a}var w7=4294967296,R6=nn(0),b7=nn(1),Di=nn(16777216);D=y2.prototype;D.ea=function(){if(U1(this))return-r1(this).ea();for(var t=0,e=1,c=0;c<this.g.length;c++){var a=this.D(c);t+=(0<=a?a:w7+a)*e,e*=w7}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(A4(this))return"0";if(U1(this))return"-"+r1(this).toString(t);for(var e=u4(Math.pow(t,6)),c=this,a="";;){var n=yt(c,e).g;c=Mt(c,n.R(e));var r=((0<c.g.length?c.g[0]:c.h)>>>0).toString(t);if(c=n,A4(c))return r+a;for(;6>r.length;)r="0"+r;a=r+a}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function A4(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function U1(t){return t.h==-1}D.X=function(t){return t=Mt(this,t),U1(t)?-1:A4(t)?0:1};function r1(t){for(var e=t.g.length,c=[],a=0;a<e;a++)c[a]=~t.g[a];return new y2(c,~t.h).add(b7)}D.abs=function(){return U1(this)?r1(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0,n=0;n<=e;n++){var r=a+(this.D(n)&65535)+(t.D(n)&65535),s=(r>>>16)+(this.D(n)>>>16)+(t.D(n)>>>16);a=s>>>16,r&=65535,s&=65535,c[n]=s<<16|r}return new y2(c,c[c.length-1]&-2147483648?-1:0)};function Mt(t,e){return t.add(r1(e))}D.R=function(t){if(A4(this)||A4(t))return R6;if(U1(this))return U1(t)?r1(this).R(r1(t)):r1(r1(this).R(t));if(U1(t))return r1(this.R(r1(t)));if(0>this.X(Di)&&0>t.X(Di))return u4(this.ea()*t.ea());for(var e=this.g.length+t.g.length,c=[],a=0;a<2*e;a++)c[a]=0;for(a=0;a<this.g.length;a++)for(var n=0;n<t.g.length;n++){var r=this.D(a)>>>16,s=this.D(a)&65535,i=t.D(n)>>>16,o=t.D(n)&65535;c[2*a+2*n]+=s*o,_8(c,2*a+2*n),c[2*a+2*n+1]+=r*o,_8(c,2*a+2*n+1),c[2*a+2*n+1]+=s*i,_8(c,2*a+2*n+1),c[2*a+2*n+2]+=r*i,_8(c,2*a+2*n+2)}for(a=0;a<e;a++)c[a]=c[2*a+1]<<16|c[2*a];for(a=e;a<2*e;a++)c[a]=0;return new y2(c,0)};function _8(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function y0(t,e){this.g=t,this.h=e}function yt(t,e){if(A4(e))throw Error("division by zero");if(A4(t))return new y0(R6,R6);if(U1(t))return e=yt(r1(t),e),new y0(r1(e.g),r1(e.h));if(U1(e))return e=yt(t,r1(e)),new y0(r1(e.g),e.h);if(30<t.g.length){if(U1(t)||U1(e))throw Error("slowDivide_ only works with positive integers.");for(var c=b7,a=e;0>=a.X(t);)c=Fi(c),a=Fi(a);var n=C6(c,1),r=C6(a,1);for(a=C6(a,2),c=C6(c,2);!A4(a);){var s=r.add(a);0>=s.X(t)&&(n=n.add(c),r=s),a=C6(a,1),c=C6(c,1)}return e=Mt(t,n.R(e)),new y0(n,e)}for(n=R6;0<=t.X(e);){for(c=Math.max(1,Math.floor(t.ea()/e.ea())),a=Math.ceil(Math.log(c)/Math.LN2),a=48>=a?1:Math.pow(2,a-48),r=u4(c),s=r.R(e);U1(s)||0<s.X(t);)c-=a,r=u4(c),s=r.R(e);A4(r)&&(r=b7),n=n.add(r),t=Mt(t,s)}return new y0(n,t)}D.gb=function(t){return yt(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0;a<e;a++)c[a]=this.D(a)&t.D(a);return new y2(c,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0;a<e;a++)c[a]=this.D(a)|t.D(a);return new y2(c,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0;a<e;a++)c[a]=this.D(a)^t.D(a);return new y2(c,this.h^t.h)};function Fi(t){for(var e=t.g.length+1,c=[],a=0;a<e;a++)c[a]=t.D(a)<<1|t.D(a-1)>>>31;return new y2(c,t.h)}function C6(t,e){var c=e>>5;e%=32;for(var a=t.g.length-c,n=[],r=0;r<a;r++)n[r]=0<e?t.D(r+c)>>>e|t.D(r+c+1)<<32-e:t.D(r+c);return new y2(n,t.h)}Ct.prototype.createWebChannel=Ct.prototype.g;D1.prototype.send=D1.prototype.u;D1.prototype.open=D1.prototype.m;D1.prototype.close=D1.prototype.close;hc.NO_ERROR=0;hc.TIMEOUT=8;hc.HTTP_ERROR=6;mf.COMPLETE="complete";pf.EventType=Fe;Fe.OPEN="a";Fe.CLOSE="b";Fe.ERROR="c";Fe.MESSAGE="d";c1.prototype.listen=c1.prototype.O;O2.prototype.listenOnce=O2.prototype.P;O2.prototype.getLastError=O2.prototype.Sa;O2.prototype.getLastErrorCode=O2.prototype.Ia;O2.prototype.getStatus=O2.prototype.da;O2.prototype.getResponseJson=O2.prototype.Wa;O2.prototype.getResponseText=O2.prototype.ja;O2.prototype.send=O2.prototype.ha;O2.prototype.setWithCredentials=O2.prototype.Oa;e4.prototype.digest=e4.prototype.l;e4.prototype.reset=e4.prototype.reset;e4.prototype.update=e4.prototype.j;y2.prototype.add=y2.prototype.add;y2.prototype.multiply=y2.prototype.R;y2.prototype.modulo=y2.prototype.gb;y2.prototype.compare=y2.prototype.X;y2.prototype.toNumber=y2.prototype.ea;y2.prototype.toString=y2.prototype.toString;y2.prototype.getBits=y2.prototype.D;y2.fromNumber=u4;y2.fromString=Xf;var fA=function(){return new Ct},uA=function(){return uc()},S5=hc,hA=mf,dA=u6,Oi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},mA=Be,L8=pf,pA=O2,vA=e4,P6=y2;const Ui="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u1=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};u1.UNAUTHENTICATED=new u1(null),u1.GOOGLE_CREDENTIALS=new u1("google-credentials-uid"),u1.FIRST_PARTY=new u1("first-party-uid"),u1.MOCK_USER=new u1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f0="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z3=new ka("@firebase/firestore");function Bi(){return Z3.logLevel}function j(t,...e){if(Z3.logLevel<=p2.DEBUG){const c=e.map(rn);Z3.debug(`Firestore (${f0}): ${t}`,...c)}}function D4(t,...e){if(Z3.logLevel<=p2.ERROR){const c=e.map(rn);Z3.error(`Firestore (${f0}): ${t}`,...c)}}function X6(t,...e){if(Z3.logLevel<=p2.WARN){const c=e.map(rn);Z3.warn(`Firestore (${f0}): ${t}`,...c)}}function rn(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(c){return JSON.stringify(c)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t="Unexpected state"){const e=`FIRESTORE (${f0}) INTERNAL ASSERTION FAILED: `+t;throw D4(e),new Error(e)}function N2(t,e){t||c2()}function l2(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends y4{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(){this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable(()=>c(u1.UNAUTHENTICATED))}shutdown(){}}class HA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable(()=>c(this.token.user))}shutdown(){this.changeListener=null}}class VA{constructor(e){this.t=e,this.currentUser=u1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,c){let a=this.i;const n=o=>this.i!==a?(a=this.i,c(o)):Promise.resolve();let r=new E4;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new E4,e.enqueueRetryable(()=>n(this.currentUser))};const s=()=>{const o=r;e.enqueueRetryable(async()=>{await o.promise,await n(this.currentUser)})},i=o=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new E4)}},0),s()}getToken(){const e=this.i,c=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(c).then(a=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(N2(typeof a.accessToken=="string"),new Yf(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return N2(e===null||typeof e=="string"),new u1(e)}}class zA{constructor(e,c,a){this.l=e,this.h=c,this.P=a,this.type="FirstParty",this.user=u1.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CA{constructor(e,c,a){this.l=e,this.h=c,this.P=a}getToken(){return Promise.resolve(new zA(this.l,this.h,this.P))}start(e,c){e.enqueueRetryable(()=>c(u1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,c){const a=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const s=r.token!==this.R;return this.R=r.token,j("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?c(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>a(r))};const n=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>n(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?n(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(c=>c?(N2(typeof c.token=="string"),this.R=c.token,new MA(c.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),c=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(c);else for(let a=0;a<t;a++)c[a]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let a="";for(;a.length<20;){const n=_A(40);for(let r=0;r<n.length;++r)a.length<20&&n[r]<c&&(a+=e.charAt(n[r]%e.length))}return a}}function g2(t,e){return t<e?-1:t>e?1:0}function Y6(t,e,c){return t.length===e.length&&t.every((a,n)=>c(a,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y2.fromMillis(Date.now())}static fromDate(e){return Y2.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),a=Math.floor(1e6*(e-1e3*c));return new Y2(c,a)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?g2(this.nanoseconds,e.nanoseconds):g2(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.timestamp=e}static fromTimestamp(e){return new s2(e)}static min(){return new s2(new Y2(0,0))}static max(){return new s2(new Y2(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,c,a){c===void 0?c=0:c>e.length&&c2(),a===void 0?a=e.length-c:a>e.length-c&&c2(),this.segments=e,this.offset=c,this.len=a}get length(){return this.len}isEqual(e){return ve.comparator(this,e)===0}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof ve?e.forEach(a=>{c.push(a)}):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,a=this.limit();c<a;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const a=Math.min(e.length,c.length);for(let n=0;n<a;n++){const r=e.get(n),s=c.get(n);if(r<s)return-1;if(r>s)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class S2 extends ve{construct(e,c,a){return new S2(e,c,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const c=[];for(const a of e){if(a.indexOf("//")>=0)throw new U(L.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);c.push(...a.split("/").filter(n=>n.length>0))}return new S2(c)}static emptyPath(){return new S2([])}}const LA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class m1 extends ve{construct(e,c,a){return new m1(e,c,a)}static isValidIdentifier(e){return LA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),m1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new m1(["__name__"])}static fromServerFormat(e){const c=[];let a="",n=0;const r=()=>{if(a.length===0)throw new U(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(a),a=""};let s=!1;for(;n<e.length;){const i=e[n];if(i==="\\"){if(n+1===e.length)throw new U(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[n+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new U(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=o,n+=2}else i==="`"?(s=!s,n++):i!=="."||s?(a+=i,n++):(r(),n++)}if(r(),s)throw new U(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new m1(c)}static emptyPath(){return new m1([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(S2.fromString(e))}static fromName(e){return new X(S2.fromString(e).popFirst(5))}static empty(){return new X(S2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&S2.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,c){return S2.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new S2(e.slice()))}}function wA(t,e){const c=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,n=s2.fromTimestamp(a===1e9?new Y2(c+1,0):new Y2(c,a));return new z3(n,X.empty(),e)}function bA(t){return new z3(t.readTime,t.key,-1)}class z3{constructor(e,c,a){this.readTime=e,this.documentKey=c,this.largestBatchId=a}static min(){return new z3(s2.min(),X.empty(),-1)}static max(){return new z3(s2.max(),X.empty(),-1)}}function xA(t,e){let c=t.readTime.compareTo(e.readTime);return c!==0?c:(c=X.comparator(t.documentKey,e.documentKey),c!==0?c:g2(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==AA)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(c=>{this.isDone=!0,this.result=c,this.nextCallback&&this.nextCallback(c)},c=>{this.isDone=!0,this.error=c,this.catchCallback&&this.catchCallback(c)})}catch(e){return this.next(void 0,e)}next(e,c){return this.callbackAttached&&c2(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(c,this.error):this.wrapSuccess(e,this.result):new N((a,n)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(a,n)},this.catchCallback=r=>{this.wrapFailure(c,r).next(a,n)}})}toPromise(){return new Promise((e,c)=>{this.next(e,c)})}wrapUserFunction(e){try{const c=e();return c instanceof N?c:N.resolve(c)}catch(c){return N.reject(c)}}wrapSuccess(e,c){return e?this.wrapUserFunction(()=>e(c)):N.resolve(c)}wrapFailure(e,c){return e?this.wrapUserFunction(()=>e(c)):N.reject(c)}static resolve(e){return new N((c,a)=>{c(e)})}static reject(e){return new N((c,a)=>{a(e)})}static waitFor(e){return new N((c,a)=>{let n=0,r=0,s=!1;e.forEach(i=>{++n,i.next(()=>{++r,s&&r===n&&c()},o=>a(o))}),s=!0,r===n&&c()})}static or(e){let c=N.resolve(!1);for(const a of e)c=c.next(n=>n?N.resolve(n):a());return c}static forEach(e,c){const a=[];return e.forEach((n,r)=>{a.push(c.call(this,n,r))}),this.waitFor(a)}static mapArray(e,c){return new N((a,n)=>{const r=e.length,s=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;c(e[l]).next(f=>{s[l]=f,++i,i===r&&a(s)},f=>n(f))}})}static doWhile(e,c){return new N((a,n)=>{const r=()=>{e()===!0?c().next(()=>{r()},n):a()};r()})}}function je(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,c){this.previousValue=e,c&&(c.sequenceNumberHandler=a=>this.oe(a),this._e=a=>c.writeSequenceNumber(a))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}sn.ae=-1;function zc(t){return t==null}function _t(t){return t===0&&1/t==-1/0}function TA(t){return typeof t=="number"&&Number.isInteger(t)&&!_t(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){let e=0;for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e++;return e}function h6(t,e){for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e(c,t[c])}function Zf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,c){this.comparator=e,this.root=c||n1.EMPTY}insert(e,c){return new R2(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,n1.BLACK,null,null))}remove(e){return new R2(this.comparator,this.root.remove(e,this.comparator).copy(null,null,n1.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const a=this.comparator(e,c.key);if(a===0)return c.value;a<0?c=c.left:a>0&&(c=c.right)}return null}indexOf(e){let c=0,a=this.root;for(;!a.isEmpty();){const n=this.comparator(e,a.key);if(n===0)return c+a.left.size;n<0?a=a.left:(c+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((c,a)=>(e(c,a),!1))}toString(){const e=[];return this.inorderTraversal((c,a)=>(e.push(`${c}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new w8(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new w8(this.root,e,this.comparator,!1)}getReverseIterator(){return new w8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new w8(this.root,e,this.comparator,!0)}}class w8{constructor(e,c,a,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=c?a(e.key,c):1,c&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class n1{constructor(e,c,a,n,r){this.key=e,this.value=c,this.color=a??n1.RED,this.left=n??n1.EMPTY,this.right=r??n1.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,a,n,r){return new n1(e??this.key,c??this.value,a??this.color,n??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,a){let n=this;const r=a(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,c,a),null):r===0?n.copy(null,c,null,null,null):n.copy(null,null,null,null,n.right.insert(e,c,a)),n.fixUp()}removeMin(){if(this.left.isEmpty())return n1.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let a,n=this;if(c(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,c),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),c(e,n.key)===0){if(n.right.isEmpty())return n1.EMPTY;a=n.right.min(),n=n.copy(a.key,a.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,c))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,n1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,n1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw c2();const e=this.left.check();if(e!==this.right.check())throw c2();return e+(this.isRed()?0:1)}}n1.EMPTY=null,n1.RED=!0,n1.BLACK=!1;n1.EMPTY=new class{constructor(){this.size=0}get key(){throw c2()}get value(){throw c2()}get color(){throw c2()}get left(){throw c2()}get right(){throw c2()}copy(e,c,a,n,r){return this}insert(e,c,a){return new n1(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.comparator=e,this.data=new R2(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((c,a)=>(e(c),!1))}forEachInRange(e,c){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const n=a.getNext();if(this.comparator(n.key,e[1])>=0)return;c(n.key)}}forEachWhile(e,c){let a;for(a=c!==void 0?this.data.getIteratorFrom(c):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new qi(this.data.getIterator())}getIteratorFrom(e){return new qi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach(a=>{c=c.add(a)}),c}isEqual(e){if(!(e instanceof V1)||this.size!==e.size)return!1;const c=this.data.getIterator(),a=e.data.getIterator();for(;c.hasNext();){const n=c.getNext().key,r=a.getNext().key;if(this.comparator(n,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(c=>{e.push(c)}),e}toString(){const e=[];return this.forEach(c=>e.push(c)),"SortedSet("+e.toString()+")"}copy(e){const c=new V1(this.comparator);return c.data=e,c}}class qi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.fields=e,e.sort(m1.comparator)}static empty(){return new R1([])}unionWith(e){let c=new V1(m1.comparator);for(const a of this.fields)c=c.add(a);for(const a of e)c=c.add(a);return new R1(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return Y6(this.fields,e.fields,(c,a)=>c.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(n){try{return atob(n)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new eu("Invalid base64 string: "+r):r}}(e);return new C1(c)}static fromUint8Array(e){const c=function(n){let r="";for(let s=0;s<n.length;++s)r+=String.fromCharCode(n[s]);return r}(e);return new C1(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(c){return btoa(c)}(this.binaryString)}toUint8Array(){return function(c){const a=new Uint8Array(c.length);for(let n=0;n<c.length;n++)a[n]=c.charCodeAt(n);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return g2(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}C1.EMPTY_BYTE_STRING=new C1("");const NA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function C3(t){if(N2(!!t),typeof t=="string"){let e=0;const c=NA.exec(t);if(N2(!!c),c[1]){let n=c[1];n=(n+"000000000").substr(0,9),e=Number(n)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Q2(t.seconds),nanos:Q2(t.nanos)}}function Q2(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function e6(t){return typeof t=="string"?C1.fromBase64String(t):C1.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){var e,c;return((c=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||c===void 0?void 0:c.stringValue)==="server_timestamp"}function ln(t){const e=t.mapValue.fields.__previous_value__;return on(e)?ln(e):e}function ge(t){const e=C3(t.mapValue.fields.__local_write_time__.timestampValue);return new Y2(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,c,a,n,r,s,i,o,l){this.databaseId=e,this.appId=c,this.persistenceKey=a,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=i,this.longPollingOptions=o,this.useFetchStreams=l}}class He{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new He("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof He&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function t6(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?on(t)?4:kA(t)?9007199254740991:10:c2()}function M4(t,e){if(t===e)return!0;const c=t6(t);if(c!==t6(e))return!1;switch(c){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ge(t).isEqual(ge(e));case 3:return function(n,r){if(typeof n.timestampValue=="string"&&typeof r.timestampValue=="string"&&n.timestampValue.length===r.timestampValue.length)return n.timestampValue===r.timestampValue;const s=C3(n.timestampValue),i=C3(r.timestampValue);return s.seconds===i.seconds&&s.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(n,r){return e6(n.bytesValue).isEqual(e6(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(n,r){return Q2(n.geoPointValue.latitude)===Q2(r.geoPointValue.latitude)&&Q2(n.geoPointValue.longitude)===Q2(r.geoPointValue.longitude)}(t,e);case 2:return function(n,r){if("integerValue"in n&&"integerValue"in r)return Q2(n.integerValue)===Q2(r.integerValue);if("doubleValue"in n&&"doubleValue"in r){const s=Q2(n.doubleValue),i=Q2(r.doubleValue);return s===i?_t(s)===_t(i):isNaN(s)&&isNaN(i)}return!1}(t,e);case 9:return Y6(t.arrayValue.values||[],e.arrayValue.values||[],M4);case 10:return function(n,r){const s=n.mapValue.fields||{},i=r.mapValue.fields||{};if($i(s)!==$i(i))return!1;for(const o in s)if(s.hasOwnProperty(o)&&(i[o]===void 0||!M4(s[o],i[o])))return!1;return!0}(t,e);default:return c2()}}function Ve(t,e){return(t.values||[]).find(c=>M4(c,e))!==void 0}function J6(t,e){if(t===e)return 0;const c=t6(t),a=t6(e);if(c!==a)return g2(c,a);switch(c){case 0:case 9007199254740991:return 0;case 1:return g2(t.booleanValue,e.booleanValue);case 2:return function(r,s){const i=Q2(r.integerValue||r.doubleValue),o=Q2(s.integerValue||s.doubleValue);return i<o?-1:i>o?1:i===o?0:isNaN(i)?isNaN(o)?0:-1:1}(t,e);case 3:return Wi(t.timestampValue,e.timestampValue);case 4:return Wi(ge(t),ge(e));case 5:return g2(t.stringValue,e.stringValue);case 6:return function(r,s){const i=e6(r),o=e6(s);return i.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const i=r.split("/"),o=s.split("/");for(let l=0;l<i.length&&l<o.length;l++){const f=g2(i[l],o[l]);if(f!==0)return f}return g2(i.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const i=g2(Q2(r.latitude),Q2(s.latitude));return i!==0?i:g2(Q2(r.longitude),Q2(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const i=r.values||[],o=s.values||[];for(let l=0;l<i.length&&l<o.length;++l){const f=J6(i[l],o[l]);if(f)return f}return g2(i.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===b8.mapValue&&s===b8.mapValue)return 0;if(r===b8.mapValue)return 1;if(s===b8.mapValue)return-1;const i=r.fields||{},o=Object.keys(i),l=s.fields||{},f=Object.keys(l);o.sort(),f.sort();for(let u=0;u<o.length&&u<f.length;++u){const h=g2(o[u],f[u]);if(h!==0)return h;const d=J6(i[o[u]],l[f[u]]);if(d!==0)return d}return g2(o.length,f.length)}(t.mapValue,e.mapValue);default:throw c2()}}function Wi(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return g2(t,e);const c=C3(t),a=C3(e),n=g2(c.seconds,a.seconds);return n!==0?n:g2(c.nanos,a.nanos)}function Z6(t){return x7(t)}function x7(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(c){const a=C3(c);return`time(${a.seconds},${a.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(c){return e6(c).toBase64()}(t.bytesValue):"referenceValue"in t?function(c){return X.fromName(c).toString()}(t.referenceValue):"geoPointValue"in t?function(c){return`geo(${c.latitude},${c.longitude})`}(t.geoPointValue):"arrayValue"in t?function(c){let a="[",n=!0;for(const r of c.values||[])n?n=!1:a+=",",a+=x7(r);return a+"]"}(t.arrayValue):"mapValue"in t?function(c){const a=Object.keys(c.fields||{}).sort();let n="{",r=!0;for(const s of a)r?r=!1:n+=",",n+=`${s}:${x7(c.fields[s])}`;return n+"}"}(t.mapValue):c2()}function ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function A7(t){return!!t&&"integerValue"in t}function fn(t){return!!t&&"arrayValue"in t}function Gi(t){return!!t&&"nullValue"in t}function Ki(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function K8(t){return!!t&&"mapValue"in t}function q0(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return h6(t.mapValue.fields,(c,a)=>e.mapValue.fields[c]=q0(a)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let c=0;c<(t.arrayValue.values||[]).length;++c)e.arrayValue.values[c]=q0(t.arrayValue.values[c]);return e}return Object.assign({},t)}function kA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.value=e}static empty(){return new T1({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let a=0;a<e.length-1;++a)if(c=(c.mapValue.fields||{})[e.get(a)],!K8(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=q0(c)}setAll(e){let c=m1.emptyPath(),a={},n=[];e.forEach((s,i)=>{if(!c.isImmediateParentOf(i)){const o=this.getFieldsMap(c);this.applyChanges(o,a,n),a={},n=[],c=i.popLast()}s?a[i.lastSegment()]=q0(s):n.push(i.lastSegment())});const r=this.getFieldsMap(c);this.applyChanges(r,a,n)}delete(e){const c=this.field(e.popLast());K8(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return M4(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let a=0;a<e.length;++a){let n=c.mapValue.fields[e.get(a)];K8(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},c.mapValue.fields[e.get(a)]=n),c=n}return c.mapValue.fields}applyChanges(e,c,a){h6(c,(n,r)=>e[n]=r);for(const n of a)delete e[n]}clone(){return new T1(q0(this.value))}}function tu(t){const e=[];return h6(t.fields,(c,a)=>{const n=new m1([c]);if(K8(a)){const r=tu(a.mapValue).fields;if(r.length===0)e.push(n);else for(const s of r)e.push(n.child(s))}else e.push(n)}),new R1(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,c,a,n,r,s,i){this.key=e,this.documentType=c,this.version=a,this.readTime=n,this.createTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new h1(e,0,s2.min(),s2.min(),s2.min(),T1.empty(),0)}static newFoundDocument(e,c,a,n){return new h1(e,1,c,s2.min(),a,n,0)}static newNoDocument(e,c){return new h1(e,2,c,s2.min(),s2.min(),T1.empty(),0)}static newUnknownDocument(e,c){return new h1(e,3,c,s2.min(),s2.min(),T1.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(s2.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=T1.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=T1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=s2.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof h1&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new h1(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,c){this.position=e,this.inclusive=c}}function Qi(t,e,c){let a=0;for(let n=0;n<t.position.length;n++){const r=e[n],s=t.position[n];if(r.field.isKeyField()?a=X.comparator(X.fromName(s.referenceValue),c.key):a=J6(s,c.data.field(r.field)),r.dir==="desc"&&(a*=-1),a!==0)break}return a}function Xi(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let c=0;c<t.position.length;c++)if(!M4(t.position[c],e.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(e,c="asc"){this.field=e,this.dir=c}}function IA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{}class X2 extends cu{constructor(e,c,a){super(),this.field=e,this.op=c,this.value=a}static create(e,c,a){return e.isKeyField()?c==="in"||c==="not-in"?this.createKeyFieldInFilter(e,c,a):new PA(e,c,a):c==="array-contains"?new OA(e,a):c==="in"?new UA(e,a):c==="not-in"?new BA(e,a):c==="array-contains-any"?new $A(e,a):new X2(e,c,a)}static createKeyFieldInFilter(e,c,a){return c==="in"?new DA(e,a):new FA(e,a)}matches(e){const c=e.data.field(this.field);return this.op==="!="?c!==null&&this.matchesComparison(J6(c,this.value)):c!==null&&t6(this.value)===t6(c)&&this.matchesComparison(J6(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return c2()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class t4 extends cu{constructor(e,c){super(),this.filters=e,this.op=c,this.ce=null}static create(e,c){return new t4(e,c)}matches(e){return au(this)?this.filters.find(c=>!c.matches(e))===void 0:this.filters.find(c=>c.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,c)=>e.concat(c.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(c=>c.isInequality());return e!==null?e.field:null}le(e){for(const c of this.getFlattenedFilters())if(e(c))return c;return null}}function au(t){return t.op==="and"}function nu(t){return RA(t)&&au(t)}function RA(t){for(const e of t.filters)if(e instanceof t4)return!1;return!0}function S7(t){if(t instanceof X2)return t.field.canonicalString()+t.op.toString()+Z6(t.value);if(nu(t))return t.filters.map(e=>S7(e)).join(",");{const e=t.filters.map(c=>S7(c)).join(",");return`${t.op}(${e})`}}function ru(t,e){return t instanceof X2?function(a,n){return n instanceof X2&&a.op===n.op&&a.field.isEqual(n.field)&&M4(a.value,n.value)}(t,e):t instanceof t4?function(a,n){return n instanceof t4&&a.op===n.op&&a.filters.length===n.filters.length?a.filters.reduce((r,s,i)=>r&&ru(s,n.filters[i]),!0):!1}(t,e):void c2()}function su(t){return t instanceof X2?function(c){return`${c.field.canonicalString()} ${c.op} ${Z6(c.value)}`}(t):t instanceof t4?function(c){return c.op.toString()+" {"+c.getFilters().map(su).join(" ,")+"}"}(t):"Filter"}class PA extends X2{constructor(e,c,a){super(e,c,a),this.key=X.fromName(a.referenceValue)}matches(e){const c=X.comparator(e.key,this.key);return this.matchesComparison(c)}}class DA extends X2{constructor(e,c){super(e,"in",c),this.keys=iu("in",c)}matches(e){return this.keys.some(c=>c.isEqual(e.key))}}class FA extends X2{constructor(e,c){super(e,"not-in",c),this.keys=iu("not-in",c)}matches(e){return!this.keys.some(c=>c.isEqual(e.key))}}function iu(t,e){var c;return(((c=e.arrayValue)===null||c===void 0?void 0:c.values)||[]).map(a=>X.fromName(a.referenceValue))}class OA extends X2{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return fn(c)&&Ve(c.arrayValue,this.value)}}class UA extends X2{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return c!==null&&Ve(this.value.arrayValue,c)}}class BA extends X2{constructor(e,c){super(e,"not-in",c)}matches(e){if(Ve(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return c!==null&&!Ve(this.value.arrayValue,c)}}class $A extends X2{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!fn(c)||!c.arrayValue.values)&&c.arrayValue.values.some(a=>Ve(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,c=null,a=[],n=[],r=null,s=null,i=null){this.path=e,this.collectionGroup=c,this.orderBy=a,this.filters=n,this.limit=r,this.startAt=s,this.endAt=i,this.he=null}}function Yi(t,e=null,c=[],a=[],n=null,r=null,s=null){return new qA(t,e,c,a,n,r,s)}function un(t){const e=l2(t);if(e.he===null){let c=e.path.canonicalString();e.collectionGroup!==null&&(c+="|cg:"+e.collectionGroup),c+="|f:",c+=e.filters.map(a=>S7(a)).join(","),c+="|ob:",c+=e.orderBy.map(a=>function(r){return r.field.canonicalString()+r.dir}(a)).join(","),zc(e.limit)||(c+="|l:",c+=e.limit),e.startAt&&(c+="|lb:",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(a=>Z6(a)).join(",")),e.endAt&&(c+="|ub:",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(a=>Z6(a)).join(",")),e.he=c}return e.he}function hn(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let c=0;c<t.orderBy.length;c++)if(!IA(t.orderBy[c],e.orderBy[c]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let c=0;c<t.filters.length;c++)if(!ru(t.filters[c],e.filters[c]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xi(t.startAt,e.startAt)&&Xi(t.endAt,e.endAt)}function T7(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,c=null,a=[],n=[],r=null,s="F",i=null,o=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=a,this.filters=n,this.limit=r,this.limitType=s,this.startAt=i,this.endAt=o,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function WA(t,e,c,a,n,r,s,i){return new u0(t,e,c,a,n,r,s,i)}function dn(t){return new u0(t)}function Ji(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mn(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cc(t){for(const e of t.filters){const c=e.getFirstInequalityField();if(c!==null)return c}return null}function ou(t){return t.collectionGroup!==null}function F6(t){const e=l2(t);if(e.Pe===null){e.Pe=[];const c=Cc(e),a=mn(e);if(c!==null&&a===null)c.isKeyField()||e.Pe.push(new D6(c)),e.Pe.push(new D6(m1.keyField(),"asc"));else{let n=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(n=!0);if(!n){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new D6(m1.keyField(),r))}}}return e.Pe}function F4(t){const e=l2(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Yi(e.path,e.collectionGroup,F6(e),e.filters,e.limit,e.startAt,e.endAt);else{const c=[];for(const r of F6(e)){const s=r.dir==="desc"?"asc":"desc";c.push(new D6(r.field,s))}const a=e.endAt?new Lt(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Lt(e.startAt.position,e.startAt.inclusive):null;e.Ie=Yi(e.path,e.collectionGroup,c,e.filters,e.limit,a,n)}return e.Ie}function N7(t,e){e.getFirstInequalityField(),Cc(t);const c=t.filters.concat([e]);return new u0(t.path,t.collectionGroup,t.explicitOrderBy.slice(),c,t.limit,t.limitType,t.startAt,t.endAt)}function E7(t,e,c){return new u0(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,c,t.startAt,t.endAt)}function Mc(t,e){return hn(F4(t),F4(e))&&t.limitType===e.limitType}function lu(t){return`${un(F4(t))}|lt:${t.limitType}`}function k7(t){return`Query(target=${function(c){let a=c.path.canonicalString();return c.collectionGroup!==null&&(a+=" collectionGroup="+c.collectionGroup),c.filters.length>0&&(a+=`, filters: [${c.filters.map(n=>su(n)).join(", ")}]`),zc(c.limit)||(a+=", limit: "+c.limit),c.orderBy.length>0&&(a+=`, orderBy: [${c.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),c.startAt&&(a+=", startAt: ",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(n=>Z6(n)).join(",")),c.endAt&&(a+=", endAt: ",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(n=>Z6(n)).join(",")),`Target(${a})`}(F4(t))}; limitType=${t.limitType})`}function yc(t,e){return e.isFoundDocument()&&function(a,n){const r=n.key.path;return a.collectionGroup!==null?n.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(r):X.isDocumentKey(a.path)?a.path.isEqual(r):a.path.isImmediateParentOf(r)}(t,e)&&function(a,n){for(const r of F6(a))if(!r.field.isKeyField()&&n.data.field(r.field)===null)return!1;return!0}(t,e)&&function(a,n){for(const r of a.filters)if(!r.matches(n))return!1;return!0}(t,e)&&function(a,n){return!(a.startAt&&!function(s,i,o){const l=Qi(s,i,o);return s.inclusive?l<=0:l<0}(a.startAt,F6(a),n)||a.endAt&&!function(s,i,o){const l=Qi(s,i,o);return s.inclusive?l>=0:l>0}(a.endAt,F6(a),n))}(t,e)}function jA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fu(t){return(e,c)=>{let a=!1;for(const n of F6(t)){const r=GA(n,e,c);if(r!==0)return r;a=a||n.field.isKeyField()}return 0}}function GA(t,e,c){const a=t.field.isKeyField()?X.comparator(e.key,c.key):function(r,s,i){const o=s.data.field(r),l=i.data.field(r);return o!==null&&l!==null?J6(o,l):c2()}(t.field,e,c);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return c2()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,c){this.mapKeyFn=e,this.equalsFn=c,this.inner={},this.innerSize=0}get(e){const c=this.mapKeyFn(e),a=this.inner[c];if(a!==void 0){for(const[n,r]of a)if(this.equalsFn(n,e))return r}}has(e){return this.get(e)!==void 0}set(e,c){const a=this.mapKeyFn(e),n=this.inner[a];if(n===void 0)return this.inner[a]=[[e,c]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,c]);n.push([e,c]),this.innerSize++}delete(e){const c=this.mapKeyFn(e),a=this.inner[c];if(a===void 0)return!1;for(let n=0;n<a.length;n++)if(this.equalsFn(a[n][0],e))return a.length===1?delete this.inner[c]:a.splice(n,1),this.innerSize--,!0;return!1}forEach(e){h6(this.inner,(c,a)=>{for(const[n,r]of a)e(n,r)})}isEmpty(){return Zf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=new R2(X.comparator);function O4(){return KA}const uu=new R2(X.comparator);function N0(...t){let e=uu;for(const c of t)e=e.insert(c.key,c);return e}function hu(t){let e=uu;return t.forEach((c,a)=>e=e.insert(c,a.overlayedDocument)),e}function B3(){return W0()}function du(){return W0()}function W0(){return new h0(t=>t.toString(),(t,e)=>t.isEqual(e))}const QA=new R2(X.comparator),XA=new V1(X.comparator);function u2(...t){let e=XA;for(const c of t)e=e.add(c);return e}const YA=new V1(g2);function JA(){return YA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_t(e)?"-0":e}}function pu(t){return{integerValue:""+t}}function ZA(t,e){return TA(e)?pu(e):mu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this._=void 0}}function eS(t,e,c){return t instanceof ze?function(n,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return r&&on(r)&&(r=ln(r)),r&&(s.fields.__previous_value__=r),{mapValue:s}}(c,e):t instanceof Ce?gu(t,e):t instanceof Me?Hu(t,e):function(n,r){const s=vu(n,r),i=Zi(s)+Zi(n.Te);return A7(s)&&A7(n.Te)?pu(i):mu(n.serializer,i)}(t,e)}function tS(t,e,c){return t instanceof Ce?gu(t,e):t instanceof Me?Hu(t,e):c}function vu(t,e){return t instanceof wt?function(a){return A7(a)||function(r){return!!r&&"doubleValue"in r}(a)}(e)?e:{integerValue:0}:null}class ze extends _c{}class Ce extends _c{constructor(e){super(),this.elements=e}}function gu(t,e){const c=Vu(e);for(const a of t.elements)c.some(n=>M4(n,a))||c.push(a);return{arrayValue:{values:c}}}class Me extends _c{constructor(e){super(),this.elements=e}}function Hu(t,e){let c=Vu(e);for(const a of t.elements)c=c.filter(n=>!M4(n,a));return{arrayValue:{values:c}}}class wt extends _c{constructor(e,c){super(),this.serializer=e,this.Te=c}}function Zi(t){return Q2(t.integerValue||t.doubleValue)}function Vu(t){return fn(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,c){this.field=e,this.transform=c}}function aS(t,e){return t.field.isEqual(e.field)&&function(a,n){return a instanceof Ce&&n instanceof Ce||a instanceof Me&&n instanceof Me?Y6(a.elements,n.elements,M4):a instanceof wt&&n instanceof wt?M4(a.Te,n.Te):a instanceof ze&&n instanceof ze}(t.transform,e.transform)}class nS{constructor(e,c){this.version=e,this.transformResults=c}}class v4{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new v4}static exists(e){return new v4(void 0,e)}static updateTime(e){return new v4(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Q8(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lc{}function zu(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mu(t.key,v4.none()):new Ge(t.key,t.data,v4.none());{const c=t.data,a=T1.empty();let n=new V1(m1.comparator);for(let r of e.fields)if(!n.has(r)){let s=c.field(r);s===null&&r.length>1&&(r=r.popLast(),s=c.field(r)),s===null?a.delete(r):a.set(r,s),n=n.add(r)}return new N3(t.key,a,new R1(n.toArray()),v4.none())}}function rS(t,e,c){t instanceof Ge?function(n,r,s){const i=n.value.clone(),o=t9(n.fieldTransforms,r,s.transformResults);i.setAll(o),r.convertToFoundDocument(s.version,i).setHasCommittedMutations()}(t,e,c):t instanceof N3?function(n,r,s){if(!Q8(n.precondition,r))return void r.convertToUnknownDocument(s.version);const i=t9(n.fieldTransforms,r,s.transformResults),o=r.data;o.setAll(Cu(n)),o.setAll(i),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,c):function(n,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,c)}function j0(t,e,c,a){return t instanceof Ge?function(r,s,i,o){if(!Q8(r.precondition,s))return i;const l=r.value.clone(),f=c9(r.fieldTransforms,o,s);return l.setAll(f),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,c,a):t instanceof N3?function(r,s,i,o){if(!Q8(r.precondition,s))return i;const l=c9(r.fieldTransforms,o,s),f=s.data;return f.setAll(Cu(r)),f.setAll(l),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),i===null?null:i.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,c,a):function(r,s,i){return Q8(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i}(t,e,c)}function sS(t,e){let c=null;for(const a of t.fieldTransforms){const n=e.data.field(a.field),r=vu(a.transform,n||null);r!=null&&(c===null&&(c=T1.empty()),c.set(a.field,r))}return c||null}function e9(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(a,n){return a===void 0&&n===void 0||!(!a||!n)&&Y6(a,n,(r,s)=>aS(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ge extends Lc{constructor(e,c,a,n=[]){super(),this.key=e,this.value=c,this.precondition=a,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class N3 extends Lc{constructor(e,c,a,n,r=[]){super(),this.key=e,this.data=c,this.fieldMask=a,this.precondition=n,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Cu(t){const e=new Map;return t.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){const a=t.data.field(c);e.set(c,a)}}),e}function t9(t,e,c){const a=new Map;N2(t.length===c.length);for(let n=0;n<c.length;n++){const r=t[n],s=r.transform,i=e.data.field(r.field);a.set(r.field,tS(s,i,c[n]))}return a}function c9(t,e,c){const a=new Map;for(const n of t){const r=n.transform,s=c.data.field(n.field);a.set(n.field,eS(r,s,e))}return a}class Mu extends Lc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iS extends Lc{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,c,a,n){this.batchId=e,this.localWriteTime=c,this.baseMutations=a,this.mutations=n}applyToRemoteDocument(e,c){const a=c.mutationResults;for(let n=0;n<this.mutations.length;n++){const r=this.mutations[n];r.key.isEqual(e.key)&&rS(r,e,a[n])}}applyToLocalView(e,c){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(c=j0(a,e,c,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(c=j0(a,e,c,this.localWriteTime));return c}applyToLocalDocumentSet(e,c){const a=du();return this.mutations.forEach(n=>{const r=e.get(n.key),s=r.overlayedDocument;let i=this.applyToLocalView(s,r.mutatedFields);i=c.has(n.key)?null:i;const o=zu(s,i);o!==null&&a.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(s2.min())}),a}keys(){return this.mutations.reduce((e,c)=>e.add(c.key),u2())}isEqual(e){return this.batchId===e.batchId&&Y6(this.mutations,e.mutations,(c,a)=>e9(c,a))&&Y6(this.baseMutations,e.baseMutations,(c,a)=>e9(c,a))}}class pn{constructor(e,c,a,n){this.batch=e,this.commitVersion=c,this.mutationResults=a,this.docVersions=n}static from(e,c,a){N2(e.mutations.length===a.length);let n=function(){return QA}();const r=e.mutations;for(let s=0;s<r.length;s++)n=n.insert(r[s].key,a[s].version);return new pn(e,c,a,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,c){this.largestBatchId=e,this.mutation=c}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,c){this.count=e,this.unchangedNames=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G2,h2;function uS(t){switch(t){default:return c2();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function yu(t){if(t===void 0)return D4("GRPC error has no .code"),L.UNKNOWN;switch(t){case G2.OK:return L.OK;case G2.CANCELLED:return L.CANCELLED;case G2.UNKNOWN:return L.UNKNOWN;case G2.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case G2.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case G2.INTERNAL:return L.INTERNAL;case G2.UNAVAILABLE:return L.UNAVAILABLE;case G2.UNAUTHENTICATED:return L.UNAUTHENTICATED;case G2.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case G2.NOT_FOUND:return L.NOT_FOUND;case G2.ALREADY_EXISTS:return L.ALREADY_EXISTS;case G2.PERMISSION_DENIED:return L.PERMISSION_DENIED;case G2.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case G2.ABORTED:return L.ABORTED;case G2.OUT_OF_RANGE:return L.OUT_OF_RANGE;case G2.UNIMPLEMENTED:return L.UNIMPLEMENTED;case G2.DATA_LOSS:return L.DATA_LOSS;default:return c2()}}(h2=G2||(G2={}))[h2.OK=0]="OK",h2[h2.CANCELLED=1]="CANCELLED",h2[h2.UNKNOWN=2]="UNKNOWN",h2[h2.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",h2[h2.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",h2[h2.NOT_FOUND=5]="NOT_FOUND",h2[h2.ALREADY_EXISTS=6]="ALREADY_EXISTS",h2[h2.PERMISSION_DENIED=7]="PERMISSION_DENIED",h2[h2.UNAUTHENTICATED=16]="UNAUTHENTICATED",h2[h2.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",h2[h2.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",h2[h2.ABORTED=10]="ABORTED",h2[h2.OUT_OF_RANGE=11]="OUT_OF_RANGE",h2[h2.UNIMPLEMENTED=12]="UNIMPLEMENTED",h2[h2.INTERNAL=13]="INTERNAL",h2[h2.UNAVAILABLE=14]="UNAVAILABLE",h2[h2.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return x8}static getOrCreateInstance(){return x8===null&&(x8=new vn),x8}onExistenceFilterMismatch(e){const c=Symbol();return this.onExistenceFilterMismatchCallbacks.set(c,e),()=>this.onExistenceFilterMismatchCallbacks.delete(c)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(c=>c(e))}}let x8=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new P6([4294967295,4294967295],0);function a9(t){const e=hS().encode(t),c=new vA;return c.update(e),new Uint8Array(c.digest())}function n9(t){const e=new DataView(t.buffer),c=e.getUint32(0,!0),a=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new P6([c,a],0),new P6([n,r],0)]}class gn{constructor(e,c,a){if(this.bitmap=e,this.padding=c,this.hashCount=a,c<0||c>=8)throw new E0(`Invalid padding: ${c}`);if(a<0)throw new E0(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new E0(`Invalid hash count: ${a}`);if(e.length===0&&c!==0)throw new E0(`Invalid padding when bitmap length is 0: ${c}`);this.de=8*e.length-c,this.Ae=P6.fromNumber(this.de)}Re(e,c,a){let n=e.add(c.multiply(P6.fromNumber(a)));return n.compare(dS)===1&&(n=new P6([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const c=a9(e),[a,n]=n9(c);for(let r=0;r<this.hashCount;r++){const s=this.Re(a,n,r);if(!this.Ve(s))return!1}return!0}static create(e,c,a){const n=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new gn(r,n,c);return a.forEach(i=>s.insert(i)),s}insert(e){if(this.de===0)return;const c=a9(e),[a,n]=n9(c);for(let r=0;r<this.hashCount;r++){const s=this.Re(a,n,r);this.me(s)}}me(e){const c=Math.floor(e/8),a=e%8;this.bitmap[c]|=1<<a}}class E0 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,c,a,n,r){this.snapshotVersion=e,this.targetChanges=c,this.targetMismatches=a,this.documentUpdates=n,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,c,a){const n=new Map;return n.set(e,Ke.createSynthesizedTargetChangeForCurrentChange(e,c,a)),new wc(s2.min(),n,new R2(g2),O4(),u2())}}class Ke{constructor(e,c,a,n,r){this.resumeToken=e,this.current=c,this.addedDocuments=a,this.modifiedDocuments=n,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,c,a){return new Ke(a,c,u2(),u2(),u2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X8{constructor(e,c,a,n){this.fe=e,this.removedTargetIds=c,this.key=a,this.ge=n}}class _u{constructor(e,c){this.targetId=e,this.pe=c}}class Lu{constructor(e,c,a=C1.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=c,this.resumeToken=a,this.cause=n}}class r9{constructor(){this.ye=0,this.we=i9(),this.Se=C1.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=u2(),c=u2(),a=u2();return this.we.forEach((n,r)=>{switch(r){case 0:e=e.add(n);break;case 2:c=c.add(n);break;case 1:a=a.add(n);break;default:c2()}}),new Ke(this.Se,this.be,e,c,a)}xe(){this.De=!1,this.we=i9()}Oe(e,c){this.De=!0,this.we=this.we.insert(e,c)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class mS{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=O4(),this.$e=s9(),this.Ue=new R2(g2)}We(e){for(const c of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(c,e.ge):this.ze(c,e.key,e.ge);for(const c of e.removedTargetIds)this.ze(c,e.key,e.ge)}je(e){this.forEachTarget(e,c=>{const a=this.He(c);switch(e.state){case 0:this.Je(c)&&a.Fe(e.resumeToken);break;case 1:a.Le(),a.ve||a.xe(),a.Fe(e.resumeToken);break;case 2:a.Le(),a.ve||this.removeTarget(c);break;case 3:this.Je(c)&&(a.ke(),a.Fe(e.resumeToken));break;case 4:this.Je(c)&&(this.Ye(c),a.Fe(e.resumeToken));break;default:c2()}})}forEachTarget(e,c){e.targetIds.length>0?e.targetIds.forEach(c):this.Qe.forEach((a,n)=>{this.Je(n)&&c(n)})}Ze(e){var c,a;const n=e.targetId,r=e.pe.count,s=this.Xe(n);if(s){const i=s.target;if(T7(i))if(r===0){const o=new X(i.path);this.ze(n,o,h1.newNoDocument(o,s2.min()))}else N2(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e,o);if(l.status!==0){this.Ye(n);const f=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,f)}(c=vn.instance)===null||c===void 0||c.notifyOnExistenceFilterMismatch(function(u,h,d,v){var H,y,V,C,b,M;const E={localCacheCount:d,existenceFilterCount:v.count},F=v.unchangedNames;return F&&(E.bloomFilter={applied:u===0,hashCount:(H=F==null?void 0:F.hashCount)!==null&&H!==void 0?H:0,bitmapLength:(C=(V=(y=F==null?void 0:F.bits)===null||y===void 0?void 0:y.bitmap)===null||V===void 0?void 0:V.length)!==null&&C!==void 0?C:0,padding:(M=(b=F==null?void 0:F.bits)===null||b===void 0?void 0:b.padding)!==null&&M!==void 0?M:0},h&&(E.bloomFilter.mightContain=h)),E}(l.status,(a=l.nt)!==null&&a!==void 0?a:null,o,e.pe))}}}}tt(e,c){const{unchangedNames:a,count:n}=e.pe;if(!a||!a.bits)return{status:1};const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=a;let o,l;try{o=e6(r).toUint8Array()}catch(u){if(u instanceof eu)return X6("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw u}try{l=new gn(o,s,i)}catch(u){return X6(u instanceof E0?"BloomFilter error: ":"Applying bloom filter failed: ",u),{status:1}}const f=u=>{const h=this.qe.rt();return l.mightContain(`projects/${h.projectId}/databases/${h.database}/documents/${u}`)};return l.de===0?{status:1}:{status:n===c-this.it(e.targetId,f)?0:2,nt:f}}it(e,c){const a=this.qe.getRemoteKeysForTarget(e);let n=0;return a.forEach(r=>{c(r.path.canonicalString())||(this.ze(e,r,null),n++)}),n}st(e){const c=new Map;this.Qe.forEach((r,s)=>{const i=this.Xe(s);if(i){if(r.current&&T7(i.target)){const o=new X(i.target.path);this.Ke.get(o)!==null||this.ot(s,o)||this.ze(s,o,h1.newNoDocument(o,e))}r.Ce&&(c.set(s,r.Me()),r.xe())}});let a=u2();this.$e.forEach((r,s)=>{let i=!0;s.forEachWhile(o=>{const l=this.Xe(o);return!l||l.purpose==="TargetPurposeLimboResolution"||(i=!1,!1)}),i&&(a=a.add(r))}),this.Ke.forEach((r,s)=>s.setReadTime(e));const n=new wc(e,c,this.Ue,this.Ke,a);return this.Ke=O4(),this.$e=s9(),this.Ue=new R2(g2),n}Ge(e,c){if(!this.Je(e))return;const a=this.ot(e,c.key)?2:0;this.He(e).Oe(c.key,a),this.Ke=this.Ke.insert(c.key,c),this.$e=this.$e.insert(c.key,this._t(c.key).add(e))}ze(e,c,a){if(!this.Je(e))return;const n=this.He(e);this.ot(e,c)?n.Oe(c,1):n.Ne(c),this.$e=this.$e.insert(c,this._t(c).delete(e)),a&&(this.Ke=this.Ke.insert(c,a))}removeTarget(e){this.Qe.delete(e)}et(e){const c=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+c.addedDocuments.size-c.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let c=this.Qe.get(e);return c||(c=new r9,this.Qe.set(e,c)),c}_t(e){let c=this.$e.get(e);return c||(c=new V1(g2),this.$e=this.$e.insert(e,c)),c}Je(e){const c=this.Xe(e)!==null;return c||j("WatchChangeAggregator","Detected inactive target",e),c}Xe(e){const c=this.Qe.get(e);return c&&c.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new r9),this.qe.getRemoteKeysForTarget(e).forEach(c=>{this.ze(e,c,null)})}ot(e,c){return this.qe.getRemoteKeysForTarget(e).has(c)}}function s9(){return new R2(X.comparator)}function i9(){return new R2(X.comparator)}const pS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gS=(()=>({and:"AND",or:"OR"}))();class HS{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function I7(t,e){return t.useProto3Json||zc(e)?e:{value:e}}function bt(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wu(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VS(t,e){return bt(t,e.toTimestamp())}function g4(t){return N2(!!t),s2.fromTimestamp(function(c){const a=C3(c);return new Y2(a.seconds,a.nanos)}(t))}function Hn(t,e){return function(a){return new S2(["projects",a.projectId,"databases",a.database])}(t).child("documents").child(e).canonicalString()}function bu(t){const e=S2.fromString(t);return N2(Tu(e)),e}function R7(t,e){return Hn(t.databaseId,e.path)}function T5(t,e){const c=bu(e);if(c.get(1)!==t.databaseId.projectId)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+t.databaseId.projectId);if(c.get(3)!==t.databaseId.database)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+t.databaseId.database);return new X(xu(c))}function P7(t,e){return Hn(t.databaseId,e)}function zS(t){const e=bu(t);return e.length===4?S2.emptyPath():xu(e)}function D7(t){return new S2(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xu(t){return N2(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function o9(t,e,c){return{name:R7(t,e),fields:c.value.mapValue.fields}}function CS(t,e){let c;if("targetChange"in e){e.targetChange;const a=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:c2()}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],r=function(l,f){return l.useProto3Json?(N2(f===void 0||typeof f=="string"),C1.fromBase64String(f||"")):(N2(f===void 0||f instanceof Uint8Array),C1.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,i=s&&function(l){const f=l.code===void 0?L.UNKNOWN:yu(l.code);return new U(f,l.message||"")}(s);c=new Lu(a,n,r,i||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const n=T5(t,a.document.name),r=g4(a.document.updateTime),s=a.document.createTime?g4(a.document.createTime):s2.min(),i=new T1({mapValue:{fields:a.document.fields}}),o=h1.newFoundDocument(n,r,s,i),l=a.targetIds||[],f=a.removedTargetIds||[];c=new X8(l,f,o.key,o)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const n=T5(t,a.document),r=a.readTime?g4(a.readTime):s2.min(),s=h1.newNoDocument(n,r),i=a.removedTargetIds||[];c=new X8([],i,s.key,s)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const n=T5(t,a.document),r=a.removedTargetIds||[];c=new X8([],r,n,null)}else{if(!("filter"in e))return c2();{e.filter;const a=e.filter;a.targetId;const{count:n=0,unchangedNames:r}=a,s=new fS(n,r),i=a.targetId;c=new _u(i,s)}}return c}function MS(t,e){let c;if(e instanceof Ge)c={update:o9(t,e.key,e.value)};else if(e instanceof Mu)c={delete:R7(t,e.key)};else if(e instanceof N3)c={update:o9(t,e.key,e.data),updateMask:TS(e.fieldMask)};else{if(!(e instanceof iS))return c2();c={verify:R7(t,e.key)}}return e.fieldTransforms.length>0&&(c.updateTransforms=e.fieldTransforms.map(a=>function(r,s){const i=s.transform;if(i instanceof ze)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof Ce)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof Me)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof wt)return{fieldPath:s.field.canonicalString(),increment:i.Te};throw c2()}(0,a))),e.precondition.isNone||(c.currentDocument=function(n,r){return r.updateTime!==void 0?{updateTime:VS(n,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:c2()}(t,e.precondition)),c}function yS(t,e){return t&&t.length>0?(N2(e!==void 0),t.map(c=>function(n,r){let s=n.updateTime?g4(n.updateTime):g4(r);return s.isEqual(s2.min())&&(s=g4(r)),new nS(s,n.transformResults||[])}(c,e))):[]}function _S(t,e){return{documents:[P7(t,e.path)]}}function LS(t,e){const c={structuredQuery:{}},a=e.path;e.collectionGroup!==null?(c.parent=P7(t,a),c.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(c.parent=P7(t,a.popLast()),c.structuredQuery.from=[{collectionId:a.lastSegment()}]);const n=function(o){if(o.length!==0)return Su(t4.create(o,"and"))}(e.filters);n&&(c.structuredQuery.where=n);const r=function(o){if(o.length!==0)return o.map(l=>function(u){return{field:_6(u.field),direction:xS(u.dir)}}(l))}(e.orderBy);r&&(c.structuredQuery.orderBy=r);const s=I7(t,e.limit);return s!==null&&(c.structuredQuery.limit=s),e.startAt&&(c.structuredQuery.startAt=function(o){return{before:o.inclusive,values:o.position}}(e.startAt)),e.endAt&&(c.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),c}function wS(t){let e=zS(t.parent);const c=t.structuredQuery,a=c.from?c.from.length:0;let n=null;if(a>0){N2(a===1);const f=c.from[0];f.allDescendants?n=f.collectionId:e=e.child(f.collectionId)}let r=[];c.where&&(r=function(u){const h=Au(u);return h instanceof t4&&nu(h)?h.getFilters():[h]}(c.where));let s=[];c.orderBy&&(s=function(u){return u.map(h=>function(v){return new D6(L6(v.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(c.orderBy));let i=null;c.limit&&(i=function(u){let h;return h=typeof u=="object"?u.value:u,zc(h)?null:h}(c.limit));let o=null;c.startAt&&(o=function(u){const h=!!u.before,d=u.values||[];return new Lt(d,h)}(c.startAt));let l=null;return c.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Lt(d,h)}(c.endAt)),WA(e,n,s,r,i,"F",o,l)}function bS(t,e){const c=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return c2()}}(e.purpose);return c==null?null:{"goog-listen-tags":c}}function Au(t){return t.unaryFilter!==void 0?function(c){switch(c.unaryFilter.op){case"IS_NAN":const a=L6(c.unaryFilter.field);return X2.create(a,"==",{doubleValue:NaN});case"IS_NULL":const n=L6(c.unaryFilter.field);return X2.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=L6(c.unaryFilter.field);return X2.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=L6(c.unaryFilter.field);return X2.create(s,"!=",{nullValue:"NULL_VALUE"});default:return c2()}}(t):t.fieldFilter!==void 0?function(c){return X2.create(L6(c.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return c2()}}(c.fieldFilter.op),c.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(c){return t4.create(c.compositeFilter.filters.map(a=>Au(a)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return c2()}}(c.compositeFilter.op))}(t):c2()}function xS(t){return pS[t]}function AS(t){return vS[t]}function SS(t){return gS[t]}function _6(t){return{fieldPath:t.canonicalString()}}function L6(t){return m1.fromServerFormat(t.fieldPath)}function Su(t){return t instanceof X2?function(c){if(c.op==="=="){if(Ki(c.value))return{unaryFilter:{field:_6(c.field),op:"IS_NAN"}};if(Gi(c.value))return{unaryFilter:{field:_6(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(Ki(c.value))return{unaryFilter:{field:_6(c.field),op:"IS_NOT_NAN"}};if(Gi(c.value))return{unaryFilter:{field:_6(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_6(c.field),op:AS(c.op),value:c.value}}}(t):t instanceof t4?function(c){const a=c.getFilters().map(n=>Su(n));return a.length===1?a[0]:{compositeFilter:{op:SS(c.op),filters:a}}}(t):c2()}function TS(t){const e=[];return t.fields.forEach(c=>e.push(c.canonicalString())),{fieldPaths:e}}function Tu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,c,a,n,r=s2.min(),s=s2.min(),i=C1.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=c,this.purpose=a,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=i,this.expectedCount=o}withSequenceNumber(e){return new i3(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,c){return new i3(this.target,this.targetId,this.purpose,this.sequenceNumber,c,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new i3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new i3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.ct=e}}function ES(t){const e=wS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?E7(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this.sn=new IS}addToCollectionParentIndex(e,c){return this.sn.add(c),N.resolve()}getCollectionParents(e,c){return N.resolve(this.sn.getEntries(c))}addFieldIndex(e,c){return N.resolve()}deleteFieldIndex(e,c){return N.resolve()}getDocumentsMatchingTarget(e,c){return N.resolve(null)}getIndexType(e,c){return N.resolve(0)}getFieldIndexes(e,c){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,c){return N.resolve(z3.min())}getMinOffsetFromCollectionGroup(e,c){return N.resolve(z3.min())}updateCollectionGroup(e,c,a){return N.resolve()}updateIndexEntries(e,c){return N.resolve()}}class IS{constructor(){this.index={}}add(e){const c=e.lastSegment(),a=e.popLast(),n=this.index[c]||new V1(S2.comparator),r=!n.has(a);return this.index[c]=n.add(a),r}has(e){const c=e.lastSegment(),a=e.popLast(),n=this.index[c];return n&&n.has(a)}getEntries(e){return(this.index[e]||new V1(S2.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new e0(0)}static On(){return new e0(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.changes=new h0(e=>e.toString(),(e,c)=>e.isEqual(c)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,c){this.assertNotApplied(),this.changes.set(e,h1.newInvalidDocument(e).setReadTime(c))}getEntry(e,c){this.assertNotApplied();const a=this.changes.get(c);return a!==void 0?N.resolve(a):this.getFromCache(e,c)}getEntries(e,c){return this.getAllFromCache(e,c)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,c){this.overlayedDocument=e,this.mutatedFields=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,c,a,n){this.remoteDocumentCache=e,this.mutationQueue=c,this.documentOverlayCache=a,this.indexManager=n}getDocument(e,c){let a=null;return this.documentOverlayCache.getOverlay(e,c).next(n=>(a=n,this.remoteDocumentCache.getEntry(e,c))).next(n=>(a!==null&&j0(a.mutation,n,R1.empty(),Y2.now()),n))}getDocuments(e,c){return this.remoteDocumentCache.getEntries(e,c).next(a=>this.getLocalViewOfDocuments(e,a,u2()).next(()=>a))}getLocalViewOfDocuments(e,c,a=u2()){const n=B3();return this.populateOverlays(e,n,c).next(()=>this.computeViews(e,c,n,a).next(r=>{let s=N0();return r.forEach((i,o)=>{s=s.insert(i,o.overlayedDocument)}),s}))}getOverlayedDocuments(e,c){const a=B3();return this.populateOverlays(e,a,c).next(()=>this.computeViews(e,c,a,u2()))}populateOverlays(e,c,a){const n=[];return a.forEach(r=>{c.has(r)||n.push(r)}),this.documentOverlayCache.getOverlays(e,n).next(r=>{r.forEach((s,i)=>{c.set(s,i)})})}computeViews(e,c,a,n){let r=O4();const s=W0(),i=function(){return W0()}();return c.forEach((o,l)=>{const f=a.get(l.key);n.has(l.key)&&(f===void 0||f.mutation instanceof N3)?r=r.insert(l.key,l):f!==void 0?(s.set(l.key,f.mutation.getFieldMask()),j0(f.mutation,l,f.mutation.getFieldMask(),Y2.now())):s.set(l.key,R1.empty())}),this.recalculateAndSaveOverlays(e,r).next(o=>(o.forEach((l,f)=>s.set(l,f)),c.forEach((l,f)=>{var u;return i.set(l,new PS(f,(u=s.get(l))!==null&&u!==void 0?u:null))}),i))}recalculateAndSaveOverlays(e,c){const a=W0();let n=new R2((s,i)=>s-i),r=u2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,c).next(s=>{for(const i of s)i.keys().forEach(o=>{const l=c.get(o);if(l===null)return;let f=a.get(o)||R1.empty();f=i.applyToLocalView(l,f),a.set(o,f);const u=(n.get(i.batchId)||u2()).add(o);n=n.insert(i.batchId,u)})}).next(()=>{const s=[],i=n.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,f=o.value,u=du();f.forEach(h=>{if(!r.has(h)){const d=zu(c.get(h),a.get(h));d!==null&&u.set(h,d),r=r.add(h)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,u))}return N.waitFor(s)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,c){return this.remoteDocumentCache.getEntries(e,c).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,c,a){return function(r){return X.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(c)?this.getDocumentsMatchingDocumentQuery(e,c.path):ou(c)?this.getDocumentsMatchingCollectionGroupQuery(e,c,a):this.getDocumentsMatchingCollectionQuery(e,c,a)}getNextDocuments(e,c,a,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,c,a,n).next(r=>{const s=n-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,c,a.largestBatchId,n-r.size):N.resolve(B3());let i=-1,o=r;return s.next(l=>N.forEach(l,(f,u)=>(i<u.largestBatchId&&(i=u.largestBatchId),r.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(h=>{o=o.insert(f,h)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,o,l,u2())).next(f=>({batchId:i,changes:hu(f)})))})}getDocumentsMatchingDocumentQuery(e,c){return this.getDocument(e,new X(c)).next(a=>{let n=N0();return a.isFoundDocument()&&(n=n.insert(a.key,a)),n})}getDocumentsMatchingCollectionGroupQuery(e,c,a){const n=c.collectionGroup;let r=N0();return this.indexManager.getCollectionParents(e,n).next(s=>N.forEach(s,i=>{const o=function(f,u){return new u0(u,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(c,i.child(n));return this.getDocumentsMatchingCollectionQuery(e,o,a).next(l=>{l.forEach((f,u)=>{r=r.insert(f,u)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,c,a){let n;return this.documentOverlayCache.getOverlaysForCollection(e,c.path,a.largestBatchId).next(r=>(n=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,c,a,n))).next(r=>{n.forEach((i,o)=>{const l=o.getKey();r.get(l)===null&&(r=r.insert(l,h1.newInvalidDocument(l)))});let s=N0();return r.forEach((i,o)=>{const l=n.get(i);l!==void 0&&j0(l.mutation,o,R1.empty(),Y2.now()),yc(c,o)&&(s=s.insert(i,o))}),s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,c){return N.resolve(this.ar.get(c))}saveBundleMetadata(e,c){return this.ar.set(c.id,function(n){return{id:n.id,version:n.version,createTime:g4(n.createTime)}}(c)),N.resolve()}getNamedQuery(e,c){return N.resolve(this.ur.get(c))}saveNamedQuery(e,c){return this.ur.set(c.name,function(n){return{name:n.name,query:ES(n.bundledQuery),readTime:g4(n.readTime)}}(c)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.overlays=new R2(X.comparator),this.cr=new Map}getOverlay(e,c){return N.resolve(this.overlays.get(c))}getOverlays(e,c){const a=B3();return N.forEach(c,n=>this.getOverlay(e,n).next(r=>{r!==null&&a.set(n,r)})).next(()=>a)}saveOverlays(e,c,a){return a.forEach((n,r)=>{this.ht(e,c,r)}),N.resolve()}removeOverlaysForBatchId(e,c,a){const n=this.cr.get(a);return n!==void 0&&(n.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(a)),N.resolve()}getOverlaysForCollection(e,c,a){const n=B3(),r=c.length+1,s=new X(c.child("")),i=this.overlays.getIteratorFrom(s);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!c.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>a&&n.set(o.getKey(),o)}return N.resolve(n)}getOverlaysForCollectionGroup(e,c,a,n){let r=new R2((l,f)=>l-f);const s=this.overlays.getIterator();for(;s.hasNext();){const l=s.getNext().value;if(l.getKey().getCollectionGroup()===c&&l.largestBatchId>a){let f=r.get(l.largestBatchId);f===null&&(f=B3(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const i=B3(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>i.set(l,f)),!(i.size()>=n)););return N.resolve(i)}ht(e,c,a){const n=this.overlays.get(a.key);if(n!==null){const s=this.cr.get(n.largestBatchId).delete(a.key);this.cr.set(n.largestBatchId,s)}this.overlays=this.overlays.insert(a.key,new lS(c,a));let r=this.cr.get(c);r===void 0&&(r=u2(),this.cr.set(c,r)),this.cr.set(c,r.add(a.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.lr=new V1(Z2.hr),this.Pr=new V1(Z2.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,c){const a=new Z2(e,c);this.lr=this.lr.add(a),this.Pr=this.Pr.add(a)}Tr(e,c){e.forEach(a=>this.addReference(a,c))}removeReference(e,c){this.Er(new Z2(e,c))}dr(e,c){e.forEach(a=>this.removeReference(a,c))}Ar(e){const c=new X(new S2([])),a=new Z2(c,e),n=new Z2(c,e+1),r=[];return this.Pr.forEachInRange([a,n],s=>{this.Er(s),r.push(s.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const c=new X(new S2([])),a=new Z2(c,e),n=new Z2(c,e+1);let r=u2();return this.Pr.forEachInRange([a,n],s=>{r=r.add(s.key)}),r}containsKey(e){const c=new Z2(e,0),a=this.lr.firstAfterOrEqual(c);return a!==null&&e.isEqual(a.key)}}class Z2{constructor(e,c){this.key=e,this.mr=c}static hr(e,c){return X.comparator(e.key,c.key)||g2(e.mr,c.mr)}static Ir(e,c){return g2(e.mr,c.mr)||X.comparator(e.key,c.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,c){this.indexManager=e,this.referenceDelegate=c,this.mutationQueue=[],this.gr=1,this.pr=new V1(Z2.hr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,c,a,n){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new oS(r,c,a,n);this.mutationQueue.push(s);for(const i of n)this.pr=this.pr.add(new Z2(i.key,r)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return N.resolve(s)}lookupMutationBatch(e,c){return N.resolve(this.yr(c))}getNextMutationBatchAfterBatchId(e,c){const a=c+1,n=this.wr(a),r=n<0?0:n;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,c){const a=new Z2(c,0),n=new Z2(c,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([a,n],s=>{const i=this.yr(s.mr);r.push(i)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,c){let a=new V1(g2);return c.forEach(n=>{const r=new Z2(n,0),s=new Z2(n,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,s],i=>{a=a.add(i.mr)})}),N.resolve(this.Sr(a))}getAllMutationBatchesAffectingQuery(e,c){const a=c.path,n=a.length+1;let r=a;X.isDocumentKey(r)||(r=r.child(""));const s=new Z2(new X(r),0);let i=new V1(g2);return this.pr.forEachWhile(o=>{const l=o.key.path;return!!a.isPrefixOf(l)&&(l.length===n&&(i=i.add(o.mr)),!0)},s),N.resolve(this.Sr(i))}Sr(e){const c=[];return e.forEach(a=>{const n=this.yr(a);n!==null&&c.push(n)}),c}removeMutationBatch(e,c){N2(this.br(c.batchId,"removed")===0),this.mutationQueue.shift();let a=this.pr;return N.forEach(c.mutations,n=>{const r=new Z2(n.key,c.batchId);return a=a.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.pr=a})}Cn(e){}containsKey(e,c){const a=new Z2(c,0),n=this.pr.firstAfterOrEqual(a);return N.resolve(c.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}br(e,c){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const c=this.wr(e);return c<0||c>=this.mutationQueue.length?null:this.mutationQueue[c]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.Dr=e,this.docs=function(){return new R2(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,c){const a=c.key,n=this.docs.get(a),r=n?n.size:0,s=this.Dr(c);return this.docs=this.docs.insert(a,{document:c.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const c=this.docs.get(e);c&&(this.docs=this.docs.remove(e),this.size-=c.size)}getEntry(e,c){const a=this.docs.get(c);return N.resolve(a?a.document.mutableCopy():h1.newInvalidDocument(c))}getEntries(e,c){let a=O4();return c.forEach(n=>{const r=this.docs.get(n);a=a.insert(n,r?r.document.mutableCopy():h1.newInvalidDocument(n))}),N.resolve(a)}getDocumentsMatchingQuery(e,c,a,n){let r=O4();const s=c.path,i=new X(s.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:l,value:{document:f}}=o.getNext();if(!s.isPrefixOf(l.path))break;l.path.length>s.length+1||xA(bA(f),a)<=0||(n.has(f.key)||yc(c,f))&&(r=r.insert(f.key,f.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,c,a,n){c2()}vr(e,c){return N.forEach(this.docs,a=>c(a))}newChangeBuffer(e){return new $S(this)}getSize(e){return N.resolve(this.size)}}class $S extends RS{constructor(e){super(),this.sr=e}applyChanges(e){const c=[];return this.changes.forEach((a,n)=>{n.isValidDocument()?c.push(this.sr.addEntry(e,n)):this.sr.removeEntry(a)}),N.waitFor(c)}getFromCache(e,c){return this.sr.getEntry(e,c)}getAllFromCache(e,c){return this.sr.getEntries(e,c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.persistence=e,this.Cr=new h0(c=>un(c),hn),this.lastRemoteSnapshotVersion=s2.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Vn,this.targetCount=0,this.Or=e0.xn()}forEachTarget(e,c){return this.Cr.forEach((a,n)=>c(n)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,c,a){return a&&(this.lastRemoteSnapshotVersion=a),c>this.Fr&&(this.Fr=c),N.resolve()}Ln(e){this.Cr.set(e.target,e);const c=e.targetId;c>this.highestTargetId&&(this.Or=new e0(c),this.highestTargetId=c),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,c){return this.Ln(c),this.targetCount+=1,N.resolve()}updateTargetData(e,c){return this.Ln(c),N.resolve()}removeTargetData(e,c){return this.Cr.delete(c.target),this.Mr.Ar(c.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,c,a){let n=0;const r=[];return this.Cr.forEach((s,i)=>{i.sequenceNumber<=c&&a.get(i.targetId)===null&&(this.Cr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,i.targetId)),n++)}),N.waitFor(r).next(()=>n)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,c){const a=this.Cr.get(c)||null;return N.resolve(a)}addMatchingKeys(e,c,a){return this.Mr.Tr(c,a),N.resolve()}removeMatchingKeys(e,c,a){this.Mr.dr(c,a);const n=this.persistence.referenceDelegate,r=[];return n&&c.forEach(s=>{r.push(n.markPotentiallyOrphaned(e,s))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,c){return this.Mr.Ar(c),N.resolve()}getMatchingKeysForTargetId(e,c){const a=this.Mr.Vr(c);return N.resolve(a)}containsKey(e,c){return N.resolve(this.Mr.containsKey(c))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,c){this.Nr={},this.overlays={},this.Br=new sn(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new qS(this),this.indexManager=new kS,this.remoteDocumentCache=function(n){return new BS(n)}(a=>this.referenceDelegate.qr(a)),this.serializer=new NS(c),this.Qr=new FS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let c=this.overlays[e.toKey()];return c||(c=new OS,this.overlays[e.toKey()]=c),c}getMutationQueue(e,c){let a=this.Nr[e.toKey()];return a||(a=new US(c,this.referenceDelegate),this.Nr[e.toKey()]=a),a}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,c,a){j("MemoryPersistence","Starting transaction:",e);const n=new jS(this.Br.next());return this.referenceDelegate.Kr(),a(n).next(r=>this.referenceDelegate.$r(n).next(()=>r)).toPromise().then(r=>(n.raiseOnCommittedEvent(),r))}Ur(e,c){return N.or(Object.values(this.Nr).map(a=>()=>a.containsKey(e,c)))}}class jS extends SA{constructor(e){super(),this.currentSequenceNumber=e}}class zn{constructor(e){this.persistence=e,this.Wr=new Vn,this.Gr=null}static zr(e){return new zn(e)}get jr(){if(this.Gr)return this.Gr;throw c2()}addReference(e,c,a){return this.Wr.addReference(a,c),this.jr.delete(a.toString()),N.resolve()}removeReference(e,c,a){return this.Wr.removeReference(a,c),this.jr.add(a.toString()),N.resolve()}markPotentiallyOrphaned(e,c){return this.jr.add(c.toString()),N.resolve()}removeTarget(e,c){this.Wr.Ar(c.targetId).forEach(n=>this.jr.add(n.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,c.targetId).next(n=>{n.forEach(r=>this.jr.add(r.toString()))}).next(()=>a.removeTargetData(e,c))}Kr(){this.Gr=new Set}$r(e){const c=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.jr,a=>{const n=X.fromPath(a);return this.Hr(e,n).next(r=>{r||c.removeEntry(n,s2.min())})}).next(()=>(this.Gr=null,c.apply(e)))}updateLimboDocument(e,c){return this.Hr(e,c).next(a=>{a?this.jr.delete(c.toString()):this.jr.add(c.toString())})}qr(e){return 0}Hr(e,c){return N.or([()=>N.resolve(this.Wr.containsKey(c)),()=>this.persistence.getTargetCache().containsKey(e,c),()=>this.persistence.Ur(e,c)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,c,a,n){this.targetId=e,this.fromCache=c,this.Li=a,this.ki=n}static qi(e,c){let a=u2(),n=u2();for(const r of c.docChanges)switch(r.type){case 0:a=a.add(r.doc.key);break;case 1:n=n.add(r.doc.key)}return new Cn(e,c.fromCache,a,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.Qi=!1}initialize(e,c){this.Ki=e,this.indexManager=c,this.Qi=!0}getDocumentsMatchingQuery(e,c,a,n){return this.$i(e,c).next(r=>r||this.Ui(e,c,n,a)).next(r=>r||this.Wi(e,c))}$i(e,c){if(Ji(c))return N.resolve(null);let a=F4(c);return this.indexManager.getIndexType(e,a).next(n=>n===0?null:(c.limit!==null&&n===1&&(c=E7(c,null,"F"),a=F4(c)),this.indexManager.getDocumentsMatchingTarget(e,a).next(r=>{const s=u2(...r);return this.Ki.getDocuments(e,s).next(i=>this.indexManager.getMinOffset(e,a).next(o=>{const l=this.Gi(c,i);return this.zi(c,l,s,o.readTime)?this.$i(e,E7(c,null,"F")):this.ji(e,l,c,o)}))})))}Ui(e,c,a,n){return Ji(c)||n.isEqual(s2.min())?this.Wi(e,c):this.Ki.getDocuments(e,a).next(r=>{const s=this.Gi(c,r);return this.zi(c,s,a,n)?this.Wi(e,c):(Bi()<=p2.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),k7(c)),this.ji(e,s,c,wA(n,-1)))})}Gi(e,c){let a=new V1(fu(e));return c.forEach((n,r)=>{yc(e,r)&&(a=a.add(r))}),a}zi(e,c,a,n){if(e.limit===null)return!1;if(a.size!==c.size)return!0;const r=e.limitType==="F"?c.last():c.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Wi(e,c){return Bi()<=p2.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",k7(c)),this.Ki.getDocumentsMatchingQuery(e,c,z3.min())}ji(e,c,a,n){return this.Ki.getDocumentsMatchingQuery(e,a,n).next(r=>(c.forEach(s=>{r=r.insert(s.key,s)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,c,a,n){this.persistence=e,this.Hi=c,this.serializer=n,this.Ji=new R2(g2),this.Yi=new h0(r=>un(r),hn),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(a)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DS(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",c=>e.collect(c,this.Ji))}}function QS(t,e,c,a){return new KS(t,e,c,a)}async function Nu(t,e){const c=l2(t);return await c.persistence.runTransaction("Handle user change","readonly",a=>{let n;return c.mutationQueue.getAllMutationBatches(a).next(r=>(n=r,c.es(e),c.mutationQueue.getAllMutationBatches(a))).next(r=>{const s=[],i=[];let o=u2();for(const l of n){s.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return c.localDocuments.getDocuments(a,o).next(l=>({ts:l,removedBatchIds:s,addedBatchIds:i}))})})}function XS(t,e){const c=l2(t);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const n=e.batch.keys(),r=c.Xi.newChangeBuffer({trackRemovals:!0});return function(i,o,l,f){const u=l.batch,h=u.keys();let d=N.resolve();return h.forEach(v=>{d=d.next(()=>f.getEntry(o,v)).next(H=>{const y=l.docVersions.get(v);N2(y!==null),H.version.compareTo(y)<0&&(u.applyToRemoteDocument(H,l),H.isValidDocument()&&(H.setReadTime(l.commitVersion),f.addEntry(H)))})}),d.next(()=>i.mutationQueue.removeMutationBatch(o,u))}(c,a,e,r).next(()=>r.apply(a)).next(()=>c.mutationQueue.performConsistencyCheck(a)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(a,n,e.batch.batchId)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(i){let o=u2();for(let l=0;l<i.mutationResults.length;++l)i.mutationResults[l].transformResults.length>0&&(o=o.add(i.batch.mutations[l].key));return o}(e))).next(()=>c.localDocuments.getDocuments(a,n))})}function Eu(t){const e=l2(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",c=>e.kr.getLastRemoteSnapshotVersion(c))}function YS(t,e){const c=l2(t),a=e.snapshotVersion;let n=c.Ji;return c.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const s=c.Xi.newChangeBuffer({trackRemovals:!0});n=c.Ji;const i=[];e.targetChanges.forEach((f,u)=>{const h=n.get(u);if(!h)return;i.push(c.kr.removeMatchingKeys(r,f.removedDocuments,u).next(()=>c.kr.addMatchingKeys(r,f.addedDocuments,u)));let d=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(u)!==null?d=d.withResumeToken(C1.EMPTY_BYTE_STRING,s2.min()).withLastLimboFreeSnapshotVersion(s2.min()):f.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(f.resumeToken,a)),n=n.insert(u,d),function(H,y,V){return H.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(h,d,f)&&i.push(c.kr.updateTargetData(r,d))});let o=O4(),l=u2();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&i.push(c.persistence.referenceDelegate.updateLimboDocument(r,f))}),i.push(JS(r,s,e.documentUpdates).next(f=>{o=f.ns,l=f.rs})),!a.isEqual(s2.min())){const f=c.kr.getLastRemoteSnapshotVersion(r).next(u=>c.kr.setTargetsMetadata(r,r.currentSequenceNumber,a));i.push(f)}return N.waitFor(i).next(()=>s.apply(r)).next(()=>c.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(c.Ji=n,r))}function JS(t,e,c){let a=u2(),n=u2();return c.forEach(r=>a=a.add(r)),e.getEntries(t,a).next(r=>{let s=O4();return c.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(n=n.add(i)),o.isNoDocument()&&o.version.isEqual(s2.min())?(e.removeEntry(i,o.readTime),s=s.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(o),s=s.insert(i,o)):j("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{ns:s,rs:n}})}function ZS(t,e){const c=l2(t);return c.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function eT(t,e){const c=l2(t);return c.persistence.runTransaction("Allocate target","readwrite",a=>{let n;return c.kr.getTargetData(a,e).next(r=>r?(n=r,N.resolve(n)):c.kr.allocateTargetId(a).next(s=>(n=new i3(e,s,"TargetPurposeListen",a.currentSequenceNumber),c.kr.addTargetData(a,n).next(()=>n))))}).then(a=>{const n=c.Ji.get(a.targetId);return(n===null||a.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(c.Ji=c.Ji.insert(a.targetId,a),c.Yi.set(e,a.targetId)),a})}async function F7(t,e,c){const a=l2(t),n=a.Ji.get(e),r=c?"readwrite":"readwrite-primary";try{c||await a.persistence.runTransaction("Release target",r,s=>a.persistence.referenceDelegate.removeTarget(s,n))}catch(s){if(!je(s))throw s;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}a.Ji=a.Ji.remove(e),a.Yi.delete(n.target)}function l9(t,e,c){const a=l2(t);let n=s2.min(),r=u2();return a.persistence.runTransaction("Execute query","readonly",s=>function(o,l,f){const u=l2(o),h=u.Yi.get(f);return h!==void 0?N.resolve(u.Ji.get(h)):u.kr.getTargetData(l,f)}(a,s,F4(e)).next(i=>{if(i)return n=i.lastLimboFreeSnapshotVersion,a.kr.getMatchingKeysForTargetId(s,i.targetId).next(o=>{r=o})}).next(()=>a.Hi.getDocumentsMatchingQuery(s,e,c?n:s2.min(),c?r:u2())).next(i=>(tT(a,jA(e),i),{documents:i,ss:r})))}function tT(t,e,c){let a=t.Zi.get(e)||s2.min();c.forEach((n,r)=>{r.readTime.compareTo(a)>0&&(a=r.readTime)}),t.Zi.set(e,a)}class f9{constructor(){this.activeTargetIds=JA()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cT{constructor(){this.Hs=new f9,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,c,a){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,c,a){this.Js[e]=c}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new f9,Promise.resolve()}handleUserChange(e,c,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A8=null;function N5(){return A8===null?A8=function(){return 268435456+Math.round(2147483648*Math.random())}():A8++,"0x"+A8.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="WebChannelConnection";class sT extends class{constructor(c){this.databaseInfo=c,this.databaseId=c.databaseId;const a=c.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=a+"://"+c.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(c,a,n,r,s){const i=N5(),o=this.mo(c,a);j("RestConnection",`Sending RPC '${c}' ${i}:`,o,n);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,r,s),this.po(c,o,l,n).then(f=>(j("RestConnection",`Received RPC '${c}' ${i}: `,f),f),f=>{throw X6("RestConnection",`RPC '${c}' ${i} failed with error: `,f,"url: ",o,"request:",n),f})}yo(c,a,n,r,s,i){return this.Vo(c,a,n,r,s)}fo(c,a,n){c["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+f0}(),c["Content-Type"]="text/plain",this.databaseInfo.appId&&(c["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((r,s)=>c[s]=r),n&&n.headers.forEach((r,s)=>c[s]=r)}mo(c,a){const n=nT[c];return`${this.To}/v1/${a}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,c,a,n){const r=N5();return new Promise((s,i)=>{const o=new pA;o.setWithCredentials(!0),o.listenOnce(hA.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case S5.NO_ERROR:const f=o.getResponseJson();j(f1,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),s(f);break;case S5.TIMEOUT:j(f1,`RPC '${e}' ${r} timed out`),i(new U(L.DEADLINE_EXCEEDED,"Request time out"));break;case S5.HTTP_ERROR:const u=o.getStatus();if(j(f1,`RPC '${e}' ${r} failed with status:`,u,"response text:",o.getResponseText()),u>0){let h=o.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const v=function(y){const V=y.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(V)>=0?V:L.UNKNOWN}(d.status);i(new U(v,d.message))}else i(new U(L.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new U(L.UNAVAILABLE,"Connection failed."));break;default:c2()}}finally{j(f1,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(n);j(f1,`RPC '${e}' ${r} sending request:`,n),o.send(c,"POST",l,a,15)})}wo(e,c,a){const n=N5(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=fA(),i=uA(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.xmlHttpFactory=new mA({})),this.fo(o.initMessageHeaders,c,a),o.encodeInitMessageHeaders=!0;const f=r.join("");j(f1,`Creating RPC '${e}' stream ${n}: ${f}`,o);const u=s.createWebChannel(f,o);let h=!1,d=!1;const v=new rT({so:y=>{d?j(f1,`Not sending because RPC '${e}' stream ${n} is closed:`,y):(h||(j(f1,`Opening RPC '${e}' stream ${n} transport.`),u.open(),h=!0),j(f1,`RPC '${e}' stream ${n} sending:`,y),u.send(y))},oo:()=>u.close()}),H=(y,V,C)=>{y.listen(V,b=>{try{C(b)}catch(M){setTimeout(()=>{throw M},0)}})};return H(u,L8.EventType.OPEN,()=>{d||j(f1,`RPC '${e}' stream ${n} transport opened.`)}),H(u,L8.EventType.CLOSE,()=>{d||(d=!0,j(f1,`RPC '${e}' stream ${n} transport closed`),v.Po())}),H(u,L8.EventType.ERROR,y=>{d||(d=!0,X6(f1,`RPC '${e}' stream ${n} transport errored:`,y),v.Po(new U(L.UNAVAILABLE,"The operation could not be completed")))}),H(u,L8.EventType.MESSAGE,y=>{var V;if(!d){const C=y.data[0];N2(!!C);const b=C,M=b.error||((V=b[0])===null||V===void 0?void 0:V.error);if(M){j(f1,`RPC '${e}' stream ${n} received error:`,M);const E=M.status;let F=function(i2){const C2=G2[i2];if(C2!==void 0)return yu(C2)}(E),K=M.message;F===void 0&&(F=L.INTERNAL,K="Unknown error status: "+E+" with message "+M.message),d=!0,v.Po(new U(F,K)),u.close()}else j(f1,`RPC '${e}' stream ${n} received:`,C),v.Io(C)}}),H(i,dA.STAT_EVENT,y=>{y.stat===Oi.PROXY?j(f1,`RPC '${e}' stream ${n} detected buffering proxy`):y.stat===Oi.NOPROXY&&j(f1,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function E5(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){return new HS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,c,a=1e3,n=1.5,r=6e4){this.ii=e,this.timerId=c,this.So=a,this.bo=n,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const c=Math.floor(this.vo+this.Oo()),a=Math.max(0,Date.now()-this.Fo),n=Math.max(0,c-a);n>0&&j("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.vo} ms, delay with jitter: ${c} ms, last attempt: ${a} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,n,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,c,a,n,r,s,i,o){this.ii=e,this.Bo=a,this.Lo=n,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new ku(e,c)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,c){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():c&&c.code===L.RESOURCE_EXHAUSTED?(D4(c.toString()),D4("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):c&&c.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(c)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),c=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,n])=>{this.ko===c&&this.e_(a,n)},a=>{e(()=>{const n=new U(L.UNKNOWN,"Fetching auth token failed: "+a.message);return this.t_(n)})})}e_(e,c){const a=this.Xo(this.ko);this.stream=this.n_(e,c),this.stream._o(()=>{a(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(n=>{a(()=>this.t_(n))}),this.stream.onMessage(n=>{a(()=>this.onMessage(n))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return c=>{this.ii.enqueueAndForget(()=>this.ko===e?c():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iT extends Iu{constructor(e,c,a,n,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",c,a,n,s),this.serializer=r}n_(e,c){return this.connection.wo("Listen",e,c)}onMessage(e){this.Ko.reset();const c=CS(this.serializer,e),a=function(r){if(!("targetChange"in r))return s2.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?s2.min():s.readTime?g4(s.readTime):s2.min()}(e);return this.listener.r_(c,a)}i_(e){const c={};c.database=D7(this.serializer),c.addTarget=function(r,s){let i;const o=s.target;if(i=T7(o)?{documents:_S(r,o)}:{query:LS(r,o)},i.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){i.resumeToken=wu(r,s.resumeToken);const l=I7(r,s.expectedCount);l!==null&&(i.expectedCount=l)}else if(s.snapshotVersion.compareTo(s2.min())>0){i.readTime=bt(r,s.snapshotVersion.toTimestamp());const l=I7(r,s.expectedCount);l!==null&&(i.expectedCount=l)}return i}(this.serializer,e);const a=bS(this.serializer,e);a&&(c.labels=a),this.Ho(c)}s_(e){const c={};c.database=D7(this.serializer),c.removeTarget=e,this.Ho(c)}}class oT extends Iu{constructor(e,c,a,n,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",c,a,n,s),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,c){return this.connection.wo("Write",e,c)}onMessage(e){if(N2(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const c=yS(e.writeResults,e.commitTime),a=g4(e.commitTime);return this.listener.u_(a,c)}return N2(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=D7(this.serializer),this.Ho(e)}a_(e){const c={streamToken:this.lastStreamToken,writes:e.map(a=>MS(this.serializer,a))};this.Ho(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT extends class{}{constructor(e,c,a,n){super(),this.authCredentials=e,this.appCheckCredentials=c,this.connection=a,this.serializer=n,this.h_=!1}P_(){if(this.h_)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,c,a){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.connection.Vo(e,c,a,n,r)).catch(n=>{throw n.name==="FirebaseError"?(n.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new U(L.UNKNOWN,n.toString())})}yo(e,c,a,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.yo(e,c,a,r,s,n)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(L.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class fT{constructor(e,c){this.asyncQueue=e,this.onlineStateHandler=c,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const c=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(D4(c),this.d_=!1):j("OnlineStateTracker",c)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,c,a,n,r){this.localStore=e,this.datastore=c,this.asyncQueue=a,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(s=>{a.enqueueAndForget(async()=>{d6(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(o){const l=l2(o);l.y_.add(4),await Qe(l),l.b_.set("Unknown"),l.y_.delete(4),await xc(l)}(this))})}),this.b_=new fT(a,n)}}async function xc(t){if(d6(t))for(const e of t.w_)await e(!0)}async function Qe(t){for(const e of t.w_)await e(!1)}function Ru(t,e){const c=l2(t);c.p_.has(e.targetId)||(c.p_.set(e.targetId,e),_n(c)?yn(c):d0(c).Uo()&&Mn(c,e))}function Pu(t,e){const c=l2(t),a=d0(c);c.p_.delete(e),a.Uo()&&Du(c,e),c.p_.size===0&&(a.Uo()?a.zo():d6(c)&&c.b_.set("Unknown"))}function Mn(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(s2.min())>0){const c=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(c)}d0(t).i_(e)}function Du(t,e){t.D_.Be(e),d0(t).s_(e)}function yn(t){t.D_=new mS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),d0(t).start(),t.b_.A_()}function _n(t){return d6(t)&&!d0(t).$o()&&t.p_.size>0}function d6(t){return l2(t).y_.size===0}function Fu(t){t.D_=void 0}async function hT(t){t.p_.forEach((e,c)=>{Mn(t,e)})}async function dT(t,e){Fu(t),_n(t)?(t.b_.m_(e),yn(t)):t.b_.set("Unknown")}async function mT(t,e,c){if(t.b_.set("Online"),e instanceof Lu&&e.state===2&&e.cause)try{await async function(n,r){const s=r.cause;for(const i of r.targetIds)n.p_.has(i)&&(await n.remoteSyncer.rejectListen(i,s),n.p_.delete(i),n.D_.removeTarget(i))}(t,e)}catch(a){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),a),await xt(t,a)}else if(e instanceof X8?t.D_.We(e):e instanceof _u?t.D_.Ze(e):t.D_.je(e),!c.isEqual(s2.min()))try{const a=await Eu(t.localStore);c.compareTo(a)>=0&&await function(r,s){const i=r.D_.st(s);return i.targetChanges.forEach((o,l)=>{if(o.resumeToken.approximateByteSize()>0){const f=r.p_.get(l);f&&r.p_.set(l,f.withResumeToken(o.resumeToken,s))}}),i.targetMismatches.forEach((o,l)=>{const f=r.p_.get(o);if(!f)return;r.p_.set(o,f.withResumeToken(C1.EMPTY_BYTE_STRING,f.snapshotVersion)),Du(r,o);const u=new i3(f.target,o,l,f.sequenceNumber);Mn(r,u)}),r.remoteSyncer.applyRemoteEvent(i)}(t,c)}catch(a){j("RemoteStore","Failed to raise snapshot:",a),await xt(t,a)}}async function xt(t,e,c){if(!je(e))throw e;t.y_.add(1),await Qe(t),t.b_.set("Offline"),c||(c=()=>Eu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await c(),t.y_.delete(1),await xc(t)})}function Ou(t,e){return e().catch(c=>xt(t,c,e))}async function Ac(t){const e=l2(t),c=M3(e);let a=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;pT(e);)try{const n=await ZS(e.localStore,a);if(n===null){e.g_.length===0&&c.zo();break}a=n.batchId,vT(e,n)}catch(n){await xt(e,n)}Uu(e)&&Bu(e)}function pT(t){return d6(t)&&t.g_.length<10}function vT(t,e){t.g_.push(e);const c=M3(t);c.Uo()&&c.__&&c.a_(e.mutations)}function Uu(t){return d6(t)&&!M3(t).$o()&&t.g_.length>0}function Bu(t){M3(t).start()}async function gT(t){M3(t).l_()}async function HT(t){const e=M3(t);for(const c of t.g_)e.a_(c.mutations)}async function VT(t,e,c){const a=t.g_.shift(),n=pn.from(a,e,c);await Ou(t,()=>t.remoteSyncer.applySuccessfulWrite(n)),await Ac(t)}async function zT(t,e){e&&M3(t).__&&await async function(a,n){if(function(s){return uS(s)&&s!==L.ABORTED}(n.code)){const r=a.g_.shift();M3(a).Go(),await Ou(a,()=>a.remoteSyncer.rejectFailedWrite(r.batchId,n)),await Ac(a)}}(t,e),Uu(t)&&Bu(t)}async function h9(t,e){const c=l2(t);c.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const a=d6(c);c.y_.add(3),await Qe(c),a&&c.b_.set("Unknown"),await c.remoteSyncer.handleCredentialChange(e),c.y_.delete(3),await xc(c)}async function CT(t,e){const c=l2(t);e?(c.y_.delete(2),await xc(c)):e||(c.y_.add(2),await Qe(c),c.b_.set("Unknown"))}function d0(t){return t.v_||(t.v_=function(c,a,n){const r=l2(c);return r.P_(),new iT(a,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{_o:hT.bind(null,t),uo:dT.bind(null,t),r_:mT.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),_n(t)?yn(t):t.b_.set("Unknown")):(await t.v_.stop(),Fu(t))})),t.v_}function M3(t){return t.C_||(t.C_=function(c,a,n){const r=l2(c);return r.P_(),new oT(a,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{_o:gT.bind(null,t),uo:zT.bind(null,t),c_:HT.bind(null,t),u_:VT.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ac(t)):(await t.C_.stop(),t.g_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,c,a,n,r){this.asyncQueue=e,this.timerId=c,this.targetTimeMs=a,this.op=n,this.removalCallback=r,this.deferred=new E4,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,c,a,n,r){const s=Date.now()+a,i=new Ln(e,c,s,n,r);return i.start(a),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wn(t,e){if(D4("AsyncQueue",`${e}: ${t}`),je(t))return new U(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e){this.comparator=e?(c,a)=>e(c,a)||X.comparator(c.key,a.key):(c,a)=>X.comparator(c.key,a.key),this.keyedMap=N0(),this.sortedSet=new R2(this.comparator)}static emptySet(e){return new O6(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const c=this.keyedMap.get(e);return c?this.sortedSet.indexOf(c):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((c,a)=>(e(c),!1))}add(e){const c=this.delete(e.key);return c.copy(c.keyedMap.insert(e.key,e),c.sortedSet.insert(e,null))}delete(e){const c=this.get(e);return c?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(c)):this}isEqual(e){if(!(e instanceof O6)||this.size!==e.size)return!1;const c=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;c.hasNext();){const n=c.getNext().key,r=a.getNext().key;if(!n.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(c=>{e.push(c.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,c){const a=new O6;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=c,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(){this.F_=new R2(X.comparator)}track(e){const c=e.doc.key,a=this.F_.get(c);a?e.type!==0&&a.type===3?this.F_=this.F_.insert(c,e):e.type===3&&a.type!==1?this.F_=this.F_.insert(c,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.F_=this.F_.insert(c,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.F_=this.F_.insert(c,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.F_=this.F_.remove(c):e.type===1&&a.type===2?this.F_=this.F_.insert(c,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.F_=this.F_.insert(c,{type:2,doc:e.doc}):c2():this.F_=this.F_.insert(c,e)}M_(){const e=[];return this.F_.inorderTraversal((c,a)=>{e.push(a)}),e}}class t0{constructor(e,c,a,n,r,s,i,o,l){this.query=e,this.docs=c,this.oldDocs=a,this.docChanges=n,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,c,a,n,r){const s=[];return c.forEach(i=>{s.push({type:0,doc:i})}),new t0(e,c,O6.emptySet(c),s,a,n,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const c=this.docChanges,a=e.docChanges;if(c.length!==a.length)return!1;for(let n=0;n<c.length;n++)if(c[n].type!==a[n].type||!c[n].doc.isEqual(a[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.x_=void 0,this.listeners=[]}}class yT{constructor(){this.queries=new h0(e=>lu(e),Mc),this.onlineState="Unknown",this.O_=new Set}}async function $u(t,e){const c=l2(t),a=e.query;let n=!1,r=c.queries.get(a);if(r||(n=!0,r=new MT),n)try{r.x_=await c.onListen(a)}catch(s){const i=wn(s,`Initialization of query '${k7(e.query)}' failed`);return void e.onError(i)}c.queries.set(a,r),r.listeners.push(e),e.N_(c.onlineState),r.x_&&e.B_(r.x_)&&bn(c)}async function qu(t,e){const c=l2(t),a=e.query;let n=!1;const r=c.queries.get(a);if(r){const s=r.listeners.indexOf(e);s>=0&&(r.listeners.splice(s,1),n=r.listeners.length===0)}if(n)return c.queries.delete(a),c.onUnlisten(a)}function _T(t,e){const c=l2(t);let a=!1;for(const n of e){const r=n.query,s=c.queries.get(r);if(s){for(const i of s.listeners)i.B_(n)&&(a=!0);s.x_=n}}a&&bn(c)}function LT(t,e,c){const a=l2(t),n=a.queries.get(e);if(n)for(const r of n.listeners)r.onError(c);a.queries.delete(e)}function bn(t){t.O_.forEach(e=>{e.next()})}class Wu{constructor(e,c,a){this.query=e,this.L_=c,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=a||{}}B_(e){if(!this.options.includeMetadataChanges){const a=[];for(const n of e.docChanges)n.type!==3&&a.push(n);e=new t0(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let c=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),c=!0):this.K_(e,this.onlineState)&&(this.U_(e),c=!0),this.q_=e,c}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let c=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),c=!0),c}K_(e,c){if(!e.fromCache)return!0;const a=c!=="Offline";return(!this.options.W_||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||c==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const c=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!c)&&this.options.includeMetadataChanges===!0}U_(e){e=t0.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.key=e}}class Gu{constructor(e){this.key=e}}class wT{constructor(e,c){this.query=e,this.X_=c,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=u2(),this.mutatedKeys=u2(),this.na=fu(e),this.ra=new O6(this.na)}get ia(){return this.X_}sa(e,c){const a=c?c.oa:new d9,n=c?c.ra:this.ra;let r=c?c.mutatedKeys:this.mutatedKeys,s=n,i=!1;const o=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,l=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((f,u)=>{const h=n.get(f),d=yc(this.query,u)?u:null,v=!!h&&this.mutatedKeys.has(h.key),H=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;h&&d?h.data.isEqual(d.data)?v!==H&&(a.track({type:3,doc:d}),y=!0):this._a(h,d)||(a.track({type:2,doc:d}),y=!0,(o&&this.na(d,o)>0||l&&this.na(d,l)<0)&&(i=!0)):!h&&d?(a.track({type:0,doc:d}),y=!0):h&&!d&&(a.track({type:1,doc:h}),y=!0,(o||l)&&(i=!0)),y&&(d?(s=s.add(d),r=H?r.add(f):r.delete(f)):(s=s.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),r=r.delete(f.key),a.track({type:1,doc:f})}return{ra:s,oa:a,zi:i,mutatedKeys:r}}_a(e,c){return e.hasLocalMutations&&c.hasCommittedMutations&&!c.hasLocalMutations}applyChanges(e,c,a){const n=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((l,f)=>function(h,d){const v=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return c2()}};return v(h)-v(d)}(l.type,f.type)||this.na(l.doc,f.doc)),this.aa(a);const s=c?this.ua():[],i=this.ta.size===0&&this.current?1:0,o=i!==this.ea;return this.ea=i,r.length!==0||o?{snapshot:new t0(this.query,e.ra,n,r,e.mutatedKeys,i===0,o,!1,!!a&&a.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new d9,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(c=>this.X_=this.X_.add(c)),e.modifiedDocuments.forEach(c=>{}),e.removedDocuments.forEach(c=>this.X_=this.X_.delete(c)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=u2(),this.ra.forEach(a=>{this.la(a.key)&&(this.ta=this.ta.add(a.key))});const c=[];return e.forEach(a=>{this.ta.has(a)||c.push(new Gu(a))}),this.ta.forEach(a=>{e.has(a)||c.push(new ju(a))}),c}ha(e){this.X_=e.ss,this.ta=u2();const c=this.sa(e.documents);return this.applyChanges(c,!0)}Pa(){return t0.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class bT{constructor(e,c,a){this.query=e,this.targetId=c,this.view=a}}class xT{constructor(e){this.key=e,this.Ia=!1}}class AT{constructor(e,c,a,n,r,s){this.localStore=e,this.remoteStore=c,this.eventManager=a,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new h0(i=>lu(i),Mc),this.da=new Map,this.Aa=new Set,this.Ra=new R2(X.comparator),this.Va=new Map,this.ma=new Vn,this.fa={},this.ga=new Map,this.pa=e0.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function ST(t,e){const c=OT(t);let a,n;const r=c.Ea.get(e);if(r)a=r.targetId,c.sharedClientState.addLocalQueryTarget(a),n=r.view.Pa();else{const s=await eT(c.localStore,F4(e)),i=c.sharedClientState.addLocalQueryTarget(s.targetId);a=s.targetId,n=await TT(c,e,a,i==="current",s.resumeToken),c.isPrimaryClient&&Ru(c.remoteStore,s)}return n}async function TT(t,e,c,a,n){t.wa=(u,h,d)=>async function(H,y,V,C){let b=y.view.sa(V);b.zi&&(b=await l9(H.localStore,y.query,!1).then(({documents:F})=>y.view.sa(F,b)));const M=C&&C.targetChanges.get(y.targetId),E=y.view.applyChanges(b,H.isPrimaryClient,M);return p9(H,y.targetId,E.ca),E.snapshot}(t,u,h,d);const r=await l9(t.localStore,e,!0),s=new wT(e,r.ss),i=s.sa(r.documents),o=Ke.createSynthesizedTargetChangeForCurrentChange(c,a&&t.onlineState!=="Offline",n),l=s.applyChanges(i,t.isPrimaryClient,o);p9(t,c,l.ca);const f=new bT(e,c,s);return t.Ea.set(e,f),t.da.has(c)?t.da.get(c).push(e):t.da.set(c,[e]),l.snapshot}async function NT(t,e){const c=l2(t),a=c.Ea.get(e),n=c.da.get(a.targetId);if(n.length>1)return c.da.set(a.targetId,n.filter(r=>!Mc(r,e))),void c.Ea.delete(e);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(a.targetId),c.sharedClientState.isActiveQueryTarget(a.targetId)||await F7(c.localStore,a.targetId,!1).then(()=>{c.sharedClientState.clearQueryState(a.targetId),Pu(c.remoteStore,a.targetId),O7(c,a.targetId)}).catch(We)):(O7(c,a.targetId),await F7(c.localStore,a.targetId,!0))}async function ET(t,e,c){const a=UT(t);try{const n=await function(s,i){const o=l2(s),l=Y2.now(),f=i.reduce((d,v)=>d.add(v.key),u2());let u,h;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>{let v=O4(),H=u2();return o.Xi.getEntries(d,f).next(y=>{v=y,v.forEach((V,C)=>{C.isValidDocument()||(H=H.add(V))})}).next(()=>o.localDocuments.getOverlayedDocuments(d,v)).next(y=>{u=y;const V=[];for(const C of i){const b=sS(C,u.get(C.key).overlayedDocument);b!=null&&V.push(new N3(C.key,b,tu(b.value.mapValue),v4.exists(!0)))}return o.mutationQueue.addMutationBatch(d,l,V,i)}).next(y=>{h=y;const V=y.applyToLocalDocumentSet(u,H);return o.documentOverlayCache.saveOverlays(d,y.batchId,V)})}).then(()=>({batchId:h.batchId,changes:hu(u)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(n.batchId),function(s,i,o){let l=s.fa[s.currentUser.toKey()];l||(l=new R2(g2)),l=l.insert(i,o),s.fa[s.currentUser.toKey()]=l}(a,n.batchId,c),await Xe(a,n.changes),await Ac(a.remoteStore)}catch(n){const r=wn(n,"Failed to persist write");c.reject(r)}}async function Ku(t,e){const c=l2(t);try{const a=await YS(c.localStore,e);e.targetChanges.forEach((n,r)=>{const s=c.Va.get(r);s&&(N2(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1),n.addedDocuments.size>0?s.Ia=!0:n.modifiedDocuments.size>0?N2(s.Ia):n.removedDocuments.size>0&&(N2(s.Ia),s.Ia=!1))}),await Xe(c,a,e)}catch(a){await We(a)}}function m9(t,e,c){const a=l2(t);if(a.isPrimaryClient&&c===0||!a.isPrimaryClient&&c===1){const n=[];a.Ea.forEach((r,s)=>{const i=s.view.N_(e);i.snapshot&&n.push(i.snapshot)}),function(s,i){const o=l2(s);o.onlineState=i;let l=!1;o.queries.forEach((f,u)=>{for(const h of u.listeners)h.N_(i)&&(l=!0)}),l&&bn(o)}(a.eventManager,e),n.length&&a.Ta.r_(n),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function kT(t,e,c){const a=l2(t);a.sharedClientState.updateQueryState(e,"rejected",c);const n=a.Va.get(e),r=n&&n.key;if(r){let s=new R2(X.comparator);s=s.insert(r,h1.newNoDocument(r,s2.min()));const i=u2().add(r),o=new wc(s2.min(),new Map,new R2(g2),s,i);await Ku(a,o),a.Ra=a.Ra.remove(r),a.Va.delete(e),xn(a)}else await F7(a.localStore,e,!1).then(()=>O7(a,e,c)).catch(We)}async function IT(t,e){const c=l2(t),a=e.batch.batchId;try{const n=await XS(c.localStore,e);Xu(c,a,null),Qu(c,a),c.sharedClientState.updateMutationState(a,"acknowledged"),await Xe(c,n)}catch(n){await We(n)}}async function RT(t,e,c){const a=l2(t);try{const n=await function(s,i){const o=l2(s);return o.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let f;return o.mutationQueue.lookupMutationBatch(l,i).next(u=>(N2(u!==null),f=u.keys(),o.mutationQueue.removeMutationBatch(l,u))).next(()=>o.mutationQueue.performConsistencyCheck(l)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(l,f,i)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,f)).next(()=>o.localDocuments.getDocuments(l,f))})}(a.localStore,e);Xu(a,e,c),Qu(a,e),a.sharedClientState.updateMutationState(e,"rejected",c),await Xe(a,n)}catch(n){await We(n)}}function Qu(t,e){(t.ga.get(e)||[]).forEach(c=>{c.resolve()}),t.ga.delete(e)}function Xu(t,e,c){const a=l2(t);let n=a.fa[a.currentUser.toKey()];if(n){const r=n.get(e);r&&(c?r.reject(c):r.resolve(),n=n.remove(e)),a.fa[a.currentUser.toKey()]=n}}function O7(t,e,c=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.da.get(e))t.Ea.delete(a),c&&t.Ta.Sa(a,c);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(a=>{t.ma.containsKey(a)||Yu(t,a)})}function Yu(t,e){t.Aa.delete(e.path.canonicalString());const c=t.Ra.get(e);c!==null&&(Pu(t.remoteStore,c),t.Ra=t.Ra.remove(e),t.Va.delete(c),xn(t))}function p9(t,e,c){for(const a of c)a instanceof ju?(t.ma.addReference(a.key,e),PT(t,a)):a instanceof Gu?(j("SyncEngine","Document no longer in limbo: "+a.key),t.ma.removeReference(a.key,e),t.ma.containsKey(a.key)||Yu(t,a.key)):c2()}function PT(t,e){const c=e.key,a=c.path.canonicalString();t.Ra.get(c)||t.Aa.has(a)||(j("SyncEngine","New document in limbo: "+c),t.Aa.add(a),xn(t))}function xn(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const c=new X(S2.fromString(e)),a=t.pa.next();t.Va.set(a,new xT(c)),t.Ra=t.Ra.insert(c,a),Ru(t.remoteStore,new i3(F4(dn(c.path)),a,"TargetPurposeLimboResolution",sn.ae))}}async function Xe(t,e,c){const a=l2(t),n=[],r=[],s=[];a.Ea.isEmpty()||(a.Ea.forEach((i,o)=>{s.push(a.wa(o,e,c).then(l=>{if((l||c)&&a.isPrimaryClient&&a.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){n.push(l);const f=Cn.qi(o.targetId,l);r.push(f)}}))}),await Promise.all(s),a.Ta.r_(n),await async function(o,l){const f=l2(o);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(l,h=>N.forEach(h.Li,d=>f.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>N.forEach(h.ki,d=>f.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!je(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=f.Ji.get(h),v=d.snapshotVersion,H=d.withLastLimboFreeSnapshotVersion(v);f.Ji=f.Ji.insert(h,H)}}}(a.localStore,r))}async function DT(t,e){const c=l2(t);if(!c.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const a=await Nu(c.localStore,e);c.currentUser=e,function(r,s){r.ga.forEach(i=>{i.forEach(o=>{o.reject(new U(L.CANCELLED,s))})}),r.ga.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await Xe(c,a.ts)}}function FT(t,e){const c=l2(t),a=c.Va.get(e);if(a&&a.Ia)return u2().add(a.key);{let n=u2();const r=c.da.get(e);if(!r)return n;for(const s of r){const i=c.Ea.get(s);n=n.unionWith(i.view.ia)}return n}}function OT(t){const e=l2(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ku.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kT.bind(null,e),e.Ta.r_=_T.bind(null,e.eventManager),e.Ta.Sa=LT.bind(null,e.eventManager),e}function UT(t){const e=l2(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RT.bind(null,e),e}class v9{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,c){return null}createIndexBackfillerScheduler(e,c){return null}createLocalStore(e){return QS(this.persistence,new GS,e.initialUser,this.serializer)}createPersistence(e){return new WS(zn.zr,this.serializer)}createSharedClientState(e){return new cT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BT{async initialize(e,c){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(c),this.remoteStore=this.createRemoteStore(c),this.eventManager=this.createEventManager(c),this.syncEngine=this.createSyncEngine(c,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>m9(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=DT.bind(null,this.syncEngine),await CT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yT}()}createDatastore(e){const c=bc(e.databaseInfo.databaseId),a=function(r){return new sT(r)}(e.databaseInfo);return function(r,s,i,o){return new lT(r,s,i,o)}(e.authCredentials,e.appCheckCredentials,a,c)}createRemoteStore(e){return function(a,n,r,s,i){return new uT(a,n,r,s,i)}(this.localStore,this.datastore,e.asyncQueue,c=>m9(this.syncEngine,c,0),function(){return u9.v()?new u9:new aT}())}createSyncEngine(e,c){return function(n,r,s,i,o,l,f){const u=new AT(n,r,s,i,o,l);return f&&(u.ya=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,c)}terminate(){return async function(c){const a=l2(c);j("RemoteStore","RemoteStore shutting down."),a.y_.add(5),await Qe(a),a.S_.shutdown(),a.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):D4("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,c){this.muted||setTimeout(()=>{this.muted||e(c)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,c,a,n){this.authCredentials=e,this.appCheckCredentials=c,this.asyncQueue=a,this.databaseInfo=n,this.user=u1.UNAUTHENTICATED,this.clientId=Jf.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async r=>{j("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(a,r=>(j("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E4;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(c){const a=wn(c,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function k5(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const c=await t.getConfiguration();await e.initialize(c);let a=c.initialUser;t.setCredentialChangeListener(async n=>{a.isEqual(n)||(await Nu(e.localStore,n),a=n)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function g9(t,e){t.asyncQueue.verifyOperationInProgress();const c=await WT(t);j("FirestoreClient","Initializing OnlineComponentProvider");const a=await t.getConfiguration();await e.initialize(c,a),t.setCredentialChangeListener(n=>h9(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,r)=>h9(e.remoteStore,r)),t._onlineComponents=e}function qT(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function WT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await k5(t,t._uninitializedComponentsProvider._offline)}catch(e){const c=e;if(!qT(c))throw c;X6("Error using user provided cache. Falling back to memory cache: "+c),await k5(t,new v9)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await k5(t,new v9);return t._offlineComponents}async function Zu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await g9(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await g9(t,new BT))),t._onlineComponents}function jT(t){return Zu(t).then(e=>e.syncEngine)}async function eh(t){const e=await Zu(t),c=e.eventManager;return c.onListen=ST.bind(null,e.syncEngine),c.onUnlisten=NT.bind(null,e.syncEngine),c}function GT(t,e,c={}){const a=new E4;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,i,o,l){const f=new Ju({next:h=>{s.enqueueAndForget(()=>qu(r,u));const d=h.docs.has(i);!d&&h.fromCache?l.reject(new U(L.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&o&&o.source==="server"?l.reject(new U(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Wu(dn(i.path),f,{includeMetadataChanges:!0,W_:!0});return $u(r,u)}(await eh(t),t.asyncQueue,e,c,a)),a.promise}function KT(t,e,c={}){const a=new E4;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,i,o,l){const f=new Ju({next:h=>{s.enqueueAndForget(()=>qu(r,u)),h.fromCache&&o.source==="server"?l.reject(new U(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Wu(i,f,{includeMetadataChanges:!0,W_:!0});return $u(r,u)}(await eh(t),t.asyncQueue,e,c,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H9=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e,c){if(!c)throw new U(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QT(t,e,c,a){if(e===!0&&a===!0)throw new U(L.INVALID_ARGUMENT,`${t} and ${c} cannot be used together.`)}function V9(t){if(!X.isDocumentKey(t))throw new U(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function z9(t){if(X.isDocumentKey(t))throw new U(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":c2()}function U4(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=Sc(t);throw new U(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${c}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C9{constructor(e){var c,a;if(e.host===void 0){if(e.ssl!==void 0)throw new U(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(c=e.ssl)===null||c===void 0||c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,n){return a.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,c,a,n){this._authCredentials=e,this._appCheckCredentials=c,this._databaseId=a,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C9({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C9(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new gA;switch(a.type){case"firstParty":return new CA(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new U(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(c){const a=H9.get(c);a&&(j("ComponentProvider","Removing Datastore"),H9.delete(c),a.terminate())}(this),Promise.resolve()}}function XT(t,e,c,a={}){var n;const r=(t=U4(t,Tc))._getSettings(),s=`${e}:${c}`;if(r.host!=="firestore.googleapis.com"&&r.host!==s&&X6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:s,ssl:!1})),a.mockUserToken){let i,o;if(typeof a.mockUserToken=="string")i=a.mockUserToken,o=u1.MOCK_USER;else{i=Bl(a.mockUserToken,(n=t._app)===null||n===void 0?void 0:n.options.projectId);const l=a.mockUserToken.sub||a.mockUserToken.user_id;if(!l)throw new U(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new u1(l)}t._authCredentials=new HA(new Yf(i,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e,c,a){this.converter=c,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new m6(this.firestore,e,this._query)}}class L1{constructor(e,c,a){this.converter=c,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new d3(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new L1(this.firestore,e,this._key)}}class d3 extends m6{constructor(e,c,a){super(e,c,dn(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new L1(this.firestore,null,new X(e))}withConverter(e){return new d3(this.firestore,e,this._path)}}function An(t,e,...c){if(t=I2(t),ch("collection","path",e),t instanceof Tc){const a=S2.fromString(e,...c);return z9(a),new d3(t,null,a)}{if(!(t instanceof L1||t instanceof d3))throw new U(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(S2.fromString(e,...c));return z9(a),new d3(t.firestore,null,a)}}function c6(t,e,...c){if(t=I2(t),arguments.length===1&&(e=Jf.V()),ch("doc","path",e),t instanceof Tc){const a=S2.fromString(e,...c);return V9(a),new L1(t,null,new X(a))}{if(!(t instanceof L1||t instanceof d3))throw new U(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(S2.fromString(e,...c));return V9(a),new L1(t.firestore,t instanceof d3?t.converter:null,new X(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new ku(this,"async_queue_retry"),this.Xa=()=>{const c=E5();c&&j("AsyncQueue","Visibility state changed to "+c.visibilityState),this.Ko.No()};const e=E5();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const c=E5();c&&typeof c.removeEventListener=="function"&&c.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const c=new E4;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(c.resolve,c.reject),c.promise)).then(()=>c.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!je(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const c=this.Wa.then(()=>(this.Ja=!0,e().catch(a=>{this.Ha=a,this.Ja=!1;const n=function(s){let i=s.message||"";return s.stack&&(i=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),i}(a);throw D4("INTERNAL UNHANDLED ERROR: ",n),a}).then(a=>(this.Ja=!1,a))));return this.Wa=c,c}enqueueAfterDelay(e,c,a){this.eu(),this.Za.indexOf(e)>-1&&(c=0);const n=Ln.createAndSchedule(this,e,c,a,r=>this.ru(r));return this.ja.push(n),n}eu(){this.Ha&&c2()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const c of this.ja)if(c.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((c,a)=>c.targetTimeMs-a.targetTimeMs);for(const c of this.ja)if(c.skipDelay(),e!=="all"&&c.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const c=this.ja.indexOf(e);this.ja.splice(c,1)}}class Ye extends Tc{constructor(e,c,a,n){super(e,c,a,n),this.type="firestore",this._queue=function(){return new YT}(),this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ah(this),this._firestoreClient.terminate()}}function JT(t,e){const c=typeof t=="object"?t:Ra(),a=typeof t=="string"?t:e||"(default)",n=nc(c,"firestore").getImmediate({identifier:a});if(!n._initialized){const r=Fl("firestore");r&&XT(n,...r)}return n}function Sn(t){return t._firestoreClient||ah(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ah(t){var e,c,a;const n=t._freezeSettings(),r=function(i,o,l,f){return new EA(i,o,l,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,th(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $T(t._authCredentials,t._appCheckCredentials,t._queue,r),!((c=n.localCache)===null||c===void 0)&&c._offlineComponentProvider&&(!((a=n.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:n.localCache.kind,_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this._byteString=e}static fromBase64String(e){try{return new c0(C1.fromBase64String(e))}catch(c){throw new U(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+c)}}static fromUint8Array(e){return new c0(C1.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(...e){for(let c=0;c<e.length;++c)if(e[c].length===0)throw new U(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new m1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,c){if(!isFinite(e)||e<-90||e>90)throw new U(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(c)||c<-180||c>180)throw new U(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+c);this._lat=e,this._long=c}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return g2(this._lat,e._lat)||g2(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=/^__.*__$/;class eN{constructor(e,c,a){this.data=e,this.fieldMask=c,this.fieldTransforms=a}toMutation(e,c){return this.fieldMask!==null?new N3(e,this.data,this.fieldMask,c,this.fieldTransforms):new Ge(e,this.data,c,this.fieldTransforms)}}class nh{constructor(e,c,a){this.data=e,this.fieldMask=c,this.fieldTransforms=a}toMutation(e,c){return new N3(e,this.data,this.fieldMask,c,this.fieldTransforms)}}function rh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw c2()}}class Nn{constructor(e,c,a,n,r,s){this.settings=e,this.databaseId=c,this.serializer=a,this.ignoreUndefinedProperties=n,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Nn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var c;const a=(c=this.path)===null||c===void 0?void 0:c.child(e),n=this.cu({path:a,hu:!1});return n.Pu(e),n}Iu(e){var c;const a=(c=this.path)===null||c===void 0?void 0:c.child(e),n=this.cu({path:a,hu:!1});return n.au(),n}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return At(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(c=>e.isPrefixOf(c))!==void 0||this.fieldTransforms.find(c=>e.isPrefixOf(c.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(rh(this.uu)&&ZT.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class tN{constructor(e,c,a){this.databaseId=e,this.ignoreUndefinedProperties=c,this.serializer=a||bc(e)}Ru(e,c,a,n=!1){return new Nn({uu:e,methodName:c,Au:a,path:m1.emptyPath(),hu:!1,du:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function En(t){const e=t._freezeSettings(),c=bc(t._databaseId);return new tN(t._databaseId,!!e.ignoreUndefinedProperties,c)}function cN(t,e,c,a,n,r={}){const s=t.Ru(r.merge||r.mergeFields?2:0,e,c,n);In("Data must be an object, but it was:",s,a);const i=sh(a,s);let o,l;if(r.merge)o=new R1(s.fieldMask),l=s.fieldTransforms;else if(r.mergeFields){const f=[];for(const u of r.mergeFields){const h=U7(e,u,c);if(!s.contains(h))throw new U(L.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);oh(f,h)||f.push(h)}o=new R1(f),l=s.fieldTransforms.filter(u=>o.covers(u.field))}else o=null,l=s.fieldTransforms;return new eN(new T1(i),o,l)}class kc extends Ec{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}class kn extends Ec{_toFieldTransform(e){return new cS(e.path,new ze)}isEqual(e){return e instanceof kn}}function aN(t,e,c,a){const n=t.Ru(1,e,c);In("Data must be an object, but it was:",n,a);const r=[],s=T1.empty();h6(a,(o,l)=>{const f=Rn(e,o,c);l=I2(l);const u=n.Iu(f);if(l instanceof kc)r.push(f);else{const h=Je(l,u);h!=null&&(r.push(f),s.set(f,h))}});const i=new R1(r);return new nh(s,i,n.fieldTransforms)}function nN(t,e,c,a,n,r){const s=t.Ru(1,e,c),i=[U7(e,a,c)],o=[n];if(r.length%2!=0)throw new U(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)i.push(U7(e,r[h])),o.push(r[h+1]);const l=[],f=T1.empty();for(let h=i.length-1;h>=0;--h)if(!oh(l,i[h])){const d=i[h];let v=o[h];v=I2(v);const H=s.Iu(d);if(v instanceof kc)l.push(d);else{const y=Je(v,H);y!=null&&(l.push(d),f.set(d,y))}}const u=new R1(l);return new nh(f,u,s.fieldTransforms)}function rN(t,e,c,a=!1){return Je(c,t.Ru(a?4:3,e))}function Je(t,e){if(ih(t=I2(t)))return In("Unsupported field value:",e,t),sh(t,e);if(t instanceof Ec)return function(a,n){if(!rh(n.uu))throw n.Eu(`${a._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Eu(`${a._methodName}() is not currently supported inside arrays`);const r=a._toFieldTransform(n);r&&n.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(a,n){const r=[];let s=0;for(const i of a){let o=Je(i,n.Tu(s));o==null&&(o={nullValue:"NULL_VALUE"}),r.push(o),s++}return{arrayValue:{values:r}}}(t,e)}return function(a,n){if((a=I2(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return ZA(n.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const r=Y2.fromDate(a);return{timestampValue:bt(n.serializer,r)}}if(a instanceof Y2){const r=new Y2(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:bt(n.serializer,r)}}if(a instanceof Tn)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof c0)return{bytesValue:wu(n.serializer,a._byteString)};if(a instanceof L1){const r=n.databaseId,s=a.firestore._databaseId;if(!s.isEqual(r))throw n.Eu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hn(a.firestore._databaseId||n.databaseId,a._key.path)}}throw n.Eu(`Unsupported field value: ${Sc(a)}`)}(t,e)}function sh(t,e){const c={};return Zf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):h6(t,(a,n)=>{const r=Je(n,e.lu(a));r!=null&&(c[a]=r)}),{mapValue:{fields:c}}}function ih(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Y2||t instanceof Tn||t instanceof c0||t instanceof L1||t instanceof Ec)}function In(t,e,c){if(!ih(c)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(c)){const a=Sc(c);throw a==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+a)}}function U7(t,e,c){if((e=I2(e))instanceof Nc)return e._internalPath;if(typeof e=="string")return Rn(t,e);throw At("Field path arguments must be of type string or ",t,!1,void 0,c)}const sN=new RegExp("[~\\*/\\[\\]]");function Rn(t,e,c){if(e.search(sN)>=0)throw At(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,c);try{return new Nc(...e.split("."))._internalPath}catch{throw At(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,c)}}function At(t,e,c,a,n){const r=a&&!a.isEmpty(),s=n!==void 0;let i=`Function ${e}() called with invalid data`;c&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||s)&&(o+=" (found",r&&(o+=` in field ${a}`),s&&(o+=` in document ${n}`),o+=")"),new U(L.INVALID_ARGUMENT,i+t+o)}function oh(t,e){return t.some(c=>c.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,c,a,n,r){this._firestore=e,this._userDataWriter=c,this._key=a,this._document=n,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new L1(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const c=this._document.data.field(Ic("DocumentSnapshot.get",e));if(c!==null)return this._userDataWriter.convertValue(c)}}}class iN extends lh{data(){return super.data()}}function Ic(t,e){return typeof e=="string"?Rn(t,e):e instanceof Nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pn{}class fh extends Pn{}function a6(t,e,...c){let a=[];e instanceof Pn&&a.push(e),a=a.concat(c),function(r){const s=r.filter(o=>o instanceof Dn).length,i=r.filter(o=>o instanceof Rc).length;if(s>1||s>0&&i>0)throw new U(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a);for(const n of a)t=n._apply(t);return t}class Rc extends fh{constructor(e,c,a){super(),this._field=e,this._op=c,this._value=a,this.type="where"}static _create(e,c,a){return new Rc(e,c,a)}_apply(e){const c=this._parse(e);return uh(e._query,c),new m6(e.firestore,e.converter,N7(e._query,c))}_parse(e){const c=En(e.firestore);return function(r,s,i,o,l,f,u){let h;if(l.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new U(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){y9(u,f);const d=[];for(const v of u)d.push(M9(o,r,v));h={arrayValue:{values:d}}}else h=M9(o,r,u)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||y9(u,f),h=rN(i,s,u,f==="in"||f==="not-in");return X2.create(l,f,h)}(e._query,"where",c,e.firestore._databaseId,this._field,this._op,this._value)}}function m3(t,e,c){const a=e,n=Ic("where",t);return Rc._create(n,a,c)}class Dn extends Pn{constructor(e,c){super(),this.type=e,this._queryConstraints=c}static _create(e,c){return new Dn(e,c)}_parse(e){const c=this._queryConstraints.map(a=>a._parse(e)).filter(a=>a.getFilters().length>0);return c.length===1?c[0]:t4.create(c,this._getOperator())}_apply(e){const c=this._parse(e);return c.getFilters().length===0?e:(function(n,r){let s=n;const i=r.getFlattenedFilters();for(const o of i)uh(s,o),s=N7(s,o)}(e._query,c),new m6(e.firestore,e.converter,N7(e._query,c)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fn extends fh{constructor(e,c){super(),this._field=e,this._direction=c,this.type="orderBy"}static _create(e,c){return new Fn(e,c)}_apply(e){const c=function(n,r,s){if(n.startAt!==null)throw new U(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new U(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new D6(r,s);return function(l,f){if(mn(l)===null){const u=Cc(l);u!==null&&hh(l,u,f.field)}}(n,i),i}(e._query,this._field,this._direction);return new m6(e.firestore,e.converter,function(n,r){const s=n.explicitOrderBy.concat([r]);return new u0(n.path,n.collectionGroup,s,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,c))}}function On(t,e="asc"){const c=e,a=Ic("orderBy",t);return Fn._create(a,c)}function M9(t,e,c){if(typeof(c=I2(c))=="string"){if(c==="")throw new U(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ou(e)&&c.indexOf("/")!==-1)throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);const a=e.path.child(S2.fromString(c));if(!X.isDocumentKey(a))throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return ji(t,new X(a))}if(c instanceof L1)return ji(t,c._key);throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sc(c)}.`)}function y9(t,e){if(!Array.isArray(t)||t.length===0)throw new U(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uh(t,e){if(e.isInequality()){const a=Cc(t),n=e.field;if(a!==null&&!a.isEqual(n))throw new U(L.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${a.toString()}' and '${n.toString()}'`);const r=mn(t);r!==null&&hh(t,n,r)}const c=function(n,r){for(const s of n)for(const i of s.getFlattenedFilters())if(r.indexOf(i.op)>=0)return i.op;return null}(t.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(c!==null)throw c===e.op?new U(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${c.toString()}' filters.`)}function hh(t,e,c){if(!c.isEqual(e))throw new U(L.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}class lN{convertValue(e,c="none"){switch(t6(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,c);case 5:return e.stringValue;case 6:return this.convertBytes(e6(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,c);case 10:return this.convertObject(e.mapValue,c);default:throw c2()}}convertObject(e,c){return this.convertObjectMap(e.fields,c)}convertObjectMap(e,c="none"){const a={};return h6(e,(n,r)=>{a[n]=this.convertValue(r,c)}),a}convertGeoPoint(e){return new Tn(Q2(e.latitude),Q2(e.longitude))}convertArray(e,c){return(e.values||[]).map(a=>this.convertValue(a,c))}convertServerTimestamp(e,c){switch(c){case"previous":const a=ln(e);return a==null?null:this.convertValue(a,c);case"estimate":return this.convertTimestamp(ge(e));default:return null}}convertTimestamp(e){const c=C3(e);return new Y2(c.seconds,c.nanos)}convertDocumentKey(e,c){const a=S2.fromString(e);N2(Tu(a));const n=new He(a.get(1),a.get(3)),r=new X(a.popFirst(5));return n.isEqual(c)||D4(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${c.projectId}/${c.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t,e,c){let a;return a=t?c&&(c.merge||c.mergeFields)?t.toFirestore(e,c):t.toFirestore(e):e,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,c){this.hasPendingWrites=e,this.fromCache=c}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dh extends lh{constructor(e,c,a,n,r,s){super(e,c,a,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const c=new Y8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(c,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,c={}){if(this._document){const a=this._document.data.field(Ic("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,c.serverTimestamps)}}}class Y8 extends dh{data(e={}){return super.data(e)}}class uN{constructor(e,c,a,n){this._firestore=e,this._userDataWriter=c,this._snapshot=n,this.metadata=new k0(n.hasPendingWrites,n.fromCache),this.query=a}get docs(){const e=[];return this.forEach(c=>e.push(c)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,c){this._snapshot.docs.forEach(a=>{e.call(c,new Y8(this._firestore,this._userDataWriter,a.key,a,new k0(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const c=!!e.includeMetadataChanges;if(c&&this._snapshot.excludesMetadataChanges)throw new U(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===c||(this._cachedChanges=function(n,r){if(n._snapshot.oldDocs.isEmpty()){let s=0;return n._snapshot.docChanges.map(i=>{const o=new Y8(n._firestore,n._userDataWriter,i.doc.key,i.doc,new k0(n._snapshot.mutatedKeys.has(i.doc.key),n._snapshot.fromCache),n.query.converter);return i.doc,{type:"added",doc:o,oldIndex:-1,newIndex:s++}})}{let s=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(i=>r||i.type!==3).map(i=>{const o=new Y8(n._firestore,n._userDataWriter,i.doc.key,i.doc,new k0(n._snapshot.mutatedKeys.has(i.doc.key),n._snapshot.fromCache),n.query.converter);let l=-1,f=-1;return i.type!==0&&(l=s.indexOf(i.doc.key),s=s.delete(i.doc.key)),i.type!==1&&(s=s.add(i.doc),f=s.indexOf(i.doc.key)),{type:hN(i.type),doc:o,oldIndex:l,newIndex:f}})}}(this,c),this._cachedChangesIncludeMetadataChanges=c),this._cachedChanges}}function hN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return c2()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){t=U4(t,L1);const e=U4(t.firestore,Ye);return GT(Sn(e),t._key).then(c=>dN(e,t,c))}class ph extends lN{constructor(e){super(),this.firestore=e}convertBytes(e){return new c0(e)}convertReference(e){const c=this.convertDocumentKey(e,this.firestore._databaseId);return new L1(this.firestore,null,c)}}function y3(t){t=U4(t,m6);const e=U4(t.firestore,Ye),c=Sn(e),a=new ph(e);return oN(t._query),KT(c,t._query).then(n=>new uN(e,a,t,n))}function St(t,e,c){t=U4(t,L1);const a=U4(t.firestore,Ye),n=fN(t.converter,e,c);return vh(a,[cN(En(a),"setDoc",t._key,n,t.converter!==null,c).toMutation(t._key,v4.none())])}function J8(t,e,c,...a){t=U4(t,L1);const n=U4(t.firestore,Ye),r=En(n);let s;return s=typeof(e=I2(e))=="string"||e instanceof Nc?nN(r,"updateDoc",t._key,e,c,a):aN(r,"updateDoc",t._key,e),vh(n,[s.toMutation(t._key,v4.exists(!0))])}function vh(t,e){return function(a,n){const r=new E4;return a.asyncQueue.enqueueAndForget(async()=>ET(await jT(a),n,r)),r.promise}(Sn(t),e)}function dN(t,e,c){const a=c.docs.get(e._key),n=new ph(t);return new dh(t,n,e._key,a,new k0(c.hasPendingWrites,c.fromCache),e.converter)}function _9(){return new kn("serverTimestamp")}(function(e,c=!0){(function(n){f0=n})(f6),J3(new V3("firestore",(a,{instanceIdentifier:n,options:r})=>{const s=a.getProvider("app").getImmediate(),i=new Ye(new VA(a.getProvider("auth-internal")),new yA(a.getProvider("app-check-internal")),function(l,f){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new He(l.options.projectId,f)}(s,n),s);return r=Object.assign({useFetchStreams:c},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),p4(Ui,"4.1.0",e),p4(Ui,"4.1.0","esm2017")})();var mN="firebase",pN="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */p4(mN,pN,"app");function Un(t,e){var c={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(c[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(c[a[n]]=t[a[n]]);return c}function gh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vN=gh,Hh=new ke("auth","Firebase",gh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new ka("@firebase/auth");function gN(t,...e){Tt.logLevel<=p2.WARN&&Tt.warn(`Auth (${f6}): ${t}`,...e)}function Z8(t,...e){Tt.logLevel<=p2.ERROR&&Tt.error(`Auth (${f6}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(t,...e){throw Bn(t,...e)}function H4(t,...e){return Bn(t,...e)}function HN(t,e,c){const a=Object.assign(Object.assign({},vN()),{[e]:c});return new ke("auth","Firebase",a).create(e,{appName:t.name})}function Bn(t,...e){if(typeof t!="string"){const c=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(c,...a)}return Hh.create(t,...e)}function t2(t,e,...c){if(!t)throw Bn(e,...c)}function S4(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Z8(e),new Error(e)}function B4(t,e){t||S4(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B7(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VN(){return L9()==="http:"||L9()==="https:"}function L9(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VN()||Gw()||"connection"in navigator)?navigator.onLine:!0}function CN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,c){this.shortDelay=e,this.longDelay=c,B4(c>e,"Short delay should be less than long delay!"),this.isMobile=Ww()||Kw()}get(){return zN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){B4(t.emulator,"Emulator should always be set here");const{url:c}=t.emulator;return e?`${c}${e.startsWith("/")?e.slice(1):e}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{static initialize(e,c,a){this.fetchImpl=e,c&&(this.headersImpl=c),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;S4("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;S4("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;S4("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new Ze(3e4,6e4);function m0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function p6(t,e,c,a,n={}){return zh(t,n,async()=>{let r={},s={};a&&(e==="GET"?s=a:r={body:JSON.stringify(a)});const i=Ie(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Vh.fetch()(Ch(t,t.config.apiHost,c,i),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},r))})}async function zh(t,e,c){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},MN),e);try{const n=new _N(t),r=await Promise.race([c(),n.promise]);n.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw S8(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const i=r.ok?s.errorMessage:s.error.message,[o,l]=i.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw S8(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw S8(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw S8(t,"user-disabled",s);const f=a[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw HN(t,f,l);c4(t,f)}}catch(n){if(n instanceof y4)throw n;c4(t,"network-request-failed",{message:String(n)})}}async function e8(t,e,c,a,n={}){const r=await p6(t,e,c,a,n);return"mfaPendingCredential"in r&&c4(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ch(t,e,c,a){const n=`${e}${c}?${a}`;return t.config.emulator?$n(t.config,n):`${t.config.apiScheme}://${n}`}class _N{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((c,a)=>{this.timer=setTimeout(()=>a(H4(this.auth,"network-request-failed")),yN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function S8(t,e,c){const a={appName:t.name};c.email&&(a.email=c.email),c.phoneNumber&&(a.phoneNumber=c.phoneNumber);const n=H4(t,e,a);return n.customData._tokenResponse=c,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){return p6(t,"POST","/v1/accounts:delete",e)}async function wN(t,e){return p6(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bN(t,e=!1){const c=I2(t),a=await c.getIdToken(e),n=qn(a);t2(n&&n.exp&&n.auth_time&&n.iat,c.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,s=r==null?void 0:r.sign_in_provider;return{claims:n,token:a,authTime:G0(I5(n.auth_time)),issuedAtTime:G0(I5(n.iat)),expirationTime:G0(I5(n.exp)),signInProvider:s||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function I5(t){return Number(t)*1e3}function qn(t){const[e,c,a]=t.split(".");if(e===void 0||c===void 0||a===void 0)return Z8("JWT malformed, contained fewer than 3 sections"),null;try{const n=Pl(c);return n?JSON.parse(n):(Z8("Failed to decode base64 JWT payload"),null)}catch(n){return Z8("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function xN(t){const e=qn(t);return t2(e,"internal-error"),t2(typeof e.exp<"u","internal-error"),t2(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e,c=!1){if(c)return e;try{return await e}catch(a){throw a instanceof y4&&AN(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function AN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const n=((c=this.user.stsTokenManager.expirationTime)!==null&&c!==void 0?c:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=G0(this.lastLoginAt),this.creationTime=G0(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t){var e;const c=t.auth,a=await t.getIdToken(),n=await a0(t,wN(c,{idToken:a}));t2(n==null?void 0:n.users.length,c,"internal-error");const r=n.users[0];t._notifyReloadListener(r);const s=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?EN(r.providerUserInfo):[],i=NN(t.providerData,s),o=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(i!=null&&i.length),f=o?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Mh(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function TN(t){const e=I2(t);await Nt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NN(t,e){return[...t.filter(a=>!e.some(n=>n.providerId===a.providerId)),...e]}function EN(t){return t.map(e=>{var{providerId:c}=e,a=Un(e,["providerId"]);return{providerId:c,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t,e){const c=await zh(t,{},async()=>{const a=Ie({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:r}=t.config,s=Ch(t,n,"/v1/token",`key=${r}`),i=await t._getAdditionalHeaders();return i["Content-Type"]="application/x-www-form-urlencoded",Vh.fetch()(s,{method:"POST",headers:i,body:a})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){t2(e.idToken,"internal-error"),t2(typeof e.idToken<"u","internal-error"),t2(typeof e.refreshToken<"u","internal-error");const c="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return t2(!this.accessToken||this.refreshToken,e,"user-token-expired"),!c&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:a,refreshToken:n,expiresIn:r}=await kN(e,c);this.updateTokensAndExpiration(a,n,Number(r))}updateTokensAndExpiration(e,c,a){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,c){const{refreshToken:a,accessToken:n,expirationTime:r}=c,s=new ye;return a&&(t2(typeof a=="string","internal-error",{appName:e}),s.refreshToken=a),n&&(t2(typeof n=="string","internal-error",{appName:e}),s.accessToken=n),r&&(t2(typeof r=="number","internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ye,this.toJSON())}_performRefresh(){return S4("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(t,e){t2(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class K3{constructor(e){var{uid:c,auth:a,stsTokenManager:n}=e,r=Un(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=a,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Mh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const c=await a0(this,this.stsTokenManager.getToken(this.auth,e));return t2(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return bN(this,e)}reload(){return TN(this)}_assign(e){this!==e&&(t2(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(c=>Object.assign({},c)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new K3(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){t2(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),c&&await Nt(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await a0(this,LN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var a,n,r,s,i,o,l,f;const u=(a=c.displayName)!==null&&a!==void 0?a:void 0,h=(n=c.email)!==null&&n!==void 0?n:void 0,d=(r=c.phoneNumber)!==null&&r!==void 0?r:void 0,v=(s=c.photoURL)!==null&&s!==void 0?s:void 0,H=(i=c.tenantId)!==null&&i!==void 0?i:void 0,y=(o=c._redirectEventId)!==null&&o!==void 0?o:void 0,V=(l=c.createdAt)!==null&&l!==void 0?l:void 0,C=(f=c.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:b,emailVerified:M,isAnonymous:E,providerData:F,stsTokenManager:K}=c;t2(b&&K,e,"internal-error");const a2=ye.fromJSON(this.name,K);t2(typeof b=="string",e,"internal-error"),Y4(u,e.name),Y4(h,e.name),t2(typeof M=="boolean",e,"internal-error"),t2(typeof E=="boolean",e,"internal-error"),Y4(d,e.name),Y4(v,e.name),Y4(H,e.name),Y4(y,e.name),Y4(V,e.name),Y4(C,e.name);const i2=new K3({uid:b,auth:e,email:h,emailVerified:M,displayName:u,isAnonymous:E,photoURL:v,phoneNumber:d,tenantId:H,stsTokenManager:a2,createdAt:V,lastLoginAt:C});return F&&Array.isArray(F)&&(i2.providerData=F.map(C2=>Object.assign({},C2))),y&&(i2._redirectEventId=y),i2}static async _fromIdTokenResponse(e,c,a=!1){const n=new ye;n.updateFromServerResponse(c);const r=new K3({uid:c.localId,auth:e,stsTokenManager:n,isAnonymous:a});return await Nt(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w9=new Map;function T4(t){B4(t instanceof Function,"Expected a class definition");let e=w9.get(t);return e?(B4(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w9.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return c===void 0?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}yh.type="NONE";const b9=yh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e,c){return`firebase:${t}:${e}:${c}`}class U6{constructor(e,c,a){this.persistence=e,this.auth=c,this.userKey=a;const{config:n,name:r}=this.auth;this.fullUserKey=et(this.userKey,n.apiKey,r),this.fullPersistenceKey=et("persistence",n.apiKey,r),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?K3._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,c)return this.setCurrentUser(c)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,a="authUser"){if(!c.length)return new U6(T4(b9),e,a);const n=(await Promise.all(c.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=n[0]||T4(b9);const s=et(a,e.config.apiKey,e.name);let i=null;for(const l of c)try{const f=await l._get(s);if(f){const u=K3._fromJSON(e,f);l!==r&&(i=u),r=l;break}}catch{}const o=n.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new U6(r,e,a):(r=o[0],i&&await r._set(s,i.toJSON()),await Promise.all(c.map(async l=>{if(l!==r)try{await l._remove(s)}catch{}})),new U6(r,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_h(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xh(e))return"Blackberry";if(Ah(e))return"Webos";if(Wn(e))return"Safari";if((e.includes("chrome/")||Lh(e))&&!e.includes("edge/"))return"Chrome";if(bh(e))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(c);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function _h(t=z1()){return/firefox\//i.test(t)}function Wn(t=z1()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lh(t=z1()){return/crios\//i.test(t)}function wh(t=z1()){return/iemobile/i.test(t)}function bh(t=z1()){return/android/i.test(t)}function xh(t=z1()){return/blackberry/i.test(t)}function Ah(t=z1()){return/webos/i.test(t)}function Pc(t=z1()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IN(t=z1()){var e;return Pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RN(){return Qw()&&document.documentMode===10}function Sh(t=z1()){return Pc(t)||bh(t)||Ah(t)||xh(t)||/windows phone/i.test(t)||wh(t)}function PN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e=[]){let c;switch(t){case"Browser":c=x9(z1());break;case"Worker":c=`${x9(z1())}-${t}`;break;default:c=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${c}/JsCore/${f6}/${a}`}async function Nh(t,e){return p6(t,"GET","/v2/recaptchaConfig",m0(t,e))}function A9(t){return t!==void 0&&t.enterprise!==void 0}class Eh{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(c=>c.provider==="EMAIL_PASSWORD_PROVIDER"&&c.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kh(t){return new Promise((e,c)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=n=>{const r=H4("internal-error");r.customData=n,c(r)},a.type="text/javascript",a.charset="UTF-8",DN().appendChild(a)})}function FN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ON="https://www.google.com/recaptcha/enterprise.js?render=",UN="recaptcha-enterprise",BN="NO_RECAPTCHA";class Ih{constructor(e){this.type=UN,this.auth=p0(e)}async verify(e="verify",c=!1){async function a(r){if(!c){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(s,i)=>{Nh(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)i(new Error("recaptcha Enterprise site key undefined"));else{const l=new Eh(o);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,s(l.siteKey)}}).catch(o=>{i(o)})})}function n(r,s,i){const o=window.grecaptcha;A9(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(l=>{s(l)}).catch(()=>{s(BN)})}):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,s)=>{a(this.auth).then(i=>{if(!c&&A9(window.grecaptcha))n(i,r,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}kh(ON+i).then(()=>{n(i,r,s)}).catch(o=>{s(o)})}}).catch(i=>{s(i)})})}}async function Et(t,e,c,a=!1){const n=new Ih(t);let r;try{r=await n.verify(c)}catch{r=await n.verify(c,!0)}const s=Object.assign({},e);return a?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const a=r=>new Promise((s,i)=>{try{const o=e(r);s(o)}catch(o){i(o)}});a.onAbort=c,this.queue.push(a);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const a of this.queue)await a(e),a.onAbort&&c.push(a.onAbort)}catch(a){c.reverse();for(const n of c)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,c,a,n){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new S9(this),this.idTokenSubscription=new S9(this),this.beforeStateQueue=new $N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=T4(c)),this._initializationPromise=this.queue(async()=>{var a,n;if(!this._deleted&&(this.persistenceManager=await U6.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(c),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var c;const a=await this.assertedPersistence.getCurrentUser();let n=a,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId,i=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o!=null&&o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return t2(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await Nt(e)}catch(c){if((c==null?void 0:c.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?I2(e):null;return c&&t2(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&t2(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(T4(e))})}async initializeRecaptchaConfig(){const e=await Nh(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),c=new Eh(e);this.tenantId==null?this._agentRecaptchaConfig=c:this._tenantRecaptchaConfigs[this.tenantId]=c,c.emailPasswordEnabled&&new Ih(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ke("auth","Firebase",e())}onAuthStateChanged(e,c,a){return this.registerStateListener(this.authStateSubscription,e,c,a)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,a){return this.registerStateListener(this.idTokenSubscription,e,c,a)}authStateReady(){return new Promise((e,c)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},c)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,c){const a=await this.getOrInitRedirectPersistenceManager(c);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&T4(e)||this._popupRedirectResolver;t2(c,this,"argument-error"),this.redirectPersistenceManager=await U6.create(this,[T4(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,a;return this._isInitialized&&await this.queue(async()=>{}),((c=this._currentUser)===null||c===void 0?void 0:c._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(c=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&c!==void 0?c:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,a,n){if(this._deleted)return()=>{};const r=typeof c=="function"?c:c.next.bind(c),s=this._isInitialized?Promise.resolve():this._initializationPromise;return t2(s,this,"internal-error"),s.then(()=>r(this.currentUser)),typeof c=="function"?e.addObserver(c,a,n):e.addObserver(c)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return t2(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={"X-Client-Version":this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(c["X-Firebase-Client"]=a);const n=await this._getAppCheckToken();return n&&(c["X-Firebase-AppCheck"]=n),c}async _getAppCheckToken(){var e;const c=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return c!=null&&c.error&&gN(`Error while retrieving App Check token: ${c.error}`),c==null?void 0:c.token}}function p0(t){return I2(t)}class S9{constructor(e){this.auth=e,this.observer=null,this.addObserver=cb(c=>this.observer=c)}get next(){return t2(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t,e){const c=nc(t,"auth");if(c.isInitialized()){const n=c.getImmediate(),r=c.getOptions();if(pt(r,e??{}))return n;c4(n,"already-initialized")}return c.initialize({options:e})}function jN(t,e){const c=(e==null?void 0:e.persistence)||[],a=(Array.isArray(c)?c:[c]).map(T4);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function GN(t,e,c){const a=p0(t);t2(a._canInitEmulator,a,"emulator-config-failed"),t2(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const n=!!(c!=null&&c.disableWarnings),r=Rh(e),{host:s,port:i}=KN(e),o=i===null?"":`:${i}`;a.config.emulator={url:`${r}//${s}${o}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:s,port:i,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||QN()}function Rh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KN(t){const e=Rh(t),c=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!c)return{host:"",port:null};const a=c[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const r=n[1];return{host:r,port:T9(a.substr(r.length+1))}}else{const[r,s]=a.split(":");return{host:r,port:T9(s)}}}function T9(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QN(){function t(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return S4("not implemented")}_getIdTokenResponse(e){return S4("not implemented")}_linkToIdToken(e,c){return S4("not implemented")}_getReauthenticationResolver(e){return S4("not implemented")}}async function XN(t,e){return p6(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R5(t,e){return e8(t,"POST","/v1/accounts:signInWithPassword",m0(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,e){return e8(t,"POST","/v1/accounts:signInWithEmailLink",m0(t,e))}async function JN(t,e){return e8(t,"POST","/v1/accounts:signInWithEmailLink",m0(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends jn{constructor(e,c,a,n=null){super("password",a),this._email=e,this._password=c,this._tenantId=n}static _fromEmailAndPassword(e,c){return new _e(e,c,"password")}static _fromEmailAndCode(e,c,a=null){return new _e(e,c,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e;if(c!=null&&c.email&&(c!=null&&c.password)){if(c.signInMethod==="password")return this._fromEmailAndPassword(c.email,c.password);if(c.signInMethod==="emailLink")return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){var c;switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((c=e._getRecaptchaConfig())===null||c===void 0)&&c.emailPasswordEnabled){const n=await Et(e,a,"signInWithPassword");return R5(e,n)}else return R5(e,a).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Et(e,a,"signInWithPassword");return R5(e,r)}else return Promise.reject(n)});case"emailLink":return YN(e,{email:this._email,oobCode:this._password});default:c4(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":return XN(e,{idToken:c,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JN(e,{idToken:c,email:this._email,oobCode:this._password});default:c4(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B6(t,e){return e8(t,"POST","/v1/accounts:signInWithIdp",m0(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="http://localhost";class n6 extends jn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new n6(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):c4("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:n}=c,r=Un(c,["providerId","signInMethod"]);if(!a||!n)return null;const s=new n6(a,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const c=this.buildRequest();return B6(e,c)}_linkToIdToken(e,c){const a=this.buildRequest();return a.idToken=c,B6(e,a)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,B6(e,c)}buildRequest(){const e={requestUri:ZN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c.id_token=this.idToken),this.accessToken&&(c.access_token=this.accessToken),this.secret&&(c.oauth_token_secret=this.secret),c.providerId=this.providerId,this.nonce&&!this.pendingToken&&(c.nonce=this.nonce),e.postBody=Ie(c)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tE(t){const e=x0(A0(t)).link,c=e?x0(A0(e)).deep_link_id:null,a=x0(A0(t)).deep_link_id;return(a?x0(A0(a)).link:null)||a||c||e||t}class Gn{constructor(e){var c,a,n,r,s,i;const o=x0(A0(e)),l=(c=o.apiKey)!==null&&c!==void 0?c:null,f=(a=o.oobCode)!==null&&a!==void 0?a:null,u=eE((n=o.mode)!==null&&n!==void 0?n:null);t2(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(r=o.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(s=o.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(i=o.tenantId)!==null&&i!==void 0?i:null}static parseLink(e){const c=tE(e);try{return new Gn(c)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.providerId=v0.PROVIDER_ID}static credential(e,c){return _e._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const a=Gn.parseLink(c);return t2(a,"argument-error"),_e._fromEmailAndCode(e,a.code,a.tenantId)}}v0.PROVIDER_ID="password";v0.EMAIL_PASSWORD_SIGN_IN_METHOD="password";v0.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8 extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c3 extends t8{constructor(){super("facebook.com")}static credential(e){return n6._fromParams({providerId:c3.PROVIDER_ID,signInMethod:c3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return c3.credentialFromTaggedObject(e)}static credentialFromError(e){return c3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return c3.credential(e.oauthAccessToken)}catch{return null}}}c3.FACEBOOK_SIGN_IN_METHOD="facebook.com";c3.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3 extends t8{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return n6._fromParams({providerId:a3.PROVIDER_ID,signInMethod:a3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return a3.credentialFromTaggedObject(e)}static credentialFromError(e){return a3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:a}=e;if(!c&&!a)return null;try{return a3.credential(c,a)}catch{return null}}}a3.GOOGLE_SIGN_IN_METHOD="google.com";a3.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3 extends t8{constructor(){super("github.com")}static credential(e){return n6._fromParams({providerId:n3.PROVIDER_ID,signInMethod:n3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n3.credentialFromTaggedObject(e)}static credentialFromError(e){return n3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n3.credential(e.oauthAccessToken)}catch{return null}}}n3.GITHUB_SIGN_IN_METHOD="github.com";n3.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3 extends t8{constructor(){super("twitter.com")}static credential(e,c){return n6._fromParams({providerId:r3.PROVIDER_ID,signInMethod:r3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return r3.credentialFromTaggedObject(e)}static credentialFromError(e){return r3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:a}=e;if(!c||!a)return null;try{return r3.credential(c,a)}catch{return null}}}r3.TWITTER_SIGN_IN_METHOD="twitter.com";r3.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P5(t,e){return e8(t,"POST","/v1/accounts:signUp",m0(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,a,n=!1){const r=await K3._fromIdTokenResponse(e,a,n),s=N9(a);return new r6({user:r,providerId:s,_tokenResponse:a,operationType:c})}static async _forOperation(e,c,a){await e._updateTokensIfNecessary(a,!0);const n=N9(a);return new r6({user:e,providerId:n,_tokenResponse:a,operationType:c})}}function N9(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends y4{constructor(e,c,a,n){var r;super(c.code,c.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:c.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,c,a,n){return new kt(e,c,a,n)}}function Dh(t,e,c,a){return(e==="reauthenticate"?c._getReauthenticationResolver(t):c._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?kt._fromErrorAndOperation(t,r,e,a):r})}async function cE(t,e,c=!1){const a=await a0(t,e._linkToIdToken(t.auth,await t.getIdToken()),c);return r6._forOperation(t,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e,c=!1){const{auth:a}=t,n="reauthenticate";try{const r=await a0(t,Dh(a,n,e,t),c);t2(r.idToken,a,"internal-error");const s=qn(r.idToken);t2(s,a,"internal-error");const{sub:i}=s;return t2(t.uid===i,a,"user-mismatch"),r6._forOperation(t,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&c4(a,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(t,e,c=!1){const a="signIn",n=await Dh(t,a,e),r=await r6._fromIdTokenResponse(t,a,n);return c||await t._updateCurrentUser(r.user),r}async function nE(t,e){return Fh(p0(t),e)}async function rE(t,e,c){var a;const n=p0(t),r={returnSecureToken:!0,email:e,password:c,clientType:"CLIENT_TYPE_WEB"};let s;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.emailPasswordEnabled){const l=await Et(n,r,"signUpPassword");s=P5(n,l)}else s=P5(n,r).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await Et(n,r,"signUpPassword");return P5(n,f)}else return Promise.reject(l)});const i=await s.catch(l=>Promise.reject(l)),o=await r6._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(o.user),o}function sE(t,e,c){return nE(I2(t),v0.credential(e,c))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e){return p6(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,{displayName:e,photoURL:c}){if(e===void 0&&c===void 0)return;const a=I2(t),r={idToken:await a.getIdToken(),displayName:e,photoUrl:c,returnSecureToken:!0},s=await a0(a,iE(a.auth,r));a.displayName=s.displayName||null,a.photoURL=s.photoUrl||null;const i=a.providerData.find(({providerId:o})=>o==="password");i&&(i.displayName=a.displayName,i.photoURL=a.photoURL),await a._updateTokensIfNecessary(s)}function lE(t,e,c,a){return I2(t).onIdTokenChanged(e,c,a)}function fE(t,e,c){return I2(t).beforeAuthStateChanged(e,c)}function uE(t,e,c,a){return I2(t).onAuthStateChanged(e,c,a)}function hE(t){return I2(t).signOut()}const It="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem(It,"1"),this.storage.removeItem(It),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){const t=z1();return Wn(t)||Pc(t)}const mE=1e3,pE=10;class Uh extends Oh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dE()&&PN(),this.fallbackToPolling=Sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const a=this.storage.getItem(c),n=this.localCache[c];a!==n&&e(c,n,a)}}onStorageEvent(e,c=!1){if(!e.key){this.forAllChangedKeys((s,i,o)=>{this.notifyListeners(s,o)});return}const a=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(a);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!c)return}const n=()=>{const s=this.storage.getItem(a);!c&&this.localCache[a]===s||this.notifyListeners(a,s)},r=this.storage.getItem(a);RN()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,pE):n()}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(c&&JSON.parse(c))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,c,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:a}),!0)})},mE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uh.type="LOCAL";const vE=Uh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh extends Oh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,c){}_removeListener(e,c){}}Bh.type="SESSION";const $h=Bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(c){return{fulfilled:!1,reason:c}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find(n=>n.isListeningto(e));if(c)return c;const a=new Dc(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:a,eventType:n,data:r}=c.data,s=this.handlersMap[n];if(!(s!=null&&s.size))return;c.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const i=Array.from(s).map(async l=>l(c.origin,r)),o=await gE(i);c.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:o})}_subscribe(e,c){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),(!c||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t="",e=10){let c="";for(let a=0;a<e;a++)c+=Math.floor(Math.random()*10);return t+c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,a=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise((i,o)=>{const l=Kn("",20);n.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},a);s={messageChannel:n,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),i(h.data.response);break;default:clearTimeout(f),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:c},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(){return window}function VE(t){V4().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return typeof V4().WorkerGlobalScope<"u"&&typeof V4().importScripts=="function"}async function zE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ME(){return qh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="firebaseLocalStorageDb",yE=1,Rt="firebaseLocalStorage",jh="fbase_key";class c8{constructor(e){this.request=e}toPromise(){return new Promise((e,c)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{c(this.request.error)})})}}function Fc(t,e){return t.transaction([Rt],e?"readwrite":"readonly").objectStore(Rt)}function _E(){const t=indexedDB.deleteDatabase(Wh);return new c8(t).toPromise()}function $7(){const t=indexedDB.open(Wh,yE);return new Promise((e,c)=>{t.addEventListener("error",()=>{c(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(Rt,{keyPath:jh})}catch(n){c(n)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(Rt)?e(a):(a.close(),await _E(),e(await $7()))})})}async function E9(t,e,c){const a=Fc(t,!0).put({[jh]:e,value:c});return new c8(a).toPromise()}async function LE(t,e){const c=Fc(t,!1).get(e),a=await new c8(c).toPromise();return a===void 0?null:a.value}function k9(t,e){const c=Fc(t,!0).delete(e);return new c8(c).toPromise()}const wE=800,bE=3;class Gh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $7(),this.db)}async _withRetries(e){let c=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(c++>bE)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(ME()),this.receiver._subscribe("keyChanged",async(e,c)=>({keyProcessed:(await this._poll()).includes(c.key)})),this.receiver._subscribe("ping",async(e,c)=>["keyChanged"])}async initializeSender(){var e,c;if(this.activeServiceWorker=await zE(),!this.activeServiceWorker)return;this.sender=new HE(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((c=a[0])===null||c===void 0)&&c.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $7();return await E9(e,It,"1"),await k9(e,It),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite(async()=>(await this._withRetries(a=>E9(a,e,c)),this.localCache[e]=c,this.notifyServiceWorker(e)))}async _get(e){const c=await this._withRetries(a=>LE(a,e));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(c=>k9(c,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const r=Fc(n,!1).getAll();return new c8(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const c=[],a=new Set;for(const{fbase_key:n,value:r}of e)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),c.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),c.push(n));return c}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gh.type="LOCAL";const xE=Gh;new Ze(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e){return e?T4(e):(t2(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends jn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return B6(e,this._buildIdpRequest())}_linkToIdToken(e,c){return B6(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return B6(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function SE(t){return Fh(t.auth,new Qn(t),t.bypassAuthState)}function TE(t){const{auth:e,user:c}=t;return t2(c,e,"internal-error"),aE(c,new Qn(t),t.bypassAuthState)}async function NE(t){const{auth:e,user:c}=t;return t2(c,e,"internal-error"),cE(c,new Qn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,c,a,n,r=!1){this.auth=e,this.resolver=a,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise(async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:c,sessionId:a,postBody:n,tenantId:r,error:s,type:i}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:c,sessionId:a,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SE;case"linkViaPopup":case"linkViaRedirect":return NE;case"reauthViaPopup":case"reauthViaRedirect":return TE;default:c4(this.auth,"internal-error")}}resolve(e){B4(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){B4(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Ze(2e3,1e4);class x6 extends Kh{constructor(e,c,a,n,r){super(e,c,n,r),this.provider=a,this.authWindow=null,this.pollId=null,x6.currentPopupAction&&x6.currentPopupAction.cancel(),x6.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return t2(e,this.auth,"internal-error"),e}async onExecution(){B4(this.filter.length===1,"Popup operations only handle one event");const e=Kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(c=>{this.reject(c)}),this.resolver._isIframeWebStorageSupported(this.auth,c=>{c||this.reject(H4(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(H4(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,x6.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,a;if(!((a=(c=this.authWindow)===null||c===void 0?void 0:c.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(H4(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EE.get())};e()}}x6.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="pendingRedirect",tt=new Map;class IE extends Kh{constructor(e,c,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,a),this.eventId=null}async execute(){let e=tt.get(this.auth._key());if(!e){try{const a=await RE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(c){e=()=>Promise.reject(c)}tt.set(this.auth._key(),e)}return this.bypassAuthState||tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RE(t,e){const c=FE(e),a=DE(t);if(!await a._isAvailable())return!1;const n=await a._get(c)==="true";return await a._remove(c),n}function PE(t,e){tt.set(t._key(),e)}function DE(t){return T4(t._redirectPersistence)}function FE(t){return et(kE,t.config.apiKey,t.name)}async function OE(t,e,c=!1){const a=p0(t),n=AE(a,e),s=await new IE(a,n,c).execute();return s&&!c&&(delete s.user._redirectEventId,await a._persistUserIfCurrent(s.user),await a._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=10*60*1e3;class BE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(c=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$E(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var a;if(e.error&&!Qh(e)){const n=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";c.onError(H4(this.auth,n))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const a=c.eventId===null||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UE&&this.cachedEventUids.clear(),this.cachedEventUids.has(I9(e))}saveEventToCache(e){this.cachedEventUids.add(I9(e)),this.lastProcessedEventTime=Date.now()}}function I9(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $E(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(t,e={}){return p6(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jE=/^https?/;async function GE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qE(t);for(const c of e)try{if(KE(c))return}catch{}c4(t,"unauthorized-domain")}function KE(t){const e=B7(),{protocol:c,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&a===""?c==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):c==="chrome-extension:"&&s.hostname===a}if(!jE.test(c))return!1;if(WE.test(t))return a===t;const n=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=new Ze(3e4,6e4);function R9(){const t=V4().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let c=0;c<t.CP.length;c++)t.CP[c]=null}}function XE(t){return new Promise((e,c)=>{var a,n,r;function s(){R9(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{R9(),c(H4(t,"network-request-failed"))},timeout:QE.get()})}if(!((n=(a=V4().gapi)===null||a===void 0?void 0:a.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((r=V4().gapi)===null||r===void 0)&&r.load)s();else{const i=FN("iframefcb");return V4()[i]=()=>{gapi.load?s():c(H4(t,"network-request-failed"))},kh(`https://apis.google.com/js/api.js?onload=${i}`).catch(o=>c(o))}}).catch(e=>{throw ct=null,e})}let ct=null;function YE(t){return ct=ct||XE(t),ct}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new Ze(5e3,15e3),ZE="__/auth/iframe",ek="emulator/auth/iframe",tk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ak(t){const e=t.config;t2(e.authDomain,t,"auth-domain-config-required");const c=e.emulator?$n(e,ek):`https://${t.config.authDomain}/${ZE}`,a={apiKey:e.apiKey,appName:t.name,v:f6},n=ck.get(t.config.apiHost);n&&(a.eid=n);const r=t._getFrameworks();return r.length&&(a.fw=r.join(",")),`${c}?${Ie(a).slice(1)}`}async function nk(t){const e=await YE(t),c=V4().gapi;return t2(c,t,"internal-error"),e.open({where:document.body,url:ak(t),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tk,dontclear:!0},a=>new Promise(async(n,r)=>{await a.restyle({setHideOnLeave:!1});const s=H4(t,"network-request-failed"),i=V4().setTimeout(()=>{r(s)},JE.get());function o(){V4().clearTimeout(i),n(a)}a.ping(o).then(o,()=>{r(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,ik=600,ok="_blank",lk="http://localhost";class P9{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fk(t,e,c,a=sk,n=ik){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString();let i="";const o=Object.assign(Object.assign({},rk),{width:a.toString(),height:n.toString(),top:r,left:s}),l=z1().toLowerCase();c&&(i=Lh(l)?ok:c),_h(l)&&(e=e||lk,o.scrollbars="yes");const f=Object.entries(o).reduce((h,[d,v])=>`${h}${d}=${v},`,"");if(IN(l)&&i!=="_self")return uk(e||"",i),new P9(null);const u=window.open(e||"",i,f);t2(u,t,"popup-blocked");try{u.focus()}catch{}return new P9(u)}function uk(t,e){const c=document.createElement("a");c.href=t,c.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="__/auth/handler",dk="emulator/auth/handler",mk=encodeURIComponent("fac");async function D9(t,e,c,a,n,r){t2(t.config.authDomain,t,"auth-domain-config-required"),t2(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:c,redirectUrl:a,v:f6,eventId:n};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",tb(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(r||{}))s[f]=u}if(e instanceof t8){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const i=s;for(const f of Object.keys(i))i[f]===void 0&&delete i[f];const o=await t._getAppCheckToken(),l=o?`#${mk}=${encodeURIComponent(o)}`:"";return`${pk(t)}?${Ie(i).slice(1)}${l}`}function pk({config:t}){return t.emulator?$n(t,dk):`https://${t.authDomain}/${hk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D5="webStorageSupport";class vk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$h,this._completeRedirectFn=OE,this._overrideRedirectResult=PE}async _openPopup(e,c,a,n){var r;B4((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await D9(e,c,a,B7(),n);return fk(e,s,Kn())}async _openRedirect(e,c,a,n){await this._originValidation(e);const r=await D9(e,c,a,B7(),n);return VE(r),new Promise(()=>{})}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:n,promise:r}=this.eventManagers[c];return n?Promise.resolve(n):(B4(r,"If manager is not set, promise should be"),r)}const a=this.initAndGetManager(e);return this.eventManagers[c]={promise:a},a.catch(()=>{delete this.eventManagers[c]}),a}async initAndGetManager(e){const c=await nk(e),a=new BE(e);return c.register("authEvent",n=>(t2(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:a.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=c,a}_isIframeWebStorageSupported(e,c){this.iframes[e._key()].send(D5,{type:D5},n=>{var r;const s=(r=n==null?void 0:n[0])===null||r===void 0?void 0:r[D5];s!==void 0&&c(!!s),c4(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=GE(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return Sh()||Wn()||Pc()}}const gk=vk;var F9="@firebase/auth",O9="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){t2(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zk(t){J3(new V3("auth",(e,{options:c})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:i}=a.options;t2(s&&!s.includes(":"),"invalid-api-key",{appName:a.name});const o={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Th(t)},l=new qN(a,n,r,o);return jN(l,c),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,c,a)=>{e.getProvider("auth-internal").initialize()})),J3(new V3("auth-internal",e=>{const c=p0(e.getProvider("auth").getImmediate());return(a=>new Hk(a))(c)},"PRIVATE").setInstantiationMode("EXPLICIT")),p4(F9,O9,Vk(t)),p4(F9,O9,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=5*60,Mk=Ul("authIdTokenMaxAge")||Ck;let U9=null;const yk=t=>async e=>{const c=e&&await e.getIdTokenResult(),a=c&&(new Date().getTime()-Date.parse(c.issuedAtTime))/1e3;if(a&&a>Mk)return;const n=c==null?void 0:c.token;U9!==n&&(U9=n,await fetch(t,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function _k(t=Ra()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const c=WN(t,{popupRedirectResolver:gk,persistence:[xE,vE,$h]}),a=Ul("authTokenSyncURL");if(a){const r=yk(a);fE(c,r,()=>r(c.currentUser)),lE(c,s=>r(s))}const n=Dl("auth");return n&&GN(c,`http://${n}`),c}zk("Browser");const Lk={apiKey:"AIzaSyBFxN77gcTkOiGsrKM-2ClgOyNTAmEUSzI",authDomain:"listed-230f4.firebaseapp.com",projectId:"listed-230f4",storageBucket:"listed-230f4.appspot.com",messagingSenderId:"462579772181",appId:"1:462579772181:web:7a89a7456ddede702b971c",measurementId:"G-66Z45Z11B6"},wk=Wl(Lk),_3=_k(),Xn=JT(wk),L3=An(Xn,"posts"),Xh=An(Xn,"lists"),Le=An(Xn,"users");class v6{constructor(e="",c="Listed",a=[],n=[],r={},s={}){this.email=e,this.username=c,this.following=a,this.followers=n,this.postInteractions=r,this.reportedPosts=s}toString(){return this.email+", "+this.username+", "+this.following+", "+this.followers+", "+this.postInteractions+", "}async UpdateUser(e){const c=c6(Le,this.username);await J8(c,e)}Follow(e){this.following.push(e.username),e.followers.push(this.username),e.UpdateUser({followers:e.followers}),this.UpdateUser({following:this.following})}UnFollow(e){this.following.pop(e.username),e.followers.pop(this.username),e.UpdateUser({followers:e.followers}),this.UpdateUser({following:this.following})}IsFollowing(e){return this.following.includes(e.username)}SignOut(){hE(_3).then(()=>{k1.push({name:"Login"})}).catch(e=>{console.log(e)})}}const Pt={toFirestore:t=>JSON.parse(JSON.stringify(t)),fromFirestore:(t,e)=>{const c=t.data(e);return new v6(c.email,c.username,c.following,c.followers,c.postInteractions,c.reportedPosts)}};uE(_3,t=>{t&&k1.push(Vr||{name:"Home"})});async function we(t){if(!t)return new v6;const e=c6(Le,t).withConverter(Pt);return(await mh(e)).data()}function Oc(){return _3.currentUser?we(_3.currentUser.displayName):null}function Yh(){return _3.currentUser===null?new v6:we(_3.currentUser.displayName)}function bk(t,e){return new Promise((c,a)=>{Ak(t).then(n=>{sE(_3,n,e).then(()=>{k1.push(Vr||"/"),c()}).catch(r=>{a("Wrong email or password")})}).catch(n=>{a(n)})})}async function xk(t,e,c){return(await mh(c6(Le,e).withConverter(Pt))).exists()?Promise.reject("Username already taken"):new Promise((n,r)=>{rE(_3,t,c).then(async s=>{const i=s.user;oE(i,{displayName:e}).catch(l=>r(l));const o=c6(Le,e).withConverter(Pt);await St(o,new v6(t,e))}).catch(s=>{const i=s.code;i=="auth/email-already-in-use"?r("Email already in use"):i=="auth/invalid-email"?r("Invalid email"):i=="auth/weak-password"?r("Password is too weak"):r(i)})})}function Ak(t){const e=a6(Le,m3("username","==",t)).withConverter(Pt);return new Promise((c,a)=>{y3(e).then(n=>{n.docs.length==0&&a("No user found"),c(n.docs[0].data().email)}).catch(n=>{a(n)})})}const Sk="/Listed/assets/logo-no-background-58e4961e.png",Tk={},Nk={class:"button rounded-3xl h-10"};function Ek(t,e){const c=X3("font-awesome-icon"),a=X3("router-link");return S(),a4(a,{to:"/post"},{default:k2(()=>[g("button",Nk,[Q(c,{icon:["fas","plus"]})])]),_:1})}const kk=Sa(Tk,[["render",Ek]]),Ik={};function Rk(t,e){return S(),I("div")}const Pk=Sa(Ik,[["render",Rk]]),Dk={class:"m-auto"},Fk={__name:"ActionBar",setup(t){return(e,c)=>(S(),I("div",Dk,[Q(kk),Q(Pk)]))}},Ok={key:0,class:"flex"},Uk={key:1,class:"flex"},Bk={__name:"Profile",props:{user:{type:v6,required:!1,default:null}},setup(t){const e=t;function c(){k1.push({name:"User",params:{username:e.user.username}})}return(a,n)=>t.user?(S(),I("div",Ok,[g("b",{class:"m-auto select-none cursor-pointer hover:text-blue-900",onClick:c},F2(t.user.username),1)])):(S(),I("div",Uk,[g("button",{class:"button m-auto rounded-3xl",onClick:n[0]||(n[0]=r=>K2(k1).push({name:"Login"}))}," Login ")]))}},$k={class:"gap-0 flex w-[85%] h-interact bg-gray-700 bg-opacity-20 hover:bg-opacity-10 rounded-[1.625rem] m-auto"},qk=g("svg",{class:"w-6 h-6",viewBox:"0 0 24 24"},[g("path",{fill:"#9ca3af",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"})],-1),Wk=[qk],jk={__name:"Search",setup(t){const e=e2("");async function c(){const a=e.value;k1.push({name:"List",params:{name:a}})}return(a,n)=>(S(),I("div",$k,[g("button",{type:"submit",name:"searchQuerySubmit",class:"cursor-default bg-none border-none outline-none m-auto ml-5",onClick:c},Wk),v1(g("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>e.value=r),type:"text",name:"searchQueryInput",placeholder:"Search",class:"text-[1rem] bg-gray-700 bg-opacity-0 ml-2 w-full outline-none border-none"},null,512),[[N1,e.value]])]))}},Gk={id:"menubar",class:"flex px-2 py-4 gap-10 bg-white border-b-2 border-black sticky top-0 z-[200] shadow-md mb-4"},Kk={class:"flex gap-3"},g0={__name:"MenuBar",async setup(t){let e,c;const a=e2(([e,c]=R4(()=>Oc()),e=await e,c(),e));return(n,r)=>(S(),I("div",Gk,[g("img",{src:Sk,class:"object-cover w-[190px] cursor-pointer",alt:"listed icon",onClick:r[0]||(r[0]=s=>K2(k1).push("/"))}),Q(jk),g("div",Kk,[Q(Fk),Q(Bk,{user:a.value},null,8,["user"])])]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="firebasestorage.googleapis.com",Zh="storageBucket",Qk=2*60*1e3,Xk=10*60*1e3,Yk=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2 extends y4{constructor(e,c,a=0){super(F5(e),`Firebase Storage: ${c} (${F5(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,P2.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return F5(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var E2;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(E2||(E2={}));function F5(t){return"storage/"+t}function Yn(){const t="An unknown error occurred, please check the error payload for server response.";return new P2(E2.UNKNOWN,t)}function Jk(t){return new P2(E2.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Zk(t){return new P2(E2.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eI(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new P2(E2.UNAUTHENTICATED,t)}function tI(){return new P2(E2.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cI(t){return new P2(E2.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ed(){return new P2(E2.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function td(){return new P2(E2.CANCELED,"User canceled the upload/download.")}function aI(t){return new P2(E2.INVALID_URL,"Invalid URL '"+t+"'.")}function nI(t){return new P2(E2.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rI(){return new P2(E2.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Zh+"' property when initializing the app?")}function cd(){return new P2(E2.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sI(){return new P2(E2.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function iI(){return new P2(E2.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oI(t){return new P2(E2.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function q7(t){return new P2(E2.INVALID_ARGUMENT,t)}function ad(){return new P2(E2.APP_DELETED,"The Firebase app was deleted.")}function lI(t){return new P2(E2.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function K0(t,e){return new P2(E2.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function _0(t){throw new P2(E2.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,c){this.bucket=e,this.path_=c}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,c){let a;try{a=P1.makeFromUrl(e,c)}catch{return new P1(e,"")}if(a.path==="")return a;throw nI(e)}static makeFromUrl(e,c){let a=null;const n="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const s="(/(.*))?$",i=new RegExp("^gs://"+n+s,"i"),o={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const f="v[A-Za-z0-9_]+",u=c.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${u}/${f}/b/${n}/o${h}`,"i"),v={bucket:1,path:3},H=c===Jh?"(?:storage.googleapis.com|storage.cloud.google.com)":c,y="([^?#]*)",V=new RegExp(`^https?://${H}/${n}/${y}`,"i"),b=[{regex:i,indices:o,postModify:r},{regex:d,indices:v,postModify:l},{regex:V,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<b.length;M++){const E=b[M],F=E.regex.exec(e);if(F){const K=F[E.indices.bucket];let a2=F[E.indices.path];a2||(a2=""),a=new P1(K,a2),E.postModify(a);break}}if(a==null)throw aI(e);return a}}class fI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e,c){let a=1,n=null,r=null,s=!1,i=0;function o(){return i===2}let l=!1;function f(...y){l||(l=!0,e.apply(null,y))}function u(y){n=setTimeout(()=>{n=null,t(d,o())},y)}function h(){r&&clearTimeout(r)}function d(y,...V){if(l){h();return}if(y){h(),f.call(null,y,...V);return}if(o()||s){h(),f.call(null,y,...V);return}a<64&&(a*=2);let b;i===1?(i=2,b=0):b=(a+Math.random())*1e3,u(b)}let v=!1;function H(y){v||(v=!0,h(),!l&&(n!==null?(y||(i=2),clearTimeout(n),u(0)):y||(i=1)))}return u(0),r=setTimeout(()=>{s=!0,H(!0)},c),H}function hI(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){return t!==void 0}function mI(t){return typeof t=="function"}function pI(t){return typeof t=="object"&&!Array.isArray(t)}function Uc(t){return typeof t=="string"||t instanceof String}function B9(t){return Jn()&&t instanceof Blob}function Jn(){return typeof Blob<"u"&&!jw()}function $9(t,e,c,a){if(a<e)throw q7(`Invalid value for '${t}'. Expected ${e} or greater.`);if(a>c)throw q7(`Invalid value for '${t}'. Expected ${c} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a8(t,e,c){let a=e;return c==null&&(a=`https://${e}`),`${c}://${a}/v0${t}`}function nd(t){const e=encodeURIComponent;let c="?";for(const a in t)if(t.hasOwnProperty(a)){const n=e(a)+"="+e(t[a]);c=c+n+"&"}return c=c.slice(0,-1),c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q3;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Q3||(Q3={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e){const c=t>=500&&t<600,n=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return c||n||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,c,a,n,r,s,i,o,l,f,u,h=!0){this.url_=e,this.method_=c,this.headers_=a,this.body_=n,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,v)=>{this.resolve_=d,this.reject_=v,this.start_()})}start_(){const e=(a,n)=>{if(n){a(!1,new T8(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const s=i=>{const o=i.loaded,l=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&r.addUploadProgressListener(s),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(s),this.pendingConnection_=null;const i=r.getErrorCode()===Q3.NO_ERROR,o=r.getStatus();if(!i||rd(o,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===Q3.ABORT;a(!1,new T8(!1,null,f));return}const l=this.successCodes_.indexOf(o)!==-1;a(!0,new T8(l,r))})},c=(a,n)=>{const r=this.resolve_,s=this.reject_,i=n.connection;if(n.wasSuccessCode)try{const o=this.callback_(i,i.getResponse());dI(o)?r(o):r()}catch(o){s(o)}else if(i!==null){const o=Yn();o.serverResponse=i.getErrorText(),this.errorCallback_?s(this.errorCallback_(i,o)):s(o)}else if(n.canceled){const o=this.appDelete_?ad():td();s(o)}else{const o=ed();s(o)}};this.canceled_?c(!1,new T8(!1,null,!0)):this.backoffId_=uI(e,c,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class T8{constructor(e,c,a){this.wasSuccessCode=e,this.connection=c,this.canceled=!!a}}function gI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HI(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CI(t,e,c,a,n,r,s=!0){const i=nd(t.urlParams),o=t.url+i,l=Object.assign({},t.headers);return VI(l,e),gI(l,c),HI(l,r),zI(l,a),new vI(o,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yI(...t){const e=MI();if(e!==void 0){const c=new e;for(let a=0;a<t.length;a++)c.append(t[a]);return c.getBlob()}else{if(Jn())return new Blob(t);throw new P2(E2.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _I(t,e,c){return t.webkitSlice?t.webkitSlice(e,c):t.mozSlice?t.mozSlice(e,c):t.slice?t.slice(e,c):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){if(typeof atob>"u")throw oI("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class O5{constructor(e,c){this.data=e,this.contentType=c||null}}function wI(t,e){switch(t){case h4.RAW:return new O5(sd(e));case h4.BASE64:case h4.BASE64URL:return new O5(id(t,e));case h4.DATA_URL:return new O5(xI(e),AI(e))}throw Yn()}function sd(t){const e=[];for(let c=0;c<t.length;c++){let a=t.charCodeAt(c);if(a<=127)e.push(a);else if(a<=2047)e.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(c<t.length-1&&(t.charCodeAt(c+1)&64512)===56320))e.push(239,191,189);else{const r=a,s=t.charCodeAt(++c);a=65536|(r&1023)<<10|s&1023,e.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?e.push(239,191,189):e.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(e)}function bI(t){let e;try{e=decodeURIComponent(t)}catch{throw K0(h4.DATA_URL,"Malformed data URL.")}return sd(e)}function id(t,e){switch(t){case h4.BASE64:{const n=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(n||r)throw K0(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case h4.BASE64URL:{const n=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(n||r)throw K0(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let c;try{c=LI(e)}catch(n){throw n.message.includes("polyfill")?n:K0(t,"Invalid character found")}const a=new Uint8Array(c.length);for(let n=0;n<c.length;n++)a[n]=c.charCodeAt(n);return a}class od{constructor(e){this.base64=!1,this.contentType=null;const c=e.match(/^data:([^,]+)?,/);if(c===null)throw K0(h4.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=c[1]||null;a!=null&&(this.base64=SI(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=e.substring(e.indexOf(",")+1)}}function xI(t){const e=new od(t);return e.base64?id(h4.BASE64,e.rest):bI(e.rest)}function AI(t){return new od(t).contentType}function SI(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e,c){let a=0,n="";B9(e)?(this.data_=e,a=e.size,n=e.type):e instanceof ArrayBuffer?(c?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),a=this.data_.length):e instanceof Uint8Array&&(c?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),a=e.length),this.size_=a,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,c){if(B9(this.data_)){const a=this.data_,n=_I(a,e,c);return n===null?null:new s3(n)}else{const a=new Uint8Array(this.data_.buffer,e,c-e);return new s3(a,!0)}}static getBlob(...e){if(Jn()){const c=e.map(a=>a instanceof s3?a.data_:a);return new s3(yI.apply(null,c))}else{const c=e.map(s=>Uc(s)?wI(h4.RAW,s).data:s.data_);let a=0;c.forEach(s=>{a+=s.byteLength});const n=new Uint8Array(a);let r=0;return c.forEach(s=>{for(let i=0;i<s.length;i++)n[r++]=s[i]}),new s3(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){let e;try{e=JSON.parse(t)}catch{return null}return pI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NI(t,e){const c=e.split("/").filter(a=>a.length>0).join("/");return t.length===0?c:t+"/"+c}function fd(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e){return e}class M1{constructor(e,c,a,n){this.server=e,this.local=c||e,this.writable=!!a,this.xform=n||EI}}let N8=null;function kI(t){return!Uc(t)||t.length<2?t:fd(t)}function ud(){if(N8)return N8;const t=[];t.push(new M1("bucket")),t.push(new M1("generation")),t.push(new M1("metageneration")),t.push(new M1("name","fullPath",!0));function e(r,s){return kI(s)}const c=new M1("name");c.xform=e,t.push(c);function a(r,s){return s!==void 0?Number(s):s}const n=new M1("size");return n.xform=a,t.push(n),t.push(new M1("timeCreated")),t.push(new M1("updated")),t.push(new M1("md5Hash",null,!0)),t.push(new M1("cacheControl",null,!0)),t.push(new M1("contentDisposition",null,!0)),t.push(new M1("contentEncoding",null,!0)),t.push(new M1("contentLanguage",null,!0)),t.push(new M1("contentType",null,!0)),t.push(new M1("metadata","customMetadata",!0)),N8=t,N8}function II(t,e){function c(){const a=t.bucket,n=t.fullPath,r=new P1(a,n);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:c})}function RI(t,e,c){const a={};a.type="file";const n=c.length;for(let r=0;r<n;r++){const s=c[r];a[s.local]=s.xform(a,e[s.server])}return II(a,t),a}function hd(t,e,c){const a=ld(e);return a===null?null:RI(t,a,c)}function PI(t,e,c,a){const n=ld(e);if(n===null||!Uc(n.downloadTokens))return null;const r=n.downloadTokens;if(r.length===0)return null;const s=encodeURIComponent;return r.split(",").map(l=>{const f=t.bucket,u=t.fullPath,h="/b/"+s(f)+"/o/"+s(u),d=a8(h,c,a),v=nd({alt:"media",token:l});return d+v})[0]}function dd(t,e){const c={},a=e.length;for(let n=0;n<a;n++){const r=e[n];r.writable&&(c[r.server]=t[r.local])}return JSON.stringify(c)}class H0{constructor(e,c,a,n){this.url=e,this.method=c,this.handler=a,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(t){if(!t)throw Yn()}function Zn(t,e){function c(a,n){const r=hd(t,n,e);return k4(r!==null),r}return c}function DI(t,e){function c(a,n){const r=hd(t,n,e);return k4(r!==null),PI(r,n,t.host,t._protocol)}return c}function n8(t){function e(c,a){let n;return c.getStatus()===401?c.getErrorText().includes("Firebase App Check token is invalid")?n=tI():n=eI():c.getStatus()===402?n=Zk(t.bucket):c.getStatus()===403?n=cI(t.path):n=a,n.status=c.getStatus(),n.serverResponse=a.serverResponse,n}return e}function md(t){const e=n8(t);function c(a,n){let r=e(a,n);return a.getStatus()===404&&(r=Jk(t.path)),r.serverResponse=n.serverResponse,r}return c}function FI(t,e,c){const a=e.fullServerUrl(),n=a8(a,t.host,t._protocol),r="GET",s=t.maxOperationRetryTime,i=new H0(n,r,Zn(t,c),s);return i.errorHandler=md(e),i}function OI(t,e,c){const a=e.fullServerUrl(),n=a8(a,t.host,t._protocol),r="GET",s=t.maxOperationRetryTime,i=new H0(n,r,DI(t,c),s);return i.errorHandler=md(e),i}function UI(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function pd(t,e,c){const a=Object.assign({},c);return a.fullPath=t.path,a.size=e.size(),a.contentType||(a.contentType=UI(null,e)),a}function BI(t,e,c,a,n){const r=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function i(){let b="";for(let M=0;M<2;M++)b=b+Math.random().toString().slice(2);return b}const o=i();s["Content-Type"]="multipart/related; boundary="+o;const l=pd(e,a,n),f=dd(l,c),u="--"+o+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+o+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+o+"--",d=s3.getBlob(u,a,h);if(d===null)throw cd();const v={name:l.fullPath},H=a8(r,t.host,t._protocol),y="POST",V=t.maxUploadRetryTime,C=new H0(H,y,Zn(t,c),V);return C.urlParams=v,C.headers=s,C.body=d.uploadData(),C.errorHandler=n8(e),C}class Dt{constructor(e,c,a,n){this.current=e,this.total=c,this.finalized=!!a,this.metadata=n||null}}function er(t,e){let c=null;try{c=t.getResponseHeader("X-Goog-Upload-Status")}catch{k4(!1)}return k4(!!c&&(e||["active"]).indexOf(c)!==-1),c}function $I(t,e,c,a,n){const r=e.bucketOnlyServerUrl(),s=pd(e,a,n),i={name:s.fullPath},o=a8(r,t.host,t._protocol),l="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${a.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},u=dd(s,c),h=t.maxUploadRetryTime;function d(H){er(H);let y;try{y=H.getResponseHeader("X-Goog-Upload-URL")}catch{k4(!1)}return k4(Uc(y)),y}const v=new H0(o,l,d,h);return v.urlParams=i,v.headers=f,v.body=u,v.errorHandler=n8(e),v}function qI(t,e,c,a){const n={"X-Goog-Upload-Command":"query"};function r(l){const f=er(l,["active","final"]);let u=null;try{u=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{k4(!1)}u||k4(!1);const h=Number(u);return k4(!isNaN(h)),new Dt(h,a.size(),f==="final")}const s="POST",i=t.maxUploadRetryTime,o=new H0(c,s,r,i);return o.headers=n,o.errorHandler=n8(e),o}const q9=256*1024;function WI(t,e,c,a,n,r,s,i){const o=new Dt(0,0);if(s?(o.current=s.current,o.total=s.total):(o.current=0,o.total=a.size()),a.size()!==o.total)throw sI();const l=o.total-o.current;let f=l;n>0&&(f=Math.min(f,n));const u=o.current,h=u+f;let d="";f===0?d="finalize":l===f?d="upload, finalize":d="upload";const v={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${o.current}`},H=a.slice(u,h);if(H===null)throw cd();function y(M,E){const F=er(M,["active","final"]),K=o.current+f,a2=a.size();let i2;return F==="final"?i2=Zn(e,r)(M,E):i2=null,new Dt(K,a2,F==="final",i2)}const V="POST",C=e.maxUploadRetryTime,b=new H0(c,V,y,C);return b.headers=v,b.body=H.uploadData(),b.progressCallback=i||null,b.errorHandler=n8(t),b}const A1={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function U5(t){switch(t){case"running":case"pausing":case"canceling":return A1.RUNNING;case"paused":return A1.PAUSED;case"success":return A1.SUCCESS;case"canceled":return A1.CANCELED;case"error":return A1.ERROR;default:return A1.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,c,a){if(mI(e)||c!=null||a!=null)this.next=e,this.error=c??void 0,this.complete=a??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M6(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class GI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Q3.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Q3.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Q3.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,c,a,n){if(this.sent_)throw _0("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(c,e,!0),n!==void 0)for(const r in n)n.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,n[r].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _0("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _0("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _0("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _0("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KI extends GI{initXhr(){this.xhr_.responseType="text"}}function w6(){return new KI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,c,a=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=c,this._metadata=a,this._mappings=ud(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=n=>{if(this._request=void 0,this._chunkMultiplier=1,n._codeEquals(E2.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(rd(n.status,[]))if(r)n=ed();else{this.sleepTime=Math.max(this.sleepTime*2,Yk),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=n,this._transition("error")}},this._metadataErrorHandler=n=>{this._request=void 0,n._codeEquals(E2.CANCELED)?this.completeTransitions_():(this._error=n,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((n,r)=>{this._resolve=n,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return c=>this._updateProgress(e+c)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([c,a])=>{switch(this._state){case"running":e(c,a);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,c)=>{const a=$I(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(a,w6,e,c);this._request=n,n.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((c,a)=>{const n=qI(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(n,w6,c,a);this._request=r,r.getPromise().then(s=>{s=s,this._request=void 0,this._updateProgress(s.current),this._needToFetchStatus=!1,s.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=q9*this._chunkMultiplier,c=new Dt(this._transferred,this._blob.size()),a=this._uploadUrl;this._resolveToken((n,r)=>{let s;try{s=WI(this._ref._location,this._ref.storage,a,this._blob,e,this._mappings,c,this._makeProgressCallback())}catch(o){this._error=o,this._transition("error");return}const i=this._ref.storage._makeRequest(s,w6,n,r,!1);this._request=i,i.getPromise().then(o=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(o.current),o.finalized?(this._metadata=o.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){q9*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,c)=>{const a=FI(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(a,w6,e,c);this._request=n,n.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,c)=>{const a=BI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(a,w6,e,c);this._request=n,n.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const c=this._transferred;this._transferred=e,this._transferred!==c&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const c=this._state==="paused";this._state=e,c&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=td(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=U5(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,c,a,n){const r=new jI(c||void 0,a||void 0,n||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,c){return this._promise.then(e,c)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const c=this._observers.indexOf(e);c!==-1&&this._observers.splice(c,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(c=>{this._notifyObserver(c)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(U5(this._state)){case A1.SUCCESS:M6(this._resolve.bind(null,this.snapshot))();break;case A1.CANCELED:case A1.ERROR:const c=this._reject;M6(c.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(U5(this._state)){case A1.RUNNING:case A1.PAUSED:e.next&&M6(e.next.bind(e,this.snapshot))();break;case A1.SUCCESS:e.complete&&M6(e.complete.bind(e))();break;case A1.CANCELED:case A1.ERROR:e.error&&M6(e.error.bind(e,this._error))();break;default:e.error&&M6(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e,c){this._service=e,c instanceof P1?this._location=c:this._location=P1.makeFromUrl(c,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,c){return new s6(e,c)}get root(){const e=new P1(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fd(this._location.path)}get storage(){return this._service}get parent(){const e=TI(this._location.path);if(e===null)return null;const c=new P1(this._location.bucket,e);return new s6(this._service,c)}_throwIfRoot(e){if(this._location.path==="")throw lI(e)}}function XI(t,e,c){return t._throwIfRoot("uploadBytesResumable"),new QI(t,new s3(e),c)}function YI(t){t._throwIfRoot("getDownloadURL");const e=OI(t.storage,t._location,ud());return t.storage.makeRequestWithTokens(e,w6).then(c=>{if(c===null)throw iI();return c})}function JI(t,e){const c=NI(t._location.path,e),a=new P1(t._location.bucket,c);return new s6(t.storage,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){return/^[A-Za-z]+:\/\//.test(t)}function eR(t,e){return new s6(t,e)}function vd(t,e){if(t instanceof tr){const c=t;if(c._bucket==null)throw rI();const a=new s6(c,c._bucket);return e!=null?vd(a,e):a}else return e!==void 0?JI(t,e):t}function tR(t,e){if(e&&ZI(e)){if(t instanceof tr)return eR(t,e);throw q7("To use ref(service, url), the first argument must be a Storage instance.")}else return vd(t,e)}function W9(t,e){const c=e==null?void 0:e[Zh];return c==null?null:P1.makeFromBucketSpec(c,t)}function cR(t,e,c,a={}){t.host=`${e}:${c}`,t._protocol="http";const{mockUserToken:n}=a;n&&(t._overrideAuthToken=typeof n=="string"?n:Bl(n,t.app.options.projectId))}class tr{constructor(e,c,a,n,r){this.app=e,this._authProvider=c,this._appCheckProvider=a,this._url=n,this._firebaseVersion=r,this._bucket=null,this._host=Jh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qk,this._maxUploadRetryTime=Xk,this._requests=new Set,n!=null?this._bucket=P1.makeFromBucketSpec(n,this._host):this._bucket=W9(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=P1.makeFromBucketSpec(this._url,e):this._bucket=W9(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$9("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$9("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const c=await e.getToken();if(c!==null)return c.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new s6(this,e)}_makeRequest(e,c,a,n,r=!0){if(this._deleted)return new fI(ad());{const s=CI(e,this._appId,a,n,c,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,c){const[a,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,c,a,n).getPromise()}}const j9="@firebase/storage",G9="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="storage";function aR(t,e,c){return t=I2(t),XI(t,e,c)}function Hd(t){return t=I2(t),YI(t)}function cr(t,e){return t=I2(t),tR(t,e)}function nR(t=Ra(),e){t=I2(t);const a=nc(t,gd).getImmediate({identifier:e}),n=Fl("storage");return n&&rR(a,...n),a}function rR(t,e,c,a={}){cR(t,e,c,a)}function sR(t,{instanceIdentifier:e}){const c=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),n=t.getProvider("app-check-internal");return new tr(c,a,n,e,f6)}function iR(){J3(new V3(gd,sR,"PUBLIC").setMultipleInstances(!0)),p4(j9,G9,""),p4(j9,G9,"esm2017")}iR();const ar=nR();/*! Fast Average Color | © 2023 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function oR(t){var e=t.toString(16);return e.length===1?"0"+e:e}function K9(t){return"#"+t.map(oR).join("")}function lR(t){var e=(t[0]*299+t[1]*587+t[2]*114)/1e3;return e<128}function fR(t){return t?uR(t)?t:[t]:[]}function uR(t){return Array.isArray(t[0])}function nr(t,e,c){for(var a=0;a<c.length;a++)if(hR(t,e,c[a]))return!0;return!1}function hR(t,e,c){switch(c.length){case 3:if(dR(t,e,c))return!0;break;case 4:if(mR(t,e,c))return!0;break;case 5:if(pR(t,e,c))return!0;break;default:return!1}}function dR(t,e,c){return t[e+3]!==255||t[e]===c[0]&&t[e+1]===c[1]&&t[e+2]===c[2]}function mR(t,e,c){return t[e+3]&&c[3]?t[e]===c[0]&&t[e+1]===c[1]&&t[e+2]===c[2]&&t[e+3]===c[3]:t[e+3]===c[3]}function E8(t,e,c){return t>=e-c&&t<=e+c}function pR(t,e,c){var a=c[0],n=c[1],r=c[2],s=c[3],i=c[4],o=t[e+3],l=E8(o,s,i);return s?!!(!o&&l||E8(t[e],a,i)&&E8(t[e+1],n,i)&&E8(t[e+2],r,i)&&l):l}var vR=24;function gR(t,e,c){for(var a={},n=c.dominantDivider||vR,r=c.ignoredColor,s=c.step,i=[0,0,0,0,0],o=0;o<e;o+=s){var l=t[o],f=t[o+1],u=t[o+2],h=t[o+3];if(!(r&&nr(t,o,r))){var d=Math.round(l/n)+","+Math.round(f/n)+","+Math.round(u/n);a[d]?a[d]=[a[d][0]+l*h,a[d][1]+f*h,a[d][2]+u*h,a[d][3]+h,a[d][4]+1]:a[d]=[l*h,f*h,u*h,h,1],i[4]<a[d][4]&&(i=a[d])}}var v=i[0],H=i[1],y=i[2],V=i[3],C=i[4];return V?[Math.round(v/V),Math.round(H/V),Math.round(y/V),Math.round(V/C)]:c.defaultColor}function HR(t,e,c){for(var a=0,n=0,r=0,s=0,i=0,o=c.ignoredColor,l=c.step,f=0;f<e;f+=l){var u=t[f+3],h=t[f]*u,d=t[f+1]*u,v=t[f+2]*u;o&&nr(t,f,o)||(a+=h,n+=d,r+=v,s+=u,i++)}return s?[Math.round(a/s),Math.round(n/s),Math.round(r/s),Math.round(s/i)]:c.defaultColor}function VR(t,e,c){for(var a=0,n=0,r=0,s=0,i=0,o=c.ignoredColor,l=c.step,f=0;f<e;f+=l){var u=t[f],h=t[f+1],d=t[f+2],v=t[f+3];o&&nr(t,f,o)||(a+=u*u*v,n+=h*h*v,r+=d*d*v,s+=v,i++)}return s?[Math.round(Math.sqrt(a/s)),Math.round(Math.sqrt(n/s)),Math.round(Math.sqrt(r/s)),Math.round(s/i)]:c.defaultColor}function Q9(t){return I0(t,"defaultColor",[0,0,0,0])}function I0(t,e,c){return t[e]===void 0?c:t[e]}var X9=10,W7=100;function zR(t){return t.search(/\.svg(\?|$)/i)!==-1}function CR(t){if(Vd(t)){var e=t.naturalWidth,c=t.naturalHeight;return!t.naturalWidth&&zR(t.src)&&(e=c=W7),{width:e,height:c}}return yR(t)?{width:t.videoWidth,height:t.videoHeight}:{width:t.width,height:t.height}}function Y9(t){return _R(t)?"canvas":MR(t)?"offscreencanvas":LR(t)?"imagebitmap":t.src}function Vd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement}var zd=typeof OffscreenCanvas<"u";function MR(t){return zd&&t instanceof OffscreenCanvas}function yR(t){return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement}function _R(t){return typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement}function LR(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap}function wR(t,e){var c=I0(e,"left",0),a=I0(e,"top",0),n=I0(e,"width",t.width),r=I0(e,"height",t.height),s=n,i=r;if(e.mode==="precision")return{srcLeft:c,srcTop:a,srcWidth:n,srcHeight:r,destWidth:s,destHeight:i};var o;return n>r?(o=n/r,s=W7,i=Math.round(s/o)):(o=r/n,i=W7,s=Math.round(i/o)),(s>n||i>r||s<X9||i<X9)&&(s=n,i=r),{srcLeft:c,srcTop:a,srcWidth:n,srcHeight:r,destWidth:s,destHeight:i}}var bR=typeof window>"u";function xR(){return bR?zd?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var AR="FastAverageColor: ";function i4(t){return Error(AR+t)}function L0(t,e){e||console.error(t)}var SR=function(){function t(){this.canvas=null,this.ctx=null}return t.prototype.getColorAsync=function(e,c){if(!e)return Promise.reject(i4("call .getColorAsync() without resource"));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(i4("resource as string is not supported in this environment"));var a=new Image;return a.crossOrigin=c&&c.crossOrigin||"",a.src=e,this.bindImageEvents(a,c)}else{if(Vd(e)&&!e.complete)return this.bindImageEvents(e,c);var n=this.getColor(e,c);return n.error?Promise.reject(n.error):Promise.resolve(n)}},t.prototype.getColor=function(e,c){c=c||{};var a=Q9(c);if(!e){var n=i4("call .getColor() without resource");return L0(n,c.silent),this.prepareResult(a,n)}var r=CR(e),s=wR(r,c);if(!s.srcWidth||!s.srcHeight||!s.destWidth||!s.destHeight){var n=i4('incorrect sizes for resource "'.concat(Y9(e),'"'));return L0(n,c.silent),this.prepareResult(a,n)}if(!this.canvas&&(this.canvas=xR(),!this.canvas)){var n=i4("OffscreenCanvas is not supported in this browser");return L0(n,c.silent),this.prepareResult(a,n)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var n=i4("Canvas Context 2D is not supported in this browser");return L0(n,c.silent),this.prepareResult(a)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=s.destWidth,this.canvas.height=s.destHeight;try{this.ctx.clearRect(0,0,s.destWidth,s.destHeight),this.ctx.drawImage(e,s.srcLeft,s.srcTop,s.srcWidth,s.srcHeight,0,0,s.destWidth,s.destHeight);var i=this.ctx.getImageData(0,0,s.destWidth,s.destHeight).data;return this.prepareResult(this.getColorFromArray4(i,c))}catch(o){var n=i4("security error (CORS) for resource ".concat(Y9(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return L0(n,c.silent),!c.silent&&console.error(o),this.prepareResult(a,n)}},t.prototype.getColorFromArray4=function(e,c){c=c||{};var a=4,n=e.length,r=Q9(c);if(n<a)return r;var s=n-n%a,i=(c.step||1)*a,o;switch(c.algorithm||"sqrt"){case"simple":o=HR;break;case"sqrt":o=VR;break;case"dominant":o=gR;break;default:throw i4("".concat(c.algorithm," is unknown algorithm"))}return o(e,s,{defaultColor:r,ignoredColor:fR(c.ignoredColor),step:i,dominantDivider:c.dominantDivider})},t.prototype.prepareResult=function(e,c){var a=e.slice(0,3),n=[e[0],e[1],e[2],e[3]/255],r=lR(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+a.join(",")+")",rgba:"rgba("+n.join(",")+")",hex:K9(a),hexa:K9(e),isDark:r,isLight:!r,error:c}},t.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},t.prototype.bindImageEvents=function(e,c){var a=this;return new Promise(function(n,r){var s=function(){l();var f=a.getColor(e,c);f.error?r(f.error):n(f)},i=function(){l(),r(i4('Error loading image "'.concat(e.src,'"')))},o=function(){l(),r(i4('Image "'.concat(e.src,'" loading aborted')))},l=function(){e.removeEventListener("load",s),e.removeEventListener("error",i),e.removeEventListener("abort",o)};e.addEventListener("load",s),e.addEventListener("error",i),e.addEventListener("abort",o)})},t}();const j1={Liked:1,None:0,Disliked:-1};class w3{constructor({title:e="",username:c="",lists:a=[],ID:n="",votes:r=0,created:s=void 0,imageName:i="",interactions:o={},reports:l={},color:f={hex:"#162997",isDark:!0},type:u="image",text:h=""}={}){this.title=e,this.username=c,this.lists=a,this.votes=r,this.created=s,this.ID=n,this.imageName=i,this.interactions=o,this.reports=l,this.color=f,this.type=u,this.text=h}toString(){return this.title+", "+this.username+", "+this.votes+", "+this.created+", "+this.list+", "+this.ID+", "+this.imageName+", "+this.interactions+", "+this.reports+", "+this.color+", "+this.type+", "+this.text}Interact(e,c){this.interactions[c.username]===e?(this.votes-=e,this.interactions[c.username]=j1.None):this.interactions[c.username]!==j1.None&&this.interactions[c.username]!==void 0?(this.votes+=2*e,this.interactions[c.username]=e):(this.interactions[c.username]=e,this.votes+=e),this.interactions[c.username]===j1.None&&delete this.interactions[c.username],this.UpdatePost({votes:this.votes,interactions:this.interactions})}Report(e,c){this.reports[c.username]=e,this.UpdatePost({reports:this.reports})}async UpdatePost(e){const c=c6(L3,this.ID);await J8(c,e)}async post(e,c){const a=c6(L3).withConverter(i6);if(this.ID=a.id,this.type==="image"){this.color=await TR(e);const n=cr(ar,`/uploads/${this.ID}/${e.name}`);aR(n,e).on("state_changed",s=>c.value=Math.round(s.bytesTransferred/s.totalBytes*100),s=>console.log(s),async()=>{await St(a,this),await J8(a,{created:_9()}),k1.push("/")})}else this.type==="text"&&(await St(a,this),await J8(a,{created:_9()}),k1.push("/"))}}async function TR(t){const e=URL.createObjectURL(t);return new SR().getColorAsync(e,{algorithm:"sqrt"})}const i6={toFirestore:t=>JSON.parse(JSON.stringify(t)),fromFirestore:(t,e)=>{const c=t.data(e);return new w3(JSON.parse(JSON.stringify(c)))}},NR={class:"bg-transparent rounded-[0.6rem] transition-all duration-200 ease-in-out"},ER={class:"flex items-center gap-2"},kR=g("img",{class:"w-10 h-10 rounded-full object-cover p-2",src:"https://source.unsplash.com/random",alt:"profile photo"},null,-1),IR={class:"ml-[-0.5rem] hover:underline"},RR={class:"flex"},PR={class:"flex hover:underline"},DR={key:0,class:"text-primary object-cover w-5 h-5 mt-1",width:"8",height:"17",viewBox:"0 0 8 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},FR=g("rect",{x:"6",width:"2.5",height:"17",rx:"1",transform:"rotate(20 6 0)",fill:"#162997"},null,-1),OR=[FR],UR={class:"pl-2 text-2xl"},BR={__name:"Title",props:{post:{type:w3,required:!0}},setup(t){function e(c){const a=Math.floor(Date.now()/1e3-c),n=Math.floor(a/60),r=Math.floor(n/60),s=Math.floor(r/24),i=Math.floor(s/30),o=Math.floor(i/12);return n<60?n+"m":r<24?r+"h":s<30?s+"d":i<12?i+"m":o+"y"}return(c,a)=>{const n=X3("router-link"),r=X3("font-awesome-icon");return S(),I("div",NR,[g("div",ER,[Q(n,{class:"flex items-center gap-1 hover:underline",to:{name:"User",params:{username:t.post.username}}},{default:k2(()=>[kR,g("div",IR,F2(t.post.username),1)]),_:1},8,["to"]),Q(r,{icon:["fas","circle"],class:"w-2 text-primary"}),g("div",null,F2(e(t.post.created.seconds))+" ago ",1),Q(r,{icon:["fas","circle"],class:"w-2 text-primary"}),g("div",RR,[(S(!0),I(z2,null,v3(t.post.lists,(s,i)=>(S(),I("h3",{key:s},[g("div",PR,[Q(n,{to:{name:"List",params:{name:s}}},{default:k2(()=>[g3(F2(s),1)]),_:2},1032,["to"]),i<t.post.lists.length-1?(S(),I("svg",DR,OR)):$2("",!0)])]))),128))])]),g("div",UR,F2(t.post.title),1)])}}},$R={key:0,class:"relative to-transparent from-black h-[66px] mt-[-66px] md px-md bg-gradient-to-t rounded-lg opacity-60"},qR={key:1,class:"relative to-transparent from-white h-[66px] mt-[-66px] md px-md bg-gradient-to-t rounded-lg opacity-60"},WR={class:"absolute z-10 bottom-0 left-0 flex gap-2 items-center p-2"},jR={key:0},GR=g("svg",{width:"45",height:"45",viewBox:"0 0 27 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M11.7506 21.4383C12.1777 21.9721 12.3912 22.239 12.6492 22.3357C12.8754 22.4204 13.1246 22.4204 13.3508 22.3357C13.6088 22.239 13.8223 21.9721 14.2494 21.4383L14.9204 20.5995C15.5861 19.7673 15.919 19.3513 15.9194 19.0011C15.9197 18.6965 15.7812 18.4084 15.5432 18.2185C15.2696 18 14.7367 18 13.671 18H12.329C11.2633 18 10.7304 18 10.4568 18.2185C10.2188 18.4084 10.0803 18.6965 10.0806 19.0011C10.081 19.3513 10.4139 19.7673 11.0796 20.5995L11.7506 21.4383Z",fill:"#061A86"}),g("path",{d:"M10.956 9.32147C11.6324 8.22228 11.9707 7.67269 12.4053 7.48498C12.7848 7.32109 13.2152 7.32109 13.5947 7.48498C14.0293 7.67269 14.3676 8.22228 15.044 9.32147L18.749 15.3422C19.4845 16.5373 19.8522 17.1349 19.8102 17.6275C19.7736 18.0569 19.554 18.4498 19.2075 18.7061C18.81 19 18.1084 19 16.705 19H9.29495C7.89164 19 7.18998 19 6.79249 18.7061C6.44596 18.4498 6.2264 18.0569 6.18977 17.6275C6.14776 17.1349 6.5155 16.5373 7.25097 15.3422L10.956 9.32147Z",fill:"white"})],-1),KR=[GR],QR={key:1},XR=g("svg",{width:"45",height:"45",viewBox:"0 0 27 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M11.6687 23.0031C12.1138 23.6708 12.3364 24.0046 12.6169 24.1209C12.8622 24.2227 13.1378 24.2227 13.3831 24.1209C13.6636 24.0046 13.8862 23.6708 14.3313 23.0031L14.9012 22.1482C15.2918 21.5623 15.4871 21.2694 15.5276 21.0868C15.6617 20.4815 15.2185 19.9013 14.5993 19.8715C14.4125 19.8625 14.0785 19.9738 13.4105 20.1965C13.3173 20.2276 13.2707 20.2431 13.2239 20.2539C13.0765 20.2877 12.9235 20.2877 12.7761 20.2539C12.7293 20.2431 12.6827 20.2276 12.5895 20.1965C11.9215 19.9738 11.5875 19.8625 11.4007 19.8715C10.7815 19.9013 10.3383 20.4815 10.4724 21.0868C10.5129 21.2694 10.7082 21.5623 11.0988 22.1482L11.6687 23.0031Z",fill:"#061A86"}),g("path",{d:"M10.956 8.32147C11.6324 7.22228 11.9707 6.67269 12.4053 6.48498C12.7848 6.32109 13.2152 6.32109 13.5947 6.48498C14.0293 6.67269 14.3676 7.22228 15.044 8.32147L18.749 14.3422C19.4845 15.5373 19.8522 16.1349 19.8102 16.6275C19.7736 17.0569 19.554 17.4498 19.2075 17.7061C18.81 18 18.1084 18 16.705 18H9.29495C7.89164 18 7.18998 18 6.79249 17.7061C6.44596 17.4498 6.2264 17.0569 6.18977 16.6275C6.14776 16.1349 6.5155 15.5373 7.25097 14.3422L10.956 8.32147Z",fill:"white"})],-1),YR=[XR],JR={key:2},ZR=g("svg",{width:"45",height:"45",viewBox:"0 0 27 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M11.7506 22.4383C12.1777 22.9721 12.3912 23.239 12.6492 23.3357C12.8754 23.4204 13.1246 23.4204 13.3508 23.3357C13.6088 23.239 13.8223 22.9721 14.2494 22.4383L14.9204 21.5995C15.5861 20.7673 15.919 20.3513 15.9194 20.0011C15.9197 19.6965 15.7812 19.4084 15.5432 19.2185C15.2696 19 14.7367 19 13.671 19H12.329C11.2633 19 10.7304 19 10.4568 19.2185C10.2188 19.4084 10.0803 19.6965 10.0806 20.0011C10.081 20.3513 10.4139 20.7673 11.0796 21.5995L11.7506 22.4383Z",fill:"#061A86"}),g("path",{d:"M10.956 10.3215C11.6324 9.22228 11.9707 8.67269 12.4053 8.48498C12.7848 8.32109 13.2152 8.32109 13.5947 8.48498C14.0293 8.67269 14.3676 9.22228 15.044 10.3215L18.749 16.3422C19.4845 17.5373 19.8522 18.1349 19.8102 18.6275C19.7736 19.0569 19.554 19.4498 19.2075 19.7061C18.81 20 18.1084 20 16.705 20H9.29495C7.89164 20 7.18998 20 6.79249 19.7061C6.44596 19.4498 6.2264 19.0569 6.18977 18.6275C6.14776 18.1349 6.5155 17.5373 7.25097 16.3422L10.956 10.3215Z",fill:"#061A86"})],-1),eP=[ZR],tP={key:0},cP=g("svg",{width:"45",height:"45",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M12.7506 7.56174C13.1777 7.02789 13.3912 6.76097 13.6492 6.66433C13.8754 6.5796 14.1246 6.5796 14.3508 6.66433C14.6088 6.76097 14.8223 7.02789 15.2494 7.56174L15.9204 8.40049C16.5861 9.23266 16.919 9.64875 16.9194 9.99892C16.9197 10.3035 16.7812 10.5916 16.5432 10.7815C16.2696 11 15.7367 11 14.671 11H13.329C12.2633 11 11.7304 11 11.4568 10.7815C11.2188 10.5916 11.0803 10.3035 11.0806 9.99892C11.081 9.64875 11.4139 9.23266 12.0796 8.40049L12.7506 7.56174Z",fill:"#061A86"}),g("path",{d:"M11.956 19.6785C12.6324 20.7777 12.9707 21.3273 13.4053 21.515C13.7848 21.6789 14.2152 21.6789 14.5947 21.515C15.0293 21.3273 15.3676 20.7777 16.044 19.6785L19.749 13.6578C20.4845 12.4627 20.8522 11.8651 20.8102 11.3725C20.7736 10.9431 20.554 10.5502 20.2075 10.2939C19.81 10 19.1084 10 17.705 10H10.295C8.89164 10 8.18998 10 7.79249 10.2939C7.44596 10.5502 7.2264 10.9431 7.18977 11.3725C7.14776 11.8651 7.5155 12.4627 8.25097 13.6578L11.956 19.6785Z",fill:"white"})],-1),aP=[cP],nP={key:1},rP=g("svg",{width:"45",height:"45",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M12.8259 7.76114C13.1297 7.30549 13.2816 7.07767 13.453 6.96564C13.7853 6.74849 14.2147 6.74849 14.547 6.96564C14.7184 7.07767 14.8703 7.3055 15.1741 7.76114L15.8296 8.74443C15.9616 8.94241 16.0276 9.0414 16.0527 9.08978C16.4694 9.89204 15.6923 10.7915 14.838 10.4957C14.7865 10.4778 14.679 10.4269 14.4639 10.325C14.4289 10.3084 14.4113 10.3001 14.3943 10.2928C14.1425 10.1848 13.8575 10.1848 13.6057 10.2928C13.5887 10.3001 13.5711 10.3084 13.5361 10.325C13.321 10.4269 13.2135 10.4778 13.162 10.4957C12.3077 10.7915 11.5306 9.89204 11.9473 9.08978C11.9724 9.0414 12.0384 8.94241 12.1704 8.74443L12.8259 7.76114Z",fill:"#061A86"}),g("path",{d:"M11.956 21.6785C12.6324 22.7777 12.9707 23.3273 13.4053 23.515C13.7848 23.6789 14.2152 23.6789 14.5947 23.515C15.0293 23.3273 15.3676 22.7777 16.044 21.6785L19.749 15.6578C20.4845 14.4627 20.8522 13.8651 20.8102 13.3725C20.7736 12.9431 20.554 12.5502 20.2075 12.2939C19.81 12 19.1084 12 17.705 12H10.295C8.89164 12 8.18998 12 7.79249 12.2939C7.44596 12.5502 7.2264 12.9431 7.18977 13.3725C7.14776 13.8651 7.5155 14.4627 8.25097 15.6578L11.956 21.6785Z",fill:"white"})],-1),sP=[rP],iP={key:2},oP=g("svg",{width:"45",height:"45",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M12.7506 8.56174C13.1777 8.02789 13.3912 7.76097 13.6492 7.66433C13.8754 7.5796 14.1246 7.5796 14.3508 7.66433C14.6088 7.76097 14.8223 8.02789 15.2494 8.56174L15.9204 9.40049C16.5861 10.2327 16.919 10.6487 16.9194 10.9989C16.9197 11.3035 16.7812 11.5916 16.5432 11.7815C16.2696 12 15.7367 12 14.671 12H13.329C12.2633 12 11.7304 12 11.4568 11.7815C11.2188 11.5916 11.0803 11.3035 11.0806 10.9989C11.081 10.6487 11.4139 10.2327 12.0796 9.40049L12.7506 8.56174Z",fill:"#061A86"}),g("path",{d:"M11.956 20.6785C12.6324 21.7777 12.9707 22.3273 13.4053 22.515C13.7848 22.6789 14.2152 22.6789 14.5947 22.515C15.0293 22.3273 15.3676 21.7777 16.044 20.6785L19.749 14.6578C20.4845 13.4627 20.8522 12.8651 20.8102 12.3725C20.7736 11.9431 20.554 11.5502 20.2075 11.2939C19.81 11 19.1084 11 17.705 11H10.295C8.89164 11 8.18998 11 7.79249 11.2939C7.44596 11.5502 7.2264 11.9431 7.18977 12.3725C7.14776 12.8651 7.5155 13.4627 8.25097 14.6578L11.956 20.6785Z",fill:"#061A86"})],-1),lP=[oP],fP={class:"p-2 absolute right-0 bottom-0 transition-all duration-200 ease-in-out"},uP={key:0},hP=g("svg",{width:"50",height:"50",viewBox:"0 0 30 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M12.5335 21.6525L14.8701 21.0285C16.1293 20.6922 16.7589 20.524 16.9645 20.2655C17.2362 19.924 17.2547 19.4459 17.0103 19.0844C16.8253 18.8108 16.2091 18.594 14.9768 18.1606L14.9768 18.1606L14.9768 18.1606C14.758 18.0836 14.6485 18.0451 14.5547 17.9864C14.425 17.9054 14.3157 17.7958 14.2351 17.666C14.1767 17.572 14.1387 17.4628 14.0626 17.2443C13.6439 16.0422 13.4346 15.4412 13.1702 15.256C12.8044 14.9997 12.3128 15.0167 11.9657 15.2978C11.7148 15.5008 11.5477 16.1149 11.2134 17.343L10.5752 19.6882C10.3357 20.568 10.216 21.0079 10.3318 21.3119C10.4329 21.577 10.642 21.7867 10.9069 21.8888C11.2108 22.0058 11.6517 21.888 12.5335 21.6525L12.5335 21.6525Z",fill:"#061A86"}),g("path",{d:"M17.5982 11.5282L11.5012 13.1565C9.23838 13.7609 8.10699 14.063 7.79405 14.5763C7.52364 15.0198 7.50227 15.5715 7.73756 16.0346C8.00986 16.5705 9.11448 16.9591 11.3237 17.7362L11.3237 17.7362L12.4622 18.1367C12.8626 18.2776 13.0628 18.348 13.2297 18.4639C13.3775 18.5667 13.5056 18.6951 13.6078 18.8431C13.7233 19.0102 13.793 19.2105 13.9325 19.611L14.3049 20.68C15.0741 22.8883 15.4586 23.9925 15.994 24.2665C16.4566 24.5033 17.0089 24.4842 17.4539 24.2159C17.9689 23.9055 18.276 22.7773 18.8901 20.521L20.5357 14.4747C20.8949 13.155 21.0745 12.4951 20.9007 12.0391C20.7492 11.6415 20.4355 11.3269 20.038 11.1738C19.5823 10.9983 18.921 11.1749 17.5982 11.5282Z",fill:"white"})],-1),dP=[hP],mP={key:1},pP=g("svg",{width:"50",height:"50",viewBox:"0 0 30 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M10.5583 23.1561L11.9597 22.7818C12.5151 22.6334 12.7929 22.5593 12.9148 22.4856C13.5295 22.1141 13.5635 21.2358 12.9794 20.8179C12.8636 20.7351 12.5912 20.6393 12.0465 20.4477L12.0465 20.4477C11.9513 20.4141 11.9036 20.3974 11.8601 20.3772C11.6444 20.2772 11.4714 20.1037 11.3721 19.8879C11.352 19.8443 11.3355 19.7969 11.3024 19.7019L11.3024 19.7019C11.1211 19.1813 11.0305 18.9211 10.9525 18.8089C10.5376 18.2113 9.64311 18.2423 9.27066 18.8671C9.20072 18.9845 9.12834 19.2504 8.98358 19.7823L8.59998 21.1917C8.36051 22.0715 8.24078 22.5114 8.35665 22.8154C8.4577 23.0805 8.66679 23.2903 8.93178 23.3923C9.2356 23.5093 9.6765 23.3916 10.5583 23.1561Z",fill:"#061A86"}),g("path",{d:"M17.8791 11.2265L12.6064 12.6347C10.3436 13.239 9.21225 13.5412 8.89931 14.0544C8.6289 14.498 8.60753 15.0497 8.84282 15.5127C9.11512 16.0486 10.2198 16.4372 12.429 17.2144L13.1208 17.4577C13.5212 17.5986 13.7214 17.669 13.8882 17.785C14.036 17.8877 14.1641 18.0161 14.2664 18.1641C14.3818 18.3312 14.4516 18.5315 14.5911 18.932L14.809 19.5577C15.5782 21.766 15.9628 22.8702 16.4982 23.1442C16.9607 23.381 17.513 23.3619 17.9581 23.0936C18.4731 22.7832 18.7802 21.655 19.3943 19.3988L20.8166 14.173C21.1758 12.8533 21.3554 12.1934 21.1816 11.7375C21.03 11.3398 20.7163 11.0252 20.3189 10.8721C19.8631 10.6966 19.2018 10.8732 17.8791 11.2265Z",fill:"white"})],-1),vP=[pP],gP={key:0},HP=Ml('<svg width="50" height="50" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="9" width="16" height="10" rx="2" fill="white"></rect><rect x="6" y="11" width="14" height="2" rx="1" fill="white"></rect><rect x="6" y="11" width="14" height="2" rx="1" fill="black" fill-opacity="0.2"></rect><rect x="6" y="15" width="14" height="2" rx="1" fill="white"></rect><rect x="6" y="15" width="14" height="2" rx="1" fill="black" fill-opacity="0.2"></rect></svg>',1),VP=[HP],zP={key:1},CP=Ml('<svg width="50" height="50" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8896 21.2641L12.8711 20.6916C14.3863 19.8077 15.1439 19.3658 15.2496 18.9664C15.3407 18.6218 15.2413 18.2549 14.9886 18.0033C14.6958 17.7116 13.8184 17.7116 12.0638 17.7116H12.0638L11.0823 17.7116C10.5219 17.7116 10.2418 17.7116 10.0277 17.8205C9.83947 17.9164 9.6864 18.0692 9.59047 18.2573C9.48142 18.4711 9.48142 18.751 9.48142 19.3107V19.3107L9.48142 19.8832C9.48142 20.7967 9.48141 21.2534 9.67338 21.5165C9.84081 21.746 10.098 21.8935 10.3808 21.9222C10.7051 21.9551 11.0999 21.7247 11.8896 21.2641Z" fill="#061A86"></path><path d="M11.8896 21.2641L12.8711 20.6916C14.3863 19.8077 15.1439 19.3658 15.2496 18.9664C15.3407 18.6218 15.2413 18.2549 14.9886 18.0033C14.6958 17.7116 13.8184 17.7116 12.0638 17.7116H12.0638L11.0823 17.7116C10.5219 17.7116 10.2418 17.7116 10.0277 17.8205C9.83947 17.9164 9.6864 18.0692 9.59047 18.2573C9.48142 18.4711 9.48142 18.751 9.48142 19.3107V19.3107L9.48142 19.8832C9.48142 20.7967 9.48141 21.2534 9.67338 21.5165C9.84081 21.746 10.098 21.8935 10.3808 21.9222C10.7051 21.9551 11.0999 21.7247 11.8896 21.2641Z" fill="black" fill-opacity="0.2"></path><rect x="5" y="8.46729" width="16" height="10" rx="2" fill="white"></rect><rect x="6" y="10.4673" width="14" height="2" rx="1" fill="white"></rect><rect x="6" y="10.4673" width="14" height="2" rx="1" fill="black" fill-opacity="0.2"></rect><rect x="6" y="14.4673" width="14" height="2" rx="1" fill="white"></rect><rect x="6" y="14.4673" width="14" height="2" rx="1" fill="black" fill-opacity="0.2"></rect></svg>',1),MP=[CP],yP={__name:"Interactions",props:{post:{type:w3,required:!0},isHovering:{type:Boolean,default:!1},user:{type:v6,required:!0},chunks:{type:Array,default:()=>[]}},setup(t){const e=t,c=e2(e.post.color.isDark),a=e2(e.post.color.hex+"80"),n=e2({like:!1,dislike:!1,share:!1,comment:!1});function r(){k1.push({name:"Post",params:{id:e.post.ID}})}return(s,i)=>(S(),I(z2,null,[g("div",null,[c.value?(S(),I("div",$R)):(S(),I("div",qR))]),g("div",WR,[g("div",{class:"p-2 rounded-bl-[0.6rem] rounded-lg bg-opacity-50 text-xl w-16 backdrop-blur-md",style:N4({backgroundColor:a.value,color:c.value?"#fff":"#000",textAlign:"center",justifyContent:"center"})},[g("h1",null,F2(t.post.votes),1)],4),g("div",{class:S1(["flex rounded-lg gap-2 backdrop-blur-md transition-all duration-200 ease-in-out",t.isHovering?"opacity-100":"opacity-0"]),style:N4({backgroundColor:a.value})},[g("div",{class:"object-cover w-[45px] cursor-pointer",onClick:i[0]||(i[0]=()=>t.post.Interact(K2(j1).Liked,t.user)),onMouseenter:i[1]||(i[1]=o=>n.value.like=!0),onMouseleave:i[2]||(i[2]=o=>n.value.like=!1)},[!n.value.like&&t.post.interactions[t.post.username]!==K2(j1).Liked?(S(),I("div",jR,KR)):$2("",!0),n.value.like&&t.post.interactions[t.post.username]!==K2(j1).Liked?(S(),I("div",QR,YR)):$2("",!0),t.post.interactions[t.post.username]===K2(j1).Liked?(S(),I("div",JR,eP)):$2("",!0)],32),g("div",{class:"object-cover w-[45px] cursor-pointer",onClick:i[3]||(i[3]=()=>t.post.Interact(K2(j1).Disliked,t.user)),onMouseenter:i[4]||(i[4]=o=>n.value.dislike=!0),onMouseleave:i[5]||(i[5]=o=>n.value.dislike=!1)},[!n.value.dislike&&t.post.interactions[t.post.username]!==K2(j1).Disliked?(S(),I("div",tP,aP)):$2("",!0),n.value.dislike&&t.post.interactions[t.post.username]!==K2(j1).Disliked?(S(),I("div",nP,sP)):$2("",!0),t.post.interactions[t.post.username]===K2(j1).Disliked?(S(),I("div",iP,lP)):$2("",!0)],32)],6)]),g("div",fP,[g("div",{class:S1(["backdrop-blur-md rounded-md flex gap-2",t.isHovering?"opacity-100":"opacity-0"]),style:N4({backgroundColor:a.value})},[g("div",{class:"cursor-pointer",onMouseenter:i[6]||(i[6]=o=>n.value.share=!0),onMouseleave:i[7]||(i[7]=o=>n.value.share=!1)},[n.value.share?$2("",!0):(S(),I("div",uP,dP)),n.value.share?(S(),I("div",mP,vP)):$2("",!0)],32),g("div",{class:"cursor-pointer",onMouseenter:i[8]||(i[8]=o=>n.value.comment=!0),onMouseleave:i[9]||(i[9]=o=>n.value.comment=!1),onClick:r},[n.value.comment?$2("",!0):(S(),I("div",gP,VP)),n.value.comment?(S(),I("div",zP,MP)):$2("",!0)],32)],6)])],64))}},_P={key:0},LP=["src","alt"],wP=["rows"],bP={__name:"Body",props:{post:{type:w3,required:!0},isHovering:{type:Boolean,default:!1},hex:{type:String,default:"#E2E2E2"},chunks:{type:Array,default:()=>[]}},setup(t){const e=t,c=e2(""),a=e2(e.post.text);return il(()=>{if(e.post.type==="image"){const n=cr(ar,`/uploads/${e.post.ID}/${e.post.imageName}`);Hd(n).then(r=>{c.value=r})}}),(n,r)=>t.post.type==="image"?(S(),I("div",_P,[g("img",{class:"object-cover w-[800px] h-[450px] rounded-[0.6rem]",src:c.value,alt:t.post.title},null,8,LP)])):t.post.type==="text"?v1((S(),I("textarea",{key:1,"onUpdate:modelValue":r[0]||(r[0]=s=>a.value=s),rows:t.chunks.length,readonly:"",style:N4([{overflow:"hidden",resize:"none"},{"background-color":t.isHovering?t.hex:"#E2E2E2",color:t.isHovering&&t.post.color.isDark?"#fff":"#000"}]),class:"rounded-[0.6rem] cursor-pointer bg-gray-200 w-[800px] select-none resize-none p-2 min-h-[150px] mb-[-0.2rem] max-h-[300px] transition-all duration-150 ease-in-out outline-none"},null,12,wP)),[[N1,a.value]]):$2("",!0)}},xP={class:"relative z-0"},AP={__name:"Post",props:{post:{type:w3,required:!0}},async setup(t){let e,c;const a=t,n=e2(a.post.color.hex),r=e2(!1),s=e2(([e,c]=R4(()=>Yh()),e=await e,c(),e)),i=()=>{r.value=!1},o=a.post.text.split(" ").reduce((f,u)=>(f.length===0||f[f.length-1].length+u.length+1>100?f.push(u):f[f.length-1]+=` ${u}`,f),[]);function l(){k1.push({name:"Post",params:{id:a.post.ID}})}return(f,u)=>(S(),I("div",{class:"font-roboto-md flex flex-col transition-all duration-150 ease-in-out rounded-xl gap-3 text-lg cursor-pointer",style:N4({"background-color":r.value?n.value:"#E2E2E2",color:r.value&&t.post.color.isDark?"#fff":"#000"}),onMouseenter:u[0]||(u[0]=h=>r.value=!0),onMousemove:u[1]||(u[1]=h=>r.value=!0),onMouseleave:i},[Q(BR,{post:t.post},null,8,["post"]),g("div",xP,[Q(bP,{post:t.post,"is-hovering":r.value,hex:n.value,chunks:K2(o),onClick:l},null,8,["post","is-hovering","hex","chunks"]),Q(yP,{"is-hovering":r.value,post:t.post,user:s.value,chunks:K2(o)},null,8,["is-hovering","post","user","chunks"])])],36))}},SP={class:"grid place-content-center relative left-[-23%]"},TP={class:"flex gap-2 border-2 rounded-md p-2 bg-gray-200 border-gray-500"},NP=g("h3",{class:"select-none p-1"}," Sort By: ",-1),EP=["value"],kP={key:0,class:"flex gap-2"},IP=g("h3",{class:"select-none p-1"}," Of ",-1),RP=["value"],PP={__name:"SortBy",emits:["sortChanged"],setup(t){const e=e2({By:"Hot",Of:"Week"}),c=e2({Hot:void 0,New:void 0,Top:["Hour","Day","Week","Month","Year","All Time"]});return(a,n)=>(S(),I("div",SP,[g("div",TP,[NP,v1(g("select",{id:"","onUpdate:modelValue":n[0]||(n[0]=r=>e.value.By=r),class:"bg-gray-200 cursor-pointer hover:border-gray-500 border-2 rounded-md p-1",name:"sortby",onChange:n[1]||(n[1]=r=>a.$emit("sortChanged",e.value))},[(S(!0),I(z2,null,v3(Object.keys(c.value),r=>(S(),I("option",{key:r,value:r},F2(r),9,EP))),128))],544),[[ei,e.value.By]]),e.value.By==="Top"?(S(),I("div",kP,[IP,v1(g("select",{"onUpdate:modelValue":n[2]||(n[2]=r=>e.value.Of=r),name:"sortof",class:"bg-gray-200 cursor-pointer hover:border-gray-500 border-2 rounded-md p-1",onChange:n[3]||(n[3]=r=>a.$emit("sortChanged",e.value))},[(S(!0),I(z2,null,v3(c.value[e.value.By],r=>(S(),I("option",{key:r,value:r},F2(r),9,RP))),128))],544),[[ei,e.value.Of]])])):$2("",!0)])]))}},DP={class:"flex flex-col gap-4"},FP={key:1,class:"grid place-items-center"},OP=g("h1",{class:"text-4xl"}," So Empty... ",-1),UP=[OP],rr={__name:"PostsView",props:{getPosts:{type:Function,required:!0}},async setup(t){let e,c;const a=t,n=cc(),r=e2(([e,c]=R4(()=>a.getPosts({By:"Hot",Of:"Week"})),e=await e,c(),e)),s=e2({By:"Hot",Of:"Week"}),i=async o=>{s.value=o,r.value=await a.getPosts(s.value)};return j3(n,async()=>{r.value=await a.getPosts(s.value)}),(o,l)=>(S(),I("div",DP,[Q(PP,{onSortChanged:i}),r.value.length!==0?(S(),I("div",{key:r.value,class:"flex flex-col justify-center align-middle items-center gap-6"},[(S(!0),I(z2,null,v3(r.value,f=>(S(),a4(AP,{key:f,post:f},null,8,["post"]))),128))])):(S(),I("div",FP,UP))]))}},BP={__name:"HomeView",setup(t){async function e(c){const a=d2(c),n={Hot:"votes",New:"created",Top:"votes"};let r;if(a.By==="Top"){const H={Hour:new Date(Date.now()-36e5),Day:new Date(Date.now()-864e5),Week:new Date(Date.now()-6048e5),Month:new Date(Date.now()-2592e6),Year:new Date(Date.now()-31536e6),"All Time":new Date(0)};return r=a6(L3,m3("created",">",H[a.Of])).withConverter(i6),(await y3(r)).docs.sort((V,C)=>C.data().votes-V.data().votes).map(V=>V.data())}return r=a6(L3,On(n[a.By],"desc")).withConverter(i6),(await y3(r)).docs.map(i=>i.data())}return(c,a)=>(S(),I(z2,null,[Q(g0),Q(rr,{"get-posts":e})],64))}},$P={__name:"ListView",setup(t){const e=cc();async function c(a){const n=d2(a),r={Hot:"votes",New:"created",Top:"votes"};let s;if(n.By==="Top"){const y={Hour:new Date(Date.now()-36e5),Day:new Date(Date.now()-864e5),Week:new Date(Date.now()-6048e5),Month:new Date(Date.now()-2592e6),Year:new Date(Date.now()-31536e6),"All Time":new Date(0)};return s=a6(L3,m3("created",">",y[n.Of]),m3("lists","array-contains",e.params.name)).withConverter(i6),(await y3(s)).docs.sort((C,b)=>b.data().votes-C.data().votes).map(C=>C.data())}return s=a6(L3,On(r[n.By],"desc"),m3("lists","array-contains",e.params.name)).withConverter(i6),(await y3(s)).docs.map(o=>o.data())}return(a,n)=>(S(),I(z2,null,[Q(g0),Q(rr,{"get-posts":c})],64))}},qP=["onClick"],WP={class:"text-2xl font-bold"},jP={class:"flex flex-col"},GP={class:"flex"},Cd={__name:"Modal",props:{open:{type:Boolean,default:!1}},emits:["update:open"],setup(t,{emit:e}){function c(){return"transform translate-y-0 opacity-100"}function a(){return"transform -translate-y-full opacity-0"}function n(){e("update:open",!1)}return(r,s)=>(S(),a4(q_,{to:"body"},[g("div",{class:S1(["transition-all grid place-items-center duration-300",t.open?"w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 p-0 m-0 visible opacity-100":"invisible opacity-0"]),onClick:re(n,["self"])},[g("div",{class:S1(["fixed z-[999] width-[300px] transition-all bg-white border-neutral-800 border-2 rounded-md p-5 flex flex-col gap-6",t.open?c():a()])},[g("div",WP,[Q1(r.$slots,"header")]),g("div",jP,[Q1(r.$slots,"body")]),g("div",GP,[Q1(r.$slots,"footer")])],2)],10,qP)]))}},KP={class:"text-2xl font-bold"},QP={class:"modal-body"},XP={class:"flex gap-2 sticky top-0 right-10 w-full justify-end"},YP={key:0,class:"flex gap-1"},JP={key:1,class:"flex gap-1"},Bc={__name:"ConfirmModal",props:{open:{type:Boolean,default:!1},onCancel:{type:Function,default:()=>{}},onConfirm:{type:Function,default:()=>{}},showIcons:{type:Boolean,default:!0},showConfirmIcon:{type:Boolean,default:!0},showCancelIcon:{type:Boolean,default:!0}},emits:["update:open"],setup(t){return(e,c)=>{const a=X3("font-awesome-icon");return S(),a4(Cd,{open:t.open,"onUpdate:open":c[4]||(c[4]=n=>e.$emit("update:open",n))},{header:k2(()=>[g("span",KP,[Q1(e.$slots,"header")])]),body:k2(()=>[g("span",null,[g("div",QP,[Q1(e.$slots,"body")])])]),footer:k2(()=>[g("div",XP,[Q1(e.$slots,"footer"),t.showIcons?(S(),I("div",YP,[t.showCancelIcon?(S(),I("button",{key:0,onClick:c[0]||(c[0]=(...n)=>t.onCancel&&t.onCancel(...n))},[Q(a,{icon:["far","circle-xmark"],class:"text-red-700"})])):$2("",!0),t.showConfirmIcon?(S(),I("button",{key:1,onClick:c[1]||(c[1]=(...n)=>t.onConfirm&&t.onConfirm(...n))},[Q(a,{icon:["far","check-circle"]})])):$2("",!0)])):(S(),I("div",JP,[g("div",{onClick:c[2]||(c[2]=(...n)=>t.onCancel&&t.onCancel(...n))},[Q1(e.$slots,"cancel")]),g("div",{onClick:c[3]||(c[3]=(...n)=>t.onConfirm&&t.onConfirm(...n))},[Q1(e.$slots,"confirm")])]))])]),_:3},8,["open"])}}},ZP={class:"flex-col gap-2 grid place-items-center w-full"},eD=g("div",{class:"flex flex-col gap-3 w-[20%]"},[g("h2",{class:"text-5xl w-full text-center select-none"},[g("b",null,"Login")]),g("hr")],-1),tD={class:"flex flex-col gap-2 w-[25%]"},cD=g("label",{class:"select-none",for:"email"},"Username",-1),aD=g("label",{class:"select-none",for:"password"},"Password",-1),nD={class:"grid place-items-center grid-flow-col gap-3"},rD=["onClick"],sD={__name:"Login",setup(t){const e=e2(""),c=e2(""),a=e2(""),n=e2(!1),r=()=>{bk(e.value,c.value).catch(s=>{a.value=s,n.value=!0})};return(s,i)=>(S(),I(z2,null,[Q(Bc,{open:n.value,"onUpdate:open":i[0]||(i[0]=o=>n.value=o),"show-confirm-icon":!1,"on-cancel":()=>n.value=!1},{header:k2(()=>[g3(" Error ")]),body:k2(()=>[g3(F2(a.value),1)]),_:1},8,["open","on-cancel"]),g("div",ZP,[eD,g("form",tD,[cD,v1(g("input",{id:"username","onUpdate:modelValue":i[1]||(i[1]=o=>e.value=o),class:"input",type:"text",name:"username"},null,512),[[N1,e.value]]),aD,v1(g("input",{id:"password","onUpdate:modelValue":i[2]||(i[2]=o=>c.value=o),class:"input",type:"password",name:"password"},null,512),[[N1,c.value]]),g("div",nD,[g("button",{type:"submit",class:"button mt-2 w-full",onClick:re(r,["prevent"])}," Login ",8,rD),g("button",{type:"submit",class:"button mt-2 w-full",onClick:i[3]||(i[3]=re(o=>s.$router.push("/signup"),["prevent"]))}," Signup ")])])])],64))}},iD={__name:"LogInView",setup(t){return(e,c)=>(S(),I(z2,null,[Q(g0),Q(sD)],64))}},oD={class:"text-2xl font-bold"},lD={class:"modal-body"},fD={key:0,role:"status",class:"flex flex-row"},uD=g("svg",{"aria-hidden":"true",class:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-900",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[g("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),g("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),hD={class:"modal-footer"},dD={key:1,class:"relative pt-1 w-full"},mD={class:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-neutral-200"},pD={__name:"ProgressModal",props:{open:{type:Boolean,default:!1},showCircle:{type:Boolean,default:!1},progress:{type:Number,default:0}},emits:["update:open"],setup(t){return(e,c)=>(S(),a4(Cd,{open:t.open,"onUpdate:open":c[0]||(c[0]=a=>e.$emit("update:open",a))},{header:k2(()=>[g("span",oD,[Q1(e.$slots,"header")])]),body:k2(()=>[g("span",null,[g("div",lD,[Q1(e.$slots,"body")])])]),footer:k2(()=>[t.showCircle?(S(),I("div",fD,[uD,g("div",hD,[Q1(e.$slots,"footer",{},()=>[g3(" Loading... ")])])])):(S(),I("div",dD,[g("div",mD,[g("div",{style:N4({width:t.progress+"%"}),class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-neutral-800"},null,4)])]))]),_:3},8,["open"]))}},vD={class:"flex text-center w-full"},gD={for:"fileInput",class:"text-xl block cursor-pointer"},HD={key:0},VD={key:1},zD=g("u",null,"click here",-1),CD={key:0},MD={key:1},J9={__name:"Dropover",props:{post:{type:w3,required:!0}},emits:["filesChange"],setup(t){const e=t,c=e2(!1),a=e2(void 0);function n(o){o.preventDefault(),c.value=!1,i(o)}function r(o){o.preventDefault(),c.value=!0}function s(o){o.preventDefault(),c.value=!1}function i(o){o.dataTransfer?a.value=o.dataTransfer.files[0]:a.value=o.target.files[0],e.post.UpdatePost({imageName:a.value})}return(o,l)=>(S(),I("div",vD,[g("div",{class:"p-16 bg-[#f7fafc] w-full rounded-md b-1 border-solid border-2 border-[#e2e8f0]",onDragover:r,onDragleave:s,onDrop:l[1]||(l[1]=f=>{n(f),o.$emit("filesChange",f)})},[g("input",{id:"fileInput",ref:"fileRef",type:"file",name:"file",class:"opacity-0 overflow-hidden position-absolute w-1 h-1",accept:".jpg,.jpeg,.png,.webp,.gif",onChange:l[0]||(l[0]=f=>o.$emit("filesChange",f))},null,544),g("label",gD,[c.value?(S(),I("div",HD,"Release to drop files here.")):(S(),I("div",VD,[g3("Drop files here or "),zD,g3(" to upload.")]))]),g("p",null,[t.post.imageName?(S(),I("span",MD,F2(t.post.imageName),1)):(S(),I("span",CD,"No files selected."))])],32)]))}};function j7(t,e,c=!0){const n=(s,i)=>B5(s,i)/s.length,r=(s,i)=>B5(t,i)-B5(t,s);return e.filter(s=>!c||n(t,s)>=.5).sort((s,i)=>r(s,i))}function B5(t,e){let c=0;return[...t].forEach(a=>{e.toLowerCase().includes(a.toLowerCase())&&c++}),c}const yD={class:"relative"},_D={key:0,class:"bg-white absolute top-11 left-0 border-2 p-2 rounded-md grid place-items-start"},LD=["onClick"],wD={__name:"ListSearch",props:{modelValue:{type:Set,required:!0}},emits:["update:modelValue","addNewList"],async setup(t){let e,c;const a=e2(!1),n=e2(""),r=e2(new Set),s=([e,c]=R4(()=>y3(Xh)),e=await e,c(),e),i=e2(s.docs.map(f=>f.data().name)),o=q2(()=>j7(n.value,i.value,n.value!=="").concat("Add new list")),l=()=>{setTimeout(()=>{Va(()=>{a.value=!1})},100)};return(f,u)=>(S(),I("div",yD,[v1(g("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h),type:"text",placeholder:"Search a list",class:"border-2 border-gray-300 rounded-md p-2 outline-none focus:border-accent",onFocus:u[1]||(u[1]=h=>a.value=!0),onBlur:l},null,544),[[N1,n.value]]),a.value?(S(),I("div",_D,[(S(!0),I(z2,null,v3(o.value,h=>(S(),I("div",{key:h,class:"rounded-md w-full text-left flex gap-2"},[g("button",{class:"rounded-md p-2 w-full text-left hover:bg-gray-200",onClick:()=>{h==="Add new list"?f.$emit("addNewList",n.value):(r.value=new Set([...t.modelValue]),r.value.add(h),f.$emit("update:modelValue",r.value))}},F2(h),9,LD)]))),128))])):$2("",!0)]))}};class G7{constructor(e){this.name=e}toString(){return this.name}}const bD={toFirestore:t=>({name:t.name}),fromFirestore:(t,e)=>{const c=t.data(e);return new G7(c.name)}};function Z9(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),c.push.apply(c,a)}return c}function B(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?Z9(Object(c),!0).forEach(function(a){J2(t,a,c[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):Z9(Object(c)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(c,a))})}return t}function Ft(t){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}function xD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function eo(t,e){for(var c=0;c<e.length;c++){var a=e[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function AD(t,e,c){return e&&eo(t.prototype,e),c&&eo(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}function J2(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function sr(t,e){return TD(t)||ED(t,e)||Md(t,e)||ID()}function r8(t){return SD(t)||ND(t)||Md(t)||kD()}function SD(t){if(Array.isArray(t))return K7(t)}function TD(t){if(Array.isArray(t))return t}function ND(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ED(t,e){var c=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var a=[],n=!0,r=!1,s,i;try{for(c=c.call(t);!(n=(s=c.next()).done)&&(a.push(s.value),!(e&&a.length===e));n=!0);}catch(o){r=!0,i=o}finally{try{!n&&c.return!=null&&c.return()}finally{if(r)throw i}}return a}}function Md(t,e){if(t){if(typeof t=="string")return K7(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return K7(t,e)}}function K7(t,e){(e==null||e>t.length)&&(e=t.length);for(var c=0,a=new Array(e);c<e;c++)a[c]=t[c];return a}function kD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ID(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var to=function(){},ir={},yd={},_d=null,Ld={mark:to,measure:to};try{typeof window<"u"&&(ir=window),typeof document<"u"&&(yd=document),typeof MutationObserver<"u"&&(_d=MutationObserver),typeof performance<"u"&&(Ld=performance)}catch{}var RD=ir.navigator||{},co=RD.userAgent,ao=co===void 0?"":co,b3=ir,T2=yd,no=_d,k8=Ld;b3.document;var G4=!!T2.documentElement&&!!T2.head&&typeof T2.addEventListener=="function"&&typeof T2.createElement=="function",wd=~ao.indexOf("MSIE")||~ao.indexOf("Trident/"),I8,R8,P8,D8,F8,$4="___FONT_AWESOME___",Q7=16,bd="fa",xd="svg-inline--fa",o6="data-fa-i2svg",X7="data-fa-pseudo-element",PD="data-fa-pseudo-element-pending",or="data-prefix",lr="data-icon",ro="fontawesome-i2svg",DD="async",FD=["HTML","HEAD","STYLE","SCRIPT"],Ad=function(){try{return!0}catch{return!1}}(),x2="classic",D2="sharp",fr=[x2,D2];function s8(t){return new Proxy(t,{get:function(c,a){return a in c?c[a]:c[x2]}})}var be=s8((I8={},J2(I8,x2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),J2(I8,D2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),I8)),xe=s8((R8={},J2(R8,x2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),J2(R8,D2,{solid:"fass",regular:"fasr",light:"fasl"}),R8)),Ae=s8((P8={},J2(P8,x2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),J2(P8,D2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),P8)),OD=s8((D8={},J2(D8,x2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),J2(D8,D2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),D8)),UD=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Sd="fa-layers-text",BD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$D=s8((F8={},J2(F8,x2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),J2(F8,D2,{900:"fass",400:"fasr",300:"fasl"}),F8)),Td=[1,2,3,4,5,6,7,8,9,10],qD=Td.concat([11,12,13,14,15,16,17,18,19,20]),WD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Se=new Set;Object.keys(xe[x2]).map(Se.add.bind(Se));Object.keys(xe[D2]).map(Se.add.bind(Se));var jD=[].concat(fr,r8(Se),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$3.GROUP,$3.SWAP_OPACITY,$3.PRIMARY,$3.SECONDARY]).concat(Td.map(function(t){return"".concat(t,"x")})).concat(qD.map(function(t){return"w-".concat(t)})),Q0=b3.FontAwesomeConfig||{};function GD(t){var e=T2.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function KD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(T2&&typeof T2.querySelector=="function"){var QD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];QD.forEach(function(t){var e=sr(t,2),c=e[0],a=e[1],n=KD(GD(c));n!=null&&(Q0[a]=n)})}var Nd={styleDefault:"solid",familyDefault:"classic",cssPrefix:bd,replacementClass:xd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q0.familyPrefix&&(Q0.cssPrefix=Q0.familyPrefix);var n0=B(B({},Nd),Q0);n0.autoReplaceSvg||(n0.observeMutations=!1);var W={};Object.keys(Nd).forEach(function(t){Object.defineProperty(W,t,{enumerable:!0,set:function(c){n0[t]=c,X0.forEach(function(a){return a(W)})},get:function(){return n0[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){n0.cssPrefix=e,X0.forEach(function(c){return c(W)})},get:function(){return n0.cssPrefix}});b3.FontAwesomeConfig=W;var X0=[];function XD(t){return X0.push(t),function(){X0.splice(X0.indexOf(t),1)}}var J4=Q7,d4={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function YD(t){if(!(!t||!G4)){var e=T2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var c=T2.head.childNodes,a=null,n=c.length-1;n>-1;n--){var r=c[n],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return T2.head.insertBefore(e,a),t}}var JD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Te(){for(var t=12,e="";t-- >0;)e+=JD[Math.random()*62|0];return e}function V0(t){for(var e=[],c=(t||[]).length>>>0;c--;)e[c]=t[c];return e}function ur(t){return t.classList?V0(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ed(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ZD(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,'="').concat(Ed(t[c]),'" ')},"").trim()}function $c(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,": ").concat(t[c].trim(),";")},"")}function hr(t){return t.size!==d4.size||t.x!==d4.x||t.y!==d4.y||t.rotate!==d4.rotate||t.flipX||t.flipY}function eF(t){var e=t.transform,c=t.containerWidth,a=t.iconWidth,n={transform:"translate(".concat(c/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(i)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:n,inner:o,path:l}}function tF(t){var e=t.transform,c=t.width,a=c===void 0?Q7:c,n=t.height,r=n===void 0?Q7:n,s=t.startCentered,i=s===void 0?!1:s,o="";return i&&wd?o+="translate(".concat(e.x/J4-a/2,"em, ").concat(e.y/J4-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/J4,"em), calc(-50% + ").concat(e.y/J4,"em)) "):o+="translate(".concat(e.x/J4,"em, ").concat(e.y/J4,"em) "),o+="scale(".concat(e.size/J4*(e.flipX?-1:1),", ").concat(e.size/J4*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var cF=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function kd(){var t=bd,e=xd,c=W.cssPrefix,a=W.replacementClass,n=cF;if(c!==t||a!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(c,"-")).replace(s,"--".concat(c,"-")).replace(i,".".concat(a))}return n}var so=!1;function $5(){W.autoAddCss&&!so&&(YD(kd()),so=!0)}var aF={mixout:function(){return{dom:{css:kd,insertCss:$5}}},hooks:function(){return{beforeDOMElementCreation:function(){$5()},beforeI2svg:function(){$5()}}}},q4=b3||{};q4[$4]||(q4[$4]={});q4[$4].styles||(q4[$4].styles={});q4[$4].hooks||(q4[$4].hooks={});q4[$4].shims||(q4[$4].shims=[]);var X1=q4[$4],Id=[],nF=function t(){T2.removeEventListener("DOMContentLoaded",t),Ot=1,Id.map(function(e){return e()})},Ot=!1;G4&&(Ot=(T2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T2.readyState),Ot||T2.addEventListener("DOMContentLoaded",nF));function rF(t){G4&&(Ot?setTimeout(t,0):Id.push(t))}function i8(t){var e=t.tag,c=t.attributes,a=c===void 0?{}:c,n=t.children,r=n===void 0?[]:n;return typeof t=="string"?Ed(t):"<".concat(e," ").concat(ZD(a),">").concat(r.map(i8).join(""),"</").concat(e,">")}function io(t,e,c){if(t&&t[e]&&t[e][c])return{prefix:e,iconName:c,icon:t[e][c]}}var sF=function(e,c){return function(a,n,r,s){return e.call(c,a,n,r,s)}},q5=function(e,c,a,n){var r=Object.keys(e),s=r.length,i=n!==void 0?sF(c,n):c,o,l,f;for(a===void 0?(o=1,f=e[r[0]]):(o=0,f=a);o<s;o++)l=r[o],f=i(f,e[l],l,e);return f};function iF(t){for(var e=[],c=0,a=t.length;c<a;){var n=t.charCodeAt(c++);if(n>=55296&&n<=56319&&c<a){var r=t.charCodeAt(c++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),c--)}else e.push(n)}return e}function Y7(t){var e=iF(t);return e.length===1?e[0].toString(16):null}function oF(t,e){var c=t.length,a=t.charCodeAt(e),n;return a>=55296&&a<=56319&&c>e+1&&(n=t.charCodeAt(e+1),n>=56320&&n<=57343)?(a-55296)*1024+n-56320+65536:a}function oo(t){return Object.keys(t).reduce(function(e,c){var a=t[c],n=!!a.icon;return n?e[a.iconName]=a.icon:e[c]=a,e},{})}function J7(t,e){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=c.skipHooks,n=a===void 0?!1:a,r=oo(e);typeof X1.hooks.addPack=="function"&&!n?X1.hooks.addPack(t,oo(e)):X1.styles[t]=B(B({},X1.styles[t]||{}),r),t==="fas"&&J7("fa",e)}var O8,U8,B8,A6=X1.styles,lF=X1.shims,fF=(O8={},J2(O8,x2,Object.values(Ae[x2])),J2(O8,D2,Object.values(Ae[D2])),O8),dr=null,Rd={},Pd={},Dd={},Fd={},Od={},uF=(U8={},J2(U8,x2,Object.keys(be[x2])),J2(U8,D2,Object.keys(be[D2])),U8);function hF(t){return~jD.indexOf(t)}function dF(t,e){var c=e.split("-"),a=c[0],n=c.slice(1).join("-");return a===t&&n!==""&&!hF(n)?n:null}var Ud=function(){var e=function(r){return q5(A6,function(s,i,o){return s[o]=q5(i,r,{}),s},{})};Rd=e(function(n,r,s){if(r[3]&&(n[r[3]]=s),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){n[o.toString(16)]=s})}return n}),Pd=e(function(n,r,s){if(n[s]=s,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){n[o]=s})}return n}),Od=e(function(n,r,s){var i=r[2];return n[s]=s,i.forEach(function(o){n[o]=s}),n});var c="far"in A6||W.autoFetchSvg,a=q5(lF,function(n,r){var s=r[0],i=r[1],o=r[2];return i==="far"&&!c&&(i="fas"),typeof s=="string"&&(n.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:i,iconName:o}),n},{names:{},unicodes:{}});Dd=a.names,Fd=a.unicodes,dr=qc(W.styleDefault,{family:W.familyDefault})};XD(function(t){dr=qc(t.styleDefault,{family:W.familyDefault})});Ud();function mr(t,e){return(Rd[t]||{})[e]}function mF(t,e){return(Pd[t]||{})[e]}function q3(t,e){return(Od[t]||{})[e]}function Bd(t){return Dd[t]||{prefix:null,iconName:null}}function pF(t){var e=Fd[t],c=mr("fas",t);return e||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function x3(){return dr}var pr=function(){return{prefix:null,iconName:null,rest:[]}};function qc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.family,a=c===void 0?x2:c,n=be[a][t],r=xe[a][t]||xe[a][n],s=t in X1.styles?t:null;return r||s||null}var lo=(B8={},J2(B8,x2,Object.keys(Ae[x2])),J2(B8,D2,Object.keys(Ae[D2])),B8);function Wc(t){var e,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.skipLookups,n=a===void 0?!1:a,r=(e={},J2(e,x2,"".concat(W.cssPrefix,"-").concat(x2)),J2(e,D2,"".concat(W.cssPrefix,"-").concat(D2)),e),s=null,i=x2;(t.includes(r[x2])||t.some(function(l){return lo[x2].includes(l)}))&&(i=x2),(t.includes(r[D2])||t.some(function(l){return lo[D2].includes(l)}))&&(i=D2);var o=t.reduce(function(l,f){var u=dF(W.cssPrefix,f);if(A6[f]?(f=fF[i].includes(f)?OD[i][f]:f,s=f,l.prefix=f):uF[i].indexOf(f)>-1?(s=f,l.prefix=qc(f,{family:i})):u?l.iconName=u:f!==W.replacementClass&&f!==r[x2]&&f!==r[D2]&&l.rest.push(f),!n&&l.prefix&&l.iconName){var h=s==="fa"?Bd(l.iconName):{},d=q3(l.prefix,l.iconName);h.prefix&&(s=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!A6.far&&A6.fas&&!W.autoFetchSvg&&(l.prefix="fas")}return l},pr());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===D2&&(A6.fass||W.autoFetchSvg)&&(o.prefix="fass",o.iconName=q3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=x3()||"fas"),o}var vF=function(){function t(){xD(this,t),this.definitions={}}return AD(t,[{key:"add",value:function(){for(var c=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){c.definitions[i]=B(B({},c.definitions[i]||{}),s[i]),J7(i,s[i]);var o=Ae[x2][i];o&&J7(o,s[i]),Ud()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,a){var n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(function(r){var s=n[r],i=s.prefix,o=s.iconName,l=s.icon,f=l[2];c[i]||(c[i]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(c[i][u]=l)}),c[i][o]=l}),c}}]),t}(),fo=[],S6={},$6={},gF=Object.keys($6);function HF(t,e){var c=e.mixoutsTo;return fo=t,S6={},Object.keys($6).forEach(function(a){gF.indexOf(a)===-1&&delete $6[a]}),fo.forEach(function(a){var n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(function(s){typeof n[s]=="function"&&(c[s]=n[s]),Ft(n[s])==="object"&&Object.keys(n[s]).forEach(function(i){c[s]||(c[s]={}),c[s][i]=n[s][i]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(s){S6[s]||(S6[s]=[]),S6[s].push(r[s])})}a.provides&&a.provides($6)}),c}function Z7(t,e){for(var c=arguments.length,a=new Array(c>2?c-2:0),n=2;n<c;n++)a[n-2]=arguments[n];var r=S6[t]||[];return r.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function l6(t){for(var e=arguments.length,c=new Array(e>1?e-1:0),a=1;a<e;a++)c[a-1]=arguments[a];var n=S6[t]||[];n.forEach(function(r){r.apply(null,c)})}function W4(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $6[t]?$6[t].apply(null,e):void 0}function ea(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,c=t.prefix||x3();if(e)return e=q3(c,e)||e,io($d.definitions,c,e)||io(X1.styles,c,e)}var $d=new vF,VF=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,l6("noAuto")},zF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G4?(l6("beforeI2svg",e),W4("pseudoElements2svg",e),W4("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,rF(function(){MF({autoReplaceSvgRoot:c}),l6("watch",e)})}},CF={icon:function(e){if(e===null)return null;if(Ft(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q3(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=qc(e[0]);return{prefix:a,iconName:q3(a,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(UD))){var n=Wc(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||x3(),iconName:q3(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=x3();return{prefix:r,iconName:q3(r,e)||e}}}},F1={noAuto:VF,config:W,dom:zF,parse:CF,library:$d,findIconDefinition:ea,toHtml:i8},MF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot,a=c===void 0?T2:c;(Object.keys(X1.styles).length>0||W.autoFetchSvg)&&G4&&W.autoReplaceSvg&&F1.dom.i2svg({node:a})};function jc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return i8(a)})}}),Object.defineProperty(t,"node",{get:function(){if(G4){var a=T2.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function yF(t){var e=t.children,c=t.main,a=t.mask,n=t.attributes,r=t.styles,s=t.transform;if(hr(s)&&c.found&&!a.found){var i=c.width,o=c.height,l={x:i/o/2,y:.5};n.style=$c(B(B({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function _F(t){var e=t.prefix,c=t.iconName,a=t.children,n=t.attributes,r=t.symbol,s=r===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(c):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},n),{},{id:s}),children:a}]}]}function vr(t){var e=t.icons,c=e.main,a=e.mask,n=t.prefix,r=t.iconName,s=t.transform,i=t.symbol,o=t.title,l=t.maskId,f=t.titleId,u=t.extra,h=t.watchable,d=h===void 0?!1:h,v=a.found?a:c,H=v.width,y=v.height,V=n==="fak",C=[W.replacementClass,r?"".concat(W.cssPrefix,"-").concat(r):""].filter(function(i2){return u.classes.indexOf(i2)===-1}).filter(function(i2){return i2!==""||!!i2}).concat(u.classes).join(" "),b={children:[],attributes:B(B({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat(y)})},M=V&&!~u.classes.indexOf("fa-fw")?{width:"".concat(H/y*16*.0625,"em")}:{};d&&(b.attributes[o6]=""),o&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||Te())},children:[o]}),delete b.attributes.title);var E=B(B({},b),{},{prefix:n,iconName:r,main:c,mask:a,maskId:l,transform:s,symbol:i,styles:B(B({},M),u.styles)}),F=a.found&&c.found?W4("generateAbstractMask",E)||{children:[],attributes:{}}:W4("generateAbstractIcon",E)||{children:[],attributes:{}},K=F.children,a2=F.attributes;return E.children=K,E.attributes=a2,i?_F(E):yF(E)}function uo(t){var e=t.content,c=t.width,a=t.height,n=t.transform,r=t.title,s=t.extra,i=t.watchable,o=i===void 0?!1:i,l=B(B(B({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(l[o6]="");var f=B({},s.styles);hr(n)&&(f.transform=tF({transform:n,startCentered:!0,width:c,height:a}),f["-webkit-transform"]=f.transform);var u=$c(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function LF(t){var e=t.content,c=t.title,a=t.extra,n=B(B(B({},a.attributes),c?{title:c}:{}),{},{class:a.classes.join(" ")}),r=$c(a.styles);r.length>0&&(n.style=r);var s=[];return s.push({tag:"span",attributes:n,children:[e]}),c&&s.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),s}var W5=X1.styles;function ta(t){var e=t[0],c=t[1],a=t.slice(4),n=sr(a,1),r=n[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat($3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat($3.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat($3.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:c,icon:s}}var wF={found:!1,width:512,height:512};function bF(t,e){!Ad&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ca(t,e){var c=e;return e==="fa"&&W.styleDefault!==null&&(e=x3()),new Promise(function(a,n){if(W4("missingIconAbstract"),c==="fa"){var r=Bd(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&W5[e]&&W5[e][t]){var s=W5[e][t];return a(ta(s))}bF(t,e),a(B(B({},wF),{},{icon:W.showMissingIcons&&t?W4("missingIconAbstract")||{}:{}}))})}var ho=function(){},aa=W.measurePerformance&&k8&&k8.mark&&k8.measure?k8:{mark:ho,measure:ho},R0='FA "6.4.2"',xF=function(e){return aa.mark("".concat(R0," ").concat(e," begins")),function(){return qd(e)}},qd=function(e){aa.mark("".concat(R0," ").concat(e," ends")),aa.measure("".concat(R0," ").concat(e),"".concat(R0," ").concat(e," begins"),"".concat(R0," ").concat(e," ends"))},gr={begin:xF,end:qd},at=function(){};function mo(t){var e=t.getAttribute?t.getAttribute(o6):null;return typeof e=="string"}function AF(t){var e=t.getAttribute?t.getAttribute(or):null,c=t.getAttribute?t.getAttribute(lr):null;return e&&c}function SF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function TF(){if(W.autoReplaceSvg===!0)return nt.replace;var t=nt[W.autoReplaceSvg];return t||nt.replace}function NF(t){return T2.createElementNS("http://www.w3.org/2000/svg",t)}function EF(t){return T2.createElement(t)}function Wd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.ceFn,a=c===void 0?t.tag==="svg"?NF:EF:c;if(typeof t=="string")return T2.createTextNode(t);var n=a(t.tag);Object.keys(t.attributes||[]).forEach(function(s){n.setAttribute(s,t.attributes[s])});var r=t.children||[];return r.forEach(function(s){n.appendChild(Wd(s,{ceFn:a}))}),n}function kF(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var nt={replace:function(e){var c=e[0];if(c.parentNode)if(e[1].forEach(function(n){c.parentNode.insertBefore(Wd(n),c)}),c.getAttribute(o6)===null&&W.keepOriginalSource){var a=T2.createComment(kF(c));c.parentNode.replaceChild(a,c)}else c.remove()},nest:function(e){var c=e[0],a=e[1];if(~ur(c).indexOf(W.replacementClass))return nt.replace(e);var n=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(i,o){return o===W.replacementClass||o.match(n)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",r.toNode.join(" "))}var s=a.map(function(i){return i8(i)}).join(`
`);c.setAttribute(o6,""),c.innerHTML=s}};function po(t){t()}function jd(t,e){var c=typeof e=="function"?e:at;if(t.length===0)c();else{var a=po;W.mutateApproach===DD&&(a=b3.requestAnimationFrame||po),a(function(){var n=TF(),r=gr.begin("mutate");t.map(n),r(),c()})}}var Hr=!1;function Gd(){Hr=!0}function na(){Hr=!1}var Ut=null;function vo(t){if(no&&W.observeMutations){var e=t.treeCallback,c=e===void 0?at:e,a=t.nodeCallback,n=a===void 0?at:a,r=t.pseudoElementsCallback,s=r===void 0?at:r,i=t.observeMutationsRoot,o=i===void 0?T2:i;Ut=new no(function(l){if(!Hr){var f=x3();V0(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!mo(u.addedNodes[0])&&(W.searchPseudoElements&&s(u.target),c(u.target)),u.type==="attributes"&&u.target.parentNode&&W.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&mo(u.target)&&~WD.indexOf(u.attributeName))if(u.attributeName==="class"&&AF(u.target)){var h=Wc(ur(u.target)),d=h.prefix,v=h.iconName;u.target.setAttribute(or,d||f),v&&u.target.setAttribute(lr,v)}else SF(u.target)&&n(u.target)})}}),G4&&Ut.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function IF(){Ut&&Ut.disconnect()}function RF(t){var e=t.getAttribute("style"),c=[];return e&&(c=e.split(";").reduce(function(a,n){var r=n.split(":"),s=r[0],i=r.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),c}function PF(t){var e=t.getAttribute("data-prefix"),c=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",n=Wc(ur(t));return n.prefix||(n.prefix=x3()),e&&c&&(n.prefix=e,n.iconName=c),n.iconName&&n.prefix||(n.prefix&&a.length>0&&(n.iconName=mF(n.prefix,t.innerText)||mr(n.prefix,Y7(t.innerText))),!n.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=t.firstChild.data)),n}function DF(t){var e=V0(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),c=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return W.autoA11y&&(c?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(a||Te()):(e["aria-hidden"]="true",e.focusable="false")),e}function FF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:d4,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function go(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=PF(t),a=c.iconName,n=c.prefix,r=c.rest,s=DF(t),i=Z7("parseNodeAttributes",{},t),o=e.styleParser?RF(t):[];return B({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:d4,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}var OF=X1.styles;function Kd(t){var e=W.autoReplaceSvg==="nest"?go(t,{styleParser:!1}):go(t);return~e.extra.classes.indexOf(Sd)?W4("generateLayersText",t,e):W4("generateSvgReplacementMutation",t,e)}var A3=new Set;fr.map(function(t){A3.add("fa-".concat(t))});Object.keys(be[x2]).map(A3.add.bind(A3));Object.keys(be[D2]).map(A3.add.bind(A3));A3=r8(A3);function Ho(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G4)return Promise.resolve();var c=T2.documentElement.classList,a=function(u){return c.add("".concat(ro,"-").concat(u))},n=function(u){return c.remove("".concat(ro,"-").concat(u))},r=W.autoFetchSvg?A3:fr.map(function(f){return"fa-".concat(f)}).concat(Object.keys(OF));r.includes("fa")||r.push("fa");var s=[".".concat(Sd,":not([").concat(o6,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(o6,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=V0(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),n("complete");else return Promise.resolve();var o=gr.begin("onTree"),l=i.reduce(function(f,u){try{var h=Kd(u);h&&f.push(h)}catch(d){Ad||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){jd(h,function(){a("active"),a("complete"),n("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(h){o(),u(h)})})}function UF(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kd(t).then(function(c){c&&jd([c],e)})}function BF(t){return function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ea(e||{}),n=c.mask;return n&&(n=(n||{}).icon?n:ea(n||{})),t(a,B(B({},c),{},{mask:n}))}}var $F=function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.transform,n=a===void 0?d4:a,r=c.symbol,s=r===void 0?!1:r,i=c.mask,o=i===void 0?null:i,l=c.maskId,f=l===void 0?null:l,u=c.title,h=u===void 0?null:u,d=c.titleId,v=d===void 0?null:d,H=c.classes,y=H===void 0?[]:H,V=c.attributes,C=V===void 0?{}:V,b=c.styles,M=b===void 0?{}:b;if(e){var E=e.prefix,F=e.iconName,K=e.icon;return jc(B({type:"icon"},e),function(){return l6("beforeDOMElementCreation",{iconDefinition:e,params:c}),W.autoA11y&&(h?C["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(v||Te()):(C["aria-hidden"]="true",C.focusable="false")),vr({icons:{main:ta(K),mask:o?ta(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:F,transform:B(B({},d4),n),symbol:s,title:h,maskId:f,titleId:v,extra:{attributes:C,styles:M,classes:y}})})}},qF={mixout:function(){return{icon:BF($F)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=Ho,c.nodeCallback=UF,c}}},provides:function(e){e.i2svg=function(c){var a=c.node,n=a===void 0?T2:a,r=c.callback,s=r===void 0?function(){}:r;return Ho(n,s)},e.generateSvgReplacementMutation=function(c,a){var n=a.iconName,r=a.title,s=a.titleId,i=a.prefix,o=a.transform,l=a.symbol,f=a.mask,u=a.maskId,h=a.extra;return new Promise(function(d,v){Promise.all([ca(n,i),f.iconName?ca(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var y=sr(H,2),V=y[0],C=y[1];d([c,vr({icons:{main:V,mask:C},prefix:i,iconName:n,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(c){var a=c.children,n=c.attributes,r=c.main,s=c.transform,i=c.styles,o=$c(i);o.length>0&&(n.style=o);var l;return hr(s)&&(l=W4("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),a.push(l||r.icon),{children:a,attributes:n}}}},WF={mixout:function(){return{layer:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.classes,r=n===void 0?[]:n;return jc({type:"layer"},function(){l6("beforeDOMElementCreation",{assembler:c,params:a});var s=[];return c(function(i){Array.isArray(i)?i.map(function(o){s=s.concat(o.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(r8(r)).join(" ")},children:s}]})}}}},jF={mixout:function(){return{counter:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.title,r=n===void 0?null:n,s=a.classes,i=s===void 0?[]:s,o=a.attributes,l=o===void 0?{}:o,f=a.styles,u=f===void 0?{}:f;return jc({type:"counter",content:c},function(){return l6("beforeDOMElementCreation",{content:c,params:a}),LF({content:c.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(r8(i))}})})}}}},GF={mixout:function(){return{text:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?d4:n,s=a.title,i=s===void 0?null:s,o=a.classes,l=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,h=a.styles,d=h===void 0?{}:h;return jc({type:"text",content:c},function(){return l6("beforeDOMElementCreation",{content:c,params:a}),uo({content:c,transform:B(B({},d4),r),title:i,extra:{attributes:u,styles:d,classes:["".concat(W.cssPrefix,"-layers-text")].concat(r8(l))}})})}}},provides:function(e){e.generateLayersText=function(c,a){var n=a.title,r=a.transform,s=a.extra,i=null,o=null;if(wd){var l=parseInt(getComputedStyle(c).fontSize,10),f=c.getBoundingClientRect();i=f.width/l,o=f.height/l}return W.autoA11y&&!n&&(s.attributes["aria-hidden"]="true"),Promise.resolve([c,uo({content:c.innerHTML,width:i,height:o,transform:r,title:n,extra:s,watchable:!0})])}}},KF=new RegExp('"',"ug"),Vo=[1105920,1112319];function QF(t){var e=t.replace(KF,""),c=oF(e,0),a=c>=Vo[0]&&c<=Vo[1],n=e.length===2?e[0]===e[1]:!1;return{value:Y7(n?e[0]:e),isSecondary:a||n}}function zo(t,e){var c="".concat(PD).concat(e.replace(":","-"));return new Promise(function(a,n){if(t.getAttribute(c)!==null)return a();var r=V0(t.children),s=r.filter(function(K){return K.getAttribute(X7)===e})[0],i=b3.getComputedStyle(t,e),o=i.getPropertyValue("font-family").match(BD),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(s&&!o)return t.removeChild(s),a();if(o&&f!=="none"&&f!==""){var u=i.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?D2:x2,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?xe[h][o[2].toLowerCase()]:$D[h][l],v=QF(u),H=v.value,y=v.isSecondary,V=o[0].startsWith("FontAwesome"),C=mr(d,H),b=C;if(V){var M=pF(H);M.iconName&&M.prefix&&(C=M.iconName,d=M.prefix)}if(C&&!y&&(!s||s.getAttribute(or)!==d||s.getAttribute(lr)!==b)){t.setAttribute(c,b),s&&t.removeChild(s);var E=FF(),F=E.extra;F.attributes[X7]=e,ca(C,d).then(function(K){var a2=vr(B(B({},E),{},{icons:{main:K,mask:pr()},prefix:d,iconName:b,extra:F,watchable:!0})),i2=T2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(i2,t.firstChild):t.appendChild(i2),i2.outerHTML=a2.map(function(C2){return i8(C2)}).join(`