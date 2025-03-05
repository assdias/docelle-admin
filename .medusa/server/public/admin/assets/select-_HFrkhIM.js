import{r as t,bE as ut,bI as k,cO as $,j as d,bJ as M,bF as Ce,bB as Pe,bV as pt,bC as Ie,bD as ft,cP as mt,bK as P,aL as Ne,bL as ht,bG as gt,bY as vt,cQ as xt,bM as St,bP as wt,bN as bt,bO as yt,bQ as Ct,bR as Tt,cR as It,bS as Et,bT as Pt,E as Q,c0 as Nt}from"./index-Bdq-MROr.js";import{C as Rt}from"./check-CizfQ2P9.js";import{T as _t}from"./triangles-mini-B41M0pgA.js";function Ee(o,[n,e]){return Math.min(e,Math.max(n,o))}var Mt=[" ","Enter","ArrowUp","ArrowDown"],Ot=[" ","Enter"],se="Select",[ce,de,At]=mt(se),[te,go]=ut(se,[At,Pe]),ue=Pe(),[jt,z]=te(se),[Dt,Lt]=te(se),Re=o=>{const{__scopeSelect:n,children:e,open:l,defaultOpen:a,onOpenChange:u,value:r,defaultValue:i,onValueChange:s,dir:f,name:v,autoComplete:w,disabled:I,required:E,form:T}=o,c=ue(n),[g,b]=t.useState(null),[p,h]=t.useState(null),[O,A]=t.useState(!1),oe=pt(f),[N=!1,D]=Ie({prop:l,defaultProp:a,onChange:u}),[K,q]=Ie({prop:r,defaultProp:i,onChange:s}),V=t.useRef(null),H=g?T||!!g.closest("form"):!0,[U,B]=t.useState(new Set),F=Array.from(U).map(R=>R.props.value).join(";");return d.jsx(ft,{...c,children:d.jsxs(jt,{required:E,scope:n,trigger:g,onTriggerChange:b,valueNode:p,onValueNodeChange:h,valueNodeHasChildren:O,onValueNodeHasChildrenChange:A,contentId:Ce(),value:K,onValueChange:q,open:N,onOpenChange:D,dir:oe,triggerPointerDownPosRef:V,disabled:I,children:[d.jsx(ce.Provider,{scope:n,children:d.jsx(Dt,{scope:o.__scopeSelect,onNativeOptionAdd:t.useCallback(R=>{B(L=>new Set(L).add(R))},[]),onNativeOptionRemove:t.useCallback(R=>{B(L=>{const W=new Set(L);return W.delete(R),W})},[]),children:e})}),H?d.jsxs(Je,{"aria-hidden":!0,required:E,tabIndex:-1,name:v,autoComplete:w,value:K,onChange:R=>q(R.target.value),disabled:I,form:T,children:[K===void 0?d.jsx("option",{value:""}):null,Array.from(U)]},F):null]})})};Re.displayName=se;var _e="SelectTrigger",Me=t.forwardRef((o,n)=>{const{__scopeSelect:e,disabled:l=!1,...a}=o,u=ue(e),r=z(_e,e),i=r.disabled||l,s=k(n,r.onTriggerChange),f=de(e),v=t.useRef("touch"),[w,I,E]=et(c=>{const g=f().filter(h=>!h.disabled),b=g.find(h=>h.value===r.value),p=tt(g,c,b);p!==void 0&&r.onValueChange(p.value)}),T=c=>{i||(r.onOpenChange(!0),E()),c&&(r.triggerPointerDownPosRef.current={x:Math.round(c.pageX),y:Math.round(c.pageY)})};return d.jsx(gt,{asChild:!0,...u,children:d.jsx(M.button,{type:"button",role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":"none",dir:r.dir,"data-state":r.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Qe(r.value)?"":void 0,...a,ref:s,onClick:P(a.onClick,c=>{c.currentTarget.focus(),v.current!=="mouse"&&T(c)}),onPointerDown:P(a.onPointerDown,c=>{v.current=c.pointerType;const g=c.target;g.hasPointerCapture(c.pointerId)&&g.releasePointerCapture(c.pointerId),c.button===0&&c.ctrlKey===!1&&c.pointerType==="mouse"&&(T(c),c.preventDefault())}),onKeyDown:P(a.onKeyDown,c=>{const g=w.current!=="";!(c.ctrlKey||c.altKey||c.metaKey)&&c.key.length===1&&I(c.key),!(g&&c.key===" ")&&Mt.includes(c.key)&&(T(),c.preventDefault())})})})});Me.displayName=_e;var Oe="SelectValue",Ae=t.forwardRef((o,n)=>{const{__scopeSelect:e,className:l,style:a,children:u,placeholder:r="",...i}=o,s=z(Oe,e),{onValueNodeHasChildrenChange:f}=s,v=u!==void 0,w=k(n,s.onValueNodeChange);return $(()=>{f(v)},[f,v]),d.jsx(M.span,{...i,ref:w,style:{pointerEvents:"none"},children:Qe(s.value)?d.jsx(d.Fragment,{children:r}):u})});Ae.displayName=Oe;var kt="SelectIcon",je=t.forwardRef((o,n)=>{const{__scopeSelect:e,children:l,...a}=o;return d.jsx(M.span,{"aria-hidden":!0,...a,ref:n,children:l||"▼"})});je.displayName=kt;var Vt="SelectPortal",De=o=>d.jsx(ht,{asChild:!0,...o});De.displayName=Vt;var J="SelectContent",Le=t.forwardRef((o,n)=>{const e=z(J,o.__scopeSelect),[l,a]=t.useState();if($(()=>{a(new DocumentFragment)},[]),!e.open){const u=l;return u?Ne.createPortal(d.jsx(ke,{scope:o.__scopeSelect,children:d.jsx(ce.Slot,{scope:o.__scopeSelect,children:d.jsx("div",{children:o.children})})}),u):null}return d.jsx(Ve,{...o,ref:n})});Le.displayName=J;var j=10,[ke,Y]=te(J),Ht="SelectContentImpl",Ve=t.forwardRef((o,n)=>{const{__scopeSelect:e,position:l="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:u,onPointerDownOutside:r,side:i,sideOffset:s,align:f,alignOffset:v,arrowPadding:w,collisionBoundary:I,collisionPadding:E,sticky:T,hideWhenDetached:c,avoidCollisions:g,...b}=o,p=z(J,e),[h,O]=t.useState(null),[A,oe]=t.useState(null),N=k(n,m=>O(m)),[D,K]=t.useState(null),[q,V]=t.useState(null),H=de(e),[U,B]=t.useState(!1),F=t.useRef(!1);t.useEffect(()=>{if(h)return St(h)},[h]),wt();const R=t.useCallback(m=>{const[C,..._]=H().map(S=>S.ref.current),[y]=_.slice(-1),x=document.activeElement;for(const S of m)if(S===x||(S==null||S.scrollIntoView({block:"nearest"}),S===C&&A&&(A.scrollTop=0),S===y&&A&&(A.scrollTop=A.scrollHeight),S==null||S.focus(),document.activeElement!==x))return},[H,A]),L=t.useCallback(()=>R([D,h]),[R,D,h]);t.useEffect(()=>{U&&L()},[U,L]);const{onOpenChange:W,triggerPointerDownPosRef:G}=p;t.useEffect(()=>{if(h){let m={x:0,y:0};const C=y=>{var x,S;m={x:Math.abs(Math.round(y.pageX)-(((x=G.current)==null?void 0:x.x)??0)),y:Math.abs(Math.round(y.pageY)-(((S=G.current)==null?void 0:S.y)??0))}},_=y=>{m.x<=10&&m.y<=10?y.preventDefault():h.contains(y.target)||W(!1),document.removeEventListener("pointermove",C),G.current=null};return G.current!==null&&(document.addEventListener("pointermove",C),document.addEventListener("pointerup",_,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",_,{capture:!0})}}},[h,W,G]),t.useEffect(()=>{const m=()=>W(!1);return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[W]);const[pe,ae]=et(m=>{const C=H().filter(x=>!x.disabled),_=C.find(x=>x.ref.current===document.activeElement),y=tt(C,m,_);y&&setTimeout(()=>y.ref.current.focus())}),fe=t.useCallback((m,C,_)=>{const y=!F.current&&!_;(p.value!==void 0&&p.value===C||y)&&(K(m),y&&(F.current=!0))},[p.value]),me=t.useCallback(()=>h==null?void 0:h.focus(),[h]),ee=t.useCallback((m,C,_)=>{const y=!F.current&&!_;(p.value!==void 0&&p.value===C||y)&&V(m)},[p.value]),le=l==="popper"?xe:He,ne=le===xe?{side:i,sideOffset:s,align:f,alignOffset:v,arrowPadding:w,collisionBoundary:I,collisionPadding:E,sticky:T,hideWhenDetached:c,avoidCollisions:g}:{};return d.jsx(ke,{scope:e,content:h,viewport:A,onViewportChange:oe,itemRefCallback:fe,selectedItem:D,onItemLeave:me,itemTextRefCallback:ee,focusSelectedItem:L,selectedItemText:q,position:l,isPositioned:U,searchRef:pe,children:d.jsx(bt,{as:yt,allowPinchZoom:!0,children:d.jsx(Ct,{asChild:!0,trapped:p.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:P(a,m=>{var C;(C=p.trigger)==null||C.focus({preventScroll:!0}),m.preventDefault()}),children:d.jsx(Tt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:r,onFocusOutside:m=>m.preventDefault(),onDismiss:()=>p.onOpenChange(!1),children:d.jsx(le,{role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed",dir:p.dir,onContextMenu:m=>m.preventDefault(),...b,...ne,onPlaced:()=>B(!0),ref:N,style:{display:"flex",flexDirection:"column",outline:"none",...b.style},onKeyDown:P(b.onKeyDown,m=>{const C=m.ctrlKey||m.altKey||m.metaKey;if(m.key==="Tab"&&m.preventDefault(),!C&&m.key.length===1&&ae(m.key),["ArrowUp","ArrowDown","Home","End"].includes(m.key)){let y=H().filter(x=>!x.disabled).map(x=>x.ref.current);if(["ArrowUp","End"].includes(m.key)&&(y=y.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const x=m.target,S=y.indexOf(x);y=y.slice(S+1)}setTimeout(()=>R(y)),m.preventDefault()}})})})})})})});Ve.displayName=Ht;var Bt="SelectItemAlignedPosition",He=t.forwardRef((o,n)=>{const{__scopeSelect:e,onPlaced:l,...a}=o,u=z(J,e),r=Y(J,e),[i,s]=t.useState(null),[f,v]=t.useState(null),w=k(n,N=>v(N)),I=de(e),E=t.useRef(!1),T=t.useRef(!0),{viewport:c,selectedItem:g,selectedItemText:b,focusSelectedItem:p}=r,h=t.useCallback(()=>{if(u.trigger&&u.valueNode&&i&&f&&c&&g&&b){const N=u.trigger.getBoundingClientRect(),D=f.getBoundingClientRect(),K=u.valueNode.getBoundingClientRect(),q=b.getBoundingClientRect();if(u.dir!=="rtl"){const x=q.left-D.left,S=K.left-x,X=N.left-S,Z=N.width+X,he=Math.max(Z,D.width),ge=window.innerWidth-j,ve=Ee(S,[j,Math.max(j,ge-he)]);i.style.minWidth=Z+"px",i.style.left=ve+"px"}else{const x=D.right-q.right,S=window.innerWidth-K.right-x,X=window.innerWidth-N.right-S,Z=N.width+X,he=Math.max(Z,D.width),ge=window.innerWidth-j,ve=Ee(S,[j,Math.max(j,ge-he)]);i.style.minWidth=Z+"px",i.style.right=ve+"px"}const V=I(),H=window.innerHeight-j*2,U=c.scrollHeight,B=window.getComputedStyle(f),F=parseInt(B.borderTopWidth,10),R=parseInt(B.paddingTop,10),L=parseInt(B.borderBottomWidth,10),W=parseInt(B.paddingBottom,10),G=F+R+U+W+L,pe=Math.min(g.offsetHeight*5,G),ae=window.getComputedStyle(c),fe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),ee=N.top+N.height/2-j,le=H-ee,ne=g.offsetHeight/2,m=g.offsetTop+ne,C=F+R+m,_=G-C;if(C<=ee){const x=V.length>0&&g===V[V.length-1].ref.current;i.style.bottom="0px";const S=f.clientHeight-c.offsetTop-c.offsetHeight,X=Math.max(le,ne+(x?me:0)+S+L),Z=C+X;i.style.height=Z+"px"}else{const x=V.length>0&&g===V[0].ref.current;i.style.top="0px";const X=Math.max(ee,F+c.offsetTop+(x?fe:0)+ne)+_;i.style.height=X+"px",c.scrollTop=C-ee+c.offsetTop}i.style.margin=`${j}px 0`,i.style.minHeight=pe+"px",i.style.maxHeight=H+"px",l==null||l(),requestAnimationFrame(()=>E.current=!0)}},[I,u.trigger,u.valueNode,i,f,c,g,b,u.dir,l]);$(()=>h(),[h]);const[O,A]=t.useState();$(()=>{f&&A(window.getComputedStyle(f).zIndex)},[f]);const oe=t.useCallback(N=>{N&&T.current===!0&&(h(),p==null||p(),T.current=!1)},[h,p]);return d.jsx(Wt,{scope:e,contentWrapper:i,shouldExpandOnScrollRef:E,onScrollButtonChange:oe,children:d.jsx("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:O},children:d.jsx(M.div,{...a,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});He.displayName=Bt;var Ft="SelectPopperPosition",xe=t.forwardRef((o,n)=>{const{__scopeSelect:e,align:l="start",collisionPadding:a=j,...u}=o,r=ue(e);return d.jsx(Et,{...r,...u,ref:n,align:l,collisionPadding:a,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=Ft;var[Wt,Te]=te(J,{}),Se="SelectViewport",Be=t.forwardRef((o,n)=>{const{__scopeSelect:e,nonce:l,...a}=o,u=Y(Se,e),r=Te(Se,e),i=k(n,u.onViewportChange),s=t.useRef(0);return d.jsxs(d.Fragment,{children:[d.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),d.jsx(ce.Slot,{scope:e,children:d.jsx(M.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:P(a.onScroll,f=>{const v=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:I}=r;if(I!=null&&I.current&&w){const E=Math.abs(s.current-v.scrollTop);if(E>0){const T=window.innerHeight-j*2,c=parseFloat(w.style.minHeight),g=parseFloat(w.style.height),b=Math.max(c,g);if(b<T){const p=b+E,h=Math.min(T,p),O=p-h;w.style.height=h+"px",w.style.bottom==="0px"&&(v.scrollTop=O>0?O:0,w.style.justifyContent="flex-end")}}}s.current=v.scrollTop})})})]})});Be.displayName=Se;var Fe="SelectGroup",[Kt,Ut]=te(Fe),We=t.forwardRef((o,n)=>{const{__scopeSelect:e,...l}=o,a=Ce();return d.jsx(Kt,{scope:e,id:a,children:d.jsx(M.div,{role:"group","aria-labelledby":a,...l,ref:n})})});We.displayName=Fe;var Ke="SelectLabel",Ue=t.forwardRef((o,n)=>{const{__scopeSelect:e,...l}=o,a=Ut(Ke,e);return d.jsx(M.div,{id:a.id,...l,ref:n})});Ue.displayName=Ke;var ie="SelectItem",[Gt,Ge]=te(ie),$e=t.forwardRef((o,n)=>{const{__scopeSelect:e,value:l,disabled:a=!1,textValue:u,...r}=o,i=z(ie,e),s=Y(ie,e),f=i.value===l,[v,w]=t.useState(u??""),[I,E]=t.useState(!1),T=k(n,p=>{var h;return(h=s.itemRefCallback)==null?void 0:h.call(s,p,l,a)}),c=Ce(),g=t.useRef("touch"),b=()=>{a||(i.onValueChange(l),i.onOpenChange(!1))};if(l==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return d.jsx(Gt,{scope:e,value:l,disabled:a,textId:c,isSelected:f,onItemTextChange:t.useCallback(p=>{w(h=>h||((p==null?void 0:p.textContent)??"").trim())},[]),children:d.jsx(ce.ItemSlot,{scope:e,value:l,disabled:a,textValue:v,children:d.jsx(M.div,{role:"option","aria-labelledby":c,"data-highlighted":I?"":void 0,"aria-selected":f&&I,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...r,ref:T,onFocus:P(r.onFocus,()=>E(!0)),onBlur:P(r.onBlur,()=>E(!1)),onClick:P(r.onClick,()=>{g.current!=="mouse"&&b()}),onPointerUp:P(r.onPointerUp,()=>{g.current==="mouse"&&b()}),onPointerDown:P(r.onPointerDown,p=>{g.current=p.pointerType}),onPointerMove:P(r.onPointerMove,p=>{var h;g.current=p.pointerType,a?(h=s.onItemLeave)==null||h.call(s):g.current==="mouse"&&p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(r.onPointerLeave,p=>{var h;p.currentTarget===document.activeElement&&((h=s.onItemLeave)==null||h.call(s))}),onKeyDown:P(r.onKeyDown,p=>{var O;((O=s.searchRef)==null?void 0:O.current)!==""&&p.key===" "||(Ot.includes(p.key)&&b(),p.key===" "&&p.preventDefault())})})})})});$e.displayName=ie;var re="SelectItemText",ze=t.forwardRef((o,n)=>{const{__scopeSelect:e,className:l,style:a,...u}=o,r=z(re,e),i=Y(re,e),s=Ge(re,e),f=Lt(re,e),[v,w]=t.useState(null),I=k(n,b=>w(b),s.onItemTextChange,b=>{var p;return(p=i.itemTextRefCallback)==null?void 0:p.call(i,b,s.value,s.disabled)}),E=v==null?void 0:v.textContent,T=t.useMemo(()=>d.jsx("option",{value:s.value,disabled:s.disabled,children:E},s.value),[s.disabled,s.value,E]),{onNativeOptionAdd:c,onNativeOptionRemove:g}=f;return $(()=>(c(T),()=>g(T)),[c,g,T]),d.jsxs(d.Fragment,{children:[d.jsx(M.span,{id:s.textId,...u,ref:I}),s.isSelected&&r.valueNode&&!r.valueNodeHasChildren?Ne.createPortal(u.children,r.valueNode):null]})});ze.displayName=re;var Ye="SelectItemIndicator",qe=t.forwardRef((o,n)=>{const{__scopeSelect:e,...l}=o;return Ge(Ye,e).isSelected?d.jsx(M.span,{"aria-hidden":!0,...l,ref:n}):null});qe.displayName=Ye;var we="SelectScrollUpButton",$t=t.forwardRef((o,n)=>{const e=Y(we,o.__scopeSelect),l=Te(we,o.__scopeSelect),[a,u]=t.useState(!1),r=k(n,l.onScrollButtonChange);return $(()=>{if(e.viewport&&e.isPositioned){let i=function(){const f=s.scrollTop>0;u(f)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),a?d.jsx(Xe,{...o,ref:r,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop-s.offsetHeight)}}):null});$t.displayName=we;var be="SelectScrollDownButton",zt=t.forwardRef((o,n)=>{const e=Y(be,o.__scopeSelect),l=Te(be,o.__scopeSelect),[a,u]=t.useState(!1),r=k(n,l.onScrollButtonChange);return $(()=>{if(e.viewport&&e.isPositioned){let i=function(){const f=s.scrollHeight-s.clientHeight,v=Math.ceil(s.scrollTop)<f;u(v)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),a?d.jsx(Xe,{...o,ref:r,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop+s.offsetHeight)}}):null});zt.displayName=be;var Xe=t.forwardRef((o,n)=>{const{__scopeSelect:e,onAutoScroll:l,...a}=o,u=Y("SelectScrollButton",e),r=t.useRef(null),i=de(e),s=t.useCallback(()=>{r.current!==null&&(window.clearInterval(r.current),r.current=null)},[]);return t.useEffect(()=>()=>s(),[s]),$(()=>{var v;const f=i().find(w=>w.ref.current===document.activeElement);(v=f==null?void 0:f.ref.current)==null||v.scrollIntoView({block:"nearest"})},[i]),d.jsx(M.div,{"aria-hidden":!0,...a,ref:n,style:{flexShrink:0,...a.style},onPointerDown:P(a.onPointerDown,()=>{r.current===null&&(r.current=window.setInterval(l,50))}),onPointerMove:P(a.onPointerMove,()=>{var f;(f=u.onItemLeave)==null||f.call(u),r.current===null&&(r.current=window.setInterval(l,50))}),onPointerLeave:P(a.onPointerLeave,()=>{s()})})}),Yt="SelectSeparator",Ze=t.forwardRef((o,n)=>{const{__scopeSelect:e,...l}=o;return d.jsx(M.div,{"aria-hidden":!0,...l,ref:n})});Ze.displayName=Yt;var ye="SelectArrow",qt=t.forwardRef((o,n)=>{const{__scopeSelect:e,...l}=o,a=ue(e),u=z(ye,e),r=Y(ye,e);return u.open&&r.position==="popper"?d.jsx(Pt,{...a,...l,ref:n}):null});qt.displayName=ye;function Qe(o){return o===""||o===void 0}var Je=t.forwardRef((o,n)=>{const{value:e,...l}=o,a=t.useRef(null),u=k(n,a),r=vt(e);return t.useEffect(()=>{const i=a.current,s=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(s,"value").set;if(r!==e&&v){const w=new Event("change",{bubbles:!0});v.call(i,e),i.dispatchEvent(w)}},[r,e]),d.jsx(xt,{asChild:!0,children:d.jsx("select",{...l,ref:u,defaultValue:e})})});Je.displayName="BubbleSelect";function et(o){const n=It(o),e=t.useRef(""),l=t.useRef(0),a=t.useCallback(r=>{const i=e.current+r;n(i),function s(f){e.current=f,window.clearTimeout(l.current),f!==""&&(l.current=window.setTimeout(()=>s(""),1e3))}(i)},[n]),u=t.useCallback(()=>{e.current="",window.clearTimeout(l.current)},[]);return t.useEffect(()=>()=>window.clearTimeout(l.current),[]),[e,a,u]}function tt(o,n,e){const a=n.length>1&&Array.from(n).every(f=>f===n[0])?n[0]:n,u=e?o.indexOf(e):-1;let r=Xt(o,Math.max(u,0));a.length===1&&(r=r.filter(f=>f!==e));const s=r.find(f=>f.textValue.toLowerCase().startsWith(a.toLowerCase()));return s!==e?s:void 0}function Xt(o,n){return o.map((e,l)=>o[(n+l)%o.length])}var Zt=Re,Qt=Me,Jt=Ae,eo=je,to=De,oo=Le,no=Be,ro=We,so=Ue,ao=$e,lo=ze,io=qe,co=Ze;const ot=t.createContext(null),uo=()=>{const o=t.useContext(ot);if(o===null)throw new Error("useSelectContext must be used within a SelectProvider");return o},nt=({children:o,size:n="base",...e})=>t.createElement(ot.Provider,{value:t.useMemo(()=>({size:n}),[n])},t.createElement(Zt,{...e},o));nt.displayName="Select";const rt=ro;rt.displayName="Select.Group";const st=Jt;st.displayName="Select.Value";const po=Nt({base:Q("bg-ui-bg-field shadow-buttons-neutral transition-fg flex w-full select-none items-center justify-between rounded-md outline-none","data-[placeholder]:text-ui-fg-muted text-ui-fg-base","hover:bg-ui-bg-field-hover","focus-visible:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active","aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error","invalid:border-ui-border-error invalid:shadow-borders-error","disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled","group/trigger"),variants:{size:{base:"h-8 px-2 py-1.5 txt-compact-small",small:"h-7 px-2 py-1 txt-compact-small"}}}),at=t.forwardRef(({className:o,children:n,...e},l)=>{const{size:a}=uo();return t.createElement(Qt,{ref:l,className:Q(po({size:a}),o),...e},n,t.createElement(eo,{asChild:!0},t.createElement(_t,{className:"text-ui-fg-muted group-disabled/trigger:text-ui-fg-disabled"})))});at.displayName="Select.Trigger";const lt=t.forwardRef(({className:o,children:n,position:e="popper",sideOffset:l=8,collisionPadding:a=24,...u},r)=>t.createElement(to,null,t.createElement(oo,{ref:r,className:Q("bg-ui-bg-component text-ui-fg-base shadow-elevation-flyout relative max-h-[200px] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg","data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",{"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1":e==="popper"},o),position:e,sideOffset:l,collisionPadding:a,...u},t.createElement(no,{className:Q("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")},n))));lt.displayName="Select.Content";const it=t.forwardRef(({className:o,...n},e)=>t.createElement(so,{ref:e,className:Q("txt-compact-xsmall-plus text-ui-fg-muted px-2 py-1.5",o),...n}));it.displayName="Select.Label";const ct=t.forwardRef(({className:o,children:n,...e},l)=>t.createElement(ao,{ref:l,className:Q("bg-ui-bg-component grid cursor-pointer grid-cols-[15px_1fr] gap-x-2 rounded-[4px] px-2 py-1.5 outline-none transition-colors txt-compact-small items-center","focus-visible:bg-ui-bg-component-hover","active:bg-ui-bg-component-pressed","data-[state=checked]:txt-compact-small-plus","disabled:text-ui-fg-disabled",o),...e},t.createElement("span",{className:"flex h-[15px] w-[15px] items-center justify-center"},t.createElement(io,{className:"flex items-center justify-center"},t.createElement(Rt,null))),t.createElement(lo,{className:"flex-1 truncate"},n)));ct.displayName="Select.Item";const dt=t.forwardRef(({className:o,...n},e)=>t.createElement(co,{ref:e,className:Q("bg-ui-border-component -mx-1 my-1 h-0.5 border-t border-t-ui-border-menu-top border-b border-b-ui-border-menu-bot",o),...n}));dt.displayName="Select.Separator";const vo=Object.assign(nt,{Group:rt,Value:st,Trigger:at,Content:lt,Label:it,Item:ct,Separator:dt});export{vo as S};
