(this["webpackJsonpexam-sample"]=this["webpackJsonpexam-sample"]||[]).push([[0],{12:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(23),i=n.n(o),l=(n(12),n(3)),s=n.p+"static/media/logo.d8811d42.png";var j=function(){var e=Object(l.l)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"left sideNav d-flex flex-column",children:Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("img",{className:"logo",src:s,style:{height:"50px",width:"50px",margin:"15px",top:"0px"},alt:""}),window.innerWidth>1400?Object(c.jsx)(c.Fragment,{children:["Home","Tictac","Slido"].map((function(t,n){return Object(c.jsx)("p",{onClick:function(){"Home"==={page:t}.page&&e("/"),"Slido"==={page:t}.page&&e("/slido"),"Tictac"==={page:t}.page&&e("/tictactoe")},children:t},n)}))}):Object(c.jsx)(c.Fragment,{children:["H","Ti","Sl"].map((function(t,n){return Object(c.jsxs)("p",{onClick:function(){"H"==={page:t}.page&&e("/"),"Sl"==={page:t}.page&&e("/slido"),"Ti"==={page:t}.page&&e("/tictactoe")},children:[" ",t," "]},n)}))})]})})})},d=n(5),f=n.n(d),g=n(7),u=n(4);var b=function(){var e=a.useState(localStorage.getItem("X")),t=Object(u.a)(e,2),n=t[0],r=t[1],o=a.useState(!1),i=Object(u.a)(o,2),l=i[0],s=i[1],j=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cgi.cse.unsw.edu.au/~cs6080/raw/data/score.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("fetching",e),r(e.score),localStorage.setItem("X",e.score)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.useEffect((function(){void 0!==localStorage.getItem("X")&&null!==localStorage.getItem("X")||j()}),[l]),a.useEffect((function(){0===n&&(alert("Congratulations!"),localStorage.removeItem("X"),s(!l))}),[n]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container",style:{textAlign:"center"},children:Object(c.jsxs)("div",{style:{color:"blue",fontSize:"2em"},children:[" Please choose an option from the sidebar.",Object(c.jsx)("br",{}),"Games left to win: ",n," ",Object(c.jsx)("button",{onClick:function(){localStorage.removeItem("X"),s(!l)},children:"Reset"})]})})})},p=n(8);var m=function(){var e=a.useState([["","",""],["","",""],["","",""]]),t=Object(u.a)(e,2),n=t[0],r=t[1],o=a.useState("O"),i=Object(u.a)(o,2),l=i[0],s=i[1],j=a.useState(""),d=Object(u.a)(j,2),f=d[0],g=d[1],b=a.useState(0),m=Object(u.a)(b,2),O=m[0],x=m[1],h=function(e,t){var c=l,a=Object(p.a)({},n);a[e][t]=c,r(a),s("X"===l?"O":"X")},v=function(e){if("O"===e){var t=localStorage.getItem("X");localStorage.setItem("X",parseInt(t)-1)}},S=function(){for(var e=0,t=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]];e<t.length;e++){var c=t[e],a=Object(u.a)(c,3),r=a[0],o=a[1],i=a[2];if(""!==n[r[0]][r[1]]&&n[r[0]][r[1]]===n[o[0]][o[1]]&&n[o[0]][o[1]]===n[i[0]][i[1]])return g("X"===l?"X":"O"),void v(l)}},w={X:"rgb(220,220,255",O:"rgb(255,220,220)"};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container1",style:{textAlign:"center"},children:[Object(c.jsx)("div",{className:"basicBoard",children:Array.from({length:3}).map((function(e,t){return Object(c.jsx)("div",{className:"row",children:Array.from({length:3}).map((function(e,a){return Object(c.jsx)("div",{className:"cell",onClick:function(){return function(e,t){h(e,t),x(O+1),console.log(O),S()}(t,a)},style:{backgroundColor:""===n[t][a]?w[l]:"transparent"},children:n[t][a]})}))})}))}),Object(c.jsxs)("div",{className:"info",style:{display:9===O||""!==f?"flex":"none"},children:[""===f?Object(c.jsx)("p",{style:{fontSize:"14pt"},children:"No one wins"}):Object(c.jsxs)("p",{style:{fontSize:"14pt"},children:[" ",f," wins"]})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:["A total of ",O," moves were complete"]})]})]})})},O=n(9),x=n.p+"static/media/1.fc6bde86.png",h=n.p+"static/media/2.ed7dca6a.png",v=n.p+"static/media/3.aff7d8e5.png",S=n.p+"static/media/4.e435c05d.png",w=n.p+"static/media/5.428142a1.png",I=n.p+"static/media/6.01949773.png",y=n.p+"static/media/7.599fb031.png",X=n.p+"static/media/8.a6b684fd.png";function k(){var e=a.useState(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],o=a.useState([]),i=Object(u.a)(o,2),l=(i[0],i[1]),s=a.useState(null),j=Object(u.a)(s,2),d=j[0],f=j[1],g=a.useState({}),b=Object(u.a)(g,2),m=b[0],k=b[1],A=a.useState(0),E=Object(u.a)(A,2),N=E[0],F=E[1],L=a.useState(!1),T=Object(u.a)(L,2),z=T[0],H=T[1],R=a.useState(!1),M=Object(u.a)(R,2),B=M[0],D=M[1],G=[2,5,8],J=[x,h,v,S,w,I,y,X];a.useEffect((function(){!function(){for(var e=[];e.length<9;){var t=Math.floor(9*Math.random()+0);-1===e.indexOf(t)&&e.push(t)}for(var n in console.log(e),l(e),e)0===e[n]&&(f(parseInt(n)),console.log(n));for(var c=0;c<9;c++){var a=m;a[c]=J[e[c]-1],k(a)}}()}),[n]),a.useEffect((function(){}),[m]);var P=function(e){if(F(N+1),e+1===d&&2!==e&5!==e&&8!==e){var t=Object(p.a)({},m),n=m[e];if(t[e]=Object(p.a)({},m[e+1]),t[e+1]=n,k(t),f(e),U(t)){var c=localStorage.getItem("X");localStorage.setItem("X",parseInt(c)+1),alert("Correct!"),H(!0)}}else if(e-1===d&&0!==e&3!==e&&6!==e){console.log("here wrong");var a=Object(p.a)({},m),r=m[e];if(a[e]=Object(p.a)({},m[e-1]),a[e-1]=r,k(a),f(e),U(a)){var o=localStorage.getItem("X");localStorage.setItem("X",parseInt(o)+1),alert("Correct!"),H(!0)}}else if(e+3===d){var i=Object(p.a)({},m),l=m[e];if(i[e]=Object(p.a)({},m[e+3]),i[e+3]=l,k(i),f(e),U(i)){var s=localStorage.getItem("X");localStorage.setItem("X",parseInt(s)+1),alert("Correct!"),H(!0)}}else if(e-3===d){var j=Object(p.a)({},m),g=m[e];if(j[e]=Object(p.a)({},m[e-3]),j[e-3]=g,k(j),f(e),U(j)){var u=localStorage.getItem("X");localStorage.setItem("X",parseInt(u)+1),alert("Correct!"),H(!0)}}},U=function(e){for(var t in J)if(e[t]!==J[t])return!1;return!0},W=C("ArrowUp"),q=C("ArrowDown"),K=C("ArrowLeft"),Q=C("ArrowRight");return a.useEffect((function(){if(!0===B){if(W){console.log("keyUP"),console.log(d+3);var e=Object(p.a)({},m),t=m[d+3];if(e[d+3]=Object(p.a)({},m[d]),e[d]=t,k(e),f(d+3),U(e)){var n=localStorage.getItem("X");localStorage.setItem("X",parseInt(n)+1),alert("Correct!"),H(!0)}}if(q){console.log("keyDown");var c=Object(p.a)({},m),a=m[d-3];if(c[d-3]=Object(p.a)({},m[d]),c[d]=a,k(c),f(d-3),U(c)){var r=localStorage.getItem("X");localStorage.setItem("X",parseInt(r)+1),alert("Correct!"),H(!0)}}if(K)if(console.log("keyLeft"),2===d||5===d||8===d)console.log("should not move");else{var o=Object(p.a)({},m),i=m[d+1];if(o[d+1]=Object(p.a)({},m[d]),o[d]=i,k(o),f(d+1),U(o)){var l=localStorage.getItem("X");localStorage.setItem("X",parseInt(l)+1),alert("Correct!"),H(!0)}}if(Q)if(console.log("keyRight"),0===d||3===d||6===d)console.log("should not move");else{var s=Object(p.a)({},m),j=m[d-1];if(s[d-1]=Object(p.a)({},m[d]),s[d]=j,k(s),f(d-1),U(s)){var g=localStorage.getItem("X");localStorage.setItem("X",parseInt(g)+1),alert("Correct!"),H(!0)}}}}),[W,q,K,Q]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container1",style:{textAlign:"center"},children:Object(c.jsxs)("div",{onClick:function(){D(!B)},children:[Object(c.jsx)("div",{style:{fontSize:"2rem"},children:"Click on the image pieces or click on the plate then use the arrow key to move it!"}),Object(c.jsxs)("div",{style:{width:"460px",height:"460px",margin:"0 auto",boxShadow:B?" 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.5), 0 -6px 64px -6px hsla(0, 0%, 0%, 0.05)":"none"},onClick:function(){D(!B)},children:[Object(O.a)(Array(9)).map((function(e,t){return Object(c.jsx)(c.Fragment,{children:G.includes(t)?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:{display:"inline-flex",width:"150px",height:"150px",border:"1px solid #333",textAlign:"center"},children:Object(c.jsx)("img",{src:m[t],alt:"",onClick:function(){P(t)}})},t),Object(c.jsx)("br",{})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{style:{display:"inline-flex",width:"150px",height:"150px",border:"1px solid #333",textAlign:"center"},children:Object(c.jsx)("img",{src:m[t],alt:"",onClick:function(){P(t)}})},t)})})}))," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){!function(){var e={};for(var t in J)e[t]=J[t];k(e)}(),H(!0),console.log(z),F(1)},disabled:!0===z,children:" Solve"}),Object(c.jsx)("button",{onClick:function(){r(!n),F(0),H(!1)},disabled:0===N&&!0!==z,children:" Reset"}),"  "]})]})})})}function C(e){var t=a.useState(!1),n=Object(u.a)(t,2),c=n[0],r=n[1];function o(t){t.key===e&&r(!0)}var i=function(t){t.key===e&&r(!1)};return a.useEffect((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}}),[]),c}function A(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"footer"})})}var E=n(22);var N=function(){return Object(c.jsxs)(E.a,{style:{margin:"0px"},children:[Object(c.jsx)(j,{}),Object(c.jsx)("main",{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",element:Object(c.jsx)(b,{})}),Object(c.jsx)(l.a,{path:"/slido",element:Object(c.jsx)(k,{})}),Object(c.jsx)(l.a,{path:"/tictactoe",element:Object(c.jsx)(m,{})})]})}),Object(c.jsx)(A,{})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7be4f3a1.chunk.js.map