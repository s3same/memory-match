(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var a=t(1),n=t.n(a),r=t(5),i=t.n(r),s=(t(10),t(3)),d=t(2),o=(t(11),t(12),t.p+"static/media/cover.fdc04073.png"),u=t(0);function l(c){var e=c.card,t=c.handleChoice,a=c.flipped,n=c.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:a?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:o,onClick:function(){n||t(e)},alt:"cover"})]})})}var m=[{src:t.p+"static/media/helmet.289d34aa.png",matched:!1},{src:t.p+"static/media/potion.39128ec4.png",matched:!1},{src:t.p+"static/media/ring.eb335215.png",matched:!1},{src:t.p+"static/media/scroll.7994baa9.png",matched:!1},{src:t.p+"static/media/shield.686cf175.png",matched:!1},{src:t.p+"static/media/sword.0f48f218.png",matched:!1}];var j=function(){var c=Object(a.useState)([]),e=Object(d.a)(c,2),t=e[0],n=e[1],r=Object(a.useState)(0),i=Object(d.a)(r,2),o=i[0],j=i[1],b=Object(a.useState)(null),f=Object(d.a)(b,2),p=f[0],h=f[1],O=Object(a.useState)(null),g=Object(d.a)(O,2),v=g[0],x=g[1],N=Object(a.useState)(!1),S=Object(d.a)(N,2),k=S[0],M=S[1],w=function(){var c=function(c){for(var e=c.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),a=[c[t],c[e]];c[e]=a[0],c[t]=a[1]}return c}([].concat(m,m)).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));h(null),x(null),n(c),j(0)},y=function(c){console.log(c),p?x(c):h(c)};Object(a.useEffect)((function(){p&&v&&(M(!0),p.src===v.src?(n((function(c){return c.map((function(c){return c.src===p.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),C()):setTimeout((function(){return C()}),1e3))}),[p,v]);var C=function(){h(null),x(null),j((function(c){return c+1})),M(!1)};return Object(a.useEffect)((function(){w()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Memory Game"}),Object(u.jsxs)("p",{children:["Turns: ",o]}),Object(u.jsx)("button",{onClick:w,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(u.jsx)(l,{card:c,handleChoice:y,flipped:c===p||c===v||c.matched,disabled:k},c.id)}))})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c8e73b7b.chunk.js.map