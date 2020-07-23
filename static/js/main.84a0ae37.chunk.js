(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),l=n(7),u=n(1),i=(n(25),n(26),n(6)),s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t},m=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){(function(e){var t="http://127.0.0.1:8000/api/tweets/";return e&&(t="".concat(t).concat(e,"/")),fetch(t).then((function(e){return e.ok?e.json():[]})).then((function(e){return e})).catch((function(e){console.error("Error:",e)}))})(e).then((function(e){r(e)}))}),[e]),{tweets:c,setTweets:r}},f=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){(function(e){var t="http://127.0.0.1:8000/api/tweets/".concat(e,"/");return fetch(t).then((function(e){return e.ok?e.json():[]})).then((function(e){return e})).catch((function(e){console.error("Error:",e)}))})(e).then((function(e){r(e)}))}),[e]),{tweet:c,setTweet:r}},h=Object(a.createContext)(),d=function(e){var t=e.children,n=E().username,a=m(n),r=a.tweets,o=a.setTweets;return c.a.createElement(h.Provider,{value:{tweets:r,setTweets:o}},t)},b=function(){return Object(a.useContext)(h)},p=Object(a.createContext)(),w=function(e){var t=e.children,n=Object(a.useState)(),r=Object(i.a)(n,2),o=r[0],l=r[1];return c.a.createElement(p.Provider,{value:{username:o,setUsername:l}},t)},E=function(){return Object(a.useContext)(p)},v=n(12),j=function(e){var t=b().setTweets,n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],l=r[1],u=Object(a.useState)(240),m=Object(i.a)(u,2),f=m[0],h=m[1];return c.a.createElement("div",{className:e.className},c.a.createElement("div",{className:"col-6 mb-2 mx-auto"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=s("csrftoken");return fetch("http://127.0.0.1:8000/api/tweets/create/",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest","X-CSRFToken":t}}).then((function(e){return e.ok?e.json():{}})).then((function(e){return e})).catch((function(e){console.error("Error:",e)}))}({content:o}).then((function(e){t((function(t){return[e].concat(Object(v.a)(t))}))})),l("")}},c.a.createElement("label",{htmlFor:"tweet"},"Create your new tweet"),c.a.createElement("textarea",{className:"form-control",name:"tweet",id:"tweet",rows:"3",value:o,onChange:function(e){var t=e.target.value.slice(0,240);l(t),h(240-t.length)}}),c.a.createElement("p",{className:"text-muted left"},"".concat(f," characters remaining...")),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet"))))},k=function(e){var t=e.tweet,n=e.action,a=e.handleTweetActionBtn,r=e.className?e.className:"btn btn-primary btn-sm",o="like"===n?"".concat(t.likes," Likes"):"unlike"===n?"Unlike":"retweet"===n?"Retweet":null;return c.a.createElement("button",{className:r,onClick:function(){return a(t.id,t.likes,n)}},o)};function N(e){var t=e.tweet;return t.parent?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},c.a.createElement("p",{className:"mb-0 text-muted small"},"Retweet"),c.a.createElement(O,{hideActions:!0,className:" ",tweet:t.parent}))):null}var O=function(e){var t=e.tweet,n=e.hideActions,r=e.isDetail,o=b().setTweets,u=Object(a.useState)(t||null),m=Object(i.a)(u,2),f=m[0],h=m[1],d=e.className?e.className:"col-10 mx-auto col-md-6 border",p=function(e,t,n){(function(e){var t=s("csrftoken");return fetch("http://127.0.0.1:8000/api/tweets/action/",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest","X-CSRFToken":t}}).then((function(e){return e})).catch((function(e){console.error("Error:",e)}))})({id:e,action:n}).then((function(e){var t=e.status;e.json().then((function(e){200===t?h(e):201===t&&o((function(t){return[e].concat(Object(v.a)(t))}))}))}))};return c.a.createElement("div",{className:d},c.a.createElement("div",null,c.a.createElement("p",null,"Tweet by ",c.a.createElement(l.b,{to:"/profile/".concat(t.user,"/")},t.user)),c.a.createElement("p",null,"".concat(t.id," - ").concat(t.content)),c.a.createElement(N,{tweet:t})),c.a.createElement("div",{className:"btn btn-group"},f&&!0!==n&&c.a.createElement(c.a.Fragment,null,["like","unlike","retweet"].map((function(e,t){return c.a.createElement(k,{key:t,tweet:f,action:e,handleTweetActionBtn:p})}))),!r&&c.a.createElement(l.b,{to:"/".concat(t.id,"/"),className:"btn btn-primary"},"View Tweet")))},g=function(){var e=b().tweets;return c.a.createElement("div",{className:"col-10 mx-auto col-md-8"},e.map((function(e){return c.a.createElement(O,{key:e.id,tweet:e,className:"py-5 my-5 border bg-white text-dark"})})))},y=function(){return c.a.createElement("div",{className:"col-10 mx-auto mt-5"},c.a.createElement(d,null,c.a.createElement(j,null),c.a.createElement(g,null)))};var x=function(e){var t=E(),n=t.username,r=t.setUsername,o=Object(u.g)().user,l=Object(u.f)().pathname==="/profile/".concat(o,"/");return Object(a.useEffect)((function(){r(o)}),[r,o]),c.a.createElement("div",{className:"App"},l?n?c.a.createElement(y,null):null:c.a.createElement(y,null))},T=function(){return c.a.createElement("div",null,c.a.createElement(l.b,{to:"/",exact:"true"},"Home"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=document.getElementById("root");o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(T,null),c.a.createElement(w,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:x}),c.a.createElement(u.a,{path:"/profile/:user",exact:!0,component:x}),c.a.createElement(u.a,{path:"/:id",exact:!0,component:function(e){var t=e.match.params.id,n=f(t).tweet;return null===n?null:c.a.createElement(O,{tweet:n,isDetail:!0,className:e.className})}}))))),C),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.84a0ae37.chunk.js.map