import{H as j}from"./chunk-7OYLCEKK-B_mwpfFz.js";import{j as e,b as h,a8 as p,dt as f,t as n,B as i,H as C,T as g,v as s,I as b,ab as v,a1 as y,a3 as c}from"./index-Bdq-MROr.js";import{K as F}from"./chunk-6HTZNHPT-DU6r5KLe.js";import{R as o,u as S}from"./chunk-AYRG2MQL-skn56JIp.js";import"./prompt-Is_Gz9sa.js";var H=y({title:c().min(1),handle:c().optional()}),T=()=>{const{t:l}=h(),{handleSuccess:d}=S(),r=p({defaultValues:{title:"",handle:""},resolver:v(H)}),{mutateAsync:m,isPending:x}=f(),u=r.handleSubmit(async t=>{await m(t,{onSuccess:({collection:a})=>{d(`/collections/${a.id}`),n.success(l("collections.createSuccess"))},onError:a=>{n.error(a.message)}})});return e.jsx(o.Form,{form:r,children:e.jsxs(F,{onSubmit:u,children:[e.jsx(o.Header,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(o.Close,{asChild:!0,children:e.jsx(i,{size:"small",variant:"secondary",children:l("actions.cancel")})}),e.jsx(i,{size:"small",variant:"primary",type:"submit",isLoading:x,children:l("actions.create")})]})}),e.jsx(o.Body,{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{children:[e.jsx(C,{children:l("collections.createCollection")}),e.jsx(g,{size:"small",className:"text-ui-fg-subtle",children:l("collections.createCollectionHint")})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:r.control,name:"title",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.title")}),e.jsx(s.Control,{children:e.jsx(b,{autoComplete:"off",...t})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"handle",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,tooltip:l("collections.handleTooltip"),children:l("fields.handle")}),e.jsx(s.Control,{children:e.jsx(j,{...t})}),e.jsx(s.ErrorMessage,{})]})})]})]})})]})})},w=()=>e.jsx(o,{children:e.jsx(T,{})});export{w as Component};
