(this["webpackJsonphomos-events-hub"]=this["webpackJsonphomos-events-hub"]||[]).push([[0],{24:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),s=n(1),i=n(5),o=n(22),u=n(10),m=n(3),d={events:null,searchText:"",activeFilterName:"upcoming",filter:"?is_deleted=false&started=false",showAddEvent:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EVENTS":return Object(m.a)({},e,{events:t.events});case"ADD_EVENT":return Object(m.a)({},e,{events:[].concat(Object(u.a)(e.events),[t.event])});case"UPDATE_EVENT":return Object(m.a)({},e,{events:e.events.filter((function(e){return e.id!==t.id}))});case"SET_FILTER":return Object(m.a)({},e,{filter:t.filter});case"SET_SEARCH_TEXT":return Object(m.a)({},e,{searchText:t.text});case"SET_ACTIVE_FILTER":return Object(m.a)({},e,{activeFilterName:t.name});case"SHOW_ADD_EVENT":return Object(m.a)({},e,{showAddEvent:t.state});default:return e}},f={labels:null,isModalOpen:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LABELS":return Object(m.a)({},e,{labels:t.labels});case"ADD_LABEL":return Object(m.a)({},e,{labels:[].concat(Object(u.a)(e.labels),[t.label])});case"DELETE_LABEL":return Object(m.a)({},e,{labels:e.labels.filter((function(e){return e.id!==t.id}))});case"IS_MODAL_OPEN":return Object(m.a)({},e,{isModalOpen:t.isOpen});default:return e}},b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,p=n(4),h=n.n(p),N=n(6),_=function(e){return{type:"ADD_EVENT",event:e}},O=function(e){return{type:"UPDATE_EVENT",id:e}},g=function(e){return{type:"SHOW_ADD_EVENT",state:e}},y=function(e){return{type:"ADD_LABEL",label:e}},j=function(e){return{type:"DELETE_LABEL",id:e}},w=function(e){return{type:"IS_MODAL_OPEN",isOpen:e}};var T=Object(s.b)((function(e){return{showAddEvent:e.events.showAddEvent}}),(function(e){return{setShowAddEvent:function(t){return e(g(t))},setModalOpen:function(t){return e(w(t))}}}))((function(e){return r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"navigation__upper d-flex justify-content-between align-items-center px-3"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"circle rounded-circle rounded-pill circle--red"}),r.a.createElement("div",{className:"circle rounded-circle rounded-pill circle--green"}),r.a.createElement("div",{className:"circle rounded-circle rounded-pill circle--yellow"})),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-ellipsis-h"}))),r.a.createElement("div",{className:"navigation__inner py-5"},r.a.createElement("div",{className:"active"},r.a.createElement("i",{className:"fas fa-inbox item-icon"}),r.a.createElement("p",{className:"item-text"},"Events")),r.a.createElement("div",{onClick:function(){return e.setModalOpen(!0)}},r.a.createElement("i",{className:"fas fa-inbox item-icon"}),r.a.createElement("p",{className:"item-text"},"Labels"))),r.a.createElement("button",{className:"btn btn-primary rounded-circle align-self-center",onClick:function(){return e.setShowAddEvent(!e.showAddEvent)}},e.showAddEvent?r.a.createElement("i",{className:"fas fa-times"}):r.a.createElement("i",{className:"fas fa-plus"})))})),S=n(2);function x(e){var t=e.id,n=e.name,c=e.date,l=e.time,s=e.label,i=e.updateEvent,o=Object(a.useState)(!1),u=Object(S.a)(o,2),m=u[0],d=u[1],v=Object(a.useState)(5),f=Object(S.a)(v,2),E=f[0],b=f[1],p=function(e){var t=Object(a.useState)("-"),n=Object(S.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)("-"),s=Object(S.a)(l,2),i=s[0],o=s[1],u=Object(a.useState)("-"),m=Object(S.a)(u,2),d=m[0],v=m[1],f=Object(a.useState)("-"),E=Object(S.a)(f,2),b=E[0],p=E[1],h=Object(a.useState)(!1),N=Object(S.a)(h,2),_=N[0],O=N[1];return Object(a.useEffect)((function(){var t=new Date(e).getTime(),n=setInterval((function(){var e=(new Date).getTime(),a=t-e;if(e>=t)return O(!0),clearInterval(n);var r=Math.floor(a/864e5),l=Math.floor(a%864e5/36e5),s=Math.floor(a%36e5/6e4),i=Math.floor(a%6e4/1e3);c(r),o(l),v(s),p(i)}),1e3);return function(){clearInterval(n)}}),[e]),_?{days:0,hours:0,minutes:0,seconds:0,eventStarted:_}:{days:r,hours:i,minutes:d,seconds:b}}("".concat(c," ").concat(l)),h=p.days,N=p.hours,_=p.minutes,O=p.seconds,g=p.eventStarted;return Object(a.useEffect)((function(){var e=g&&setInterval((function(){if(0===E)return i(t,{started:!0}),clearInterval(e);b(E-1),d(!m)}),500);return function(){clearInterval(e)}}),[g,t,i,E,m]),r.a.createElement("div",{className:"event mb-3 event--".concat(m)},r.a.createElement("div",{className:"event__header d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"event__time"},c),r.a.createElement("div",{className:"event__label"},s)),r.a.createElement("div",{className:"event__name my-3"},r.a.createElement("h2",{title:n},n)),r.a.createElement("div",{className:"event__timer my-3"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("span",{className:"counter"},h),r.a.createElement("span",{className:"counter"},N),r.a.createElement("span",{className:"counter"},_),r.a.createElement("span",{className:"counter"},O))),r.a.createElement("div",{className:"text-right"},r.a.createElement("i",{className:"fas fa-trash-alt item-icon item-icon--fancy",onClick:function(){return i(t,{is_deleted:!0})},title:"delete event"})))}function A(e){var t=e.name,n=e.date,a=e.label;return r.a.createElement("div",{className:"event mb-3 w-100"},r.a.createElement("div",{className:"event__header d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"event__time"},n),r.a.createElement("div",{className:"event__label"},a)),r.a.createElement("div",{className:"event__name my-3"},r.a.createElement("h2",{title:t},t)))}function D(e){var t=e.id,n=e.name,a=e.date,c=e.label,l=e.updateEvent;return r.a.createElement("div",{className:"event mb-3 w-100"},r.a.createElement("div",{className:"event__header d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"event__time"},a),r.a.createElement("div",{className:"event__label"},c)),r.a.createElement("div",{className:"event__name my-3"},r.a.createElement("h2",{title:n},n)),r.a.createElement("div",{className:"text-right m-0"},r.a.createElement("i",{className:"fas fa-undo item-icon item-icon--fancy",onClick:function(){return l(t,{is_deleted:!1})},title:"undo event"})))}function L(e){var t=e.event,n=e.updateEvent;return{upcoming:function(){return r.a.createElement(x,Object.assign({},t,{updateEvent:n}))},started:function(){return r.a.createElement(A,t)},trashed:function(){return r.a.createElement(D,Object.assign({},t,{updateEvent:n}))}}[e.eventType]()}var C=Object(s.b)((function(e){return{events:e.events}}),(function(e){return{setSearchText:function(t){return e(function(e){return{type:"SET_SEARCH_TEXT",text:e}}(t))},setFilter:function(t){return e(function(e){return{type:"SET_FILTER",filter:e}}(t))},setActiveFilterName:function(t){return e(function(e){return{type:"SET_ACTIVE_FILTER",name:e}}(t))}}}))((function(e){var t=e.events,n=t.searchText,a=t.activeFilterName,c=e.setFilter,l=e.setActiveFilterName,s=e.setSearchText;return r.a.createElement("div",{className:"filters d-flex justify-content-center align-items-center flex-grow-1"},r.a.createElement("div",{className:"form-group mb-0 mx-3 flex-grow-1"},r.a.createElement("input",{className:"form-control",type:"text",name:"name",autoComplete:"off",placeholder:"Search...",value:n,onChange:function(e){return s(e.target.value)}})),r.a.createElement("span",{className:"upcoming"===a?"event__label mr-2":"event__label event__label--light mr-2",onClick:function(){c("?is_deleted=false&started=false"),l("upcoming")}},"Upcoming"),r.a.createElement("span",{className:"started"===a?"event__label mr-2":"event__label event__label--light mr-2",onClick:function(){c("?started=true"),l("started")}},"Started"),r.a.createElement("span",{className:"trashed"===a?"event__label mr-2":"event__label event__label--light mr-2",onClick:function(){c("?is_deleted=true"),l("trashed")}},"Trashed"))}));var M=Object(s.b)((function(e){return{events:e.events}}),(function(e){return{startSetEvents:function(t){return e(function(e){return function(t,n){fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/events".concat(n().events.filter,"&q=").concat(n().events.searchText),{signal:e}).then((function(e){return e.json()})).then((function(e){t(function(e){return{type:"SET_EVENTS",events:e}}(e))}))}}(t))},startUpdateEvent:function(t,n){return e(function(e,t){return function(){var n=Object(N.a)(h.a.mark((function n(a){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/events/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:a(O(e));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=e.startSetEvents,n=e.startUpdateEvent,c=e.events,l=c.events,s=c.filter,i=c.searchText,o=c.activeFilterName;Object(a.useEffect)((function(){var e=new AbortController,n=e.signal;return t(n),function(){e.abort()}}),[s,i,t]);var u=function(e,t){n(e,t)};return r.a.createElement("div",{className:"events p-4"},r.a.createElement("main",{className:"d-flex justify-content-between align-items-center border-bottom my-3 pb-3"},r.a.createElement("h5",{className:"flex-grow-1"},"Events",r.a.createElement("span",{className:"event__label event__label--light ml-2"},null===l||void 0===l?void 0:l.length)),r.a.createElement(C,null)),r.a.createElement("div",{className:"events__overflow d-flex justify-content-start align-items-start flex-wrap"},null===l||void 0===l?void 0:l.map((function(e){return r.a.createElement(L,{updateEvent:u,event:e,key:e.name,eventType:o})}))))})),k=n(48);function I(e){var t=Object(a.useState)(e),n=Object(S.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){c(e.target.value)}}}var F=Object(s.b)((function(e){return{labels:e.labels.labels}}),(function(e){return{setShowAddEvent:function(t){return e(g(t))},startAddEvent:function(t){return e(function(e){return function(){var t=Object(N.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:n(_(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t,n=I(""),a=I(""),c=I(""),l=I("");return r.a.createElement("div",{className:"events p-4"},r.a.createElement("div",{className:"m-3 border-bottom m-0"},r.a.createElement("h5",null,"Add New Event")),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.startAddEvent({id:Object(k.a)(),name:n.value,date:c.value,time:""===l.value?"00:00":l.value,label:a.value,is_deleted:!1,started:!1}),e.setShowAddEvent(!1)},className:"w-50"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",Object.assign({className:"form-control",type:"text",name:"name",autoFocus:!0,required:!0,autoComplete:"off"},n))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Label"),r.a.createElement("select",Object.assign({className:"form-control"},a,{value:a.value}),r.a.createElement("option",null),null===(t=e.labels)||void 0===t?void 0:t.map((function(e){return r.a.createElement("option",{key:e.id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date"),r.a.createElement("input",{className:"form-control",type:"date",name:"date",required:!0,value:new Date("".concat((new Date).getFullYear(),"-").concat(parseInt((new Date).getMonth()+1),"-").concat((new Date).getDate())).getTime()>new Date(c.value).getTime()?"":c.value,onChange:c.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Time"),r.a.createElement("input",{className:"form-control",type:"time",name:"time",value:(new Date).getTime()>new Date("".concat(c.value," ").concat(l.value)).getTime()?"":l.value,onChange:l.onChange})),r.a.createElement("button",{type:"submit",value:"Save",className:"btn btn-primary"},"Save")))})),H=n(16),V=n.n(H);var R=Object(s.b)(void 0,(function(e){return{startDeleteLabel:function(t){return e(function(e){return function(){var t=Object(N.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/labels/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:n(j(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.id,n=e.name,a=e.startDeleteLabel;return r.a.createElement("div",{className:"label d-flex justify-content-between align-items-center border-bottom py-1"},r.a.createElement("div",{className:"label__left"},r.a.createElement("i",{className:"fas fa-tag"}),r.a.createElement("span",{className:"label-name mx-2"},n)),r.a.createElement("div",{className:"label__right"},r.a.createElement("i",{className:"fas fa-trash",onClick:function(){return a(t)}})))}));V.a.setAppElement("#root");var P=Object(s.b)((function(e){return{labels:e.labels}}),(function(e){return{startAddLabel:function(t){return e(function(e){return function(){var t=Object(N.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/labels",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:n(y(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},startSetLabels:function(){return e((function(e){fetch("https://my-json-server.typicode.com/HeshamMohsen/homos-api/labels").then((function(e){return e.json()})).then((function(t){e(function(e){return{type:"SET_LABELS",labels:e}}(t))}))}))},setModalOpen:function(t){return e(w(t))}}}))((function(e){var t,n,c=e.labels,l=c.labels,s=c.isModalOpen,i=e.startAddLabel,o=e.startSetLabels,u=e.setModalOpen,m=I(""),d=Object(a.useState)(""),v=Object(S.a)(d,2),f=v[0],E=v[1],b=Object(a.useRef)();return t=b,n=function(){return u(!1)},Object(a.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&n(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[t,n]),Object(a.useEffect)((function(){o()}),[o]),r.a.createElement("div",null,r.a.createElement(V.a,{isOpen:s,closeTimeoutMS:200,style:{overlay:{backgroundColor:"rgba(5, 25, 71, 0.61)"},content:{width:"25%",height:"400px",background:"#fff",margin:"auto",borderRadius:"10px",boxShadow:"0 3px 6px 0 rgba(0, 0, 0, 0.45)",border:"none",padding:"0",overflow:"hidden"}}},r.a.createElement("div",{ref:b,className:"label-modal h-100 p-3"},r.a.createElement("h6",null,"Labels"),r.a.createElement("div",{className:"py-3"},r.a.createElement("form",{className:"d-flex justify-content-between align-items-center",onSubmit:function(e){if(e.preventDefault(),E(""),l.find((function(e){return e.name===m.value})))return E("Label already exists.");var t={id:Object(k.a)(),name:m.value};i(t),m.onChange({target:{value:""}})}},r.a.createElement("div",{className:"form-group m-0"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",required:!0,autoFocus:!0},m,{placeholder:"add label name"})),f&&r.a.createElement("span",{className:"red-text"},f)),r.a.createElement("button",{type:"submit",className:"btn btn-primary rounded-circle"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"labels"},null===l||void 0===l?void 0:l.map((function(e){return r.a.createElement(R,Object.assign({key:e.id},e))}))))))}));var B=Object(s.b)((function(e){return{showAddEvent:e.events.showAddEvent}}))((function(e){var t=e.showAddEvent;return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"countdown"},r.a.createElement(T,null),t?r.a.createElement(F,null):r.a.createElement(M,null)),r.a.createElement(P,null))})),U=(n(44),n(45),n(46),Object(i.e)(Object(i.c)({events:v,labels:E}),b(Object(i.a)(o.a))));U.subscribe((function(){console.log(U.getState())})),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:U},r.a.createElement(B,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e5908539.chunk.js.map