(this.webpackJsonppwascanner=this.webpackJsonppwascanner||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c=n(33),o=n.n(c),r=n(132),i=n.n(r),s=(n(138),n(139),n(79)),a=n(105),d=n(28);function u(){var e=Object(c.useRef)(null),t=Object(c.useState)([]),n=Object(s.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(),u=Object(s.a)(i,2),l=u[0],j=u[1],b=Object(c.useState)(""),f=Object(s.a)(b,2),h=f[0],v=f[1],O=Object(c.useState)(""),g=Object(s.a)(O,2),w=g[0],p=g[1],x=Object(c.useMemo)((function(){return new a.BrowserQRCodeReader}),[]);return Object(c.useEffect)((function(){a.BrowserQRCodeReader.listVideoInputDevices().then((function(e){e&&e.length&&r(e)})).catch((function(e){p(e.toString())}))}),[]),Object(c.useEffect)((function(){var t;if(x&&l&&null!=e.current)return x.decodeFromVideoDevice(l.deviceId,e.current,(function(e,t){e&&v(e.getText())})).then((function(e){t=e})),function(){t&&t.stop()}}),[x,l]),console.log(e.current),w?Object(d.jsxs)("div",{children:[" ",w]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"20px"},children:o.map((function(e){return Object(d.jsx)("button",{onClick:function(){j(e)},children:e.label},e.deviceId)}))}),Object(d.jsx)("video",{style:{width:"50vw",height:"50vh",borderStyle:"dashed",borderWidth:1,borderColor:"red"},ref:e}),Object(d.jsx)("div",{children:h})]})}var l=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{children:"v2"}),Object(d.jsx)(u,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),j()}},[[142,1,2]]]);
//# sourceMappingURL=main.bf9860ee.chunk.js.map