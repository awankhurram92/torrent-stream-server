(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),l=n(4),s=n(1),i=n(6);function u(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(s.f)();return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"mt-5"},"Create video stream"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",name:"link",placeholder:"Torrent file or magnet link",value:n,onChange:function(e){c(e.target.value)}})),r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){n.trim()&&o.push("/play?torrent=".concat(encodeURIComponent(n)))}},"Load video"))}var m=n(2),d=n.n(m),p=n(7),f=n(15),h="".concat(window.location.protocol,"//").concat(window.location.host),b="".concat(h,"/stream"),v="",E=!1,g=[];function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return fetch("".concat(h,"/").concat(t),Object(f.a)({},v?{headers:Object(f.a)({authorization:"bearer ".concat(v)},(n||{}).headers)}:{},{},n))},e.abrupt("return",a().then((function(e){return N(e,a)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=18;break}if(403!==t.status){e.next=8;break}if(!E){e.next=6;break}return e.abrupt("return",new Promise((function(e,t){g.push((function(){n().then((function(t){return e(N(t,n))})).catch(t)}))})));case 6:return E=!0,e.abrupt("return",new Promise((function(e,t){var a=document.getElementById("authorization_modal"),r=document.getElementById("authorization_form"),c=document.getElementById("authorization_input"),o=document.getElementById("backdrop");if(a instanceof HTMLElement&&r instanceof HTMLFormElement&&c instanceof HTMLInputElement&&o){document.body.classList.add("modal-open"),a.style.display="block",o.style.display="block";r.addEventListener("submit",(function l(s){s.preventDefault(),c.value&&(v=c.value,r.removeEventListener("submit",l),document.body.classList.remove("modal-open"),a.style.display="",o.style.display="none",E=!1,n().then(function(){var t=Object(p.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(N(a,n)),g.forEach((function(e){e()}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(t))}))}})));case 8:return e.prev=8,e.next=11,t.json();case 11:a=e.sent.error,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),a=String(e.t0);case 17:throw Error(a)||"Bad response";case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e,null,[[8,14]])})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.link,e.abrupt("return",y("api/torrents?torrent=".concat(n),{method:"POST"}).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("api/torrents").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return"".concat(b,"?torrent=").concat(encodeURIComponent(e),"&file=").concat(encodeURIComponent(t))}function C(){return(C=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("api/usage").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(21);function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var n=1024,a=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,c)).toFixed(a))+" "+r[c]}function T(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),m=u[0],f=u[1],h=Object(s.g)(),b=new URLSearchParams(h.search),v=b.get("torrent"),E=b.get("file");return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=8;break}return e.t0=c,e.next=4,x({link:v});case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=9;break;case 8:f("Torrent link is not specified");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){f(String(e))}))}),[v]),r.a.createElement("div",{className:"container"},m&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},m),!n&&!m&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),n&&v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("small",null,n.name)),E?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"text-muted"},r.a.createElement("small",null,E)," - ",r.a.createElement(l.b,{to:"?torrent=".concat(encodeURIComponent(v))},"view all"))):r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"File"),r.a.createElement("th",null,"Size"),r.a.createElement("th",null,"Play"))),r.a.createElement("tbody",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",a=Object(I.a)(e).sort((function(e,n){return function e(t,n){if("number"===typeof t&&"number"===typeof n)return t<n?-1:t>n?1:0;if(t instanceof Array&&n instanceof Array){var a=t.map((function(t,a){return e(t,n[a])})).filter((function(e){return 0!==e}));return a.length?a[0]:1}if("object"===typeof t&&"object"===typeof n)return e(Object.values(null!==t&&void 0!==t?t:{})[0],Object.values(null!==n&&void 0!==n?n:{})[0]);var r=String(t).toLowerCase(),c=String(n).toLowerCase();return r<c?-1:r>c?1:0}(t(e),t(n))}));return"desc"===n?a.reverse():a}(n.files,(function(e){return e.name})).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.path.split("/").map((function(e,t,n){return t+1<n.length?r.a.createElement("span",{className:"text-muted"},e," / "):e}))),r.a.createElement("td",null,L(e.length)),r.a.createElement("td",null,r.a.createElement(l.b,{to:"?torrent=".concat(encodeURIComponent(v),"&file=").concat(encodeURIComponent(e.path)),className:"btn btn-outline-primary ti-control-play"})))})))),E&&v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("video",{width:"720",controls:!0},r.a.createElement("source",{src:O(v,E),type:"video/mp4"}),"Your browser does not support HTML5 video.")),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",value:O(v,E)})))))}var B=n(20);function D(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(a.useState)(""),p=Object(i.a)(d,2),f=p[0],h=p[1],b=function(){return function(){return S.apply(this,arguments)}().then((function(e){return c(e)})).catch((function(e){h(String(e))}))},v=function(){return function(){return C.apply(this,arguments)}().then((function(e){return m(e)})).catch((function(e){h(String(e))}))};return Object(a.useEffect)((function(){var e,t;return b().then((function(){e=setInterval((function(){b()}),5e3)})),v().then((function(){t=setInterval((function(){b()}),6e4)})),function(){clearInterval(e),clearInterval(t)}}),[]),r.a.createElement("div",{className:"container"},f&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},f),!n&&!f&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),u&&r.a.createElement("div",{className:"card-deck mb-3 text-center"},r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Disk space")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title pricing-card-title"},L(u.totalDiskSpace-u.freeDiskSpace),r.a.createElement("small",{className:"text-muted"},"/ ",L(u.totalDiskSpace))),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat((u.totalDiskSpace-u.freeDiskSpace)/u.totalDiskSpace*100,"%")}})))),r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Torrents space")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title pricing-card-title"},L(u.usedTorrentSpace),r.a.createElement("small",{className:"text-muted"},"/ ",L(u.freeDiskSpace+u.usedTorrentSpace))),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(u.usedTorrentSpace/(u.freeDiskSpace+u.usedTorrentSpace)*100,"%")}}))))),n&&r.a.createElement(r.a.Fragment,null,n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Download"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Play"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,L(e.downloaded)," (",L(e.downloadSpeed),"/s)"),r.a.createElement("td",null,Object(B.a)(e.started)),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/play?torrent=".concat(encodeURIComponent(e.link)),className:"btn btn-outline-primary ti-control-play"}))))}))))):r.a.createElement("div",{className:"alert alert-warning",role:"alert"},"No active torrents at the moment")))}function U(){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},r.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},r.a.createElement(l.b,{className:"text-decoration-none text-dark",to:"/"},"Torrent Stream Server")),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement(l.b,{className:"p-2 text-dark",to:"/"},"Home"),r.a.createElement(l.b,{className:"p-2 text-dark",to:"/dashboard"},"Dashboard")),r.a.createElement("a",{className:"btn btn-outline-primary",href:"https://github.com/KiraLT/torrent-stream-server",target:"_blank",rel:"noopener noreferrer"},"Find on GitHub")),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:u,exact:!0}),r.a.createElement(s.a,{path:"/play",component:T,exact:!0}),r.a.createElement(s.a,{path:"/dashboard",component:D,exact:!0})))}var F,R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}F=document.getElementById("root"),M({onUpdate:function(){var e=document.createElement("div");e.style.position="fixed",e.style.bottom="0",e.style.left="0",e.style.right="0",e.style.zIndex="9999",e.style.textAlign="center",e.style.background="rgba(208, 208, 208, 0.90)",e.style.padding="2px",e.className="text-secondary",e.innerHTML='\n                New content is available and will be used when all tabs for this page are closed\n                <button class="btn btn-link" onClick="this.parentNode.style.display = \'none\'">\n                    x\n                </button>',document.body.appendChild(e)}}),o.a.render(r.a.createElement(l.a,null,r.a.createElement(U,null)),F)}},[[22,1,2]]]);
//# sourceMappingURL=main.6f7e4f76.chunk.js.map