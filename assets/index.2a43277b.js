import{j as S,u as C,a as w,r as d,v as x,R as G,b as L}from"./vendor.b422f108.js";const O=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};O();var I="/react-memory/assets/square-card.f643865e.svg";const o=S.exports.jsx,u=S.exports.jsxs,g=S.exports.Fragment;function $({card:n,toggleSelected:c}){function a(){c(n.id)}const l=C({to:{transform:`perspective(600px) rotateY(${n.isSelected?0:180}deg)`,config:{mass:15,tension:100,friction:100}}});return u(w.div,{onClick:a,className:`card selectable ${n.isRemoved&&"removed-card"}`,style:l,children:[!n.isSelected&&o("img",{src:I,alt:"",width:"150",height:"150"}),n.isSelected&&o("div",{className:"card-front",children:o("p",{children:n.icon})})]})}function q({cards:n,toggleSelected:c,score:a,moves:l,resetGame:e}){return u(g,{children:[u("div",{className:"score",children:[o("button",{className:"quit-game selectable",onClick:()=>{e()},children:"Abandon round"}),o("p",{className:"score-counter",children:`Score: ${a}`}),o("p",{className:"score-counter",children:`Moves: ${l}`})]}),o("div",{className:"board",children:n.map(t=>o($,{card:t,toggleSelected:c,icon:t.icon},t.id))})]})}function E({startGame:n}){const[c,a]=d.exports.useState("menu"),l=C({from:{opacity:"0.05"},to:{opacity:"1"}});return o(w.div,{className:"menu-container",style:l,children:u("div",{className:"menu",children:[c==="menu"&&u(g,{children:[o("button",{onClick:n,className:"menu-button selectable",children:"Start Game"}),o("button",{onClick:()=>a("highscores"),className:"menu-button selectable",children:"High Scores"})]}),c==="highscores"&&u(g,{children:[o("p",{children:"Not yet implemented"}),o("button",{onClick:()=>a("menu"),className:"menu-button selectable",children:"Back"})]})]})})}function P(){const[n,c]=d.exports.useState([]),[a,l]=d.exports.useState([]),[e,t]=d.exports.useState(0),[m,v]=d.exports.useState(0);d.exports.useState([]);const[p,h]=d.exports.useState("menu"),b=["\u{1F98D}","\u{1F9A9}","\u{1F43C}","\u{1F422}","\u{1F42C}","\u{1F99C}","\u{1F9A2}"],y=5;function F(i){if(a.length>=2)return;const r=n.find(B=>B.id===i);if(r.isRemoved){console.log("Card is removed and not selectable");return}if(r.isSelected)return;const s=[...a,r];l(s),r.isSelected=!r.isSelected;const f=[...n];c(f),s.length===2&&setTimeout(()=>{M(s[0],s[1])},1e3)}function M(i,r){if(v(m+1),i.icon===r.icon)console.log("Match!"),t(e+1),A(i,r),l([]),e+1==y&&R();else{console.log("Not a match!"),l([]),i.isSelected=!i.isSelected,r.isSelected=!r.isSelected;const f=[...n];c(f)}}function R(){console.log("End of game!"),N()}function N(){h("menu"),c([]),t(0),v(0)}function k(){l([]),j(),h("playmemory")}function j(){let i=[];for(let s=0;s<y;s++)i.push({id:x(),icon:b[s],isSelected:!1,isRemoved:!1}),i.push({id:x(),icon:b[s],isSelected:!1,isRemoved:!1});let r=[];for(let s=0;s<i.length;s++){let f=Math.random()*i.length;r.splice(f,0,i[s])}console.log(i),console.log(r),c(r)}function A(i,r){i.isRemoved=!0,r.isRemoved=!0;const s=[...n];c(s)}return u("div",{className:"App app__background",children:[p==="menu"&&o(E,{gameState:p,startGame:k,setGameState:h}),p==="playmemory"&&o(q,{cards:n,toggleSelected:F,score:e,moves:m,resetGame:N})]})}G.render(o(L.StrictMode,{children:o(P,{})}),document.getElementById("root"));