(this.webpackJsonpretroboard=this.webpackJsonpretroboard||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),r=n(7),o=n.n(r),a=(n(13),n(1)),s=n(4),l=n(8),d=(n(14),n.p+"static/media/trash-alt-regular.96ae42b3.svg"),b=n.p+"static/media/caret-left-solid.f3619997.svg",u=n.p+"static/media/caret-right-solid.572aedcd.svg",j=n.p+"static/media/thumbs-up-regular.c0c51d74.svg",h=n.p+"static/media/thumbs-down-regular.7439fd84.svg",O=n(0),g="20",x=function(t){return Object(O.jsxs)("div",{class:"RetroCard","aria-label":"Retro card",children:[Object(O.jsx)("textarea",{class:"textbox",placeholder:"Enter text here","aria-label":"Enter text here",rows:"1",value:t.content,onChange:function(e){return t.update(e,t.id,"content")}}),Object(O.jsxs)("div",{class:"button-group",children:[Object(O.jsx)("button",{type:"button",class:"button button-left",title:"Move left",onClick:function(){return t.moveCard(t.id,"left")},children:Object(O.jsx)("img",{src:b,alt:"Move left",width:g,height:g})}),Object(O.jsx)("button",{type:"button",class:"button button-delete",title:"Delete",onClick:function(){return t.removeCard(t.id)},children:Object(O.jsx)("img",{src:d,alt:"Delete",width:g,height:g})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"button",class:"button button-left",title:"Like",onClick:function(e){return t.update(e,t.id,"likes")},children:Object(O.jsx)("img",{src:j,alt:"Like",width:g,height:g})}),t.likes,Object(O.jsx)("button",{type:"button",class:"button button-left",title:"Dislike",onClick:function(e){return t.update(e,t.id,"dislikes")},children:Object(O.jsx)("img",{src:h,alt:"Dislike",width:g,height:g})}),t.dislikes,Object(O.jsx)("button",{type:"button",class:"button button-right",title:"Move right",onClick:function(){return t.moveCard(t.id,"right")},children:Object(O.jsx)("img",{src:u,alt:"Move right",width:g,height:g})})]})]})]})},f=function(){var t=["Went Well","To Improve","Action Items"],e=Object(c.useState)([]),n=Object(l.a)(e,2),i=n[0],r=n[1],o=function(t){r([].concat(Object(s.a)(i),[{id:i.length>0?i[i.length-1].id+1:0,category:t.target.attributes.category.value,content:"",likes:0,dislikes:0}]))},d=function(e,n){var c,o=i.findIndex((function(t){return t.id===e})),l=Object(s.a)(i),d=t.indexOf(i[o].category);c="right"===n?t[(d+1)%3]:d-1===-1?t[2]:t[d-1],l[o]=Object(a.a)(Object(a.a)({},l[o]),{},{category:c}),r(l)},b=function(t){r(Object(s.a)(i).filter((function(e){return e.id!==t})))},u=function(t,e,n){var c=i.findIndex((function(t){return t.id===e})),o=Object(s.a)(i);switch(n){case"content":o[c]=Object(a.a)(Object(a.a)({},o[c]),{},{content:t.target.value});break;case"likes":o[c]=Object(a.a)(Object(a.a)({},o[c]),{},{likes:i[c].likes+1});break;case"dislikes":o[c]=Object(a.a)(Object(a.a)({},o[c]),{},{dislikes:i[c].dislikes+1})}r(o)},j=function(t){return i.filter((function(e){return e.category===t})).map((function(t){return Object(O.jsx)(x,Object(a.a)(Object(a.a)({},t),{},{removeCard:b,moveCard:d,update:u}),"card-"+t.id)}))};return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("main",{class:"content",children:[Object(O.jsx)("h1",{children:"Retro Board"}),Object(O.jsxs)("div",{children:["Layout \xa0",Object(O.jsx)("button",{class:"button button-default",children:"Column"})]}),Object(O.jsxs)("div",{class:"RetroApp row",children:[Object(O.jsxs)("div",{class:"RetroCategory RetroCategory-1",children:[Object(O.jsx)("h2",{children:"Went Well"}),Object(O.jsx)("button",{type:"button",class:"ButtonAdd button button-default","aria-label":"Add new card",title:"Add new card",category:"Went Well",onClick:o,children:"+"}),j("Went Well")]}),Object(O.jsxs)("div",{class:"RetroCategory RetroCategory-2",children:[Object(O.jsx)("h2",{children:"To Improve"}),Object(O.jsx)("button",{type:"button",class:"ButtonAdd button button-default","aria-label":"Add to new card",title:"Add to new card",category:"To Improve",onClick:o,children:"+"}),j("To Improve")]}),Object(O.jsxs)("div",{class:"RetroCategory RetroCategory-3",children:[Object(O.jsx)("h2",{children:"Action Items"}),Object(O.jsx)("button",{type:"button",class:"ButtonAdd button button-default","aria-label":"Add to new card",title:"Add to new card",category:"Action Items",onClick:o,children:"+"}),j("Action Items")]})]})]})})};o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9fd18a51.chunk.js.map