(this.webpackJsonpgitpop3=this.webpackJsonpgitpop3||[]).push([[0],{135:function(t,e,n){},136:function(t,e,n){},151:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n(0),o=n.n(c),a=n(28),i=n.n(a),s=(n(135),n(136),n(137),n(77)),u=n(122),j=n(123),l=n(16),d=n(172),b=n(179),h=n(163),O=n(113),f=n(164),m=n(26),g=/https?:\/\/github.com\/([\w-_.]+)\/([\w-_.]+)/,x=function(t){return(null===t||void 0===t?void 0:t.match(g))||null},p=function(t){var e=t.loading;return Object(r.jsx)(m.a,{icon:e?"spinner":"search",spin:e})},C=function(t){var e=t.onSubmit,n=t.loading,o=Object(c.useState)(""),a=Object(l.a)(o,2),i=a[0],s=a[1],u=function(t){t.preventDefault(),null===x(i)?t.stopPropagation():e(i)},j=""!==i&&null===x(i);return Object(r.jsx)(b.a,{onSubmit:u,children:Object(r.jsxs)(h.a,{className:"mb-3",children:[Object(r.jsx)(O.a,{placeholder:"https://github.com/django/django",onChange:function(t){return s(t.target.value)},isInvalid:j}),Object(r.jsx)(h.a.Append,{children:Object(r.jsx)(f.a,{type:"submit",variant:"outline-secondary",onClick:u,children:Object(r.jsx)(p,{loading:n})})})]})})},v=n(114),y=n(174),k=n(165),w=n(166),B=n(115),R=n.n(B),S=function(t){var e=Math.floor((Date.now()-t.getTime())/1e3),n=e/31536e3;return n>1?"".concat(Math.floor(n)," years ago"):(n=e/2592e3)>1?"".concat(Math.floor(n)," months ago"):(n=e/86400)>1?"".concat(Math.floor(n)," days ago"):(n=e/3600)>1?"".concat(Math.floor(n)," hours ago"):(n=e/60)>1?"".concat(Math.floor(n)," minutes ago"):"".concat(Math.floor(e)," seconds ago")},P=function(t){var e=t.nameWithOwner;return Object(r.jsx)("a",{href:"https://github.com/".concat(e),children:e})},D=function(t){var e=t.info;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)(P,{nameWithOwner:e.nameWithOwner})}),Object(r.jsx)("td",{children:e.stargazerCount}),Object(r.jsx)("td",{children:e.forkCount}),Object(r.jsx)("td",{children:e.defaultBranchRef.target.history.totalCount}),Object(r.jsx)("td",{children:S(new Date(e.defaultBranchRef.target.committedDate))})]})},M=function(t,e,n){return t.slice((e-1)*n,e*n)},z=function(t){var e,n=t.column,c=t.orderBy;return Object(r.jsx)(m.a,{icon:c.column===n?(e=c.direction,"asc"===e?"sort-down":"sort-up"):"sort"})},A=function(t){var e=t.onHeaderClick,n=t.sortByCommittedDate,c=t.orderBy;return Object(r.jsx)(y.a,{transition:!1,overlay:Object(r.jsx)(k.a,{id:"last-commit-tooltip",children:"Last commit on the default branch."}),children:Object(r.jsxs)("th",{onClick:function(){return e("committedDate",n)},children:[Object(r.jsx)(m.a,{icon:"calendar-alt"})," Modified"," ",Object(r.jsx)(z,{column:"committedDate",orderBy:c})]})})},N=function(t){var e=t.forks,n=t.activePage,o=t.itemsCountPerPage,a=t.onPageChange,i=function(t){return function(e,n){return Object(v.orderBy)(e,[t],[n])}},s=i((function(t){return t.nameWithOwner.toLowerCase()})),u=i((function(t){return t.stargazerCount})),j=i((function(t){return t.forkCount})),d=i((function(t){return t.defaultBranchRef.target.history.totalCount})),b=i((function(t){return Date.parse(t.defaultBranchRef.target.committedDate)})),h=Object(c.useState)({column:"stargazerCount",direction:"desc",sortFunc:u}),O=Object(l.a)(h,2),f=O[0],g=O[1],x=function(t,e){var n="desc"===f.direction?"asc":"desc",r=t===f.column?n:f.direction;g({column:t,direction:r,sortFunc:e})},p=f.sortFunc(e.slice(),f.direction);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsxs)("th",{onClick:function(){return x("nameWithOwner",s)},children:[Object(r.jsx)(m.a,{icon:["fab","github-alt"]})," Repo"," ",Object(r.jsx)(z,{column:"nameWithOwner",orderBy:f})]}),Object(r.jsxs)("th",{onClick:function(){return x("stargazerCount",u)},children:[Object(r.jsx)(m.a,{icon:"star"})," Stars"," ",Object(r.jsx)(z,{column:"stargazerCount",orderBy:f})]}),Object(r.jsxs)("th",{onClick:function(){return x("forkCount",j)},children:[Object(r.jsx)(m.a,{icon:"code-branch"})," Forks"," ",Object(r.jsx)(z,{column:"forkCount",orderBy:f})]}),Object(r.jsxs)("th",{onClick:function(){return x("commits",d)},children:[Object(r.jsx)(m.a,{icon:"dot-circle"})," Commits"," ",Object(r.jsx)(z,{column:"commits",orderBy:f})]}),Object(r.jsx)(A,{onHeaderClick:x,sortByCommittedDate:b,orderBy:f})]})}),Object(r.jsx)("tbody",{children:M(p,n,o).map((function(t){return Object(r.jsx)(D,{info:t},t.nameWithOwner)}))})]}),Object(r.jsx)(R.a,{itemClass:"page-item",linkClass:"page-link",activePage:n,itemsCountPerPage:o,totalItemsCount:e.length,pageRangeDisplayed:5,onChange:a})]})},T=n(177),F=function(t){var e=t.detail,n=t.onClose,o=Object(c.useState)(!0),a=Object(l.a)(o,2),i=a[0],s=a[1];return Object(r.jsxs)(T.a,{show:i,onHide:function(){s(!1),n&&n()},animation:!1,children:[Object(r.jsx)(T.a.Header,{closeButton:!0,className:"bg-warning",children:Object(r.jsx)(T.a.Title,{children:"Error"})}),Object(r.jsx)(T.a.Body,{children:e})]})},W=n(56),E=n(126),H=n(116),_=n(105),q=n(117),G=n.n(q),I=n(125),L=n(178),Z=n(180),$=n(176),J=n(118);function Q(){var t=Object(H.a)(["\n  fragment RepositoryFields on Repository {\n    nameWithOwner\n    stargazerCount\n    forkCount\n    defaultBranchRef {\n      target {\n        ... on Commit {\n          committedDate\n          history {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n\n  query forks($owner: String!, $name: String!) {\n    repository(owner: $owner, name: $name) {\n      ...RepositoryFields\n      forks(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {\n        nodes {\n          ...RepositoryFields\n        }\n      }\n    }\n  }\n"]);return Q=function(){return t},t}var U=Object(I.a)({uri:"https://api.github.com/graphql"}),V=atob("Z2hwX1c0Y1RRcE55bzRQdkt6ZUlhM3lDREZRa0VGNk8wdzNzRVdhQw==");G()(V,"REACT_APP_GITHUB_PAT environment variable must be set");var X=Object(J.a)((function(t,e){var n=e.headers;return{headers:Object(_.a)(Object(_.a)({},n),{},{authorization:"Bearer ".concat(V)})}})),Y=new L.a({link:X.concat(U),cache:new Z.a}),K=Object($.a)(Q()),tt=function(t,e,n){var r=function(t){var e;return(null===(e=x(t))||void 0===e?void 0:e.slice(1,3))||null}(t)||[null,null],c=Object(l.a)(r,2),o=c[0],a=c[1];Y.query({query:K,variables:{owner:o,name:a}}).then((function(t){return e(function(t){var e=t.data.repository,n=e.forks;return[Object(E.a)(e,["forks"])].concat(Object(W.a)(n.nodes))}(t))})).catch((function(t){return n(t)}))},et=function(){var t=Object(c.useState)(),e=Object(l.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(null),i=Object(l.a)(a,2),s=i[0],u=i[1],j=Object(c.useState)(1),b=Object(l.a)(j,2),h=b[0],O=b[1],f=Object(c.useState)(!1),m=Object(l.a)(f,2),g=m[0],x=m[1],p=function(t){o(t),u(null),x(!1)},v=function(t){u(t),x(!1)},y=s?Object(r.jsx)(F,{detail:s.message}):null,k=n?Object(r.jsx)(N,{forks:n,activePage:h,itemsCountPerPage:10,onPageChange:O}):null;return Object(r.jsxs)(d.a,{children:[y,Object(r.jsx)(C,{onSubmit:function(t){x(!0),tt(t,p,v)},loading:g}),k]})},nt=n(94),rt=function(){return Object(r.jsx)("footer",{className:"footer d-none d-md-block",children:Object(r.jsx)(d.a,{className:"text-center",children:Object(r.jsxs)("span",{children:["Copyright \xa9 Andre Miras 2020 - gitpop3 v",nt.a]})})})},ct=n(182),ot=n(181),at=function(){return Object(r.jsx)(ct.a,{bg:"dark",variant:"dark",expand:"sm",className:"mb-4",children:Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(ct.a.Brand,{href:"/gitpop3",children:[Object(r.jsx)(m.a,{icon:"code-branch"})," GitPop3"]}),Object(r.jsx)(ct.a.Toggle,{}),Object(r.jsx)(ct.a.Collapse,{children:Object(r.jsxs)(ot.a,{className:"mr-auto",children:[Object(r.jsxs)(ot.a.Link,{href:"/gitpop3",children:[Object(r.jsx)(m.a,{icon:"home"})," Home"]}),Object(r.jsxs)(ot.a.Link,{href:"https://github.com/AndreMiras/gitpop3",children:[Object(r.jsx)(m.a,{icon:["fab","github-alt"]})," About"]})]})})]})})},it=n(175),st=n(124);(function(){it.a({dsn:"https://46cd951350084768a0306d2c223f7805@o87984.ingest.sentry.io/5575586",release:nt.a,autoSessionTracking:!0,integrations:[new st.a.BrowserTracing],tracesSampleRate:1})})(),s.b.add(u.a,j.a);var ut=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(at,{}),Object(r.jsx)(et,{}),Object(r.jsx)(rt,{})]})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(ut,{})}),document.getElementById("root"))},94:function(t){t.exports=JSON.parse('{"a":"2020.12.19"}')}},[[151,1,2]]]);
//# sourceMappingURL=main.b0581fb9.chunk.js.map