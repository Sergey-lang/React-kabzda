(this.webpackJsonpreact_kabzda=this.webpackJsonpreact_kabzda||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),c=n(3),r=n.n(c),o=(n(9),n(1));function i(e){return a.a.createElement("div",{className:"App"},a.a.createElement(u,{title:e.titleValue,onClick:e.onClick}),!e.value&&a.a.createElement(d,null))}function u(e){return a.a.createElement("div",null,a.a.createElement("h3",{onClick:function(t){return e.onClick()}},e.title))}function d(){return a.a.createElement("ul",null,a.a.createElement("li",null,"1"),a.a.createElement("li",null,"2"),a.a.createElement("li",null,"3"))}function s(e){console.log("onOff rendering");var t=Object(l.useState)(!!e.defaultValue&&e.defaultValue),n=Object(o.a)(t,2),c=n[0],r=n[1],i={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",backgroundColor:c?"green":"white"},u={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",marginLeft:"2px",padding:"2px",backgroundColor:c?"white":"red"},d={width:"10px",height:"10px",borderRadius:"5px",border:"1px solid black",display:"inline-block",marginLeft:"5px",backgroundColor:c?"green":"red"};return a.a.createElement("div",null,a.a.createElement("div",{style:i,onClick:function(){r(!0),e.onChange(!0)}},"On"),a.a.createElement("div",{style:u,onClick:function(){r(!1),e.onChange(!1)}},"Of"),a.a.createElement("div",{style:d}))}n(10);function m(e){return a.a.createElement("div",null,a.a.createElement(k,{selected:e.value>0,onClick:e.onClick,value:1}),a.a.createElement(k,{selected:e.value>1,onClick:e.onClick,value:2}),a.a.createElement(k,{selected:e.value>2,onClick:e.onClick,value:3}),a.a.createElement(k,{selected:e.value>3,onClick:e.onClick,value:4}),a.a.createElement(k,{selected:e.value>4,onClick:e.onClick,value:5}))}function k(e){return a.a.createElement("span",{onClick:function(){e.onClick(e.value)}},e.selected?a.a.createElement("b",null,"star "):"star ")}function E(){var e=Object(l.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(!0),u=Object(o.a)(r,2),d=u[0],k=u[1],E=Object(l.useState)(4),p=Object(o.a)(E,2),v=p[0],h=p[1];return a.a.createElement("div",{className:"App"},a.a.createElement("hr",null),a.a.createElement(s,{onChange:k}),d.toString(),a.a.createElement("hr",null),a.a.createElement(i,{titleValue:"Control Accordion",onClick:function(){c(!n)},value:n}),a.a.createElement("hr",null),a.a.createElement(m,{value:v,onClick:h}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c92a9311.chunk.js.map