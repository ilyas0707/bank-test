(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{2:function(e,a,t){e.exports={block:"Auth_block__2UioV",page:"Auth_page__2L0CQ",pageMedia:"Auth_pageMedia__1DYnG",heading:"Auth_heading__WJUZq",headingMedia:"Auth_headingMedia__Meifj",form:"Auth_form__3JEam",inputBlock:"Auth_inputBlock__1O3q2",inputBlockMedia:"Auth_inputBlockMedia__3MlvC",input:"Auth_input__3XXop",label:"Auth_label__3K6nK",buttons:"Auth_buttons__25USh",btn:"Auth_btn__3fK43",btnMedia:"Auth_btnMedia__f_dFs",message:"Auth_message__2AuKD",loading:"Auth_loading__2KYvJ",warn:"Auth_warn__1isR5",hidden:"Auth_hidden__3ImxA",signUp:"Auth_signUp__3OME7",signUpMedia:"Auth_signUpMedia__3ZQSa",sign:"Auth_sign__qgy8o",mb:"Auth_mb__DFuoK"}},20:function(e,a,t){e.exports={heading:"Add_heading__2v5sR",form:"Add_form__3NhVV",formMedia:"Add_formMedia__3xv4k"}},23:function(e,a,t){e.exports={container:"App_container__20CTP"}},24:function(e,a,t){e.exports={list:"List_list__1JkQl",heading:"List_heading__wo1ir",loading:"List_loading__vkxnd"}},3:function(e,a,t){e.exports={navbar:"Navbar_navbar__3vNev",flexBlock:"Navbar_flexBlock__3LCdR",logo:"Navbar_logo__1Uj4b",ham:"Navbar_ham__2-iOT",hamMedia:"Navbar_hamMedia__1IrPN",menu:"Navbar_menu__9kyAB",menuMedia:"Navbar_menuMedia__NGImc",open:"Navbar_open__33X7B",item:"Navbar_item__3Hj4v",link:"Navbar_link__3TPyz",linkMedia:"Navbar_linkMedia__3rs8I",colored:"Navbar_colored__FjAO8",icon:"Navbar_icon__cBz4T",overlay:"Navbar_overlay__EiKtw",message:"Navbar_message__7u7yd",messageMedia:"Navbar_messageMedia__2-iq4",active:"Navbar_active__2sDmL",text:"Navbar_text__Yy7yr",submit:"Navbar_submit__2YqK2",span:"Navbar_span__2fC27",line:"Navbar_line__3DyYp",title:"Navbar_title__xoWX-"}},30:function(e,a,t){e.exports=t.p+"static/media/delete.4db19185.svg"},33:function(e,a,t){e.exports=t.p+"static/media/logout.ada60a6b.png"},34:function(e,a,t){e.exports=t(46)},39:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),o=t.n(r),i=(t(39),t(23)),l=t.n(i),s=t(16),u=t(15),m=t(6),d=t.n(m),_=t(12),p=t(18),b=t(19),f=t(8),g=t(2),h=t.n(g),v=t(14),k=(t(22),t(13)),N=function(){var e=Object(n.useState)(!1),a=Object(f.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),o=Object(f.a)(r,2),i=o[0],l=o[1];return{loading:t,request:Object(n.useCallback)(function(){var e=Object(_.a)(d.a.mark((function e(a){var t,n,r,o,i,s=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,r=s.length>3&&void 0!==s[3]?s[3]:{},c(!0),e.prev=4,n&&(n=JSON.stringify(n),r["Content-Type"]="application/json"),e.next=8,fetch(a,{method:t,body:n,headers:r}).then(c(!0));case 8:return o=e.sent,e.next=11,o.json().then(c(!1));case 11:if(i=e.sent,o.ok){e.next=14;break}throw new Error(i.message||"Something went wrong");case 14:return c(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),c(!1),l(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(a){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){return l(null)}),[])}},E=function(){return Object(n.useCallback)((function(e){e&&v.a.error(e)}),[])},O=Object(n.createContext)({token:null,userId:null,login:!1,logout:!1,isAuthentificated:!1}),j=function(){return Object(n.useCallback)((function(e){e&&v.a.success(e)}),[])},x=function(){v.a.configure({autoClose:3e3,draggable:!0});var e=Object(n.useContext)(O),a=E(),t=j(),r=N(),o=r.loading,i=r.request,l=r.error,s=r.clearError,u=Object(n.useState)({email:"",password:""}),m=Object(f.a)(u,2),g=m[0],x=m[1],M=Object(n.useState)(!1),y=Object(f.a)(M,2),A=y[0],w=y[1];Object(n.useEffect)((function(){a(l),s()}),[l,a,s]);var C=function(e){e.preventDefault(),!1===A?w(!0):!0===A&&w(!1)},L=function(e){x(Object(b.a)({},g,Object(p.a)({},e.target.name,e.target.value)))},D=function(){var e=Object(_.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===g.email&&""===g.password){e.next=14;break}return e.prev=2,e.next=5,i("/api/auth/register","POST",Object(b.a)({},g));case 5:c=e.sent,t(c.message),w(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:e.next=15;break;case 14:a("Inputs should not be empty");case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),S=function(){var t=Object(_.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""===g.email&&""===g.password){t.next=13;break}return t.prev=2,t.next=5,i("/api/auth/login","POST",Object(b.a)({},g));case 5:c=t.sent,e.login(c.token,c.userId),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=14;break;case 13:a("Inputs should not be empty");case 14:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),B=Object(k.useMediaQuery)({minDeviceWidth:550}),I=Object(k.useMediaQuery)({minDeviceWidth:370}),U=[{id:"email",name:"Email",text:"Ex: *****@happy.com"},{id:"password",name:"Password",text:"Must be minimum 6 characters"}].map((function(e){var a=e.id,t=e.name,n=e.text;return c.a.createElement("div",{key:a,className:B?"".concat(h.a.inputBlock):"".concat(h.a.inputBlock," ").concat(h.a.inputBlockMedia)},c.a.createElement("input",{type:"password"===a?"password":"text",className:h.a.input,name:a,autoComplete:"off",placeholder:t,value:"email"===a?g.email:g.password,onChange:L}),c.a.createElement("label",{htmlFor:a,className:h.a.label},t),A?c.a.createElement("p",{className:h.a.warn},n):c.a.createElement("span",null))}));return c.a.createElement("div",{className:h.a.block},c.a.createElement("div",{className:B?"".concat(A?"".concat(h.a.page," ").concat(h.a.hidden):h.a.page):"".concat(A?"".concat(h.a.page," ").concat(h.a.hidden):h.a.page," ").concat(h.a.pageMedia)},c.a.createElement("h1",{className:I?h.a.heading:"".concat(h.a.heading," ").concat(h.a.headingMedia)},"Login"),c.a.createElement("form",{action:"#",className:h.a.form,id:"form"},U),c.a.createElement("p",{className:I?h.a.signUp:"".concat(h.a.signUp," ").concat(h.a.signUpMedia)},"Not yet signed up, so"," ",c.a.createElement("a",{href:"/",className:h.a.sign,onClick:C},"Sign Up")),c.a.createElement("div",{className:h.a.buttons},c.a.createElement("a",{href:"/",className:o?h.a.loading:I?h.a.btn:"".concat(h.a.btn," ").concat(h.a.btnMedia),onClick:S},o?"":"Login"))),c.a.createElement("div",{className:B?"".concat(A?h.a.page:"".concat(h.a.page," ").concat(h.a.hidden)):"".concat(A?h.a.page:"".concat(h.a.page," ").concat(h.a.hidden)," ").concat(h.a.pageMedia)},c.a.createElement("h1",{className:I?h.a.heading:"".concat(h.a.heading," ").concat(h.a.headingMedia)},"Registration"),c.a.createElement("form",{action:"#",className:h.a.form},U),c.a.createElement("div",{className:h.a.buttons},c.a.createElement("a",{href:"/",className:o?h.a.loading:I?h.a.btn:"".concat(h.a.btn," ").concat(h.a.btnMedia),onClick:D},o?"":"Sign Up")),c.a.createElement("p",{className:I?"".concat(h.a.signUp," ").concat(h.a.mb):"".concat(h.a.signUp," ").concat(h.a.mb," ").concat(h.a.signUpMedia)},"OR return to"," ",c.a.createElement("a",{href:"/",className:h.a.sign,onClick:C},"Login"))))},M=t(20),y=t.n(M),A=function(){v.a.configure({autoClose:3e3,draggable:!0});var e=Object(n.useContext)(O).token,a=N(),t=a.loading,r=a.request,o=a.error,i=a.clearError,l=E(),s=j(),u=Object(n.useState)({amount:"",bankName:""}),m=Object(f.a)(u,2),g=m[0],x=m[1];Object(n.useEffect)((function(){l(o),i()}),[o,l,i]);var M=function(e){x(Object(b.a)({},g,Object(p.a)({},e.target.name,e.target.value)))},A=function(){var a=Object(_.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),""===g.amount&&""===g.bankName){a.next=13;break}return a.prev=2,a.next=5,r("/api/bank/add","POST",{amount:g.amount,bankName:g.bankName},{Authorization:"Bearer ".concat(e)});case 5:n=a.sent,s(n.message),a.next=11;break;case 9:a.prev=9,a.t0=a.catch(2);case 11:a.next=14;break;case 13:l("Inputs should not be empty");case 14:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}(),w=Object(k.useMediaQuery)({minDeviceWidth:600}),C=[{id:"amount",name:"Amount",type:"number"},{id:"bankName",name:"Bank name",type:"text"}].map((function(e){var a=e.id,t=e.name,n=e.type;return c.a.createElement("div",{key:a,className:h.a.inputBlock},c.a.createElement("input",{type:n,className:h.a.input,name:a,placeholder:t,value:"number"===n?g.amount:g.bankName,onChange:M}),c.a.createElement("label",{htmlFor:a,className:h.a.label},t))}));return c.a.createElement("div",{className:y.a.add},c.a.createElement("h2",{className:y.a.heading},"Add Transaction"),c.a.createElement("form",{action:"#",className:w?"".concat(h.a.form," ").concat(y.a.form):"".concat(h.a.form," ").concat(y.a.form," ").concat(y.a.formMedia)},C,c.a.createElement("div",{className:h.a.buttons},c.a.createElement("a",{href:"/",className:t?h.a.loading:h.a.btn,onClick:A},t?"":"Add"))))},w=t(24),C=t.n(w),L=t(5),D=t.n(L),S=t(30),B=t.n(S),I=function(e){var a=e.transaction,t=Object(u.g)(),r=Object(n.useContext)(O).token,o=N().request,i=Object(n.useCallback)(function(){var e=Object(_.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("/api/bank/delete/".concat(a),"DELETE",{Authorization:"Bearer ".concat(r)});case 3:t.push("/add"),t.push("/list"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),[r,o,t]),l=Object(k.useMediaQuery)({minDeviceWidth:900}),s=l?D.a.item:"".concat(D.a.item," ").concat(D.a.itemMedia),m=l?D.a.big:"".concat(D.a.big," ").concat(D.a.bigMedia),p=a.map((function(e){var a=e.amount,t=e.bankName,n=e.date,r=e._id;return c.a.createElement("div",{className:D.a.block,key:n},c.a.createElement("p",{className:s},new Date(n).toLocaleDateString(),c.a.createElement("span",{className:D.a.time}," / "+new Date(n).toLocaleTimeString())),c.a.createElement("p",{className:s},t.charAt(0).toUpperCase()+t.substr(1)),c.a.createElement("p",{className:s},a,"$"),c.a.createElement("p",{key:r,className:D.a.link},c.a.createElement("a",{href:"/",className:D.a.del,onClick:function(e){e.preventDefault(),i(r)}},c.a.createElement("img",{className:l?D.a.img:"".concat(D.a.img," ").concat(D.a.imgMedia),src:B.a,alt:"delete"}))))}));return 0===a.length?c.a.createElement("div",{className:D.a.all},c.a.createElement("p",{className:D.a.text},"No transactions!")):c.a.createElement("div",{className:l?D.a.all:"".concat(D.a.all," ").concat(D.a.allMedia)},c.a.createElement("div",{className:D.a.block},c.a.createElement("p",{className:"".concat(s," ").concat(m)},"Date / Time"),c.a.createElement("p",{className:"".concat(s," ").concat(m)},"Bank name"),c.a.createElement("p",{className:"".concat(s," ").concat(m)},"Amount")),p)},U=function(e){var a=Object(n.useContext)(O).token,t=N(),r=t.loading,o=t.request,i=Object(n.useState)(void 0),l=Object(f.a)(i,2),s=l[0],u=l[1],m=e.id,p=Object(n.useCallback)(Object(_.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("api/bank/".concat(m),"GET",null,{Authorization:"Bearer ".concat(a)});case 3:t=e.sent,u(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a,m,o]);return Object(n.useEffect)((function(){p()}),[p]),c.a.createElement("div",{className:C.a.list},c.a.createElement("h2",{className:C.a.heading},"List of transactions"),r?c.a.createElement("div",{className:"".concat(h.a.loading," ").concat(C.a.loading)}):s&&c.a.createElement(I,{transaction:s}))},T=t(3),W=t.n(T),q=t(33),P=t.n(q),J=function(){var e=Object(u.g)(),a=Object(n.useContext)(O),t=Object(n.useState)(!1),r=Object(f.a)(t,2),o=r[0],i=r[1],m=Object(n.useState)(!1),d=Object(f.a)(m,2),_=d[0],p=d[1],b=function(a){a.preventDefault(),i(!1),e.push("/")},g=Object(k.useMediaQuery)({minDeviceWidth:520}),h=[{url:"/add",id:1,name:"Add"},{url:"/list",id:2,name:"List"}].map((function(e){var a=e.url,t=e.id,n=e.name;return c.a.createElement("li",{key:t,className:W.a.item},c.a.createElement(s.b,{to:a,className:g?W.a.link:_?"".concat(W.a.link," ").concat(W.a.linkMedia," ").concat(W.a.open):"".concat(W.a.link," ").concat(W.a.linkMedia)},n))}));return c.a.createElement("nav",{className:W.a.navbar},c.a.createElement("div",{className:l.a.container},c.a.createElement("div",{className:W.a.flexBlock},c.a.createElement("div",{className:W.a.title},c.a.createElement("a",{href:"/",className:W.a.logo,onClick:b},"Bank"),c.a.createElement("a",{href:"/",className:g?W.a.ham:"".concat(W.a.ham," ").concat(W.a.hamMedia),onClick:function(e){e.preventDefault(),p(!1===_)}},c.a.createElement("span",{className:"".concat(W.a.line," ").concat(_?W.a.open:"")}),c.a.createElement("span",{className:W.a.line}),c.a.createElement("span",{className:"".concat(W.a.line," ").concat(_?W.a.open:"")}))),c.a.createElement("ul",{className:g?W.a.menu:_?"".concat(W.a.menu," ").concat(W.a.menuMedia," ").concat(W.a.open):"".concat(W.a.menu," ").concat(W.a.menuMedia)},h,c.a.createElement("li",{className:W.a.item},c.a.createElement("a",{href:"/",className:g?"".concat(W.a.link," ").concat(W.a.colored):_?"".concat(W.a.link," ").concat(W.a.colored," ").concat(W.a.linkMedia," ").concat(W.a.open):"".concat(W.a.link," ").concat(W.a.colored," ").concat(W.a.linkMedia),onClick:function(e){e.preventDefault(),i(!0)}},c.a.createElement("img",{className:W.a.icon,src:P.a,alt:"logout"}))))),c.a.createElement("div",{className:"".concat(W.a.overlay," ").concat(o?W.a.active:!o),onClick:b}),c.a.createElement("div",{className:"".concat(g?W.a.message:"".concat(W.a.message," ").concat(W.a.messageMedia)," ").concat(W.a.message," ").concat(o?W.a.active:!o)},c.a.createElement("p",{className:W.a.text},"Are you sure, that you want to logout?"),c.a.createElement("a",{href:"/",className:"".concat(W.a.submit," ").concat(W.a.left),onClick:function(t){t.preventDefault(),a.logout(),e.push("/")}},"Yes"),c.a.createElement("a",{href:"/",className:"".concat(W.a.submit," ").concat(W.a.right),onClick:b},"No"))))};var K=function(){var e=function(){var e=Object(n.useState)(null),a=Object(f.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),o=Object(f.a)(r,2),i=o[0],l=o[1],s=Object(n.useCallback)((function(e,a){c(e),l(a),localStorage.setItem("userData",JSON.stringify({userId:a,token:e}))}),[]),u=Object(n.useCallback)((function(){c(null),l(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&s(e.token,e.userId)}),[s]),{login:s,logout:u,token:t,userId:i}}(),a=e.token,t=e.login,r=e.logout,o=e.userId,i=!!a,m=function(e,a){return e?c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/add",exact:!0},c.a.createElement(A,null)),c.a.createElement(u.b,{path:"/list",exact:!0},c.a.createElement(U,{id:a})),c.a.createElement(u.a,{to:"/add"})):c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(x,null)),c.a.createElement(u.a,{to:"/"}))}(i,o);return c.a.createElement(O.Provider,{value:{token:a,login:t,logout:r,userId:o,isAuthentificated:i}},c.a.createElement(s.a,null,c.a.createElement("div",{className:l.a.app},i&&c.a.createElement(J,null),m)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports={all:"Listof_all__n1dza",allMedia:"Listof_allMedia__1LPW4",block:"Listof_block__nWlNM",item:"Listof_item__2n7eO",itemMedia:"Listof_itemMedia__3_Yy1",big:"Listof_big__2az_V",bigMedia:"Listof_bigMedia__10P7-",text:"Listof_text__1thEH",time:"Listof_time__2ehAv",link:"Listof_link__2ZUxl",del:"Listof_del__W-XT3",img:"Listof_img__2Zfrf",imgMedia:"Listof_imgMedia__3GGiR"}}},[[34,1,2]]]);
//# sourceMappingURL=main.cde1e6fd.chunk.js.map