(this.webpackJsonpgitpop3=this.webpackJsonpgitpop3||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n(1),a=n.n(r),s=n(29),j=n.n(s),i=(n(86),n(87),n(88),n(33)),o=n(79),b=n(80),d=n(35),h=n(105),u=n(102),O=n(108),l=n(103),x=n(21),p=function(e){var t=e.onSubmit,n=Object(r.useState)(),a=Object(d.a)(n,2),s=a[0],j=a[1];return Object(c.jsxs)(u.a,{className:"mb-3",children:[Object(c.jsx)(O.a,{placeholder:"https://github.com/django/django",onChange:function(e){return j(e.target.value)}}),Object(c.jsx)(u.a.Append,{children:Object(c.jsx)(l.a,{variant:"outline-secondary",onClick:function(){return t(s)},children:Object(c.jsx)(x.a,{icon:"search"})})})]})},f=n(104),m=function(e){var t=e.info;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.nameWithOwner}),Object(c.jsx)("td",{children:"Stars"}),Object(c.jsx)("td",{children:"Forks"}),Object(c.jsx)("td",{children:"Modified"})]})},g=function(e){var t=e.forks;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{children:[Object(c.jsx)(x.a,{icon:["fab","github-alt"]})," ","Repo"]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(x.a,{icon:"star"})," ","Stars"]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(x.a,{icon:"code-branch"})," ","Forks"]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(x.a,{icon:"calendar-alt"})," ","Modified"]})]})}),Object(c.jsx)("tbody",{children:t.map((function(e){return Object(c.jsx)(m,{info:e})}))})]})})},k=n(71),v=n(55),w=n(36),N=n(72);function y(){var e=Object(k.a)(["\n  query Forks($owner: String! $name: String!) {\n    repository(owner: $owner, name: $name) {\n      forks(first: 10) {\n        nodes {\n          nameWithOwner\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var M=Object(w.createHttpLink)({uri:"https://api.github.com/graphql"}),S=atob("ZWJiYjZmNmEwYjgzNTMzMjE0ZjEwZDdkZjVmNjQ0MTdkZjJhNGMyNw=="),A=Object(N.a)((function(e,t){var n=t.headers;return{headers:Object(v.a)(Object(v.a)({},n),{},{authorization:S?"Bearer ".concat(S):""})}})),C=new w.ApolloClient({link:A.concat(M),cache:new w.InMemoryCache}),Z=Object(w.gql)(y()),q=/https:\/\/github.com\/(\w+)\/(\w+)/,J=function(e,t){var n=function(e){return e.match(q).slice(1,3)}(e),c=Object(d.a)(n,2),r=c[0],a=c[1];C.query({query:Z,variables:{owner:r,name:a}}).then((function(e){return t(e)}))},E=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),n=t[0],a=t[1],s=function(e){return a(e.data.repository.forks.nodes)},j=n?Object(c.jsx)(g,{forks:n}):null;return Object(c.jsxs)(h.a,{children:[Object(c.jsx)(p,{onSubmit:function(e){return J(e,s)}}),j]})},F=n(76),$=function(){return Object(c.jsx)("footer",{className:"footer d-none d-md-block",children:Object(c.jsx)(h.a,{className:"text-center",children:Object(c.jsxs)("span",{children:["Copyright \xa9 Andre Miras 2020 - gitpop3 v",F.a]})})})},z=n(106),B=n(107),L=function(){return Object(c.jsx)(z.a,{bg:"dark",variant:"dark",expand:"sm",className:"mb-4",children:Object(c.jsxs)(h.a,{children:[Object(c.jsxs)(z.a.Brand,{href:"/gitpop3",children:[Object(c.jsx)(x.a,{icon:"code-branch"})," ","GitPop3"]}),Object(c.jsx)(z.a.Toggle,{}),Object(c.jsx)(z.a.Collapse,{children:Object(c.jsxs)(B.a,{className:"mr-auto",children:[Object(c.jsxs)(B.a.Link,{href:"/gitpop3",children:[Object(c.jsx)(x.a,{icon:"home"})," ","Home"]}),Object(c.jsxs)(B.a.Link,{href:"https://github.com/AndreMiras/gitpop3",children:[Object(c.jsx)(x.a,{icon:["fab","github-alt"]})," ","About"]})]})})]})})};i.b.add(o.a,b.a);var T=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(L,{}),Object(c.jsx)(E,{}),Object(c.jsx)($,{})]})};j.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root"))},76:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},86:function(e,t,n){},87:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.4da01ca2.chunk.js.map