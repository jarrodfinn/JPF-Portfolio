(this["webpackJsonpjpf-react"]=this["webpackJsonpjpf-react"]||[]).push([[0],{188:function(e,t,a){e.exports=a(325)},193:function(e,t,a){},194:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(39),c=a.n(r),o=a(40),i=a(33),m=a(333),u=(a(193),a(153)),s=a(154),E=a(176),p=a(174),d=a(337),h=(a(194),function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{className:"top fixed"},l.a.createElement(d.a.Item,{link:!0},l.a.createElement(o.b,{to:"/about"},"About")),l.a.createElement(d.a.Item,{link:!0},l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement(d.a.Item,{link:!0},l.a.createElement(o.b,{to:"/portfolio"},"Portfolio"))))}}]),a}(n.Component));function f(){return l.a.createElement("div",null,l.a.createElement(d.a,{fixed:"bottom"},l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement("a",{href:"https://https://docs.google.com/document/d/1XPA8YRSIOZ76fcg6IUIq0EbJ5eA_4KfejXNcFe7l8iM/edit.google.com/open?id=1nmtOf6ClDlIzS3zN55P71jQ6zptgChhz"},"Read my Resume")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/jarrod-finn-41175665/"},"LinkedIn")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{href:"https://https://github.com/jarrodfinn.linkedin.com/in/jarrod-finn-41175665/"},"Github")))))}function g(){return l.a.createElement("div",null,l.a.createElement("h1",null," Welcome, Friends! "),l.a.createElement("p",null,"This is an introduction into the world of Jarrod Finn"))}var b=a(338),y=a(173),w=function(){return l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(b.a.Column,{width:7},l.a.createElement(y.a,{src:"../images/DCRice.jpeg"})),l.a.createElement(b.a.Column,{width:9},l.a.createElement("p",null,"My name is Jarrod Finn and I am brand new to coding! I have chosen to begin the learning journey by taking a coding bootcamp through Penn LPS and Trilogy Education Services. The importance of learning how to code truly excites me and will surely enrich my career."),l.a.createElement("p",null,"My goal is to be an asset to my existing company, as well as facilitating in creating and maintaining websites, not only for my current company, but also for the amazingly talented winemakers we are lucky enough to import to the United States.")))," ")},v=a(175),j=a(334);function k(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Object(i.f)();return l.a.createElement(j.a,{id:"contact-form",onSubmit:function(e){e.preventDefault(),r(!0),fetch("/contact",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:document.querySelector('input[name="first-name"]').value,lastName:document.querySelector('input[name="last-name"]').value,emailAddress:document.querySelector('input[name="email-address"]').value,subject:document.querySelector('textarea[name="subject"]').value})}).then((function(e){if(e.ok)return e.json();throw new Error(e.json())})).then((function(){c.push("/submitted")})).catch((function(e){console.log(e),r(!1)}))},loading:a},l.a.createElement(j.a.Field,null,l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",name:"first-name"})),l.a.createElement(j.a.Field,null,l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",name:"last-name"})),l.a.createElement(j.a.Field,null,l.a.createElement("label",null,"Email Address"),l.a.createElement("input",{type:"email",name:"email-address"})),l.a.createElement(j.a.TextArea,{name:"subject",label:"Message"}),l.a.createElement(j.a.Button,{type:"submit"},"Contact"))}var C=a(336),S=function(){return l.a.createElement(C.a.Group,null,l.a.createElement(C.a,null,l.a.createElement(y.a,{src:"/images/GoBeer.jpeg",wrapped:!0,ui:!1}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,"Go Beer!"),l.a.createElement(C.a.Meta,null,"Project #1"),l.a.createElement(C.a.Description,null,"Go Beer! helps you find the best breweries near you!")),l.a.createElement(C.a.Content,{extra:!0},l.a.createElement("a",{href:"https://ngalter.github.io/gobeer/"},"Go Beer!")))," ",l.a.createElement(C.a,null,l.a.createElement(y.a,{src:"/images/Fright.jpeg",wrapped:!0,ui:!1}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,"FrightFinder"),l.a.createElement(C.a.Meta,null,"Project #2"),l.a.createElement(C.a.Description,null,"FrightFinder will uncover haunted places lurking in the shadows right under your nose!")),l.a.createElement(C.a.Content,{extra:!0},l.a.createElement("a",{href:"https://frightfinder.herokuapp.com/"},"FrightFinder")))," ",l.a.createElement(C.a,null,l.a.createElement(y.a,{src:"/images/wine.jpeg",wrapped:!0,ui:!1}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,"Good Wine and Fine Spirits"),l.a.createElement(C.a.Meta,null,"Project #3"),l.a.createElement(C.a.Description,null,"No matter that you are in quarantine, you can still get booze! We have a large inventory of fine wines, spirits and craft beers ready to deliver to your front stoop!")),l.a.createElement(C.a.Content,{extra:!0},l.a.createElement("a",{href:"https://www.cellarratwine.com/"},"Grab some suds! ")))," ",l.a.createElement(C.a,null,l.a.createElement(y.a,{src:"/images/Stern.jpeg",wrapped:!0,ui:!1}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,"Employee Tracker"),l.a.createElement(C.a.Meta,null,"React Application"),l.a.createElement(C.a.Description,null,"Get to know all your favorite Howard Stern staff members!")),l.a.createElement(C.a.Content,{extra:!0},l.a.createElement("a",{href:"https://jpf-employee-directory.herokuapp.com/"},"Employee Tracker")))," ",l.a.createElement(C.a,null,l.a.createElement(y.a,{src:"",wrapped:!0,ui:!1}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,"Curriculum Vitae"),l.a.createElement(C.a.Meta,null),l.a.createElement(C.a.Description,null)),l.a.createElement(C.a.Content,{extra:!0},l.a.createElement("a",{href:"https://drive.google.com/open?id=1nmtOf6ClDlIzS3zN55P71jQ6zptgChhz"},"Read my Resume")))," ",l.a.createElement(C.a,null,l.a.createElement(y.a,{src:"/images/linkedin.jpeg",wrapped:!0,ui:!1}),l.a.createElement(C.a.Content,null,l.a.createElement(C.a.Header,null,"LinkedIn"),l.a.createElement(C.a.Meta,null),l.a.createElement(C.a.Description,null,"If you want to know more about what else I've done, click the link.")),l.a.createElement(C.a.Content,{extra:!0},l.a.createElement("a",{href:"https://www.linkedin.com/in/jarrod-finn-41175665/"},"LinkedIn")))," ")};var F=function(){return l.a.createElement("p",null," You successfully submitted to the contact page ")};function x(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(h,null),l.a.createElement(i.c,null,l.a.createElement(m.a,null,l.a.createElement(i.a,{path:"/",exact:!0,name:"Home",component:g}),l.a.createElement(i.a,{path:"/about",name:"About",component:w}),l.a.createElement(i.a,{path:"/contact",name:"Contact",component:k}),l.a.createElement(i.a,{path:"/portfolio",name:"Portfolio",component:S}),l.a.createElement(i.a,{path:"/submitted",name:"Submitted",component:F}))),l.a.createElement(f,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.f3fd44c7.chunk.js.map