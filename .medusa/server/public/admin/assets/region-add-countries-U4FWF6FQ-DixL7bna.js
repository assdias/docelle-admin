import{u as k,a as T,b as E}from"./chunk-NOAFLTPV-c2GMjRzm.js";import{u as A,_ as I}from"./chunk-X3LH6P65-DKtaW8EL.js";import{R as F,e8 as z,j as o,b as B,r as g,a8 as M,cM as D,ea as H,t as x,B as S,ab as N,a1 as K,ad as L,a3 as O}from"./index-Bdq-MROr.js";import"./lodash-C2hq8pbl.js";import"./chunk-TMAS4ILY-BC55oDaY.js";import{K as V}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{R as n,u as q}from"./chunk-AYRG2MQL-skn56JIp.js";import{c as G}from"./index-C_94Z_JG.js";import{C as b}from"./checkbox-VL5BGotg.js";import"./chunk-C76H5USB-CzxDnEm6.js";import"./chunk-YEDAFXMB-DIxdwx5k.js";import"./chunk-AOFGTNG6-RI3t2jUY.js";import"./table-Q1A-VKSz.js";import"./chunk-WX2SMNCD-hJQYH_de.js";import"./plus-mini-BM4coq2a.js";import"./command-bar-AGFlR-E0.js";import"./index-Bbqi4xRY.js";import"./chunk-DV5RB7II-DtU2pt1o.js";import"./format-8mLkbana.js";import"./_isIndex-C4iy1AGn.js";import"./x-mark-mini-WtBfAEyd.js";import"./index-BAXH-T8O.js";import"./date-picker-CQaZo_tA.js";import"./clsx-B-dksMZM.js";import"./popover-wEuZpluk.js";import"./triangle-left-mini-BJGlQY3c.js";import"./prompt-Is_Gz9sa.js";var Q=K({countries:L(O()).min(1)}),m=50,p="ac",U=({region:r})=>{const{t:e}=B(),{handleSuccess:a}=q(),[t,l]=g.useState({}),u=M({defaultValues:{countries:[]},resolver:N(Q)}),{setValue:h}=u;g.useEffect(()=>{const s=Object.keys(t).filter(i=>t[i]);h("countries",s,{shouldDirty:!0,shouldTouch:!0})},[t,h]);const{searchParams:C,raw:j}=k({pageSize:m,prefix:p}),{countries:_,count:f}=T({countries:D.map((s,i)=>({display_name:s.display_name,name:s.name,id:i,iso_2:s.iso_2,iso_3:s.iso_3,num_code:s.num_code,region_id:null,region:{}})),...C}),y=Z(),{table:R}=A({data:_||[],columns:y,count:f,enablePagination:!0,enableRowSelection:s=>{var i;return((i=r.countries)==null?void 0:i.findIndex(c=>c.iso_2===s.original.iso_2))===-1},getRowId:s=>s.iso_2,pageSize:m,rowSelection:{state:t,updater:l},prefix:p}),{mutateAsync:v,isPending:P}=H(r.id),w=u.handleSubmit(async s=>{var c;const i=[...((c=r.countries)==null?void 0:c.map(d=>d.iso_2))??[],...s.countries];await v({countries:i},{onSuccess:()=>{x.success(e("regions.toast.countries")),a()},onError:d=>{x.error(d.message)}})});return o.jsx(n.Form,{form:u,children:o.jsxs(V,{onSubmit:w,className:"flex h-full flex-col overflow-hidden",children:[o.jsx(n.Header,{children:o.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[o.jsx(n.Close,{asChild:!0,children:o.jsx(S,{size:"small",variant:"secondary",children:e("actions.cancel")})}),o.jsx(S,{size:"small",isLoading:P,type:"submit",children:e("actions.add")})]})}),o.jsx(n.Body,{className:"overflow-hidden",children:o.jsx(I,{table:R,columns:y,pageSize:m,count:f,search:"autofocus",pagination:!0,layout:"fill",orderBy:[{key:"display_name",label:e("fields.name")},{key:"iso_2",label:e("fields.code")}],queryObject:j,prefix:p})})]})})},X=G(),Z=()=>{const r=E();return g.useMemo(()=>[X.display({id:"select",header:({table:e})=>o.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect();return o.jsx(b,{checked:e.getIsSelected()||a,disabled:a,onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}}),...r],[r])},_e=()=>{const{id:r}=F(),{region:e,isPending:a,isError:t,error:l}=z(r,{fields:"*payment_providers"});if(t)throw l;return o.jsx(n,{children:!a&&e&&o.jsx(U,{region:e})})};export{_e as Component};
