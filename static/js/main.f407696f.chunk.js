(this.webpackJsonpreact_kabzda=this.webpackJsonpreact_kabzda||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),o=n.n(c),r=(n(9),n(1));function i(e){console.log("onOff rendering");var t=Object(a.useState)(!!e.defaultValue&&e.defaultValue),n=Object(r.a)(t,2),c=n[0],o=n[1],i={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",backgroundColor:c?"green":"white"},u={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",marginLeft:"2px",padding:"2px",backgroundColor:c?"white":"red"},d={width:"10px",height:"10px",borderRadius:"5px",border:"1px solid black",display:"inline-block",marginLeft:"5px",backgroundColor:c?"green":"red"};return l.a.createElement("div",null,l.a.createElement("div",{style:i,onClick:function(){o(!0),e.onChange(!0)}},"On"),l.a.createElement("div",{style:u,onClick:function(){o(!1),e.onChange(!1)}},"Of"),l.a.createElement("div",{style:d}))}n(10);function u(e){return l.a.createElement("div",null,l.a.createElement(d,{selected:e.value>0,onClick:e.onClick,value:1}),l.a.createElement(d,{selected:e.value>1,onClick:e.onClick,value:2}),l.a.createElement(d,{selected:e.value>2,onClick:e.onClick,value:3}),l.a.createElement(d,{selected:e.value>3,onClick:e.onClick,value:4}),l.a.createElement(d,{selected:e.value>4,onClick:e.onClick,value:5}))}function d(e){return l.a.createElement("span",{onClick:function(){e.onClick(e.value)}},e.selected?l.a.createElement("b",null,"star "):"star ")}function s(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=(t[0],t[1],Object(a.useState)(!0)),c=Object(r.a)(n,2),o=c[0],d=c[1],s=Object(a.useState)(4),m=Object(r.a)(s,2),p=m[0],k=m[1],b=Object(a.useState)(0),v=Object(r.a)(b,2),f=v[0],h=v[1];return Object(a.useEffect)((function(){document.title="you clicked ".concat(f," times")})),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"element_wrapper"},l.a.createElement(i,{onChange:d}),o.toString()),l.a.createElement("div",{className:"element_wrapper"},l.a.createElement(u,{value:p,onClick:k})),l.a.createElement("div",{className:"element_wrapper"},l.a.createElement("button",{onClick:function(){return h(f+1)}},"click"),l.a.createElement("div",null,f)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.f407696f.chunk.js.map