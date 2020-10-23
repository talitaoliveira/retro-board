(this["webpackJsonpretro-board-ui"]=this["webpackJsonpretro-board-ui"]||[]).push([[0],{84:function(e,n,t){e.exports=t(99)},99:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(7),c=t.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(77),o=t(34),u=t(26),s=t(17),d=(t(89),t(38)),m=t(18),f=t(135),p=t(143),g=t(54),b=(t(93),t(131)),E=t(146),v=t(69),h=t.n(v),x=function(e){var n=r.a.useState(null),t=Object(u.a)(n,2),a=t[0],i=t[1],c=function(){i(null)},l=Boolean(a),o=l?"emoji-popover":void 0;return r.a.createElement("div",null,r.a.createElement(b.a,{"aria-describedby":o,"aria-label":"emoji-picker",style:{align:"right"},size:"small",variant:"outlined",onClick:function(e){i(e.currentTarget)}},r.a.createElement(h.a,null)),r.a.createElement(E.a,{ref:r.a.createRef(),id:o,open:l,anchorEl:a,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(g.b,{onSelect:function(n){e.onEmojiSelect(n),c()}})))};function j(){var e=Object(s.a)(["\n  margin-right: 4px;\n"]);return j=function(){return e},e}function k(){var e=Object(s.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: ",";\n"]);return k=function(){return e},e}var O=m.a.div(k(),(function(e){return e.isDragging?"lightgreen":"white"})),y=m.a.div(j()),w=function(e){var n=r.a.useState([]),t=Object(u.a)(n,2),a=t[0],i=t[1],c=r.a.useState(0),l=Object(u.a)(c,2),s=l[0],m=l[1],b=function(e){e.reactions++,m(s+1)},E=function(e){var n=a.find((function(n){return n.id===e.id}));n?b(n):(e.reactions=1,i([].concat(Object(o.a)(a),[e])))};return r.a.createElement(d.b,{draggableId:e.task.id,index:e.index},(function(n,t){return r.a.createElement(O,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,isDragging:t.isDragging}),r.a.createElement(f.a,{container:!0,alignItems:"center"},r.a.createElement(f.a,{container:!0,item:!0,xs:11,md:11},e.task.content),r.a.createElement(f.a,{container:!0,justify:"flex-end",item:!0,xs:1,md:1},r.a.createElement(x,{onEmojiSelect:E})),r.a.createElement(f.a,{container:!0,item:!0,alignItems:"center"},a.map((function(e,n){return r.a.createElement(y,{key:"emoji-reaction-".concat(n)},r.a.createElement(p.a,{variant:"outlined",size:"small","aria-label":e.name,label:e.reactions,avatar:r.a.createElement(g.a,{key:"asd",emoji:e,size:18}),onClick:function(){return b(e)}}))})))))}))};function I(){var e=Object(s.a)(["\n  padding: 8px;\n  transition: background-color 0.2 ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 100px;\n"]);return I=function(){return e},e}function S(){var e=Object(s.a)(["\n  padding: 8px;\n"]);return S=function(){return e},e}function D(){var e=Object(s.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  width: 220px;\n\n  display: flex;\n  flex-direction: column;\n"]);return D=function(){return e},e}var C=m.a.div(D()),z=m.a.h3(S()),B=m.a.div(I(),(function(e){return e.isDraggingOver?"skyblue":"white"})),N=function(e){return r.a.createElement(C,null,r.a.createElement(z,null,e.column.title),r.a.createElement(d.c,{droppableId:e.column.id},(function(n,t){return r.a.createElement(B,Object.assign({ref:n.innerRef},n.droppableProps,{isDraggingOver:t.isDraggingOver}),e.tasks.map((function(e,n){return r.a.createElement(w,{key:e.id,task:e,index:n})})),n.placeholder)})))},P=t(78);function R(){var e=Object(s.a)([""]);return R=function(){return e},e}function J(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-top: 0;\n    padding: 16px 0;\n    \n    & > *,\n    & > *:hover,\n    & > *:active {\n        color: #172B4D;\n        text-decoration: none;\n        cursor: pointer;\n    }\n"]);return J=function(){return e},e}function T(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-left: 0;\n"]);return T=function(){return e},e}function F(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]);return F=function(){return e},e}function H(){var e=Object(s.a)(["\n    font-size: 26px;\n"]);return H=function(){return e},e}function L(){var e=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    background-color: #fafafa;\n"]);return L=function(){return e},e}var W=m.a.div(L()),A=m.a.h1(H()),M=m.a.nav(F()),U=m.a.ul(T()),$=m.a.li(J()),q=Object(m.a)((function(e){var n=e.className,t=e.children,a=Object(P.a)(e,["className","children"]);return r.a.createElement($,null,r.a.createElement("a",Object.assign({className:n},a),t))}))(R()),G=t(136),K=t(27),Q=t(142),V=t(137),X=t(139),Y=t(138),Z=t(74),_=t.n(Z),ee=t(75),ne=t.n(ee),te=t(76),ae=t.n(te),re=t(144),ie=t(140),ce=t(145),le=t(59),oe=t.n(le),ue=t(60),se=t.n(ue),de=Object(G.a)((function(e){return{drawerPaper:{width:240},toolbar:{position:"absolute",right:0,top:-5}}})),me=function(){var e=de(),n=Object(K.a)(),t=r.a.useState(!1),a=Object(u.a)(t,2),i=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{className:e.toolbar},r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){c(!0)}},r.a.createElement(_.a,null))),r.a.createElement(Q.a,{variant:"persistent",anchor:"right",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",null,r.a.createElement(b.a,{onClick:function(){c(!1)}},"ltr"===n.direction?r.a.createElement(ne.a,null):r.a.createElement(ae.a,null))),r.a.createElement(Y.a,null),r.a.createElement(X.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,n){return r.a.createElement(re.a,{button:!0,key:e},r.a.createElement(ie.a,null,n%2===0?r.a.createElement(oe.a,null):r.a.createElement(se.a,null)),r.a.createElement(ce.a,{primary:e}))}))),r.a.createElement(Y.a,null),r.a.createElement(X.a,null,["All mail","Trash","Spam"].map((function(e,n){return r.a.createElement(re.a,{button:!0,key:e},r.a.createElement(ie.a,null,n%2===0?r.a.createElement(oe.a,null):r.a.createElement(se.a,null)),r.a.createElement(ce.a,{primary:e}))})))))},fe=function(){return r.a.createElement(W,null,r.a.createElement(A,null,"Retro-Board"),r.a.createElement(M,null,r.a.createElement(U,null,r.a.createElement(q,{style:{marginLeft:"26px",marginRight:"16px"}},"Home"),r.a.createElement(q,null,"Boards"))),r.a.createElement(me,null))};function pe(){var e=Object(s.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]);return pe=function(){return e},e}var ge=m.a.div(pe()),be=function(){var e=Object(a.useState)({state:"pending"}),n=Object(u.a)(e,2),t=n[0],i=n[1];Object(a.useEffect)((function(){c()}),[]);var c=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n="?";e&&(n+="withTask=true"),fetch("".concat("http://localhost:8080","/column").concat(n)).then((function(e){return e.json()})).then((function(e){return i({state:"resolved",items:e})})).catch((function(e){return i({state:"rejected",error:e})}))},s=function(e){return t.items.find((function(n){return n.id===e}))},m=function(e){return t.items.findIndex((function(n){return n.id===e}))};return"pending"===t.state?r.a.createElement("div",null,"Loading..."):"rejected"===t.state?r.a.createElement("div",null,"Error: ",r.a.createElement("pre",null,JSON.stringify(t.error,null,2))):r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null),r.a.createElement(d.a,{onDragUpdate:function(e){var n=e.destination,a=0;if(n){var r=m(n.droppableId);a=n.index/t.items[r].tasks.length}document.body.style.backgroundColor="rgba(153, 141, 217, ".concat(a,")")},onDragEnd:function(e){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var n=e.destination,a=e.source;if(n&&(n.droppableId!==a.droppableId||n.index!==a.index)){var r=s(a.droppableId),c=s(n.droppableId);r!==c?function(e,n,a,r){var c=e.tasks[n.index],l=Object(o.a)(e.tasks);l.splice(n.index,1);var u=Object(o.a)(a.tasks);u.splice(r.index,0,c);var s=t.items.map((function(e){return e.id===n.droppableId?e.tasks=l:e.id===r.droppableId&&(e.tasks=u),e}));i({state:"resolved",items:s})}(r,a,c,n):function(e,n,a,r){var c=e.tasks[n.index],u=Object(o.a)(e.tasks);u.splice(n.index,1),u.splice(r.index,0,c);var s=Object(l.a)({},t,{items:Object(o.a)(t.items)});s.items[a].tasks=u,i({state:"resolved",items:s.items})}(r,a,m(a.droppableId),n)}}},r.a.createElement(ge,null,t.items.map((function(e){var n=e.tasks;return r.a.createElement(N,{key:e.id,column:e,tasks:n})})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.c7fbfd29.chunk.js.map