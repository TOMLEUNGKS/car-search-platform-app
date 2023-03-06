"use strict";(self["webpackChunkionic_car_trading"]=self["webpackChunkionic_car_trading"]||[]).push([[8990],{8990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return a}});var r=n(6587),i=n(545),c=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(t,e,n,a,o)=>{const s=t.ownerDocument.defaultView,u=(0,i.i)(t),d=t=>{const e=50,{startX:n}=t;return u?n>=s.innerWidth-e:n<=e},h=t=>u?-t.deltaX:t.deltaX,l=t=>u?-t.velocityX:t.velocityX,f=t=>d(t)&&e(),k=t=>{const e=h(t),n=e/s.innerWidth;a(n)},w=t=>{const e=h(t),n=s.innerWidth,i=e/n,c=l(t),a=n/2,u=c>=0&&(c>.2||e>a),d=u?1-i:i,f=d*n;let k=0;if(f>5){const t=f/Math.abs(c);k=Math.min(t,540)}o(u,i<=0?.01:(0,r.e)(0,i,.9999),k)};return(0,c.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=8990.fa653d71.js.map