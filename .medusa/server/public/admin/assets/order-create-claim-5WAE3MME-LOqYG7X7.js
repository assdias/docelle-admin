import{I as He}from"./chunk-QJ6SBVJ2-1PNLyXmX.js";import{R as _t,C as vt,O as jt}from"./chunk-P3DRE4IY-CC3Vm8Dh.js";import{M as Fe}from"./chunk-NNBHHXXN-CWN3fGpv.js";import{c as yt,d as It,e as Nt,u as St,f as Ct,g as Pt,h as Et,i as wt,j as qt,k as kt,l as At,m as Mt,n as Dt,o as Rt,p as Tt,q as Ot}from"./chunk-QFAUOMG6-CnMwXiBL.js";import{g as Le}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{c as Ht,o as Ft}from"./chunk-A2MEYV4D-CJckiX2P.js";import{D as Lt}from"./chunk-7I5DQGWY-CwOWioty.js";import{a as Z}from"./chunk-PDWBYQOW-Dmlh1vBq.js";import{R as Bt,u as zt,b as F,aS as Vt,aT as Ut,r as I,j as e,t as R,a8 as Gt,cZ as $t,w as Be,H as _e,B as ne,v as p,T as z,y as oe,aa as Qt,ab as Jt,s as ze,d1 as Xt,aB as Ve,I as ve,A as Ue,X as Pe,d2 as Zt,ac as O}from"./index-Bdq-MROr.js";import{P as Ge,a as $e}from"./chunk-IQBAUTU5-BuWJL9w3.js";import{u as Qe,_ as Je}from"./chunk-X3LH6P65-DKtaW8EL.js";import"./lodash-C2hq8pbl.js";import{C as re}from"./chunk-3LLQ6F7F-CELi5mf4.js";import{c as Ee}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-TMAS4ILY-BC55oDaY.js";import{u as Xe}from"./chunk-C76H5USB-CzxDnEm6.js";import{u as Ze}from"./chunk-BF3VCHXD-CqXBXYFf.js";import{K as Kt}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{R as Q,u as Wt,a as Ke,S as L}from"./chunk-AYRG2MQL-skn56JIp.js";import{u as Yt}from"./use-prompt-DOzEld64.js";import{P as we}from"./pencil-square-C74A9tK5.js";import{D as en}from"./document-text-D8qIGNve.js";import{X as We}from"./x-circle-D9kjlpcY.js";import{A as Ye}from"./alert-D6Ja4XqE.js";import{C as qe}from"./currency-input-DOyOQt-Q.js";import{c as et}from"./index-C_94Z_JG.js";import{C as le}from"./checkbox-VL5BGotg.js";import"./Trans-Dd1q9-dO.js";import"./chunk-P3UUX2T6-DP-uJG0A.js";import"./chunk-YEDAFXMB-DIxdwx5k.js";import"./chunk-AOFGTNG6-RI3t2jUY.js";import"./table-Q1A-VKSz.js";import"./chunk-WX2SMNCD-hJQYH_de.js";import"./plus-mini-BM4coq2a.js";import"./command-bar-AGFlR-E0.js";import"./index-Bbqi4xRY.js";import"./x-mark-mini-WtBfAEyd.js";import"./triangles-mini-B41M0pgA.js";import"./chunk-DV5RB7II-DtU2pt1o.js";import"./format-8mLkbana.js";import"./_isIndex-C4iy1AGn.js";import"./index-BAXH-T8O.js";import"./date-picker-CQaZo_tA.js";import"./clsx-B-dksMZM.js";import"./popover-wEuZpluk.js";import"./triangle-left-mini-BJGlQY3c.js";import"./prompt-Is_Gz9sa.js";import"./index.esm-GbMeVDv3.js";var te=et(),tn=i=>{const{t:l}=F();return I.useMemo(()=>[te.display({id:"select",header:({table:o})=>e.jsx(le,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:d=>o.toggleAllPageRowsSelected(!!d)}),cell:({row:o})=>{const d=o.getCanSelect();return e.jsx(le,{disabled:!d,checked:o.getIsSelected(),onCheckedChange:n=>o.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),te.display({id:"product",header:()=>e.jsx($e,{}),cell:({row:o})=>e.jsx(Ge,{product:{thumbnail:o.original.thumbnail,title:o.original.product_title}})}),te.accessor("variant.sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),te.accessor("variant.title",{header:l("fields.variant")}),te.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.quantity")})}),cell:({getValue:o,row:d})=>Le(d.original)}),te.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.price")})}),cell:({getValue:o})=>{const d=o()||0,n=Z(d,i);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:n})})}})],[l,i])},nn=()=>{const{t:i}=F();return[{key:"returnable_quantity",label:i("orders.returns.returnableQuantityLabel"),type:"number"},{key:"refundable_amount",label:i("orders.returns.refundableAmountLabel"),type:"number"},{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},sn=({pageSize:i=50,prefix:l})=>{const o=Xe(["q","offset","order","created_at","updated_at","returnable_quantity","refundable_amount"],l),{offset:d,created_at:n,updated_at:h,refundable_amount:m,returnable_quantity:_,...v}=o;return{searchParams:{...v,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:h?JSON.parse(h):void 0,refundable_amount:m?JSON.parse(m):void 0,returnable_quantity:_?JSON.parse(_):void 0},raw:o}},pe=50,ke="rit",an=({onSelectionChange:i,selectedItems:l,items:o,currencyCode:d})=>{const{t:n}=F(),[h,m]=I.useState(l.reduce((f,E)=>(f[E]=!0,f),{})),_=f=>{const E=typeof f=="function"?f(h):f;m(E),i(Object.keys(E))},{searchParams:v,raw:j}=sn({pageSize:pe,prefix:ke}),w=I.useMemo(()=>{const{order:f,offset:E,limit:C,q:V,created_at:K,updated_at:W,refundable_amount:J,returnable_quantity:U}=v;let M=o;if(V&&(M=M.filter(B=>{var G;return B.product_title.toLowerCase().includes(V.toLowerCase())||B.variant_title.toLowerCase().includes(V.toLowerCase())||((G=B.variant_sku)==null?void 0:G.toLowerCase().includes(V.toLowerCase()))})),f){const B=f[0]==="-"?"desc":"asc",G=f.replace("-","");M=on(M,G,B)}return K&&(M=Ae(M,K,"created_at")),W&&(M=Ae(M,W,"updated_at")),U&&(M=De(M,U,"returnable_quantity",d)),J&&(M=De(M,J,"refundable_amount",d)),M.slice(E,E+C)},[o,d,v]),q=tn(d),k=nn(),{table:S}=Qe({data:w,columns:q,count:w.length,enablePagination:!0,getRowId:f=>f.id,pageSize:pe,enableRowSelection:f=>Le(f.original)>0,rowSelection:{state:h,updater:_}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Je,{table:S,columns:q,pageSize:pe,count:w.length,filters:k,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:n("fields.product")},{key:"variant_title",label:n("fields.variant")},{key:"sku",label:n("fields.sku")},{key:"returnable_quantity",label:n("orders.fields.returnableQuantity")},{key:"refundable_amount",label:n("orders.fields.refundableAmount")}],prefix:ke,queryObject:j})})},on=(i,l,o)=>i.sort((d,n)=>{let h,m;return l==="product_title"?(h=d.product_title,m=n.product_title):l==="variant_title"?(h=d.variant_title,m=n.variant_title):l==="sku"?(h=d.variant_sku,m=n.variant_sku):l==="returnable_quantity"?(h=d.quantity-(d.returned_quantity||0),m=n.quantity-(n.returned_quantity||0)):l==="refundable_amount"&&(h=d.refundable||0,m=n.refundable||0),h<m?o==="asc"?-1:1:h>m?o==="asc"?1:-1:0}),Ae=(i,l,o)=>{const{gt:d,gte:n,lt:h,lte:m}=l;return i.filter(_=>{const v=new Date(_[o]);let j=!0;return d&&(j=j&&v>new Date(d)),n&&(j=j&&v>=new Date(n)),h&&(j=j&&v<new Date(h)),m&&(j=j&&v<=new Date(m)),j})},Me={eq:void 0,gt:void 0,gte:void 0,lt:void 0,lte:void 0},De=(i,l,o,d)=>{const{eq:n,gt:h,lt:m,gte:_,lte:v}=typeof l=="object"?{...Me,...l}:{...Me,eq:l};return i.filter(j=>{const w=j.quantity-(j.returned_quantity||0),q=Z(j.refundable||0,d),k=o==="returnable_quantity"?w:q;if(n)return k===n;let S=!0;return h&&(S=S&&k>h),_&&(S=S&&k>=_),m&&(S=S&&k<m),v&&(S=S&&k<=v),S})};function rn({item:i,previewItem:l,currencyCode:o,form:d,onRemove:n,onUpdate:h,index:m}){const{t:_}=F(),{return_reasons:v=[]}=Xt({fields:"+label"}),j=d.watch(`inbound_items.${m}`),w=typeof j.reason_id=="string",q=typeof j.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Ve,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(z,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(z,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.quantity`,render:({field:k})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ve,{...k,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:i.quantity,type:"number",onBlur:S=>{const f=S.target.value,E=f===""?null:Number(f);k.onChange(E),E&&h({quantity:E})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(z,{className:"txt-small text-ui-fg-subtle",children:_("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Fe,{currencyCode:o,amount:l.return_requested_total})}),e.jsx(Ue,{groups:[{actions:[!w&&{label:_("actions.addReason"),onClick:()=>d.setValue(`inbound_items.${m}.reason_id`,""),icon:e.jsx(vt,{})},!q&&{label:_("actions.addNote"),onClick:()=>d.setValue(`inbound_items.${m}.note`,""),icon:e.jsx(en,{})},{label:_("actions.remove"),onClick:n,icon:e.jsx(We,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[w&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:_("orders.returns.reason")}),e.jsx(p.Hint,{className:"!mt-1",children:_("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.reason_id`,render:({field:{ref:k,value:S,onChange:f,...E}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(re,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:S,onChange:C=>{h({reason_id:C}),f(C)},...E,options:v.map(C=>({label:C.label,value:C.id}))})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.reason_id`,null),h({reason_id:null})},children:e.jsx(Pe,{className:"text-ui-fg-muted"})})]})]}),q&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:_("orders.returns.note")}),e.jsx(p.Hint,{className:"!mt-1",children:_("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.note`,render:({field:{ref:k,...S}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ve,{...S,onBlur:()=>{S.onChange(S.value),h({internal_note:S.value})},className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.note`,null),h({internal_note:null})},children:e.jsx(Pe,{className:"text-ui-fg-muted"})})]})]})]})]})}var ln=O.object({inbound_items:O.array(O.object({item_id:O.string(),quantity:O.number(),reason_id:O.string().nullish(),note:O.string().nullish()})),outbound_items:O.array(O.object({item_id:O.string(),quantity:O.number()})),location_id:O.string().optional(),inbound_option_id:O.string().nullish(),outbound_option_id:O.string().nullish(),send_notification:O.boolean().optional()}),ae=et(),dn=i=>{const{t:l}=F();return I.useMemo(()=>[ae.display({id:"select",header:({table:o})=>e.jsx(le,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:d=>o.toggleAllPageRowsSelected(!!d)}),cell:({row:o})=>{const d=o.getCanSelect();return e.jsx(le,{disabled:!d,checked:o.getIsSelected(),onCheckedChange:n=>o.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),ae.display({id:"product",header:()=>e.jsx($e,{}),cell:({row:o})=>e.jsx(Ge,{product:o.original.product})}),ae.accessor("sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),ae.accessor("title",{header:l("fields.title")})],[l,i])},cn=()=>{const{t:i}=F();return[{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},un=({pageSize:i=50,prefix:l})=>{const o=Xe(["q","offset","order","created_at","updated_at"],l),{offset:d,created_at:n,updated_at:h,...m}=o;return{searchParams:{...m,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:h?JSON.parse(h):void 0},raw:o}},fe=50,Re="rit",mn=({onSelectionChange:i,selectedItems:l,currencyCode:o})=>{const{t:d}=F(),[n,h]=I.useState(l.reduce((f,E)=>(f[E]=!0,f),{})),m=f=>{const E=typeof f=="function"?f(n):f;h(E),i(Object.keys(E))},{searchParams:_,raw:v}=un({pageSize:fe,prefix:Re}),{variants:j=[],count:w}=Zt({..._,fields:"*inventory_items.inventory.location_levels,+inventory_quantity"}),q=dn(o),k=cn(),{table:S}=Qe({data:j,columns:q,count:w,enablePagination:!0,getRowId:f=>f.id,pageSize:fe,enableRowSelection:f=>!0,rowSelection:{state:n,updater:m}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Je,{table:S,columns:q,pageSize:fe,count:w,filters:k,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_id",label:d("fields.product")},{key:"title",label:d("fields.title")},{key:"sku",label:d("fields.sku")}],prefix:Re,queryObject:v})})};function pn({previewItem:i,currencyCode:l,form:o,onRemove:d,onUpdate:n,index:h}){const{t:m}=F();return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Ve,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(z,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(z,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:o.control,name:`outbound_items.${h}.quantity`,render:({field:_})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ve,{..._,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,type:"number",onBlur:v=>{const j=v.target.value,w=j===""?null:Number(j);_.onChange(w),w&&n({quantity:w})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(z,{className:"txt-small text-ui-fg-subtle",children:m("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Fe,{currencyCode:l,amount:i.total})}),e.jsx(Ue,{groups:[{actions:[{label:m("actions.remove"),onClick:d,icon:e.jsx(We,{})}].filter(Boolean)}]})]})]})})}var he=[],Te=[],fn=({order:i,preview:l,claim:o,form:d})=>{const{t:n}=F(),{setIsOpen:h}=Ke(),[m,_]=I.useState({}),{shipping_options:v=[]}=Ze({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),{mutateAsync:j}=Mt(o.id,i.id),{mutateAsync:w}=Dt(o.id,i.id),{mutateAsync:q}=Rt(o.id,i.id),{mutateAsync:k}=Tt(o.id,i.id),{mutateAsync:S}=Ot(o.id,i.id),f=I.useMemo(()=>{var y;return(y=l==null?void 0:l.items)==null?void 0:y.filter(g=>{var u;return!!((u=g.actions)!=null&&u.find(x=>x.claim_id===o.id&&x.action==="ITEM_ADD"))})},[l.items]),E=I.useMemo(()=>{var y;return new Map((y=i==null?void 0:i.items)==null?void 0:y.map(g=>[g.variant_id,g]))},[i.items]),{fields:C,append:V,remove:K,update:W}=Be({name:"outbound_items",control:d.control}),J=I.useMemo(()=>new Map(f.map(y=>[y.variant_id,y])),[f,C]);I.useEffect(()=>{const y={};f.forEach(g=>{const u=C.findIndex(x=>x.item_id===g.id);y[g.id]=!0,u>-1?C[u].quantity!==g.detail.quantity&&W(u,{...C[u],quantity:g.detail.quantity}):V({item_id:g.id,quantity:g.detail.quantity,variant_id:g.variant_id},{shouldFocus:!1})}),C.forEach((g,u)=>{g.item_id in y||K(u)})},[f]);const U=d.watch("location_id"),M=!C.length,B=async()=>{var y,g;he.length&&await q({items:he.map(u=>({variant_id:u,quantity:1}))},{onError:u=>{R.error(u.message)}});for(const u of Te){const x=(g=(y=f.find(N=>N.variant_id===u))==null?void 0:y.actions)==null?void 0:g.find(N=>N.action==="ITEM_ADD");x!=null&&x.id&&await S(x==null?void 0:x.id,{onError:N=>{R.error(N.message)}})}h("outbound-items",!1)},G=async y=>{const u=l.shipping_methods.filter(x=>{var D;const N=(D=x.actions)==null?void 0:D.find(A=>A.action==="SHIPPING_ADD"&&!A.return_id);return N&&!(N!=null&&N.return_id)}).filter(Boolean).map(x=>{var D;const N=(D=x.actions)==null?void 0:D.find(A=>A.action==="SHIPPING_ADD"&&!A.return_id);if(N)return w(N.id)});await Promise.all(u),await j({shipping_option_id:y},{onError:x=>{R.error(x.message)}})},de=I.useMemo(()=>U?!C.map(g=>{var x,N;const u=E.get(g.variant_id);return!(u!=null&&u.variant_id)||!(u!=null&&u.variant)||!((x=u.variant)!=null&&x.manage_inventory)?!0:(N=m[u.variant_id])==null?void 0:N.find(D=>D.location_id===U)}).every(Boolean):!1,[C,m,U]);return I.useEffect(()=>{(async()=>{const g={};if(!C.length)return g;const u=C.map(N=>N==null?void 0:N.variant_id).filter(Boolean);return(await ze.admin.productVariant.list({id:u},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(N=>{var D,A;g[N.id]=((A=(D=N.inventory)==null?void 0:D[0])==null?void 0:A.location_levels)||[]}),g})().then(g=>{_(g)})},[C]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(_e,{level:"h2",children:n("orders.returns.outbound")}),e.jsxs(L,{id:"outbound-items",children:[e.jsx(L.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(L.Content,{children:[e.jsx(L.Header,{}),e.jsx(mn,{selectedItems:C.map(y=>y.variant_id),currencyCode:i.currency_code,onSelectionChange:y=>{const g=C.map(u=>u.variant_id);he=y.filter(u=>!g.includes(u)),Te=g.filter(u=>!y.includes(u))}}),e.jsx(L.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(Q.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await B(),children:n("actions.save")},"submit-button")]})})})]})]})]}),M&&e.jsx(He,{}),C.map((y,g)=>J.get(y.variant_id)&&e.jsx(pn,{previewItem:J.get(y.variant_id),currencyCode:i.currency_code,form:d,onRemove:()=>{var x,N,D;const u=(D=(N=(x=f.find(A=>A.id===y.item_id))==null?void 0:x.actions)==null?void 0:N.find(A=>A.action==="ITEM_ADD"))==null?void 0:D.id;u&&S(u,{onError:A=>{R.error(A.message)}})},onUpdate:u=>{var N,D,A;const x=(A=(D=(N=f.find(X=>X.id===y.item_id))==null?void 0:N.actions)==null?void 0:D.find(X=>X.action==="ITEM_ADD"))==null?void 0:A.id;x&&k({...u,actionId:x},{onError:X=>{R.error(X.message)}})},index:g},y.id)),!M&&e.jsx("div",{className:"mt-8 flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.claims.outboundShipping")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.claims.outboundShippingHint")})]}),e.jsx(p.Field,{control:d.control,name:"outbound_option_id",render:({field:{value:y,onChange:g,...u}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:y??void 0,onChange:x=>{g(x),x&&G(x)},...u,options:v.map(x=>({label:x.name,value:x.id})),disabled:!v.length,noResultsPlaceholder:e.jsx(jt,{})})})})})]})}),de&&e.jsxs(Ye,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(z,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]})]})},xe=[],Oe=[],ge=!1,hn=({order:i,preview:l,claim:o,orderReturn:d})=>{var Ne;const{t:n}=F(),{handleSuccess:h}=Wt(),{setIsOpen:m}=Ke(),[_,v]=I.useState(!1),[j,w]=I.useState(!1),[q,k]=I.useState(0),[S,f]=I.useState(0),[E,C]=I.useState({}),{mutateAsync:V,isPending:K}=Nt(o.id,i.id),{mutateAsync:W,isPending:J}=St(o.id,i.id),{mutateAsync:U,isPending:M}=Ft((Ne=l==null?void 0:l.order_change)==null?void 0:Ne.return_id,i.id),{mutateAsync:B,isPending:G}=Ct(o.id,i.id),{mutateAsync:de,isPending:y}=Pt(o.id,i.id),{mutateAsync:g,isPending:u}=Et(o.id,i.id),{mutateAsync:x,isPending:N}=wt(o.id,i.id),{mutateAsync:D,isPending:A}=qt(o.id,i.id),{mutateAsync:X,isPending:tt}=kt(o.id,i.id),{mutateAsync:je,isPending:nt}=At(o.id,i.id),st=K||J||G||y||N||u||A||nt||tt||M,$=I.useMemo(()=>{var s;return(s=l==null?void 0:l.items)==null?void 0:s.filter(r=>{var t;return!!((t=r.actions)!=null&&t.find(a=>a.claim_id===o.id))})},[l.items]),se=$.filter(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="RETURN_ITEM"))}),ce=$.filter(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="ITEM_ADD"))}),ue=I.useMemo(()=>{var s;return new Map((s=i==null?void 0:i.items)==null?void 0:s.map(r=>[r.id,r]))},[i.items]),T=Gt({defaultValues:()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))}),r=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});return Promise.resolve({inbound_items:se.map(t=>{var c,b;const a=(c=t.actions)==null?void 0:c.find(P=>P.action==="RETURN_ITEM");return{item_id:t.id,variant_id:t.variant_id,quantity:t.detail.return_requested_quantity,note:a==null?void 0:a.internal_note,reason_id:(b=a==null?void 0:a.details)==null?void 0:b.reason_id}}),outbound_items:ce.map(t=>({item_id:t.id,variant_id:t.variant_id,quantity:t.detail.quantity})),inbound_option_id:s?s.shipping_option_id:"",outbound_option_id:r?r.shipping_option_id:"",location_id:d==null?void 0:d.location_id,send_notification:!1})},resolver:Jt(ln)}),Y=T.watch("location_id"),{stock_locations:it=[]}=$t({limit:999}),{shipping_options:at=[]}=Ze({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id",stock_location_id:Y},{enabled:!!Y}),ot=at.filter(s=>!!s.rules.find(r=>r.attribute==="is_return"&&r.value==="true")),me=l.shipping_methods.find(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="SHIPPING_ADD"&&!!t.return_id))}),ee=l.shipping_methods.find(s=>{var r;return!!((r=s.actions)!=null&&r.find(t=>t.action==="SHIPPING_ADD"&&!t.return_id))});I.useEffect(()=>{me&&k(me.total)},[me]),I.useEffect(()=>{ee&&f(ee.total)},[ee]);const{fields:H,append:rt,remove:lt,update:dt}=Be({name:"inbound_items",control:T.control}),ye=I.useMemo(()=>new Map($.map(s=>[s.id,s])),[$,H]);I.useEffect(()=>{const s={};se.forEach(r=>{var a,c;const t=H.findIndex(b=>b.item_id===r.id);if(s[r.id]=!0,t>-1){if(H[t].quantity!==r.detail.return_requested_quantity){const b=(a=r.actions)==null?void 0:a.find(P=>P.action==="RETURN_ITEM");dt(t,{...H[t],quantity:r.detail.return_requested_quantity,note:b==null?void 0:b.internal_note,reason_id:(c=b==null?void 0:b.details)==null?void 0:c.reason_id})}}else rt({item_id:r.id,quantity:r.detail.return_requested_quantity},{shouldFocus:!1})}),H.forEach((r,t)=>{r.item_id in s||lt(t)})},[$]),I.useEffect(()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))});s?T.setValue("inbound_option_id",s.shipping_option_id):T.setValue("inbound_option_id",null);const r=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});r?T.setValue("outbound_option_id",r.shipping_option_id):T.setValue("outbound_option_id",null)},[l.shipping_methods]),I.useEffect(()=>{T.setValue("location_id",d==null?void 0:d.location_id)},[d]);const ie=!se.length,Ie=!ce.length,ct=T.watch("inbound_option_id"),ut=T.watch("outbound_option_id"),mt=Yt(),pt=T.handleSubmit(async s=>{await mt({title:n("general.areYouSure"),description:n("orders.claims.confirmText"),confirmText:n("actions.continue"),cancelText:n("actions.cancel"),variant:"confirmation"})&&await V({no_notification:!s.send_notification},{onSuccess:()=>{R.success(n("orders.claims.toast.confirmedSuccessfully")),h()},onError:t=>{R.error(t.message)}})}),ft=async()=>{var s,r,t;xe.length&&await D({items:xe.map(a=>({id:a,quantity:1}))},{onError:a=>{R.error(a.message)}});for(const a of Oe){const c=(t=(r=(s=$.find(b=>b.id===a))==null?void 0:s.actions)==null?void 0:r.find(b=>b.action==="RETURN_ITEM"))==null?void 0:t.id;c&&await je(c,{onError:b=>{R.error(b.message)}})}m("inbound-items",!1)},ht=async s=>{await U({location_id:s})},xt=async s=>{const t=l.shipping_methods.filter(a=>{var b;const c=(b=a.actions)==null?void 0:b.find(P=>P.action==="SHIPPING_ADD"&&!!P.return_id);return c&&!(c!=null&&c.return_id)}).filter(Boolean).map(a=>{var b;const c=(b=a.actions)==null?void 0:b.find(P=>P.action==="SHIPPING_ADD"&&!!P.return_id);if(c)return x(c.id)});await Promise.all(t),await B({shipping_option_id:s},{onError:a=>{R.error(a.message)}})};I.useEffect(()=>{var s;_&&((s=document.getElementById("js-shipping-inbound-input"))==null||s.focus())},[_]),I.useEffect(()=>{var s;j&&((s=document.getElementById("js-shipping-outbound-input"))==null||s.focus())},[j]);const gt=I.useMemo(()=>Y?!H.map(r=>{var a,c;const t=ue.get(r.item_id);return!(t!=null&&t.variant_id)||!(t!=null&&t.variant)||!((a=t.variant)!=null&&a.manage_inventory)?!0:(c=E[t.variant_id])==null?void 0:c.find(b=>b.location_id===Y)}).every(Boolean):!1,[H,E,Y]);I.useEffect(()=>{(async()=>{const r={};if(!H.length)return r;const t=H.map(c=>c==null?void 0:c.variant_id).filter(Boolean);return(await ze.admin.productVariant.list({id:t},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(c=>{var b,P;r[c.id]=((P=(b=c.inventory)==null?void 0:b[0])==null?void 0:P.location_levels)||[]}),r})().then(r=>{C(r)})},[H]),I.useEffect(()=>()=>{ge&&(W(void 0,{onSuccess:()=>{R.success(n("orders.claims.actions.cancelClaim.successToast"))},onError:s=>{R.error(s.message)}}),ge=!1)},[]);const bt=I.useMemo(()=>{const s=l.shipping_methods.find(r=>{var t;return!!((t=r.actions)!=null&&t.find(a=>a.action==="SHIPPING_ADD"&&!!a.return_id))});return(s==null?void 0:s.total)||0},[l.shipping_methods]);return e.jsx(Q.Form,{form:T,children:e.jsxs(Kt,{onSubmit:pt,className:"flex h-full flex-col",children:[e.jsx(Q.Header,{}),e.jsx(Q.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(_e,{level:"h1",children:n("orders.claims.create")}),e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(_e,{level:"h2",children:n("orders.returns.inbound")}),e.jsxs(L,{id:"inbound-items",children:[e.jsx(L.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(L.Content,{children:[e.jsx(L.Header,{}),e.jsx(an,{items:i.items,selectedItems:H.map(s=>s.item_id),currencyCode:i.currency_code,onSelectionChange:s=>{const r=H.map(t=>t.item_id);xe=s.filter(t=>!r.includes(t)),Oe=r.filter(t=>!s.includes(t))}}),e.jsx(L.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(Q.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await ft(),children:n("actions.save")},"submit-button")]})})})]})]})]}),ie&&e.jsx(He,{}),H.map((s,r)=>ye.get(s.item_id)&&ue.get(s.item_id)&&e.jsx(rn,{item:ue.get(s.item_id),previewItem:ye.get(s.item_id),currencyCode:i.currency_code,form:T,onRemove:()=>{var a,c,b;const t=(b=(c=(a=$.find(P=>P.id===s.item_id))==null?void 0:a.actions)==null?void 0:c.find(P=>P.action==="RETURN_ITEM"))==null?void 0:b.id;t&&je(t,{onError:P=>{R.error(P.message)}})},onUpdate:t=>{var c,b;const a=(b=(c=$.find(P=>P.id===s.item_id))==null?void 0:c.actions)==null?void 0:b.find(P=>P.action==="RETURN_ITEM");a&&X({...t,actionId:a.id},{onError:P=>{var Se,Ce;(Se=a.details)!=null&&Se.quantity&&t.quantity&&T.setValue(`inbound_items.${r}.quantity`,(Ce=a.details)==null?void 0:Ce.quantity),R.error(P.message)}})},index:r},s.id)),!ie&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.returns.location")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.locationHint")})]}),e.jsx(p.Field,{control:T.control,name:"location_id",render:({field:{value:s,onChange:r,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{...t,value:s??void 0,onChange:a=>{r(a),ht(a)},options:(it??[]).map(a=>({label:a.name,value:a.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(p.Label,{children:[n("orders.returns.inboundShipping"),e.jsxs(z,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",n("fields.optional"),")"]})]}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.inboundShippingHint")})]}),e.jsx(p.Field,{control:T.control,name:"inbound_option_id",render:({field:{value:s,onChange:r,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:s??void 0,onChange:a=>{r(a),a&&xt(a)},...t,options:ot.map(a=>({label:a.name,value:a.id})),disabled:!Y,noResultsPlaceholder:e.jsx(_t,{})})})})})]})]}),gt&&e.jsxs(Ye,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(z,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]}),e.jsx(fn,{form:T,preview:l,order:i,claim:o}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:Z(se.reduce((s,r)=>{var a;const t=(a=r.actions)==null?void 0:a.find(c=>c.action==="RETURN_ITEM");return s=s+((t==null?void 0:t.amount)||0),s},0)*-1,i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:Z(ce.reduce((s,r)=>{var a;const t=(a=r.actions)==null?void 0:a.find(c=>c.action==="ITEM_ADD");return s=s+((t==null?void 0:t.amount)||0),s},0),i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!_&&e.jsx(oe,{onClick:()=>v(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:ie||!ct,children:e.jsx(we,{})}),_?e.jsx(qe,{id:"js-shipping-inbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&a.return_id&&(s=a.id)});const r=q===""?null:parseFloat(q);s&&de({actionId:s,custom_amount:r},{onError:t=>{R.error(t.message)}}),v(!1)},symbol:Ee[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:k,value:q,disabled:ie}):Z(bt,i.currency_code)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!j&&e.jsx(oe,{onClick:()=>w(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:Ie||!ut,children:e.jsx(we,{})}),j?e.jsx(qe,{id:"js-shipping-outbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&!a.return_id&&(s=a.id)});const r=S===""?null:parseFloat(S);s&&g({actionId:s,custom_amount:r},{onError:t=>{R.error(t.message)}}),w(!1)},symbol:Ee[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:f,value:S,disabled:Ie}):Z((ee==null?void 0:ee.amount)??0,i.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:n("orders.claims.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:Z(l.summary.pending_difference,i.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(p.Field,{control:T.control,name:"send_notification",render:({field:{onChange:s,value:r,...t}})=>e.jsxs(p.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(p.Control,{className:"mr-4 self-start",children:e.jsx(Qt,{className:"mt-[2px]",checked:!!r,onCheckedChange:s,...t})}),e.jsxs("div",{className:"block",children:[e.jsx(p.Label,{children:n("orders.returns.sendNotification")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.sendNotificationHint")})]})]}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(Q.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(Q.Close,{asChild:!0,children:e.jsx(ne,{type:"button",onClick:()=>ge=!0,variant:"secondary",size:"small",children:n("orders.claims.cancel.title")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",isLoading:st,children:n("orders.claims.confirm")},"submit-button")]})})})]})})},be=!1,cs=()=>{const{id:i}=Bt(),l=zt(),{t:o}=F(),{order:d}=Vt(i,{fields:Lt}),{order:n}=Ut(i),[h,m]=I.useState(),{mutateAsync:_}=yt(d.id),{claim:v}=It(h,void 0,{enabled:!!h}),{return:j}=Ht(v==null?void 0:v.return_id,void 0,{enabled:!!(v!=null&&v.return_id)});return I.useEffect(()=>{async function w(){if(!(be||!n)){if(n.order_change){n.order_change.change_type==="claim"?m(n.order_change.claim_id):(l(`/orders/${n.id}`,{replace:!0}),R.error(o("orders.claims.activeChangeError")));return}be=!0;try{const{claim:q}=await _({order_id:n.id,type:"replace"});m(q.id)}catch(q){R.error(q.message),l(`/orders/${n.id}`,{replace:!0})}finally{be=!1}}}w()},[n]),e.jsx(Q,{children:v&&n&&d&&e.jsx(hn,{order:d,claim:v,preview:n,orderReturn:j})})};export{cs as Component};
