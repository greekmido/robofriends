(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),i=t.n(r),s=t(8),c=t.n(s),o=(t(14),t(2)),h=t(3),l=t(5),u=t(4),b=(t(7),t(15),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"card  bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{src:"https://robohash.org/".concat(this.props.name,"?200*200"),alt:"robotCard"}),Object(a.jsx)("div",{children:this.props.name}),Object(a.jsx)("div",{children:this.props.email})]})}}]),t}(r.Component)),m=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this,n=this.props.robots.map((function(n,t){var r=new RegExp(e.props.term,"i");return n.name.search(r)>-1?Object(a.jsx)(b,{id:n.id,name:n.name,email:n.email},t):""}));return Object(a.jsxs)("div",{style:{border:"5px"},children:[" ",n," "]})}}]),t}(r.Component),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",className:"pa3 ba b--green bg-lightest-blue",placeholder:"search cool robots",onChange:this.props.onsearching})})}}]),t}(r.Component),p=function(e){return Object(a.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"},children:e.children})},O=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(h.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:" ops something went wrong"}):this.props.children}}]),t}(r.Component),f=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).whenSearchChanges=function(n){e.setState({searchboxvalue:n.target.value})},e.state={robots:d,searchboxvalue:""},e}return Object(h.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:"ROBO FRIENDS"}),Object(a.jsx)(j,{onsearching:this.whenSearchChanges}),Object(a.jsx)(p,{children:Object(a.jsx)(O,{children:Object(a.jsx)(m,{robots:this.state.robots,term:this.state.searchboxvalue})})})]})}}]),t}(r.Component),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),i(e),s(e)}))};t(16);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),v()},7:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.13d9790f.chunk.js.map