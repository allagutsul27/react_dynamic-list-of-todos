(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),i=c(1),d=(c(13),c(14),c(3)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.onSelect,s=void 0===c?function(){}:c,a=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()("",{"has-background-info-light":(null===a||void 0===a?void 0:a.id)===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":(null===a||void 0===a?void 0:a.id)===e.id,"fa-eye":(null===a||void 0===a?void 0:a.id)!==e.id})})})})})]},e.id)}))})]})},u=function(e){var t=e.filterBy,c=e.onFilterChange,s=e.query,a=e.onChangeQuery,n=e.onClearQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:c,children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:a}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"clearQuery",onClick:n})})]})]})},b=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.onDelete,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],j=Object(i.useState)(!1),u=Object(l.a)(j,2),m=u[0],O=u[1];return Object(i.useEffect)((function(){var e;O(!0),t&&(e=t.userId,h("/users/".concat(e))).then(d).finally((function(){return O(!1)}))}),[t]),Object(r.jsxs)("div",{className:o()("modal",{"is-active":t}),"data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),m?Object(r.jsx)(b,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===t||void 0===t?void 0:t.id]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"Close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===n||void 0===n?void 0:n.name})]})]})]})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)("All"),d=Object(l.a)(a,2),o=d[0],O=d[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),v=f[0],p=f[1],N=Object(i.useState)(!1),y=Object(l.a)(N,2),g=y[0],C=y[1],k=Object(i.useState)(null),S=Object(l.a)(k,2),w=S[0],T=S[1];Object(i.useEffect)((function(){C(!0),h("/todos").then(s).finally((function(){return C(!1)}))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{filterBy:o,onFilterChange:function(e){O(e.target.value)},query:v,onChangeQuery:function(e){p(e.target.value)},onClearQuery:function(){p("")}})}),Object(r.jsxs)("div",{className:"block",children:[g&&Object(r.jsx)(b,{}),Object(r.jsx)(j,{todos:function(){var e=Object(n.a)(c);switch(""!==v.trim()&&(e=e.filter((function(e){return e.title.toLowerCase().includes(v.trim().toLowerCase())}))),o){case"completed":e=e.filter((function(e){return e.completed}));break;case"active":e=e.filter((function(e){return!e.completed}));break;default:return e}return e}(),onSelect:T,selectedTodo:w})]})]})})}),Object(r.jsx)(m,{selectedTodo:w,onDelete:function(){return T(null)}})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4d04fb73.chunk.js.map