(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,t,e){},function(c,t,e){},function(c,t,e){},,function(c,t,e){"use strict";e.r(t);var a=e(1),n=e.n(a),r=e(5),i=e.n(r),s=(e(10),e(3)),d=e(2),o=(e(11),e(12),e.p+"static/media/cover.fdc04073.png"),u=e(0);function l(c){var t=c.card,e=c.handleChoice,a=c.flipped,n=c.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:a?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:t.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:o,onClick:function(){n||e(t)},alt:"cover"})]})})}var j=[{src:e.p+"static/media/helmet.289d34aa.png",matched:!1},{src:e.p+"static/media/potion.39128ec4.png",matched:!1},{src:e.p+"static/media/ring.eb335215.png",matched:!1},{src:e.p+"static/media/scroll.7994baa9.png",matched:!1},{src:e.p+"static/media/shield.686cf175.png",matched:!1},{src:e.p+"static/media/sword.0f48f218.png",matched:!1}];var m=function(){var c=Object(a.useState)([]),t=Object(d.a)(c,2),e=t[0],n=t[1],r=Object(a.useState)(0),i=Object(d.a)(r,2),o=i[0],m=i[1],b=Object(a.useState)(null),f=Object(d.a)(b,2),p=f[0],h=f[1],O=Object(a.useState)(null),g=Object(d.a)(O,2),v=g[0],x=g[1],N=Object(a.useState)(!1),M=Object(d.a)(N,2),S=M[0],k=M[1],w=function(){var c=function(c){for(var t=c.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),a=[c[e],c[t]];c[t]=a[0],c[e]=a[1]}return c}([].concat(j,j)).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));h(null),x(null),n(c),m(0)},C=function(c){console.log(c),p?x(c):h(c)};Object(a.useEffect)((function(){p&&v&&(k(!0),p.src===v.src?(n((function(c){return c.map((function(c){return c.src===p.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),y()):setTimeout((function(){return y()}),1e3))}),[p,v]);var y=function(){h(null),x(null),m((function(c){return c+1})),k(!1)};return Object(a.useEffect)((function(){w()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Magic Match"}),Object(u.jsxs)("p",{children:["Turns: ",o]}),Object(u.jsx)("button",{onClick:w,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:e.map((function(c){return Object(u.jsx)(l,{card:c,handleChoice:C,flipped:c===p||c===v||c.matched,disabled:S},c.id)}))})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c3a1a89d.chunk.js.map