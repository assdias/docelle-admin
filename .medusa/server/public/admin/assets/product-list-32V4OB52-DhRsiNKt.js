import{u as b}from"./chunk-G3QXMPRB-C1Q-HUIl.js";import{a as v,j as t,s as P,p as C,q as T,b as f,c as D,d as L,e as S,H as k,B as c,L as l,O as q,r as w,k as A,f as E,A as z,t as m}from"./index-Bdq-MROr.js";import{u as Q,_}from"./chunk-X3LH6P65-DKtaW8EL.js";import"./lodash-C2hq8pbl.js";import{u as H,a as R}from"./chunk-IPEN5VX6-BPxUBoYO.js";import"./chunk-TMAS4ILY-BC55oDaY.js";import{S as B}from"./chunk-2RQLKDBF-DzIu_1_y.js";import{u as K}from"./use-prompt-DOzEld64.js";import{P as M}from"./pencil-square-C74A9tK5.js";import{T as N}from"./trash-bcUEvN9u.js";import{C as O}from"./container-BzJLPZyc.js";import{c as $}from"./index-C_94Z_JG.js";import"./chunk-IQBAUTU5-BuWJL9w3.js";import"./chunk-ADOCJB6L-ElwuTybw.js";import"./chunk-P3UUX2T6-DP-uJG0A.js";import"./chunk-YEDAFXMB-DIxdwx5k.js";import"./chunk-AOFGTNG6-RI3t2jUY.js";import"./table-Q1A-VKSz.js";import"./chunk-WX2SMNCD-hJQYH_de.js";import"./plus-mini-BM4coq2a.js";import"./command-bar-AGFlR-E0.js";import"./index-Bbqi4xRY.js";import"./chunk-C76H5USB-CzxDnEm6.js";import"./chunk-DV5RB7II-DtU2pt1o.js";import"./format-8mLkbana.js";import"./_isIndex-C4iy1AGn.js";import"./x-mark-mini-WtBfAEyd.js";import"./index-BAXH-T8O.js";import"./date-picker-CQaZo_tA.js";import"./clsx-B-dksMZM.js";import"./popover-wEuZpluk.js";import"./triangle-left-mini-BJGlQY3c.js";import"./Trans-Dd1q9-dO.js";import"./check-CizfQ2P9.js";import"./prompt-Is_Gz9sa.js";var F=()=>({queryKey:C.list({limit:20,offset:0}),queryFn:async()=>P.admin.product.list({limit:20,offset:0})}),we=e=>async()=>{const s=F();return T.getQueryData(s.queryKey)??await e.fetchQuery(s)},d=20,I=()=>{const{t:e}=f(),s=D(),r=L(),{searchParams:o,raw:i}=H({pageSize:d}),{products:u,count:a,isLoading:x,isError:y,error:h}=S({...o},{initialData:r,placeholderData:A}),g=R(),p=Y(),{table:j}=Q({data:u??[],columns:p,count:a,enablePagination:!0,pageSize:d,getRowId:n=>n.id});if(y)throw h;return t.jsxs(O,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(k,{level:"h2",children:e("products.domain")}),t.jsxs("div",{className:"flex items-center justify-center gap-x-2",children:[t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:`export${s.search}`,children:e("actions.export")})}),t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:"import",children:e("actions.import")})}),t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:"create",children:e("actions.create")})})]})]}),t.jsx(_,{table:j,columns:p,count:a,pageSize:d,filters:g,search:!0,pagination:!0,isLoading:x,queryObject:i,navigateTo:n=>`${n.original.id}`,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],noRecords:{message:e("products.list.noRecordsMessage")}}),t.jsx(q,{})]})},W=({product:e})=>{const{t:s}=f(),r=K(),{mutateAsync:o}=E(e.id),i=async()=>{await r({title:s("general.areYouSure"),description:s("products.deleteWarning",{title:e.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await o(void 0,{onSuccess:()=>{m.success(s("products.toasts.delete.success.header"),{description:s("products.toasts.delete.success.description",{title:e.title})})},onError:a=>{m.error(s("products.toasts.delete.error.header"),{description:a.message})}})};return t.jsx(z,{groups:[{actions:[{icon:t.jsx(M,{}),label:s("actions.edit"),to:`/products/${e.id}/edit`}]},{actions:[{icon:t.jsx(N,{}),label:s("actions.delete"),onClick:i}]}]})},G=$(),Y=()=>{const e=b();return w.useMemo(()=>[...e,G.display({id:"actions",cell:({row:r})=>t.jsx(W,{product:r.original})})],[e])},Ae=()=>{const{getWidgets:e}=v();return t.jsx(B,{widgets:{after:e("product.list.after"),before:e("product.list.before")},children:t.jsx(I,{})})};export{Ae as Component,we as productLoader};
