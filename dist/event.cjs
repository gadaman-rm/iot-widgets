"use strict";var D=Object.defineProperty;var K=(i,e,s)=>e in i?D(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var o=(i,e,s)=>(K(i,typeof e!="symbol"?e+"":e,s),s),w=(i,e,s)=>{if(!e.has(i))throw TypeError("Cannot "+s)};var t=(i,e,s)=>(w(i,e,"read from private field"),s?s.call(i):e.get(i)),n=(i,e,s)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,s)},h=(i,e,s,p)=>(w(i,e,"write to private field"),p?p.call(i,s):e.set(i,s),s);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const S=require("./DragListener-6lm9Q8CB.cjs");var r,a,v,c,L,f,l,y;class b{constructor(){o(this,"active");o(this,"init");n(this,r,void 0);n(this,a,void 0);n(this,v,void 0);n(this,c,void 0);n(this,L,(e,s)=>{e.button===1&&!this.active&&(this.active=!0,this.init=s,t(this,r)&&t(this,r).call(this,e,p=>this.init=p))});n(this,f,e=>{this.active&&t(this,a)&&t(this,a).call(this,e,this.init)});n(this,l,e=>{e.button===1&&this.active&&(this.active=!1,t(this,v)&&t(this,v).call(this,e,this.init))});n(this,y,e=>{e.button===1&&this.active&&t(this,c)&&t(this,c).call(this,e,this.init)});o(this,"removeEvent",()=>{document.removeEventListener("mousedown",t(this,L)),document.removeEventListener("mousemove",t(this,f)),document.removeEventListener("mouseup",t(this,l)),document.removeEventListener("mouseleave",t(this,y))});this.active=!1,document.addEventListener("mousedown",t(this,L)),document.addEventListener("mousemove",t(this,f)),document.addEventListener("mouseup",t(this,l)),document.addEventListener("mouseleave",t(this,y))}set onPanStart(e){h(this,r,e)}set onPanMove(e){h(this,a,e)}set onPanEnd(e){h(this,v,e)}set onPanLeave(e){h(this,c,e)}}r=new WeakMap,a=new WeakMap,v=new WeakMap,c=new WeakMap,L=new WeakMap,f=new WeakMap,l=new WeakMap,y=new WeakMap;var d,E;class g{constructor(){o(this,"active");n(this,d,void 0);n(this,E,e=>{e.ctrlKey?(e.preventDefault(),this.active=!0):this.active=!1,this.active&&t(this,d)&&t(this,d).call(this,e)});o(this,"removeEvent",()=>{document.removeEventListener("wheel",t(this,E))});this.active=!1,document.addEventListener("wheel",t(this,E),{passive:!1})}set onZoom(e){h(this,d,e)}}d=new WeakMap,E=new WeakMap;var m,u,P,k;class C{constructor(e){o(this,"keyCode");n(this,m,void 0);n(this,u,void 0);n(this,P,e=>{e.code===this.keyCode&&t(this,m)&&t(this,m).call(this,e)});n(this,k,e=>{e.code===this.keyCode&&t(this,u)&&t(this,u).call(this,e)});o(this,"removeEvent",()=>{document.removeEventListener("keydown",t(this,P)),document.removeEventListener("keyup",t(this,k))});this.keyCode=e,document.addEventListener("keydown",t(this,P)),document.addEventListener("keyup",t(this,k))}set onKeyDown(e){h(this,m,e)}set onKeyUp(e){h(this,u,e)}}m=new WeakMap,u=new WeakMap,P=new WeakMap,k=new WeakMap;exports.DragListener=S.DragListener;exports.KeyShortcatListener=C;exports.PanListener=b;exports.ZoomListener=g;
//# sourceMappingURL=event.cjs.map
